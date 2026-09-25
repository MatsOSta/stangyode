import { readFile } from 'node:fs/promises';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { markdown } from './render-frontier-briefing.mjs';

const repo = resolve(dirname(fileURLToPath(import.meta.url)), '../..');
const load = async (path) => JSON.parse(await readFile(resolve(repo, path), 'utf8'));
const fail = (message) => { throw new Error(message); };
const bilingual = (value, label) => {
  if (!value || typeof value.en !== 'string' || !value.en.trim() || typeof value.ja !== 'string' || !value.ja.trim()) fail(`Missing bilingual ${label}`);
};
const score = (value, label) => {
  if (!Number.isInteger(value) || value < 0 || value > 100) fail(`Invalid score ${label}: ${value}`);
};

const [radar, discovery, atlas, sources, artifact] = await Promise.all([
  load('atlas/data/frontier-radar.json'),
  load('atlas/data/github-discovery.json'),
  load('atlas/data/atlas.json'),
  load('atlas/data/sources.json'),
  readFile(resolve(repo, 'atlas/artifacts/frontier-radar-briefing.md'), 'utf8'),
]);
if (radar.schema !== 'stangyode.frontier-radar/v1') fail('Invalid Radar schema');
if (radar.meta.snapshot !== '2026-09-24') fail('Seed snapshot must remain explicit');
if (radar.scoreScale.min !== 0 || radar.scoreScale.max !== 100) fail('Invalid score scale');
const expectedIds = ['agent-skills', 'mcp-apps', 'a2a', 'agentic-resource-discovery-ard', 'context-engineering', 'ponytail', 'caveman'];
const ids = new Set(radar.signals.map((signal) => signal.id));
if (radar.signals.length !== expectedIds.length || expectedIds.some((id) => !ids.has(id))) fail('Radar seed set is incomplete or duplicated');
const atlasIds = new Set(atlas.terms.map((term) => term.id));
const sourceIds = new Set(Object.keys(sources));
const adoptionIds = new Set(radar.adoption.map((item) => item.signalId));
if (radar.adoption.length !== radar.signals.length || adoptionIds.size !== radar.adoption.length) fail('Adoption intelligence does not cover each signal exactly once');
for (const item of radar.adoption) {
  if (!ids.has(item.signalId) || !['watch', 'pilot', 'defer'].includes(item.stage) || item.compatibility !== 'unknown') fail(`Invalid adoption record ${item.signalId}`);
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
  if (signal.compatibility.status !== 'unknown') fail(`Compatibility must remain unknown for seed ${signal.id}`);
  bilingual(signal.compatibility.rationale, `compatibility ${signal.id}`);
  if (!Array.isArray(signal.history) || signal.history.length < 1) fail(`History missing ${signal.id}`);
  for (const entry of signal.history) { if (!/^\d{4}-\d{2}-\d{2}$/.test(entry.date)) fail(`Invalid history date ${signal.id}`); bilingual(entry.event, `history ${signal.id}`); for (const dimension of radar.scoreScale.dimensions) score(entry.scores[dimension], `history ${signal.id}.${dimension}`); }
  if (!['seed'].includes(signal.provenance.kind) || !['unverified', 'unknown'].includes(signal.provenance.status)) fail(`Invalid provenance status ${signal.id}`);
  if (!/^\d{4}-\d{2}-\d{2}$/.test(signal.provenance.collectedAt)) fail(`Invalid provenance date ${signal.id}`);
  bilingual(signal.provenance.method, `provenance ${signal.id}`);
  for (const sourceId of signal.provenance.sourceIds) if (!sourceIds.has(sourceId)) fail(`Missing provenance source ${signal.id} -> ${sourceId}`);
}
if (discovery.schema !== 'stangyode.github-discovery/v1' || discovery.provider !== 'github' || discovery.mode !== 'manual-input' || discovery.credentialsRequired !== false || discovery.liveFetch !== false) fail('GitHub discovery must be a credential-free manual input');
bilingual(discovery.policy, 'GitHub discovery policy');
if (!Array.isArray(discovery.queries) || discovery.queries.length < 1) fail('GitHub discovery queries missing');
for (const query of discovery.queries) {
  if (!ids.has(query.candidateId) || !query.query || query.state !== 'not-collected') fail(`Invalid GitHub query ${query.id}`);
}
if (!Array.isArray(discovery.signals) || discovery.signals.some((signal) => signal.status !== 'unknown' && signal.status !== 'unverified')) fail('GitHub signals must be explicitly unknown or unverified');
if (artifact !== markdown) fail('Frontier briefing is stale: run npm run build:frontier-radar');
console.log(`Validated ${radar.signals.length} Radar seeds, ${radar.adoption.length} adoption records, ${discovery.queries.length} GitHub discovery inputs, provenance/history, unknown compatibility, and deterministic briefing output.`);
