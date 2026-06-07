import styled from 'styled-components';
import { primaryColor } from '../../utils/colors';

export const CardContainer = styled.div`
  position: relative;
  overflow: hidden;

  background-image: url(${({ $imagePath }) => $imagePath});
  background-size: cover;
  background-position: center;

  border-radius: 24px;
  padding: 64px;

  color: #fff;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  row-gap: 2rem;
  height: 500px;

  will-change: transform;

  &::before {
    content: '';
    position: absolute;
    inset: 0;

    background-image: url(${({ $imagePath }) => $imagePath});
    background-size: cover;
    background-position: center;

    filter: blur(16px);

    opacity: ${({ $visible }) => ($visible ? 1 : 0)};
    transition: opacity 0.35s ease;
    pointer-events: none;

    mask-image: radial-gradient(
      ellipse 180px 140px at var(--mouse-x) var(--mouse-y),
      rgba(0, 0, 0, 1) 0%,
      rgba(0, 0, 0, 0.85) 25%,
      rgba(0, 0, 0, 0.6) 50%,
      rgba(0, 0, 0, 0.3) 75%,
      transparent 100%
    );
    -webkit-mask-image: radial-gradient(
      ellipse 180px 140px at var(--mouse-x) var(--mouse-y),
      rgba(0, 0, 0, 1) 0%,
      rgba(0, 0, 0, 0.85) 25%,
      rgba(0, 0, 0, 0.6) 50%,
      rgba(0, 0, 0, 0.3) 75%,
      transparent 100%
    );

    z-index: 1;
  }

  &::after {
    content: '';
    position: absolute;

    width: 240px;
    height: 180px;

    left: calc(var(--mouse-x) - 120px);
    top: calc(var(--mouse-y) - 90px);

    border-radius: 999px;

    background: radial-gradient(
      circle,
      rgba(255, 255, 255, 0.08) 0%,
      rgba(255, 255, 255, 0.03) 60%,
      transparent 100%
    );

    opacity: ${({ $visible }) => ($visible ? 1 : 0)};
    transition: opacity 0.35s ease;
    pointer-events: none;

    z-index: 2;
  }

  > * {
    position: relative;
    z-index: 3;
  }

  h1 {
    font-size: 40px;
    text-align: center;
  }

  p {
    text-align: center;
    max-width: 600px;
  }

  button {
    background: transparent;
    color: #fff;
    padding: 8px 16px;
    border: 1px solid #fff;
    border-radius: 99px;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  button:hover {
    background-color: #fff;
    color: ${primaryColor[900]};
  }
`;
