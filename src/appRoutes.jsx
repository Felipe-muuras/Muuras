import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToHash from './components/scrollToHash/ScrollToHash';
import BackToTop from './components/backToTop/BackToTop';
import PageTransition from './components/pageTransition/PageTransition';
import CookieConsent from './components/cookieConsent/CookieConsent';

// Code-split each page so the browser only downloads the JS for the
// route the visitor actually opens.
const Home = lazy(() => import('./pages/home/Home'));
const Services = lazy(() => import('./pages/services/Services'));
const Products = lazy(() => import('./pages/products/Products'));
const About = lazy(() => import('./pages/about/About'));
const Privacy = lazy(() => import('./pages/privacy/Privacy'));
const Building = lazy(() => import('./pages/building/Building'));

// Full-viewport placeholder on the site's dark-green background so the
// brief chunk load between pages doesn't flash white.
const routeFallback = (
  <div
    style={{
      minHeight: '100vh',
      backgroundColor: '#204725',
    }}
  />
);

export default function AppRoutes() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <ScrollToHash />
      <PageTransition>
        {loc => (
          <Suspense fallback={routeFallback}>
            <Routes location={loc}>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/products" element={<Products />} />
              <Route path="/about" element={<About />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/building" element={<Building />} />
            </Routes>
          </Suspense>
        )}
      </PageTransition>
      <BackToTop />
      <CookieConsent />
    </Router>
  );
}
