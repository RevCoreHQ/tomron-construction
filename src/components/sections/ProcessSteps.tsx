'use client';

import { ScrollReveal } from '@/components/motion/ScrollReveal';
import { motion } from 'framer-motion';

const steps = [
  {
    number: '01',
    title: 'Free Consultation',
    description: 'We visit your property, inspect the exterior, listen to your goals, and discuss your options and budget — no obligation.',
  },
  {
    number: '02',
    title: 'Detailed Proposal',
    description: 'You receive a clear, written proposal with material options, a project timeline, and transparent pricing. No surprises.',
  },
  {
    number: '03',
    title: 'Expert Construction',
    description: 'Our experienced crew handles every phase with daily communication, meticulous workmanship, and spotless cleanup.',
  },
  {
    number: '04',
    title: 'Final Walkthrough',
    description: 'We walk the completed project with you, ensure every detail meets your expectations, and back it with our warranty.',
  },
];

export function ProcessSteps() {
  return (
    <section className="section-padding">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left — Header */}
          <ScrollReveal>
            <p className="text-sm font-semibold text-brand-600 uppercase tracking-wider mb-2">Our Process</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-charcoal-900 mb-4">
              From Consultation to Completion
            </h2>
            <p className="text-lg text-slate-500 leading-relaxed max-w-md">
              A straightforward, four-step process that keeps you informed and your project on track from day one.
            </p>
          </ScrollReveal>

          {/* Right — Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 top-2 bottom-2 w-px bg-neutral-200" />

            <div className="space-y-8">
              {steps.map((step, i) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="relative flex gap-6 pl-1"
                >
                  {/* Dot */}
                  <div className="relative z-10 shrink-0 w-8 h-8 rounded-full bg-brand-600 flex items-center justify-center">
                    <span className="text-xs font-bold text-white">{step.number}</span>
                  </div>

                  {/* Content */}
                  <div className="pt-0.5">
                    <h3 className="text-lg font-display font-bold text-charcoal-900 mb-1">
                      {step.title}
                    </h3>
                    <p className="text-sm text-slate-500 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
