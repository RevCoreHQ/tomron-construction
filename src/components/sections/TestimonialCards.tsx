'use client';

import { useState, useEffect, useCallback } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { ScrollReveal } from '@/components/motion/ScrollReveal';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    id: 'testimonial-1',
    quote: "Brendan is very confident, competent and personable. He takes great pride in his work and it really shows in the quality of the finished product. We could not be happier with the results.",
    author: 'Paula A.',
    location: 'Coquitlam, BC',
    service: 'Siding & Cladding',
    rating: 5,
  },
  {
    id: 'testimonial-2',
    quote: "Outstanding work with excellent workmanship. Brendan listens to your concerns and delivers exactly what was discussed. Very professional from start to finish. Highly recommend Tomron Construction.",
    author: 'Anne C.',
    location: 'Pitt Meadows, BC',
    service: 'Exterior Renovation',
    rating: 5,
  },
  {
    id: 'testimonial-3',
    quote: "Very professional team. We are thrilled with the excellent workmanship. On time and on budget, they did an extraordinary job on our home. Already recommended them to our neighbours.",
    author: 'Sharon D.',
    location: 'Burnaby, BC',
    service: 'Window Replacement',
    rating: 5,
  },
];

export function TestimonialCards() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const t = testimonials[current];

  return (
    <section className="section-padding bg-neutral-50">
      <div className="container-narrow">
        <ScrollReveal>
          <p className="text-sm font-semibold text-brand-600 uppercase tracking-wider mb-2">Testimonials</p>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-charcoal-900 mb-12">
            What Our Clients Say
          </h2>
        </ScrollReveal>

        <div className="relative min-h-[220px]">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={t.id}
              custom={direction}
              initial={{ opacity: 0, x: direction >= 0 ? 40 : -40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction >= 0 ? -40 : 40 }}
              transition={{ duration: 0.3 }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-brand-500 text-brand-500" />
                ))}
              </div>

              {/* Quote — word-by-word reveal */}
              <blockquote className="text-xl sm:text-2xl lg:text-3xl font-display font-bold text-charcoal-900 leading-snug mb-8 max-w-2xl">
                &ldquo;
                {t.quote.split(' ').map((word, i) => (
                  <motion.span
                    key={`${t.id}-${i}`}
                    className="inline-block"
                    initial={{ opacity: 0, y: 8, filter: 'blur(4px)' }}
                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    transition={{ duration: 0.3, delay: 0.15 + i * 0.03, ease: [0.25, 0.1, 0.25, 1] }}
                  >
                    {word}{' '}
                  </motion.span>
                ))}
                &rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-px h-8 bg-brand-600" />
                <div>
                  <p className="font-semibold text-charcoal-900">{t.author}</p>
                  <p className="text-sm text-slate-500">{t.location} &middot; {t.service}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation */}
        <div className="flex items-center gap-4 mt-10">
          <button
            onClick={prev}
            className="w-10 h-10 rounded-lg border border-neutral-300 flex items-center justify-center text-slate-600 hover:border-brand-600 hover:text-brand-600 transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={next}
            className="w-10 h-10 rounded-lg border border-neutral-300 flex items-center justify-center text-slate-600 hover:border-brand-600 hover:text-brand-600 transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
          <span className="text-sm text-slate-400 ml-2">
            {current + 1} / {testimonials.length}
          </span>
        </div>
      </div>
    </section>
  );
}
