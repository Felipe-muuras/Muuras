import Header from '../../components/header/Header';
import FormSection from '../../components/formSection/FormSection';
import FAQSection from '../../components/faqSection/FAQSection';
import MaterialIcon from '../../components/materialIcon/MaterialIcon';
import useScrollReveal from '../../hooks/useScrollReveal';
import { useTranslation } from 'react-i18next';
import useSeo from '../../lib/useSeo';
import {
  CaretDownIcon,
  CheckIcon,
  ArrowElbowDownRightIcon,
} from '@phosphor-icons/react';
import {
  ServicesPageContainer,
  ServicesContent,
  ServicesHero,
  ServicesHeroText,
  ServicesHeroImage,
  ServicesTitle,
  ServicesSubtitle,
  ServiceSections,
  ServiceSection,
  ServiceSectionMeta,
  ServiceSectionMetaTitle,
  ServiceSectionMetaDescription,
  ServiceDeliveryBlock,
  ServiceDeliveryLabel,
  ServiceDeliveryList,
  ServiceDeliveryListItem,
  ServiceImage,
  ServicesHeroScrollButton,
  DifferentiatorsSection,
  DifferentiatorsInner,
  DifferentiatorsTitle,
  DifferentiatorsDescription,
  DifferentiatorsGrid,
  DifferentiatorCard,
  DifferentiatorIcon,
  DifferentiatorLabel,
  BenefitsSection,
  BenefitsInner,
  BenefitsTitle,
  BenefitsDescription,
  BenefitsGrid,
  BenefitCard,
  BenefitIcon,
  BenefitCardTitle,
} from './styleServices';

export default function Services() {
  const { t } = useTranslation();
  useScrollReveal();
  useSeo('/services');

  const servicesItems = [
    {
      id: 'services-section-1',
      title: t('servicesCardTitle1'),
      description: t('servicesCardDescription1'),
      imagePath: `${import.meta.env.BASE_URL}assets/environmental-impact-assessment-green-building.jpg`,
      deliverables: [
        t('servicesCardBullet11'),
        t('servicesCardBullet12'),
        t('servicesCardBullet13'),
      ],
    },
    {
      id: 'services-section-2',
      title: t('servicesCardTitle2'),
      description: t('servicesCardDescription2'),
      imagePath: `${import.meta.env.BASE_URL}assets/sustainability-reporting-strategy.jpg`,
      deliverables: [
        t('servicesCardBullet21'),
        t('servicesCardBullet22'),
        t('servicesCardBullet23'),
      ],
    },
    {
      id: 'services-section-3',
      title: t('servicesCardTitle3'),
      description: t('servicesCardDescription3'),
      imagePath: `${import.meta.env.BASE_URL}assets/technology-process-optimization.jpg`,
      deliverables: [
        t('servicesCardBullet31'),
        t('servicesCardBullet32'),
        t('servicesCardBullet33'),
      ],
    },
    {
      id: 'services-section-4',
      title: t('servicesCardTitle4'),
      description: t('servicesCardDescription4'),
      imagePath: `${import.meta.env.BASE_URL}assets/research-development-case-studies.jpg`,
      deliverables: [
        t('servicesCardBullet41'),
        t('servicesCardBullet42'),
        t('servicesCardBullet43'),
      ],
    },
  ];

  const differentiatorItems = [
    { icon: 'science', label: t('servicesDifferentiator1') },
    { icon: 'tune', label: t('servicesDifferentiator2') },
    { icon: 'groups', label: t('servicesDifferentiator3') },
    { icon: 'recycling', label: t('servicesDifferentiator4') },
  ];

  const benefitsItems = [
    {
      icon: 'energy_savings_leaf',
      title: t('servicesBenefitCardTitle1'),
      description: t('servicesBenefitCardDescription1'),
    },
    {
      icon: 'verified',
      title: t('servicesBenefitCardTitle2'),
      description: t('servicesBenefitCardDescription2'),
    },
    {
      icon: 'rocket_launch',
      title: t('servicesBenefitCardTitle3'),
      description: t('servicesBenefitCardDescription3'),
    },
    {
      icon: 'insights',
      title: t('servicesBenefitCardTitle4'),
      description: t('servicesBenefitCardDescription4'),
    },
  ];

  const servicesFaqItems = [
    {
      question: t('servicesFaqQuestion1'),
      answer: t('servicesFaqAnswer1'),
    },
    {
      question: t('servicesFaqQuestion2'),
      answer: t('servicesFaqAnswer2'),
    },
    {
      question: t('servicesFaqQuestion3'),
      answer: t('servicesFaqAnswer3'),
    },
    {
      question: t('servicesFaqQuestion4'),
      answer: t('servicesFaqAnswer4'),
    },
    {
      question: t('servicesFaqQuestion5'),
      answer: t('servicesFaqAnswer5'),
    },
    {
      question: t('servicesFaqQuestion6'),
      answer: t('servicesFaqAnswer6'),
    },
    {
      question: t('servicesFaqQuestion7'),
      answer: t('servicesFaqAnswer7'),
    },
    {
      question: t('servicesFaqQuestion8'),
      answer: t('servicesFaqAnswer8'),
    },
  ];

  const handleHeroScroll = () => {
    const firstSection = document.getElementById('services-benefits');

    if (!firstSection) {
      return;
    }

    firstSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <ServicesPageContainer>
      <Header />

      <ServicesContent id="services-overview">
        <ServicesHero>
          <ServicesHeroText>
            <ServicesTitle>{t('servicesPageTitle')}</ServicesTitle>
            <ServicesSubtitle>{t('servicesPageSubtitle')}</ServicesSubtitle>
            <ServicesHeroScrollButton type="button" onClick={handleHeroScroll}>
              {t('servicesHeroScrollCta')}
              <CaretDownIcon size={18} />
            </ServicesHeroScrollButton>
          </ServicesHeroText>
          <ServicesHeroImage
            src={`${import.meta.env.BASE_URL}assets/hands-scooping-clean-water-lake.jpg`}
            alt={t('servicesPageTitle')}
          />
        </ServicesHero>

        <BenefitsSection id="services-benefits" data-reveal>
          <BenefitsInner>
            <BenefitsTitle>{t('servicesBenefitsTitle')}</BenefitsTitle>
            <BenefitsDescription>
              {t('servicesBenefitsDescription')}
            </BenefitsDescription>
            <BenefitsGrid data-reveal-stagger>
              {benefitsItems.map(item => (
                <BenefitCard key={item.title}>
                  <BenefitIcon>
                    <MaterialIcon name={item.icon} />
                  </BenefitIcon>
                  <BenefitCardTitle>{item.title}</BenefitCardTitle>
                  <p>{item.description}</p>
                </BenefitCard>
              ))}
            </BenefitsGrid>
          </BenefitsInner>
        </BenefitsSection>

        <ServiceSections>
          {servicesItems.map(service => (
            <ServiceSection key={service.title} id={service.id} data-reveal>
              <ServiceImage
                src={service.imagePath}
                alt={service.title}
                loading="lazy"
              />
              <ServiceSectionMeta>
                <ServiceSectionMetaTitle>{service.title}</ServiceSectionMetaTitle>
                <ServiceSectionMetaDescription>
                  {service.description}
                </ServiceSectionMetaDescription>
                <ServiceDeliveryBlock>
                  <ServiceDeliveryLabel>
                    <ArrowElbowDownRightIcon size={16} weight="bold" />
                    {t('servicesHowWeDeliver')}
                  </ServiceDeliveryLabel>
                  <ServiceDeliveryList>
                    {service.deliverables.map(deliverable => (
                      <ServiceDeliveryListItem key={deliverable}>
                        <CheckIcon size={16} weight="bold" />
                        <span>{deliverable}</span>
                      </ServiceDeliveryListItem>
                    ))}
                  </ServiceDeliveryList>
                </ServiceDeliveryBlock>
              </ServiceSectionMeta>
            </ServiceSection>
          ))}
        </ServiceSections>

        <DifferentiatorsSection
          id="services-differentiators"
          data-reveal
          data-header-theme="light"
        >
          <DifferentiatorsInner>
            <DifferentiatorsTitle>{t('servicesDifferentiatorsTitle')}</DifferentiatorsTitle>
            <DifferentiatorsDescription>
              {t('servicesDifferentiatorsDescription')}
            </DifferentiatorsDescription>
            <DifferentiatorsGrid data-reveal-stagger>
              {differentiatorItems.map(item => (
                <DifferentiatorCard key={item.label}>
                  <DifferentiatorIcon>
                    <MaterialIcon name={item.icon} />
                  </DifferentiatorIcon>
                  <DifferentiatorLabel>{item.label}</DifferentiatorLabel>
                </DifferentiatorCard>
              ))}
            </DifferentiatorsGrid>
          </DifferentiatorsInner>
        </DifferentiatorsSection>
      </ServicesContent>

      <FAQSection
        sectionId="services-faq"
        title={t('servicesFaqTitle')}
        items={servicesFaqItems}
      />
      <FormSection sectionId="services-contact" />
    </ServicesPageContainer>
  );
}
