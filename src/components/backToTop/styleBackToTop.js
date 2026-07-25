import styled from 'styled-components';
import { primaryColor } from '../../utils/colors';
import { radius } from '../../utils/radius';

/* Floating "back to top" button, bottom-right.

   The glass treatment (frost + SVG refraction + edge highlight) lives on a
   ::before pseudo-element rather than on the button itself: iOS Safari
   mis-positions a position:fixed element that carries backdrop-filter (it can
   drift to the middle of the screen), so the fixed box is kept free of it.
   Safari falls back to the -webkit blur. Fades/scales in once scrolled down. */
export const BackToTopButton = styled.button`
  position: fixed;
  right: max(24px, env(safe-area-inset-right));
  bottom: max(24px, env(safe-area-inset-bottom));
  z-index: 900;

  width: 52px;
  height: 52px;
  border: none;
  background: transparent;
  border-radius: ${radius.pill};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #ffffff;
  isolation: isolate;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    z-index: -1;
    border-radius: inherit;

    background: rgba(32, 71, 37, 0.55);
    border: 1px solid rgba(255, 255, 255, 0.18);
    -webkit-backdrop-filter: blur(14px) saturate(160%);
    backdrop-filter: url(#glass-distortion) blur(2px) saturate(160%);
    box-shadow:
      inset 0 1px 0 rgba(255, 255, 255, 0.28),
      0 8px 22px rgba(0, 0, 0, 0.22);

    transition: background 0.2s ease;
  }

  svg {
    position: relative;
    z-index: 1;
  }

  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transform: translateY(${({ $visible }) => ($visible ? '0' : '14px')});
  pointer-events: ${({ $visible }) => ($visible ? 'auto' : 'none')};
  transition:
    opacity 0.3s ease,
    transform 0.3s ease;

  &:hover::before {
    background: ${primaryColor[600]};
  }

  &:hover {
    transform: translateY(-3px);
  }

  &:active {
    transform: translateY(-1px);
  }

  @media (max-width: 560px) {
    right: max(16px, env(safe-area-inset-right));
    bottom: max(16px, env(safe-area-inset-bottom));
    width: 46px;
    height: 46px;
  }
`;
