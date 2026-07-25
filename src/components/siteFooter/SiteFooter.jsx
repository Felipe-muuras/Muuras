import { LinkedinLogoIcon, HeartIcon } from '@phosphor-icons/react';
import {
  FooterContainer,
  FooterInner,
  FooterTop,
  BrandBlock,
  BrandTagline,
  FooterColumns,
  FooterColumn,
  FooterColumnTitle,
  FooterLinks,
  FooterNavLink,
  FooterExternalLink,
  FooterBottom,
  FooterCredit,
  FooterRights,
  FooterDivider,
  FooterSocialButton,
} from './styleSiteFooter';

const homeLinks = [
  { label: 'Restoring Natural Resilience', to: '/home#home-resilience' },
  { label: 'How to get started with Muuras?', to: '/home#home-get-started' },
  { label: 'How we grow Resilient Cities', to: '/home#home-grow' },
  { label: 'Impact', to: '/home#home-impact' },
];

const servicesLinks = [
  { label: 'Policy and Environmental Impact Assessments', to: '/services#services-section-1' },
  { label: 'Sustainability Reporting and Strategy', to: '/services#services-section-2' },
  { label: 'Technological and Process Optimization', to: '/services#services-section-3' },
  { label: 'Research & Development and Case Studies', to: '/services#services-section-4' },
];

const productsLinks = [
  { label: 'About Wetlands', to: '/products#products-about-wetlands' },
  { label: 'Harnessing Nature\'s Potential', to: '/products#products-harnessing' },
  { label: 'Wetland Wall Features', to: '/products#products-features' },
];

export default function SiteFooter() {
  return (
    <FooterContainer>
      <FooterInner>
        <FooterTop>
          <BrandBlock>
            <img
              src={`${import.meta.env.BASE_URL}assets/muuras-logo-white.svg`}
              alt="Muuras"
              loading="lazy"
            />
            <BrandTagline>
              Nature-based water solutions for climate-resilient cities.
            </BrandTagline>
            <FooterSocialButton
              href="https://www.linkedin.com/company/muuras/"
              target="_blank"
              rel="noreferrer"
              aria-label="Muuras LinkedIn"
            >
              <LinkedinLogoIcon size={18} weight="fill" />
            </FooterSocialButton>
          </BrandBlock>

          <FooterColumns>
            <FooterColumn>
              <FooterColumnTitle>
                Home
              </FooterColumnTitle>
              <FooterLinks>
                {homeLinks.map(link => (
                  <FooterNavLink key={link.label} to={link.to}>
                    {link.label}
                  </FooterNavLink>
                ))}
              </FooterLinks>
            </FooterColumn>

            <FooterColumn>
              <FooterColumnTitle>
                Services
              </FooterColumnTitle>
              <FooterLinks>
                {servicesLinks.map(link => (
                  <FooterNavLink key={link.label} to={link.to}>
                    {link.label}
                  </FooterNavLink>
                ))}
              </FooterLinks>
            </FooterColumn>

            <FooterColumn>
              <FooterColumnTitle>
                Products
              </FooterColumnTitle>
              <FooterLinks>
                {productsLinks.map(link => (
                  <FooterNavLink key={link.label} to={link.to}>
                    {link.label}
                  </FooterNavLink>
                ))}
              </FooterLinks>
            </FooterColumn>

            <FooterColumn>
              <FooterColumnTitle>
                Contact
              </FooterColumnTitle>
              <FooterLinks>
                <FooterExternalLink href="mailto:felipe@muuras.nl">
                  felipe@muuras.nl
                </FooterExternalLink>
                <FooterExternalLink href="mailto:gijs@muuras.nl">
                  gijs@muuras.nl
                </FooterExternalLink>
              </FooterLinks>
            </FooterColumn>
          </FooterColumns>
        </FooterTop>

        <FooterDivider />

        <FooterBottom>
          <FooterCredit>
            Created and developed with{' '}
            <HeartIcon size={14} weight="fill" color="#FF6B6B" aria-label="love" />{' '}
            by{' '}
            <a href="http://studioota.com" target="_blank" rel="noreferrer">
              Studio Ota
            </a>
          </FooterCredit>
          <FooterRights>2025 - All rights reserved</FooterRights>
        </FooterBottom>
      </FooterInner>
    </FooterContainer>
  );
}