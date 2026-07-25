import Header from '../../components/header/Header';
import FormSection from '../../components/formSection/FormSection';
import FAQSection from '../../components/faqSection/FAQSection';
import Button from '../../components/buttonAnimated/Button';
import { useTranslation } from 'react-i18next';
import useSeo from '../../lib/useSeo';
import { CaretDownIcon } from '@phosphor-icons/react';
import ZoomImage from '../../components/zoomImage/ZoomImage';
import MaterialIcon from '../../components/materialIcon/MaterialIcon';
import useScrollReveal from '../../hooks/useScrollReveal';
import {
  ProductsPageContainer,
  ProductsContent,
  ProductsHero,
  ProductsHeroText,
  ProductsTitle,
  ProductsSubtitle,
  ProductsHeroScrollButton,
  ProductsHeroImage,
  ProductSections,
  ProductSection,
  ProductSectionImage,
  ProductSectionTitle,
  ProductSectionDescription,
  ProductFeatureCard,
  ProductFeatureList,
  ProductFeatureItem,
  ProductClosingCard,
  ProductsGetStartedSection,
  ProductsGetStartedCard,
  ProductsGetStartedText,
} from './styleProducts';

export default function Products() {
	const { t } = useTranslation();
	useScrollReveal();
	useSeo('/products');

	const productSections = [
		{
			id: 'products-about-wetlands',
			title: t('productsSectionTitle1'),
			description: t('productsSectionDescription1'),
			imagePath: `${import.meta.env.BASE_URL}assets/natural-wetland-marsh-ecosystem.jpg`,
		},
		{
			id: 'products-harnessing',
			title: t('productsSectionTitle2'),
			description: t('productsSectionDescription2'),
			imagePath: `${import.meta.env.BASE_URL}assets/green-leaf-water-droplets.jpg`,
		},
	];

	const featureItems = [
		{ icon: 'water_drop', label: t('productsFeatureItem1') },
		{ icon: 'device_thermostat', label: t('productsFeatureItem2') },
		{ icon: 'emoji_nature', label: t('productsFeatureItem3') },
		{ icon: 'water', label: t('productsFeatureItem4') },
		{ icon: 'recycling', label: t('productsFeatureItem5') },
		{ icon: 'science', label: t('productsFeatureItem6') },
		{ icon: 'flood', label: t('productsFeatureItem7') },
		{ icon: 'tune', label: t('productsFeatureItem8') },
	];

	const productsFaqItems = [
		{
			question: t('productsFaqQuestion1'),
			answer: t('productsFaqAnswer1'),
		},
		{
			question: t('productsFaqQuestion2'),
			answer: t('productsFaqAnswer2'),
		},
		{
			question: t('productsFaqQuestion3'),
			answer: t('productsFaqAnswer3'),
		},
		{
			question: t('productsFaqQuestion4'),
			answer: t('productsFaqAnswer4'),
		},
		{
			question: t('productsFaqQuestion5'),
			answer: t('productsFaqAnswer5'),
		},
		{
			question: t('productsFaqQuestion6'),
			answer: t('productsFaqAnswer6'),
		},
		{
			question: t('productsFaqQuestion7'),
			answer: t('productsFaqAnswer7'),
		},
		{
			question: t('productsFaqQuestion8'),
			answer: t('productsFaqAnswer8'),
		},
		{
			question: t('productsFaqQuestion9'),
			answer: t('productsFaqAnswer9'),
		},
		{
			question: t('productsFaqQuestion10'),
			answer: t('productsFaqAnswer10'),
		},
		{
			question: t('productsFaqQuestion11'),
			answer: t('productsFaqAnswer11'),
		},
	];

	const handleHeroScroll = () => {
		const firstSection = document.getElementById('products-about-wetlands');

		if (!firstSection) {
			return;
		}

		firstSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
	};

	return (
		<ProductsPageContainer>
			<Header />

			<ProductsContent id="products-overview">
				<ProductsHero>
					<ProductsHeroText>
						<ProductsTitle>{t('productsPageTitle')}</ProductsTitle>
						<ProductsSubtitle>{t('productsPageSubtitle')}</ProductsSubtitle>
						<ProductsHeroScrollButton type="button" onClick={handleHeroScroll}>
							{t('productsHeroScrollCta')}
							<CaretDownIcon size={18} />
						</ProductsHeroScrollButton>
					</ProductsHeroText>
					<ProductsHeroImage
						src={`${import.meta.env.BASE_URL}assets/muuras-products-preview.png`}
						alt={t('productsPageTitle')}
					/>
				</ProductsHero>

				<ProductSections>
					{productSections.map(section => (
						<ProductSection key={section.id} id={section.id} data-reveal>
							<ProductSectionImage
								src={section.imagePath}
								alt={section.title}
								loading="lazy"
							/>
							<ProductSectionTitle>{section.title}</ProductSectionTitle>
							<ProductSectionDescription>{section.description}</ProductSectionDescription>
						</ProductSection>
					))}

					<ProductSection id="products-features" data-reveal>
						<ProductSectionImage
							src={`${import.meta.env.BASE_URL}assets/urban-green-office-buildings-trees.jpg`}
							alt={t('productsSectionTitle3')}
							loading="lazy"
						/>
						<ProductSectionTitle>{t('productsSectionTitle3')}</ProductSectionTitle>
						<ProductFeatureCard>
							<ProductFeatureList data-reveal-stagger>
								{featureItems.map(item => (
									<ProductFeatureItem key={item.label}>
										<MaterialIcon name={item.icon} />
										<span>{item.label}</span>
									</ProductFeatureItem>
								))}
							</ProductFeatureList>
						</ProductFeatureCard>
						<ProductClosingCard>
							<p>{t('productsClosingText')}</p>
						</ProductClosingCard>
					</ProductSection>
				</ProductSections>

				<ProductsGetStartedSection id="products-get-started" data-reveal>
					<ProductsGetStartedCard>
						<ZoomImage
							className="gsImage"
							src={`${import.meta.env.BASE_URL}assets/hands-water-splash-sunlight.png`}
							alt={t('productsGetStartedImageAlt')}
						/>
						<ProductsGetStartedText>
							<h3>{t('productsGetStartedTitle')}</h3>
							<p>{t('productsGetStartedDescription')}</p>
							<Button label={t('productsGetStartedCta')} scrollTargetId="products-contact" />
						</ProductsGetStartedText>
					</ProductsGetStartedCard>
				</ProductsGetStartedSection>
			</ProductsContent>

			<FAQSection
				sectionId="products-faq"
				title={t('productsFaqTitle')}
				items={productsFaqItems}
			/>
			<FormSection sectionId="products-contact" />
		</ProductsPageContainer>
	);
}
