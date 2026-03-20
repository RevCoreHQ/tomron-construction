import { Metadata } from 'next';
import Link from 'next/link';
import { generatePageMetadata } from '@/lib/metadata';
import { Hero } from '@/components/sections/Hero';

import { CTASection } from '@/components/sections/CTASection';
import { FAQAccordion } from '@/components/sections/FAQAccordion';
import { HomeServiceCards } from '@/components/sections/HomeServiceCards';
import { StatsBar } from '@/components/sections/StatsBar';
import { MeetOwner } from '@/components/sections/MeetOwner';
import { RecentProjects } from '@/components/sections/RecentProjects';
import { ReviewWall } from '@/components/sections/ReviewWall';


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

      <MeetOwner />

      <RecentProjects />

      <ReviewWall />

      {/* Server-rendered SEO content */}
      <section className="section-padding bg-gradient-to-b from-neutral-50 to-white">
        <div className="container-wide">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-brand-600 uppercase tracking-wider mb-2">Why Tomron</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-charcoal-900">
              Trusted Exterior Contractor in the Lower Mainland
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-16">
            <div className="bg-white rounded-lg p-6 lg:p-8 shadow-card">
              <h3 className="text-xl font-display font-bold text-charcoal-900 mb-3">Family-Owned Since 2018</h3>
              <p className="text-slate-600 leading-relaxed">
                Tomron Construction is a family-owned siding and exterior contractor based in Maple Ridge, BC. Founded by Brendan Prendergast, we have spent years building a reputation for quality craftsmanship, honest pricing, and reliable service. Every project, whether it is a complete siding replacement, new windows, or a full renovation, is treated with the same care and attention to detail.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 lg:p-8 shadow-card">
              <h3 className="text-xl font-display font-bold text-charcoal-900 mb-3">Built for BC Weather</h3>
              <p className="text-slate-600 leading-relaxed">
                The Lower Mainland receives over 1,200 millimetres of rainfall annually. This constant moisture puts enormous stress on your home&apos;s exterior. Aging or improperly installed siding allows water into the building envelope, leading to rot, mould, and structural damage. We install exterior systems specifically engineered for BC&apos;s rain-heavy conditions with premium moisture barriers and materials rated for decades of performance.
              </p>
            </div>
          </div>

          <div className="mb-12">
            <h3 className="text-2xl font-display font-bold text-charcoal-900 mb-4 text-center">Our Services</h3>
            <p className="text-slate-600 leading-relaxed text-center max-w-3xl mx-auto mb-6">
              We specialize in protecting Lower Mainland homes through six core services, each backed by manufacturer warranties and our commitment to standing behind every project.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { href: '/services/exterior-siding-cladding', title: 'Siding & Cladding', desc: 'Vinyl, fiber cement, engineered wood, and composite siding installations.' },
                { href: '/services/window-replacement', title: 'Window Replacement', desc: 'Casement, sliding, picture, and tilt-and-turn window installations.' },
                { href: '/services/door-replacement', title: 'Door Replacement', desc: 'Entry, patio, and sliding door replacement with expert weathersealing.' },
                { href: '/services/building-envelope', title: 'Building Envelope', desc: 'Air barriers, moisture management, and insulation solutions.' },
                { href: '/services/metal-flashing', title: 'Metal Flashing', desc: 'Custom-fabricated flashing for long-term water management.' },
                { href: '/services/home-renovation', title: 'Home Renovation', desc: 'Single-room updates to complete home transformations.' },
              ].map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="group block bg-white rounded-lg p-5 shadow-card hover:shadow-lg transition-shadow duration-300"
                >
                  <h4 className="font-display font-bold text-charcoal-900 group-hover:text-brand-600 transition-colors mb-1">{service.title}</h4>
                  <p className="text-sm text-slate-500">{service.desc}</p>
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-display font-bold text-charcoal-900 mb-4 text-center">Areas We Serve</h3>
            <p className="text-slate-600 leading-relaxed text-center max-w-2xl mx-auto mb-6">
              Based in Maple Ridge, we serve homeowners across 16 Lower Mainland communities.
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {[
                { href: '/service-areas/maple-ridge', name: 'Maple Ridge' },
                { href: '/service-areas/coquitlam', name: 'Coquitlam' },
                { href: '/service-areas/burnaby', name: 'Burnaby' },
                { href: '/service-areas/surrey', name: 'Surrey' },
                { href: '/service-areas/vancouver', name: 'Vancouver' },
                { href: '/service-areas/langley', name: 'Langley' },
                { href: '/service-areas/richmond', name: 'Richmond' },
                { href: '/service-areas/abbotsford', name: 'Abbotsford' },
                { href: '/service-areas/delta', name: 'Delta' },
                { href: '/service-areas/white-rock', name: 'White Rock' },
                { href: '/service-areas/new-westminster', name: 'New Westminster' },
                { href: '/service-areas/pitt-meadows', name: 'Pitt Meadows' },
                { href: '/service-areas/port-coquitlam', name: 'Port Coquitlam' },
                { href: '/service-areas/tsawwassen', name: 'Tsawwassen' },
                { href: '/service-areas/mission', name: 'Mission' },
                { href: '/service-areas/chilliwack', name: 'Chilliwack' },
              ].map((area) => (
                <Link
                  key={area.href}
                  href={area.href}
                  className="px-4 py-2 text-sm font-medium rounded-full bg-neutral-100 text-slate-600 hover:bg-brand-600 hover:text-white transition-all duration-300"
                >
                  {area.name}
                </Link>
              ))}
            </div>
            <p className="text-center mt-6 text-slate-500 text-sm">
              Call{' '}
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
