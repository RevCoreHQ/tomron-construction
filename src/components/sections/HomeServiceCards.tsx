'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { ScrollReveal } from '@/components/motion/ScrollReveal';
import { TextReveal } from '@/components/motion/TextReveal';
import { MouseTrackCard } from '@/components/motion/MouseTrackCard';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const services = [
  {
    number: '01',
    title: 'Siding & Cladding',
    description: "Durable, beautiful siding installations engineered for BC's rain and weather.",
    href: '/services/exterior-siding-cladding',
    image: 'https://assets.cdn.filesafe.space/oyhdrza3SwoM8YuXOsja/media/69b8bfe2c625856283dacbae.png',
  },
  {
    number: '02',
    title: 'Building Envelope',
    description: 'Comprehensive air, moisture, and heat barriers that protect your home.',
    href: '/services/building-envelope',
    image: 'https://assets.cdn.filesafe.space/oyhdrza3SwoM8YuXOsja/media/69b8bfe287f0f26bbd4cf0b4.png',
  },
  {
    number: '03',
    title: 'Window Replacement',
    description: 'Energy-efficient windows with expert installation. Casement, sliding, tilt-n-turn.',
    href: '/services/window-replacement',
    image: 'https://assets.cdn.filesafe.space/oyhdrza3SwoM8YuXOsja/media/69b8bfe2269d65f1d2bda1da.png',
  },
  {
    number: '04',
    title: 'Door Replacement',
    description: 'Entry, patio, and sliding doors installed with precision weatherproofing.',
    href: '/services/door-replacement',
    image: 'https://assets.cdn.filesafe.space/oyhdrza3SwoM8YuXOsja/media/69b8bfe2269d65be89bda1d9.png',
  },
  {
    number: '05',
    title: 'Metal Flashing',
    description: 'Custom fabricated flashing for long-term water management and protection.',
    href: '/services/metal-flashing',
    image: 'https://assets.cdn.filesafe.space/oyhdrza3SwoM8YuXOsja/media/69b8bfe287f0f272914cf0af.png',
  },
  {
    number: '06',
    title: 'Home Renovation',
    description: 'Full-scope renovation projects from concept to completion.',
    href: '/services/home-renovation',
    image: 'https://assets.cdn.filesafe.space/oyhdrza3SwoM8YuXOsja/media/69b8c4b4aee1f817b9b6f4f6.png',
  },
];

function ServiceCard({ service, index }: { service: typeof services[number]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
    >
      <Link href={service.href} className="group block h-full">
        <MouseTrackCard intensity={6}>
          <div className="relative bg-charcoal-900 rounded-lg aspect-[3/4] p-6 flex flex-col justify-between overflow-hidden transition-colors duration-300">
            <Image
              src={service.image}
              alt={`${service.title} services by Tomron Construction in the Lower Mainland, BC`}
              fill
              sizes="(max-width: 640px) 75vw, 320px"
              className="object-cover object-[40%_50%] scale-110 group-hover:scale-[1.15] transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />
            <span className="relative z-10 text-sm font-bold text-brand-400 font-display" style={{ textShadow: '0 1px 6px rgba(0,0,0,0.5)' }}>{service.number}</span>
            <div className="relative z-10">
              <h3 className="text-xl font-display font-bold text-white mb-2 group-hover:text-brand-300 transition-colors" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.5)' }}>
                {service.title}
              </h3>
              <p className="text-sm text-white/70 leading-relaxed mb-4 line-clamp-2" style={{ textShadow: '0 1px 4px rgba(0,0,0,0.5)' }}>
                {service.description}
              </p>
              <div className="flex items-center gap-2 text-sm font-semibold text-brand-400 group-hover:text-brand-300 transition-colors">
                Learn More <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </div>
          </div>
        </MouseTrackCard>
      </Link>
    </motion.div>
  );
}

function DesktopParallaxCards() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });

  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-38%']);

  return (
    <section
      ref={sectionRef}
      className="relative hidden lg:block"
      style={{ height: '180vh' }}
    >
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
        <div className="container-wide mb-8">
          <ScrollReveal>
            <div className="flex items-end justify-between">
              <div>
                <p className="text-sm font-semibold text-brand-600 uppercase tracking-wider mb-2">What We Do</p>
                <TextReveal className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-charcoal-900">
                  Our Services
                </TextReveal>
              </div>
              <Link
                href="/services"
                className="flex items-center gap-2 text-sm font-semibold text-brand-600 hover:text-brand-700 transition-colors"
              >
                View All <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </ScrollReveal>
        </div>

        <motion.div
          className="flex gap-5 px-[max(1.5rem,calc((100vw-80rem)/2+1.5rem))]"
          style={{ x }}
        >
          {services.map((service, i) => (
            <div key={service.href} className="shrink-0 w-[320px]">
              <ServiceCard service={service} index={i} />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function MobileCards() {
  return (
    <section className="section-padding lg:hidden">
      <div className="container-wide mb-6">
        <ScrollReveal>
          <div className="flex items-end justify-between">
            <div>
              <p className="text-sm font-semibold text-brand-600 uppercase tracking-wider mb-2">What We Do</p>
              <TextReveal className="text-3xl sm:text-4xl font-display font-extrabold text-charcoal-900">
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

      {/* Swipeable horizontal scroll with snap */}
      <div className="overflow-x-auto scrollbar-hide -mx-4 px-4 sm:-mx-6 sm:px-6">
        <div className="flex gap-4 snap-x snap-mandatory pb-4" style={{ scrollSnapType: 'x mandatory' }}>
          {services.map((service, i) => (
            <div key={service.href} className="shrink-0 w-[260px] sm:w-[280px] snap-start">
              <ServiceCard service={service} index={i} />
            </div>
          ))}
          {/* Spacer for last card padding */}
          <div className="shrink-0 w-4 sm:w-6" />
        </div>
      </div>

      {/* Scroll hint dots */}
      <div className="flex justify-center gap-1.5 mt-4">
        {services.map((_, i) => (
          <div key={i} className="w-1.5 h-1.5 rounded-full bg-neutral-300" />
        ))}
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

export function HomeServiceCards() {
  return (
    <>
      <MobileCards />
      <DesktopParallaxCards />
    </>
  );
}
