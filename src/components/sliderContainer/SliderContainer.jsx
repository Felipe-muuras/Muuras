import { useEffect, useRef, useState } from 'react';
import { t } from 'i18next';
import { CaretLeftIcon, CaretRightIcon } from '@phosphor-icons/react';
import AwardCard from '../awardCard/AwardCard.jsx';

import {
  SliderContainer,
  SliderHeader,
  SliderTitleBlock,
  SliderControls,
  ArrowButton,
  Dots,
  Dot,
  SliderViewport,
  SliderTrack,
  Slide,
} from './styleSliderContainer.js';

const SETS = 4; // copies rendered so the loop never runs out of cards
const EASE = 0.14; // how fast the track eases toward the target card
const SNAP_VEL = 6; // how much fling velocity influences the landing card

export default function SliderSection() {
  const awards = [
    {
      imagePath: `${import.meta.env.BASE_URL}assets/logo-partner-duurzame.png`,
      title: t('impactFirstAwardTitle'),
      containBg: '#ffffff',
    },
    {
      imagePath: `${import.meta.env.BASE_URL}assets/logo-partner-regieorgaan.png`,
      title: t('impactSecondAwardTitle'),
    },
    {
      imagePath: `${import.meta.env.BASE_URL}assets/logo-partner-circular-challenge.png`,
      title: t('impactThirdAwardTtile'),
    },
    {
      imagePath: `${import.meta.env.BASE_URL}assets/logo-partner-amsterdam-institute.png`,
      title: t('impactFourthAwardTitle'),
      containBg: '#e3001b',
    },
  ];
  const COUNT = awards.length;
  const items = Array.from({ length: SETS }, () => awards).flat();

  const [activeDot, setActiveDot] = useState(0);

  const viewportRef = useRef(null);
  const trackRef = useRef(null);
  const s = useRef({
    offset: 0,
    targetIndex: 0,
    velocity: 0,
    dragging: false,
    lastX: 0,
    moved: 0,
    pitch: 1,
    setWidth: 1,
    lastActiveDot: 0,
  }).current;

  useEffect(() => {
    const track = trackRef.current;
    const viewport = viewportRef.current;
    if (!track || !viewport) return undefined;

    const measure = () => {
      const slides = track.children;
      s.setWidth = track.offsetWidth / SETS || 1;
      s.pitch =
        slides.length > 1
          ? slides[1].offsetLeft - slides[0].offsetLeft
          : s.setWidth;
    };
    measure();

    const ro = new ResizeObserver(measure);
    ro.observe(track);
    window.addEventListener('resize', measure);
    window.addEventListener('scroll', measure, { passive: true });

    let raf = 0;
    const frame = () => {
      const pitch = s.pitch || 1;

      if (!s.dragging) {
        // Ease toward the target card.
        s.offset += (s.targetIndex * pitch - s.offset) * EASE;
        // Once settled, fold whole sets back so numbers never grow unbounded.
        if (Math.abs(s.targetIndex * pitch - s.offset) < 0.4) {
          s.offset = s.targetIndex * pitch;
          const w = s.setWidth;
          if (w > 0 && (s.offset >= w || s.offset < 0)) {
            const sets = Math.floor(s.offset / w);
            s.offset -= sets * w;
            s.targetIndex -= sets * COUNT;
          }
        }
      }

      // Seamless wrap for the rendered transform.
      const w = s.setWidth;
      const renderOffset = w > 0 ? ((s.offset % w) + w) % w : s.offset;
      track.style.transform = `translate3d(${-renderOffset}px, 0, 0)`;

      // Active dot from the nearest card.
      const active =
        ((Math.round(s.offset / pitch) % COUNT) + COUNT) % COUNT;
      if (active !== s.lastActiveDot) {
        s.lastActiveDot = active;
        setActiveDot(active);
      }

      raf = requestAnimationFrame(frame);
    };
    raf = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      window.removeEventListener('resize', measure);
      window.removeEventListener('scroll', measure);
    };
  }, [s, COUNT]);

  // --- navigation ---------------------------------------------------------
  const go = dir => {
    s.targetIndex = Math.round(s.offset / (s.pitch || 1)) + dir;
  };

  const goToDot = d => {
    const current = Math.round(s.offset / (s.pitch || 1));
    const currentMod = ((current % COUNT) + COUNT) % COUNT;
    let diff = ((d - currentMod) % COUNT + COUNT) % COUNT; // forward 0..COUNT-1
    if (diff > COUNT / 2) diff -= COUNT; // take the shorter way round
    s.targetIndex = current + diff;
  };

  // --- drag ---------------------------------------------------------------
  const onPointerDown = e => {
    s.dragging = true;
    s.lastX = e.clientX;
    s.moved = 0;
    s.velocity = 0;
    viewportRef.current.setPointerCapture?.(e.pointerId);
    viewportRef.current.classList.add('dragging');
  };

  const onPointerMove = e => {
    if (!s.dragging) return;
    const delta = e.clientX - s.lastX;
    s.offset -= delta;
    s.velocity = -delta;
    s.moved += Math.abs(delta);
    s.lastX = e.clientX;
  };

  const endDrag = e => {
    if (!s.dragging) return;
    s.dragging = false;
    try {
      viewportRef.current.releasePointerCapture?.(e.pointerId);
    } catch {
      /* already released */
    }
    viewportRef.current.classList.remove('dragging');
    // Snap to the nearest card, carried by the fling velocity.
    const pitch = s.pitch || 1;
    s.targetIndex = Math.round((s.offset + s.velocity * SNAP_VEL) / pitch);
  };

  return (
    <SliderContainer id="home-impact" data-reveal>
      <SliderHeader>
        <SliderTitleBlock>
          <h2>{t('impactSectionTitle')}</h2>
          <p>{t('impactSectionDescription')}</p>
        </SliderTitleBlock>

        <SliderControls>
          <ArrowButton type="button" onClick={() => go(-1)} aria-label="Previous">
            <CaretLeftIcon size={18} weight="bold" />
          </ArrowButton>
          <Dots>
            {awards.map((award, i) => (
              <Dot
                key={award.title}
                type="button"
                $active={i === activeDot}
                onClick={() => goToDot(i)}
                aria-label={`Go to item ${i + 1}`}
                aria-current={i === activeDot}
              />
            ))}
          </Dots>
          <ArrowButton type="button" onClick={() => go(1)} aria-label="Next">
            <CaretRightIcon size={18} weight="bold" />
          </ArrowButton>
        </SliderControls>
      </SliderHeader>

      <SliderViewport
        ref={viewportRef}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
      >
        <SliderTrack ref={trackRef}>
          {items.map((award, index) => (
            <Slide key={index}>
              <AwardCard
                imagePath={award.imagePath}
                title={award.title}
                containBg={award.containBg}
              />
            </Slide>
          ))}
        </SliderTrack>
      </SliderViewport>
    </SliderContainer>
  );
}
