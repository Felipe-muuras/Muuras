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
const EASE = 0.14; // how fast the track eases toward a tapped card / arrow step
const AUTO_SPEED = 0.4; // endless idle drift, px per frame (~24px/s @ 60fps)
const RECOVER = 0.04; // how gently a fling settles back into the endless drift

export default function SliderSection() {
  const awards = [
    {
      imagePath: `${import.meta.env.BASE_URL}assets/logo-partner-duurzame.png`,
      title: t('impactFirstAwardTitle'),
      containBg: '#ffffff',
      url: 'https://www.duurzaam-ondernemen.nl/genomineerden-voor-themaprijzen-2021-duurzame-dinsdag-bekend/',
    },
    {
      imagePath: `${import.meta.env.BASE_URL}assets/logo-partner-regieorgaan.png`,
      title: t('impactSecondAwardTitle'),
      url: 'https://www.sia-projecten.nl/project/sow-flow-green-walls-that-filter-wastewater',
    },
    {
      imagePath: `${import.meta.env.BASE_URL}assets/logo-partner-circular-challenge.png`,
      title: t('impactThirdAwardTtile'),
      url: 'https://bluecity.nl/nieuws/bluecity-circular-challenge-hoogbouw',
    },
    {
      imagePath: `${import.meta.env.BASE_URL}assets/logo-partner-amsterdam-institute.png`,
      title: t('impactFourthAwardTitle'),
      containBg: '#e3001b',
      url: 'https://www.ams-institute.org/news/wrap-ams-startup-booster-demo-day-meet-startups/',
    },
  ];
  const COUNT = awards.length;
  const items = Array.from({ length: SETS }, () => awards).flat();

  const [activeDot, setActiveDot] = useState(0);

  const viewportRef = useRef(null);
  const trackRef = useRef(null);
  const s = useRef({
    offset: 0,
    aimTarget: null, // set when arrows/dots ask for a specific card; else null
    velocity: 0,
    dragging: false,
    captured: false, // whether the pointer has been captured for a drag
    paused: false, // true while the mouse hovers the carousel
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

    // Honour users who prefer less motion — no endless drift for them, but
    // the arrows, dots and drag still work.
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const AUTO = reduce ? 0 : AUTO_SPEED;

    let raf = 0;
    const frame = () => {
      const pitch = s.pitch || 1;
      const w = s.setWidth;

      if (!s.dragging && !s.paused) {
        if (s.aimTarget != null) {
          // A tapped card / arrow step: ease to it, then hand back to the drift.
          s.offset += (s.aimTarget - s.offset) * EASE;
          if (Math.abs(s.aimTarget - s.offset) < 0.5) {
            s.offset = s.aimTarget;
            s.aimTarget = null;
            s.velocity = AUTO; // resume the endless glide from here
          }
        } else {
          // Endless rotation: velocity eases back to the gentle auto drift, so
          // a fling glides on for a while and then settles into the loop.
          s.velocity += (AUTO - s.velocity) * RECOVER;
          s.offset += s.velocity;
        }
      }

      // Keep the offset within one set so numbers never grow unbounded and the
      // loop stays seamless (the track holds SETS identical copies).
      if (w > 0 && (s.offset >= w || s.offset < 0)) {
        const sets = Math.floor(s.offset / w);
        s.offset -= sets * w;
        if (s.aimTarget != null) s.aimTarget -= sets * w;
      }

      track.style.transform = `translate3d(${-s.offset}px, 0, 0)`;

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
  // Arrows/dots aim at a specific card; the loop eases there, then resumes the
  // endless drift on its own.
  const go = dir => {
    const pitch = s.pitch || 1;
    const nearest = Math.round(s.offset / pitch);
    s.aimTarget = (nearest + dir) * pitch;
  };

  const goToDot = d => {
    const pitch = s.pitch || 1;
    const current = Math.round(s.offset / pitch);
    const currentMod = ((current % COUNT) + COUNT) % COUNT;
    let diff = ((d - currentMod) % COUNT + COUNT) % COUNT; // forward 0..COUNT-1
    if (diff > COUNT / 2) diff -= COUNT; // take the shorter way round
    s.aimTarget = (current + diff) * pitch;
  };

  // --- drag ---------------------------------------------------------------
  const onPointerDown = e => {
    s.dragging = true;
    s.captured = false; // capture the pointer only once it's really a drag
    s.aimTarget = null; // grabbing cancels any pending arrow/dot move
    s.lastX = e.clientX;
    s.moved = 0;
    s.velocity = 0;
    // NB: no setPointerCapture here — capturing on mousedown would steal the
    // click from the card links. We capture in onPointerMove once it's a drag.
  };

  const onPointerMove = e => {
    if (!s.dragging) return;
    const delta = e.clientX - s.lastX;
    s.offset -= delta;
    s.velocity = -delta;
    s.moved += Math.abs(delta);
    s.lastX = e.clientX;
    // Past the click threshold → it's a real drag: capture the pointer (so it
    // keeps tracking off the viewport) and show the grab cursor.
    if (!s.captured && s.moved > 6) {
      s.captured = true;
      viewportRef.current.setPointerCapture?.(e.pointerId);
      viewportRef.current.classList.add('dragging');
    }
  };

  const endDrag = e => {
    if (!s.dragging) return;
    s.dragging = false;
    if (s.captured) {
      try {
        viewportRef.current.releasePointerCapture?.(e.pointerId);
      } catch {
        /* already released */
      }
      viewportRef.current.classList.remove('dragging');
      s.captured = false;
    }
    // No snap: the release velocity becomes a fling that glides on and eases
    // back into the endless rotation (see the frame loop's RECOVER blend).
  };

  // If the pointer actually dragged, swallow the click so releasing on a card
  // doesn't open its link. A real click barely moves, so it passes through.
  const handleClickCapture = e => {
    if (s.moved > 6) {
      e.preventDefault();
      e.stopPropagation();
    }
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
        onClickCapture={handleClickCapture}
        onMouseEnter={() => {
          s.paused = true;
        }}
        onMouseLeave={() => {
          s.paused = false;
        }}
      >
        <SliderTrack ref={trackRef}>
          {items.map((award, index) => (
            <Slide key={index}>
              <AwardCard
                imagePath={award.imagePath}
                title={award.title}
                containBg={award.containBg}
                url={award.url}
              />
            </Slide>
          ))}
        </SliderTrack>
      </SliderViewport>
    </SliderContainer>
  );
}
