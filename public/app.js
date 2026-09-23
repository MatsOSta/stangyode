const translations = window.STANGYODE_TRANSLATIONS;
const languageButton = document.querySelector('#language-toggle');
const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#site-nav');

function savedLanguage() {
  try {
    return localStorage.getItem('stangyode-language') === 'ja' ? 'ja' : 'en';
  } catch {
    return 'en';
  }
}

function setLanguage(language, persist = true) {
  const locale = language === 'ja' ? 'ja' : 'en';
  const copy = translations[locale];

  document.documentElement.lang = locale;
  document.documentElement.dataset.language = locale;
  document.title = copy['meta.title'];
  document.querySelector('meta[name="description"]').content = copy['meta.description'];
  document.querySelector('meta[property="og:title"]').content = copy['meta.ogTitle'];
  document.querySelector('meta[property="og:description"]').content = copy['meta.ogDescription'];

  document.querySelectorAll('[data-i18n]').forEach((element) => {
    element.textContent = copy[element.dataset.i18n];
  });
  document.querySelectorAll('[data-i18n-aria-label]').forEach((element) => {
    element.setAttribute('aria-label', copy[element.dataset.i18nAriaLabel]);
  });

  languageButton.setAttribute('aria-pressed', String(locale === 'ja'));
  languageButton.setAttribute('aria-label', copy['a11y.switchLanguage']);
  const menuLabel = menuButton.querySelector('[data-menu-label]');
  menuLabel.textContent = copy[menuButton.getAttribute('aria-expanded') === 'true' ? 'a11y.closeMenu' : 'a11y.openMenu'];

  if (persist) {
    try {
      localStorage.setItem('stangyode-language', locale);
    } catch {}
  }
}

languageButton?.addEventListener('click', () => {
  setLanguage(document.documentElement.lang === 'ja' ? 'en' : 'ja');
});

menuButton?.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  navigation.classList.toggle('open', !isOpen);
  const copy = translations[document.documentElement.lang];
  menuButton.querySelector('[data-menu-label]').textContent = copy[isOpen ? 'a11y.openMenu' : 'a11y.closeMenu'];
});

navigation?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    menuButton?.setAttribute('aria-expanded', 'false');
    navigation.classList.remove('open');
    menuButton.querySelector('[data-menu-label]').textContent = translations[document.documentElement.lang]['a11y.openMenu'];
  });
});

setLanguage(savedLanguage(), false);

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const revealItems = document.querySelectorAll('.reveal');

if (reducedMotion || !('IntersectionObserver' in window)) {
  revealItems.forEach((item) => item.classList.add('visible'));
} else {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px' });
  revealItems.forEach((item) => observer.observe(item));
}

const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();
