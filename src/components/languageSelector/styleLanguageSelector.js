import styled from 'styled-components';
import { primaryColor, textColor } from '../../utils/colors';

// Main wrapper
export const SelectorWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

// Main selected language button
export const SelectedLanguageButton = styled.button`
  border: none;
  border-radius: 16px;

  background-color: ${primaryColor[800]};
  display: flex;
  align-items: center;
  padding: 12px 12px;
  margin: 0;
  column-gap: 1rem;
  color: ${textColor.white};
  cursor: pointer;

  /* Perfect centering */
  display: flex;

  /* Prevent flex distortion */
  flex-shrink: 0;

  transition:
    transform 0.2s ease,
    background 0.2s ease;

  &:hover {
    transform: translateY(-2px);

    background: #61c966;
  }
`;

// Dropdown container
export const Dropdown = styled.div`
  position: absolute;

  top: calc(100% + 10px);
  right: 0;

  width: 180px;

  background: white;

  border-radius: 18px;

  padding: 8px;

  display: flex;
  flex-direction: column;
  gap: 4px;

  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.08);

  z-index: 999;
`;

// Each language option
export const LanguageOption = styled.button`
  width: 100%;
  height: 52px;

  border: none;
  border-radius: 14px;

  background: transparent;

  display: flex;
  align-items: center;
  gap: 12px;

  padding: 0 12px;

  cursor: pointer;

  transition:
    background 0.2s ease,
    transform 0.2s ease;

  &:hover {
    background: #f5f5f5;

    transform: translateX(2px);
  }
`;

// Flag wrapper
export const FlagWrapper = styled.div`
  width: 24px;
  height: 24px;

  display: flex;
  align-items: center;
  justify-content: center;

  /* Removes inline spacing issues */
  line-height: 0;

  /* Keeps scaling centered */
  transform-origin: center center;

  scale: ${({ isSelected }) => (isSelected ? 1.15 : 1)};

  transition:
    transform 0.2s ease,
    scale 0.2s ease;

  ${LanguageOption}:hover & {
    transform: scale(1.08);
  }

  /* Makes SVG behave correctly */
  svg {
    display: block;
    width: 100%;
    height: 100%;
  }
`;

// Language label
export const LanguageLabel = styled.span`
  font-size: 15px;
  font-weight: 500;

  color: #1f1f1f;
`;
