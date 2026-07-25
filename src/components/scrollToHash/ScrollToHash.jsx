import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToHash() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Only in-page hash anchors are handled here. Resetting scroll to the top
    // on a page change is owned by PageTransition, so it happens behind the
    // green curtain (after it has covered the screen) rather than mid-sweep.
    if (hash) {
      const target = document.getElementById(hash.replace('#', ''));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, [pathname, hash]);

  return null;
}
