import { mkdir, writeFile } from 'node:fs/promises';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { html, stats } from './render-atlas.mjs';

const repo = resolve(dirname(fileURLToPath(import.meta.url)), '../..');
await mkdir(resolve(repo, 'public/ai-engineering'), { recursive: true });
await writeFile(resolve(repo, 'public/ai-engineering/index.html'), html);
console.log(`Generated ${stats.terms} terminology entries, ${stats.ecosystems} ecosystem cards, and ${stats.sources} sources.`);
