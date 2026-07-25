import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { primaryColor } from '../../utils/colors';
import { radius } from '../../utils/radius';

export const FooterContainer = styled.footer`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 72px 24px 32px;
  background-color: ${primaryColor[900]};

  @media (max-width: 560px) {
    padding: 56px 20px 28px;
  }
`;

export const FooterInner = styled.div`
  width: 100%;
  max-width: 1440px;
  display: flex;
  flex-direction: column;
  gap: 44px;
`;

export const FooterTop = styled.div`
  display: flex;
  gap: 64px;
  align-items: flex-start;

  @media (max-width: 960px) {
    flex-direction: column;
    gap: 40px;
  }
`;

export const BrandBlock = styled.div`
  min-width: 220px;
  max-width: 260px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  img {
    width: 138px;
    height: auto;
  }
`;

/* Short brand line under the logo — warmth + context. */
export const BrandTagline = styled.p`
  color: rgba(255, 255, 255, 0.6);
  font-size: 14px;
  line-height: 1.55;
`;

export const FooterSocialButton = styled.a`
  width: 40px;
  height: 40px;
  border-radius: ${radius.pill};
  display: inline-flex;
  align-items: center;
  justify-content: center;

  color: #ffffff;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.16);

  transition:
    background 0.25s ease,
    border-color 0.25s ease,
    transform 0.25s ease;

  &:hover {
    background: ${primaryColor[500]};
    border-color: ${primaryColor[500]};
    transform: translateY(-2px);
  }
`;

export const FooterColumns = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 32px;

  @media (max-width: 960px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 32px 24px;
  }

  @media (max-width: 460px) {
    grid-template-columns: 1fr;
  }
`;

export const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

/* Tracked uppercase eyebrow — quiet, structured, premium. */
export const FooterColumnTitle = styled.h4`
  font-family: var(--font-body);
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.5);
`;

export const FooterLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const baseLink = `
  width: fit-content;
  color: rgba(255, 255, 255, 0.75);
  font-size: 14px;
  line-height: 1.4;
  text-decoration: none;
  transition:
    color 0.2s ease,
    transform 0.2s ease;

  &:hover {
    color: #ffffff;
    transform: translateX(3px);
  }
`;

export const FooterNavLink = styled(Link)`
  ${baseLink}
`;

export const FooterExternalLink = styled.a`
  ${baseLink}
`;

export const FooterDivider = styled.div`
  width: 100%;
  height: 1px;
  background-color: rgba(255, 255, 255, 0.1);
`;

export const FooterBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  color: rgba(255, 255, 255, 0.5);
  font-size: 13px;

  /* Stack (left-aligned) before the right-hand text would collide with the
     floating back-to-top button in the corner. */
  @media (max-width: 900px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }
`;

export const FooterCredit = styled.p`
  margin: 0;

  svg {
    vertical-align: text-bottom;
    margin: 0 1px;
  }

  a {
    color: rgba(255, 255, 255, 0.75);
    font-weight: 600;
    text-decoration: none;
    transition: color 0.2s ease;

    &:hover {
      color: #ffffff;
      text-decoration: underline;
    }
  }
`;

export const FooterRights = styled.p`
  margin: 0;
`;
