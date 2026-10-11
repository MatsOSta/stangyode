const isoTimestamp = (value) => typeof value === 'string'
  && /^\d{4}-\d{2}-\d{2}T/.test(value)
  && !Number.isNaN(Date.parse(value));

const repositoryUrl = (fullName) => `https://github.com/${fullName}`;

export const validateGithubDiscovery = ({ github, candidateIds, radarIds }) => {
  const fail = (message) => { throw new Error(message); };
  if (github?.schema !== 'stangyode.github-discovery/v1'
    || github.provider !== 'github'
    || github.mode !== 'public-api'
    || github.credentialsRequired !== false
    || github.liveFetch !== true) {
    fail('GitHub discovery must be a credential-free public API fetch');
  }
  if (!Array.isArray(github.queries) || github.queries.length < 1 || github.queries.length > 8) {
    fail('GitHub discovery query bounds invalid');
  }

  const trackedIds = new Set([...candidateIds, ...radarIds]);
  const queriesById = new Map();
  for (const query of github.queries) {
    if (typeof query?.id !== 'string' || !query.id.trim() || queriesById.has(query.id)
      || typeof query.targetId !== 'string' || !query.targetId.trim()
      || typeof query.query !== 'string' || !query.query.trim()
      || !['collected', 'not-collected', 'failed'].includes(query.state)) {
      fail(`Invalid GitHub query ${query?.id}`);
    }
    if (!trackedIds.has(query.targetId)) fail(`Missing GitHub query target ${query.targetId}`);
    queriesById.set(query.id, query);
  }

  const run = github.lastRun;
  if (!run || !['success', 'failed'].includes(run.status) || !isoTimestamp(run.attemptedAt)
    || run.queryCount !== github.queries.length || !Number.isInteger(run.successfulQueries)
    || run.successfulQueries < 0 || run.successfulQueries > run.queryCount
    || !Array.isArray(run.failedQueries)) {
    fail('GitHub discovery run audit invalid');
  }
  if (run.status === 'success' && (!isoTimestamp(run.completedAt)
    || run.failedQueries.length !== 0 || run.successfulQueries !== run.queryCount)) {
    fail('Successful GitHub discovery run is incomplete');
  }
  if (run.status === 'success' && Date.parse(run.completedAt) < Date.parse(run.attemptedAt)) {
    fail('GitHub discovery completion precedes attempt');
  }
  if (run.status === 'failed' && (run.completedAt !== null
    || run.failedQueries.length < 1 || !Array.isArray(github.signals) || github.signals.length !== 0)) {
    fail('Failed GitHub discovery run must remain explicit and non-current');
  }
  if (run.rateLimit !== null && (!Number.isInteger(run.rateLimit?.limit)
    || !Number.isInteger(run.rateLimit?.remaining) || run.rateLimit.limit < 1
    || run.rateLimit.remaining < 0 || run.rateLimit.remaining > run.rateLimit.limit
    || !isoTimestamp(run.rateLimit.resetAt))) {
    fail('GitHub rate-limit audit invalid');
  }

  const failedIds = new Set();
  for (const failure of run.failedQueries) {
    if (!queriesById.has(failure?.id) || failedIds.has(failure.id)
      || !['rate_limit', 'timeout', 'http', 'network', 'invalid_response'].includes(failure.class)
      || !(failure.httpStatus === null || Number.isInteger(failure.httpStatus))) {
      fail(`Invalid GitHub query failure ${failure?.id}`);
    }
    failedIds.add(failure.id);
  }

  const collectedQueries = github.queries.filter((query) => query.state === 'collected');
  const failedQueries = github.queries.filter((query) => query.state === 'failed');
  if (collectedQueries.length !== run.successfulQueries
    || failedQueries.length !== run.failedQueries.length
    || failedQueries.some((query) => !failedIds.has(query.id))) {
    fail('GitHub query states do not match run audit');
  }
  if (run.status === 'success' && github.queries.some((query) => query.state !== 'collected')) {
    fail('Successful GitHub run must collect every query');
  }
  if (run.status === 'failed'
    && github.queries.filter((query) => query.state === 'not-collected').length
      !== run.queryCount - run.successfulQueries - run.failedQueries.length) {
    fail('Failed GitHub run query accounting invalid');
  }

  if (!Array.isArray(github.signals)) fail('GitHub discovery signals missing');
  for (const signal of github.signals) {
    if (typeof signal?.queryId !== 'string' || !signal.queryId.trim()
      || typeof signal.targetId !== 'string' || !signal.targetId.trim()) {
      fail('Invalid GitHub signal identifiers');
    }
  }
  const normalizedSignals = [...github.signals].sort((left, right) => left.queryId.localeCompare(right.queryId)
    || left.repository.fullName.localeCompare(right.repository.fullName));
  if (JSON.stringify(github.signals) !== JSON.stringify(normalizedSignals)) {
    fail('GitHub discovery signals must be deterministically sorted');
  }

  const countsByQuery = new Map();
  const repositoryKeys = new Set();
  for (const signal of github.signals) {
    const query = queriesById.get(signal?.queryId);
    const repository = signal?.repository;
    if (!query) fail(`Invalid GitHub discovery signal ${signal?.queryId}`);
    if (signal.targetId !== query.targetId) fail(`GitHub signal ${signal.queryId} does not match query target`);
    if (query.state !== 'collected') fail(`GitHub signals require a collected query ${signal.queryId}`);
    if (signal.status !== 'unverified'
      || typeof repository?.fullName !== 'string'
      || !/^[A-Za-z0-9_.-]+\/[A-Za-z0-9_.-]+$/.test(repository.fullName)
      || repository.url !== repositoryUrl(repository.fullName)
      || !(repository.description === null || typeof repository.description === 'string')
      || !Number.isInteger(repository.stars) || repository.stars < 0
      || !Number.isInteger(repository.forks) || repository.forks < 0
      || !(repository.language === null || typeof repository.language === 'string')
      || !Array.isArray(repository.topics) || repository.topics.some((topic) => typeof topic !== 'string')
      || typeof repository.archived !== 'boolean' || !isoTimestamp(repository.pushedAt)) {
      fail(`Invalid GitHub repository identity ${signal.queryId}`);
    }
    if (JSON.stringify(repository.topics) !== JSON.stringify([...repository.topics].sort())) {
      fail(`GitHub topics must be sorted ${repository.fullName}`);
    }
    const repositoryKey = `${signal.queryId}:${repository.fullName}`;
    if (repositoryKeys.has(repositoryKey)) fail(`Duplicate GitHub repository signal ${repositoryKey}`);
    repositoryKeys.add(repositoryKey);
    countsByQuery.set(signal.queryId, (countsByQuery.get(signal.queryId) ?? 0) + 1);
    if (countsByQuery.get(signal.queryId) > 5) fail(`GitHub query exceeds result bound ${signal.queryId}`);
  }
};
