import { t } from 'i18next';
import Button from '../buttonAnimated/Button';
import {
  GetStartedSectionContainer,
  GetStartedCardContainer,
  GetStartedSectionText,
} from './styleGetStartedSection';

export default function GetStartedSection() {
  return (
    <GetStartedSectionContainer>
      <GetStartedCardContainer>
        <img
          src={`${import.meta.env.BASE_URL}assets/GetStartedImage.png`}
          alt="Get Started "
        />
        <GetStartedSectionText>
          <h2>{t('getStartSectionTitle')}</h2>
          <p>{t('getStartSectionDescription')}</p>
          <Button label="Contact" />
        </GetStartedSectionText>
      </GetStartedCardContainer>
    </GetStartedSectionContainer>
  );
}
