import { readFile } from 'node:fs/promises';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const repo = resolve(dirname(fileURLToPath(import.meta.url)), '../..');
const load = async (path) => JSON.parse(await readFile(resolve(repo, path), 'utf8'));
const fail = (message) => { throw new Error(message); };
const bilingual = (value, label) => {
  if (!value || typeof value.en !== 'string' || !value.en.trim() || typeof value.ja !== 'string' || !value.ja.trim()) fail(`Missing bilingual ${label}`);
};
const score = (value, label) => {
  if (!Number.isInteger(value) || value < 0 || value > 100) fail(`Invalid score ${label}: ${value}`);
};

const [radar, discovery, candidates, atlas, sources, changelog, regressions, artifact] = await Promise.all([
  load('atlas/data/frontier-radar.json'),
  load('atlas/data/github-discovery.json'),
  load('atlas/data/discovery-candidates.json'),
  load('atlas/data/atlas.json'),
  load('atlas/data/sources.json'),
  load('atlas/data/changelog.json'),
  load('atlas/data/radar-regressions.json'),
  readFile(resolve(repo, 'atlas/artifacts/frontier-radar-briefing.md'), 'utf8'),
]);

if (radar.schema !== 'stangyode.frontier-radar/v1') fail('Invalid Radar schema');
if (!/^\d{4}-\d{2}-\d{2}$/.test(radar.meta.snapshot)) fail('Radar snapshot must be an explicit ISO date');
if (radar.scoreScale.min !== 0 || radar.scoreScale.max !== 100) fail('Invalid score scale');
const requiredDimensions = ['frontier', 'adoption', 'fit', 'confidence'];
if (requiredDimensions.some((dimension) => !radar.scoreScale.dimensions.includes(dimension))) fail('Radar score dimensions missing');

const ids = new Set(radar.signals.map((signal) => signal.id));
if (radar.signals.length < 1 || ids.size !== radar.signals.length) fail('Radar signals must be unique and non-empty');
const atlasIds = new Set(atlas.terms.map((term) => term.id));
const sourceIds = new Set(Object.keys(sources));
const adoptionIds = new Set(radar.adoption.map((item) => item.signalId));
if (radar.adoption.length !== radar.signals.length || adoptionIds.size !== radar.adoption.length) fail('Adoption intelligence must cover each signal exactly once');

const provenanceKinds = new Set(['seed', 'discovery', 'verification']);
const provenanceStatuses = new Set(['unverified', 'partially-verified', 'verified', 'contradicted', 'unknown']);
const compatibilityStatuses = new Set(['unknown', 'compatible', 'incompatible', 'partial']);
if (!Array.isArray(candidates.candidates) || !Array.isArray(candidates.sensors)) fail('Discovery candidates or sensors missing');
const candidateIds = new Set(candidates.candidates.map((candidate) => candidate.id));
const trackedIds = new Set([...ids, ...candidateIds]);
const declaredSensorIds = new Set(candidates.sensors.map((sensor) => sensor.id));
const changelogLabels = new Set(changelog.map((item) => item.label));
const isoTimestamp = (value) => typeof value === 'string' && !Number.isNaN(Date.parse(value)) && /^\d{4}-\d{2}-\d{2}T/.test(value);
const isoDate = (value) => typeof value === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(value) && !Number.isNaN(Date.parse(value));

const audit = radar.audit;
if (!audit || typeof audit !== 'object' || !isoTimestamp(audit.asOf) || audit.cadence !== 'daily') fail('Radar audit snapshot missing or invalid');
if (!Number.isInteger(audit.staleAfterHours) || audit.staleAfterHours < 1) fail('Radar audit stale policy missing');
if (!['current', 'stale', 'unavailable'].includes(audit.dataStatus)) fail('Invalid Radar audit data status');
if (!audit.runs || typeof audit.runs !== 'object') fail('Radar audit runs missing');
for (const role of ['scout', 'editor']) {
  const run = audit.runs[role];
  if (!run || !['success', 'failed', 'partial', 'unknown'].includes(run.status)) fail(`Invalid Radar audit run ${role}`);
  if (!isoTimestamp(run.lastAttemptAt) || !isoTimestamp(run.lastSuccessfulRunAt)) fail(`Invalid Radar audit timestamps ${role}`);
  if (!Number.isInteger(run.failureStreak) || run.failureStreak < 0) fail(`Invalid Radar audit failure streak ${role}`);
  if (run.lastFailure) {
    if (typeof run.lastFailure !== 'object' || !isoTimestamp(run.lastFailure.at) || !['rate_limit', 'timeout', 'validation', 'delivery', 'unknown'].includes(run.lastFailure.class) || typeof run.lastFailure.resolved !== 'boolean') fail(`Invalid sanitized failure ${role}`);
  }
}
if (!Array.isArray(audit.sourcesChecked) || audit.sourcesChecked.length < 1) fail('Radar audit sources missing');
const checkedSourceIds = new Set();
for (const item of audit.sourcesChecked) {
  if (!item || !sourceIds.has(item.sourceId) || checkedSourceIds.has(item.sourceId) || !isoDate(item.checkedAt) || Date.parse(item.checkedAt) > Date.parse(audit.asOf) || !['relevant', 'no-material-change'].includes(item.outcome)) fail(`Invalid checked source ${item?.sourceId}`);
  checkedSourceIds.add(item.sourceId);
}
if (!Array.isArray(audit.queryGroups) || audit.queryGroups.length < 1) fail('Radar audit queries missing');
for (const group of audit.queryGroups) {
  if (!group || !group.id || group.runRole !== 'scout' || !Array.isArray(group.queries) || group.queries.length < 1) fail(`Invalid query group ${group?.id}`);
  bilingual(group.label, `query group ${group.id}`);
  bilingual(group.resultSummary, `query result ${group.id}`);
  if (group.queries.some((query) => typeof query !== 'string' || !query.trim())) fail(`Empty query ${group.id}`);
  if (!Array.isArray(group.targetIds) || group.targetIds.length < 1 || group.targetIds.some((id) => !trackedIds.has(id))) fail(`Invalid query targets ${group.id}`);
  if (!Array.isArray(group.sourceIds) || group.sourceIds.length < 1 || group.sourceIds.some((id) => !checkedSourceIds.has(id))) fail(`Invalid query evidence ${group.id}`);
}
if (!Array.isArray(audit.trackedEntityIds) || audit.trackedEntityIds.length < 1) fail('Tracked Radar entities missing');
for (const id of audit.trackedEntityIds) if (!trackedIds.has(id)) fail(`Missing tracked entity ${id}`);
if (!Array.isArray(audit.changelogEntriesChecked) || audit.changelogEntriesChecked.length < 1) fail('Checked changelog entries missing');
for (const label of audit.changelogEntriesChecked) if (!changelogLabels.has(label)) fail(`Missing checked changelog ${label}`);
if (!Array.isArray(audit.sensors)) fail('Radar audit sensors missing');
const auditSensorIds = new Set(audit.sensors.map((sensor) => sensor?.id));
if (auditSensorIds.has(undefined) || auditSensorIds.size !== audit.sensors.length || auditSensorIds.size !== declaredSensorIds.size || [...declaredSensorIds].some((id) => !auditSensorIds.has(id))) fail('Radar audit must cover each declared sensor exactly once');
for (const sensor of audit.sensors) {
  if (!sensor || !['checked', 'failed', 'skipped'].includes(sensor.state)) fail(`Invalid sensor state ${sensor?.id}`);
  if (sensor.state !== 'checked') bilingual(sensor.reason, `sensor reason ${sensor.id}`);
}
if (!Array.isArray(audit.staleSources)) fail('Radar stale sources must be explicit');
for (const stale of audit.staleSources) {
  if (!stale || !sourceIds.has(stale.sourceId) || !isoDate(stale.lastChecked)) fail(`Invalid stale source ${stale?.sourceId}`);
  bilingual(stale.reason, `stale source ${stale.sourceId}`);
}
const findingKinds = new Set(['material-finding', 'editorial-decision']);
if (!Array.isArray(audit.findings) || ![...findingKinds].every((kind) => audit.findings.some((finding) => finding?.kind === kind))) fail('Radar audit findings incomplete');
for (const finding of audit.findings) {
  if (!finding || !findingKinds.has(finding.kind) || !Array.isArray(finding.targetIds) || finding.targetIds.length < 1) fail('Invalid Radar audit finding');
  for (const id of finding.targetIds) if (!trackedIds.has(id)) fail(`Missing finding target ${id}`);
  if (!Array.isArray(finding.sourceIds) || finding.sourceIds.length < 1 || finding.sourceIds.some((id) => !checkedSourceIds.has(id))) fail(`Missing finding evidence ${finding.kind}`);
  bilingual(finding.summary, `audit finding ${finding.kind}`);
}

for (const item of radar.adoption) {
  if (!ids.has(item.signalId) || !['watch', 'pilot', 'defer'].includes(item.stage) || !compatibilityStatuses.has(item.compatibility)) fail(`Invalid adoption record ${item.signalId}`);
  score(item.score, `adoption ${item.signalId}`);
}

for (const signal of radar.signals) {
  bilingual(signal.name, `name ${signal.id}`);
  if (!['concept', 'discovery-candidate'].includes(signal.kind)) fail(`Invalid kind ${signal.id}`);
  for (const termId of signal.atlasTermIds) if (!atlasIds.has(termId)) fail(`Missing Atlas relationship ${signal.id} -> ${termId}`);
  for (const dimension of radar.scoreScale.dimensions) score(signal.scores[dimension], `${signal.id}.${dimension}`);
  bilingual(signal.recommendation, `recommendation ${signal.id}`);
  if (!Array.isArray(signal.tradeoffs) || signal.tradeoffs.length < 2) fail(`Trade-offs missing ${signal.id}`);
  for (const tradeoff of signal.tradeoffs) bilingual(tradeoff, `trade-off ${signal.id}`);
  if (signal.implementations) {
    if (!Array.isArray(signal.implementations) || signal.implementations.length < 1) fail(`Invalid implementations ${signal.id}`);
    for (const implementation of signal.implementations) {
      if (!implementation || !implementation.name || !implementation.vendor || !implementation.organizationId || !implementation.access) fail(`Incomplete implementation ${signal.id}`);
      if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(implementation.organizationId)) fail(`Invalid implementation organization ${signal.id} -> ${implementation.name}`);
      if (!Array.isArray(implementation.sourceIds) || implementation.sourceIds.length < 1) fail(`Implementation sources missing ${signal.id} -> ${implementation.name}`);
      for (const sourceId of implementation.sourceIds) if (!sourceIds.has(sourceId)) fail(`Missing implementation source ${signal.id} -> ${sourceId}`);
    }
  }
  if (!compatibilityStatuses.has(signal.compatibility.status)) fail(`Invalid compatibility ${signal.id}`);
  bilingual(signal.compatibility.rationale, `compatibility ${signal.id}`);
  if (!Array.isArray(signal.history) || signal.history.length < 1) fail(`History missing ${signal.id}`);
  for (const entry of signal.history) {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(entry.date)) fail(`Invalid history date ${signal.id}`);
    bilingual(entry.event, `history ${signal.id}`);
    for (const dimension of radar.scoreScale.dimensions) score(entry.scores[dimension], `history ${signal.id}.${dimension}`);
  }
  if (!signal.provenance || typeof signal.provenance !== 'object' || !Array.isArray(signal.provenance.sourceIds)) fail(`Invalid provenance ${signal.id}`);
  if (!provenanceKinds.has(signal.provenance.kind) || !provenanceStatuses.has(signal.provenance.status)) fail(`Invalid provenance ${signal.id}`);
  if (!/^\d{4}-\d{2}-\d{2}$/.test(signal.provenance.collectedAt)) fail(`Invalid provenance date ${signal.id}`);
  bilingual(signal.provenance.method, `provenance ${signal.id}`);
  for (const sourceId of signal.provenance.sourceIds) if (!sourceIds.has(sourceId)) fail(`Missing provenance source ${signal.id} -> ${sourceId}`);
}

if (discovery.schema !== 'stangyode.github-discovery/v1' || discovery.credentialsRequired !== false) fail('GitHub discovery must remain credential-free');
bilingual(discovery.policy, 'GitHub discovery policy');
if (!Array.isArray(discovery.queries) || discovery.queries.length < 1) fail('GitHub discovery queries missing');
if (!Array.isArray(discovery.signals) || discovery.signals.some((signal) => !['unknown', 'unverified', 'partially-verified', 'verified', 'contradicted'].includes(signal.status))) {
  fail('GitHub signals must carry an explicit evidence state');
}

if (regressions.schema !== 'stangyode.radar-regressions/v1' || !Array.isArray(regressions.fixtures) || regressions.fixtures.length < 3) fail('Radar regression fixtures missing');
const fixtureIds = new Set();
for (const fixture of regressions.fixtures) {
  if (!fixture || typeof fixture.id !== 'string' || !fixture.id || fixtureIds.has(fixture.id) || typeof fixture.type !== 'string') fail('Invalid Radar regression fixture');
  fixtureIds.add(fixture.id);
  if (fixture.type === 'named-category-split') {
    if (![fixture.namedEntityId, fixture.categoryId, fixture.competitorSourceId, fixture.expectedCategoryStage].every((value) => typeof value === 'string' && value)) fail(`Invalid named/category fixture ${fixture.id}`);
    const named = radar.signals.find((signal) => signal.id === fixture.namedEntityId);
    const category = radar.signals.find((signal) => signal.id === fixture.categoryId);
    const namedAdoption = radar.adoption.find((item) => item.signalId === fixture.namedEntityId);
    const categoryAdoption = radar.adoption.find((item) => item.signalId === fixture.categoryId);
    if (!named || !category || named.id === category.id || !namedAdoption || !categoryAdoption) fail(`Named/category split missing ${fixture.id}`);
    const competitorIsCategoryEvidence = category.implementations?.some((implementation) => implementation.sourceIds.includes(fixture.competitorSourceId));
    if (!competitorIsCategoryEvidence || named.provenance.sourceIds.includes(fixture.competitorSourceId)) fail(`Competitor evidence misattributed ${fixture.id}`);
    if (namedAdoption.score >= categoryAdoption.score || categoryAdoption.stage !== fixture.expectedCategoryStage) fail(`Named/category scoring regression ${fixture.id}`);
  } else if (fixture.type === 'history-preservation') {
    if (typeof fixture.signalId !== 'string' || !Array.isArray(fixture.expectedScoreHistory) || fixture.expectedScoreHistory.length < 1) fail(`Invalid history fixture ${fixture.id}`);
    const signal = radar.signals.find((item) => item.id === fixture.signalId);
    const historyScores = signal?.history?.map((entry) => entry.scores);
    if (!historyScores || JSON.stringify(historyScores) !== JSON.stringify(fixture.expectedScoreHistory)) fail(`History regression ${fixture.id}`);
  } else if (fixture.type === 'category-evidence-threshold') {
    if (typeof fixture.signalId !== 'string' || !Number.isInteger(fixture.minimumIndependentOrganizations) || fixture.minimumIndependentOrganizations < 2 || !Array.isArray(fixture.requiredOrganizationIds) || fixture.requiredOrganizationIds.length < fixture.minimumIndependentOrganizations || !Array.isArray(fixture.requiredSourceIds) || fixture.requiredSourceIds.length < fixture.minimumIndependentOrganizations) fail(`Invalid category threshold fixture ${fixture.id}`);
    const signal = radar.signals.find((item) => item.id === fixture.signalId);
    if (!signal || !Array.isArray(signal.implementations)) fail(`Category evidence threshold regression ${fixture.id}`);
    const organizations = new Set(signal.implementations.map((implementation) => implementation.organizationId));
    const implementationSources = new Set(signal.implementations.flatMap((implementation) => implementation.sourceIds));
    if (organizations.size < fixture.minimumIndependentOrganizations) fail(`Category evidence threshold regression ${fixture.id}`);
    for (const organizationId of fixture.requiredOrganizationIds) if (!organizations.has(organizationId)) fail(`Category organization regression ${fixture.id} -> ${organizationId}`);
    for (const sourceId of fixture.requiredSourceIds) if (!implementationSources.has(sourceId)) fail(`Category implementation source regression ${fixture.id} -> ${sourceId}`);
  } else {
    fail(`Unknown Radar regression fixture ${fixture.id}`);
  }
}

const { markdown } = await import('./render-frontier-briefing.mjs');
for (const finding of audit.findings) if (!markdown.includes(`evidence: ${finding.sourceIds.join(', ')}`)) fail(`Missing briefing finding evidence ${finding.kind}`);
if (!markdown.includes('## Radar health / レーダー健全性') || !markdown.includes('github-public: SKIPPED') || !markdown.includes('2026-10-10T05:08:51Z')) fail('Frontier briefing audit is incomplete');
if (artifact !== markdown) fail('Frontier briefing is stale: run npm run build:frontier-radar');
console.log(`Validated ${radar.signals.length} Radar signals, ${radar.adoption.length} adoption records, ${discovery.queries.length} GitHub discovery inputs, provenance/history, and deterministic briefing output.`);
