import { useTranslation } from 'react-i18next';
import {
  WrapperHeader,
  WrapperLinks,
  WrapperActions,
  StyledLink,
} from './styleHeader';
import { CaretDownIcon } from '@phosphor-icons/react';
import { useState } from 'react';
import Button from '../buttonAnimated/Button';

export default function Header() {
  const {
    t,
    i18n: { changeLanguage, language },
  } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(language);

  const handleChangeLanguage = () => {
    const newLanguage = currentLanguage === 'en' ? 'du' : 'en';
    changeLanguage(newLanguage);
    setCurrentLanguage(newLanguage);
  };

  return (
    <WrapperHeader>
      <WrapperLinks>
        <img
          src={`${import.meta.env.BASE_URL}assets/whiteIcon.svg`}
          alt="Muuras Logo"
        />
        <StyledLink to="/">{t('headerHomeLink')}</StyledLink>
        <StyledLink to="/services">
          {t('headerServicesLink')} <CaretDownIcon size={20} />
        </StyledLink>
        <StyledLink to="/products">{t('headerProductsLink')}</StyledLink>
      </WrapperLinks>
      <WrapperActions>
        <button onClick={handleChangeLanguage}>Change Language</button>
        <Button label={t('headerContactLink')} />
      </WrapperActions>
    </WrapperHeader>
  );
}
