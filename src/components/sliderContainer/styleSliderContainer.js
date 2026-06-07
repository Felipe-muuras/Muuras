import styled, { keyframes } from 'styled-components';

const scroll = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
`;

export const SliderContainer = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  row-gap: 48px;
  justify-content: center;
  align-items: flex-start; /* era center */
  padding: 48px 0;
`;

export const SliderSectiontitle = styled.div`
  padding: 0 max(24px, calc((100% - 1200px) / 2));
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

  animation: ${scroll} 40s linear infinite;
  will-change: transform;

  &:hover {
    animation-play-state: paused;
  }
`;

export const Slide = styled.div`
  margin-right: 24px;
`;
