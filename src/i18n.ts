import { content } from './data/content';

export type Lang = 'es' | 'en';
export type PageKey = 'home' | 'services' | 'contact' | 'legal';

export const routes: Record<Lang, Record<PageKey, string>> = {
  es: { home: '/', services: '/servicios/', contact: '/contacto/', legal: '/legal/' },
  en: { home: '/en/', services: '/en/services/', contact: '/en/contact/', legal: '/en/legal/' },
};

export const getLang = (url: URL): Lang =>
  url.pathname === '/en' || url.pathname.startsWith('/en/') ? 'en' : 'es';

/** El blog solo existe en español por ahora (/blog/ y /blog/<slug>/). */
export const BLOG_PATH = '/blog/';
export const isBlog = (url: URL) => url.pathname === '/blog' || url.pathname.startsWith(BLOG_PATH);

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
