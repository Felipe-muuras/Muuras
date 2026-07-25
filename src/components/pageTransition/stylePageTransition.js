import styled, { keyframes } from 'styled-components';

/* Duration / easing shared by the reveal clip and the green seam band so they
   stay locked together as they sweep across. */
const DURATION = '1.3s';
const EASE = 'cubic-bezier(0.65, 0, 0.35, 1)';

/* The incoming page is revealed from the left: the right inset shrinks from
   100% (nothing shown) to 0% (fully shown). Its right edge is the wipe seam. */
const wipeReveal = keyframes`
  from { clip-path: inset(0 100% 0 0); }
  to   { clip-path: inset(0 0 0 0); }
`;

/* The green band travels so its centre always sits on the wipe seam
   (0 -> 100vw), matching wipeReveal frame for frame. */
const seamSweep = keyframes`
  from { transform: translateX(-50%); }
  to   { transform: translateX(calc(100vw - 50%)); }
`;

/* Full-viewport layer holding the NEW page, clipped so only the swept-in part
   paints; the OLD page (rendered underneath) shows through the rest. */
export const WipeLayer = styled.div`
  position: fixed;
  inset: 0;
  z-index: 9998;
  overflow: hidden;

  /* Solid page background (same as body) so the incoming page reads as a fresh
     page — without it, the old page underneath bleeds through wherever the new
     page's content is transparent. */
  background: #ffffff;

  /* Establish a containing block so the new page's fixed header is clipped
     with the layer instead of escaping to the viewport. */
  transform: translateZ(0);
  will-change: clip-path;
  clip-path: inset(0 100% 0 0);
  animation: ${wipeReveal} ${DURATION} ${EASE} forwards;

  @media (prefers-reduced-motion: reduce) {
    display: none;
  }
`;

/* The transformation front: opaque brand green at the core, feathering to
   transparent on both sides so you can see the old page on one side and the
   new page on the other. */
export const SeamBand = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  width: clamp(360px, 44vw, 720px);
  z-index: 9999;
  pointer-events: none;

  /* Colour follows the dominant on-screen colour (set per-transition via
     --wipe-r/g/b in PageTransition); brand green is the fallback. */
  --wr: var(--wipe-r, 32);
  --wg: var(--wipe-g, 71);
  --wb: var(--wipe-b, 37);
  background: linear-gradient(
    90deg,
    rgba(var(--wr), var(--wg), var(--wb), 0) 0%,
    rgba(var(--wr), var(--wg), var(--wb), 0.35) 30%,
    rgba(var(--wr), var(--wg), var(--wb), 1) 46%,
    rgba(var(--wr), var(--wg), var(--wb), 1) 54%,
    rgba(var(--wr), var(--wg), var(--wb), 0.35) 70%,
    rgba(var(--wr), var(--wg), var(--wb), 0) 100%
  );

  transform: translateX(-50%);
  animation: ${seamSweep} ${DURATION} ${EASE} forwards;
  will-change: transform;

  @media (prefers-reduced-motion: reduce) {
    display: none;
  }
`;
