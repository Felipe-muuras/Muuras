import { useEffect, useRef, useState } from 'react';
import { CardContainer } from './styleResilientCitiesCard';

export default function ResilientCitiesCard({
  imagePath,
  title,
  description,
  cta,
}) {
  const [isHovering, setIsHovering] = useState(false);
  const cardRef = useRef(null);
  const mouse = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });

  useEffect(() => {
    let frame;

    const animate = () => {
      mouse.current.x += (target.current.x - mouse.current.x) * 0.15;
      mouse.current.y += (target.current.y - mouse.current.y) * 0.15;

      // Atualiza direto no DOM — zero re-render React
      cardRef.current?.style.setProperty('--mouse-x', `${mouse.current.x}px`);
      cardRef.current?.style.setProperty('--mouse-y', `${mouse.current.y}px`);

      frame = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(frame);
  }, []);

  const handleMouseMove = e => {
    const rect = e.currentTarget.getBoundingClientRect();
    target.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
  };

  return (
    <CardContainer
      ref={cardRef}
      $imagePath={imagePath}
      $visible={isHovering}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <h1>{title}</h1>
      <p>{description}</p>
      <button>{cta}</button>
    </CardContainer>
  );
}
