import { content } from './data/content';

export type Lang = 'es' | 'en';
export type PageKey = 'home' | 'services' | 'contact';

export const routes: Record<Lang, Record<PageKey, string>> = {
  es: { home: '/', services: '/servicios/', contact: '/contacto/' },
  en: { home: '/en/', services: '/en/services/', contact: '/en/contact/' },
};

export const getLang = (url: URL): Lang =>
  url.pathname === '/en' || url.pathname.startsWith('/en/') ? 'en' : 'es';

export const getPage = (url: URL): PageKey => {
  const path = url.pathname.replace(/\/$/, '') || '/';
  for (const lang of ['es', 'en'] as Lang[]) {
    for (const [key, href] of Object.entries(routes[lang])) {
      if ((href.replace(/\/$/, '') || '/') === path) return key as PageKey;
    }
  }
  return 'home';
};

export const useI18n = (url: URL) => {
  const lang = getLang(url);
  return { lang, t: content[lang], r: routes[lang] };
};
