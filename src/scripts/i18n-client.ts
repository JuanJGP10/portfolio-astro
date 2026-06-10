import { translations, type Lang, type TranslationKey } from '../i18n/translations';
export type { Lang };

const STORAGE_KEY = 'lang';
const DEFAULT_LANG: Lang = 'es';

export function getLang(): Lang {
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored === 'es' || stored === 'en' ? stored : DEFAULT_LANG;
}

export function applyLang(lang: Lang): void {
  document.documentElement.setAttribute('data-lang', lang);
  document.documentElement.lang = lang;

  const t = translations[lang];
  document.querySelectorAll<HTMLElement>('[data-i18n]').forEach((el) => {
    const key = el.dataset.i18n as TranslationKey;
    if (key in t) el.textContent = t[key];
  });
}

export function setLang(lang: Lang): void {
  localStorage.setItem(STORAGE_KEY, lang);
  applyLang(lang);
}

// Apply immediately — module scripts are deferred, DOM is ready
applyLang(getLang());
