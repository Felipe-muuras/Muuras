import { useTranslation } from 'react-i18next';
import {
  WrapperHeader,
  WrapperLinks,
  WrapperActions,
  StyledLink,
} from './styleHeader';
import { CaretDownIcon } from '@phosphor-icons/react';
import Button from '../buttonAnimated/Button';
import LanguageSelector from '../languageSelector/LanguageSelector';

export default function Header() {
  const { t } = useTranslation();

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
        <LanguageSelector label={t('selectorLanguageLabel')} />
        <Button label={t('headerContactLink')} />
      </WrapperActions>
    </WrapperHeader>
  );
}
