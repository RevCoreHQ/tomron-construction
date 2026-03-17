import { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/metadata';
import { siteConfig } from '@/data/site-config';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { ServiceCards } from '@/components/sections/ServiceCards';
import { CTASection } from '@/components/sections/CTASection';
import { JsonLd } from '@/components/seo/JsonLd';
import { breadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = generatePageMetadata({
  title: 'Our Services, Siding, Windows, Doors & Renovation | Tomron Construction',
  description: 'Explore our full range of services: siding installation, metal flashing, building envelope, home renovation, window replacement, and door installation. Serving the Lower Mainland, BC.',
  path: '/services',
});

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([
        { name: 'Home', url: siteConfig.url },
        { name: 'Services', url: `${siteConfig.url}/services` },
      ])} />
      <div className="section-padding pb-0">
        <div className="container-wide">
          <Breadcrumbs items={[{ label: 'Services', href: '/services' }]} />
          <div className="max-w-3xl mb-4">
            <p className="text-sm font-semibold text-brand-600 uppercase tracking-wider mb-2">What We Do</p>
            <h1 className="text-4xl sm:text-5xl font-display font-extrabold text-charcoal-900 mb-4">
              Complete Exterior & Renovation Services
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              From expert siding installation and building envelope protection to window and door replacement and full home renovations, Tomron Construction delivers every aspect of exterior and interior construction with over a decade of craftsmanship.
            </p>
          </div>
        </div>
      </div>

      <ServiceCards title="Exterior Services" subtitle="Siding & Envelope" category="exterior" />
      <ServiceCards title="Renovation Services" subtitle="Home Renovation" category="renovation" />
      <ServiceCards title="Windows & Doors" subtitle="Openings" category="openings" />

      <CTASection />
    </>
  );
}
