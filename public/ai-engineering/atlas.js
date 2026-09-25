const root = document.documentElement;
const cards = [...document.querySelectorAll('.term-card')];
const groups = [...document.querySelectorAll('.term-group')];
const search = document.querySelector('#search');
const layer = document.querySelector('#layer');
const kind = document.querySelector('#kind');
const status = document.querySelector('#status');
const resultCount = document.querySelector('#result-count');
const empty = document.querySelector('#no-results');
const radarCards = [...document.querySelectorAll('[data-radar-card]')];
const radarSearch = document.querySelector('#radar-search');
const radarStage = document.querySelector('#radar-stage');
const radarCompatibility = document.querySelector('#radar-compatibility');
const radarResultCount = document.querySelector('#radar-result-count');
const radarEmpty = document.querySelector('#radar-no-results');
const languageButtons = [...document.querySelectorAll('#language-toggle, #language-toggle-mobile')];

function safeStorageGet(key) { try { return window.localStorage.getItem(key); } catch { return null; } }
function safeStorageSet(key, value) { try { window.localStorage.setItem(key, value); } catch { /* privacy mode */ } }
function setLocale(locale) {
  const selected = locale === 'ja' ? 'ja' : 'en';
  const japanese = selected === 'ja';
  root.lang = selected; root.dataset.language = selected; document.body.classList.toggle('ja', japanese);
  const title = japanese ? 'AIエンジニアリング・アトラス — Stangyode' : 'AI Engineering Atlas — Stangyode';
  const description = japanese ? 'エージェントのアーキテクチャ、プロトコル、耐久性、証拠を整理する日英バイリンガル・フィールドマニュアル。' : 'A bilingual field manual for agent architecture, protocols, durability, and evidence.';
  document.title = title;
  document.querySelector('meta[name="description"]')?.setAttribute('content', description);
  document.querySelector('meta[property="og:title"]')?.setAttribute('content', title);
  document.querySelector('meta[property="og:description"]')?.setAttribute('content', description);
  document.querySelectorAll('[data-en][data-ja]').forEach((element) => { if (element.dataset.rich === 'true') element.innerHTML = japanese ? element.dataset.ja : element.dataset.en; else element.textContent = japanese ? element.dataset.ja : element.dataset.en; });
  document.querySelectorAll('[data-label-en][data-label-ja]').forEach((element) => element.setAttribute('aria-label', japanese ? element.dataset.labelJa : element.dataset.labelEn));
  if (search) search.placeholder = japanese ? search.dataset.placeholderJa : search.dataset.placeholderEn;
  if (radarSearch) radarSearch.placeholder = japanese ? radarSearch.dataset.placeholderJa : radarSearch.dataset.placeholderEn;
  languageButtons.forEach((button) => { button.setAttribute('aria-pressed', String(japanese)); button.setAttribute('aria-label', japanese ? '英語に切り替える' : 'Switch to Japanese'); });
  safeStorageSet('stangyode-language', selected); filterTerms(); filterRadar();
}
function filterTerms() {
  const query = search?.value.trim().toLowerCase() || ''; const selectedLayer = layer?.value || ''; const selectedKind = kind?.value || ''; const selectedStatus = status?.value || '';
  let visible = 0;
  cards.forEach((card) => { const matches = (!query || card.dataset.search.toLowerCase().includes(query)) && (!selectedLayer || card.dataset.layer === selectedLayer) && (!selectedKind || card.dataset.kind === selectedKind) && (!selectedStatus || card.dataset.status === selectedStatus); card.hidden = !matches; if (matches) visible += 1; });
  groups.forEach((group) => { group.hidden = !group.querySelector('.term-card:not([hidden])'); });
  if (resultCount) resultCount.textContent = `${visible} / ${cards.length} ${root.lang === 'ja' ? '項目' : 'ENTRIES'}`;
  if (empty) empty.hidden = visible !== 0;
}
[search, layer, kind, status].filter(Boolean).forEach((control) => control.addEventListener('input', filterTerms));
function filterRadar() {
  const query = radarSearch?.value.trim().toLowerCase() || ''; const selectedStage = radarStage?.value || ''; const selectedCompatibility = radarCompatibility?.value || '';
  let visible = 0;
  const totalRadarEntries = radarCards.filter((card) => card.classList.contains('radar-card')).length;
  radarCards.forEach((card) => { const matches = (!query || card.dataset.search.toLowerCase().includes(query)) && (!selectedStage || card.dataset.stage === selectedStage) && (!selectedCompatibility || card.dataset.compatibility === selectedCompatibility); card.hidden = !matches; if (matches && card.classList.contains('radar-card')) visible += 1; });
  if (radarResultCount) radarResultCount.textContent = `${visible} / ${totalRadarEntries} ${root.lang === 'ja' ? '項目' : 'ENTRIES'}`;
  if (radarEmpty) radarEmpty.hidden = visible !== 0;
}
[radarSearch, radarStage, radarCompatibility].filter(Boolean).forEach((control) => control.addEventListener('input', filterRadar));
document.querySelectorAll('.term-card a[href^="#term-"]').forEach((link) => link.addEventListener('click', () => {
  const target = document.getElementById(decodeURIComponent(link.hash.slice(1)));
  if (!target?.hidden) return;
  for (const control of [search, layer, kind, status]) if (control) control.value = '';
  filterTerms();
}));
languageButtons.forEach((button) => button.addEventListener('click', () => setLocale(root.lang === 'ja' ? 'en' : 'ja')));
const navLinks = [...document.querySelectorAll('.section-nav a, .mobile-rail a')];
const observer = new IntersectionObserver((observed) => observed.forEach(({ isIntersecting, target }) => { if (isIntersecting) navLinks.forEach((link) => link.toggleAttribute('aria-current', link.getAttribute('href') === `#${target.id}`)); }), { rootMargin: '-25% 0px -60% 0px' });
document.querySelectorAll('main > section[id]').forEach((section) => observer.observe(section));
setLocale(safeStorageGet('stangyode-language') || 'en');
