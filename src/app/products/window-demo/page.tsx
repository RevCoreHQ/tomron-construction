import { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/metadata';
import { JsonLd } from '@/components/seo/JsonLd';
import { breadcrumbSchema } from '@/lib/schema';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { CTASection } from '@/components/sections/CTASection';
import { FAQAccordion } from '@/components/sections/FAQAccordion';
import { WindowDemo } from '@/components/sections/WindowDemo';
import type { FAQ } from '@/data/services';

export const metadata: Metadata = generatePageMetadata({
  title: 'Interactive Window Technology Demo | Tomron Construction',
  description:
    'Explore how modern windows work with our interactive demo. Learn about U-factors, SHGC, Low-E coatings, argon gas fills, and compare single, double, and triple-pane performance.',
  path: '/products/window-demo',
  keywords: [
    'window technology explained',
    'how Low-E windows work',
    'U-factor explained',
    'SHGC window ratings',
    'double vs triple pane windows',
  ],
});

const faqs: FAQ[] = [
  {
    question: 'What is U-factor and what number should I look for?',
    answer:
      'U-factor measures how much heat passes through a window in watts per square metre per degree (W/m²·K). Lower is better. A single-pane window has a U-factor around 5.0, while a modern double-pane with Low-E and argon is 1.4–1.6. For BC\'s climate (Zone 4–6), aim for 1.40 or lower to qualify for Energy Star and rebate programs.',
  },
  {
    question: 'What is SHGC and does higher or lower matter more?',
    answer:
      'Solar Heat Gain Coefficient measures how much solar radiation passes through the glass on a scale of 0 to 1. It depends on orientation: south-facing windows benefit from higher SHGC (0.30–0.40) to gain free solar heat in winter, while west-facing windows should have lower SHGC (0.20–0.25) to prevent summer overheating. Most BC homes do well with a balanced SHGC between 0.22 and 0.35.',
  },
  {
    question: 'What is the difference between Low-E 270 and Low-E 366?',
    answer:
      'Both are Cardinal Glass coatings. Low-E 270 is a "passive" double-silver coating with SHGC ~0.34 — it lets in more solar heat, ideal for north and east windows. Low-E 366 is a "solar control" triple-silver coating with SHGC ~0.22 — it blocks more heat gain, ideal for south and west exposures. Many homes benefit from using both types based on window orientation.',
  },
  {
    question: 'Is triple-pane worth the extra cost in BC?',
    answer:
      'Triple-pane adds 30–50% to the glass cost but provides a U-factor of 0.8–1.0 (vs 1.4–1.6 for double). It\'s most worthwhile for large north-facing windows, bedrooms where you want zero drafts, noisy street-facing windows (adds significant sound reduction), and homes pursuing Passive House or Net-Zero certification. For most BC homes, double-pane with Low-E and argon offers the best value.',
  },
  {
    question: 'What does argon gas actually do?',
    answer:
      'Argon is an inert gas that\'s 34% less conductive than air. When sealed between glass panes, it slows both convection (gas movement) and conduction (direct heat transfer). This improves the insulating value by about 30% compared to air-filled units. It\'s colourless, odourless, non-toxic, and will slowly dissipate over 20+ years without any safety concern.',
  },
  {
    question: 'How do I read a window energy label?',
    answer:
      'Look for four key numbers: U-factor (heat loss, lower is better), SHGC (solar heat gain, context-dependent), VT or Visible Transmittance (natural light, 0.40–0.70 is typical), and ER or Energy Rating (net energy performance, higher is better — 25+ minimum for Energy Star in Zone 2). The ER is unique to Canada and accounts for both heat loss and solar gains.',
  },
];

export default function WindowDemoPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Products', url: '/products' },
          { name: 'Window Technology Demo', url: '/products/window-demo' },
        ])}
      />

      {/* Hero */}
      <section className="relative py-16 lg:py-24 bg-gradient-to-b from-neutral-50 to-white overflow-hidden">
        <div className="container-wide">
          <Breadcrumbs
            items={[
              { label: 'Products', href: '/products' },
              { label: 'Window Technology Demo', href: '/products/window-demo' },
            ]}
          />

          <div className="max-w-3xl mt-8">
            <p className="text-sm font-bold text-brand-600 uppercase tracking-wider mb-3">
              Interactive Learning Tool
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-charcoal-900 mb-6 leading-tight">
              How Modern Windows <span className="text-brand-600">Actually</span> Work
            </h1>
            <p className="text-lg sm:text-xl text-slate-500 leading-relaxed max-w-2xl">
              Take a guided tour through a high-performance window cross-section. Understand what each component does, why it matters, and how different glass configurations compare for your BC home.
            </p>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="section-padding pt-0">
        <div className="container-wide">
          <WindowDemo />
        </div>
      </section>

      <FAQAccordion
        faqs={faqs}
        title="Window Performance FAQ"
        subtitle="Common Questions"
      />

      <CTASection
        headline="Ready to Upgrade Your Windows?"
        description="Get a free consultation to find the right glass and frame combination for your home. We'll recommend specific products based on your orientation, budget, and goals."
      />
    </>
  );
}
