import { useEffect, useState } from 'react';
import { ArrowUpIcon } from '@phosphor-icons/react';
import { BackToTopButton } from './styleBackToTop';

/* Floating button that scrolls back to the top. Appears once the visitor has
   scrolled past the first viewport. */
export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      setVisible(window.scrollY > 400);
    };
    const onScroll = () => {
      if (!frame) {
        frame = requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (frame) {
        cancelAnimationFrame(frame);
      }
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <BackToTopButton
      type="button"
      $visible={visible}
      onClick={scrollToTop}
      aria-label="Back to top"
    >
      <ArrowUpIcon size={22} weight="bold" />
    </BackToTopButton>
  );
}
