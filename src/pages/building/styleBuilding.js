import styled from 'styled-components';
import { primaryColor } from '../../utils/colors';

export const WrapperBuildingPage = styled.div`
  width: 100%;
  height: 100dvh;
  animation: pageFade 0.45s ease both;
  background-color: ${primaryColor[900]};
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
  color: #fff;
  h1 {
    font-weight: 500;
    font-size: 64px;
  }
  p {
    font-size: 18px;
  }
`;

export const BuildingPageSocialLinks = styled.div`
  display: flex;
  column-gap: 1rem;
`;
