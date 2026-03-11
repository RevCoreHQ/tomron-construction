import { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/metadata';
import { JsonLd } from '@/components/seo/JsonLd';
import { faqSchema } from '@/lib/schema';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { FAQAccordion } from '@/components/sections/FAQAccordion';
import { CTASection } from '@/components/sections/CTASection';

const allFaqs = [
  { question: 'How much does it cost to build a swimming pool in Utah?', answer: 'Custom pool construction typically ranges from $50,000 to $150,000+ depending on size, features, and site conditions. We provide free estimates for accurate pricing on your specific project.' },
  { question: 'How long does pool construction take?', answer: 'Most pools take 8 to 14 weeks from groundbreaking to completion. Weather, permits, and custom features can affect the timeline.' },
  { question: 'Do you handle permits?', answer: 'Yes. We manage the entire permit process including building permits, inspections, and HOA approvals.' },
  { question: 'Can I see a 3D design before you start building?', answer: 'Absolutely. A 3D design rendering is a standard part of our process. You review and approve every detail before construction begins.' },
  { question: 'What areas do you serve?', answer: 'We serve Saratoga Springs, Bountiful, and surrounding Utah communities including Lehi, Eagle Mountain, and Draper. Call to confirm availability for your location.' },
  { question: 'Are you licensed and insured?', answer: 'Yes. Timberline Falls is fully licensed, bonded, and insured with comprehensive liability coverage.' },
  { question: 'Do you offer financing?', answer: 'We can discuss financing options during your consultation. Contact us to learn about available arrangements for your project.' },
  { question: 'How thick should a concrete driveway be?', answer: 'At least 4 inches on a compacted gravel base. For heavy vehicles or RVs, we recommend 6 inches with rebar reinforcement.' },
  { question: 'What is included in landscape construction?', answer: 'Our landscape services cover design, site prep, grading, irrigation, planting, sod/hydroseeding, hardscaping, lighting, and full cleanup.' },
  { question: 'How long does artificial turf last?', answer: 'Quality artificial turf lasts 15 to 20 years with minimal maintenance. UV-stabilized fibers resist fading in Utah sun.' },
  { question: 'Do retaining walls need permits in Utah?', answer: 'Walls over 4 feet typically require a building permit and may need engineered drawings. We handle permitting as part of our service.' },
  { question: 'What is the difference between stamped and regular concrete?', answer: 'Stamped concrete is imprinted with patterns and colored to resemble stone, brick, or tile. It costs more than plain concrete but less than the materials it imitates.' },
];

export const metadata: Metadata = generatePageMetadata({
  title: 'FAQ — Pool, Landscape & Concrete Questions | Timberline Falls UT',
  description: 'Answers to common questions about pool construction costs, timelines, permits, landscaping, concrete driveways, and more. Timberline Falls — Utah.',
  path: '/faq',
});

export default function FAQPage() {
  return (
    <>
      <JsonLd data={faqSchema(allFaqs)} />
      <div className="section-padding pb-0">
        <div className="container-narrow">
          <Breadcrumbs items={[{ label: 'FAQ', href: '/faq' }]} />
          <div className="text-center mb-4">
            <p className="text-brand-600 font-medium text-sm tracking-wide uppercase mb-3">Questions & Answers</p>
            <h1 className="text-4xl sm:text-5xl font-display font-bold text-slate-900 mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-slate-600">
              Find answers to the most common questions about our pool, landscape, and concrete services.
            </p>
          </div>
        </div>
      </div>
      <FAQAccordion faqs={allFaqs} />
      <CTASection headline="Still Have Questions?" description="Call us at (801) 502-0306 or request a free consultation. We are happy to answer anything." />
    </>
  );
}
