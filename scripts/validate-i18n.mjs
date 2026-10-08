import { readFile } from 'node:fs/promises';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import vm from 'node:vm';

const repo = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const fail = (message) => { throw new Error(message); };

const [html, source] = await Promise.all([
  readFile(resolve(repo, 'public/index.html'), 'utf8'),
  readFile(resolve(repo, 'public/translations.js'), 'utf8'),
]);

if (html.includes('const translations =')) {
  fail('Homepage still embeds inline translations; copy must live in public/translations.js');
}
if (!html.includes('src="translations.js"') || !html.includes('src="app.js"')) {
  fail('Homepage must load translations.js and app.js');
}

const context = { window: {} };
vm.runInNewContext(source, context);
const translations = context.window.STANGYODE_TRANSLATIONS;
if (!translations?.en || !translations?.ja) fail('STANGYODE_TRANSLATIONS.en and .ja are required');

const enKeys = Object.keys(translations.en).sort();
const jaKeys = Object.keys(translations.ja).sort();
if (enKeys.join('\n') !== jaKeys.join('\n')) {
  const onlyEn = enKeys.filter((key) => !translations.ja[key]);
  const onlyJa = jaKeys.filter((key) => !translations.en[key]);
  fail(`English and Japanese keys differ. onlyEn=${onlyEn.join(',')} onlyJa=${onlyJa.join(',')}`);
}

for (const locale of ['en', 'ja']) {
  for (const [key, value] of Object.entries(translations[locale])) {
    if (typeof value !== 'string' || !value.trim()) fail(`Empty ${locale} copy for ${key}`);
  }
}

const bound = [...new Set([
  ...[...html.matchAll(/data-i18n="([^"]+)"/g)].map((match) => match[1]),
  ...[...html.matchAll(/data-i18n-aria-label="([^"]+)"/g)].map((match) => match[1]),
])];
const requiredRuntime = ['meta.title', 'meta.description', 'meta.ogTitle', 'meta.ogDescription', 'a11y.openMenu', 'a11y.closeMenu', 'a11y.switchLanguage'];
const missing = [...bound, ...requiredRuntime].filter((key) => !translations.en[key]);
if (missing.length) fail(`Missing translation keys: ${missing.join(', ')}`);

const unused = enKeys.filter((key) => !bound.includes(key) && !requiredRuntime.includes(key));
if (unused.length) fail(`Unused translation keys: ${unused.join(', ')}`);

console.log(`Validated homepage i18n: ${enKeys.length} bilingual keys, ${bound.length} bound elements, EN/JA lockstep.`);
