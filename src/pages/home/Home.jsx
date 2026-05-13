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
          <img
            src={`${import.meta.env.BASE_URL}assets/whiteLogo.svg`}
            alt="Muuras Logo"
          />
          <h1>{t('heroTitle')}</h1>
          <p>{t('heroSubtitle')}</p>
        </HeroContent>
        <ScrollDownButton text={t('homeScrollDownButton')} />
      </HeroSection>
      <ResilienceSection>
        <TopResilienceSection>
          <img
            src={`${import.meta.env.BASE_URL}assets/resilienceTopImage.png`}
            alt="Resilience Banner"
          />
          <ResilienceText>
            <h2>Restoring Natural Resilience:</h2>
            <p>
              Resilient cities are the future of urban living. Resilient cities
              keep humans safe, sheltered, and healthy in the face of extreme
              weather, pollution, and climate change. Muuras collaborates with
              nature to fulfil its mission: restoring the resilience of cities
              to safeguard life itself.{' '}
            </p>
          </ResilienceText>
        </TopResilienceSection>
        <ResilienceCardsContainer>
          <ImageCard
            imagePath="/assets/healthyEcosystemsCard.png"
            title="Healthy ecosystems"
            description="Like all living beings, humans need a healthy home (eco comes from the greek word for home: ‘oikos’), where they can drink clean water, eat clean food, and breathe clean air. Resilient cities provide healthy homes not just by avoiding unnecessary pollution, but also by actively removing existing pollutants from the environment."
          />
          <ImageCard
            imagePath="/assets/coexistenceCard.png"
            title="Coexistence"
            description=" Life is better when it is shared: we choose to live in cities for a reason, and our lives fundamentally depend on other species. In resilient cities, nature-inclusive design harnesses the unique strengths of different life forms (plants, animals, fungi, etc.) to create a self-regulating environment that keeps us safe and is prepared to deal with unpredictable events."
          />
          <ImageCard
            imagePath="/assets/sustainableDevelopmentCard.png"
            title="Sustainable development"
            description=" ‘If you’re not growing you’re dying’, so resilient cities are always in development. Being ready for the future requires finding new ways of being, of organizing ourselves, of building (infra)structures, of using our resources. Every day, we use what we have to make life in the city a little better, without placing a burden on another place or time."
          />
        </ResilienceCardsContainer>
      </ResilienceSection>
      <GetStartedSection />
      <SliderSection />
    </HomeContainer>
  );
}
