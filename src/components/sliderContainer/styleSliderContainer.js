import styled from 'styled-components';
import { primaryColor } from '../../utils/colors';
import { radius } from '../../utils/radius';

export const SliderContainer = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  row-gap: 40px;
  align-items: flex-start;
  padding: 40px 0;

  @media (max-width: 768px) {
    row-gap: 24px;
    padding: 28px 0;
  }
`;

/* Title + subtitle on the left, the carousel controls pushed to the right. */
export const SliderHeader = styled.div`
  padding: 0 max(24px, calc((100% - 1440px) / 2));
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 24px;

  @media (max-width: 560px) {
    padding: 0 20px;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
  }
`;

export const SliderTitleBlock = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;

  h2 {
    font-size: 40px;
  }

  @media (max-width: 768px) {
    h2 {
      font-size: 32px;
    }
  }

  @media (max-width: 560px) {
    h2 {
      font-size: 28px;
    }
  }
`;

export const SliderControls = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  flex-shrink: 0;
`;

export const ArrowButton = styled.button`
  width: 44px;
  height: 44px;
  border-radius: ${radius.pill};
  border: 1px solid ${primaryColor[200]};
  background: #ffffff;
  color: ${primaryColor[700]};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  flex-shrink: 0;
  transition:
    background 0.2s ease,
    border-color 0.2s ease,
    transform 0.2s ease;

  &:hover {
    background: ${primaryColor[50]};
    border-color: ${primaryColor[400]};
  }

  &:active {
    transform: scale(0.94);
  }

  @media (max-width: 560px) {
    width: 40px;
    height: 40px;
  }
`;

export const Dots = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const Dot = styled.button`
  height: 8px;
  width: ${({ $active }) => ($active ? '22px' : '8px')};
  border-radius: ${radius.pill};
  border: none;
  padding: 0;
  cursor: pointer;
  background: ${({ $active }) =>
    $active ? primaryColor[600] : primaryColor[200]};
  transition:
    width 0.35s cubic-bezier(0.65, 0, 0.35, 1),
    background 0.3s ease;

  &:hover {
    background: ${({ $active }) =>
      $active ? primaryColor[600] : primaryColor[300]};
  }
`;

/* Draggable, clipped viewport. Clip only horizontally so the dock-magnified
   card can grow past the row vertically without being cut. */
export const SliderViewport = styled.div`
  width: 100%;
  overflow-x: clip;
  overflow-y: visible;
  padding-block: 34px;

  cursor: grab;
  touch-action: pan-y;
  -webkit-user-select: none;
  user-select: none;

  /* Fade cards out right at the content-container edge: crisp inside the 1440
     column (aligned with the title), then a short gradient just outside each
     edge, and fully transparent through the rest of the gutter — so the fade
     hugs the container instead of spreading to the screen edges. */
  --gutter: max(24px, calc((100% - 1440px) / 2));
  --fade: clamp(36px, 5vw, 80px);
  -webkit-mask-image: linear-gradient(
    to right,
    transparent 0,
    transparent max(0px, calc(var(--gutter) - var(--fade))),
    #000 var(--gutter),
    #000 calc(100% - var(--gutter)),
    transparent min(100%, calc(100% - var(--gutter) + var(--fade))),
    transparent 100%
  );
  mask-image: linear-gradient(
    to right,
    transparent 0,
    transparent max(0px, calc(var(--gutter) - var(--fade))),
    #000 var(--gutter),
    #000 calc(100% - var(--gutter)),
    transparent min(100%, calc(100% - var(--gutter) + var(--fade))),
    transparent 100%
  );

  &.dragging {
    cursor: grabbing;
  }
`;

export const SliderTrack = styled.div`
  display: flex;
  align-items: stretch;
  width: max-content;
  will-change: transform;
`;

export const Slide = styled.div`
  position: relative;
  display: flex;
  flex-shrink: 0;
  margin-right: 24px;
  transform-origin: center center;
  will-change: transform;

  /* Don't let the browser hijack the drag with native image dragging. */
  img {
    -webkit-user-drag: none;
    user-drag: none;
    pointer-events: none;
  }

  @media (max-width: 560px) {
    margin-right: 16px;
  }
`;
