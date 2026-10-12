const isoTimestamp = (value) => typeof value === 'string'
  && /^\d{4}-\d{2}-\d{2}T/.test(value)
  && !Number.isNaN(Date.parse(value));
const httpsUrl = (value) => {
  try { return new URL(value).protocol === 'https:'; } catch { return false; }
};
const repositoryUrl = (fullName) => `https://github.com/${fullName}`;
const same = (left, right) => JSON.stringify(left) === JSON.stringify(right);

export const validateHypeDiscovery = (data) => {
  const fail = (message) => { throw new Error(message); };
  if (data?.schema !== 'stangyode.hype-discovery/v1'
    || data.credentialsRequired !== false
    || !['configured-sources', 'public-fetch'].includes(data.mode)
    || typeof data.liveFetch !== 'boolean') {
    fail('Invalid hype discovery identity');
  }
  if (!data.policy || typeof data.policy.en !== 'string' || !data.policy.en.trim()
    || typeof data.policy.ja !== 'string' || !data.policy.ja.trim()) {
    fail('Missing bilingual hype discovery policy');
  }
  if (!Number.isInteger(data.windowDays) || data.windowDays < 1 || data.windowDays > 90) fail('Invalid hype discovery window');
  if (!Array.isArray(data.sources) || data.sources.length < 1 || data.sources.length > 12) fail('Invalid hype observer sources');
  if (!Array.isArray(data.githubQueries) || data.githubQueries.length < 1 || data.githubQueries.length > 6) fail('Invalid broad GitHub queries');

  const sourceIds = new Set();
  for (const source of data.sources) {
    if (typeof source?.id !== 'string' || !source.id.trim() || sourceIds.has(source.id)
      || typeof source.name !== 'string' || !source.name.trim()
      || !['influencer', 'newsletter', 'community', 'analyst'].includes(source.kind)
      || !httpsUrl(source.url) || !['not-collected', 'collected', 'failed'].includes(source.state)) {
      fail(`Invalid hype observer source ${source?.id}`);
    }
    sourceIds.add(source.id);
  }
  const queryIds = new Set();
  for (const query of data.githubQueries) {
    if (typeof query?.id !== 'string' || !query.id.trim() || queryIds.has(query.id)
      || typeof query.query !== 'string' || !query.query.trim()
      || !['not-collected', 'collected', 'failed'].includes(query.state)) {
      fail(`Invalid broad GitHub query ${query?.id}`);
    }
    queryIds.add(query.id);
  }

  if (!Array.isArray(data.mentions)) fail('Hype mentions missing');
  const mentionsById = new Set();
  const mentionSourcesByRepository = new Map();
  const activeWindowStart = isoTimestamp(data.lastRun?.windowStart) ? Date.parse(data.lastRun.windowStart) : -Infinity;
  for (const mention of data.mentions) {
    if (!/^[a-f0-9]{16}$/.test(mention?.id) || mentionsById.has(mention.id)
      || !sourceIds.has(mention.sourceId) || typeof mention.title !== 'string' || !mention.title.trim()
      || !httpsUrl(mention.url) || !isoTimestamp(mention.publishedAt)
      || !isoTimestamp(mention.firstSeenAt) || !isoTimestamp(mention.lastSeenAt)
      || Date.parse(mention.firstSeenAt) > Date.parse(mention.lastSeenAt)
      || !Array.isArray(mention.githubRepositories)) {
      fail(`Invalid hype mention source or identity ${mention?.id}`);
    }
    const normalizedNames = [...new Set(mention.githubRepositories)].sort();
    if (!same(mention.githubRepositories, normalizedNames)
      || normalizedNames.some((name) => !/^[A-Za-z0-9_.-]+\/[A-Za-z0-9_.-]+$/.test(name))) {
      fail(`Invalid hype mention repositories ${mention.id}`);
    }
    mentionsById.add(mention.id);
    if (Date.parse(mention.publishedAt) < activeWindowStart) continue;
    for (const fullName of normalizedNames) {
      const ids = mentionSourcesByRepository.get(fullName) ?? new Set();
      ids.add(mention.sourceId);
      mentionSourcesByRepository.set(fullName, ids);
    }
  }
  const sortedMentions = [...data.mentions].sort((left, right) => right.publishedAt.localeCompare(left.publishedAt) || left.id.localeCompare(right.id));
  if (!same(data.mentions, sortedMentions)) fail('Hype mentions must be deterministically sorted');

  if (!Array.isArray(data.repositories)) fail('Hype repositories missing');
  const repositoryNames = new Set();
  for (const repository of data.repositories) {
    if (typeof repository?.fullName !== 'string' || repositoryNames.has(repository.fullName)
      || !/^[A-Za-z0-9_.-]+\/[A-Za-z0-9_.-]+$/.test(repository.fullName)
      || repository.url !== repositoryUrl(repository.fullName)
      || !(repository.description === null || typeof repository.description === 'string')
      || !Number.isInteger(repository.stars) || repository.stars < 0
      || !Number.isInteger(repository.forks) || repository.forks < 0
      || !isoTimestamp(repository.createdAt) || !isoTimestamp(repository.pushedAt)
      || !Array.isArray(repository.topics) || !same(repository.topics, [...repository.topics].sort())
      || !Array.isArray(repository.observations) || repository.observations.length < 1) {
      fail(`Invalid hype repository ${repository?.fullName}`);
    }
    repositoryNames.add(repository.fullName);
    let previousAt = null;
    for (const observation of repository.observations) {
      if (!isoTimestamp(observation?.at) || !Number.isInteger(observation.stars) || observation.stars < 0
        || !Number.isInteger(observation.forks) || observation.forks < 0
        || (previousAt && Date.parse(observation.at) <= Date.parse(previousAt))) {
        fail(`Invalid hype repository observation ${repository.fullName}`);
      }
      previousAt = observation.at;
    }
    const latest = repository.observations.at(-1);
    if (latest.stars !== repository.stars || latest.forks !== repository.forks) fail(`Stale hype repository snapshot ${repository.fullName}`);
    const prior = repository.observations.length > 1 ? repository.observations.at(-2) : null;
    const metrics = repository.metrics;
    const expectedSources = [...(mentionSourcesByRepository.get(repository.fullName) ?? [])].sort();
    if (!metrics || typeof metrics.ageDays !== 'number' || metrics.ageDays < 1
      || typeof metrics.starsPerDay !== 'number' || metrics.starsPerDay < 0
      || metrics.starsDelta !== (prior ? latest.stars - prior.stars : null)
      || metrics.forksDelta !== (prior ? latest.forks - prior.forks : null)
      || metrics.elapsedHours !== (prior ? Math.round(((Date.parse(latest.at) - Date.parse(prior.at)) / 36_000)) / 100 : null)
      || metrics.sourceMentions !== expectedSources.length || typeof metrics.active !== 'boolean') {
      fail(`Invalid hype repository momentum metrics ${repository.fullName}`);
    }
    if (!repository.discoveredBy || !Array.isArray(repository.discoveredBy.queries) || !Array.isArray(repository.discoveredBy.sources)
      || !same(repository.discoveredBy.queries, [...new Set(repository.discoveredBy.queries)].sort())
      || repository.discoveredBy.queries.some((id) => !queryIds.has(id))
      || !same(repository.discoveredBy.sources, expectedSources)) {
      fail(`Invalid hype repository discovery paths ${repository.fullName}`);
    }
  }
  const sortedRepositories = [...data.repositories].sort((left, right) => Number(right.metrics.active) - Number(left.metrics.active)
    || right.metrics.sourceMentions - left.metrics.sourceMentions
    || (right.metrics.starsDelta ?? -1) - (left.metrics.starsDelta ?? -1)
    || right.metrics.starsPerDay - left.metrics.starsPerDay
    || right.stars - left.stars
    || left.fullName.localeCompare(right.fullName));
  if (!same(data.repositories, sortedRepositories)) fail('Hype repositories must be deterministically ranked');

  if (data.mode === 'configured-sources') {
    if (data.liveFetch !== false || data.lastRun !== null
      || data.sources.some((source) => source.state !== 'not-collected')
      || data.githubQueries.some((query) => query.state !== 'not-collected')) {
      fail('Unfetched hype discovery configuration must remain explicit');
    }
    return;
  }
  const run = data.lastRun;
  if (data.liveFetch !== true || !run || !['success', 'partial', 'failed'].includes(run.status)
    || !isoTimestamp(run.attemptedAt) || !isoTimestamp(run.completedAt) || !isoTimestamp(run.windowStart)
    || run.sourceCount !== data.sources.length || run.githubQueryCount !== data.githubQueries.length
    || !Number.isInteger(run.successfulSources) || !Number.isInteger(run.successfulGithubQueries)
    || !Array.isArray(run.failures)) {
    fail('Invalid hype discovery run audit');
  }
  if (Date.parse(run.completedAt) < Date.parse(run.attemptedAt)
    || Date.parse(run.windowStart) > Date.parse(run.attemptedAt)) {
    fail('Hype discovery run timestamps are inconsistent');
  }
  if (run.status === 'success' && run.failures.length !== 0) fail('Successful hype discovery run cannot contain failures');
  if (run.status !== 'success' && run.failures.length < 1) fail('A partial or failed run requires failures');
  if (run.successfulSources !== data.sources.filter((source) => source.state === 'collected').length
    || run.successfulGithubQueries !== data.githubQueries.filter((query) => query.state === 'collected').length) {
    fail('Hype discovery run accounting does not match collector states');
  }
  if (run.status === 'failed' && run.successfulSources + run.successfulGithubQueries !== 0) fail('Failed hype discovery run cannot contain successful collectors');
  if (run.status === 'partial' && run.successfulSources + run.successfulGithubQueries === 0) fail('Partial hype discovery run requires a successful collector');
  for (const failure of run.failures) {
    const ids = failure?.kind === 'source' ? sourceIds : failure?.kind === 'github-query' ? queryIds : null;
    if (!ids?.has(failure.id) || !['rate_limit', 'timeout', 'http', 'network', 'invalid_response'].includes(failure.class)
      || !(failure.httpStatus === null || Number.isInteger(failure.httpStatus))) {
      fail(`Invalid hype discovery failure ${failure?.id}`);
    }
  }
  if (run.rateLimit !== null && (!Number.isInteger(run.rateLimit?.limit) || !Number.isInteger(run.rateLimit.remaining)
    || run.rateLimit.limit < 1 || run.rateLimit.remaining < 0 || run.rateLimit.remaining > run.rateLimit.limit
    || !isoTimestamp(run.rateLimit.resetAt))) {
    fail('Invalid hype discovery rate-limit audit');
  }
};
