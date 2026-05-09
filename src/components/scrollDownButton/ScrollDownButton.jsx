import { CaretDownIcon } from '@phosphor-icons/react';

import { WrapperScrollDownButton } from './styleScrollButton';

export default function ScrollDownButton({ text }) {
  return (
    <WrapperScrollDownButton>
      <p>{text}</p>
      <CaretDownIcon className="icon" size={16} />
    </WrapperScrollDownButton>
  );
}
