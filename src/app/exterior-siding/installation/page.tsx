import { Metadata } from 'next';
import Script from 'next/script';
import { Phone, Shield, BadgeCheck, Award } from 'lucide-react';
import { siteConfig } from '@/data/site-config';
import { Button } from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Exterior Siding Installation | Tomron Construction',
  description: 'Professional exterior siding installation in the Lower Mainland. Vinyl, fiber cement, composite & metal siding. Licensed, insured & free quotes. Call (604) 754-9392.',
  robots: { index: false, follow: false },
};

const features = [
  'Full removal of old siding and inspection of sheathing',
  'House wrap and weather-resistive barrier installation',
  'Vinyl, fiber cement, composite, and metal siding options',
  'Professional flashing and trim detailing',
  'Complete cleanup and debris removal',
  'Manufacturer warranty on all materials',
];

const trustBadges = [
  { icon: Shield, label: '10+ Years Experience' },
  { icon: BadgeCheck, label: 'Licensed & Insured' },
  { icon: Award, label: 'Free Quotes' },
];

export default function ExteriorSidingInstallationPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-16 lg:py-24 bg-charcoal-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 text-xs font-semibold bg-brand-600/20 text-brand-400 rounded-md mb-4">
              Exterior Services
            </span>
            <h1 className="text-4xl sm:text-5xl font-display font-extrabold text-white mb-6">
              Exterior Siding Installation in the Lower Mainland
            </h1>
            <p className="text-base sm:text-lg text-white/60 leading-relaxed mb-8">
              From vinyl and fiber cement to composite and metal panels, Tomron Construction delivers expert siding installation built for the Lower Mainland climate. Every project includes proper moisture management, professional flashing, and a clean finished product.
            </p>
            <div className="flex flex-wrap gap-6 mb-8">
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

      {/* Features + Form */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left - What's Included */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-charcoal-900 mb-6">
                What&apos;s Included
              </h2>
              <div className="space-y-3 mb-8">
                {features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 bg-neutral-50 rounded-lg">
                    <div className="w-6 h-6 rounded-full bg-brand-100 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-brand-700 text-xs font-bold">{i + 1}</span>
                    </div>
                    <p className="text-sm text-slate-700 leading-relaxed">{feature}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={`tel:${siteConfig.phoneRaw}`}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 text-base font-medium text-slate-700 border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  {siteConfig.phone}
                </a>
                <Button href="/services/exterior-siding-cladding" variant="outline" size="sm">
                  View Full Service Details
                </Button>
              </div>
            </div>

            {/* Right - GHL Form */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-charcoal-900 mb-6">
                Get Your Free Quote
              </h2>
              <div className="bg-white rounded-lg border border-slate-100 shadow-card overflow-hidden" style={{ minHeight: '673px' }}>
                <iframe
                  src="https://api.leadconnectorhq.com/widget/form/eAlelJLQv1ucn16rsfqu"
                  style={{ width: '100%', height: '673px', border: 'none', borderRadius: '3px' }}
                  id="inline-eAlelJLQv1ucn16rsfqu"
                  data-layout="{'id':'INLINE'}"
                  data-trigger-type="alwaysShow"
                  data-trigger-value=""
                  data-activation-type="alwaysActivated"
                  data-activation-value=""
                  data-deactivation-type="neverDeactivate"
                  data-deactivation-value=""
                  data-form-name="Website Quote Form"
                  data-height="673"
                  data-layout-iframe-id="inline-eAlelJLQv1ucn16rsfqu"
                  data-form-id="eAlelJLQv1ucn16rsfqu"
                  title="Website Quote Form"
                />
              </div>
              <Script src="https://link.msgsndr.com/js/form_embed.js" strategy="lazyOnload" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
