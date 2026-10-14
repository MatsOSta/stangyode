import { readFile } from 'node:fs/promises';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const repo = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const fail = (message) => { throw new Error(message); };

const requiredPages = [
  {
    file: 'public/index.html',
    canonical: 'https://stangyode.com/',
    structuredType: 'Person',
  },
  {
    file: 'public/ai-engineering/index.html',
    canonical: 'https://stangyode.com/ai-engineering/',
    structuredType: 'CreativeWork',
  },
];

const requiredSocialImage = 'https://stangyode.com/assets/og-stangyode.png';
const requiredMeta = [
  ['property', 'og:type'],
  ['property', 'og:title'],
  ['property', 'og:description'],
  ['property', 'og:url'],
  ['property', 'og:image'],
  ['property', 'og:image:width'],
  ['property', 'og:image:height'],
  ['property', 'og:image:alt'],
  ['name', 'twitter:card'],
  ['name', 'twitter:title'],
  ['name', 'twitter:description'],
  ['name', 'twitter:image'],
];

for (const page of requiredPages) {
  const html = await readFile(resolve(repo, page.file), 'utf8');
  for (const [attribute, value] of requiredMeta) {
    if (!html.includes(`${attribute}="${value}"`)) fail(`${page.file} is missing ${value}`);
  }
  if (!html.includes(`<link rel="canonical" href="${page.canonical}">`)) {
    fail(`${page.file} has no canonical URL for ${page.canonical}`);
  }
  if (!html.includes('<link rel="icon" href="/favicon.svg" type="image/svg+xml">')) {
    fail(`${page.file} is missing the SVG favicon`);
  }
  if (!html.includes(`property="og:url" content="${page.canonical}"`)) {
    fail(`${page.file} Open Graph URL does not match its canonical URL`);
  }
  for (const socialTag of ['property="og:image"', 'name="twitter:image"']) {
    if (!html.includes(`${socialTag} content="${requiredSocialImage}"`)) {
      fail(`${page.file} does not use the canonical social image for ${socialTag}`);
    }
  }
  if (!html.includes('<meta name="twitter:card" content="summary_large_image">')) {
    fail(`${page.file} must use a large-image social card`);
  }
  const structuredData = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)];
  if (!structuredData.length) fail(`${page.file} is missing structured data`);
  const parsed = structuredData.map((match) => JSON.parse(match[1]));
  const structuredRecord = parsed.find((item) => item['@type'] === page.structuredType);
  if (!structuredRecord) fail(`${page.file} is missing ${page.structuredType} structured data`);
  if (structuredRecord['@context'] !== 'https://schema.org') {
    fail(`${page.file} structured data must use https://schema.org`);
  }
  if (structuredRecord.url !== page.canonical) {
    fail(`${page.file} structured-data URL does not match its canonical URL`);
  }
  if (typeof structuredRecord.name !== 'string' || !structuredRecord.name.trim()) {
    fail(`${page.file} structured data must have a non-empty name`);
  }
  if (page.structuredType === 'CreativeWork' && structuredRecord.author?.['@type'] !== 'Person') {
    fail(`${page.file} CreativeWork structured data must identify a Person author`);
  }
}

const [robots, sitemap, favicon, socialImage, packageSource] = await Promise.all([
  readFile(resolve(repo, 'public/robots.txt'), 'utf8'),
  readFile(resolve(repo, 'public/sitemap.xml'), 'utf8'),
  readFile(resolve(repo, 'public/favicon.svg'), 'utf8'),
  readFile(resolve(repo, 'public/assets/og-stangyode.png')),
  readFile(resolve(repo, 'package.json'), 'utf8'),
]);

if (!robots.includes('Sitemap: https://stangyode.com/sitemap.xml')) fail('robots.txt must declare the canonical sitemap');
if (!sitemap.startsWith('<?xml version="1.0" encoding="UTF-8"?>')) fail('sitemap.xml must declare UTF-8 XML');
if (!sitemap.includes('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">') || !sitemap.includes('</urlset>')) {
  fail('sitemap.xml must use the sitemap protocol urlset');
}
const sitemapUrls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
const expectedSitemapUrls = requiredPages.map((page) => page.canonical);
for (const value of sitemapUrls) {
  let parsed;
  try {
    parsed = new URL(value);
  } catch {
    fail(`sitemap.xml contains an invalid URL: ${value}`);
  }
  if (parsed.protocol !== 'https:' || parsed.hostname !== 'stangyode.com') {
    fail(`sitemap.xml contains a non-canonical origin: ${value}`);
  }
}
if (sitemapUrls.length !== expectedSitemapUrls.length || expectedSitemapUrls.some((value) => !sitemapUrls.includes(value))) {
  fail(`sitemap.xml URLs differ from canonical pages: ${sitemapUrls.join(', ')}`);
}
if (!favicon.includes('<svg') || !favicon.includes('#c7ff45')) fail('favicon.svg is missing the Stangyode mark or accent');
if (socialImage.toString('ascii', 1, 4) !== 'PNG') fail('Social image is not a PNG');
const width = socialImage.readUInt32BE(16);
const height = socialImage.readUInt32BE(20);
if (width !== 1200 || height !== 630) fail(`Social image must be 1200x630, received ${width}x${height}`);

const packageData = JSON.parse(packageSource);
if (!packageData.description.includes('public engineering record')) fail('package.json must describe Stangyode as a public engineering record');
if (/company homepage/i.test(packageData.description)) fail('package.json must not describe Stangyode as a company homepage');

console.log(`Validated metadata for ${requiredPages.length} pages, sitemap, robots, favicon, structured data, and 1200x630 social image.`);
