'use client';

import { Star } from 'lucide-react';
import { ScrollReveal } from '@/components/motion/ScrollReveal';
import { StaggerChildren, staggerItem } from '@/components/motion/StaggerChildren';
import { motion } from 'framer-motion';

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
    quote: "Very professional team. We are thrilled with the excellent workmanship. On time and on budget — they did an extraordinary job on our home. Already recommended them to our neighbours.",
    author: 'Sharon D.',
    location: 'Burnaby, BC',
    service: 'Window Replacement',
    rating: 5,
  },
];

export function TestimonialCards() {
  return (
    <section className="section-padding bg-gradient-to-b from-sand-50 to-white relative overflow-hidden">
      <div className="orb w-[300px] h-[300px] bg-brand-100/30 top-[10%] -right-[5%]" />

      <div className="container-wide relative z-10">
        <ScrollReveal className="text-center mb-12 lg:mb-16">
          <p className="inline-flex items-center gap-2 text-sm font-medium tracking-wider uppercase mb-3">
            <span className="w-6 h-px bg-accent-gold" />
            <span className="gradient-text-gold">Client Experiences</span>
            <span className="w-6 h-px bg-accent-gold" />
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-slate-900">
            What Our Clients Say
          </h2>
        </ScrollReveal>
        <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t) => (
            <motion.div
              key={t.id}
              variants={staggerItem}
              className="relative bg-white rounded-2xl p-6 lg:p-8 shadow-soft border border-slate-100 border-l-4 border-l-brand-500 hover:shadow-card transition-all duration-300"
            >
              <span className="absolute top-4 right-5 text-6xl font-display text-brand-100/60 leading-none select-none pointer-events-none">
                &ldquo;
              </span>

              <div className="relative z-10">
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-slate-700 leading-relaxed mb-5 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-100 to-brand-200 flex items-center justify-center">
                    <span className="text-sm font-bold text-brand-700">{t.author[0]}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">{t.author}</p>
                    <p className="text-sm text-slate-500">{t.location} · {t.service}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
