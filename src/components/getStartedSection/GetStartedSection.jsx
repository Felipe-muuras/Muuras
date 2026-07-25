import { t } from 'i18next';
import Button from '../buttonAnimated/Button';
import ZoomImage from '../zoomImage/ZoomImage';
import {
  GetStartedSectionContainer,
  GetStartedCardContainer,
  GetStartedSectionText,
} from './styleGetStartedSection';

export default function GetStartedSection() {
  return (
    <GetStartedSectionContainer id="home-get-started" data-reveal>
      <GetStartedCardContainer>
        <ZoomImage
          className="gsImage"
          src={`${import.meta.env.BASE_URL}assets/hands-water-splash-sunlight.png`}
          alt={t('homeGetStartedImageAlt')}
        />
        <GetStartedSectionText>
          <h2>{t('getStartSectionTitle')}</h2>
          <p>{t('getStartSectionDescription')}</p>
          <Button label={t('homeGetStartedCta')} scrollTargetId="home-contact" />
        </GetStartedSectionText>
      </GetStartedCardContainer>
    </GetStartedSectionContainer>
  );
}
