import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { primaryColor } from '../../utils/colors';
import { radius } from '../../utils/radius';

export const CardContainer = styled(Link)`
  position: relative;
  overflow: hidden;
  isolation: isolate;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 2rem;

  height: 500px;
  padding: 64px;
  border-radius: ${radius.xl};

  color: #fff;
  text-decoration: none;
  cursor: pointer;

  /* Subtle 3D tilt following the cursor (vars updated in JS). */
  transform: perspective(1000px) rotateX(var(--rx, 0deg)) rotateY(var(--ry, 0deg));
  transform-style: preserve-3d;
  will-change: transform;

  /* Background image that gently zooms in on hover. */
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    z-index: 0;

    background-image: url(${({ $imagePath }) => $imagePath});
    background-size: cover;
    background-position: center;

    transform: scale(1);
    transition: transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);
  }

  &:hover::before {
    transform: scale(1.06);
  }

  /* Dark overlay (15%) to make the text stand out over the image. */
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    z-index: 1;

    background: rgba(0, 0, 0, 0.15);
    pointer-events: none;
  }

  > * {
    position: relative;
    z-index: 2;
  }

  h3 {
    font-size: 40px;
    text-align: center;
  }

  p {
    text-align: center;
    max-width: 600px;
  }

  @media (max-width: 900px) {
    height: 430px;
    padding: 40px 28px;

    h3 {
      font-size: 34px;
    }
  }

  @media (max-width: 560px) {
    height: auto;
    min-height: 340px;
    padding: 28px 20px;
    row-gap: 1.25rem;

    /* No 3D tilt on touch devices. */
    transform: none;

    h3 {
      font-size: 28px;
    }

    p {
      font-size: 15px;
    }
  }
`;

/* Visual CTA (the whole card is the link). Reaches its filled "active"
   state as soon as the card is hovered. */
export const CardCta = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  padding: 10px 20px;
  border: 1px solid #fff;
  border-radius: ${radius.pill};

  background: transparent;
  color: #fff;

  transition:
    background 0.3s ease,
    color 0.3s ease,
    transform 0.3s ease;

  ${CardContainer}:hover & {
    background: #fff;
    color: ${primaryColor[900]};
    transform: translateY(-2px);
  }
`;
