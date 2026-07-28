/**
 * Server entry used only at build time by scripts/prerender.mjs.
 *
 * Renders a route to a static HTML string (with styled-components CSS
 * collected) so each page ships real, crawlable content — no JS required.
 * Pages are imported directly (not via React.lazy) so they render
 * synchronously to a string.
 */
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import { Routes, Route } from 'react-router-dom';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';

import './lib/i18n';
import Home from './pages/home/Home.jsx';
import Services from './pages/services/Services.jsx';
import Products from './pages/products/Products.jsx';
import About from './pages/about/About.jsx';
import Privacy from './pages/privacy/Privacy.jsx';

export function render(path) {
  const sheet = new ServerStyleSheet();
  try {
    const html = renderToString(
      <StyleSheetManager sheet={sheet.instance}>
        <StaticRouter location={path}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/products" element={<Products />} />
            <Route path="/about" element={<About />} />
            <Route path="/privacy" element={<Privacy />} />
          </Routes>
        </StaticRouter>
      </StyleSheetManager>,
    );
    return { html, styleTags: sheet.getStyleTags() };
  } finally {
    sheet.seal();
  }
}
