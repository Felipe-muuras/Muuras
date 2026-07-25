import { useRef, useState } from 'react';
import { ZoomFrame } from './styleZoomImage';

export default function ZoomImage({ src, alt, className, loading = 'lazy' }) {
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef(null);

  // Handle images that are already cached (onLoad may not fire).
  const handleRef = node => {
    imgRef.current = node;
    if (node && node.complete) {
      setLoaded(true);
    }
  };

  return (
    <ZoomFrame className={className} $loaded={loaded}>
      <img
        ref={handleRef}
        src={src}
        alt={alt}
        loading={loading}
        onLoad={() => setLoaded(true)}
      />
    </ZoomFrame>
  );
}
