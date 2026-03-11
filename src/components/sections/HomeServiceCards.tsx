'use client';

import Link from 'next/link';
import { ArrowRight, PanelTop, Layers, PanelLeft } from 'lucide-react';
import { ScrollReveal } from '@/components/motion/ScrollReveal';
import { StaggerChildren, staggerItem } from '@/components/motion/StaggerChildren';
import { MouseTrackCard } from '@/components/motion/MouseTrackCard';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';

const serviceCategories = [
  {
    icon: PanelTop,
    title: 'Siding & Cladding',
    description:
      "Durable, beautiful siding installations engineered for BC's rain and weather. Vinyl, fiber cement, wood, and composite options.",
    href: '/services/exterior-siding-cladding',
    features: ['Vinyl', 'Fiber Cement', 'Wood', 'Composite'],
  },
  {
    icon: Layers,
    title: 'Building Envelope',
    description:
      'Comprehensive air, moisture, and heat barriers that protect your home from the inside out. Assessment, repair, and new installation.',
    href: '/services/building-envelope',
    features: ['Air Barriers', 'Moisture Control', 'Insulation', 'Assessment'],
  },
  {
    icon: PanelLeft,
    title: 'Windows & Doors',
    description:
      'Energy-efficient window and door replacements with expert installation. Casement, sliding, tilt-n-turn, entry, and patio styles.',
    href: '/services/window-replacement',
    features: ['Casement', 'Sliding', 'Entry Doors', 'Patio Doors'],
  },
];

export function HomeServiceCards() {
  return (
    <section className="section-padding">
      <div className="container-wide">
        <ScrollReveal className="text-center mb-12 lg:mb-16">
          <p className="inline-flex items-center gap-2 text-sm font-medium tracking-wider uppercase mb-3">
            <span className="w-6 h-px bg-accent-gold" />
            <span className="gradient-text-gold">What We Do</span>
            <span className="w-6 h-px bg-accent-gold" />
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-slate-900 mb-4">
            Exterior Expertise. Interior Craft.
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Siding, windows, doors, building envelope, and full home renovations — all from a single family-owned contractor you can trust.
          </p>
        </ScrollReveal>

        <StaggerChildren className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {serviceCategories.map((cat) => {
            const Icon = cat.icon;
            return (
              <motion.div key={cat.href} variants={staggerItem}>
                <MouseTrackCard intensity={5}>
                  <Link
                    href={cat.href}
                    className="group relative block bg-white rounded-2xl border border-slate-100 p-8 shadow-soft hover:shadow-elevated transition-all duration-300 overflow-hidden"
                  >
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-500 via-brand-600 to-brand-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-50 to-brand-100 flex items-center justify-center mb-6 group-hover:from-brand-100 group-hover:to-brand-200 transition-all duration-300 shadow-sm">
                      <Icon className="w-7 h-7 text-brand-700" />
                    </div>
                    <h3 className="text-2xl font-display font-semibold text-slate-900 mb-3 group-hover:text-brand-600 transition-colors">
                      {cat.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed mb-5">
                      {cat.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-5">
                      {cat.features.map((f) => (
                        <span
                          key={f}
                          className="px-3 py-1 text-xs font-medium bg-sand-50 text-slate-600 rounded-full border border-sand-200"
                        >
                          {f}
                        </span>
                      ))}
                    </div>
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 group-hover:gap-2.5 transition-all">
                      Learn More <ArrowRight className="w-4 h-4" />
                    </span>
                  </Link>
                </MouseTrackCard>
              </motion.div>
            );
          })}
        </StaggerChildren>

        <div className="text-center mt-10">
          <Button href="/services" variant="outline">
            View All Services
          </Button>
        </div>
      </div>
    </section>
  );
}
