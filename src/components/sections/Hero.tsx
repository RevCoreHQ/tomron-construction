'use client';

import { Button } from '@/components/ui/Button';
import { siteConfig } from '@/data/site-config';
import { Phone, Shield, BadgeCheck, Award } from 'lucide-react';
import { motion } from 'framer-motion';

interface HeroProps {
  headline: string;
  subheadline?: string;
  description: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  backgroundImage?: string;
  backgroundVideo?: string;
  overlay?: boolean;
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
}: HeroProps) {
  return (
    <section className="relative min-h-[90vh] lg:min-h-screen grid grid-cols-1 lg:grid-cols-2">
      {/* Left — Content */}
      <div className="bg-charcoal-900 flex items-center px-6 sm:px-10 lg:px-16 py-32 lg:py-24 order-2 lg:order-1">
        <div className="max-w-xl">
          {subheadline && (
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="text-brand-400 text-sm font-semibold tracking-wider uppercase mb-4"
            >
              {subheadline}
            </motion.p>
          )}
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white leading-[1.05] mb-6"
          >
            {headline}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="text-lg text-white/60 leading-relaxed mb-8 max-w-md"
          >
            {description}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 mb-10"
          >
            <Button href={primaryCta.href} size="lg">
              {primaryCta.label}
            </Button>
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="inline-flex items-center justify-center gap-2 px-6 py-4 text-base font-medium text-white/80 border border-white/20 rounded-lg hover:bg-white/5 hover:border-white/40 transition-all"
            >
              <Phone className="w-5 h-5" />
              {siteConfig.phone}
            </a>
          </motion.div>

          {/* Trust badges inline */}
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

      {/* Right — Image */}
      <div className="relative bg-charcoal-950 order-1 lg:order-2 min-h-[40vh] lg:min-h-0">
        <div className="absolute inset-0 image-placeholder-premium" />
        <div className="absolute bottom-0 left-0 w-1 h-32 bg-brand-600 hidden lg:block" />
      </div>
    </section>
  );
}
