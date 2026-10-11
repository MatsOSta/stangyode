import assert from 'node:assert/strict';
import test from 'node:test';
import { validateHtmlRadarAudit, validateMarkdownRadarAudit } from './radar-rendering-contract.mjs';

const audit = {
  asOf: '2026-10-11T06:00:00Z',
  dataStatus: 'current',
  runs: {
    scout: { lastSuccessfulRunAt: '2026-10-11T05:00:00Z' },
    editor: { lastSuccessfulRunAt: '2026-10-11T05:30:00Z' },
  },
  sensors: [
    { id: 'github-public', state: 'checked' },
    { id: 'preprint', state: 'failed', reason: { en: 'Unavailable.', ja: '利用不可。' } },
  ],
};

test('accepts dynamically rendered checked and failed sensor states', () => {
  const html = [
    'id="radar-audit"',
    'data-audit-state="current"',
    audit.asOf,
    audit.runs.scout.lastSuccessfulRunAt,
    audit.runs.editor.lastSuccessfulRunAt,
    '<li><strong>github-public</strong><span class="status status-checked">',
    '<li><strong>preprint</strong><span class="status status-failed">',
  ].join(' ');
  const markdown = [
    '## Radar health / レーダー健全性',
    `As of / 基準時刻: ${audit.asOf}`,
    `- scout: SUCCESS; last success ${audit.runs.scout.lastSuccessfulRunAt}`,
    `- editor: SUCCESS; last success ${audit.runs.editor.lastSuccessfulRunAt}`,
    '- github-public: CHECKED',
    '- preprint: FAILED',
  ].join('\n');

  assert.doesNotThrow(() => validateHtmlRadarAudit(html, audit));
  assert.doesNotThrow(() => validateMarkdownRadarAudit(markdown, audit));
});

test('rejects a stale hard-coded sensor state', () => {
  const staleHtml = [
    'id="radar-audit"',
    'data-audit-state="current"',
    audit.asOf,
    audit.runs.scout.lastSuccessfulRunAt,
    audit.runs.editor.lastSuccessfulRunAt,
    '<li><strong>github-public</strong><span class="status status-skipped">',
    '<li><strong>preprint</strong><span class="status status-failed">',
  ].join(' ');
  const staleMarkdown = [
    '## Radar health / レーダー健全性',
    `As of / 基準時刻: ${audit.asOf}`,
    `- scout: SUCCESS; last success ${audit.runs.scout.lastSuccessfulRunAt}`,
    `- editor: SUCCESS; last success ${audit.runs.editor.lastSuccessfulRunAt}`,
    '- github-public: SKIPPED',
    '- preprint: FAILED',
  ].join('\n');

  assert.throws(() => validateHtmlRadarAudit(staleHtml, audit), /github-public:checked/);
  assert.throws(() => validateMarkdownRadarAudit(staleMarkdown, audit), /github-public: CHECKED/);
});
