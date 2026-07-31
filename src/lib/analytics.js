/**
 * Consent-gated analytics loader.
 *
 * GDPR/ePrivacy require PRIOR opt-in before any non-essential tracking runs,
 * so Google Analytics and Microsoft Clarity are NOT in index.html — they are
 * injected here only after the visitor accepts cookies (see CookieConsent).
 */

const CONSENT_KEY = 'muuras-cookie-consent'; // 'granted' | 'denied'
const GA_ID = 'G-6ZQWY6HMB4';
const CLARITY_ID = 'xqzrfsoobw';

export function getConsent() {
  try {
    return localStorage.getItem(CONSENT_KEY);
  } catch {
    return null;
  }
}

export function setConsent(value) {
  try {
    localStorage.setItem(CONSENT_KEY, value);
  } catch {
    /* storage unavailable (private mode etc.) — the banner just reappears */
  }
}

let loaded = false;

/** Inject GA4 + Microsoft Clarity. Safe to call more than once. */
export function loadAnalytics() {
  if (loaded || typeof window === 'undefined') return;
  loaded = true;

  // --- Google Analytics 4 (gtag.js) ---
  const ga = document.createElement('script');
  ga.async = true;
  ga.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(ga);

  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }
  window.gtag = gtag;
  gtag('js', new Date());
  gtag('config', GA_ID);

  // --- Microsoft Clarity ---
  (function (c, l, a, r, i) {
    c[a] =
      c[a] ||
      function () {
        (c[a].q = c[a].q || []).push(arguments);
      };
    const t = l.createElement(r);
    t.async = 1;
    t.src = 'https://www.clarity.ms/tag/' + i;
    const y = l.getElementsByTagName(r)[0];
    y.parentNode.insertBefore(t, y);
  })(window, document, 'clarity', 'script', CLARITY_ID);
}
