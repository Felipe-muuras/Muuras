import styled from 'styled-components';
import { primaryColor, textColor } from '../../utils/colors';
import ZoomImage from '../../components/zoomImage/ZoomImage';
import { radius } from '../../utils/radius';

export const ServicesPageContainer = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const ServicesContent = styled.section`
  width: 100%;
  /* 1440 of content + 24px side padding = the content edges line up exactly
     with the header bar (which is max-width 1440, inset 24px). */
  max-width: 1488px;
  margin: 0 auto;
  padding: 150px 24px 80px;
  display: flex;
  flex-direction: column;
  gap: 32px;

  @media (max-width: 560px) {
    padding: 128px 20px 56px;
    gap: 24px;
  }
`;

export const ServicesHero = styled.section`
  display: grid;
  /* Split the hero in half — text on the left, image taking up 50%. */
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  gap: 48px;
  align-items: center;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
    gap: 24px;
  }
`;

export const ServicesHeroText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ServicesHeroScrollButton = styled.button`
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

export const ServicesHeroImage = styled(ZoomImage)`
  width: 100%;
  border-radius: ${radius.lg};
  /* Same aspect-ratio on all three page heroes (Services/Products/About)
     so the hero images are identical in size and proportion. */
  aspect-ratio: 6 / 5;
`;

export const ServicesTitle = styled.h1`
  font-size: var(--fs-hero);
  line-height: 1.05;
  color: ${primaryColor[900]};
`;

export const ServicesSubtitle = styled.p`
  max-width: 760px;
  color: ${textColor.secondary};
  line-height: 1.6;
`;

export const ServiceSections = styled.div`
  display: flex;
  flex-direction: column;
  gap: 44px;
`;

export const ServiceSection = styled.article`
  /* No divider line — the spacing between services already separates them. */
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const ServiceImage = styled.img`
  width: 100%;
  height: auto;
  /* Proportional height via aspect-ratio (≈15:7, the ratio used in the
     layout). Height scales with the container width, and since all images
     share the same width they end up the exact same height — uniform and
     not flattened like a small fixed px height. object-fit crops to fill. */
  aspect-ratio: 15 / 7;
  object-fit: cover;
  border-radius: ${radius.lg};

  @media (max-width: 560px) {
    /* Slightly taller ratio reads better on narrow screens. */
    aspect-ratio: 3 / 2;
  }
`;

export const ServiceSectionMeta = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const ServiceSectionMetaTitle = styled.h2`
  color: ${primaryColor[700]};
  font-size: var(--fs-section);
  line-height: 1.15;
`;

export const ServiceSectionMetaDescription = styled.p`
  color: ${textColor.secondary};
  line-height: 1.6;
`;

/* "How we deliver" — always visible (no toggle), framed as a self-contained
   dashed-border card so it reads as one clear unit instead of competing with
   the solid divider between services. */
export const ServiceDeliveryBlock = styled.div`
  margin-top: 24px;
  padding: 26px 28px;
  border: 1.5px dashed ${primaryColor[300]};
  border-radius: ${radius.lg};
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (max-width: 560px) {
    padding: 20px;
  }
`;

/* Eyebrow heading — tracked uppercase in brand green, with a small
   "flows-from-above" arrow, so it clearly reads as a section marker. */
export const ServiceDeliveryLabel = styled.h3`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: var(--font-body);
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: ${primaryColor[700]};

  svg {
    color: ${primaryColor[500]};
    flex-shrink: 0;
  }
`;

export const ServiceDeliveryList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
  gap: 13px;
`;

export const ServiceDeliveryListItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  color: ${textColor.secondary};
  line-height: 1.55;

  svg {
    margin-top: 3px;
    color: ${primaryColor[500]};
    flex-shrink: 0;
  }
`;

export const DifferentiatorsSection = styled.section`
  /* Full-bleed dark-green band (same treatment as the Benefits band). */
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  background: ${primaryColor[900]};
  padding: 144px 24px;
  display: flex;
  justify-content: center;

  @media (max-width: 560px) {
    padding: 96px 20px;
  }
`;

export const DifferentiatorsInner = styled.div`
  width: 100%;
  max-width: 1440px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const DifferentiatorsTitle = styled.h3`
  color: #fff;
  font-size: var(--fs-section);
  line-height: 1.2;
`;

export const DifferentiatorsDescription = styled.p`
  color: rgba(255, 255, 255, 0.72);
  line-height: 1.6;
  max-width: 720px;
`;

export const DifferentiatorsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 24px;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
`;

export const DifferentiatorCard = styled.div`
  background: ${primaryColor[800]};
  border: 1px solid ${primaryColor[700]};
  border-radius: ${radius.lg};
  padding: 26px 22px;
  min-height: 190px;
  display: flex;
  flex-direction: column;
  gap: 18px;
  transition:
    transform 0.3s ease,
    border-color 0.3s ease,
    box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    border-color: ${primaryColor[500]};
    box-shadow: 0 16px 34px rgba(0, 0, 0, 0.22);
  }

  @media (max-width: 560px) {
    min-height: 0;
    padding: 22px 20px;
  }
`;

export const DifferentiatorIcon = styled.span`
  width: 52px;
  height: 52px;
  flex-shrink: 0;
  border-radius: ${radius.lg};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.16);
  color: ${primaryColor[200]};

  .material-symbols-outlined {
    font-size: 28px;
  }
`;

export const DifferentiatorLabel = styled.p`
  color: ${primaryColor[50]};
  font-size: 16px;
  line-height: 1.45;
  font-weight: 500;
`;

export const BenefitsSection = styled.section`
  /* Full-bleed band: breaks out of the max-width content column to span the
     whole viewport with the light-green background (mosaic style), for extra
     prominence right below the hero. */
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  background: ${primaryColor[50]};
  padding: 144px 24px;
  display: flex;
  justify-content: center;
  /* Offset the glass header when the hero CTA scrolls here. */
  scroll-margin-top: 104px;

  @media (max-width: 560px) {
    padding: 96px 20px;
  }
`;

export const BenefitsInner = styled.div`
  width: 100%;
  max-width: 1440px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const BenefitsTitle = styled.h3`
  font-size: var(--fs-section);
  line-height: 1.2;
  color: ${primaryColor[900]};
`;

export const BenefitsDescription = styled.p`
  color: ${textColor.secondary};
  line-height: 1.6;
`;

export const BenefitsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 24px;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
`;

export const BenefitCard = styled.div`
  background: #fff;
  border: 1px solid ${primaryColor[100]};
  border-radius: ${radius.lg};
  padding: 24px 20px;
  min-height: 200px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 16px 34px rgba(32, 71, 37, 0.1);
  }

  p {
    color: ${textColor.secondary};
    font-size: 15px;
    line-height: 1.55;
  }

  @media (max-width: 560px) {
    min-height: 0;
  }
`;

export const BenefitIcon = styled.span`
  width: 52px;
  height: 52px;
  flex-shrink: 0;
  border-radius: ${radius.lg};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: ${primaryColor[50]};
  border: 1px solid ${primaryColor[100]};
  color: ${primaryColor[600]};
  margin-bottom: 4px;

  .material-symbols-outlined {
    font-size: 28px;
  }
`;

export const BenefitCardTitle = styled.h4`
  color: ${primaryColor[700]};
  font-size: 17px;
  line-height: 1.3;
`;
