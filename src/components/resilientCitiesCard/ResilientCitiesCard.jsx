import { useEffect, useRef } from 'react';
import { CardContainer, CardCta } from './styleResilientCitiesCard';

export default function ResilientCitiesCard({
  imagePath,
  title,
  description,
  cta,
  ctaPath,
}) {
  const cardRef = useRef(null);
  const tilt = useRef({ x: 0, y: 0 });
  const tiltTarget = useRef({ x: 0, y: 0 });

  useEffect(() => {
    let frame;

    const animate = () => {
      tilt.current.x += (tiltTarget.current.x - tilt.current.x) * 0.12;
      tilt.current.y += (tiltTarget.current.y - tilt.current.y) * 0.12;

      const el = cardRef.current;
      if (el) {
        el.style.setProperty('--rx', `${tilt.current.x}deg`);
        el.style.setProperty('--ry', `${tilt.current.y}deg`);
      }

      frame = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(frame);
  }, []);

  const handleMouseMove = e => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const maxDeg = 6;
    tiltTarget.current = {
      x: (0.5 - y / rect.height) * maxDeg, // rotateX
      y: (x / rect.width - 0.5) * maxDeg, // rotateY
    };
  };

  const handleLeave = () => {
    tiltTarget.current = { x: 0, y: 0 };
  };

  return (
    <CardContainer
      ref={cardRef}
      to={ctaPath}
      $imagePath={imagePath}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleLeave}
    >
      <h3>{title}</h3>
      <p>{description}</p>
      <CardCta className="cta">{cta}</CardCta>
    </CardContainer>
  );
}
