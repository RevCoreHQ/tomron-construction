'use client';

import { Button } from '@/components/ui/Button';
import { siteConfig } from '@/data/site-config';
import { Phone } from 'lucide-react';
import { ScrollReveal } from '@/components/motion/ScrollReveal';

interface CTASectionProps {
  headline?: string;
  description?: string;
}

export function CTASection({
  headline = 'Ready to Transform Your Home?',
  description = 'Get a free quote from our team. We will inspect your property, discuss your goals, and provide a detailed proposal — no obligation.',
}: CTASectionProps) {
  return (
    <section className="section-padding">
      <div className="container-wide">
        <ScrollReveal direction="up">
          <div className="bg-charcoal-900 rounded-lg p-8 sm:p-12 lg:p-16 relative overflow-hidden">
            {/* Blue accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-600/10 rounded-bl-[80px]" />

            <div className="relative z-10 max-w-xl">
              <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white mb-4">
                {headline}
              </h2>
              <p className="text-lg text-white/50 leading-relaxed mb-8">
                {description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button href="/contact" size="lg">
                  Get Your Free Quote
                </Button>
                <a
                  href={`tel:${siteConfig.phoneRaw}`}
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 text-base font-medium text-white/70 border border-white/20 rounded-lg hover:text-white hover:border-white/40 transition-all"
                >
                  <Phone className="w-5 h-5" />
                  {siteConfig.phone}
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
