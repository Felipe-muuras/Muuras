import { useEffect, useRef, useState } from 'react';
import {
  PreloaderOverlay,
  LogoWrap,
  LogoBase,
  LogoFill,
  PercentText,
} from './stylePreloader';

const LOGO = `${import.meta.env.BASE_URL}assets/muuras-logo-white.svg`;

/**
 * Initial site loading screen.
 *
 * A dark-green screen with the white Muuras logo fading in. As the site loads,
 * a percentage climbs and light green fills the logo from the bottom up (like
 * vegetation growing up the buildings). At 100% the screen lifts away to reveal
 * the site.
 */
export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [exiting, setExiting] = useState(false);
  const [done, setDone] = useState(false);
  const exitStarted = useRef(false);

  // Drive the progress toward 100%, gating completion on window load + a
  // minimum on-screen time so the intro is actually seen.
  useEffect(() => {
    // The React overlay now covers the screen — drop the static index.html one.
    document.getElementById('app-loader-bg')?.remove();
    document.body.style.overflow = 'hidden';

    const reduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;
    const minDuration = reduced ? 300 : 1900;
    const rampMs = reduced ? 300 : 1500;
    const started = Date.now();

    let loaded = document.readyState === 'complete';
    const onLoad = () => {
      loaded = true;
    };
    window.addEventListener('load', onLoad);

    let raf = 0;
    const tick = () => {
      const elapsed = Date.now() - started;
      // Climb smoothly to 90% over the ramp; only reach 100% once the page has
      // loaded and the minimum time has passed.
      const ramp = Math.min(90, (elapsed / rampMs) * 90);
      const target = loaded && elapsed >= minDuration ? 100 : ramp;

      setProgress(prev => {
        const next = prev + (target - prev) * 0.14;
        return target === 100 && next > 99.4 ? 100 : next;
      });
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('load', onLoad);
    };
  }, []);

  // At 100%, hold for a second so the finished state is seen, then start the
  // exit. Guarded by a ref so re-renders don't restart the hold.
  useEffect(() => {
    if (progress < 100 || exitStarted.current) {
      return undefined;
    }
    exitStarted.current = true;
    const holdTimer = setTimeout(() => setExiting(true), 1000);
    return () => clearTimeout(holdTimer);
  }, [progress]);

  // Once the curtain has slid away, restore scrolling and unmount.
  useEffect(() => {
    if (!exiting) {
      return undefined;
    }
    const timer = setTimeout(() => {
      document.body.style.overflow = '';
      setDone(true);
    }, 950);
    return () => clearTimeout(timer);
  }, [exiting]);

  if (done) {
    return null;
  }

  return (
    <PreloaderOverlay $exiting={exiting} aria-hidden="true">
      <LogoWrap>
        <LogoBase src={LOGO} alt="" />
        <LogoFill style={{ '--p': `${progress}%` }} />
      </LogoWrap>
      <PercentText>{Math.round(progress)}%</PercentText>
    </PreloaderOverlay>
  );
}
