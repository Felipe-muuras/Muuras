import { useEffect, useRef } from 'react';
import { AwardCardContainer, AwardTextCardContainer } from './styleAwardCard';

/**
 * Impact card with the same interaction as the "Resilient Cities" cards: a
 * subtle 3D tilt that follows the cursor plus a gentle zoom, one card at a
 * time. The tilt/zoom vars are eased in a rAF loop that only runs while the
 * card is being interacted with.
 */
export default function AwardCard({ imagePath, title, containBg, url }) {
  const cardRef = useRef(null);
  const current = useRef({ x: 0, y: 0, s: 1 });
  const target = useRef({ x: 0, y: 0, s: 1 });
  const rafRef = useRef(0);
  const runningRef = useRef(false);

  const ensureLoop = () => {
    if (runningRef.current) return;
    runningRef.current = true;

    const animate = () => {
      const c = current.current;
      const tg = target.current;
      c.x += (tg.x - c.x) * 0.12;
      c.y += (tg.y - c.y) * 0.12;
      c.s += (tg.s - c.s) * 0.12;

      const el = cardRef.current;
      if (el) {
        el.style.setProperty('--rx', `${c.x.toFixed(2)}deg`);
        el.style.setProperty('--ry', `${c.y.toFixed(2)}deg`);
        el.style.setProperty('--scale', c.s.toFixed(3));
      }

      const atRest =
        tg.x === 0 &&
        tg.y === 0 &&
        tg.s === 1 &&
        Math.abs(c.x) < 0.02 &&
        Math.abs(c.y) < 0.02 &&
        Math.abs(c.s - 1) < 0.002;

      if (atRest) {
        if (el) {
          el.style.setProperty('--rx', '0deg');
          el.style.setProperty('--ry', '0deg');
          el.style.setProperty('--scale', '1');
        }
        runningRef.current = false;
        return;
      }
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => () => cancelAnimationFrame(rafRef.current), []);

  const handleMouseMove = e => {
    // Skip while a drag is in progress (button held) — that's the carousel.
    if (e.buttons) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    const maxDeg = 7;
    target.current = {
      x: (0.5 - py) * maxDeg, // rotateX
      y: (px - 0.5) * maxDeg, // rotateY
      s: 1.05,
    };
    ensureLoop();
  };

  const handleLeave = () => {
    target.current = { x: 0, y: 0, s: 1 };
    ensureLoop();
  };

  return (
    <AwardCardContainer
      ref={cardRef}
      as={url ? 'a' : 'div'}
      href={url || undefined}
      target={url ? '_blank' : undefined}
      rel={url ? 'noreferrer noopener' : undefined}
      aria-label={url ? `${title} (opens in a new tab)` : undefined}
      draggable={false}
      $containBg={containBg}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleLeave}
    >
      <img src={imagePath} alt={title} loading="lazy" draggable={false} />
      <AwardTextCardContainer>
        <h2>{title}</h2>
      </AwardTextCardContainer>
    </AwardCardContainer>
  );
}
