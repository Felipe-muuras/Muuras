import styled, { keyframes } from 'styled-components';

import { primaryColor } from '../../utils/colors';
import { radius } from '../../utils/radius';

const slideUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Banner = styled.div`
  position: fixed;
  z-index: 9998;
  left: 24px;
  bottom: 24px;
  max-width: min(440px, calc(100vw - 32px));

  display: flex;
  flex-direction: column;
  gap: 14px;

  padding: 20px 22px;
  background: #ffffff;
  border-radius: ${radius.lg};
  box-shadow: 0 20px 48px rgba(0, 0, 0, 0.26);

  animation: ${slideUp} 0.4s cubic-bezier(0.22, 1, 0.36, 1);

  @media (max-width: 520px) {
    left: 12px;
    right: 12px;
    bottom: 12px;
    max-width: none;
  }
`;

export const BannerText = styled.p`
  color: ${primaryColor[900]};
  font-size: 14px;
  line-height: 1.55;

  a {
    color: ${primaryColor[600]};
    font-weight: 600;
    text-decoration: underline;
    text-underline-offset: 2px;

    &:hover {
      color: ${primaryColor[700]};
    }
  }
`;

export const BannerActions = styled.div`
  display: flex;
  gap: 10px;

  @media (max-width: 360px) {
    flex-direction: column-reverse;
  }
`;

/* Reject is as prominent/easy to hit as Accept (GDPR requires parity). */
export const RejectButton = styled.button`
  flex: 1;
  padding: 11px 18px;
  border: 1px solid ${primaryColor[200]};
  border-radius: ${radius.pill};
  background: transparent;
  color: ${primaryColor[800]};
  font-family: var(--font-body);
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition:
    background 0.2s ease,
    border-color 0.2s ease;

  &:hover {
    background: rgba(0, 0, 0, 0.04);
    border-color: ${primaryColor[400]};
  }
`;

export const AcceptButton = styled.button`
  flex: 1;
  padding: 11px 18px;
  border: none;
  border-radius: ${radius.pill};
  background: ${primaryColor[500]};
  color: #ffffff;
  font-family: var(--font-body);
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition:
    background 0.2s ease,
    transform 0.2s ease,
    box-shadow 0.2s ease;

  &:hover {
    background: ${primaryColor[600]};
    transform: translateY(-1px);
    box-shadow: 0 10px 22px rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform: translateY(0);
  }
`;
