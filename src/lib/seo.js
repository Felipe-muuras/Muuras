/**
 * Central SEO/GEO source of truth.
 *
 * Pure ESM (no React, no import.meta) so it can be imported by BOTH the
 * client bundle (for updating the tab title on SPA navigation) and the
 * Node prerender script (for baking static <head> metadata + JSON-LD into
 * one HTML file per route).
 */

export const SITE = {
  url: 'https://muuras.nl',
  name: 'Muuras',
  description:
    'Muuras brings wetland ecosystems into cities with space-efficient Wetland Walls that clean surface water, restore biodiversity, and build climate-resilient urban spaces.',
  logo: 'https://muuras.nl/assets/muuras-icon-white.svg',
  linkedin: 'https://www.linkedin.com/company/muuras/',
  email: 'felipe@muuras.nl',
  language: 'en',
  areaServed: 'European Union',
};

/**
 * Per-route SEO. `path` is the router path; `image` is a full URL used for
 * Open Graph / Twitter cards. `faq` names the i18n key prefix so the
 * prerenderer can assemble FAQPage structured data from the translations.
 */
export const PAGES = [
  {
    path: '/',
    name: 'Home',
    title: 'Muuras — Nature-Based Wetland Walls for Resilient Cities',
    description:
      'Muuras reintroduces wetland ecosystems in cities with modular Wetland Walls that purify surface water, boost biodiversity, and make urban areas climate-resilient.',
    image: `${SITE.url}/assets/green-facade-climate-resilient-building.png`,
    faq: 'homeFaq',
  },
  {
    path: '/services',
    name: 'Services',
    title: 'Sustainability & Environmental Consulting Services — Muuras',
    description:
      'Environmental impact assessments, sustainability reporting and strategy, process optimization, and R&D — Muuras turns science and field experience into resilient, compliant solutions.',
    image: `${SITE.url}/assets/hands-scooping-clean-water-lake.jpg`,
    faq: 'servicesFaq',
    breadcrumb: true,
  },
  {
    path: '/products',
    name: 'Products',
    title: 'Wetland Walls — Nature-Based Water Treatment | Muuras',
    description:
      'Discover Muuras Wetland Walls: modular green-wall systems that reintroduce endemic wetland ecosystems in cities to purify surface water and create healthier urban environments.',
    image: `${SITE.url}/assets/muuras-wetland-wall-prototype.png`,
    faq: 'productsFaq',
    breadcrumb: true,
  },
  {
    path: '/about',
    name: 'About',
    title: 'About Muuras — Our Mission, Values & Team',
    description:
      'Meet the multidisciplinary team behind Muuras and our mission to reintroduce wetland ecosystems in cities for cleaner water, biodiversity, and climate-resilient urban life.',
    image: `${SITE.url}/assets/old-trees-sunlight-forest-values.jpg`,
    breadcrumb: true,
  },
  {
    path: '/privacy',
    name: 'Privacy & Cookies',
    title: 'Privacy & Cookie Policy — Muuras',
    description:
      'How Muuras handles personal data and cookies: what we collect, the analytics we use, your rights under the GDPR, and how to contact us.',
    image: `${SITE.url}/assets/green-facade-climate-resilient-building.png`,
    breadcrumb: true,
  },
];

export const getPage = path => PAGES.find(p => p.path === path);

// Trailing slash matches the prerendered directory layout
// (/services -> /services/index.html), so the canonical URL is served
// directly with no redirect.
const absUrl = path => (path === '/' ? `${SITE.url}/` : `${SITE.url}${path}/`);

/* ---------------------------------------------------------------------- *
 * Structured data (JSON-LD) — the primary signal generative engines and
 * rich-result crawlers read. Everything is emitted as one @graph.
 * ---------------------------------------------------------------------- */

const organizationNode = () => ({
  '@type': 'Organization',
  '@id': `${SITE.url}/#organization`,
  name: SITE.name,
  url: `${SITE.url}/`,
  logo: SITE.logo,
  description: SITE.description,
  email: SITE.email,
  sameAs: [SITE.linkedin],
  areaServed: { '@type': 'Place', name: SITE.areaServed },
  knowsAbout: [
    'Nature-based solutions',
    'Wetland ecosystems',
    'Urban water management',
    'Green walls',
    'Climate resilience',
    'Sustainability reporting',
    'Surface water quality',
  ],
});

const websiteNode = () => ({
  '@type': 'WebSite',
  '@id': `${SITE.url}/#website`,
  url: `${SITE.url}/`,
  name: SITE.name,
  description: SITE.description,
  inLanguage: SITE.language,
  publisher: { '@id': `${SITE.url}/#organization` },
});

const webPageNode = page => ({
  '@type': 'WebPage',
  '@id': `${absUrl(page.path)}#webpage`,
  url: absUrl(page.path),
  name: page.title,
  description: page.description,
  isPartOf: { '@id': `${SITE.url}/#website` },
  about: { '@id': `${SITE.url}/#organization` },
  inLanguage: SITE.language,
  primaryImageOfPage: page.image,
});

const breadcrumbNode = page => ({
  '@type': 'BreadcrumbList',
  '@id': `${absUrl(page.path)}#breadcrumb`,
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE.url}/` },
    { '@type': 'ListItem', position: 2, name: page.name, item: absUrl(page.path) },
  ],
});

const faqNode = (page, items) => ({
  '@type': 'FAQPage',
  '@id': `${absUrl(page.path)}#faq`,
  mainEntity: items.map(({ question, answer }) => ({
    '@type': 'Question',
    name: question,
    acceptedAnswer: { '@type': 'Answer', text: answer },
  })),
});

const servicesNode = names => ({
  '@type': 'ItemList',
  '@id': `${SITE.url}/services#services`,
  name: 'Muuras services',
  itemListElement: names.map((name, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    item: {
      '@type': 'Service',
      name,
      provider: { '@id': `${SITE.url}/#organization` },
      areaServed: { '@type': 'Place', name: SITE.areaServed },
    },
  })),
});

const productNode = description => ({
  '@type': 'Product',
  '@id': `${SITE.url}/products#wetland-wall`,
  name: 'Wetland Wall',
  category: 'Nature-based water treatment system',
  description,
  brand: { '@id': `${SITE.url}/#organization` },
  manufacturer: { '@id': `${SITE.url}/#organization` },
});

/**
 * Collect the sequential i18n FAQ entries (prefix + Question/Answer + n)
 * for a page from a flat translations object.
 */
const collectFaq = (prefix, t) => {
  const items = [];
  for (let i = 1; ; i += 1) {
    const q = t[`${prefix}Question${i}`];
    const a = t[`${prefix}Answer${i}`];
    if (!q || !a) break;
    items.push({ question: q, answer: a });
  }
  return items;
};

/**
 * Build the full @graph of structured data for a page.
 * `t` is a flat { key: string } translations map (English).
 */
export function buildJsonLd(page, t = {}) {
  const graph = [organizationNode(), websiteNode(), webPageNode(page)];

  if (page.breadcrumb) graph.push(breadcrumbNode(page));

  if (page.faq) {
    const items = collectFaq(page.faq, t);
    if (items.length) graph.push(faqNode(page, items));
  }

  if (page.path === '/services') {
    const names = [1, 2, 3, 4]
      .map(i => t[`servicesCardTitle${i}`])
      .filter(Boolean);
    if (names.length) graph.push(servicesNode(names));
  }

  if (page.path === '/products') {
    graph.push(productNode(t.productsPageSubtitle || page.description));
  }

  return { '@context': 'https://schema.org', '@graph': graph };
}

/* ---------------------------------------------------------------------- *
 * Head-tag string builder (used by the prerender script).
 * ---------------------------------------------------------------------- */

const esc = s =>
  String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

/** Escape a JSON string for safe embedding inside a <script> element. */
const jsonForScript = obj =>
  JSON.stringify(obj).replace(/</g, "\\u003c").replace(/>/g, "\\u003e").replace(/&/g, "\\u0026");

/**
 * Returns the per-route <head> markup: title, description, canonical,
 * Open Graph, Twitter, and the JSON-LD @graph.
 */
export function buildHead(page, t = {}) {
  const url = absUrl(page.path);
  const jsonLd = jsonForScript(buildJsonLd(page, t));

  return [
    `<title>${esc(page.title)}</title>`,
    `<meta name="description" content="${esc(page.description)}" />`,
    `<link rel="canonical" href="${url}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="${esc(SITE.name)}" />`,
    `<meta property="og:title" content="${esc(page.title)}" />`,
    `<meta property="og:description" content="${esc(page.description)}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:image" content="${esc(page.image || `${SITE.url}/assets/green-facade-climate-resilient-building.png`)}" />`,
    `<meta property="og:locale" content="en_US" />`,
    `<meta property="og:locale:alternate" content="nl_NL" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${esc(page.title)}" />`,
    `<meta name="twitter:description" content="${esc(page.description)}" />`,
    `<meta name="twitter:image" content="${esc(page.image || `${SITE.url}/assets/green-facade-climate-resilient-building.png`)}" />`,
    `<script type="application/ld+json">${jsonLd}</script>`,
  ].join('\n    ');
}
