'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { ScrollReveal } from '@/components/motion/ScrollReveal';

export function MeetOwner() {
  return (
    <section className="section-padding">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Content */}
          <ScrollReveal direction="left">
            <p className="text-sm font-semibold text-brand-600 uppercase tracking-wider mb-2">
              Meet the Owner
            </p>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-charcoal-900 mb-2">
              Your Trusted Construction & Siding Team
            </h2>
            <p className="text-lg font-display font-semibold text-brand-600 italic mb-6">
              Built on Family Values.
            </p>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                At Tomron Construction, we deliver a personalized experience for our siding and construction customers that only a family-run business can provide. Having served customers in the Lower Mainland for over a decade, we know what it takes to get the job done right.
              </p>
              <p>
                As a family man, I understand what your home means to you. That&apos;s why I&apos;m personally involved in every project we take on, from the initial consultation to the final walkthrough. When you hire Tomron, you&apos;re not getting a faceless company. You&apos;re getting a neighbour who treats your home like it&apos;s our own.
              </p>
              <p>
                Our small, dedicated team delivers the kind of craftsmanship and attention that larger companies simply can&apos;t match.
              </p>
            </div>
            <div className="mt-8">
              <Button href="/contact">Get in Touch</Button>
            </div>
          </ScrollReveal>

          {/* Image, full, no crop */}
          <ScrollReveal direction="right">
            <div className="relative rounded-lg overflow-hidden">
              <Image
                src="https://assets.cdn.filesafe.space/oyhdrza3SwoM8YuXOsja/media/69b189788d3eae057317a4cc.webp"
                alt="Brendan Prendergast and family, Owner of Tomron Construction"
                width={3450}
                height={1996}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="w-full h-auto"
              />
            </div>
            <p className="text-sm text-slate-500 mt-3 text-center">
              Brendan Prendergast & Family, Owner of Tomron Construction
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
