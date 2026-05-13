import styled from 'styled-components';
import { primaryColor } from '../../utils/colors';

export const WrapperButton = styled.button`
  width: 200px;
  height: 72px;

  border: none;
  cursor: pointer;

  background: ${primaryColor[500]};
  border-radius: 999px;

  position: relative;
  overflow: hidden;

  display: flex;
  align-items: center;

  padding-left: 24px;
`;

export const ButtonText = styled.span`
  color: white;
  font-size: 16px;
  font-weight: 200;

  z-index: 1;

  transition:
    opacity 0.2s ease,
    transform 0.2s ease;

  ${WrapperButton}:hover & {
    opacity: 0;
    transform: translateX(-10px);
  }
`;

export const HoverLayer = styled.div`
  position: absolute;

  top: 8px;
  right: 8px;

  width: 56px;
  height: calc(100% - 16px);

  background: white;
  border-radius: 999px;

  overflow: hidden;

  z-index: 2;

  transition: width 0.45s ease;

  ${WrapperButton}:hover & {
    width: calc(100% - 16px);
  }

  svg {
    position: absolute;

    right: 18px;
    top: 50%;

    transform: translateY(-50%);

    z-index: 4;
  }
`;

export const HoverText = styled.span`
  position: absolute;

  left: 24px;
  right: 60px;

  top: 50%;

  transform: translateY(calc(-50% - 30px));

  color: ${primaryColor[500]};
  font-size: 16px;
  font-weight: 200;

  white-space: nowrap;

  opacity: 0;

  z-index: 3;

  transition:
    opacity 0.35s ease,
    transform 0.35s ease;

  ${WrapperButton}:hover & {
    opacity: 1;
    transform: translateY(-50%);
  }
`;
