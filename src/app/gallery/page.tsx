import { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/metadata';
import { siteConfig } from '@/data/site-config';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { ProjectGrid } from '@/components/sections/ProjectGrid';
import { CTASection } from '@/components/sections/CTASection';
import { JsonLd } from '@/components/seo/JsonLd';
import { breadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = generatePageMetadata({
  title: 'Gallery — Siding, Windows & Renovation Projects | Tomron Construction',
  description: 'Browse our gallery of siding installations, window and door replacements, building envelope repairs, and renovation projects across Maple Ridge and the Lower Mainland, BC.',
  path: '/gallery',
});

export default function GalleryPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([
        { name: 'Home', url: siteConfig.url },
        { name: 'Gallery', url: `${siteConfig.url}/gallery` },
      ])} />
      <div className="section-padding pb-0">
        <div className="container-wide">
          <Breadcrumbs items={[{ label: 'Gallery', href: '/gallery' }]} />
          <div className="max-w-3xl mb-4">
            <p className="text-sm font-semibold text-brand-600 uppercase tracking-wider mb-2">Our Work</p>
            <h1 className="text-4xl sm:text-5xl font-display font-extrabold text-charcoal-900 mb-4">
              Craftsmanship That Speaks for Itself
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              Every project represents a homeowner who trusted Tomron Construction to protect and transform their home. Browse our siding, window, door, and renovation work and imagine what we can do for you.
            </p>
          </div>
        </div>
      </div>
      <ProjectGrid />
      <CTASection headline="Love What You See?" description="Let's create something just as impressive for your home. Get a free estimate today." />
    </>
  );
}
