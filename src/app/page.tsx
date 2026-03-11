import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Droplets, TreePine, Hammer } from 'lucide-react';
import { generatePageMetadata } from '@/lib/metadata';
import { Hero } from '@/components/sections/Hero';
import { TrustStrip } from '@/components/sections/TrustStrip';
import { ProcessSteps } from '@/components/sections/ProcessSteps';
import { TestimonialCards } from '@/components/sections/TestimonialCards';
import { CTASection } from '@/components/sections/CTASection';
import { FAQAccordion } from '@/components/sections/FAQAccordion';
import { Button } from '@/components/ui/Button';

export const metadata: Metadata = generatePageMetadata({
  title: 'Timberline Falls | Premier Pool, Landscape & Concrete Builder in Utah',
  description:
    'Custom swimming pools, landscape construction, and concrete services in Saratoga Springs, Bountiful & surrounding Utah areas. 20+ years experience. Licensed & insured. Free estimates.',
  path: '/',
});

const serviceCategories = [
  {
    icon: Droplets,
    title: 'Swimming Pool Construction',
    description:
      'Custom in-ground pools designed for your lifestyle and engineered for Utah\'s climate. From concept to completion, we handle every detail.',
    href: '/services/swimming-pool-construction',
    features: ['Custom Design', 'Water Features', '3D Approval', 'Full Build'],
  },
  {
    icon: TreePine,
    title: 'Landscape Construction',
    description:
      'Complete landscape design and installation, including grading, irrigation, planting, hardscaping, lighting, and outdoor living spaces.',
    href: '/services/landscape-construction',
    features: ['Full Design', 'Irrigation', 'Artificial Turf', 'Outdoor Kitchens'],
  },
  {
    icon: Hammer,
    title: 'Concrete Services',
    description:
      'Driveways, retaining walls, patios, sidewalks, and decorative stamped concrete, built with proper prep and reinforcement to last.',
    href: '/services/concrete-services',
    features: ['Driveways', 'Retaining Walls', 'Stamped Concrete', 'RV Pads'],
  },
];

const homeFaqs = [
  {
    question: 'How much does it cost to build a pool in Utah?',
    answer:
      'Custom pool construction in Utah typically ranges from $50,000 to $150,000+ depending on size, features, and site conditions. We provide free, no-obligation estimates for every project.',
  },
  {
    question: 'Do you offer free estimates?',
    answer:
      'Yes. Every project begins with a free on-site consultation where we assess your property, discuss your vision, and provide a detailed estimate.',
  },
  {
    question: 'What areas do you serve?',
    answer:
      'We serve Saratoga Springs, Bountiful, and surrounding Utah communities including Lehi, Eagle Mountain, and Draper. Contact us to confirm service availability at your location.',
  },
  {
    question: 'Are you licensed and insured?',
    answer:
      'Absolutely. Timberline Falls is fully licensed, bonded, and insured. We carry comprehensive liability coverage for your protection.',
  },
  {
    question: 'Can I see a 3D design of my project before you start?',
    answer:
      'Yes. We create a detailed 3D rendering of your project for your review and approval before any construction begins. It is a standard part of our process.',
  },
];

export default function HomePage() {
  return (
    <>
      <Hero
        headline="Build the Outdoor Space You've Always Wanted"
        subheadline="Utah's Trusted Pool & Outdoor Living Builder"
        description="Custom swimming pools, stunning landscapes, and expert concrete work, designed and built by a team with over 20 years of experience in Saratoga Springs, Bountiful, and surrounding areas."
        backgroundImage="https://assets.cdn.filesafe.space/VpxNeZuIvxjzZljfxNjd/media/69a32fc7167da411c97399d7.png"
        backgroundVideo="https://assets.cdn.filesafe.space/VpxNeZuIvxjzZljfxNjd/media/69a339dc83726d7632c74825.mp4"
      />

      <TrustStrip />

      {/* Services Section */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="text-center mb-12 lg:mb-16">
            <p className="inline-flex items-center gap-2 text-sm font-medium tracking-wider uppercase mb-3">
              <span className="w-6 h-px bg-accent-gold" />
              <span className="gradient-text-gold">What We Build</span>
              <span className="w-6 h-px bg-accent-gold" />
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-slate-900 mb-4">
              Three Crafts. One Trusted Team.
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Pool construction, landscape design, and concrete services, all from a single, locally owned contractor you can rely on from start to finish.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {serviceCategories.map((cat) => {
              const Icon = cat.icon;
              return (
                <Link
                  key={cat.href}
                  href={cat.href}
                  className="group relative bg-white rounded-2xl border border-slate-100 p-8 shadow-soft hover:shadow-elevated transition-all duration-300 hover:-translate-y-1.5 overflow-hidden"
                >
                  {/* Top gradient accent */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-500 via-brand-600 to-brand-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-50 to-brand-100 flex items-center justify-center mb-6 group-hover:from-brand-100 group-hover:to-brand-200 transition-all duration-300 shadow-sm">
                    <Icon className="w-7 h-7 text-brand-700" />
                  </div>
                  <h3 className="text-2xl font-display font-semibold text-slate-900 mb-3 group-hover:text-brand-600 transition-colors">
                    {cat.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-5">
                    {cat.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {cat.features.map((f) => (
                      <span
                        key={f}
                        className="px-3 py-1 text-xs font-medium bg-sand-50 text-slate-600 rounded-full border border-sand-200"
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 group-hover:gap-2.5 transition-all">
                    Explore Services <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              );
            })}
          </div>

          <div className="text-center mt-10">
            <Button href="/services" variant="outline">
              View All Services
            </Button>
          </div>
        </div>
      </section>

      {/* Process */}
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
              Projects That Speak for Themselves
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Browse our portfolio of completed pools, landscapes, and concrete projects across northern Utah.
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            {[
              'https://assets.cdn.filesafe.space/VpxNeZuIvxjzZljfxNjd/media/699da56fe9512da1bdaad21f.jpg',
              'https://assets.cdn.filesafe.space/VpxNeZuIvxjzZljfxNjd/media/699da56f2837e84064252853.jpg',
              'https://assets.cdn.filesafe.space/VpxNeZuIvxjzZljfxNjd/media/699da56fe9512d2930aad21e.jpg',
              'https://assets.cdn.filesafe.space/VpxNeZuIvxjzZljfxNjd/media/699da7c52d8479b3ef5ed66a.jpg',
              'https://assets.cdn.filesafe.space/VpxNeZuIvxjzZljfxNjd/media/699f502395735c151ac48c31.jpg',
              'https://assets.cdn.filesafe.space/VpxNeZuIvxjzZljfxNjd/media/699f50239a0c1801d793bc5c.jpg',
            ].map((src, i) =>
              src ? (
                <div key={i} className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-soft bg-slate-200">
                  <Image
                    src={src}
                    alt="Pool construction project by Timberline Falls"
                    fill
                    sizes="(max-width: 1024px) 50vw, 33vw"
                    quality={70}
                    priority={i < 2}
                    className="object-cover object-center"
                  />
                </div>
              ) : (
                <div key={i} className="image-placeholder-premium aspect-[4/3] rounded-2xl shadow-soft" />
              )
            )}
          </div>
          <div className="text-center mt-10">
            <Button href="/gallery">View Full Gallery</Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialCards />

      {/* FAQ */}
      <FAQAccordion
        faqs={homeFaqs}
        title="Frequently Asked Questions"
        subtitle="Common Questions"
      />

      {/* CTA */}
      <CTASection />
    </>
  );
}
