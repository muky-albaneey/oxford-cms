'use client';
import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import BadgeRow from './BadgeRow';

type HeroData = {
  title?: string;
  subtitle?: string;
  badges?: Array<{ icon: string; title: string; subtitle: string }>;
  cta?: string;
  images?: string[];
};

const DEFAULT_SLIDES = ['hero_1.jpeg', 'hero_2.jpeg', 'hero_3.jpeg', 'hero_4.jpeg'];

export default function Hero({ hero }: { hero: HeroData }) {
  const slides = hero?.images?.length ? hero.images : DEFAULT_SLIDES;
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [nextSlide, prevSlide]);

  const title = hero?.title || 'Oxford Manor College';
  const subtitle = hero?.subtitle || 'Excellence in British Education, Abuja';

  return (
    <section className="relative isolate min-h-[80vh] md:min-h-[85vh] overflow-hidden">
      {/* Background Images */}
      <div className="absolute inset-0 -z-20 max-w-full overflow-hidden">
        {slides.map((src, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              i === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={`/${src}`}
              alt=""
              fill
              priority={i === 0}
              quality={90}
              className="object-cover object-center w-full h-full"
              style={{ 
                objectPosition: 'center center',
                filter: 'brightness(0.7) contrast(1.1)'
              }}
              sizes="100vw"
              unoptimized={false}
            />
          </div>
        ))}
      </div>

      {/* Dark Green Gradient Overlay */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/90 via-black/50 to-black/70" />

      {/* Content */}
      <div className="container relative z-10 min-h-[80vh] md:min-h-[85vh] flex flex-col items-center justify-center text-center text-white px-4">
        {/* Title */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-4 animate-fade-in">
          {title}
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl lg:text-2xl text-white/95 font-light mb-12 animate-fade-in-delay">
          {subtitle}
        </p>

        {/* Badges Panel */}
        {hero?.badges && hero.badges.length > 0 && (
          <div className="mb-12 animate-fade-in-delay-2">
            <BadgeRow badges={hero.badges} />
          </div>
        )}

        {/* CTA Button */}
        {hero?.cta && (
          <div className="animate-fade-in-delay-3">
            <button className="group inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-all duration-300 hover:shadow-lg hover:shadow-emerald-600/50 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:ring-offset-2 focus:ring-offset-black/50">
              {hero.cta}
              <svg
                className="w-5 h-5 transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </div>
        )}

        {/* Carousel Indicators */}
        {slides.length > 1 && (
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`transition-all duration-300 ${
                  i === currentIndex
                    ? 'w-8 h-2 bg-white rounded-full'
                    : 'w-2 h-2 bg-white/60 rounded-full hover:bg-white/80'
                }`}
              />
            ))}
          </div>
        )}

        {/* Navigation Arrows */}
        {slides.length > 1 && (
          <>
            <button
              onClick={prevSlide}
              aria-label="Previous slide"
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 h-10 w-10 md:h-12 md:w-12 rounded-full bg-black/50 hover:bg-black/70 backdrop-blur-sm text-white transition-all duration-300 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-white/50"
            >
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              aria-label="Next slide"
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 h-10 w-10 md:h-12 md:w-12 rounded-full bg-black/50 hover:bg-black/70 backdrop-blur-sm text-white transition-all duration-300 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-white/50"
            >
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}
      </div>
    </section>
  );
}

