import { ArrowRightIcon } from '@phosphor-icons/react';
import {
  WrapperButton,
  ButtonText,
  HoverLayer,
  HoverText,
} from './styleButton';

import { primaryColor } from '../../utils/colors';

export default function Button({ label }) {
  return (
    <WrapperButton>
      <ButtonText>{label}</ButtonText>

      <HoverLayer>
        <HoverText>{label}</HoverText>

        <ArrowRightIcon size={20} color={primaryColor[500]} weight="bold" />
      </HoverLayer>
    </WrapperButton>
  );
}
