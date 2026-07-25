import styled, { keyframes, css } from 'styled-components';
import { primaryColor } from '../../utils/colors';

const LOGO = `${import.meta.env.BASE_URL}assets/muuras-logo-white.svg`;

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(10px); }
  to   { opacity: 1; transform: translateY(0); }
`;

/* Full-screen dark-green intro. On exit it lifts up like a curtain to reveal
   the site underneath. */
export const PreloaderOverlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 99999;

  background: ${primaryColor[900]};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;

  transition: transform 0.9s cubic-bezier(0.76, 0, 0.24, 1);

  /* Exit: slide off to the right (matching the page-transition wipe) with the
     trailing left edge feathering to transparent, so the site is revealed
     behind a soft green gradient. */
  ${({ $exiting }) =>
    $exiting &&
    css`
      transform: translateX(100%);
      -webkit-mask-image: linear-gradient(
        to right,
        transparent 0,
        #000 clamp(140px, 24vw, 360px)
      );
      mask-image: linear-gradient(
        to right,
        transparent 0,
        #000 clamp(140px, 24vw, 360px)
      );
    `}

  @media (prefers-reduced-motion: reduce) {
    transition: opacity 0.3s ease;
    ${({ $exiting }) =>
      $exiting &&
      css`
        transform: none;
        opacity: 0;
        -webkit-mask-image: none;
        mask-image: none;
      `}
  }
`;

/* The logo fades in on mount. */
export const LogoWrap = styled.div`
  position: relative;
  width: min(300px, 62vw);
  aspect-ratio: 238 / 92;
  animation: ${fadeUp} 0.9s ease both;
`;

/* White logo (with wordmark) — the base that the green rises over. */
export const LogoBase = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

/* Light-green fill, clipped to the logo silhouette via a mask, rising from the
   bottom as --p goes 0% -> 100% — as if vegetation were growing up the
   buildings of the mark. */
export const LogoFill = styled.div`
  position: absolute;
  inset: 0;
  background: ${primaryColor[400]};

  -webkit-mask: url(${LOGO}) center / contain no-repeat;
  mask: url(${LOGO}) center / contain no-repeat;

  clip-path: inset(calc(100% - var(--p, 0%)) 0 0 0);
  transition: clip-path 0.25s ease-out;

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

export const PercentText = styled.span`
  font-family: var(--font-heading);
  font-size: 18px;
  letter-spacing: 0.06em;
  color: ${primaryColor[100]};
  animation: ${fadeUp} 0.9s ease 0.15s both;
  font-variant-numeric: tabular-nums;
`;
