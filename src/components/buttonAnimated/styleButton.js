import styled, { css } from 'styled-components';
import { primaryColor } from '../../utils/colors';
import { radius } from '../../utils/radius';

export const WrapperButton = styled.button`
  position: relative;

  width: 200px;
  height: 56px;

  border: none;
  border-radius: ${radius.pill};

  background: ${primaryColor[500]};

  cursor: pointer;
  overflow: hidden;

  display: flex;
  align-items: center;

  padding-left: 24px;

  /* evita problemas de stacking */
  isolation: isolate;
  z-index: 1;

  @media (max-width: 560px) {
    width: 130px;
    height: 44px;
    padding-left: 18px;
  }

  /* Hug content: width fits the label instead of a fixed width.
     Reserve space on the right for the expanding arrow pill, and let
     the text wrap (growing the button) on narrow screens instead of
     being clipped. */
  ${({ $fitContent }) =>
    $fitContent &&
    css`
      width: fit-content;
      max-width: 100%;
      padding-right: 60px;

      @media (max-width: 560px) {
        width: fit-content;
        height: auto;
        min-height: 44px;
        padding: 9px 44px 9px 18px;
        border-radius: ${radius.xl};
      }
    `}
`;

export const ButtonText = styled.span`
  position: relative;
  z-index: 1;

  color: white;
  font-size: 16px;
  font-weight: 200;
  white-space: nowrap;

  /* Text stays fixed in place; the expanding white layer simply covers
     it and reveals the green copy on top, so it only appears to change
     color (no vertical/positional shift). */

  @media (max-width: 560px) {
    font-size: 15px;
  }

  ${({ $fitContent }) =>
    $fitContent &&
    css`
      @media (max-width: 560px) {
        white-space: normal;
        line-height: 1.25;
      }
    `}
`;

export const HoverLayer = styled.div`
  position: absolute;

  /* Full inset pill; the layout box never changes size, so the arrow and
     the revealed text stay perfectly still. */
  top: 6px;
  left: 6px;
  right: 6px;
  bottom: 6px;

  background: white;
  border-radius: ${radius.pill};

  overflow: hidden;

  z-index: 2;

  /* Rest: only the arrow circle on the right is visible.
     Hover: the white area sweeps left to cover the whole button.
     The round radius is exactly half the layer height (44px tall -> 22px) so
     it renders as a clean circle everywhere. An oversized value like 999px is
     NOT clamped by iOS Safari and deforms the circle. */
  clip-path: inset(0 0 0 calc(100% - 44px) round 22px);
  transition: clip-path 0.45s cubic-bezier(0.22, 1, 0.36, 1);

  ${WrapperButton}:hover & {
    clip-path: inset(0 0 0 0 round 22px);
  }

  svg {
    position: absolute;

    right: 12px;
    top: 50%;

    transform: translateY(-50%);

    /* arrow sempre visível */
    z-index: 3;
  }

  @media (max-width: 560px) {
    top: 6px;
    left: 6px;
    right: 6px;
    bottom: 6px;

    /* Half the mobile layer height (32px tall -> 16px) = clean circle. */
    clip-path: inset(0 0 0 calc(100% - 32px) round 16px);

    svg {
      right: 6px;
    }
  }
`;

export const HoverText = styled.span`
  position: absolute;

  /* Aligned exactly over ButtonText (layer is inset 6px, base text sits
     at 24px from the button edge → 24 - 6 = 18px here). Stays fixed and
     is simply uncovered by the expanding white layer. */
  left: 18px;
  top: 50%;
  transform: translateY(-50%);

  color: ${primaryColor[500]};
  font-size: 16px;
  font-weight: 200;

  white-space: nowrap;

  z-index: 4;
  pointer-events: none;

  @media (max-width: 560px) {
    left: 12px;
    font-size: 15px;
  }
`;
