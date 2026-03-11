'use client';

import { Button } from '@/components/ui/Button';
import { siteConfig } from '@/data/site-config';
import { Phone } from 'lucide-react';
import { ScrollReveal } from '@/components/motion/ScrollReveal';

interface CTASectionProps {
  headline?: string;
  description?: string;
  variant?: 'dark' | 'light' | 'brand';
}

export function CTASection({
  headline = 'Ready to Transform Your Home?',
  description = 'Get a free quote from our team. We will inspect your property, discuss your goals, and provide a detailed proposal — no obligation.',
  variant = 'dark',
}: CTASectionProps) {
  const bgClasses = {
    dark: 'bg-slate-900 text-white',
    light: 'bg-sand-50 text-slate-900',
    brand: 'bg-brand-700 text-white',
  };

  return (
    <section className={`${bgClasses[variant]} section-padding relative overflow-hidden`}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-gold/50 to-transparent" />

      {variant === 'dark' && (
        <>
          <div className="orb w-[400px] h-[400px] bg-brand-600/10 -top-[20%] -right-[10%]" />
          <div className="orb w-[300px] h-[300px] bg-brand-400/5 -bottom-[15%] -left-[10%]" />
        </>
      )}

      <ScrollReveal className="container-narrow text-center relative z-10">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-5">
          {headline}
        </h2>
        <p
          className={`text-lg leading-relaxed mb-8 max-w-2xl mx-auto ${
            variant === 'dark' ? 'text-slate-300' : variant === 'brand' ? 'text-brand-100' : 'text-slate-600'
          }`}
        >
          {description}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button href="/contact" size="lg" variant={variant === 'light' ? 'primary' : 'secondary'}>
            Get Your Free Quote
          </Button>
          <a
            href={`tel:${siteConfig.phoneRaw}`}
            className="inline-flex items-center gap-2 text-lg font-medium hover:opacity-80 transition-opacity"
          >
            <Phone className="w-5 h-5" />
            {siteConfig.phone}
          </a>
        </div>
      </ScrollReveal>
    </section>
  );
}
