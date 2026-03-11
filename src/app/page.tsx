import { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/metadata';
import { Hero } from '@/components/sections/Hero';
import { ProcessSteps } from '@/components/sections/ProcessSteps';
import { TestimonialCards } from '@/components/sections/TestimonialCards';
import { CTASection } from '@/components/sections/CTASection';
import { FAQAccordion } from '@/components/sections/FAQAccordion';
import { HomeServiceCards } from '@/components/sections/HomeServiceCards';
import { StatsBar } from '@/components/sections/StatsBar';
import { MeetOwner } from '@/components/sections/MeetOwner';
import { Button } from '@/components/ui/Button';

export const metadata: Metadata = generatePageMetadata({
  title: 'Tomron Construction | Siding, Windows & Exterior Contractor — Lower Mainland BC',
  description:
    'Professional siding installation, window & door replacement, building envelope, and home renovation services in Maple Ridge, Coquitlam, Burnaby & the Lower Mainland. 10+ years experience. Free quotes.',
  path: '/',
});

const homeFaqs = [
  {
    question: 'How much does new siding cost in the Lower Mainland?',
    answer:
      'Siding costs vary based on material choice, home size, and complexity. Vinyl siding is the most affordable option, while fiber cement and wood siding command a premium. We provide free, detailed quotes for every project so you know exactly what to expect.',
  },
  {
    question: 'Do you offer free quotes?',
    answer:
      'Yes. Every project begins with a free on-site consultation where we inspect your home, discuss your goals, and provide a detailed written proposal with transparent pricing.',
  },
  {
    question: 'What areas do you serve?',
    answer:
      'We serve Maple Ridge, Coquitlam, Pitt Meadows, Burnaby, Abbotsford, and communities throughout the Lower Mainland. Contact us to confirm availability for your location.',
  },
  {
    question: 'Are you licensed and insured?',
    answer:
      'Yes. Tomron Construction is fully licensed and insured with comprehensive liability coverage for your protection. We stand behind every project with an industry-leading warranty.',
  },
  {
    question: 'How long does a siding installation take?',
    answer:
      'Most residential siding projects take 1 to 3 weeks depending on home size and complexity. Window and door replacements are typically completed within a few days. We provide a detailed timeline during your consultation.',
  },
];

export default function HomePage() {
  return (
    <>
      <Hero
        headline="We Build What Lasts."
        subheadline="Built on Family Values"
        description="Expert siding, window & door replacement, building envelope, and home renovations — delivered by a family-run team with 10+ years of craftsmanship across the Lower Mainland."
        backgroundImage="https://assets.cdn.filesafe.space/oyhdrza3SwoM8YuXOsja/media/69b1977c8cb25943dc3ccc5c.png"
      />

      <StatsBar />

      <HomeServiceCards />

      <ProcessSteps />

      <MeetOwner />

      {/* Projects Preview — Bento grid */}
      <section className="section-padding bg-neutral-50">
        <div className="container-wide">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-sm font-semibold text-brand-600 uppercase tracking-wider mb-2">Our Work</p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-charcoal-900">
                Recent Projects
              </h2>
            </div>
            <Button href="/gallery" variant="outline" size="sm" className="hidden sm:inline-flex">
              View Gallery
            </Button>
          </div>

          {/* Bento layout */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[200px] lg:auto-rows-[240px]">
            <div className="col-span-2 row-span-2 image-placeholder-premium rounded-lg" />
            <div className="image-placeholder-premium rounded-lg" />
            <div className="image-placeholder-premium rounded-lg" />
            <div className="col-span-2 image-placeholder-premium rounded-lg" />
          </div>

          <div className="sm:hidden mt-6">
            <Button href="/gallery" variant="outline" size="sm">
              View Gallery
            </Button>
          </div>
        </div>
      </section>

      <TestimonialCards />

      <FAQAccordion
        faqs={homeFaqs}
        title="Frequently Asked Questions"
        subtitle="FAQ"
      />

      <CTASection />
    </>
  );
}
