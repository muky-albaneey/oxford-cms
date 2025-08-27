'use client';
import { useEffect, useState, useCallback, useMemo, useRef } from 'react';
import { TypeAnimation } from 'react-type-animation';

type HeroData = {
  title?: string;
  subtitle?: string;
  badges?: string[];
  cta?: string;
  image?: string;
  images?: string[];
};

const DEFAULT_SLIDES = ['hero_1.jpeg', 'hero_2.jpeg', 'hero_3.jpeg', 'hero_4.jpeg'];

export default function HeroCarousel({ hero }: { hero: HeroData }) {
  const slides = useMemo(() => {
    if (hero?.images?.length) return hero.images!;
    if (hero?.image) return [hero.image];
    return DEFAULT_SLIDES;
  }, [hero]);

  const [idx, setIdx] = useState(0);
  const next = useCallback(() => setIdx(i => (i + 1) % slides.length), [slides.length]);
  const prev = useCallback(() => setIdx(i => (i - 1 + slides.length) % slides.length), [slides.length]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [next, prev]);

  // Measure text top → overlay start
  const sectionRef = useRef<HTMLElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const [overlayTop, setOverlayTop] = useState<number>(0);

  useEffect(() => {
    const measure = () => {
      if (!sectionRef.current || !contentRef.current) return;
      const s = sectionRef.current.getBoundingClientRect();
      const c = contentRef.current.getBoundingClientRect();
      setOverlayTop(Math.max(0, c.top - s.top));
    };
    measure();
    const ro = new ResizeObserver(measure);
    if (sectionRef.current) ro.observe(sectionRef.current);
    if (contentRef.current) ro.observe(contentRef.current);
    window.addEventListener('resize', measure);
    window.addEventListener('orientationchange', measure);
    const t = setTimeout(measure, 50);
    return () => {
      ro.disconnect();
      window.removeEventListener('resize', measure);
      window.removeEventListener('orientationchange', measure);
      clearTimeout(t);
    };
  }, [hero?.title, hero?.subtitle, slides.length]);

  const titleText = hero?.title ?? 'Oxford Manor College';

  return (
    <section ref={sectionRef} className="relative isolate bg-brand-gradient">
      {/* Slides (background) */}
      <div className="absolute inset-0 -z-20 overflow-hidden">
        {slides.map((src, i) => (
          <img
            key={i}
            src={src}
            alt=""
            aria-hidden={i !== idx}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
              i === idx ? 'opacity-100' : 'opacity-0'
            } md:object-center`}
            style={{ objectPosition: 'center 25%' }}
            onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
          />
        ))}
      </div>

      {/* Overlay: from text top → bottom (under text, above image) */}
      <div
        className="absolute inset-x-0 -z-10 pointer-events-none bg-[linear-gradient(to_top,rgba(0,0,0,0.9),rgba(0,0,0,0.40),rgba(0,0,0,0))]"
        style={{ top: overlayTop, bottom: 0 }}
      />

      {/* Content (on top) */}
      <div
        ref={contentRef}
        className="container min-h-[60vh] md:min-h-[72vh] flex flex-col items-center justify-center text-center text-white relative z-10"
      >
        <h3 className="text-2xl md:text-4xl font-semibold drop-shadow">
          <TypeAnimation
            key={titleText}                // re-run if title changes
            // sequence={[titleText]}         // type once
            speed={50}                     // typing speed
                sequence={[titleText, 1200, 'Premier British Curriculum in Abuja', 1000, 'Nurturing Leaders, Inspiring Excellence']}
                repeat={Infinity}
            cursor={false}                 // clean hero look
            wrapper="span"
          />
        </h3>

        <p className="mt-3 md:text-lg text-white/90">{hero?.subtitle}</p>

        <div className="mt-6 flex flex-wrap justify-center gap-3">
          {hero?.badges?.map((b, i) => (
            <span key={i} className="chip bg-white/10 border-white/30 text-white">{b}</span>
          ))}
        </div>

        {hero?.cta && (
          <div className="mt-8">
            <a className="btn" href="#experience">{hero.cta}</a>
          </div>
        )}
      </div>

      {/* Prev / Next arrows */}
      {slides.length > 1 && (
        <>
          <button
            onClick={prev}
            aria-label="Previous slide"
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 inline-flex h-10 w-10 items-center justify-center rounded-full bg-black/50 backdrop-blur text-white hover:bg-black/70 transition"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeWidth="2" d="M15 6l-6 6 6 6" /></svg>
          </button>
          <button
            onClick={next}
            aria-label="Next slide"
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 inline-flex h-10 w-10 items-center justify-center rounded-full bg-black/50 backdrop-blur text-white hover:bg-black/70 transition"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeWidth="2" d="M9 6l6 6-6 6" /></svg>
          </button>
        </>
      )}

      {/* Dots */}
      {slides.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-2.5 w-2.5 rounded-full transition ${i === idx ? 'bg-white' : 'bg-white/60 hover:bg-white/80'}`}
            />
          ))}
        </div>
      )}
    </section>
  );
}
