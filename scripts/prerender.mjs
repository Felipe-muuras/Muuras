/**
 * Post-build prerenderer.
 *
 * For every route it writes a static dist/<route>/index.html that already
 * contains the correct <head> (title, description, canonical, Open Graph,
 * Twitter, JSON-LD) and — when server rendering succeeds — the real page
 * body. This makes each URL fully readable by search engines and AI/LLM
 * crawlers without executing any JavaScript.
 *
 * It also emits robots.txt, sitemap.xml and the SPA 404.html fallback.
 */
import {
  readFileSync,
  writeFileSync,
  mkdirSync,
  copyFileSync,
  existsSync,
} from 'node:fs';
import { resolve, dirname } from 'node:path';
import { pathToFileURL } from 'node:url';

import { PAGES, SITE, buildHead } from '../src/lib/seo.js';

const dist = resolve(process.cwd(), 'dist');
const ssrEntry = resolve(process.cwd(), 'dist-ssr', 'entry-server.js');
const templatePath = resolve(dist, 'index.html');

if (!existsSync(templatePath)) {
  throw new Error('dist/index.html not found — run "vite build" first.');
}

const t = JSON.parse(
  readFileSync(resolve(process.cwd(), 'src/locale/en.json'), 'utf8'),
).translation;

// Load the SSR bundle. If it fails to load, we still bake metadata into
// every page (head-only), so the build never breaks.
let render = null;
try {
  ({ render } = await import(pathToFileURL(ssrEntry).href));
} catch (err) {
  console.warn(`⚠  SSR bundle unavailable (${err.message}). Baking metadata only.`);
}

const baseTemplate = readFileSync(templatePath, 'utf8')
  // Strip any base SEO tags we are about to re-inject per route.
  .replace(/\s*<title>[\s\S]*?<\/title>/i, '')
  .replace(/\s*<meta\s+name="description"[^>]*>/gi, '')
  .replace(/\s*<link\s+rel="canonical"[^>]*>/gi, '')
  .replace(/\s*<meta\s+property="og:[^>]*>/gi, '')
  .replace(/\s*<meta\s+name="twitter:[^>]*>/gi, '');

const writeHtml = (routePath, html) => {
  const outPath =
    routePath === '/'
      ? resolve(dist, 'index.html')
      : resolve(dist, routePath.replace(/^\//, ''), 'index.html');
  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, html);
  return outPath;
};

let bodyCount = 0;

for (const page of PAGES) {
  const head = buildHead(page, t);

  let bodyHtml = '';
  let styleTags = '';
  if (render) {
    try {
      const out = render(page.path);
      bodyHtml = out.html;
      styleTags = out.styleTags;
      if (bodyHtml) bodyCount += 1;
    } catch (err) {
      console.warn(`⚠  SSR body failed for ${page.path}: ${err.message}`);
    }
  }

  let html = baseTemplate
    .replace('</head>', `    ${head}\n    ${styleTags}\n  </head>`)
    .replace(
      /<div id="root">\s*<\/div>/,
      `<div id="root">${bodyHtml}</div>`,
    );

  const out = writeHtml(page.path, html);
  console.log(
    `✓ ${page.path.padEnd(11)} -> ${out.replace(process.cwd() + '/', '')}` +
      (bodyHtml ? '  (with body)' : '  (metadata only)'),
  );
}

/* ---- robots.txt ---------------------------------------------------- */
const robots = `# https://muuras.nl robots policy
User-agent: *
Allow: /

# Explicitly welcome AI / LLM crawlers (GEO)
User-agent: GPTBot
Allow: /
User-agent: OAI-SearchBot
Allow: /
User-agent: ChatGPT-User
Allow: /
User-agent: ClaudeBot
Allow: /
User-agent: Claude-Web
Allow: /
User-agent: PerplexityBot
Allow: /
User-agent: Google-Extended
Allow: /
User-agent: Applebot-Extended
Allow: /

Sitemap: ${SITE.url}/sitemap.xml
`;
writeFileSync(resolve(dist, 'robots.txt'), robots);
console.log('✓ robots.txt');

/* ---- sitemap.xml --------------------------------------------------- */
const today = new Date().toISOString().slice(0, 10);
const urls = PAGES.map(p => {
  const loc = p.path === '/' ? `${SITE.url}/` : `${SITE.url}${p.path}/`;
  const priority = p.path === '/' ? '1.0' : '0.8';
  return `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>${priority}</priority>\n  </url>`;
}).join('\n');
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
writeFileSync(resolve(dist, 'sitemap.xml'), sitemap);
console.log('✓ sitemap.xml');

/* ---- SPA fallback -------------------------------------------------- */
// 404.html mirrors the home document so unknown deep links still boot the
// SPA (GitHub Pages / static-host convention).
copyFileSync(resolve(dist, 'index.html'), resolve(dist, '404.html'));
console.log('✓ 404.html');

console.log(
  `\nPrerender complete: ${PAGES.length} routes, ${bodyCount} with server-rendered body.`,
);
