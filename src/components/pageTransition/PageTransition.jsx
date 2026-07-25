import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { WipeLayer, SeamBand } from './stylePageTransition';

const scrollToHashTarget = (hash, smooth) => {
  const target = hash && document.getElementById(hash.replace('#', ''));
  if (target) {
    target.scrollIntoView({
      behavior: smooth ? 'smooth' : 'auto',
      block: 'start',
    });
    return true;
  }
  return false;
};

const BRAND_GREEN = { r: 32, g: 71, b: 37 };

const parseRgb = str => {
  const m = /(\d+)[,\s]+(\d+)[,\s]+(\d+)/.exec(str || '');
  return m ? { r: +m[1], g: +m[2], b: +m[3] } : null;
};

/**
 * Sample the dominant background colour of the current viewport so the wipe
 * harmonises with what's on screen instead of always being green. Sections
 * tagged for the adaptive header (dark/green backgrounds, often from an image)
 * count as brand green; everything else uses its real background colour.
 * Falls back to brand green.
 */
const sampleWipeColor = () => {
  const w = window.innerWidth;
  const h = window.innerHeight;
  const points = [
    [0.5, 0.5],
    [0.3, 0.4],
    [0.7, 0.4],
    [0.3, 0.72],
    [0.7, 0.72],
    [0.5, 0.3],
  ];
  const tally = {};

  for (const [fx, fy] of points) {
    let node = document.elementFromPoint(w * fx, h * fy);
    let color = null;
    while (node && node !== document.documentElement) {
      if (
        node.dataset &&
        (node.dataset.headerTheme === 'light' ||
          node.dataset.wipeDark !== undefined)
      ) {
        color = 'rgb(32, 71, 37)';
        break;
      }
      const bg = window.getComputedStyle(node).backgroundColor;
      if (bg && bg !== 'rgba(0, 0, 0, 0)' && bg !== 'transparent') {
        color = bg;
        break;
      }
      node = node.parentElement;
    }
    if (!color) color = 'rgb(255, 255, 255)';
    tally[color] = (tally[color] || 0) + 1;
  }

  const best = Object.entries(tally).sort((a, b) => b[1] - a[1])[0];
  const rgb = (best && parseRgb(best[0])) || BRAND_GREEN;

  // Very light sections (white, near-white) would make the band invisible;
  // fall back to a soft brand light-green so the wipe stays visible yet still
  // harmonises with the light palette.
  const luminance = (0.299 * rgb.r + 0.587 * rgb.g + 0.114 * rgb.b) / 255;
  if (luminance > 0.85) {
    return { r: 200, g: 229, b: 203 }; // primaryColor[100]
  }
  return rgb;
};

/**
 * Route transition "wipe".
 *
 * On a route change both pages are on screen at once: the current page stays as
 * the base while the incoming page is layered on top and revealed from the left
 * by an animated clip-path. A green band — opaque at its core, feathering to
 * transparent on both sides — rides the reveal seam, so you glimpse the old
 * page on one side and the new page on the other as the transformation sweeps
 * across. When it completes the base swaps to the new page.
 *
 * If the destination carries a hash the page opens at the top and then
 * smooth-scrolls to that section — "open, then slide to the section".
 *
 * `children` is a render prop `(location) => <Routes location=… />`, used for
 * both the base page and the incoming layer.
 */
export default function PageTransition({ children }) {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [incoming, setIncoming] = useState(null);
  const reducedMotion = useRef(false);
  const pendingHash = useRef(null);
  const wipeColor = useRef(BRAND_GREEN);

  useEffect(() => {
    reducedMotion.current = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;
  }, []);

  useEffect(() => {
    if (location.pathname === displayLocation.pathname) {
      return;
    }
    // A wipe is already running — let it settle before starting another.
    if (incoming) {
      return;
    }
    if (reducedMotion.current) {
      pendingHash.current = location.hash || null;
      setDisplayLocation(location);
      window.scrollTo(0, 0);
      return;
    }
    // Match the wipe colour to what's currently on screen before it starts.
    wipeColor.current = sampleWipeColor();
    setIncoming(location);
  }, [location, displayLocation, incoming]);

  // Runs after the new page has been committed as the base (and the wipe layer
  // removed), so scrollIntoView acts on the real, scrollable page rather than
  // the element still inside the fixed wipe layer. Skips the initial mount.
  const firstRun = useRef(true);
  useEffect(() => {
    if (firstRun.current) {
      firstRun.current = false;
      return;
    }
    const hash = pendingHash.current;
    pendingHash.current = null;
    if (hash) {
      scrollToHashTarget(hash, !reducedMotion.current);
    }
  }, [displayLocation]);

  const handleWipeEnd = event => {
    // Only react to the clip animation on the layer itself, not child anims.
    if (event.target !== event.currentTarget) {
      return;
    }
    pendingHash.current = incoming.hash || null;
    setDisplayLocation(incoming);
    setIncoming(null);
    window.scrollTo(0, 0);
  };

  return (
    <>
      {children(displayLocation)}

      {incoming && (
        <>
          <WipeLayer onAnimationEnd={handleWipeEnd} aria-hidden="true">
            {children(incoming)}
          </WipeLayer>
          <SeamBand
            aria-hidden="true"
            style={{
              '--wipe-r': wipeColor.current.r,
              '--wipe-g': wipeColor.current.g,
              '--wipe-b': wipeColor.current.b,
            }}
          />
        </>
      )}
    </>
  );
}
