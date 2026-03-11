'use client';

import { ScrollReveal } from '@/components/motion/ScrollReveal';
import { StaggerChildren, staggerItem } from '@/components/motion/StaggerChildren';
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
    description: 'You receive a clear, written proposal with material options, a project timeline, and transparent pricing. No surprises, no hidden costs.',
  },
  {
    number: '03',
    title: 'Expert Construction',
    description: 'Our experienced crew handles every phase of the build with daily communication, meticulous workmanship, and spotless cleanup.',
  },
  {
    number: '04',
    title: 'Final Walkthrough',
    description: 'We walk the completed project with you, ensure every detail meets your expectations, and back it all with our industry-leading warranty.',
  },
];

export function ProcessSteps() {
  return (
    <section className="section-padding bg-gradient-to-b from-white via-sand-50/50 to-white">
      <div className="container-wide">
        <ScrollReveal className="text-center mb-12 lg:mb-16">
          <p className="inline-flex items-center gap-2 text-sm font-medium tracking-wider uppercase mb-3">
            <span className="w-6 h-px bg-accent-gold" />
            <span className="gradient-text-gold">Our Process</span>
            <span className="w-6 h-px bg-accent-gold" />
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-slate-900">
            From Consultation to Completion
          </h2>
        </ScrollReveal>
        <StaggerChildren className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="hidden lg:block absolute top-10 left-[12%] right-[12%] h-px bg-gradient-to-r from-transparent via-brand-200 to-transparent" />

          {steps.map((step) => (
            <motion.div key={step.number} variants={staggerItem} className="relative text-center lg:text-left">
              <div className="relative inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-brand-50 to-brand-100 border-2 border-brand-200 mb-5 shadow-soft">
                <span className="text-xl font-display font-bold gradient-text">{step.number}</span>
              </div>
              <h3 className="text-xl font-display font-semibold text-slate-900 mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
