import styled from 'styled-components';
import { radius } from '../../utils/radius';

/* Rounded frame that clips its image so it can gently zoom in on hover.
   Sizing (width / height / border-radius) is provided by the parent via
   the forwarded className; the image just fills the frame. */
export const ZoomFrame = styled.div`
  display: grid;
  overflow: hidden;
  line-height: 0;
  border-radius: ${radius.lg};

  img {
    grid-area: 1 / 1;
    width: 100%;
    height: 100%;
    min-height: 0;
    object-fit: cover;

    /* Fade in on load (easy loading) + gentle zoom on hover. */
    opacity: ${({ $loaded }) => ($loaded ? 1 : 0)};
    transform: scale(${({ $loaded }) => ($loaded ? 1 : 1.04)});
    transition:
      opacity 0.7s ease,
      transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);
  }

  &:hover img {
    transform: scale(1.06);
  }
`;
