import { useState, useRef, useEffect } from 'react';

import { useTranslation } from 'react-i18next';

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
  function handleSelectLanguage(languageCode) {
    i18n.changeLanguage(languageCode);

    setIsOpen(false);
  }

  return (
    <SelectorWrapper ref={wrapperRef}>
      {/* Current selected language */}
      <SelectedLanguageButton onClick={() => setIsOpen(!isOpen)}>
        <p>{label}</p>
        <FlagWrapper isSelected>{currentLanguage.flag}</FlagWrapper>
      </SelectedLanguageButton>

      {/* Dropdown */}
      {isOpen && (
        <Dropdown>
          {languages.map(language => (
            <LanguageOption
              key={language.code}
              onClick={() => handleSelectLanguage(language.code)}
            >
              {/* Flag */}
              <FlagWrapper>{language.flag}</FlagWrapper>

              {/* Language name */}
              <LanguageLabel>{language.label}</LanguageLabel>
            </LanguageOption>
          ))}
        </Dropdown>
      )}
    </SelectorWrapper>
  );
}
