'use client';

import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { ScrollReveal } from '@/components/motion/ScrollReveal';
import { TextReveal } from '@/components/motion/TextReveal';
import { MouseTrackCard } from '@/components/motion/MouseTrackCard';
import { motion } from 'framer-motion';

const services = [
  {
    number: '01',
    title: 'Siding & Cladding',
    description: "Durable, beautiful siding installations engineered for BC's rain and weather.",
    href: '/services/exterior-siding-cladding',
  },
  {
    number: '02',
    title: 'Building Envelope',
    description: 'Comprehensive air, moisture, and heat barriers that protect your home.',
    href: '/services/building-envelope',
  },
  {
    number: '03',
    title: 'Window Replacement',
    description: 'Energy-efficient windows with expert installation. Casement, sliding, tilt-n-turn.',
    href: '/services/window-replacement',
  },
  {
    number: '04',
    title: 'Door Replacement',
    description: 'Entry, patio, and sliding doors installed with precision weatherproofing.',
    href: '/services/door-replacement',
  },
  {
    number: '05',
    title: 'Metal Flashing',
    description: 'Custom fabricated flashing for long-term water management and protection.',
    href: '/services/metal-flashing',
  },
  {
    number: '06',
    title: 'Home Renovation',
    description: 'Full-scope renovation projects from concept to completion.',
    href: '/services/home-renovation',
  },
];

export function HomeServiceCards() {
  return (
    <section className="section-padding">
      <div className="container-wide">
        <ScrollReveal>
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-sm font-semibold text-brand-600 uppercase tracking-wider mb-2">What We Do</p>
              <TextReveal className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-charcoal-900">
                Our Services
              </TextReveal>
            </div>
            <Link
              href="/services"
              className="hidden sm:flex items-center gap-2 text-sm font-semibold text-brand-600 hover:text-brand-700 transition-colors"
            >
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </ScrollReveal>
      </div>

      {/* Horizontal scroll */}
      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-5 px-4 sm:px-6 lg:px-[max(1.5rem,calc((100vw-80rem)/2+1.5rem))] pb-4">
          {services.map((service, i) => (
            <motion.div
              key={service.href}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="shrink-0 w-[280px] sm:w-[320px]"
            >
              <Link href={service.href} className="group block h-full">
                <MouseTrackCard intensity={6}>
                  <div className="relative bg-charcoal-900 rounded-lg aspect-[3/4] p-6 flex flex-col justify-between overflow-hidden hover:bg-charcoal-800 transition-colors duration-300">
                    {/* Number */}
                    <span className="text-sm font-bold text-brand-500 font-display">{service.number}</span>

                    {/* Bottom content */}
                    <div>
                      <h3 className="text-xl font-display font-bold text-white mb-2 group-hover:text-brand-300 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-sm text-white/40 leading-relaxed mb-4 line-clamp-2">
                        {service.description}
                      </p>
                      <div className="flex items-center gap-2 text-sm font-semibold text-brand-400 group-hover:text-brand-300 transition-colors">
                        Learn More <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </div>
                    </div>

                    {/* Blue accent corner */}
                    <div className="absolute top-0 right-0 w-16 h-16 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-brand-600/20 to-transparent" />
                    </div>
                  </div>
                </MouseTrackCard>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="sm:hidden px-4 mt-4">
        <Link
          href="/services"
          className="flex items-center gap-2 text-sm font-semibold text-brand-600"
        >
          View All Services <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
}
