import { useState, useRef, useEffect } from 'react';

import { useTranslation } from 'react-i18next';
import { CaretDownIcon, CheckIcon } from '@phosphor-icons/react';

// Flag components
import { FlagGb, FlagNl } from '@sankyu/react-circle-flags';

import {
  SelectorWrapper,
  SelectedLanguageButton,
  Dropdown,
  LanguageOption,
  FlagWrapper,
  LanguageLabel,
} from './styleLanguageSelector';

// All available languages
const languages = [
  {
    code: 'en',
    label: 'English',

    // Flag component
    flag: <FlagGb width={22} height={22} />,
  },

  {
    code: 'du',
    label: 'Nederlands',
    flag: <FlagNl width={22} height={22} />,
  },
];

export default function LanguageSelector({ label }) {
  // Access i18next instance
  const { i18n } = useTranslation();

  // Controls dropdown visibility
  const [isOpen, setIsOpen] = useState(false);

  // After a selection we suppress the desktop hover-reveal until the pointer
  // leaves, so the list closes on click instead of staying open under the cursor.
  const [hoverSuppressed, setHoverSuppressed] = useState(false);

  // Reference used to detect outside clicks
  const wrapperRef = useRef(null);

  // Gets current selected language
  const currentLanguage =
    languages.find(language => language.code === i18n.language) || languages[0];

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Changes application language
  function handleSelectLanguage(languageCode, event) {
    i18n.changeLanguage(languageCode);

    setIsOpen(false);
    setHoverSuppressed(true);

    // Drop focus so :focus-within doesn't keep the list open on desktop.
    event.currentTarget.blur();
  }

  // Pointer left the selector: allow hover to reopen the list again.
  function handleMouseLeave() {
    setHoverSuppressed(false);
    setIsOpen(false);
  }

  return (
    <SelectorWrapper
      ref={wrapperRef}
      onMouseLeave={handleMouseLeave}
      data-suppress-hover={hoverSuppressed ? '' : undefined}
    >
      {/* Trigger — styled as a nav dropdown item */}
      <SelectedLanguageButton
        type="button"
        $open={isOpen}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        onClick={() => setIsOpen(!isOpen)}
      >
        <FlagWrapper>{currentLanguage.flag}</FlagWrapper>
        <span className="lang-label">{label}</span>
        <CaretDownIcon size={16} className="caret" />
      </SelectedLanguageButton>

      {/* Dropdown — always rendered; visibility handled by hover (desktop)
          or the $open state (click / mobile) */}
      <Dropdown $open={isOpen} role="listbox">
        {languages.map(language => {
          const isActive = language.code === currentLanguage.code;
          return (
            <LanguageOption
              key={language.code}
              type="button"
              role="option"
              aria-selected={isActive}
              $active={isActive}
              onClick={event => handleSelectLanguage(language.code, event)}
            >
              {/* Flag */}
              <FlagWrapper>{language.flag}</FlagWrapper>

              {/* Language name */}
              <LanguageLabel>{language.label}</LanguageLabel>

              {/* Current-language indicator */}
              {isActive && <CheckIcon size={16} weight="bold" className="check" />}
            </LanguageOption>
          );
        })}
      </Dropdown>
    </SelectorWrapper>
  );
}
