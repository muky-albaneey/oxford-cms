'use client';
import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';

type Testimonial = {
  name: string;
  role: string;
  text: string;
  avatar?: string;
  rating?: number;
};

type TestimonialCarouselProps = {
  testimonials: Testimonial[];
};

export default function TestimonialCarousel({ testimonials }: TestimonialCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, [testimonials.length]);

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

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

  return (
    <section className="section bg-rose-50/40">
      <div className="container px-4">
        {/* Section Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-ink mb-4">
            What Our Community Says
          </h2>
        </div>

        {/* Carousel */}
        <div className="relative max-w-4xl mx-auto">
          {/* Testimonial Cards */}
          <div className="overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0 px-4"
                  role="group"
                  aria-roledescription="slide"
                  aria-label={`Slide ${index + 1} of ${testimonials.length}`}
                >
                  <div className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition-shadow duration-300">
                    {/* Avatar & Info */}
                    <div className="flex items-center gap-4 mb-4">
                      <div className="relative h-14 w-14 rounded-full overflow-hidden bg-slate-200 flex-shrink-0">
                        {testimonial.avatar ? (
                          <Image
                            src={testimonial.avatar}
                            alt={testimonial.name}
                            fill
                            className="object-cover"
                          />
                        ) : (
                          <div className="h-full w-full flex items-center justify-center text-white bg-gradient-to-br from-emerald-400 to-blue-400">
                            <span className="text-xl font-semibold">
                              {testimonial.name.charAt(0).toUpperCase()}
                            </span>
                          </div>
                        )}
                      </div>
                      <div>
                        <div className="font-semibold text-ink">{testimonial.name}</div>
                        <div className="text-sm text-slate-500">{testimonial.role}</div>
                      </div>
                    </div>

                    {/* Rating */}
                    <div className="mb-4 flex gap-1">
                      {Array.from({ length: testimonial.rating || 5 }).map((_, i) => (
                        <svg
                          key={i}
                          className="w-5 h-5 text-amber-400 fill-current"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>

                    {/* Quote */}
                    <p className="text-slate-700 text-sm leading-relaxed italic">
                      &ldquo;{testimonial.text}&rdquo;
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          {testimonials.length > 1 && (
            <>
              <button
                onClick={prevSlide}
                aria-label="Previous testimonial"
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 h-10 w-10 md:h-12 md:w-12 rounded-full bg-white shadow-lg hover:bg-emerald-50 text-emerald-700 transition-all duration-300 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:ring-offset-2"
              >
                <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={nextSlide}
                aria-label="Next testimonial"
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 h-10 w-10 md:h-12 md:w-12 rounded-full bg-white shadow-lg hover:bg-emerald-50 text-emerald-700 transition-all duration-300 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:ring-offset-2"
              >
                <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}

          {/* Pagination Dots */}
          {testimonials.length > 1 && (
            <div className="flex items-center justify-center gap-2 mt-8" role="tablist" aria-label="Testimonial navigation">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                  aria-selected={index === currentIndex}
                  role="tab"
                  className={`transition-all duration-300 ${
                    index === currentIndex
                      ? 'w-8 h-2 bg-emerald-600 rounded-full'
                      : 'w-2 h-2 bg-slate-300 rounded-full hover:bg-emerald-400'
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

