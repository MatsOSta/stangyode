import assert from 'node:assert/strict';
import { mkdtemp, readFile, writeFile } from 'node:fs/promises';
import { createServer } from 'node:http';
import { tmpdir } from 'node:os';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawn } from 'node:child_process';
import test from 'node:test';

const repo = resolve(dirname(fileURLToPath(import.meta.url)), '../..');
const script = resolve(repo, 'atlas/scripts/fetch-hype-discovery.mjs');

const inputData = (baseUrl) => ({
  schema: 'stangyode.hype-discovery/v1',
  mode: 'configured-sources',
  credentialsRequired: false,
  liveFetch: false,
  policy: { en: 'Attention is evidence of attention, not truth.', ja: '注目は注目の証拠であり、真実の証拠ではない。' },
  windowDays: 14,
  sources: [
    { id: 'observer-one', name: 'Observer One', kind: 'influencer', url: `${baseUrl}/feed`, state: 'not-collected' },
  ],
  githubQueries: [
    { id: 'broad-ai', query: 'AI', state: 'not-collected' },
  ],
  mentions: [],
  repositories: [
    {
      fullName: 'fast/riser',
      url: 'https://github.com/fast/riser',
      description: 'Earlier description',
      stars: 80,
      forks: 8,
      createdAt: '2026-10-08T00:00:00Z',
      pushedAt: '2026-10-10T00:00:00Z',
      topics: ['reverse-engineering'],
      observations: [{ at: '2026-10-11T00:00:00Z', stars: 80, forks: 8 }],
      metrics: { ageDays: 3, starsPerDay: 26.67, starsDelta: null, forksDelta: null, elapsedHours: null, sourceMentions: 0, active: true },
      discoveredBy: { queries: ['broad-ai'], sources: [] },
    },
  ],
  lastRun: null,
});

const run = ({ input, output, endpoint, now = '2026-10-12T00:00:00Z' }) => new Promise((resolveRun) => {
  const child = spawn(process.execPath, [script, '--input', input, '--output', output, '--now', now], {
    cwd: repo,
    env: { ...process.env, GITHUB_PUBLIC_API_URL: endpoint },
  });
  let stdout = '';
  let stderr = '';
  child.stdout.setEncoding('utf8').on('data', (chunk) => { stdout += chunk; });
  child.stderr.setEncoding('utf8').on('data', (chunk) => { stderr += chunk; });
  child.on('close', (status) => resolveRun({ status, stdout, stderr }));
});

const repository = {
  full_name: 'fast/riser',
  html_url: 'https://github.com/fast/riser',
  description: 'AI reverse engineering agent',
  stargazers_count: 140,
  forks_count: 14,
  created_at: '2026-10-08T00:00:00Z',
  pushed_at: '2026-10-12T00:00:00Z',
  topics: ['ai', 'reverse-engineering'],
  archived: false,
};

test('scrapes observer feeds, discovers unfamiliar repositories, and measures momentum', async (t) => {
  const dir = await mkdtemp(join(tmpdir(), 'hype-discovery-'));
  const input = join(dir, 'input.json');
  const output = join(dir, 'output.json');
  const requests = [];
  const server = createServer((request, response) => {
    const url = new URL(request.url, 'http://localhost');
    requests.push({ path: url.pathname, authorization: request.headers.authorization, query: url.searchParams.get('q'), sort: url.searchParams.get('sort') });
    if (url.pathname === '/feed') {
      response.writeHead(200, { 'content-type': 'application/rss+xml' });
      response.end(`<?xml version="1.0"?><rss><channel><item><title>Reverse engineering agents are taking off</title><link>https://observer.example/reverse-agents</link><pubDate>Sun, 11 Oct 2026 12:00:00 GMT</pubDate><description>See https://github.com/fast/riser and https://github.com/another/new-tool.</description></item></channel></rss>`);
      return;
    }
    if (url.pathname === '/search/repositories') {
      response.writeHead(200, {
        'content-type': 'application/json',
        'x-ratelimit-limit': '10',
        'x-ratelimit-remaining': '9',
        'x-ratelimit-reset': '1791766800',
      });
      response.end(JSON.stringify({ items: [repository] }));
      return;
    }
    response.writeHead(404).end();
  });
  await new Promise((resolveListen) => server.listen(0, '127.0.0.1', resolveListen));
  t.after(() => { if (server.listening) server.close(); });
  const endpoint = `http://127.0.0.1:${server.address().port}`;
  await writeFile(input, `${JSON.stringify(inputData(endpoint), null, 2)}\n`);

  const result = await run({ input, output, endpoint });
  assert.equal(result.status, 0, result.stderr);
  const data = JSON.parse(await readFile(output, 'utf8'));
  assert.equal(data.lastRun.status, 'success');
  assert.equal(data.mentions.length, 1);
  assert.deepEqual(data.mentions[0].githubRepositories, ['another/new-tool', 'fast/riser']);
  assert.equal(data.repositories[0].fullName, 'fast/riser');
  assert.deepEqual(data.repositories[0].observations, [
    { at: '2026-10-11T00:00:00Z', stars: 80, forks: 8 },
    { at: '2026-10-12T00:00:00Z', stars: 140, forks: 14 },
  ]);
  assert.deepEqual(data.repositories[0].metrics, {
    ageDays: 4,
    starsPerDay: 35,
    starsDelta: 60,
    forksDelta: 6,
    elapsedHours: 24,
    sourceMentions: 1,
    active: true,
  });
  assert.deepEqual(data.repositories[0].discoveredBy, { queries: ['broad-ai'], sources: ['observer-one'] });
  assert.ok(requests.every(({ authorization }) => authorization === undefined));
  assert.equal(requests.find(({ path }) => path === '/search/repositories').sort, 'stars');
  assert.match(requests.find(({ path }) => path === '/search/repositories').query, /created:>=2026-09-28/);
});

test('keeps successful observations and records partial source failure', async (t) => {
  const dir = await mkdtemp(join(tmpdir(), 'hype-discovery-partial-'));
  const input = join(dir, 'input.json');
  const output = join(dir, 'output.json');
  const server = createServer((request, response) => {
    const url = new URL(request.url, 'http://localhost');
    if (url.pathname === '/feed') {
      response.writeHead(503, { 'content-type': 'text/plain' });
      response.end('unavailable');
      return;
    }
    response.writeHead(200, {
      'content-type': 'application/json',
      'x-ratelimit-limit': '10',
      'x-ratelimit-remaining': '9',
      'x-ratelimit-reset': '1791766800',
    });
    response.end(JSON.stringify({ items: [repository] }));
  });
  await new Promise((resolveListen) => server.listen(0, '127.0.0.1', resolveListen));
  t.after(() => { if (server.listening) server.close(); });
  const endpoint = `http://127.0.0.1:${server.address().port}`;
  await writeFile(input, `${JSON.stringify(inputData(endpoint), null, 2)}\n`);

  const result = await run({ input, output, endpoint });
  assert.equal(result.status, 0, result.stderr);
  const data = JSON.parse(await readFile(output, 'utf8'));
  assert.equal(data.lastRun.status, 'partial');
  assert.deepEqual(data.lastRun.failures, [{ id: 'observer-one', kind: 'source', class: 'http', httpStatus: 503 }]);
  assert.equal(data.sources[0].state, 'failed');
  assert.equal(data.githubQueries[0].state, 'collected');
  assert.equal(data.repositories.length, 1);
});

test('does not follow observer redirects to non-HTTPS destinations', async (t) => {
  const dir = await mkdtemp(join(tmpdir(), 'hype-discovery-redirect-'));
  const input = join(dir, 'input.json');
  const output = join(dir, 'output.json');
  let secretRequested = false;
  const server = createServer((request, response) => {
    const url = new URL(request.url, 'http://localhost');
    if (url.pathname === '/redirect') {
      response.writeHead(302, { location: `http://127.0.0.1:${server.address().port}/secret` });
      response.end();
      return;
    }
    if (url.pathname === '/secret') {
      secretRequested = true;
      response.writeHead(200, { 'content-type': 'application/rss+xml' });
      response.end('<rss><channel></channel></rss>');
      return;
    }
    response.writeHead(200, {
      'content-type': 'application/json',
      'x-ratelimit-limit': '10',
      'x-ratelimit-remaining': '9',
      'x-ratelimit-reset': '1791766800',
    });
    response.end(JSON.stringify({ items: [repository] }));
  });
  await new Promise((resolveListen) => server.listen(0, '127.0.0.1', resolveListen));
  t.after(() => { if (server.listening) server.close(); });
  const endpoint = `http://127.0.0.1:${server.address().port}`;
  const data = inputData(endpoint);
  data.sources[0].url = `${endpoint}/redirect`;
  await writeFile(input, `${JSON.stringify(data, null, 2)}\n`);

  const result = await run({ input, output, endpoint });
  assert.equal(result.status, 0, result.stderr);
  const record = JSON.parse(await readFile(output, 'utf8'));
  assert.equal(record.lastRun.status, 'partial');
  assert.deepEqual(record.lastRun.failures, [{ id: 'observer-one', kind: 'source', class: 'invalid_response', httpStatus: null }]);
  assert.equal(secretRequested, false);
});

test('rejects unsafe source configuration before replacing output', async () => {
  const dir = await mkdtemp(join(tmpdir(), 'hype-discovery-preflight-'));
  const input = join(dir, 'input.json');
  const output = join(dir, 'output.json');
  const data = inputData('https://observer.example');
  data.sources[0].url = 'http://observer.example/feed';
  await writeFile(input, `${JSON.stringify(data, null, 2)}\n`);
  await writeFile(output, 'preserve\n');

  const result = await run({ input, output, endpoint: 'http://127.0.0.1:1' });
  assert.notEqual(result.status, 0);
  assert.match(result.stderr, /HTTPS source URL/);
  assert.equal(await readFile(output, 'utf8'), 'preserve\n');
});
