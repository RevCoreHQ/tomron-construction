import { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/metadata';
import { siteConfig } from '@/data/site-config';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { ServiceCards } from '@/components/sections/ServiceCards';
import { CTASection } from '@/components/sections/CTASection';
import { JsonLd } from '@/components/seo/JsonLd';
import { breadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = generatePageMetadata({
  title: 'Our Services — Pool, Landscape & Concrete | Timberline Falls UT',
  description: 'Explore our full range of outdoor living services: pool construction, 3D design, landscaping, artificial turf, outdoor kitchens, concrete driveways, retaining walls, and more.',
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
            <p className="text-brand-600 font-medium text-sm tracking-wide uppercase mb-3">What We Do</p>
            <h1 className="text-4xl sm:text-5xl font-display font-bold text-slate-900 mb-4">
              Complete Outdoor Living Services
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              From custom swimming pools to complete landscape transformations and expert concrete work, Timberline Falls delivers every aspect of outdoor construction with 20+ years of craftsmanship.
            </p>
          </div>
        </div>
      </div>

      <ServiceCards title="Pool Services" subtitle="Swimming Pools" category="pools" />
      <ServiceCards title="Landscape Services" subtitle="Landscaping" category="landscape" />
      <ServiceCards title="Concrete Services" subtitle="Concrete" category="concrete" />

      <CTASection />
    </>
  );
}
