import assert from 'node:assert/strict';
import test from 'node:test';
import { validateHypeDiscovery } from './hype-discovery-contract.mjs';

const valid = () => ({
  schema: 'stangyode.hype-discovery/v1',
  mode: 'public-fetch',
  credentialsRequired: false,
  liveFetch: true,
  policy: { en: 'Attention is not truth.', ja: '注目は真実ではない。' },
  windowDays: 14,
  sources: [{ id: 'observer', name: 'Observer', kind: 'influencer', url: 'https://example.com/feed', state: 'collected' }],
  githubQueries: [{ id: 'broad-ai', query: 'AI', state: 'collected' }],
  mentions: [{
    id: '0123456789abcdef',
    sourceId: 'observer',
    title: 'A new category',
    url: 'https://example.com/post',
    publishedAt: '2026-10-11T12:00:00Z',
    githubRepositories: ['owner/repository'],
    firstSeenAt: '2026-10-12T00:00:00Z',
    lastSeenAt: '2026-10-12T00:00:00Z',
  }],
  repositories: [{
    fullName: 'owner/repository',
    url: 'https://github.com/owner/repository',
    description: 'Example',
    stars: 100,
    forks: 10,
    createdAt: '2026-10-08T00:00:00Z',
    pushedAt: '2026-10-12T00:00:00Z',
    topics: ['ai'],
    observations: [
      { at: '2026-10-11T00:00:00Z', stars: 50, forks: 5 },
      { at: '2026-10-12T00:00:00Z', stars: 100, forks: 10 },
    ],
    metrics: { ageDays: 4, starsPerDay: 25, starsDelta: 50, forksDelta: 5, elapsedHours: 24, sourceMentions: 1, active: true },
    discoveredBy: { queries: ['broad-ai'], sources: ['observer'] },
  }],
  lastRun: {
    status: 'success',
    attemptedAt: '2026-10-12T00:00:00Z',
    completedAt: '2026-10-12T00:00:00Z',
    windowStart: '2026-09-28T00:00:00Z',
    sourceCount: 1,
    successfulSources: 1,
    githubQueryCount: 1,
    successfulGithubQueries: 1,
    failures: [],
    rateLimit: { limit: 10, remaining: 9, resetAt: '2026-10-12T01:00:00Z' },
  },
});

test('accepts separately logged attention and measured repository momentum', () => {
  assert.doesNotThrow(() => validateHypeDiscovery(valid()));
});

test('rejects invented momentum and unknown observer references', () => {
  const badDelta = valid();
  badDelta.repositories[0].metrics.starsDelta = 49;
  assert.throws(() => validateHypeDiscovery(badDelta), /momentum metrics/);

  const unknownSource = valid();
  unknownSource.mentions[0].sourceId = 'missing';
  assert.throws(() => validateHypeDiscovery(unknownSource), /mention source/);
});

test('requires failures to remain explicit on partial runs', () => {
  const partial = valid();
  partial.lastRun.status = 'partial';
  assert.throws(() => validateHypeDiscovery(partial), /partial or failed run requires failures/);
});
