import { ArrowRightIcon } from '@phosphor-icons/react';
import {
  WrapperButton,
  ButtonText,
  HoverLayer,
  HoverText,
} from './styleButton';

import { primaryColor } from '../../utils/colors';

export default function Button({ label, scrollTargetId, fitContent = false }) {
  const handleClick = () => {
    const targetElement = scrollTargetId
      ? document.getElementById(scrollTargetId)
      : null;

    if (!targetElement) {
      return;
    }

    targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <WrapperButton type="button" onClick={handleClick} $fitContent={fitContent}>
      <ButtonText $fitContent={fitContent}>{label}</ButtonText>

      <HoverLayer>
        <HoverText>{label}</HoverText>

        <ArrowRightIcon size={20} color={primaryColor[500]} weight="bold" />
      </HoverLayer>
    </WrapperButton>
  );
}
