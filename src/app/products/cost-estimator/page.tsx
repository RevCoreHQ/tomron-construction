import { Metadata } from 'next';
import { Calculator } from 'lucide-react';
import { siteConfig } from '@/data/site-config';
import { generatePageMetadata } from '@/lib/metadata';
import { JsonLd } from '@/components/seo/JsonLd';
import { breadcrumbSchema } from '@/lib/schema';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { CostEstimator } from '@/components/sections/CostEstimator';
import { CTASection } from '@/components/sections/CTASection';

export const metadata: Metadata = generatePageMetadata({
  title: 'Cost Estimator | Tomron Construction',
  description:
    'Get an instant ballpark estimate for your window replacement, siding installation, or full exterior renovation project in BC.',
  path: '/products/cost-estimator',
  keywords: ['window replacement cost BC', 'siding cost calculator', 'exterior renovation estimate', 'home upgrade cost'],
});

export default function CostEstimatorPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: 'Home', url: siteConfig.url },
            { name: 'Products & Partners', url: `${siteConfig.url}/products` },
            { name: 'Cost Estimator', url: `${siteConfig.url}/products/cost-estimator` },
          ]),
        ]}
      />

      {/* Hero */}
      <section className="relative py-16 lg:py-24 bg-charcoal-900 overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: 'Products & Partners', href: '/products' },
              { label: 'Cost Estimator', href: '/products/cost-estimator' },
            ]}
            variant="dark"
          />
          <div className="max-w-3xl mt-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold bg-brand-600/20 text-brand-400 rounded-md mb-4">
              <Calculator className="w-3.5 h-3.5" />
              Interactive Tool
            </div>
            <h1 className="text-4xl sm:text-5xl font-display font-extrabold text-white mb-6">
              Project Cost Estimator
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-white/60 leading-relaxed">
              Get a ballpark estimate for your window, siding, or full exterior upgrade project. Select your options below and receive an instant cost range to help with budgeting.
            </p>
          </div>
        </div>
      </section>

      {/* Estimator */}
      <section className="section-padding bg-gradient-to-br from-brand-50/30 via-white to-neutral-50">
        <div className="container-wide">
          <CostEstimator />
        </div>
      </section>

      <CTASection
        headline="Want an Exact Number?"
        description="This estimator provides ballpark ranges. For a precise quote tailored to your home, contact us for a free on-site assessment. We'll measure everything, assess your existing conditions, and provide a detailed written proposal."
      />
    </>
  );
}
