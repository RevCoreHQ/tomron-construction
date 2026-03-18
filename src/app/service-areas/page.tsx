import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, ArrowRight, Phone } from 'lucide-react';
import { serviceAreas } from '@/data/service-areas';
import { siteConfig } from '@/data/site-config';
import { generatePageMetadata } from '@/lib/metadata';
import { JsonLd } from '@/components/seo/JsonLd';
import { breadcrumbSchema } from '@/lib/schema';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Button } from '@/components/ui/Button';
import { CTASection } from '@/components/sections/CTASection';
import { ServiceAreaMap } from '@/components/sections/ServiceAreaMap';

export const metadata: Metadata = generatePageMetadata({
  title: 'Service Areas in the Lower Mainland | Tomron Construction',
  description:
    'Tomron Construction serves Maple Ridge, Coquitlam, Surrey, Burnaby, Vancouver & 16 Lower Mainland communities. Siding, windows & renovations.',
  path: '/service-areas',
});

export default function ServiceAreasPage() {
  const primary = serviceAreas.filter((a) => a.isPrimary);
  const extended = serviceAreas.filter((a) => !a.isPrimary);

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: 'Home', url: siteConfig.url },
            { name: 'Service Areas', url: `${siteConfig.url}/service-areas` },
          ]),
        ]}
      />

      {/* Hero */}
      <section className="relative py-16 lg:py-24 bg-charcoal-900 overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Service Areas', href: '/service-areas' }]} variant="dark" />
          <div className="max-w-3xl mt-4">
            <h1 className="text-4xl sm:text-5xl font-display font-extrabold text-white mb-6">
              Areas We Serve in the Lower Mainland
            </h1>
            <p className="text-xl text-white/60 leading-relaxed mb-8">
              Tomron Construction provides expert siding installation, window and door replacement, building envelope solutions, and home renovations to 16 communities throughout the Lower Mainland and Fraser Valley.
            </p>
            <Button href="/contact" size="lg">
              Get Your Free Quote
            </Button>
          </div>
        </div>
      </section>

      <ServiceAreaMap />

      {/* All Service Areas */}
      <section className="section-padding">
        <div className="container-wide">
          <p className="text-sm font-semibold text-brand-600 uppercase tracking-wider mb-2">Our Coverage</p>
          <h2 className="text-3xl font-display font-extrabold text-charcoal-900 mb-2">Service Areas</h2>
          <p className="text-slate-500 mb-8">Communities we serve across the Lower Mainland and Fraser Valley.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {primary.map((area) => (
              <Link
                key={area.slug}
                href={`/service-areas/${area.slug}`}
                className="group relative p-6 bg-white rounded-lg border border-neutral-200 hover:border-brand-300 hover:-translate-y-0.5 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-brand-50 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-brand-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-display font-bold text-charcoal-900 group-hover:text-brand-600 transition-colors mb-2">
                      {area.city}, {area.state}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed mb-3">{area.intro.slice(0, 120)}&hellip;</p>
                    <span className="inline-flex items-center gap-1 text-sm font-semibold text-brand-600">
                      View services <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Extended Areas */}
      {extended.length > 0 && (
        <section className="section-padding bg-neutral-50">
          <div className="container-wide">
            <h2 className="text-3xl font-display font-extrabold text-charcoal-900 mb-2">Extended Service Areas</h2>
            <p className="text-slate-500 mb-8">
              We regularly serve these communities. Call to confirm availability for your address.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {extended.map((area) => (
                <Link
                  key={area.slug}
                  href={`/service-areas/${area.slug}`}
                  className="group p-6 bg-white rounded-lg border border-neutral-200 hover:border-brand-300 hover:-translate-y-0.5 transition-all"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <MapPin className="w-5 h-5 text-brand-600" />
                    <h3 className="text-lg font-display font-bold text-charcoal-900 group-hover:text-brand-600 transition-colors">
                      {area.city}, {area.state}
                    </h3>
                  </div>
                  <p className="text-slate-500 text-sm leading-relaxed mb-3">{area.intro.slice(0, 100)}&hellip;</p>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-brand-600">
                    Learn more <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Don't see your area? */}
      <section className="section-padding">
        <div className="container-wide max-w-2xl">
          <h2 className="text-3xl font-display font-extrabold text-charcoal-900 mb-4">
            Don&apos;t See Your Community?
          </h2>
          <p className="text-slate-500 leading-relaxed mb-8">
            We serve many communities across the Lower Mainland and Fraser Valley. Give us a call to see if we can help with your project.
          </p>
          <Button href={`tel:${siteConfig.phoneRaw}`} size="lg" variant="outline">
            <Phone className="w-4 h-4 mr-2" />
            Call {siteConfig.phone}
          </Button>
        </div>
      </section>

      <CTASection />
    </>
  );
}
