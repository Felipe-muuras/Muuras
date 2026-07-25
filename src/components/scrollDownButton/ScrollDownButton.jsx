import { WrapperScrollDownButton, MouseScroll } from './styleScrollButton';

export default function ScrollDownButton({ text, scrollTargetId }) {
  const handleScroll = () => {
    const targetElement = scrollTargetId
      ? document.getElementById(scrollTargetId)
      : null;

    if (!targetElement) {
      return;
    }

    targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <WrapperScrollDownButton
      type="button"
      onClick={handleScroll}
      aria-label={text}
    >
      <p>{text}</p>
      <MouseScroll className="mouse" aria-hidden="true" />
    </WrapperScrollDownButton>
  );
}
