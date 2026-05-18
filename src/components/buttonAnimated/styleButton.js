import styled from 'styled-components';
import { primaryColor } from '../../utils/colors';

export const WrapperButton = styled.button`
  position: relative;

  width: 200px;
  height: 72px;

  border: none;
  border-radius: 999px;

  background: ${primaryColor[500]};

  cursor: pointer;
  overflow: hidden;

  display: flex;
  align-items: center;

  padding-left: 24px;

  /* evita problemas de stacking */
  isolation: isolate;
  z-index: 1;
`;

export const ButtonText = styled.span`
  position: relative;
  z-index: 1;

  color: white;
  font-size: 16px;
  font-weight: 200;

  transition:
    opacity 0.25s ease,
    transform 0.25s ease;

  ${WrapperButton}:hover & {
    opacity: 0;
    transform: translateY(10px);
  }
`;

export const HoverLayer = styled.div`
  display: flex;
  align-items: center;

  position: absolute;

  top: 8px;
  right: 8px;

  width: 56px;
  height: calc(100% - 16px);

  background: white;
  border-radius: 999px;

  overflow: hidden;

  z-index: 2;

  transition:
    width 0.45s cubic-bezier(0.22, 1, 0.36, 1),
    background 0.3s ease;

  ${WrapperButton}:hover & {
    width: calc(100% - 16px);
  }

  svg {
    position: absolute;

    right: 18px;
    top: 50%;

    transform: translateY(-50%);

    /* arrow sempre visível */
    z-index: 3;
  }
`;

export const HoverText = styled.span`
  position: absolute;

  left: 24px;
  top: 50%;

  color: ${primaryColor[500]};
  font-size: 16px;
  font-weight: 200;

  white-space: nowrap;

  z-index: 4;
  pointer-events: none;

  /* estado inicial */
  opacity: 0;
  transform: translateY(calc(-50% - 20px));

  transition:
    opacity 0.35s ease,
    transform 0.35s ease;

  ${WrapperButton}:hover & {
    opacity: 1;

    /* entra reto de cima para baixo */
    transform: translateY(-50%);
  }

  ${WrapperButton}:not(:hover) & {
    opacity: 0;

    /* sai reto para cima */
    transform: translateY(calc(-50% - 20px));
  }
`;
