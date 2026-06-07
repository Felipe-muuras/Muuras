import { primaryColor } from '../../utils/colors';
import styled from 'styled-components';

export const AwardCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px;
  border: 1px solid ${primaryColor[100]};
  border-radius: 24px;
  width: 315px;
  flex-shrink: 0;

  img {
    border-radius: 16px;
    width: 100%;
    height: 200px;
    object-fit: cover;
    display: block;
  }
`;
export const AwardTextCardContainer = styled.div`
  padding: 24px;
  h2 {
    font-size: 32px;
    font-weight: 200;
  }
`;
