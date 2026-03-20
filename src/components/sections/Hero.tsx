'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { siteConfig } from '@/data/site-config';
import { Phone, Shield, BadgeCheck, Award } from 'lucide-react';

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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {backgroundImage ? (
        <div className="absolute inset-0">
          <Image
            src={backgroundImage}
            alt="Tomron Construction, siding and exterior work"
            fill
            priority
            sizes="100vw"
            quality={80}
            className="object-cover object-center"
          />
        </div>
      ) : (
        <div className="absolute inset-0 bg-charcoal-900" />
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-black/40" />

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 py-32 text-center">
        <div className="max-w-3xl mx-auto">
          {subheadline && (
            <p className="text-brand-300 text-sm font-semibold tracking-wider uppercase mb-4">
              {subheadline}
            </p>
          )}
          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-display font-extrabold text-white leading-[1] mb-6">
            {headline}
          </h1>
          <p className="text-lg sm:text-xl text-white/90 leading-relaxed mb-10 max-w-xl mx-auto">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10">
            <Button href={primaryCta.href} size="lg">
              {primaryCta.label}
            </Button>
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="inline-flex items-center justify-center gap-2 px-6 py-4 text-base font-medium text-white/80 border border-white/25 rounded-lg hover:bg-white/10 hover:border-white/40 transition-all"
            >
              <Phone className="w-5 h-5" />
              {siteConfig.phone}
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {trustBadges.map((badge) => {
              const Icon = badge.icon;
              return (
                <div key={badge.label} className="flex items-center gap-2">
                  <Icon className="w-4 h-4 text-brand-300" />
                  <span className="text-sm text-white/70 font-medium">{badge.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
