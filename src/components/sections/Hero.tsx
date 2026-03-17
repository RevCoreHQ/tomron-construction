'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { siteConfig } from '@/data/site-config';
import { Phone, Shield, BadgeCheck, Award, ChevronDown } from 'lucide-react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { useRef } from 'react';

interface HeroProps {
  headline: string;
  subheadline?: string;
  description: string;
  primaryCta?: { label: string; href: string };
  backgroundImage?: string;
}

const trustBadges = [
  { icon: Shield, label: '10+ Years' },
  { icon: BadgeCheck, label: 'Licensed & Insured' },
  { icon: Award, label: 'Free Quotes' },
];

export function Hero({
  headline,
  subheadline,
  description,
  primaryCta = { label: 'Get a Free Quote', href: '/contact' },
  backgroundImage,
}: HeroProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  // Parallax: image moves slower, text moves faster + fades out
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '-10%']);
  const textOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image — parallax layer */}
      {backgroundImage ? (
        <motion.div
          className="absolute inset-0"
          style={prefersReduced ? undefined : { y: imageY }}
        >
          <Image
            src={backgroundImage}
            alt="Tomron Construction — siding and exterior work"
            fill
            priority
            sizes="100vw"
            quality={80}
            className="object-cover object-center"
          />
        </motion.div>
      ) : (
        <div className="absolute inset-0 bg-charcoal-900" />
      )}

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-black/40" />

      {/* Content — parallax layer (moves faster, fades out) */}
      <motion.div
        className="relative z-10 w-full px-4 sm:px-6 lg:px-8 py-32 text-center"
        style={prefersReduced ? undefined : { y: textY, opacity: textOpacity }}
      >
        <div className="max-w-3xl mx-auto">
          {subheadline && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="text-brand-300 text-sm font-semibold tracking-wider uppercase mb-4"
              style={{ textShadow: '0 2px 12px rgba(0,0,0,0.6)' }}
            >
              {subheadline}
            </motion.p>
          )}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-5xl sm:text-6xl lg:text-8xl font-display font-extrabold text-white leading-[1] mb-6"
            style={{ textShadow: '0 4px 40px rgba(0,0,0,0.5)' }}
          >
            {headline}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="text-lg sm:text-xl text-white/90 leading-relaxed mb-10 max-w-xl mx-auto"
            style={{ textShadow: '0 2px 12px rgba(0,0,0,0.5)' }}
          >
            {description}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="flex flex-col sm:flex-row justify-center gap-4 mb-10"
          >
            <Button href={primaryCta.href} size="lg" className="hover:scale-105 hover:shadow-lg hover:shadow-brand-600/25 transition-all duration-300">
              {primaryCta.label}
            </Button>
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="inline-flex items-center justify-center gap-2 px-6 py-4 text-base font-medium text-white/80 border border-white/25 rounded-lg hover:bg-white/10 hover:border-white/40 transition-all backdrop-blur-sm"
            >
              <Phone className="w-5 h-5" />
              {siteConfig.phone}
            </a>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-6"
          >
            {trustBadges.map((badge) => {
              const Icon = badge.icon;
              return (
                <div key={badge.label} className="flex items-center gap-2">
                  <Icon className="w-4 h-4 text-brand-300" />
                  <span className="text-sm text-white/70 font-medium" style={{ textShadow: '0 1px 8px rgba(0,0,0,0.5)' }}>{badge.label}</span>
                </div>
              );
            })}
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden lg:flex flex-col items-center gap-1"
      >
        <span className="text-xs text-white/30 uppercase tracking-widest">Scroll</span>
        <ChevronDown className="w-4 h-4 text-white/30 animate-bounce" />
      </motion.div>
    </section>
  );
}
