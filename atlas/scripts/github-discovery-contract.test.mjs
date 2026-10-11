import assert from 'node:assert/strict';
import test from 'node:test';
import { validateGithubDiscovery } from './github-discovery-contract.mjs';

const repository = {
  fullName: 'owner/repository',
  url: 'https://github.com/owner/repository',
  description: 'Example',
  stars: 1,
  forks: 0,
  language: 'JavaScript',
  topics: ['agents'],
  archived: false,
  pushedAt: '2026-10-11T01:00:00Z',
};

const validDiscovery = () => ({
  schema: 'stangyode.github-discovery/v1',
  provider: 'github',
  mode: 'public-api',
  credentialsRequired: false,
  liveFetch: true,
  policy: { en: 'Public only.', ja: '公開のみ。' },
  queries: [
    { id: 'candidate-query', targetId: 'candidate-a', query: 'topic:candidate', state: 'collected' },
    { id: 'radar-query', targetId: 'radar-a', query: 'topic:radar', state: 'collected' },
  ],
  signals: [
    { queryId: 'candidate-query', targetId: 'candidate-a', status: 'unverified', repository: { ...repository, topics: [...repository.topics] } },
  ],
  lastRun: {
    status: 'success',
    attemptedAt: '2026-10-11T01:00:00Z',
    completedAt: '2026-10-11T01:00:01Z',
    queryCount: 2,
    successfulQueries: 2,
    failedQueries: [],
    rateLimit: { limit: 10, remaining: 8, resetAt: '2026-10-11T02:00:00Z' },
  },
});

const validate = (github) => validateGithubDiscovery({
  github,
  candidateIds: new Set(['candidate-a']),
  radarIds: new Set(['radar-a']),
});

test('accepts explicit targets from discovery candidates and Radar signals', () => {
  assert.doesNotThrow(() => validate(validDiscovery()));
});

test('rejects missing and mismatched discovery targets', () => {
  const missing = validDiscovery();
  missing.queries[0].targetId = 'missing';
  assert.throws(() => validate(missing), /Missing GitHub query target/);

  const mismatched = validDiscovery();
  mismatched.signals[0].targetId = 'radar-a';
  assert.throws(() => validate(mismatched), /does not match query target/);
});

test('rejects non-string query and signal identifiers', () => {
  const numericQuery = validDiscovery();
  numericQuery.queries[0] = { id: 1, targetId: 1, query: 42, state: 'collected' };
  assert.throws(() => validate(numericQuery), /Invalid GitHub query/);

  const numericSignal = validDiscovery();
  numericSignal.signals[0].targetId = 1;
  assert.throws(() => validate(numericSignal), /Invalid GitHub signal identifiers/);
});

test('rejects repository identity and query-state inconsistencies', () => {
  const wrongUrl = validDiscovery();
  wrongUrl.signals[0].repository.url = 'https://github.com/other/repository';
  assert.throws(() => validate(wrongUrl), /repository identity/);

  const uncollected = validDiscovery();
  uncollected.queries[0].state = 'not-collected';
  assert.throws(() => validate(uncollected), /query states do not match run audit/);
});

test('rejects completion timestamps before the attempt', () => {
  const discovery = validDiscovery();
  discovery.lastRun.completedAt = '2026-10-11T00:59:59Z';
  assert.throws(() => validate(discovery), /completion precedes attempt/);
});
