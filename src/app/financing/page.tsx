import { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/metadata';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { CTASection } from '@/components/sections/CTASection';
import { Button } from '@/components/ui/Button';

export const metadata: Metadata = generatePageMetadata({
  title: 'Financing Options — Pool & Outdoor Living Projects | Timberline Falls UT',
  description: 'Ask about financing options for your pool construction, landscaping, or concrete project. Contact Timberline Falls for details.',
  path: '/financing',
});

export default function FinancingPage() {
  return (
    <>
      <div className="section-padding">
        <div className="container-narrow">
          <Breadcrumbs items={[{ label: 'Financing', href: '/financing' }]} />
          <p className="text-brand-600 font-medium text-sm tracking-wide uppercase mb-3">Financing</p>
          <h1 className="text-4xl sm:text-5xl font-display font-bold text-slate-900 mb-6">
            Flexible Options for Your Project
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed mb-6">
            A custom pool, landscape, or concrete project is a significant investment in your home. We understand that budgeting for a large project requires planning, and we want to make the process as accessible as possible.
          </p>
          <p className="text-lg text-slate-600 leading-relaxed mb-8">
            During your free consultation, ask about available financing arrangements. We can discuss payment structures and options that work for your budget and project scope. Every situation is unique, and we are happy to work with you to find the right fit.
          </p>
          <Button href="/contact" size="lg">Ask About Financing Options</Button>
        </div>
      </div>
      <CTASection variant="light" headline="Ready to Get Started?" description="Contact us for a free estimate and ask about financing during your consultation." />
    </>
  );
}
