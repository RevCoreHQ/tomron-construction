import { Metadata } from 'next';
import Image from 'next/image';
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

export const metadata: Metadata = generatePageMetadata({
  title: 'Service Areas in Utah — Timberline Falls',
  description:
    'Timberline Falls serves Utah County, Salt Lake County, Davis County, Summit County, Tooele County, Box Elder County, and surrounding Utah communities with pool construction, landscaping, and concrete services.',
  path: '/service-areas',
});

export default function ServiceAreasPage() {
  const primary = serviceAreas.filter((a) => a.isPrimary);
  const nearby = serviceAreas.filter((a) => !a.isPrimary);

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
      <section className="relative py-16 lg:py-24 bg-gradient-to-br from-slate-900 via-brand-950 to-slate-900 overflow-hidden">
        <Image
          src="https://assets.cdn.filesafe.space/VpxNeZuIvxjzZljfxNjd/media/69a0b2ed9a0c18b2f11513c3.png"
          alt=""
          fill
          priority
          sizes="100vw"
          quality={70}
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-slate-950/75" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Service Areas', href: '/service-areas' }]} variant="dark" />
          <div className="max-w-3xl mt-4">
            <h1 className="text-4xl sm:text-5xl font-display font-bold text-white mb-6">
              Areas We Serve in Utah
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed mb-8">
              Timberline Falls provides custom pool construction, landscape design, and concrete services throughout the Wasatch Front. We proudly serve homeowners across Utah County, Salt Lake County, Davis County, Summit County, Tooele County, and Box Elder County.
            </p>
            <Button href="/contact" size="lg">
              Get Your Free Estimate
            </Button>
          </div>
        </div>
      </section>

      {/* Primary Areas */}
      <section className="section-padding">
        <div className="container-wide">
          <h2 className="text-3xl font-display font-bold text-slate-900 mb-2">Primary Service Areas</h2>
          <p className="text-slate-600 mb-8">Communities where we are based and serve regularly.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {primary.map((area) => (
              <Link
                key={area.slug}
                href={`/service-areas/${area.slug}`}
                className="group relative p-8 bg-white rounded-2xl border border-slate-100 shadow-soft hover:shadow-card hover:-translate-y-0.5 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-brand-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-bold text-slate-900 group-hover:text-brand-600 transition-colors mb-2">
                      {area.city}, {area.state}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-4">{area.intro.slice(0, 140)}…</p>
                    <span className="inline-flex items-center gap-1 text-sm font-medium text-brand-600">
                      View services in {area.city} <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Nearby Areas */}
      <section className="section-padding bg-sand-50">
        <div className="container-wide">
          <h2 className="text-3xl font-display font-bold text-slate-900 mb-2">Nearby Communities We Serve</h2>
          <p className="text-slate-600 mb-8">
            We regularly serve these communities. Call to confirm availability for your address.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {nearby.map((area) => (
              <Link
                key={area.slug}
                href={`/service-areas/${area.slug}`}
                className="group p-6 bg-white rounded-2xl border border-slate-100 shadow-soft hover:shadow-card hover:-translate-y-0.5 transition-all"
              >
                <div className="flex items-center gap-3 mb-3">
                  <MapPin className="w-5 h-5 text-brand-500" />
                  <h3 className="text-lg font-display font-bold text-slate-900 group-hover:text-brand-600 transition-colors">
                    {area.city}, {area.state}
                  </h3>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed mb-3">{area.intro.slice(0, 100)}…</p>
                <span className="inline-flex items-center gap-1 text-sm font-medium text-brand-600">
                  Learn more <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Don&apos;t see your area? */}
      <section className="section-padding">
        <div className="container-wide text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-display font-bold text-slate-900 mb-4">
            Don&apos;t See Your City?
          </h2>
          <p className="text-slate-600 leading-relaxed mb-8">
            We serve many communities across the Wasatch Front and are happy to discuss projects outside our listed service areas. Give us a call to see if we can help with your project.
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
