import styled, { keyframes } from 'styled-components';

const scroll = keyframes`
  from {
    transform: translateX(0);
  }

to {
  transform: translateX(calc(-50% - 12px));
}
`;

export const SliderContainer = styled.div`
  width: 100%;
  height: fit-content;
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  row-gap: 48px;
  justify-content: center;
  align-items: center;
  padding: 0 0 48px 0;
`;

export const SliderSectiontitle = styled.div`
  max-width: 1200px;
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  align-items: flex-start;
  h2 {
    font-size: 40px;
  }
`;

export const SliderTrack = styled.div`
  display: flex;
  width: max-content;
  gap: 24px;

  animation: ${scroll} 40s linear infinite;

  will-change: transform;

  &:hover {
    animation-play-state: paused;
  }
`;

export const Slide = styled.div``;
