import { primaryColor } from '../../utils/colors';
import { useTranslation } from 'react-i18next';
import {
  WrapperHeader,
  WrapperLinks,
  WrapperActions,
  IconWrapper,
  StyledLink,
} from './styleHeader';
import { ArrowRightIcon, CaretDownIcon } from '@phosphor-icons/react';
import { useState } from 'react';

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
        <img src="../../assets/whiteIcon.svg" alt="Muuras Logo" />
        <StyledLink to="/">{t('headerHomeLink')}</StyledLink>
        <StyledLink to="/services">
          {t('headerServicesLink')} <CaretDownIcon size={20} />
        </StyledLink>
        <StyledLink to="/products">{t('headerProductsLink')}</StyledLink>
      </WrapperLinks>
      <WrapperActions>
        <button onClick={handleChangeLanguage}>Change Language</button>
        <button>
          Contact
          <IconWrapper>
            <ArrowRightIcon size={20} color={primaryColor[500]} weight="bold" />
          </IconWrapper>
        </button>
      </WrapperActions>
    </WrapperHeader>
  );
}
