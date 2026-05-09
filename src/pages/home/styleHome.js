import styled from 'styled-components';
import { primaryColor } from '../../utils/colors';
import heroBackground from '/assets/heroBackground.gif';

export const HomeContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeroSection = styled.div`
  width: 100%;
  padding: 110px 24px 0px 24px;
  height: 90vh;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  display: flex;
  background-image: url(${heroBackground});
  background-size: cover;
`;

export const HeroContent = styled.div`
  max-width: 1200px;
  width: 100%;
  height: 100%;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 2rem;
  h1 {
    font-size: 80px;
  }
  p {
    font-size: 20px;
    font-weight: 300;
  }
  img {
    width: 250px;
  }
`;

export const ResilienceSection = styled.div`
  background-color: ${primaryColor[900]};
  width: 100%;
  align-items: center;
  padding: 80px 120px;
  row-gap: 1rem;
  display: flex;
  flex-direction: column;

  img {
    border-radius: 24px;
  }
`;

export const TopResilienceSection = styled.div`
  max-width: 1200px;
  display: flex;
  column-gap: 2rem;
  img {
    width: 50%;
  }
`;

export const ResilienceText = styled.div`
  color: #fff;
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;

  h2 {
    font-size: 32px;
  }
`;

export const ResilienceCardsContainer = styled.div`
  display: flex;
  max-width: 1200px;
  width: 100%;
  column-gap: 1rem;
`;
