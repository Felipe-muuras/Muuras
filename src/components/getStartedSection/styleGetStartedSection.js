import styled from 'styled-components';
import { primaryColor } from '../../utils/colors';

export const GetStartedSectionContainer = styled.section`
  padding: 56px 56px;
`;

export const GetStartedCardContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  column-gap: 2rem;
  padding: 8px;
  border-radius: 24px;
  max-width: 1200px;

  background-color: ${primaryColor[50]};
  img {
    border-radius: 16px;
  }
`;

export const GetStartedSectionText = styled.div`
  padding: 32px 32px 32px 0px;
  row-gap: 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  h2 {
    font-size: 40px;
    font-weight: 300;
  }
  button {
    cursor: pointer;
  }
`;
