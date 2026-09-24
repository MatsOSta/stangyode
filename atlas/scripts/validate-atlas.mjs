import { readFile } from 'node:fs/promises';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { html as expectedHtml } from './render-atlas.mjs';

const repo = resolve(dirname(fileURLToPath(import.meta.url)), '../..');
const load = async (name) => JSON.parse(await readFile(resolve(repo, `atlas/data/${name}`), 'utf8'));
const [data, sources, changelog, html] = await Promise.all([load('atlas.json'), load('sources.json'), load('changelog.json'), readFile(resolve(repo, 'public/ai-engineering/index.html'), 'utf8')]);
const fail = (message) => { throw new Error(message); };
const count = (pattern) => (html.match(pattern) || []).length;
const bilingual = (value, label) => value && typeof value.en === 'string' && value.en.trim() && typeof value.ja === 'string' && value.ja.trim() || fail(`Missing bilingual ${label}`);
const ids = new Set(data.terms.map((term) => term.id));
const layerIds = new Set(data.layers.map((layer) => layer.id));
const allowedKinds = new Set(['concept','methodology','pattern','architecture','runtime','control','capability','protocol','extension','risk','mechanism','property','signal','standard','framework','governance']);
const allowedStatuses = new Set(['CORE','RISING','EVOLVING']);
if (data.terms.length !== 85 || ids.size !== data.terms.length) fail(`Expected 85 unique terms, got ${data.terms.length}`);
if (data.ecosystems.length !== 11 || new Set(data.ecosystems.map((item) => item.id)).size !== 11) fail('Expected 11 unique ecosystems');
for (const layer of data.layers) { if (!layer.id || !layer.en || !layer.ja) fail(`Invalid layer ${layer.id}`); bilingual(layer.orientation, `orientation ${layer.id}`); }
for (const term of data.terms) {
  if (!term.id || !term.title?.en || !term.title?.ja || !layerIds.has(term.layer) || !allowedKinds.has(term.kind) || !allowedStatuses.has(term.status)) fail(`Invalid term ${term.id}`);
  bilingual(term.definition, `definition ${term.id}`); if (term.why) bilingual(term.why, `why ${term.id}`);
  for (const related of term.relatedIds || []) if (!ids.has(related)) fail(`Missing related target ${term.id} -> ${related}`);
  for (const sourceId of term.sourceIds) if (!sources[sourceId]) fail(`Missing term source ${term.id} -> ${sourceId}`);
}
for (const item of data.ecosystems) { bilingual(item.name, `ecosystem name ${item.id}`); bilingual(item.category, `ecosystem category ${item.id}`); bilingual(item.role, `ecosystem role ${item.id}`); bilingual(item.mentalModel, `mental model ${item.id}`); if (!item.components?.en?.length || item.components.en.length !== item.components.ja.length) fail(`Invalid components ${item.id}`); for (const sourceId of item.sourceIds) if (!sources[sourceId]) fail(`Missing ecosystem source ${item.id} -> ${sourceId}`); }
for (const [id, item] of Object.entries(sources)) { if (!item.title || !/^https:\/\//.test(item.url)) fail(`Invalid source ${id}`); bilingual(item.note, `source note ${id}`); }
for (const [key, value] of Object.entries(data.ui)) { if (key === 'stackExamples') continue; bilingual(value, `ui field ${key}`); }
if (!data.ui.stackExamples?.en?.length || data.ui.stackExamples.en.length !== data.ui.stackExamples.ja.length) fail('Stack example language count mismatch');
for (const item of changelog) { if (!item.date || !item.label) fail(`Invalid changelog item ${item.label}`); bilingual(item, `changelog ${item.label}`); }
for (const landmark of ['stack','principle','ecosystems','terminology','synthesis','architecture-watch','obsolescence-radar','sources']) if (!html.includes(`id="${landmark}"`)) fail(`Missing route landmark ${landmark}`);
if (count(/class="term-card"/g) !== data.terms.length) fail('Generated term count mismatch');
if (count(/class="ecosystem-card"/g) !== data.ecosystems.length) fail('Generated ecosystem count mismatch');
for (const term of data.terms) if (!html.includes(`id="term-${term.id}"`)) fail(`Missing term ${term.id}`);
for (const item of data.ecosystems) if (!html.includes(`id="ecosystem-${item.id}"`)) fail(`Missing ecosystem ${item.id}`);
for (const control of ['id="search"','id="layer"','id="kind"','id="status"','id="result-count"']) if (!html.includes(control)) fail(`Missing filter ${control}`);
for (const token of ['data-en=','data-ja=','Architecture Watch','TURN FAILURE INTO EVAL','RUN REGRESSION SUITE','Primary sources first.']) if (!html.includes(token)) fail(`Missing generated content ${token}`);
const logoPath = 'M4 9.5 17 2l13 7.5v15L17 32 4 24.5z'; const innerPath = 'm10 13 7-4 7 4-7 4-7 4 7 4 7-4';
if (html.split(`<path d="${logoPath}"`).length - 1 < 2 || html.split(`<path d="${innerPath}"`).length - 1 < 2) fail('Canonical logo paths missing');
if (html !== expectedHtml) fail('Generated Atlas HTML is stale: run npm run build:atlas and review the diff');
console.log(`Validated ${data.terms.length} terms, ${data.ecosystems.length} ecosystems, ${Object.keys(sources).length} sources, relationships, bilingual fields, generated landmarks, filters, changelog, and canonical logos.`);
