import styled from 'styled-components';
import { primaryColor } from '../../utils/colors';

export const WrapperBuildingPage = styled.div`
  width: 100%;
  height: 100dvh;
  background-color: ${primaryColor[900]};
  background-image: url('../../assets/heroBackground.gif');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
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
