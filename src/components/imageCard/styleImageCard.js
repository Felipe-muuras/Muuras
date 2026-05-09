import styled from 'styled-components';
import { primaryColor } from '../../utils/colors';

export const ImageCardContainer = styled.div`
  width: 100%;
  border-radius: 24px;
  background-color: ${primaryColor[800]};
  overflow: hidden;
  img {
    width: 100%;
    border-radius: 0px;
  }
`;

export const TextImageCard = styled.div`
  color: #fff;
  padding: 24px 32px;
  row-gap: 1rem;
  display: flex;
  flex-direction: column;
  h1 {
    font-size: 24px;
  }
  p {
    font-size: 16px;
  }
`;
