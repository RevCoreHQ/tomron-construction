'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const services = [
  {
    number: '01',
    title: 'Siding & Cladding',
    description: "Durable, beautiful siding installations engineered for BC's rain and weather.",
    href: '/services/exterior-siding-cladding',
  },
  {
    number: '02',
    title: 'Building Envelope',
    description: 'Comprehensive air, moisture, and heat barriers that protect your home.',
    href: '/services/building-envelope',
  },
  {
    number: '03',
    title: 'Window Replacement',
    description: 'Energy-efficient windows with expert installation. Casement, sliding, tilt-n-turn.',
    href: '/services/window-replacement',
  },
  {
    number: '04',
    title: 'Door Replacement',
    description: 'Entry, patio, and sliding doors installed with precision weatherproofing.',
    href: '/services/door-replacement',
  },
  {
    number: '05',
    title: 'Metal Flashing',
    description: 'Custom fabricated flashing for long-term water management and protection.',
    href: '/services/metal-flashing',
  },
  {
    number: '06',
    title: 'Home Renovation',
    description: 'Full-scope renovation projects from concept to completion.',
    href: '/services/home-renovation',
  },
];

export function HomeServiceCards() {
  return (
    <section className="section-padding">
      <div className="container-wide">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-sm font-semibold text-brand-600 uppercase tracking-wider mb-2">What We Do</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-charcoal-900">
              Our Services
            </h2>
          </div>
          <Link
            href="/services"
            className="hidden sm:flex items-center gap-2 text-sm font-semibold text-brand-600 hover:text-brand-700 transition-colors"
          >
            View All <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="divide-y divide-neutral-200 border-t border-neutral-200">
          {services.map((service) => (
            <Link
              key={service.href}
              href={service.href}
              className="group flex items-center gap-6 sm:gap-10 py-6 sm:py-8 transition-colors hover:bg-neutral-50 -mx-4 px-4 sm:-mx-6 sm:px-6"
            >
              <span className="text-3xl sm:text-4xl font-display font-extrabold text-neutral-200 group-hover:text-brand-200 transition-colors shrink-0 w-12 sm:w-16">
                {service.number}
              </span>
              <div className="flex-1 min-w-0">
                <h3 className="text-lg sm:text-xl font-display font-bold text-charcoal-900 group-hover:text-brand-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-slate-500 mt-1 hidden sm:block">
                  {service.description}
                </p>
              </div>
              <ArrowRight className="w-5 h-5 text-neutral-300 group-hover:text-brand-600 group-hover:translate-x-1 transition-all shrink-0" />
            </Link>
          ))}
        </div>

        <div className="sm:hidden mt-6">
          <Link
            href="/services"
            className="flex items-center gap-2 text-sm font-semibold text-brand-600"
          >
            View All Services <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
