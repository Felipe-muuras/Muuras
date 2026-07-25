import Header from '../../components/header/Header';
import { useTranslation } from 'react-i18next';
import useSeo from '../../lib/useSeo';
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
import FAQSection from '../../components/faqSection/FAQSection';
import ZoomImage from '../../components/zoomImage/ZoomImage';
import useScrollReveal from '../../hooks/useScrollReveal';

export default function Home() {
  const { t } = useTranslation();
  useScrollReveal();
  useSeo('/');
  const homeFaqItems = [
    {
      question: t('homeFaqQuestion1'),
      answer: t('homeFaqAnswer1'),
    },
    {
      question: t('homeFaqQuestion2'),
      answer: t('homeFaqAnswer2'),
    },
    {
      question: t('homeFaqQuestion3'),
      answer: t('homeFaqAnswer3'),
    },
  ];
  //I need to create this to use the translation in the hero section, but I can also
  // use it in the header component, so I will create it there as well and pass the t function as a prop to the header
  // component, so I can use it there as well.
  return (
    <HomeContainer>
      <Header />
      <HeroSection data-wipe-dark>

        <HeroContent>
          <img
            src={`${import.meta.env.BASE_URL}assets/muuras-logo-white.svg`}
            alt={t('homeHeroLogoAlt')}
          />
          <h1>{t('heroTitle')}</h1>
          <p>{t('heroSubtitle')}</p>
        </HeroContent>
        <ScrollDownButton
          text={t('homeScrollDownButton')}
          scrollTargetId="home-resilience"
        />
      </HeroSection>
      <ResilienceSection id="home-resilience" data-reveal data-header-theme="light">
        <TopResilienceSection>
          <ZoomImage
            className="resBanner"
            src={`${import.meta.env.BASE_URL}assets/green-facade-climate-resilient-building.png`}
            alt={t('homeResilienceBannerAlt')}
          />
          <ResilienceText>
            <h2>{t('resilienceSectionTitle')}</h2>
            <p>{t('resilienceSectionDescription')}</p>
          </ResilienceText>
        </TopResilienceSection>
        <ResilienceCardsContainer data-reveal-stagger>
          <ImageCard
            imagePath={`${import.meta.env.BASE_URL}assets/healthy-ecosystems.png`}
            title={t('healthyEcosystemsCardTitle')}
            description={t('healthyEcosystemsCardDescription')}
          />
          <ImageCard
            imagePath={`${import.meta.env.BASE_URL}assets/nature-city-coexistence.png`}
            title={t('CoexistenceCardTitle')}
            description={t('CoexistenceCardDescription')}
          />
          <ImageCard
            imagePath={`${import.meta.env.BASE_URL}assets/sustainable-development.png`}
            title={t('sustainableDevelopmentCardTitle')}
            description={t('sustainableDevelipmentCardDescription')}
          />
        </ResilienceCardsContainer>
      </ResilienceSection>
      <GetStartedSection />
      <ResilientCitiesSection id="home-grow" data-reveal>
        <ResilientCitiesTitle>{t('homeGrowTitle')}</ResilientCitiesTitle>
        <ResilientCitiesCardsContainer data-reveal-stagger>
          <ResilientCitiesCard
            imagePath={`${import.meta.env.BASE_URL}assets/muuras-services-preview.png`}
            title={t('homeGrowServicesTitle')}
            description={t('homeGrowServicesDescription')}
            cta={t('homeGrowServicesCta')}
            ctaPath="/services"
          />
          <ResilientCitiesCard
            imagePath={`${import.meta.env.BASE_URL}assets/muuras-products-preview.png`}
            title={t('homeGrowProductsTitle')}
            description={t('homeGrowProductsDescription')}
            cta={t('homeGrowProductsCta')}
            ctaPath="/products"
          />
        </ResilientCitiesCardsContainer>
      </ResilientCitiesSection>
      <SliderSection />
      <FAQSection
        sectionId="home-faq"
        title={t('homeFaqTitle')}
        items={homeFaqItems}
      />
      <FormSection sectionId="home-contact" />
    </HomeContainer>
  );
}
