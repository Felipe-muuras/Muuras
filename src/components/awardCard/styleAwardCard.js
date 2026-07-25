import { primaryColor } from '../../utils/colors';
import styled from 'styled-components';
import { radius } from '../../utils/radius';

export const AwardCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px;
  border: 1px solid ${primaryColor[100]};
  border-radius: ${radius.xl};
  width: clamp(240px, 78vw, 315px);
  flex-shrink: 0;
  /* Fill the stretched slide so every card ends up the same height. */
  height: 100%;
  background: #ffffff;

  /* Same interaction as the Resilient Cities cards: a cursor-following 3D tilt
     plus a gentle zoom. --rx/--ry/--scale are eased in JS (AwardCard), so the
     transform itself carries no transition. */
  transform: perspective(900px) rotateX(var(--rx, 0deg))
    rotateY(var(--ry, 0deg)) scale(var(--scale, 1));
  transform-style: preserve-3d;
  will-change: transform;

  box-shadow: 0 6px 18px rgba(32, 71, 37, 0.08);
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 22px 44px rgba(32, 71, 37, 0.18);
  }

  @media (hover: none), (pointer: coarse) {
    transform: none;
  }

  img {
    border-radius: ${radius.lg};
    width: 100%;
    height: 200px;
    /* Default: fill the whole area (edge-to-edge colored logos); only the
       rounded corners clip the image. When $containBg is set, fit the
       whole logo (no content crop) and blend the letterbox with a matching
       background color (e.g. white or the logo's red) so no seam shows. */
    object-fit: ${({ $containBg }) => ($containBg ? 'contain' : 'cover')};
    background: ${({ $containBg }) => $containBg || 'transparent'};
    display: block;
  }
`;
export const AwardTextCardContainer = styled.div`
  /* Grows to fill the remaining space, keeping all cards equal height
     regardless of how many lines the title wraps to. */
  flex: 1;
  padding: 24px;

  h2 {
    font-size: 32px;
    font-weight: 200;
  }

  @media (max-width: 560px) {
    padding: 18px;

    h2 {
      font-size: 26px;
    }
  }
`;
