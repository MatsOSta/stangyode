import { readFile, rename, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const repo = resolve(dirname(fileURLToPath(import.meta.url)), '../..');
const MAX_QUERIES = 8;
const RESULTS_PER_QUERY = 5;
const REQUEST_TIMEOUT_MS = 10_000;

const args = process.argv.slice(2);
const option = (name, fallback) => {
  const index = args.indexOf(name);
  return index === -1 ? fallback : args[index + 1];
};
const inputPath = resolve(repo, option('--input', 'atlas/data/github-discovery.json'));
const outputPath = resolve(repo, option('--output', 'atlas/data/github-discovery.json'));
const attemptedAt = new Date(option('--now', new Date().toISOString())).toISOString().replace('.000Z', 'Z');
const apiBase = process.env.GITHUB_PUBLIC_API_URL || 'https://api.github.com';

const input = JSON.parse(await readFile(inputPath, 'utf8'));
if (input.schema !== 'stangyode.github-discovery/v1' || input.credentialsRequired !== false) {
  throw new Error('GitHub discovery input must be v1 and credential-free');
}
if (!Array.isArray(input.queries) || input.queries.length < 1 || input.queries.length > MAX_QUERIES) {
  throw new Error(`GitHub discovery requires 1-${MAX_QUERIES} bounded queries`);
}

const queries = [...input.queries].sort((a, b) => a.id.localeCompare(b.id));
const signals = [];
const failedQueries = [];
const completedQueryIds = new Set();
let rateLimit = null;

const parseRateLimit = (headers) => {
  const raw = [
    headers.get('x-ratelimit-limit'),
    headers.get('x-ratelimit-remaining'),
    headers.get('x-ratelimit-reset'),
  ];
  if (raw.some((value) => value === null || value.trim() === '')) return rateLimit;
  const [limit, remaining, reset] = raw.map(Number);
  if (![limit, remaining, reset].every(Number.isFinite) || !Number.isInteger(limit) || !Number.isInteger(remaining) || !Number.isInteger(reset) || limit < 1 || remaining < 0 || remaining > limit || reset < 1) return rateLimit;
  return { limit, remaining, resetAt: new Date(reset * 1000).toISOString().replace('.000Z', 'Z') };
};

const classifyFailure = (status, error) => {
  if (status === 403 || status === 429) return 'rate_limit';
  if (error?.name === 'TimeoutError') return 'timeout';
  if (error?.name === 'InvalidResponseError' || error instanceof SyntaxError) return 'invalid_response';
  return status ? 'http' : 'network';
};

const validRepository = (item) => item
  && typeof item.full_name === 'string'
  && /^https:\/\/github\.com\/[A-Za-z0-9_.-]+\/[A-Za-z0-9_.-]+\/?$/.test(item.html_url)
  && (item.description === null || typeof item.description === 'string')
  && Number.isInteger(item.stargazers_count) && item.stargazers_count >= 0
  && Number.isInteger(item.forks_count) && item.forks_count >= 0
  && (item.language === null || typeof item.language === 'string')
  && Array.isArray(item.topics) && item.topics.every((topic) => typeof topic === 'string')
  && typeof item.archived === 'boolean'
  && typeof item.pushed_at === 'string' && !Number.isNaN(Date.parse(item.pushed_at));

for (const query of queries) {
  if (rateLimit?.remaining === 0) {
    failedQueries.push({ id: query.id, class: 'rate_limit', httpStatus: 403 });
    break;
  }

  const url = new URL('/search/repositories', apiBase.endsWith('/') ? apiBase : `${apiBase}/`);
  url.searchParams.set('q', query.query);
  url.searchParams.set('sort', 'updated');
  url.searchParams.set('order', 'desc');
  url.searchParams.set('per_page', String(RESULTS_PER_QUERY));
  url.searchParams.set('page', '1');

  try {
    const response = await fetch(url, {
      headers: {
        accept: 'application/vnd.github+json',
        'user-agent': 'stangyode-frontier-radar',
        'x-github-api-version': '2022-11-28',
      },
      signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS),
    });
    rateLimit = parseRateLimit(response.headers);
    if (!response.ok) {
      failedQueries.push({ id: query.id, class: classifyFailure(response.status), httpStatus: response.status });
      break;
    }
    const payload = await response.json();
    if (!Array.isArray(payload.items) || !payload.items.slice(0, RESULTS_PER_QUERY).every(validRepository)) {
      const error = new Error('GitHub response contained invalid repository data');
      error.name = 'InvalidResponseError';
      throw error;
    }
    for (const item of payload.items.slice(0, RESULTS_PER_QUERY)) {
      signals.push({
        queryId: query.id,
        candidateId: query.candidateId,
        status: 'unverified',
        repository: {
          fullName: item.full_name,
          url: item.html_url,
          description: item.description ?? null,
          stars: item.stargazers_count,
          forks: item.forks_count,
          language: item.language ?? null,
          topics: [...(item.topics ?? [])].sort(),
          archived: item.archived,
          pushedAt: item.pushed_at,
        },
      });
    }
    completedQueryIds.add(query.id);
  } catch (error) {
    failedQueries.push({ id: query.id, class: classifyFailure(null, error), httpStatus: null });
    break;
  }
}

const success = failedQueries.length === 0 && completedQueryIds.size === queries.length;
const queryStates = new Map(failedQueries.map((failure) => [failure.id, failure]));
const output = {
  ...input,
  mode: 'public-api',
  credentialsRequired: false,
  liveFetch: true,
  queries: input.queries.map((query) => ({
    ...query,
    state: completedQueryIds.has(query.id) ? 'collected' : queryStates.has(query.id) ? 'failed' : 'not-collected',
  })),
  signals: success
    ? signals.sort((a, b) => a.queryId.localeCompare(b.queryId) || a.repository.fullName.localeCompare(b.repository.fullName))
    : [],
  lastRun: {
    status: success ? 'success' : 'failed',
    attemptedAt,
    completedAt: success ? attemptedAt : null,
    queryCount: queries.length,
    successfulQueries: completedQueryIds.size,
    failedQueries,
    rateLimit,
  },
};

const temporaryPath = `${outputPath}.tmp`;
await writeFile(temporaryPath, `${JSON.stringify(output, null, 2)}\n`, 'utf8');
await rename(temporaryPath, outputPath);

if (!success) {
  console.error(`GitHub public discovery failed: ${failedQueries.map((failure) => `${failure.id}:${failure.class}`).join(', ')}`);
  process.exitCode = 1;
} else {
  console.log(`Fetched ${output.signals.length} repositories from ${queries.length} bounded public GitHub queries; rate limit remaining ${rateLimit?.remaining ?? 'unknown'}.`);
}
