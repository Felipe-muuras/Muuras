import styled from 'styled-components';
import { primaryColor } from '../../utils/colors';
import { radius } from '../../utils/radius';

export const ImageCardContainer = styled.div`
  width: 100%;
  border-radius: ${radius.xl};
  background-color: ${primaryColor[800]};
  overflow: hidden;

  transition:
    transform 0.35s cubic-bezier(0.22, 1, 0.36, 1),
    box-shadow 0.35s ease;

  img {
    width: 100%;
    display: block;
    border-radius: 0px;
    transition: transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);
  }

  /* Micro-interaction: the card lifts/zooms slightly and its image zooms
     in a touch more within the rounded frame. */
  &:hover {
    transform: scale(1.02);
    box-shadow: 0 18px 40px rgba(0, 0, 0, 0.18);
  }

  &:hover img {
    transform: scale(1.06);
  }
`;

export const TextImageCard = styled.div`
  color: #fff;
  padding: 24px 32px;
  row-gap: 1rem;
  display: flex;
  flex-direction: column;
  h3 {
    font-size: 24px;
  }
  p {
    font-size: 16px;
  }
`;
