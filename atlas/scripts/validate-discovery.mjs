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

const data = JSON.parse(await readFile(resolve(repo, 'atlas/data/discovery-candidates.json'), 'utf8'));
const radar = JSON.parse(await readFile(resolve(repo, 'atlas/data/frontier-radar.json'), 'utf8'));
const sources = JSON.parse(await readFile(resolve(repo, 'atlas/data/sources.json'), 'utf8'));
const radarIds = new Set(radar.signals.map((signal) => signal.id));
const sourceIds = new Set(Object.keys(sources));

if (data.schema !== 'stangyode.discovery-candidates/v1') fail('Invalid discovery schema');
if (!/^\d{4}-\d{2}-\d{2}$/.test(data.generatedAt)) fail('Discovery generatedAt must be an ISO date');
if (data.liveFetch !== false) fail('This run records public observation; liveFetch must stay explicit false until a fetch job exists');
bilingual(data.policy, 'discovery policy');
bilingual(data.regression.note, 'regression note');
if (data.regression.withoutNamedQuery !== true) fail('Jev regression requires withoutNamedQuery');

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
      if (!implementation.name || !implementation.vendor || !implementation.access) fail(`Incomplete implementation ${candidate.id}`);
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
