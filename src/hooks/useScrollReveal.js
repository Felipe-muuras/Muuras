import { useEffect } from 'react';

/**
 * Scroll-reveal animations, driven by IntersectionObserver.
 *
 * Two flavours, both revealed the first time they enter the viewport:
 *  - `[data-reveal]`         — the element fades + rises in as one block.
 *  - `[data-reveal-stagger]` — the element's *direct children* fade + rise in
 *                              one after another (a cascading hierarchy inside
 *                              a section) via the `revealRise` keyframes. Each
 *                              child's delay is set through `--reveal-delay`;
 *                              once its animation ends it is tagged
 *                              `.reveal-done` so the animation is dropped and
 *                              its own hover transitions work normally again.
 *
 * Call it once from a page component — it runs after the page mounts, so it
 * also works for lazily-loaded routes.
 */
const STAGGER_STEP_MS = 70;
const STAGGER_MAX_MS = 560;

export default function useScrollReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll(
      '[data-reveal]:not(.is-visible), [data-reveal-stagger]:not(.is-visible)',
    );
    if (!elements.length) {
      return;
    }

    // Respect users who prefer less motion: reveal everything at once.
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      elements.forEach(el => el.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) {
            return;
          }

          const el = entry.target;

          if (el.hasAttribute('data-reveal-stagger')) {
            Array.from(el.children).forEach((child, i) => {
              const delay = Math.min(i * STAGGER_STEP_MS, STAGGER_MAX_MS);
              child.style.setProperty('--reveal-delay', `${delay}ms`);
              // Drop the animation once done so hover transforms work again.
              child.addEventListener(
                'animationend',
                () => child.classList.add('reveal-done'),
                { once: true },
              );
            });
          }

          el.classList.add('is-visible');
          obs.unobserve(el);
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    );

    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}
