import { useEffect } from 'react';
import { SITE, getPage } from './seo';

/**
 * Keeps the document title, meta description and canonical link in sync with
 * the current route during client-side SPA navigation.
 *
 * The static prerender already bakes the correct <head> into each route's
 * HTML for crawlers; this hook handles in-app navigation (and acts as a
 * safety net if a host serves the SPA fallback for an extensionless URL).
 */
const upsert = (selector, create) => {
  let el = document.head.querySelector(selector);
  if (!el) {
    el = create();
    document.head.appendChild(el);
  }
  return el;
};

export default function useSeo(path) {
  useEffect(() => {
    const page = getPage(path);
    if (!page) return;

    document.title = page.title;

    const desc = upsert('meta[name="description"]', () => {
      const m = document.createElement('meta');
      m.setAttribute('name', 'description');
      return m;
    });
    desc.setAttribute('content', page.description);

    const canonical = upsert('link[rel="canonical"]', () => {
      const l = document.createElement('link');
      l.setAttribute('rel', 'canonical');
      return l;
    });
    canonical.setAttribute(
      'href',
      path === '/' ? `${SITE.url}/` : `${SITE.url}${path}/`,
    );
  }, [path]);
}
