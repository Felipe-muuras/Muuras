import styled from 'styled-components';
import { textColor } from '../../utils/colors';
import { radius } from '../../utils/radius';

export const WrapperScrollDownButton = styled.button`
  color: ${textColor.white};
  display: flex;
  flex-direction: column;
  row-gap: 0.75rem;
  align-items: center;
  padding: 16px 0;
  border: none;
  background: transparent;
  cursor: pointer;

  p {
    font-weight: 400;
  }

  &:focus-visible {
    outline: 2px solid ${textColor.white};
    outline-offset: 8px;
    border-radius: ${radius.md};
  }

  &:hover .mouse {
    transform: translateY(2px);
  }
`;

/* Mouse-shaped scroll indicator with a wheel dot travelling downward. */
export const MouseScroll = styled.span`
  width: 26px;
  height: 42px;
  flex: none;

  border: 2px solid ${textColor.white};
  border-radius: ${radius.lg};

  display: flex;
  justify-content: center;
  padding-top: 7px;

  transition: transform 0.2s ease;

  &::before {
    content: '';
    width: 4px;
    height: 8px;
    border-radius: ${radius.pill};
    background: ${textColor.white};
    animation: scrollWheel 1.6s cubic-bezier(0.3, 0, 0.2, 1) infinite;
  }

  @keyframes scrollWheel {
    0% {
      opacity: 0;
      transform: translateY(0);
    }
    25% {
      opacity: 1;
    }
    60% {
      opacity: 1;
      transform: translateY(12px);
    }
    100% {
      opacity: 0;
      transform: translateY(14px);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    &::before {
      animation: none;
    }
  }
`;
