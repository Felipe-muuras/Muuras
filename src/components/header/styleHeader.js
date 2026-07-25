import styled, { css } from 'styled-components';
import { primaryColor, textColor } from '../../utils/colors';
import { Link, NavLink } from 'react-router-dom';
import { radius } from '../../utils/radius';

export const WrapperHeader = styled.div`
  /* Theme tokens for the adaptive glass bar. $navTheme flips them between
     the dark (over light sections) and light (over green sections)
     variants; children read the vars so the whole bar re-themes at once. */
  ${({ $navTheme }) =>
    $navTheme === 'light'
      ? css`
          --nav-bg: rgba(255, 255, 255, 0.82);
          --nav-border: rgba(32, 71, 37, 0.16);
          --nav-fg: ${primaryColor[900]};
          --nav-fg-muted: ${primaryColor[700]};
        `
      : css`
          --nav-bg: rgba(32, 71, 37, 0.78);
          --nav-border: rgba(255, 255, 255, 0.16);
          --nav-fg: ${textColor.white};
          --nav-fg-muted: ${primaryColor[300]};
        `}

  background: var(--nav-bg);
  border: 1px solid var(--nav-border);
  /* Real glass: an SVG displacement filter refracts (distorts) the content
     behind the bar, plus a light blur + saturation + brightness for the frost.
     Chrome & Firefox render the distortion; Safari doesn't support url() in
     backdrop-filter, so -webkit- falls back to a plain frosted blur. */
  -webkit-backdrop-filter: blur(14px) saturate(160%) brightness(1.06);
  backdrop-filter: url(#glass-distortion) blur(2px) saturate(160%)
    brightness(1.06);
  color: var(--nav-fg);
  transition:
    background 0.35s ease,
    border-color 0.35s ease,
    color 0.35s ease,
    transform 0.35s ease;

  /* Browsers without backdrop blur get a nearly-opaque fill so text stays
     readable instead of washing out over the section behind. */
  @supports not (
    (backdrop-filter: blur(2px)) or (-webkit-backdrop-filter: blur(2px))
  ) {
    background: ${({ $navTheme }) =>
      $navTheme === 'light'
        ? 'rgba(255, 255, 255, 0.94)'
        : 'rgba(32, 71, 37, 0.94)'};
  }

  padding: 8px;
  border-radius: ${radius.pill};
  top: 24px;
  left: 50%;
  /* Auto-hide: slides fully above the viewport when $hidden (scrolling
     down), back into place when scrolling up. Keeps the horizontal
     centering translate. */
  transform: translateX(-50%)
    translateY(${({ $hidden }) => ($hidden ? 'calc(-100% - 40px)' : '0')});
  max-width: 1440px;
  width: calc(100% - 48px);
  display: flex;
  flex-direction: column;
  position: fixed;
  z-index: 1000;

  /* Glass highlight on the top edge (light catching the glass) + inner
     bottom shade for depth, over the soft drop shadow. */
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.28),
    inset 0 -1px 0 rgba(0, 0, 0, 0.06),
    0px 4px 12px rgba(0, 0, 0, 0.08),
    0px 12px 32px rgba(0, 0, 0, 0.12);

  @media (max-width: 980px) {
    top: 12px;
    width: calc(100% - 24px);
    gap: 10px;
    /* Collapsed, the bar is a pill (radius clamps to half its height); only
       when the mobile menu is open — and the bar grows tall — fall back to a
       rounded rectangle so it doesn't become a giant stadium. */
    border-radius: ${({ $menuOpen }) => ($menuOpen ? '28px' : radius.pill)};
  }

  @media (max-width: 360px) {
    top: 8px;
    width: calc(100% - 16px);
  }
`;

/* The always-visible top row of the header. */
export const HeaderBar = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

/* Logo + primary navigation (nav links hide on mobile, logo stays). */
export const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  column-gap: 2rem;
`;

export const WrapperLinks = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: 2rem;
  font-size: 17px;

  @media (max-width: 980px) {
    display: none;
  }
`;

/* Brand mark in a lighter-green circle (same green as the Contact
   button); clickable, links to home. */
export const LogoLink = styled(Link)`
  width: 56px;
  height: 56px;
  flex: none;
  border-radius: ${radius.pill};
  background: ${primaryColor[500]};

  display: inline-flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  transition:
    background 0.2s ease,
    transform 0.2s ease;

  img {
    width: 30px;
    height: auto;
    display: block;
    /* Optical centering: the mark reads slightly left-heavy inside the
       circle, so nudge it 1px to the right. */
    transform: translateX(1px);
  }

  &:hover {
    background: ${primaryColor[600]};
    transform: translateY(-1px);
  }

  /* Small (mobile) version */
  @media (max-width: 560px) {
    width: 44px;
    height: 44px;

    img {
      width: 24px;
    }
  }
`;

export const StyledLink = styled(NavLink)`
  color: var(--nav-fg-muted);
  align-items: center;
  display: flex;
  column-gap: 0.5rem;
  transition: color 0.2s ease;

  &:hover,
  &.active {
    color: var(--nav-fg);
  }
`;

export const DropdownNav = styled.div`
  position: relative;

  &:hover > div,
  &:focus-within > div {
    opacity: 1;
    transform: translateY(0);
    pointer-events: auto;
  }
`;

export const DropdownTrigger = styled(NavLink)`
  color: ${({ $active }) => ($active ? 'var(--nav-fg)' : 'var(--nav-fg-muted)')};
  align-items: center;
  display: flex;
  column-gap: 0.5rem;
  transition: color 0.2s ease;

  svg {
    transition: transform 0.2s ease;
  }

  &:hover {
    color: var(--nav-fg);
  }

  ${DropdownNav}:hover & svg {
    transform: rotate(180deg);
  }
`;

export const DropdownMenu = styled.div`
  position: absolute;
  top: calc(100% + 10px);
  left: 0;
  min-width: 280px;
  max-width: 380px;
  padding: 10px;
  border-radius: ${radius.lg};
  background: ${primaryColor[900]};
  border: 1px solid ${primaryColor[800]};
  box-shadow: 0 10px 28px rgba(0, 0, 0, 0.18);
  display: flex;
  flex-direction: column;
  gap: 4px;
  opacity: 0;
  transform: translateY(8px);
  pointer-events: none;
  transition:
    opacity 0.2s ease,
    transform 0.2s ease;
  z-index: 20;

  /* Transparent bridge over the 10px gap so hover stays continuous
     between the trigger and the menu (otherwise the menu closes as the
     cursor crosses the empty space). */
  &::before {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 100%;
    height: 10px;
  }
`;

export const DropdownMenuLink = styled(Link)`
  color: ${textColor.white};
  font-size: 14px;
  line-height: 1.45;
  padding: 9px 10px;
  border-radius: ${radius.md};

  &:hover {
    background: ${primaryColor[800]};
  }
`;

export const WrapperActions = styled.div`
  display: flex;
  align-items: center;
  column-gap: 1.25rem;

  @media (max-width: 980px) {
    column-gap: 0.6rem;
  }
`;

export const IconWrapper = styled.div`
  background-color: #ffffff;
  border-radius: ${radius.pill};
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HeaderMobileToggle = styled.button`
  display: none;

  @media (max-width: 980px) {
    display: inline-flex;
    width: 44px;
    height: 44px;
    flex: none;
    border-radius: ${radius.pill};
    border: 1px solid ${primaryColor[800]};
    background: ${primaryColor[800]};
    color: ${textColor.white};
    align-items: center;
    justify-content: center;
    transition:
      background 0.2s ease,
      transform 0.2s ease;
  }

  @media (max-width: 560px) {
    width: 40px;
    height: 40px;
  }

  &:hover {
    background: ${primaryColor[700]};
  }
`;

export const MobileMenu = styled.div`
  display: none;

  @media (max-width: 980px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 8px;
    background: ${primaryColor[900]};
    border: 1px solid ${primaryColor[800]};
    border-radius: ${radius.lg};
    padding: 10px;
  }
`;

const mobileBaseLink = `
  width: 100%;
  color: ${textColor.white};
  font-size: 14px;
  line-height: 1.4;
  text-decoration: none;
  padding: 10px;
  border-radius: ${radius.md};

  &:hover {
    background: ${primaryColor[800]};
  }

  @media (max-width: 360px) {
    font-size: 13px;
    padding: 9px;
  }
`;

export const MobileMenuTopLink = styled(Link)`
  ${mobileBaseLink}
`;

export const MobileMenuGroup = styled.div`
  width: 100%;
  border-radius: ${radius.md};
  border: 1px solid ${primaryColor[800]};
  overflow: hidden;
`;

export const MobileMenuGroupHeader = styled.button`
  width: 100%;
  border: none;
  background: transparent;
  color: ${textColor.white};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  font-size: 14px;
`;

export const MobileMenuGroupBody = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 6px 6px;
`;

export const MobileMenuLink = styled(Link)`
  ${mobileBaseLink}
  font-size: 13px;
  color: ${primaryColor[50]};
`;

export const MobileActions = styled.div`
  padding-top: 6px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
