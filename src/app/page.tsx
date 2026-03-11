import { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/metadata';
import { Hero } from '@/components/sections/Hero';
import { TrustStrip } from '@/components/sections/TrustStrip';
import { ProcessSteps } from '@/components/sections/ProcessSteps';
import { TestimonialCards } from '@/components/sections/TestimonialCards';
import { CTASection } from '@/components/sections/CTASection';
import { FAQAccordion } from '@/components/sections/FAQAccordion';
import { HomeServiceCards } from '@/components/sections/HomeServiceCards';
import { StatsBar } from '@/components/sections/StatsBar';
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
        headline="Your Home Deserves Better Than Ordinary"
        subheadline="Built on Family Values — Lower Mainland's Trusted Exterior Contractor"
        description="Expert siding installation, window & door replacement, building envelope solutions, and home renovations — delivered by a family-run team with over a decade of craftsmanship across Maple Ridge, Coquitlam, and the Lower Mainland."
      />

      <TrustStrip />

      <HomeServiceCards />

      <StatsBar />

      <ProcessSteps />

      {/* Projects Preview */}
      <section className="section-padding bg-gradient-to-b from-sand-50 via-sand-50 to-white">
        <div className="container-wide">
          <div className="text-center mb-12">
            <p className="inline-flex items-center gap-2 text-sm font-medium tracking-wider uppercase mb-3">
              <span className="w-6 h-px bg-accent-gold" />
              <span className="gradient-text-gold">Our Work</span>
              <span className="w-6 h-px bg-accent-gold" />
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-slate-900 mb-4">
              Craftsmanship That Speaks for Itself
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Browse our portfolio of completed siding installations, window replacements, and renovation projects across the Lower Mainland.
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            {['Siding & Cladding', 'Window Replacement', 'Building Envelope', 'Home Renovation', 'Door Replacement', 'Metal Flashing'].map((label, i) => (
              <div key={i} className="image-placeholder-premium aspect-[4/3] rounded-2xl shadow-soft flex items-center justify-center">
                <span className="text-white/30 text-xs font-medium tracking-widest uppercase">{label}</span>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button href="/gallery">View Full Gallery</Button>
          </div>
        </div>
      </section>

      <TestimonialCards />

      <FAQAccordion
        faqs={homeFaqs}
        title="Frequently Asked Questions"
        subtitle="Common Questions"
      />

      <CTASection />
    </>
  );
}
