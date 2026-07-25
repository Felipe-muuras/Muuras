import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import {
  WrapperHeader,
  HeaderBar,
  HeaderLeft,
  WrapperLinks,
  LogoLink,
  WrapperActions,
  StyledLink,
  DropdownNav,
  DropdownTrigger,
  DropdownMenu,
  DropdownMenuLink,
  HeaderMobileToggle,
  MobileMenu,
  MobileMenuGroup,
  MobileMenuGroupHeader,
  MobileMenuGroupBody,
  MobileMenuLink,
  MobileMenuTopLink,
} from './styleHeader';
import { CaretDownIcon, ListIcon, XIcon } from '@phosphor-icons/react';
import Button from '../buttonAnimated/Button';
import LanguageSelector from '../languageSelector/LanguageSelector';

export default function Header() {
  const { t } = useTranslation();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMobileGroup, setOpenMobileGroup] = useState(null);

  // Adaptive glass theme: 'light' over green sections, 'dark' over light ones.
  const headerRef = useRef(null);
  const [navTheme, setNavTheme] = useState('dark');
  // Auto-hide on scroll down, reveal on scroll up.
  const [hidden, setHidden] = useState(false);

  const isPathActive = path =>
    location.pathname === path || location.pathname.startsWith(`${path}/`);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setOpenMobileGroup(null);
  }, [location.pathname, location.hash]);

  // Watch which section sits under the header line and flip the theme.
  // Sections that need the light bar carry data-header-theme="light".
  useEffect(() => {
    const header = headerRef.current;
    const lightSections = document.querySelectorAll(
      '[data-header-theme="light"]',
    );

    if (!header || !lightSections.length) {
      setNavTheme('dark');
      return;
    }

    let frame = 0;
    let lastY = window.scrollY;
    const update = () => {
      frame = 0;
      const rect = header.getBoundingClientRect();
      const line = rect.top + rect.height / 2;
      let overLight = false;
      for (const section of lightSections) {
        const r = section.getBoundingClientRect();
        if (r.top <= line && r.bottom >= line) {
          overLight = true;
          break;
        }
      }
      setNavTheme(overLight ? 'light' : 'dark');

      // Reveal near the top; otherwise hide when scrolling down, show when up.
      const currentY = window.scrollY;
      const delta = currentY - lastY;
      if (currentY < 80) {
        setHidden(false);
      } else if (delta > 4) {
        setHidden(true);
      } else if (delta < -4) {
        setHidden(false);
      }
      lastY = currentY;
    };
    const onScroll = () => {
      if (!frame) {
        frame = requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (frame) {
        cancelAnimationFrame(frame);
      }
    };
  }, [location.pathname]);

  const contactTargetId =
    location.pathname === '/services'
      ? 'services-contact'
      : location.pathname === '/products'
        ? 'products-contact'
        : location.pathname === '/about'
          ? 'about-contact'
        : 'home-contact';

  return (
    <WrapperHeader
      ref={headerRef}
      $navTheme={navTheme}
      $hidden={hidden && !isMobileMenuOpen}
      $menuOpen={isMobileMenuOpen}
    >
      <HeaderBar>
        <HeaderLeft>
          <LogoLink to="/" aria-label={t('headerHomeLink')}>
            <img
              src={`${import.meta.env.BASE_URL}assets/muuras-icon-white.svg`}
              alt="Muuras Logo"
            />
          </LogoLink>
          <WrapperLinks>
            <StyledLink to="/">{t('headerHomeLink')}</StyledLink>

        <DropdownNav>
          <DropdownTrigger to="/services" $active={isPathActive('/services')}>
            {t('headerServicesLink')} <CaretDownIcon size={20} />
          </DropdownTrigger>
          <DropdownMenu>
            <DropdownMenuLink to="/services#services-section-1">
              {t('servicesCardTitle1')}
            </DropdownMenuLink>
            <DropdownMenuLink to="/services#services-section-2">
              {t('servicesCardTitle2')}
            </DropdownMenuLink>
            <DropdownMenuLink to="/services#services-section-3">
              {t('servicesCardTitle3')}
            </DropdownMenuLink>
            <DropdownMenuLink to="/services#services-section-4">
              {t('servicesCardTitle4')}
            </DropdownMenuLink>
          </DropdownMenu>
        </DropdownNav>

        <DropdownNav>
          <DropdownTrigger to="/products" $active={isPathActive('/products')}>
            {t('headerProductsLink')} <CaretDownIcon size={20} />
          </DropdownTrigger>
          <DropdownMenu>
            <DropdownMenuLink to="/products#products-about-wetlands">
              {t('productsSectionTitle1')}
            </DropdownMenuLink>
            <DropdownMenuLink to="/products#products-harnessing">
              {t('productsSectionTitle2')}
            </DropdownMenuLink>
            <DropdownMenuLink to="/products#products-features">
              {t('productsSectionTitle3')}
            </DropdownMenuLink>
          </DropdownMenu>
        </DropdownNav>

        <DropdownNav>
          <DropdownTrigger to="/about" $active={isPathActive('/about')}>
            {t('headerAboutLink')} <CaretDownIcon size={20} />
          </DropdownTrigger>
          <DropdownMenu>
            <DropdownMenuLink to="/about#about-mission">
              {t('aboutMissionTitle')}
            </DropdownMenuLink>
            <DropdownMenuLink to="/about#about-values">
              {t('aboutValuesTitle')}
            </DropdownMenuLink>
            <DropdownMenuLink to="/about#about-team">
              {t('aboutTeamTitle')}
            </DropdownMenuLink>
          </DropdownMenu>
        </DropdownNav>
          </WrapperLinks>
        </HeaderLeft>
        <WrapperActions>
          <LanguageSelector label={t('selectorLanguageLabel')} />
          <Button label={t('headerContactLink')} scrollTargetId={contactTargetId} />
          <HeaderMobileToggle
            type="button"
            aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            onClick={() => setIsMobileMenuOpen(value => !value)}
          >
            {isMobileMenuOpen ? <XIcon size={22} /> : <ListIcon size={22} />}
          </HeaderMobileToggle>
        </WrapperActions>
      </HeaderBar>

      {isMobileMenuOpen && (
        <MobileMenu>
          <MobileMenuTopLink to="/">{t('headerHomeLink')}</MobileMenuTopLink>

          <MobileMenuGroup>
            <MobileMenuGroupHeader
              type="button"
              onClick={() =>
                setOpenMobileGroup(current =>
                  current === 'services' ? null : 'services'
                )
              }
            >
              <span>{t('headerServicesLink')}</span>
              <CaretDownIcon
                size={18}
                style={{
                  transform:
                    openMobileGroup === 'services' ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: 'transform 0.2s ease',
                }}
              />
            </MobileMenuGroupHeader>
            {openMobileGroup === 'services' && (
              <MobileMenuGroupBody>
                <MobileMenuLink to="/services#services-section-1">{t('servicesCardTitle1')}</MobileMenuLink>
                <MobileMenuLink to="/services#services-section-2">{t('servicesCardTitle2')}</MobileMenuLink>
                <MobileMenuLink to="/services#services-section-3">{t('servicesCardTitle3')}</MobileMenuLink>
                <MobileMenuLink to="/services#services-section-4">{t('servicesCardTitle4')}</MobileMenuLink>
              </MobileMenuGroupBody>
            )}
          </MobileMenuGroup>

          <MobileMenuGroup>
            <MobileMenuGroupHeader
              type="button"
              onClick={() =>
                setOpenMobileGroup(current =>
                  current === 'products' ? null : 'products'
                )
              }
            >
              <span>{t('headerProductsLink')}</span>
              <CaretDownIcon
                size={18}
                style={{
                  transform:
                    openMobileGroup === 'products' ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: 'transform 0.2s ease',
                }}
              />
            </MobileMenuGroupHeader>
            {openMobileGroup === 'products' && (
              <MobileMenuGroupBody>
                <MobileMenuLink to="/products#products-about-wetlands">{t('productsSectionTitle1')}</MobileMenuLink>
                <MobileMenuLink to="/products#products-harnessing">{t('productsSectionTitle2')}</MobileMenuLink>
                <MobileMenuLink to="/products#products-features">{t('productsSectionTitle3')}</MobileMenuLink>
              </MobileMenuGroupBody>
            )}
          </MobileMenuGroup>

          <MobileMenuGroup>
            <MobileMenuGroupHeader
              type="button"
              onClick={() =>
                setOpenMobileGroup(current =>
                  current === 'about' ? null : 'about'
                )
              }
            >
              <span>{t('headerAboutLink')}</span>
              <CaretDownIcon
                size={18}
                style={{
                  transform:
                    openMobileGroup === 'about' ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: 'transform 0.2s ease',
                }}
              />
            </MobileMenuGroupHeader>
            {openMobileGroup === 'about' && (
              <MobileMenuGroupBody>
                <MobileMenuLink to="/about#about-mission">{t('aboutMissionTitle')}</MobileMenuLink>
                <MobileMenuLink to="/about#about-values">{t('aboutValuesTitle')}</MobileMenuLink>
                <MobileMenuLink to="/about#about-team">{t('aboutTeamTitle')}</MobileMenuLink>
              </MobileMenuGroupBody>
            )}
          </MobileMenuGroup>
        </MobileMenu>
      )}
    </WrapperHeader>
  );
}
