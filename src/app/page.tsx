import { Metadata } from 'next';
import Link from 'next/link';
import { generatePageMetadata } from '@/lib/metadata';
import { Hero } from '@/components/sections/Hero';
import { ProcessSteps } from '@/components/sections/ProcessSteps';
import { TestimonialCards } from '@/components/sections/TestimonialCards';
import { CTASection } from '@/components/sections/CTASection';
import { FAQAccordion } from '@/components/sections/FAQAccordion';
import { HomeServiceCards } from '@/components/sections/HomeServiceCards';
import { StatsBar } from '@/components/sections/StatsBar';
import { MeetOwner } from '@/components/sections/MeetOwner';
import { RecentProjects } from '@/components/sections/RecentProjects';

export const metadata: Metadata = generatePageMetadata({
  title: 'Tomron Construction | Siding & Exterior Contractor BC',
  description:
    'Professional siding, window & door replacement, and renovation services in Maple Ridge & the Lower Mainland, BC. Call (604) 754-9392 for a free quote.',
  path: '/',
  keywords: ['siding contractor', 'siding installation', 'window replacement', 'door replacement', 'building envelope', 'home renovation', 'Maple Ridge', 'Coquitlam', 'Lower Mainland', 'BC', 'exterior contractor'],
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
        description="Expert siding, window & door replacement, building envelope, and home renovations, delivered by a family-run team with 10+ years of craftsmanship across the Lower Mainland."
        backgroundImage="https://assets.cdn.filesafe.space/oyhdrza3SwoM8YuXOsja/media/69b1977c8cb25943dc3ccc5c.png"
      />

      <StatsBar />

      <HomeServiceCards />

      <ProcessSteps />

      <MeetOwner />

      <RecentProjects />

      <TestimonialCards />

      {/* Server-rendered content for SEO crawlers */}
      <section className="section-padding bg-white">
        <div className="container-narrow">
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-charcoal-900 mb-6">
            Trusted Siding & Exterior Contractor in the Lower Mainland
          </h2>
          <div className="prose prose-lg prose-slate max-w-none space-y-6">
            <p>
              Tomron Construction is a family-owned siding and exterior contractor based in Maple Ridge, BC. Founded by Brendan Prendergast in 2014, we have spent over a decade building a reputation for quality craftsmanship, honest pricing, and reliable service across the Lower Mainland. Every project we take on, whether it is a complete siding replacement, a set of new windows, or a full home renovation, is treated with the same level of care and attention to detail.
            </p>
            <p>
              We specialize in protecting and improving Lower Mainland homes through six core services. Our{' '}
              <Link href="/services/exterior-siding-cladding" className="text-brand-600 font-semibold hover:text-brand-700">siding and cladding installation</Link>{' '}
              covers vinyl, fiber cement, engineered wood, and composite materials. We handle{' '}
              <Link href="/services/window-replacement" className="text-brand-600 font-semibold hover:text-brand-700">window replacement</Link>{' '}
              for casement, sliding, picture, and European tilt-and-turn styles, along with{' '}
              <Link href="/services/door-replacement" className="text-brand-600 font-semibold hover:text-brand-700">door replacement</Link>{' '}
              for entry, patio, and sliding doors. Our{' '}
              <Link href="/services/building-envelope" className="text-brand-600 font-semibold hover:text-brand-700">building envelope</Link>{' '}
              services address air barriers, moisture management, and insulation, while our{' '}
              <Link href="/services/metal-flashing" className="text-brand-600 font-semibold hover:text-brand-700">metal flashing</Link>{' '}
              work provides custom-fabricated protection at every vulnerable junction on your home. For larger projects, our{' '}
              <Link href="/services/home-renovation" className="text-brand-600 font-semibold hover:text-brand-700">home renovation</Link>{' '}
              services cover everything from single-room updates to complete transformations.
            </p>

            <h3 className="text-2xl font-display font-bold text-charcoal-900">Why Lower Mainland Homes Need Expert Exterior Work</h3>
            <p>
              The Lower Mainland receives over 1,200 millimetres of rainfall annually, making it one of the wettest regions in Canada. This constant moisture exposure puts enormous stress on your home&apos;s exterior. Aging or improperly installed siding allows water to penetrate the building envelope, leading to rot, mould, structural damage, and higher energy bills. Proper siding installation, precision flashing, sealed windows and doors, and a functioning building envelope are not upgrades but necessities for any home in this climate.
            </p>
            <p>
              Tomron Construction installs exterior systems specifically engineered for BC&apos;s rain-heavy conditions. We use premium moisture barriers, custom-bent flashing at every transition point, and materials rated for decades of performance in the Pacific Northwest. Our work is backed by manufacturer warranties and our own commitment to standing behind every project we complete.
            </p>

            <h3 className="text-2xl font-display font-bold text-charcoal-900">Serving 16 Communities Across the Lower Mainland</h3>
            <p>
              Based in{' '}
              <Link href="/service-areas/maple-ridge" className="text-brand-600 font-semibold hover:text-brand-700">Maple Ridge</Link>, we serve homeowners across{' '}
              <Link href="/service-areas/coquitlam" className="text-brand-600 font-semibold hover:text-brand-700">Coquitlam</Link>,{' '}
              <Link href="/service-areas/burnaby" className="text-brand-600 font-semibold hover:text-brand-700">Burnaby</Link>,{' '}
              <Link href="/service-areas/surrey" className="text-brand-600 font-semibold hover:text-brand-700">Surrey</Link>,{' '}
              <Link href="/service-areas/vancouver" className="text-brand-600 font-semibold hover:text-brand-700">Vancouver</Link>,{' '}
              <Link href="/service-areas/langley" className="text-brand-600 font-semibold hover:text-brand-700">Langley</Link>,{' '}
              <Link href="/service-areas/richmond" className="text-brand-600 font-semibold hover:text-brand-700">Richmond</Link>,{' '}
              <Link href="/service-areas/abbotsford" className="text-brand-600 font-semibold hover:text-brand-700">Abbotsford</Link>,{' '}
              <Link href="/service-areas/delta" className="text-brand-600 font-semibold hover:text-brand-700">Delta</Link>,{' '}
              <Link href="/service-areas/white-rock" className="text-brand-600 font-semibold hover:text-brand-700">White Rock</Link>,{' '}
              <Link href="/service-areas/new-westminster" className="text-brand-600 font-semibold hover:text-brand-700">New Westminster</Link>,{' '}
              <Link href="/service-areas/pitt-meadows" className="text-brand-600 font-semibold hover:text-brand-700">Pitt Meadows</Link>,{' '}
              <Link href="/service-areas/port-coquitlam" className="text-brand-600 font-semibold hover:text-brand-700">Port Coquitlam</Link>,{' '}
              <Link href="/service-areas/tsawwassen" className="text-brand-600 font-semibold hover:text-brand-700">Tsawwassen</Link>,{' '}
              <Link href="/service-areas/mission" className="text-brand-600 font-semibold hover:text-brand-700">Mission</Link>, and{' '}
              <Link href="/service-areas/chilliwack" className="text-brand-600 font-semibold hover:text-brand-700">Chilliwack</Link>.
              Whether your home is a heritage property in Vancouver, a family home in Coquitlam, or a newer build in Langley, we have the experience and expertise to deliver results that last.
            </p>

            <h3 className="text-2xl font-display font-bold text-charcoal-900">Our Approach to Every Project</h3>
            <p>
              Every project starts with a free on-site consultation where we inspect your home, discuss your goals, and identify any underlying issues that need to be addressed. You receive a detailed written proposal with transparent pricing before any work begins. During construction, our experienced crew manages every phase with clear communication, clean jobsites, and disciplined execution. We finish with a walkthrough to ensure every detail meets our standards and yours. Call{' '}
              <a href="tel:+16047549392" className="text-brand-600 font-semibold hover:text-brand-700">(604) 754-9392</a>{' '}
              or{' '}
              <Link href="/contact" className="text-brand-600 font-semibold hover:text-brand-700">request your free quote online</Link>.
            </p>
          </div>
        </div>
      </section>

      <FAQAccordion
        faqs={homeFaqs}
        title="Frequently Asked Questions"
        subtitle="FAQ"
      />

      <CTASection />
    </>
  );
}
