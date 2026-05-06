import { CaretDownIcon } from '@phosphor-icons/react';

import { WrapperScrollButton } from './styleScrollButton';

export default function ScrollButton({ test }) {
  return (
    <WrapperScrollButton>
      <p>{test}</p>
      <CaretDownIcon className="icon" size={16} />
    </WrapperScrollButton>
  );
}
