'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { ScrollReveal } from '@/components/motion/ScrollReveal';

export function MeetOwner() {
  return (
    <section className="section-padding">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image */}
          <ScrollReveal direction="left">
            <div className="relative rounded-lg overflow-hidden aspect-[4/3]">
              <Image
                src="https://assets.cdn.filesafe.space/oyhdrza3SwoM8YuXOsja/media/69b189788d3eae057317a4cc.webp"
                alt="Brendan Prendergast — Owner of Tomron Construction — with his family"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </ScrollReveal>

          {/* Content */}
          <ScrollReveal direction="right">
            <p className="text-sm font-semibold text-brand-600 uppercase tracking-wider mb-2">
              Meet the Owner
            </p>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-charcoal-900 mb-6">
              Family-Run. Community-Driven.
            </h2>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                Hi, I&apos;m Brendan Prendergast — owner and operator of Tomron Construction. I started this company because I believe homeowners deserve a contractor who treats every project like it&apos;s their own home.
              </p>
              <p>
                As a family man, I understand what your home means to you. That&apos;s why I&apos;m personally involved in every project we take on — from the initial consultation to the final walkthrough. When you hire Tomron, you&apos;re not getting a faceless company. You&apos;re getting a neighbour who stakes his reputation on every job.
              </p>
              <p>
                With over a decade of experience in siding, building envelope, windows, and renovations across the Lower Mainland, our small team delivers the kind of craftsmanship and attention that larger companies simply can&apos;t match.
              </p>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button href="/about">Learn Our Story</Button>
              <Button href="/contact" variant="outline">Get in Touch</Button>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
