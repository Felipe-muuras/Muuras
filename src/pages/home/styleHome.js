import styled from 'styled-components';
import { primaryColor } from '../../utils/colors';
import heroBackground from '/assets/hero-background-water.gif';
import { radius } from '../../utils/radius';

export const HomeContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeroSection = styled.div`
  width: 100%;
  padding: 110px 24px 0px 24px;
  height: 80vh;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  display: flex;
  /* Brand-green scrim over the photo — darker through the middle band
     where the text sits — so the white hero copy always has enough
     contrast, even over the bright water splashes. */
  background-image:
    linear-gradient(
      180deg,
      rgba(24, 52, 28, 0.45) 0%,
      rgba(24, 52, 28, 0.64) 42%,
      rgba(24, 52, 28, 0.64) 68%,
      rgba(24, 52, 28, 0.42) 100%
    ),
    url(${heroBackground});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  @media (max-width: 768px) {
    padding: 120px 20px 24px;
    min-height: 80vh;
    height: auto;
  }

  @media (max-width: 360px) {
    padding: 108px 16px 20px;
  }
`;

export const HeroContent = styled.div`
  max-width: 1440px;
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
    text-align: center;
    text-shadow: 0 2px 16px rgba(12, 28, 14, 0.45);
  }
  p {
    font-size: 20px;
    font-weight: 500;
    text-align: center;
    max-width: 860px;
    text-wrap: balance;
    text-shadow: 0 1px 10px rgba(12, 28, 14, 0.5);
  }
  img {
    width: 250px;
  }

  @media (max-width: 900px) {
    h1 {
      font-size: 56px;
    }

    p {
      font-size: 18px;
    }
  }

  @media (max-width: 560px) {
    row-gap: 1.5rem;

    h1 {
      font-size: 42px;
    }

    p {
      font-size: 16px;
    }

    img {
      width: 180px;
    }
  }

  @media (max-width: 360px) {
    h1 {
      font-size: 34px;
      line-height: 1.1;
    }

    p {
      font-size: 15px;
    }

    img {
      width: 150px;
    }
  }
`;

export const ResilienceSection = styled.div`
  background-color: ${primaryColor[900]};
  width: 100%;
  align-items: center;
  /* 24px side padding so the inner 1440 content lines up with the header
     bar (was 120px, which over-inset the content on wide screens). */
  padding: 80px 24px;
  row-gap: 1rem;
  display: flex;
  flex-direction: column;

  img {
    border-radius: ${radius.xl};
  }

  @media (max-width: 1200px) {
    padding: 72px 24px;
  }

  @media (max-width: 768px) {
    padding: 56px 20px;
  }

  @media (max-width: 360px) {
    padding: 48px 16px;
  }
`;

export const TopResilienceSection = styled.div`
  width: 100%;
  max-width: 1440px;
  display: flex;
  column-gap: 2rem;

  .resBanner {
    width: 50%;
    border-radius: ${radius.xl};
    align-self: stretch;
  }

  @media (max-width: 900px) {
    flex-direction: column;
    row-gap: 1rem;

    .resBanner {
      width: 100%;
      min-height: 240px;
    }
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
    font-size: var(--fs-section);
  }

  @media (max-width: 900px) {
    width: 100%;
  }
`;

export const ResilienceCardsContainer = styled.div`
  display: flex;
  max-width: 1440px;
  width: 100%;
  column-gap: 1rem;

  @media (max-width: 1100px) {
    flex-wrap: wrap;
    row-gap: 1rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ResilientCitiesSection = styled.div`
  width: 100%;
  /* 1440 of content + 24px side padding, so the content lines up with the
     "How to get started" card above it (which is 1440 wide). */
  max-width: 1488px;
  row-gap: 2rem;
  display: flex;
  flex-direction: column;
  padding: 0 24px;

  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

export const ResilientCitiesTitle = styled.h2`
  font-size: var(--fs-section);
`;

export const ResilientCitiesCardsContainer = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 2rem;

  @media (max-width: 1024px) {
    flex-direction: column;
    row-gap: 1.25rem;
  }
`;
