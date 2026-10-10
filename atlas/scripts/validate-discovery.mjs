import { readFile } from 'node:fs/promises';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const repo = resolve(dirname(fileURLToPath(import.meta.url)), '../..');
const fail = (message) => { throw new Error(message); };
const bilingual = (value, label) => {
  if (!value || typeof value.en !== 'string' || !value.en.trim() || typeof value.ja !== 'string' || !value.ja.trim()) {
    fail(`Missing bilingual ${label}`);
  }
};
const score = (value, label) => {
  if (!Number.isInteger(value) || value < 0 || value > 100) fail(`Invalid score ${label}: ${value}`);
};

const [data, github, radar, sources] = await Promise.all([
  readFile(resolve(repo, 'atlas/data/discovery-candidates.json'), 'utf8').then(JSON.parse),
  readFile(resolve(repo, 'atlas/data/github-discovery.json'), 'utf8').then(JSON.parse),
  readFile(resolve(repo, 'atlas/data/frontier-radar.json'), 'utf8').then(JSON.parse),
  readFile(resolve(repo, 'atlas/data/sources.json'), 'utf8').then(JSON.parse),
]);
const radarIds = new Set(radar.signals.map((signal) => signal.id));
const sourceIds = new Set(Object.keys(sources));

if (data.schema !== 'stangyode.discovery-candidates/v1') fail('Invalid discovery schema');
if (!/^\d{4}-\d{2}-\d{2}$/.test(data.generatedAt)) fail('Discovery generatedAt must be an ISO date');
if (data.liveFetch !== false) fail('This run records public observation; liveFetch must stay explicit false until a fetch job exists');
bilingual(data.policy, 'discovery policy');
bilingual(data.regression.note, 'regression note');
if (data.regression.withoutNamedQuery !== true) fail('Jev regression requires withoutNamedQuery');

const isoTimestamp = (value) => typeof value === 'string' && /^\d{4}-\d{2}-\d{2}T/.test(value) && !Number.isNaN(Date.parse(value));
if (github.schema !== 'stangyode.github-discovery/v1' || github.provider !== 'github' || github.mode !== 'public-api' || github.credentialsRequired !== false || github.liveFetch !== true) {
  fail('GitHub discovery must be a credential-free public API fetch');
}
bilingual(github.policy, 'GitHub discovery policy');
if (!Array.isArray(github.queries) || github.queries.length < 1 || github.queries.length > 8) fail('GitHub discovery query bounds invalid');
const githubQueryIds = new Set();
for (const query of github.queries) {
  if (!query?.id || githubQueryIds.has(query.id) || !query.candidateId || !query.query || !['collected', 'not-collected', 'failed'].includes(query.state)) fail(`Invalid GitHub query ${query?.id}`);
  githubQueryIds.add(query.id);
}
const run = github.lastRun;
if (!run || !['success', 'failed'].includes(run.status) || !isoTimestamp(run.attemptedAt) || run.queryCount !== github.queries.length || !Number.isInteger(run.successfulQueries) || run.successfulQueries < 0 || run.successfulQueries > run.queryCount || !Array.isArray(run.failedQueries)) {
  fail('GitHub discovery run audit invalid');
}
if (run.status === 'success' && (!isoTimestamp(run.completedAt) || run.failedQueries.length !== 0 || run.successfulQueries !== run.queryCount)) fail('Successful GitHub discovery run is incomplete');
if (run.status === 'failed' && (run.completedAt !== null || run.failedQueries.length < 1 || github.signals.length !== 0)) fail('Failed GitHub discovery run must remain explicit and non-current');
if (run.rateLimit !== null && (!Number.isInteger(run.rateLimit?.limit) || !Number.isInteger(run.rateLimit?.remaining) || run.rateLimit.remaining < 0 || run.rateLimit.remaining > run.rateLimit.limit || !isoTimestamp(run.rateLimit.resetAt))) fail('GitHub rate-limit audit invalid');
for (const failure of run.failedQueries) {
  if (!githubQueryIds.has(failure.id) || !['rate_limit', 'timeout', 'http', 'network', 'invalid_response'].includes(failure.class) || !(failure.httpStatus === null || Number.isInteger(failure.httpStatus))) fail(`Invalid GitHub query failure ${failure?.id}`);
}
const collectedQueries = github.queries.filter((query) => query.state === 'collected');
const failedQueryStates = github.queries.filter((query) => query.state === 'failed');
const failedIds = new Set(run.failedQueries.map((failure) => failure.id));
if (collectedQueries.length !== run.successfulQueries || failedQueryStates.length !== run.failedQueries.length || failedQueryStates.some((query) => !failedIds.has(query.id))) fail('GitHub query states do not match run audit');
if (run.status === 'success' && github.queries.some((query) => query.state !== 'collected')) fail('Successful GitHub run must collect every query');
if (run.status === 'failed' && github.queries.filter((query) => query.state === 'not-collected').length !== run.queryCount - run.successfulQueries - run.failedQueries.length) fail('Failed GitHub run query accounting invalid');
if (!Array.isArray(github.signals)) fail('GitHub discovery signals missing');
const normalizedSignals = [...github.signals].sort((a, b) => a.queryId.localeCompare(b.queryId) || a.repository.fullName.localeCompare(b.repository.fullName));
if (JSON.stringify(github.signals) !== JSON.stringify(normalizedSignals)) fail('GitHub discovery signals must be deterministically sorted');
for (const signal of github.signals) {
  const repository = signal?.repository;
  if (!githubQueryIds.has(signal?.queryId) || !signal.candidateId || signal.status !== 'unverified' || !repository?.fullName || !/^https:\/\/github\.com\//.test(repository.url) || !Number.isInteger(repository.stars) || !Number.isInteger(repository.forks) || !Array.isArray(repository.topics) || typeof repository.archived !== 'boolean' || !isoTimestamp(repository.pushedAt)) fail(`Invalid GitHub discovery signal ${signal?.queryId}`);
  if (JSON.stringify(repository.topics) !== JSON.stringify([...repository.topics].sort())) fail(`GitHub topics must be sorted ${repository.fullName}`);
}

const statuses = new Set(['discovered', 'observed', 'investigated', 'assessed']);
const evidence = new Set(['unverified', 'partially-verified', 'verified', 'contradicted', 'unknown']);
const dimensions = ['substance', 'hype', 'fieldImportance', 'relevance', 'evidenceDiversity', 'momentum'];
const ids = new Set();

if (!Array.isArray(data.candidates) || data.candidates.length < 1) fail('Discovery candidates missing');
for (const candidate of data.candidates) {
  if (!candidate.id || ids.has(candidate.id)) fail(`Invalid candidate id ${candidate.id}`);
  ids.add(candidate.id);
  if (!Array.isArray(candidate.names) || candidate.names.length < 1) fail(`Names missing ${candidate.id}`);
  if (!statuses.has(candidate.status)) fail(`Invalid status ${candidate.id}`);
  if (!evidence.has(candidate.evidenceState)) fail(`Invalid evidenceState ${candidate.id}`);
  bilingual(candidate.whyInteresting, `why ${candidate.id}`);
  if (!/^\d{4}-\d{2}-\d{2}$/.test(candidate.firstObserved) || !/^\d{4}-\d{2}-\d{2}$/.test(candidate.lastObserved)) {
    fail(`Invalid observation dates ${candidate.id}`);
  }
  if (!Array.isArray(candidate.observations) || candidate.observations.length < 1) fail(`Observations missing ${candidate.id}`);
  for (const observation of candidate.observations) {
    if (!/^https:\/\//.test(observation.url)) fail(`Invalid observation URL ${candidate.id}`);
  }
  for (const dimension of dimensions) score(candidate.judgment[dimension], `${candidate.id}.${dimension}`);
  if (candidate.implementations) {
    if (!Array.isArray(candidate.implementations) || candidate.implementations.length < 1) fail(`Invalid implementations ${candidate.id}`);
    for (const implementation of candidate.implementations) {
      if (!implementation || !implementation.name || !implementation.vendor || !implementation.organizationId || !implementation.access) fail(`Incomplete implementation ${candidate.id}`);
      if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(implementation.organizationId)) fail(`Invalid implementation organization ${candidate.id} -> ${implementation.name}`);
      if (!Array.isArray(implementation.sourceIds) || implementation.sourceIds.length < 1) fail(`Implementation sources missing ${candidate.id} -> ${implementation.name}`);
      for (const sourceId of implementation.sourceIds) if (!sourceIds.has(sourceId)) fail(`Missing implementation source ${candidate.id} -> ${sourceId}`);
    }
  }
  if (candidate.radarSignalId && !radarIds.has(candidate.radarSignalId)) fail(`Radar pointer missing ${candidate.id} -> ${candidate.radarSignalId}`);
}

const regression = data.candidates.find((candidate) => candidate.id === data.regression.id);
if (!regression) fail('Regression candidate missing');
if (!regression.names.some((name) => /system one|typed decision/i.test(name))) {
  fail('Regression candidate must remain a phenomenon (System One / typed decisions), not a seeded product query');
}

console.log(`Validated ${data.candidates.length} discovery candidates, regression ${data.regression.id}, evidence states, and Radar pointers.`);
