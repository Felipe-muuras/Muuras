import { primaryColor } from '../../utils/colors';
import {
  WrapperHeader,
  WrapperLinks,
  WrapperActions,
  IconWrapper,
  StyledLink,
} from './styleHeader';
import { ArrowRightIcon, CaretDownIcon } from '@phosphor-icons/react';

export default function Header() {
  return (
    <WrapperHeader>
      <WrapperLinks>
        <img src="../../assets/whiteIcon.svg" alt="Muuras Logo" />
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/services">
          Services <CaretDownIcon size={20} />
        </StyledLink>
        <StyledLink to="/products">Products</StyledLink>
      </WrapperLinks>
      <WrapperActions>
        <button>
          Contact
          <IconWrapper>
            <ArrowRightIcon size={20} color={primaryColor[500]} weight="bold" />
          </IconWrapper>
        </button>
      </WrapperActions>
    </WrapperHeader>
  );
}
