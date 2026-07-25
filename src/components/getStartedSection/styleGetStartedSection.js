import styled from 'styled-components';
import { primaryColor } from '../../utils/colors';
import { radius } from '../../utils/radius';

export const GetStartedSectionContainer = styled.section`
  padding: 56px;
  z-index: 0;
  display: flex;
  justify-content: center;

  @media (max-width: 900px) {
    padding: 48px 24px;
  }

  @media (max-width: 560px) {
    padding: 40px 20px;
  }

  @media (max-width: 360px) {
    padding: 32px 16px;
  }
`;

export const GetStartedCardContainer = styled.div`
  width: 100%;
  max-width: 1440px;
  display: flex;
  align-items: stretch;
  padding: 0;
  overflow: hidden;
  border-radius: ${radius.xl};

  background-color: ${primaryColor[50]};

  /* Image is full-bleed on the left; the card's rounded corners clip it,
     so it gets rounded left corners and square right corners. */
  .gsImage {
    width: 50%;
    min-height: 380px;
    border-radius: 0;
    align-self: stretch;
  }

  @media (max-width: 900px) {
    flex-direction: column;

    .gsImage {
      width: 100%;
      min-height: 240px;
    }
  }
`;

export const GetStartedSectionText = styled.div`
  flex: 1;
  padding: 40px 48px;
  row-gap: 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  h2 {
    font-size: 40px;
    font-weight: 400;
    color: ${primaryColor[900]};
  }

  button {
    cursor: pointer;
  }

  @media (max-width: 900px) {
    padding: 24px 24px 28px;

    h2 {
      font-size: 32px;
    }
  }

  @media (max-width: 360px) {
    h2 {
      font-size: 28px;
    }
  }
`;
