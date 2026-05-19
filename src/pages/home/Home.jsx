import Header from '../../components/header/Header';
import { useTranslation } from 'react-i18next';
import ScrollDownButton from '../../components/scrollDownButton/ScrollDownButton';
import {
  HomeContainer,
  HeroSection,
  HeroContent,
  ResilienceSection,
  TopResilienceSection,
  ResilienceText,
  ResilienceCardsContainer,
} from './styleHome';
import ImageCard from '../../components/imageCard/ImageCard';
import GetStartedSection from '../../components/getStartedSection/GetStartedSection';
import SliderSection from '../../components/sliderContainer/SliderContainer';

export default function Home() {
  const { t } = useTranslation();
  //I need to create this to use the translation in the hero section, but I can also
  // use it in the header component, so I will create it there as well and pass the t function as a prop to the header
  // component, so I can use it there as well.
  return (
    <HomeContainer>
      <Header />
      <HeroSection>
        <HeroContent>
          <img src="/assets/whiteLogo.svg" alt="Muuras Logo" />
          <h1>{t('heroTitle')}</h1>
          <p>{t('heroSubtitle')}</p>
        </HeroContent>
        <ScrollDownButton text={t('homeScrollDownButton')} />
      </HeroSection>
      <ResilienceSection>
        <TopResilienceSection>
          <img src="/assets/resilienceTopImage.png" alt="Resilience Banner" />
          <ResilienceText>
            <h2>{t('resilienceSectionTitle')}</h2>
            <p>{t('resilienceSectionDescription')}</p>
          </ResilienceText>
        </TopResilienceSection>
        <ResilienceCardsContainer>
          <ImageCard
            imagePath="/assets/healthyEcosystemsCard.png"
            title={t('healthyEcosystemsCardTitle')}
            description={t('healthyEcosystemsCardDescription')}
          />
          <ImageCard
            imagePath="/assets/coexistenceCard.png"
            title={t('CoexistenceCardTitle')}
            description={t('CoexistenceCardDescription')}
          />
          <ImageCard
            imagePath="/assets/sustainableDevelopmentCard.png"
            title={t('sustainableDevelopmentCardTitle')}
            description={t('sustainableDevelipmentCardDescription')}
          />
        </ResilienceCardsContainer>
      </ResilienceSection>
      <GetStartedSection />
      <SliderSection />
    </HomeContainer>
  );
}
