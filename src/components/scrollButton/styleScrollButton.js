import styled from 'styled-components';
import { textColor } from '../../utils/colors';

export const WrapperScrollButton = styled.div`
  color: ${textColor.white};
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  align-items: center;
  padding: 16px 0px;

  @keyframes float {
    0% {
      transform: translateY(-10px);
    }
    50% {
      transform: translateY(0px);
    }
    100% {
      transform: translateY(-10px);
    }
  }
  .icon {
    animation: float 1.5s infinite;
  }
`;
