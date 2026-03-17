import { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/metadata';
import { JsonLd } from '@/components/seo/JsonLd';
import { faqSchema } from '@/lib/schema';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { FAQAccordion } from '@/components/sections/FAQAccordion';
import { CTASection } from '@/components/sections/CTASection';

const allFaqs = [
  { question: 'What types of siding do you install?', answer: 'We install a wide range of siding materials including vinyl siding, fibre cement (such as James Hardie), engineered wood, cedar, and aluminum. We will help you choose the best option for your home based on durability, aesthetics, and budget.' },
  { question: 'How much does siding replacement cost?', answer: 'Siding costs vary depending on the material, the size of your home, and any underlying repairs needed. We provide free on-site estimates with detailed written proposals so you know exactly what to expect before any work begins.' },
  { question: 'How long does a siding installation take?', answer: 'Most residential siding projects take one to three weeks depending on the size of the home and scope of work. We will provide a clear timeline during your consultation.' },
  { question: 'Do you replace windows and doors?', answer: 'Yes. We handle full window and door replacements, including removal of the old units, proper flashing and sealing, insulation, and finishing trim. We work with leading manufacturers to provide energy-efficient options that suit your home.' },
  { question: 'What is a building envelope and why does it matter?', answer: 'The building envelope is the system of materials that separates the interior of your home from the exterior, including siding, windows, doors, moisture barriers, insulation, and flashing. A properly functioning building envelope prevents water intrusion, air leakage, and energy loss, which is especially critical in the rainy Lower Mainland climate.' },
  { question: 'Do you handle building envelope repairs?', answer: 'Absolutely. We diagnose and repair building envelope failures including moisture damage, rot, failed flashing, and inadequate weather barriers. We address the root cause of the problem, not just the symptoms.' },
  { question: 'What areas do you serve?', answer: 'We are based in Maple Ridge and serve homeowners across the Lower Mainland, BC. Contact us to confirm availability for your specific location.' },
  { question: 'Are you licensed and insured?', answer: 'Yes. Tomron Construction is fully licensed and carries comprehensive insurance coverage to protect you and your property throughout the project.' },
  { question: 'Do you offer free estimates?', answer: 'Yes. Every project begins with a free on-site consultation where we assess your home, discuss your goals, and provide a detailed written proposal with transparent pricing.' },
  { question: 'How do I know if my siding needs to be replaced?', answer: 'Common signs include warping, cracking, bubbling, peeling paint, visible rot, mould or mildew growth, increased energy bills, or moisture damage inside your walls. If you notice any of these, we recommend a professional assessment.' },
  { question: 'Can you match new siding to my existing exterior?', answer: 'In many cases, yes. We work to match materials, colours, and profiles as closely as possible. If an exact match is not available, we can recommend complementary options or discuss a full re-side for a consistent look.' },
  { question: 'Do you handle permits for renovation projects?', answer: 'Yes. When permits are required, we manage the entire process including applications, documentation, and scheduling inspections so you do not have to worry about it.' },
];

export const metadata: Metadata = generatePageMetadata({
  title: 'FAQ | Tomron Construction',
  description: 'Answers about siding costs, window replacement timelines, building envelope repair, permits, and more. Serving Maple Ridge, Coquitlam & the Lower Mainland, BC.',
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
            <p className="text-sm font-semibold text-brand-600 uppercase tracking-wider mb-2">Questions & Answers</p>
            <h1 className="text-4xl sm:text-5xl font-display font-extrabold text-charcoal-900 mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-slate-600">
              Find answers to the most common questions about our siding, window, door, building envelope, and renovation services.
            </p>
          </div>
        </div>
      </div>
      <FAQAccordion faqs={allFaqs} />
      <CTASection headline="Still Have Questions?" description="Call us at (604) 754-9392 or request a free consultation. We are happy to answer anything." />
    </>
  );
}
