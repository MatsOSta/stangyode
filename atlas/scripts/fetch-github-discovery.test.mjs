import assert from 'node:assert/strict';
import { mkdtemp, readFile, writeFile } from 'node:fs/promises';
import { createServer } from 'node:http';
import { tmpdir } from 'node:os';
import { join, resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawn } from 'node:child_process';
import test from 'node:test';

const repo = resolve(dirname(fileURLToPath(import.meta.url)), '../..');
const script = resolve(repo, 'atlas/scripts/fetch-github-discovery.mjs');
const baseInput = {
  schema: 'stangyode.github-discovery/v1',
  provider: 'github',
  mode: 'manual-input',
  credentialsRequired: false,
  liveFetch: false,
  policy: { en: 'Public only.', ja: '公開のみ。' },
  queries: [
    { id: 'beta-query', candidateId: 'beta', query: 'topic:beta', state: 'not-collected' },
    { id: 'alpha-query', candidateId: 'alpha', query: 'topic:alpha', state: 'not-collected' },
  ],
  signals: [],
};

const run = ({ input, output, endpoint }) => new Promise((resolveRun) => {
  const child = spawn(process.execPath, [script, '--input', input, '--output', output, '--now', '2026-10-11T05:00:00Z'], {
    cwd: repo,
    env: { ...process.env, GITHUB_PUBLIC_API_URL: endpoint },
  });
  let stdout = '';
  let stderr = '';
  child.stdout.setEncoding('utf8').on('data', (chunk) => { stdout += chunk; });
  child.stderr.setEncoding('utf8').on('data', (chunk) => { stderr += chunk; });
  child.on('close', (status) => resolveRun({ status, stdout, stderr }));
});

test('fetches bounded credential-free GitHub results and records failures explicitly', async (t) => {
  const dir = await mkdtemp(join(tmpdir(), 'github-discovery-'));
  const input = join(dir, 'input.json');
  const output = join(dir, 'output.json');
  await writeFile(input, `${JSON.stringify(baseInput, null, 2)}\n`);

  const requests = [];
  let responseMode = 'success';
  const server = createServer((request, response) => {
    const url = new URL(request.url, 'http://localhost');
    const query = url.searchParams.get('q');
    requests.push({ authorization: request.headers.authorization, url });
    if (responseMode === 'rate-limit' && query === 'topic:beta') {
      response.writeHead(403, {
        'content-type': 'application/json',
        'x-ratelimit-limit': '10',
        'x-ratelimit-remaining': '0',
        'x-ratelimit-reset': '1791695100',
      });
      response.end(JSON.stringify({ message: 'API rate limit exceeded' }));
      return;
    }
    const headers = responseMode === 'missing-rate-headers'
      ? { 'content-type': 'application/json' }
      : {
          'content-type': 'application/json',
          'x-ratelimit-limit': '10',
          'x-ratelimit-remaining': query === 'topic:alpha' ? '9' : '8',
          'x-ratelimit-reset': '1791695100',
        };
    response.writeHead(200, headers);
    const items = responseMode === 'malformed-item' && query === 'topic:alpha'
      ? [{ full_name: 'broken/repo', html_url: 'https://github.com/broken/repo' }]
      : query === 'topic:alpha' ? [
          { full_name: 'zeta/repo', html_url: 'https://github.com/zeta/repo', description: null, stargazers_count: 2, forks_count: 1, language: 'JavaScript', topics: ['agents'], archived: false, pushed_at: '2026-10-10T12:00:00Z' },
          { full_name: 'alpha/repo', html_url: 'https://github.com/alpha/repo', description: 'Alpha', stargazers_count: 5, forks_count: 0, language: null, topics: [], archived: false, pushed_at: '2026-10-10T13:00:00Z' },
        ] : [];
    response.end(JSON.stringify({ items }));
  });
  await new Promise((resolveListen) => server.listen(0, '127.0.0.1', resolveListen));
  t.after(() => { if (server.listening) server.close(); });
  const endpoint = `http://127.0.0.1:${server.address().port}`;

  const success = await run({ input, output, endpoint });
  assert.equal(success.status, 0, success.stderr);
  const collected = JSON.parse(await readFile(output, 'utf8'));
  assert.equal(collected.liveFetch, true);
  assert.equal(collected.mode, 'public-api');
  assert.deepEqual(collected.lastRun, {
    status: 'success',
    attemptedAt: '2026-10-11T05:00:00Z',
    completedAt: '2026-10-11T05:00:00Z',
    queryCount: 2,
    successfulQueries: 2,
    failedQueries: [],
    rateLimit: { limit: 10, remaining: 8, resetAt: '2026-10-11T05:05:00Z' },
  });
  assert.deepEqual(collected.signals.map((signal) => [signal.queryId, signal.repository.fullName]), [
    ['alpha-query', 'alpha/repo'],
    ['alpha-query', 'zeta/repo'],
  ]);
  assert.equal(requests.length, 2);
  assert.ok(requests.every(({ authorization, url }) => authorization === undefined && Number(url.searchParams.get('per_page')) <= 5));

  responseMode = 'rate-limit';
  requests.length = 0;
  const failed = await run({ input, output, endpoint });
  assert.notEqual(failed.status, 0);
  const failureRecord = JSON.parse(await readFile(output, 'utf8'));
  assert.equal(failureRecord.lastRun.status, 'failed');
  assert.equal(failureRecord.lastRun.completedAt, null);
  assert.equal(failureRecord.lastRun.successfulQueries, 1);
  assert.deepEqual(failureRecord.lastRun.failedQueries, [{ id: 'beta-query', class: 'rate_limit', httpStatus: 403 }]);
  assert.deepEqual(failureRecord.queries.map(({ id, state }) => [id, state]), [
    ['beta-query', 'failed'],
    ['alpha-query', 'collected'],
  ]);
  assert.deepEqual(failureRecord.signals, []);

  responseMode = 'missing-rate-headers';
  const noHeaders = await run({ input, output, endpoint });
  assert.equal(noHeaders.status, 0, noHeaders.stderr);
  const noHeadersRecord = JSON.parse(await readFile(output, 'utf8'));
  assert.equal(noHeadersRecord.lastRun.status, 'success');
  assert.equal(noHeadersRecord.lastRun.rateLimit, null);

  responseMode = 'malformed-item';
  const malformed = await run({ input, output, endpoint });
  assert.notEqual(malformed.status, 0);
  const malformedRecord = JSON.parse(await readFile(output, 'utf8'));
  assert.deepEqual(malformedRecord.lastRun.failedQueries, [{ id: 'alpha-query', class: 'invalid_response', httpStatus: null }]);
  assert.deepEqual(malformedRecord.queries.map(({ id, state }) => [id, state]), [
    ['beta-query', 'not-collected'],
    ['alpha-query', 'failed'],
  ]);
  assert.deepEqual(malformedRecord.signals, []);

  await new Promise((resolveClose) => server.close(resolveClose));
  const networkFailure = await run({ input, output, endpoint });
  assert.notEqual(networkFailure.status, 0);
  const networkRecord = JSON.parse(await readFile(output, 'utf8'));
  assert.equal(networkRecord.lastRun.rateLimit, null);
  assert.deepEqual(networkRecord.lastRun.failedQueries, [{ id: 'alpha-query', class: 'network', httpStatus: null }]);
});
