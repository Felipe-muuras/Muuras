import styled from 'styled-components';
import { primaryColor, textColor } from '../../utils/colors';
import { radius } from '../../utils/radius';

// Wrapper — opens the menu on hover / keyboard focus on desktop, exactly
// like the navigation dropdowns.
export const SelectorWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  @media (min-width: 981px) {
    /* Skip the hover/focus reveal right after a selection, so the list
       closes on click and only reopens once the pointer leaves and
       hovers back in (see data-suppress-hover in LanguageSelector). */
    &:not([data-suppress-hover]):hover > div,
    &:not([data-suppress-hover]):focus-within > div {
      opacity: 1;
      transform: translateY(0);
      pointer-events: auto;
    }
  }
`;

// Trigger — styled like a nav item (transparent, flag + label + caret).
export const SelectedLanguageButton = styled.button`
  border: none;
  background: transparent;
  padding: 0;
  margin: 0;

  display: flex;
  align-items: center;
  column-gap: 0.5rem;

  color: ${({ $open }) => ($open ? 'var(--nav-fg)' : 'var(--nav-fg-muted)')};
  font-size: 17px;
  cursor: pointer;
  transition: color 0.2s ease;

  &:hover,
  &:focus-visible {
    color: var(--nav-fg);
  }

  .caret {
    transition: transform 0.2s ease;
    transform: rotate(${({ $open }) => ($open ? '180deg' : '0deg')});
  }

  /* On mobile the trigger collapses to just the flag + caret to save
     room in the always-visible header bar. */
  @media (max-width: 980px) {
    .lang-label {
      display: none;
    }
  }

  ${SelectorWrapper}:hover & .caret {
    transform: rotate(180deg);
  }
`;

// Dropdown — the same dark-green panel as the nav submenus.
export const Dropdown = styled.div`
  position: absolute;
  top: calc(100% + 4px);
  right: 0;

  min-width: 200px;
  padding: 10px;
  border-radius: ${radius.lg};
  background: ${primaryColor[900]};
  border: 1px solid ${primaryColor[800]};
  box-shadow: 0 10px 28px rgba(0, 0, 0, 0.18);

  display: flex;
  flex-direction: column;
  gap: 4px;

  opacity: ${({ $open }) => ($open ? 1 : 0)};
  transform: translateY(${({ $open }) => ($open ? '0' : '8px')});
  pointer-events: ${({ $open }) => ($open ? 'auto' : 'none')};
  transition:
    opacity 0.2s ease,
    transform 0.2s ease;
  z-index: 20;

  /* Transparent bridge so the hover transition stays continuous. */
  &::before {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 100%;
    height: 12px;
  }

  /* Keep the menu close to the trigger on smaller screens as well. */
  @media (max-width: 980px) {
    position: absolute;
    top: calc(100% + 4px);
    right: 0;
    left: auto;
    max-width: min(220px, calc(100vw - 24px));
    transform: translateY(${({ $open }) => ($open ? '0' : '8px')});
  }
`;

// Option row — matches the nav dropdown links (white text, green hover).
export const LanguageOption = styled.button`
  width: 100%;
  border: none;
  background: ${({ $active }) =>
    $active ? 'rgba(255, 255, 255, 0.08)' : 'transparent'};
  color: ${textColor.white};

  display: flex;
  align-items: center;
  gap: 10px;

  padding: 9px 10px;
  border-radius: ${radius.md};
  cursor: pointer;
  transition: background 0.2s ease;

  &:hover {
    background: ${primaryColor[800]};
  }

  /* Check on the current language, pushed to the far right. */
  .check {
    margin-left: auto;
    color: ${primaryColor[400]};
    flex: none;
  }
`;

// Flag wrapper
export const FlagWrapper = styled.div`
  width: 22px;
  height: 22px;
  flex: none;

  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 0;

  svg {
    display: block;
    width: 100%;
    height: 100%;
  }
`;

// Language label
export const LanguageLabel = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: ${textColor.white};
`;
