import styled from 'styled-components';
import { primaryColor, textColor } from '../../utils/colors';
import { NavLink } from 'react-router-dom';

export const WrapperHeader = styled.div`
  background-color: ${primaryColor[900]};
  color: ${textColor.white};
  padding: 8px 8px 8px 40px;
  border-radius: 99px;
  margin: 24px;
  max-width: 1144px;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  display: flex;
  position: fixed;
  z-index: 1;

  span {
    transition: 0.3s ease;
  }
  span:hover {
    cursor: pointer;
    scale: 1.05;
    opacity: 0.8;
  }
  /* Soft shadow */
  box-shadow:
    0px 4px 12px rgba(0, 0, 0, 0.08),
    0px 12px 32px rgba(0, 0, 0, 0.12);
`;

export const WrapperLinks = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: 2rem;
`;

export const StyledLink = styled(NavLink)`
  color: ${primaryColor[500]};
  align-items: center;
  display: flex;
  column-gap: 0.5rem;
  &.active {
    color: white;
  }
`;

export const WrapperActions = styled.div`
  display: flex;
  column-gap: 1rem;
  button:hover {
    scale: 1.05;
  }
`;

export const IconWrapper = styled.div`
  background-color: #ffffff;
  border-radius: 99px;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
