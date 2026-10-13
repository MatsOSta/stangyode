import { createHash } from 'node:crypto';
import { readFile, rename, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const repo = resolve(dirname(fileURLToPath(import.meta.url)), '../..');
const MAX_SOURCES = 12;
const MAX_GITHUB_QUERIES = 6;
const RESULTS_PER_QUERY = 10;
const MAX_FEED_BYTES = 2_000_000;
const REQUEST_TIMEOUT_MS = 12_000;

const args = process.argv.slice(2);
const option = (name, fallback) => {
  const index = args.indexOf(name);
  return index === -1 ? fallback : args[index + 1];
};
const inputPath = resolve(repo, option('--input', 'atlas/data/hype-discovery.json'));
const outputPath = resolve(repo, option('--output', 'atlas/data/hype-discovery.json'));
const fixedNow = option('--now', null);
const now = new Date(fixedNow ?? new Date().toISOString());
const timestamp = now.toISOString().replace('.000Z', 'Z');
const apiBase = process.env.GITHUB_PUBLIC_API_URL || 'https://api.github.com';

const input = JSON.parse(await readFile(inputPath, 'utf8'));
const fail = (message) => { throw new Error(message); };
const isLoopbackHttp = (url) => url.protocol === 'http:' && ['127.0.0.1', 'localhost', '::1'].includes(url.hostname);
const secureUrl = (value) => {
  try {
    const url = new URL(value);
    return url.protocol === 'https:' || isLoopbackHttp(url);
  } catch {
    return false;
  }
};

if (input.schema !== 'stangyode.hype-discovery/v1' || input.credentialsRequired !== false) {
  fail('Hype discovery input must be v1 and credential-free');
}
if (!Number.isInteger(input.windowDays) || input.windowDays < 1 || input.windowDays > 90) {
  fail('Hype discovery windowDays must be 1-90');
}
if (!Array.isArray(input.sources) || input.sources.length < 1 || input.sources.length > MAX_SOURCES) {
  fail(`Hype discovery requires 1-${MAX_SOURCES} observer sources`);
}
if (!Array.isArray(input.githubQueries) || input.githubQueries.length < 1 || input.githubQueries.length > MAX_GITHUB_QUERIES) {
  fail(`Hype discovery requires 1-${MAX_GITHUB_QUERIES} broad GitHub queries`);
}
const sourceIds = new Set();
for (const source of input.sources) {
  if (typeof source?.id !== 'string' || !source.id.trim() || sourceIds.has(source.id)
    || typeof source.name !== 'string' || !source.name.trim()
    || !['influencer', 'newsletter', 'community', 'analyst'].includes(source.kind)
    || typeof source.url !== 'string' || !secureUrl(source.url)) {
    fail(`Invalid observer source ${source?.id}; an HTTPS source URL is required`);
  }
  sourceIds.add(source.id);
}
const queryIds = new Set();
for (const query of input.githubQueries) {
  if (typeof query?.id !== 'string' || !query.id.trim() || queryIds.has(query.id)
    || typeof query.query !== 'string' || !query.query.trim()) {
    fail(`Invalid broad GitHub query ${query?.id}`);
  }
  queryIds.add(query.id);
}

const since = new Date(now.getTime() - input.windowDays * 86_400_000);
const sinceDate = since.toISOString().slice(0, 10);
const failures = [];
const completedSources = new Set();
const completedQueries = new Set();
let rateLimit = null;

const decode = (value) => String(value ?? '')
  .replace(/^<!\[CDATA\[|\]\]>$/g, '')
  .replaceAll('&amp;', '&')
  .replaceAll('&lt;', '<')
  .replaceAll('&gt;', '>')
  .replaceAll('&quot;', '"')
  .replaceAll('&#39;', "'")
  .replace(/&#(\d+);/g, (_match, code) => String.fromCodePoint(Number(code)))
  .trim();
const tag = (block, names) => {
  for (const name of names) {
    const match = block.match(new RegExp(`<${name}(?:\\s[^>]*)?>([\\s\\S]*?)<\\/${name}>`, 'i'));
    if (match) return decode(match[1]);
  }
  return '';
};
const entryLink = (block) => {
  const href = block.match(/<link\b[^>]*\bhref=["']([^"']+)["'][^>]*>/i)?.[1];
  return decode(href || tag(block, ['link']));
};
const githubNames = (block) => [...new Set([...decode(block).matchAll(/https:\/\/github\.com\/([A-Za-z0-9_.-]+\/[A-Za-z0-9_.-]+)/g)]
  .map((match) => match[1].replace(/[).,;:]+$/, '')))].sort();
const parseFeed = (xml, source) => {
  const blocks = [...xml.matchAll(/<(item|entry)\b[^>]*>([\s\S]*?)<\/\1>/gi)].map((match) => match[2]);
  return blocks.slice(0, 50).flatMap((block) => {
    const title = tag(block, ['title']);
    const url = entryLink(block);
    const publishedRaw = tag(block, ['published', 'updated', 'pubDate', 'dc:date']);
    const published = new Date(publishedRaw);
    if (!title || !secureUrl(url) || Number.isNaN(published.getTime()) || published < since || published > now) return [];
    return [{
      id: createHash('sha256').update(`${source.id}\n${url}`).digest('hex').slice(0, 16),
      sourceId: source.id,
      title: title.replace(/<[^>]+>/g, '').trim(),
      url,
      publishedAt: published.toISOString().replace('.000Z', 'Z'),
      githubRepositories: githubNames(block),
      firstSeenAt: timestamp,
      lastSeenAt: timestamp,
    }];
  });
};
const classifyFailure = (status, error) => {
  if (status === 403 || status === 429) return 'rate_limit';
  if (error?.name === 'TimeoutError') return 'timeout';
  if (error?.name === 'InvalidResponseError' || error instanceof SyntaxError) return 'invalid_response';
  return status ? 'http' : 'network';
};
const parseRateLimit = (headers) => {
  const values = ['x-ratelimit-limit', 'x-ratelimit-remaining', 'x-ratelimit-reset'].map((name) => headers.get(name));
  if (values.some((value) => value === null || value.trim() === '')) return rateLimit;
  const [limit, remaining, reset] = values.map(Number);
  if (![limit, remaining, reset].every(Number.isInteger) || limit < 1 || remaining < 0 || remaining > limit || reset < 1) return rateLimit;
  return { limit, remaining, resetAt: new Date(reset * 1000).toISOString().replace('.000Z', 'Z') };
};
const fetchText = async (initialUrl) => {
  let currentUrl = initialUrl;
  for (let redirects = 0; redirects <= 3; redirects += 1) {
    const response = await fetch(currentUrl, {
      headers: { accept: 'application/atom+xml, application/rss+xml, application/xml, text/xml;q=0.9', 'user-agent': 'stangyode-hype-discovery' },
      redirect: 'manual',
      signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS),
    });
    if (response.status >= 300 && response.status < 400) {
      const location = response.headers.get('location');
      if (!location || redirects === 3) {
        const error = new Error('Observer feed redirect is invalid or excessive');
        error.name = 'InvalidResponseError';
        throw error;
      }
      const redirectUrl = new URL(location, currentUrl);
      if (redirectUrl.protocol !== 'https:') {
        const error = new Error('Observer feed redirect must remain HTTPS');
        error.name = 'InvalidResponseError';
        throw error;
      }
      currentUrl = redirectUrl.toString();
      continue;
    }
    if (!response.ok) return { response, text: null };
    const declaredSize = Number(response.headers.get('content-length'));
    if (Number.isFinite(declaredSize) && declaredSize > MAX_FEED_BYTES) {
      const error = new Error('Observer feed exceeds size limit');
      error.name = 'InvalidResponseError';
      throw error;
    }
    const text = await response.text();
    if (Buffer.byteLength(text, 'utf8') > MAX_FEED_BYTES) {
      const error = new Error('Observer feed exceeds size limit');
      error.name = 'InvalidResponseError';
      throw error;
    }
    return { response, text };
  }
  throw new Error('Unreachable observer feed redirect state');
};

const fetchedMentions = [];
for (const source of input.sources) {
  try {
    const { response, text } = await fetchText(source.url);
    if (!response.ok) {
      failures.push({ id: source.id, kind: 'source', class: classifyFailure(response.status), httpStatus: response.status });
      continue;
    }
    fetchedMentions.push(...parseFeed(text, source));
    completedSources.add(source.id);
  } catch (error) {
    failures.push({ id: source.id, kind: 'source', class: classifyFailure(null, error), httpStatus: null });
  }
}

const validRepository = (item) => item
  && typeof item.full_name === 'string'
  && /^[A-Za-z0-9_.-]+\/[A-Za-z0-9_.-]+$/.test(item.full_name)
  && item.html_url === `https://github.com/${item.full_name}`
  && (item.description === null || typeof item.description === 'string')
  && Number.isInteger(item.stargazers_count) && item.stargazers_count >= 0
  && Number.isInteger(item.forks_count) && item.forks_count >= 0
  && typeof item.created_at === 'string' && !Number.isNaN(Date.parse(item.created_at))
  && typeof item.pushed_at === 'string' && !Number.isNaN(Date.parse(item.pushed_at))
  && Array.isArray(item.topics) && item.topics.every((topic) => typeof topic === 'string')
  && item.archived === false;

const found = new Map();
for (const query of input.githubQueries) {
  if (rateLimit?.remaining === 0) {
    failures.push({ id: query.id, kind: 'github-query', class: 'rate_limit', httpStatus: 403 });
    continue;
  }
  const url = new URL('/search/repositories', apiBase.endsWith('/') ? apiBase : `${apiBase}/`);
  url.searchParams.set('q', `${query.query} created:>=${sinceDate} archived:false`);
  url.searchParams.set('sort', 'stars');
  url.searchParams.set('order', 'desc');
  url.searchParams.set('per_page', String(RESULTS_PER_QUERY));
  url.searchParams.set('page', '1');
  try {
    const response = await fetch(url, {
      headers: { accept: 'application/vnd.github+json', 'user-agent': 'stangyode-hype-discovery', 'x-github-api-version': '2022-11-28' },
      signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS),
    });
    rateLimit = parseRateLimit(response.headers);
    if (!response.ok) {
      failures.push({ id: query.id, kind: 'github-query', class: classifyFailure(response.status), httpStatus: response.status });
      continue;
    }
    const payload = await response.json();
    if (!Array.isArray(payload.items) || !payload.items.slice(0, RESULTS_PER_QUERY).every(validRepository)) {
      const error = new Error('GitHub response contained invalid repository data');
      error.name = 'InvalidResponseError';
      throw error;
    }
    for (const item of payload.items.slice(0, RESULTS_PER_QUERY)) {
      const current = found.get(item.full_name) ?? { item, queryIds: new Set() };
      current.queryIds.add(query.id);
      found.set(item.full_name, current);
    }
    completedQueries.add(query.id);
  } catch (error) {
    failures.push({ id: query.id, kind: 'github-query', class: classifyFailure(null, error), httpStatus: null });
  }
}

const oldMentions = new Map((input.mentions ?? []).map((mention) => [mention.id, mention]));
for (const mention of fetchedMentions) {
  const previous = oldMentions.get(mention.id);
  oldMentions.set(mention.id, previous ? { ...mention, firstSeenAt: previous.firstSeenAt } : mention);
}
const mentions = [...oldMentions.values()].sort((left, right) => right.publishedAt.localeCompare(left.publishedAt) || left.id.localeCompare(right.id));
const mentionSourcesByRepository = new Map();
for (const mention of mentions.filter((item) => Date.parse(item.publishedAt) >= since.getTime())) {
  for (const fullName of mention.githubRepositories) {
    const sources = mentionSourcesByRepository.get(fullName) ?? new Set();
    sources.add(mention.sourceId);
    mentionSourcesByRepository.set(fullName, sources);
  }
}

const oldRepositories = new Map((input.repositories ?? []).map((item) => [item.fullName, item]));
const repositories = new Map([...oldRepositories].map(([fullName, item]) => {
  const mentioningSources = [...(mentionSourcesByRepository.get(fullName) ?? [])].sort();
  return [fullName, {
    ...item,
    metrics: { ...item.metrics, sourceMentions: mentioningSources.length, active: false },
    discoveredBy: { ...item.discoveredBy, sources: mentioningSources },
  }];
}));
const rounded = (value) => Math.round(value * 100) / 100;
for (const [fullName, { item, queryIds: discoveredQueries }] of found) {
  const previous = oldRepositories.get(fullName);
  const observations = [...(previous?.observations ?? [])].filter((observation) => observation.at !== timestamp);
  observations.push({ at: timestamp, stars: item.stargazers_count, forks: item.forks_count });
  observations.sort((left, right) => left.at.localeCompare(right.at));
  const prior = observations.length > 1 ? observations.at(-2) : null;
  const elapsedHours = prior ? rounded((Date.parse(timestamp) - Date.parse(prior.at)) / 3_600_000) : null;
  const ageDays = Math.max(1, rounded((Date.parse(timestamp) - Date.parse(item.created_at)) / 86_400_000));
  const mentioningSources = [...(mentionSourcesByRepository.get(fullName) ?? [])].sort();
  repositories.set(fullName, {
    fullName,
    url: item.html_url,
    description: item.description ?? null,
    stars: item.stargazers_count,
    forks: item.forks_count,
    createdAt: new Date(item.created_at).toISOString().replace('.000Z', 'Z'),
    pushedAt: new Date(item.pushed_at).toISOString().replace('.000Z', 'Z'),
    topics: [...item.topics].sort(),
    observations,
    metrics: {
      ageDays,
      starsPerDay: rounded(item.stargazers_count / ageDays),
      starsDelta: prior ? item.stargazers_count - prior.stars : null,
      forksDelta: prior ? item.forks_count - prior.forks : null,
      elapsedHours,
      sourceMentions: mentioningSources.length,
      active: true,
    },
    discoveredBy: { queries: [...discoveredQueries].sort(), sources: mentioningSources },
  });
}
const repositoryList = [...repositories.values()].sort((left, right) => Number(right.metrics.active) - Number(left.metrics.active)
  || right.metrics.sourceMentions - left.metrics.sourceMentions
  || (right.metrics.starsDelta ?? -1) - (left.metrics.starsDelta ?? -1)
  || right.metrics.starsPerDay - left.metrics.starsPerDay
  || right.stars - left.stars
  || left.fullName.localeCompare(right.fullName));

const successfulCollectors = completedSources.size + completedQueries.size;
const status = failures.length === 0 ? 'success' : successfulCollectors > 0 ? 'partial' : 'failed';
const output = {
  ...input,
  mode: 'public-fetch',
  liveFetch: true,
  sources: input.sources.map((source) => ({ ...source, state: completedSources.has(source.id) ? 'collected' : 'failed' })),
  githubQueries: input.githubQueries.map((query) => ({ ...query, state: completedQueries.has(query.id) ? 'collected' : 'failed' })),
  mentions,
  repositories: repositoryList,
  lastRun: {
    status,
    attemptedAt: timestamp,
    completedAt: timestamp,
    windowStart: `${sinceDate}T00:00:00Z`,
    sourceCount: input.sources.length,
    successfulSources: completedSources.size,
    githubQueryCount: input.githubQueries.length,
    successfulGithubQueries: completedQueries.size,
    failures,
    rateLimit,
  },
};
const temporaryPath = `${outputPath}.tmp`;
await writeFile(temporaryPath, `${JSON.stringify(output, null, 2)}\n`, 'utf8');
await rename(temporaryPath, outputPath);
console.log(`Hype discovery ${status}: ${fetchedMentions.length} fresh mentions, ${found.size} current repositories, ${failures.length} failures.`);
if (status === 'failed') process.exitCode = 1;
