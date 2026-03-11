'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { siteConfig } from '@/data/site-config';
import { Phone, Shield, BadgeCheck, Award, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

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
  return (
    <section className="relative min-h-screen flex items-end overflow-hidden">
      {/* Background image — full bleed, behind nav */}
      {backgroundImage ? (
        <Image
          src={backgroundImage}
          alt="Tomron Construction — siding and exterior work"
          fill
          priority
          sizes="100vw"
          quality={80}
          className="object-cover object-center"
        />
      ) : (
        <div className="absolute inset-0 bg-charcoal-900" />
      )}

      {/* Gradient overlay — stronger at bottom for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />

      {/* Content — positioned at bottom */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20 lg:pb-24 pt-32">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl">
            {subheadline && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="text-brand-400 text-sm font-semibold tracking-wider uppercase mb-4"
              >
                {subheadline}
              </motion.p>
            )}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-7xl font-display font-extrabold text-white leading-[1.05] mb-6"
              style={{ textShadow: '0 2px 30px rgba(0,0,0,0.4)' }}
            >
              {headline}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="text-lg sm:text-xl text-white/70 leading-relaxed mb-8 max-w-lg"
            >
              {description}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 mb-8"
            >
              <Button href={primaryCta.href} size="lg">
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
              className="flex flex-wrap gap-5"
            >
              {trustBadges.map((badge) => {
                const Icon = badge.icon;
                return (
                  <div key={badge.label} className="flex items-center gap-2">
                    <Icon className="w-4 h-4 text-brand-400" />
                    <span className="text-sm text-white/50 font-medium">{badge.label}</span>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>

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
