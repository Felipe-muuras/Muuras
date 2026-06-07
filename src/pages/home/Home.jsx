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
  ResilientCitiesSection,
  ResilientCitiesCardsContainer,
  ResilientCitiesTitle,
} from './styleHome';
import ImageCard from '../../components/imageCard/ImageCard';
import GetStartedSection from '../../components/getStartedSection/GetStartedSection';
import SliderSection from '../../components/sliderContainer/SliderContainer';
import ResilientCitiesCard from '../../components/resilientCitiesCard/ResilientCitiesCard';
import FormSection from '../../components/formSection/FormSection';

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
      <ResilientCitiesSection>
        <ResilientCitiesTitle>
          <h1>How we grow Resilient Cities </h1>
        </ResilientCitiesTitle>
        <ResilientCitiesCardsContainer>
          <ResilientCitiesCard
            imagePath={'/public/assets/ourServicesCardImage.png'}
            title="Our services"
            description="Driving sustainable urban impact through research-backed environmental restoration. Let’s build greener cities together."
            cta="See our products"
          />
          <ResilientCitiesCard
            imagePath={'/public/assets/ourProductsCardImage.png'}
            title="Our products"
            description="Turn wastewater into sustainable impact with bio-based solutions designed for greener, more resilient cities."
            cta="See our services"
          />
        </ResilientCitiesCardsContainer>
      </ResilientCitiesSection>
      <SliderSection />
      <FormSection />
    </HomeContainer>
  );
}
