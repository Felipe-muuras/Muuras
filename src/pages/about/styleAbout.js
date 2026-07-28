import styled from 'styled-components';
import { primaryColor, textColor } from '../../utils/colors';
import { radius } from '../../utils/radius';
import ZoomImage from '../../components/zoomImage/ZoomImage';

export const AboutPageContainer = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const AboutContent = styled.section`
  width: 100%;
  /* 1440 of content + 24px side padding = the content edges line up exactly
     with the header bar (which is max-width 1440, inset 24px). */
  max-width: 1488px;
  margin: 0 auto;
  padding: 150px 24px 80px;
  display: flex;
  flex-direction: column;
  gap: 48px;

  @media (max-width: 560px) {
    padding: 128px 20px 56px;
    gap: 32px;
  }
`;

export const MissionSection = styled.section`
  display: grid;
  /* Standardized 50/50 hero split (same as Services & Products). */
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  gap: 48px;
  align-items: center;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 24px;
  }
`;

export const MissionContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

export const SectionTitle = styled.h1`
  font-size: var(--fs-hero);
  line-height: 1.08;
  color: ${primaryColor[900]};
`;

export const SectionSubtitle = styled.p`
  font-size: 16px;
  line-height: 1.6;
  color: ${textColor.secondary};
`;

/* In-page section heading (uses the shared responsive section scale).
   SectionTitle (hero scale) stays for the page's main heading. */
export const AboutSectionTitle = styled.h2`
  font-size: var(--fs-section);
  line-height: 1.2;
  color: ${primaryColor[900]};
`;

export const BulletList = styled.ul`
  margin: 4px 0 0;
  padding: 0;
  list-style: none;
  display: grid;
  gap: 10px;
`;

export const BulletItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  color: ${textColor.secondary};
  line-height: 1.5;

  svg {
    margin-top: 2px;
    color: ${primaryColor[500]};
    flex-shrink: 0;
  }
`;

export const MissionImage = styled(ZoomImage)`
  width: 100%;
  border-radius: ${radius.lg};
  /* Same aspect-ratio on all three page heroes so they match in size. */
  aspect-ratio: 6 / 5;
`;

export const ValuesSection = styled.section`
  display: grid;
  /* 50/50: the image reaches the centre of the page and the content sits
     right next to it. The portrait image runs taller, and the content is
     vertically centred against the image's height. */
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  gap: 48px;
  align-items: center;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 24px;
  }
`;

export const ValuesImage = styled(ZoomImage)`
  width: 100%;
  /* Vertical (portrait) 3:4 — taller than the content column beside it. */
  aspect-ratio: 3 / 4;
  border-radius: ${radius.lg};

  @media (max-width: 1024px) {
    /* Less tall when stacked on mobile. */
    aspect-ratio: 4 / 3;
  }
`;

export const ValuesContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

export const ValueCards = styled.div`
  display: grid;
  gap: 12px;
`;

export const ValueCard = styled.article`
  border: 1px solid ${primaryColor[100]};
  border-radius: ${radius.pill};
  background: #fff;
  padding: 14px 30px 14px 14px;
  display: flex;
  gap: 16px;
  align-items: center;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 26px rgba(32, 71, 37, 0.08);
  }

  @media (max-width: 360px) {
    padding: 12px 24px 12px 12px;
    gap: 12px;
  }
`;

export const ValueIcon = styled.span`
  width: 48px;
  height: 48px;
  flex-shrink: 0;
  border-radius: ${radius.pill};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: ${primaryColor[50]};
  border: 1px solid ${primaryColor[100]};
  color: ${primaryColor[600]};

  .material-symbols-outlined {
    font-size: 24px;
  }
`;

export const ValueText = styled.div`
  h3 {
    font-size: 18px;
    line-height: 1.3;
    color: ${primaryColor[700]};
  }

  p {
    margin-top: 4px;
    font-size: 15px;
    line-height: 1.55;
    color: ${textColor.secondary};
  }
`;

export const AboutCtaRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const TeamSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 22px;
  scroll-margin-top: 120px;
`;

export const TeamHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  h2 {
    font-size: var(--fs-section);
    line-height: 1.2;
    color: ${primaryColor[900]};
  }

  p {
    font-size: 16px;
    color: ${textColor.secondary};
    line-height: 1.5;

    @media (max-width: 560px) {
      font-size: 15px;
    }
  }
`;

export const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;

export const TeamCard = styled.article`
  position: relative;
  overflow: hidden;
  border-radius: ${radius.lg};
  min-height: 520px;
  isolation: isolate;

  img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    /* Per-photo framing: --team-img-scale zooms the crop and
       --team-img-origin anchors it (e.g. bottom), so a wider shot can be
       tightened to match the others. Hover multiplies the base scale. */
    transform: scale(var(--team-img-scale, 1));
    transform-origin: var(--team-img-origin, center);
    transition: transform 0.5s ease;
  }

  &:hover img {
    transform: scale(calc(var(--team-img-scale, 1) * 1.04));
  }

  @media (hover: none), (pointer: coarse) {
    min-height: 460px;

    &:hover img {
      transform: scale(var(--team-img-scale, 1));
    }
  }

  @media (max-width: 360px) {
    min-height: 420px;
  }
`;

/* White card that only fits the name + role, sitting over the bottom of
   the photo (Figma style). */
export const TeamCardContent = styled.div`
  position: absolute;
  left: 14px;
  right: 14px;
  bottom: 14px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;

  background: #ffffff;
  border-radius: ${radius.lg};
  padding: 14px 16px;

  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
`;

/* The name doubles as the LinkedIn link: plain text at rest, and on card
   hover it turns into the green LinkedIn button (with the icon). */
export const TeamCardNameLink = styled.a`
  display: inline-flex;
  align-items: center;
  max-width: 100%;

  color: ${primaryColor[900]};
  font-size: 20px;
  font-weight: 600;
  line-height: 1.15;
  text-decoration: none;

  border-radius: ${radius.pill};
  padding: 0;
  background: transparent;

  cursor: pointer;
  transition:
    background 0.28s ease,
    color 0.28s ease,
    padding 0.28s ease;

  span {
    white-space: nowrap;
  }

  svg {
    flex: none;
    max-width: 0;
    opacity: 0;
    overflow: hidden;
    transition:
      max-width 0.3s ease,
      opacity 0.25s ease,
      margin 0.3s ease;
  }

  ${TeamCard}:hover & {
    background: ${primaryColor[500]};
    color: #ffffff;
    padding: 7px 12px;

    svg {
      max-width: 24px;
      opacity: 1;
      margin-left: 8px;
    }
  }

  ${TeamCard}:hover &:hover {
    background: ${primaryColor[600]};
  }

  @media (hover: none), (pointer: coarse) {
    background: ${primaryColor[500]};
    color: #ffffff;
    padding: 7px 12px;

    svg {
      max-width: 24px;
      opacity: 1;
      margin-left: 8px;
    }
  }
`;

export const TeamCardRole = styled.span`
  color: ${textColor.secondary};
  font-size: 14px;
  line-height: 1.3;
`;

/* Profile description. Hidden at rest; on hover it reveals and the card
   grows upward (it is anchored to the bottom of the photo). */
export const TeamCardBio = styled.div`
  align-self: stretch;
  max-height: 0;
  opacity: 0;
  overflow: hidden;
  transition:
    max-height 0.45s cubic-bezier(0.22, 1, 0.36, 1),
    opacity 0.3s ease,
    margin 0.4s ease;

  ${TeamCard}:hover & {
    max-height: 460px;
    opacity: 1;
    margin-top: 10px;
  }

  @media (hover: none), (pointer: coarse) {
    max-height: 460px;
    opacity: 1;
    margin-top: 10px;
  }

  h4 {
    color: ${primaryColor[700]};
    font-size: 15px;
    font-weight: 600;
    line-height: 1.3;
  }

  p {
    margin-top: 6px;
    color: ${textColor.secondary};
    font-size: 15px;
    line-height: 1.55;
  }

  /* Professional trajectory: a quieter note under the contribution, set off
     by a hairline divider. */
  .trajectory {
    margin-top: 12px;
    padding-top: 12px;
    border-top: 1px solid rgba(0, 0, 0, 0.08);
    font-size: 13px;
    line-height: 1.5;
  }
`;

export const AboutGetStartedSection = styled.section`
  padding-top: 8px;
`;

export const AboutGetStartedCard = styled.div`
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

export const AboutGetStartedText = styled.div`
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
`;
