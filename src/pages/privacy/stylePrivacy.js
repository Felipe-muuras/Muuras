import styled from 'styled-components';

import { primaryColor, textColor } from '../../utils/colors';

export const PrivacyPageContainer = styled.div`
  width: 100%;
  background: #ffffff;
`;

export const PrivacyContent = styled.main`
  max-width: 820px;
  margin: 0 auto;
  padding: 140px 24px 80px;

  @media (max-width: 600px) {
    padding: 110px 20px 64px;
  }
`;

export const PrivacyHeader = styled.header`
  padding-bottom: 28px;
  margin-bottom: 28px;
  border-bottom: 1px solid ${primaryColor[100]};

  h1 {
    color: ${primaryColor[900]};
    font-size: clamp(28px, 5vw, 40px);
    line-height: 1.15;
  }

  p {
    margin-top: 16px;
    color: ${textColor.secondary};
    font-size: 16px;
    line-height: 1.6;
  }
`;

export const PrivacyUpdated = styled.span`
  display: block;
  margin-top: 10px;
  color: ${textColor.tertiary};
  font-size: 13px;
`;

export const PrivacySection = styled.section`
  & + & {
    margin-top: 26px;
  }

  h2 {
    color: ${primaryColor[800]};
    font-size: 19px;
    line-height: 1.3;
    margin-bottom: 8px;
  }

  p {
    color: ${textColor.secondary};
    font-size: 15px;
    line-height: 1.65;
    white-space: pre-line;
  }

  a {
    color: ${primaryColor[600]};
    text-decoration: underline;
    text-underline-offset: 2px;
  }
`;
