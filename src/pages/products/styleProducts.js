import styled from 'styled-components';
import { primaryColor, textColor } from '../../utils/colors';
import { radius } from '../../utils/radius';
import ZoomImage from '../../components/zoomImage/ZoomImage';

export const ProductsPageContainer = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const ProductsContent = styled.section`
  width: 100%;
  /* 1440 of content + 24px side padding = the content edges line up exactly
     with the header bar (which is max-width 1440, inset 24px). */
  max-width: 1488px;
  margin: 0 auto;
  padding: 150px 24px 80px;
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media (max-width: 560px) {
    padding: 128px 20px 56px;
    gap: 28px;
  }
`;

export const ProductsHero = styled.section`
  display: grid;
  /* Standardized 50/50 hero split (same as Services & About). */
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  gap: 48px;
  align-items: center;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
    gap: 24px;
  }
`;

export const ProductsHeroText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const ProductsTitle = styled.h1`
  font-size: var(--fs-hero);
  line-height: 1.06;
  color: ${primaryColor[900]};
`;

export const ProductsSubtitle = styled.p`
  font-size: 16px;
  color: ${textColor.secondary};
  line-height: 1.6;
`;

export const ProductsHeroScrollButton = styled.button`
  margin-top: 10px;
  width: fit-content;
  border: none;
  background: transparent;
  color: ${primaryColor[700]};
  display: inline-flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  font-size: 15px;
  font-weight: 500;

  svg {
    transition: transform 0.2s ease;
  }

  &:hover svg {
    transform: translateY(2px);
  }
`;

export const ProductsHeroImage = styled(ZoomImage)`
  width: 100%;
  border-radius: ${radius.lg};
  /* Same aspect-ratio on all three page heroes so they match in size. */
  aspect-ratio: 6 / 5;

  @media (max-width: 560px) {
    min-height: 220px;
  }
`;

export const ProductSections = styled.div`
  display: flex;
  flex-direction: column;
  gap: 44px;
`;

export const ProductSection = styled.article`
  /* No divider line — the spacing between products already separates them
     (same approach as the Services sections). */
  display: flex;
  flex-direction: column;
  gap: 18px;
  scroll-margin-top: 120px;
`;

export const ProductSectionImage = styled(ZoomImage)`
  width: 100%;
  min-height: 260px;
  max-height: 541px;
  border-radius: ${radius.lg};

  @media (max-width: 960px) {
    min-height: 220px;
  }
`;

export const ProductSectionTitle = styled.h2`
  color: ${primaryColor[700]};
  font-size: var(--fs-section);
  line-height: 1.2;
`;

export const ProductSectionDescription = styled.p`
  font-size: 16px;
  color: ${textColor.secondary};
  line-height: 1.6;
`;

export const ProductFeatureCard = styled.div`
  border: 1px solid ${primaryColor[100]};
  border-radius: ${radius.lg};
  background: ${primaryColor[50]};
  padding: 24px;

  @media (max-width: 560px) {
    padding: 20px;
  }
`;

export const ProductFeatureList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px 24px;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 14px;
  }
`;

export const ProductFeatureItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  font-size: 15px;
  color: ${textColor.secondary};
  line-height: 1.55;

  .material-symbols-outlined {
    font-size: 22px;
    color: ${primaryColor[600]};
    flex-shrink: 0;
    margin-top: 1px;
  }
`;

export const ProductClosingCard = styled.div`
  border: 1px solid ${primaryColor[100]};
  border-radius: ${radius.lg};
  background: ${primaryColor[50]};
  padding: 20px;

  p {
    font-size: 16px;
    color: ${textColor.secondary};
    line-height: 1.6;
  }

  @media (max-width: 560px) {
    border-radius: ${radius.md};
    padding: 16px;
  }
`;

export const ProductsGetStartedSection = styled.section`
  padding: 8px 0;
`;

export const ProductsGetStartedCard = styled.div`
  width: 100%;
  display: flex;
  align-items: stretch;
  padding: 0;
  overflow: hidden;
  border-radius: ${radius.xl};
  background: ${primaryColor[50]};

  /* Full-bleed image on the left; rounded left corners, square right. */
  .gsImage {
    width: 50%;
    min-height: 380px;
    border-radius: 0;
    align-self: stretch;
  }

  @media (max-width: 960px) {
    flex-direction: column;

    .gsImage {
      width: 100%;
      min-height: 240px;
    }
  }
`;

export const ProductsGetStartedText = styled.div`
  flex: 1;
  padding: 40px 48px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 12px;

  h3 {
    font-size: 40px;
    font-weight: 400;
    line-height: 1.2;
    color: ${primaryColor[900]};
  }

  p {
    font-size: 16px;
    color: ${textColor.secondary};
    line-height: 1.6;
  }

  @media (max-width: 960px) {
    width: 100%;
    padding: 24px 24px 28px;

    h3 {
      font-size: 32px;
    }
  }

  @media (max-width: 360px) {
    h3 {
      font-size: 28px;
    }
  }
`;
