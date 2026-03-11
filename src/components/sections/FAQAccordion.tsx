'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ScrollReveal } from '@/components/motion/ScrollReveal';
import type { FAQ } from '@/data/services';

interface FAQAccordionProps {
  faqs: FAQ[];
  title?: string;
  subtitle?: string;
}

export function FAQAccordion({ faqs, title, subtitle }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section-padding">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">
          {/* Left — Header */}
          {title && (
            <ScrollReveal className="lg:col-span-2">
              {subtitle && (
                <p className="text-sm font-semibold text-brand-600 uppercase tracking-wider mb-2">
                  {subtitle}
                </p>
              )}
              <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-charcoal-900 mb-4">
                {title}
              </h2>
              <p className="text-slate-500 leading-relaxed">
                Can&apos;t find what you&apos;re looking for? Contact us and we&apos;ll be happy to answer your questions.
              </p>
            </ScrollReveal>
          )}

          {/* Right — Accordion */}
          <div className={cn(title ? 'lg:col-span-3' : 'lg:col-span-5')}>
            <div className="divide-y divide-neutral-200">
              {faqs.map((faq, i) => (
                <div key={i}>
                  <button
                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                    className="w-full flex items-center justify-between py-5 text-left group"
                    aria-expanded={openIndex === i}
                  >
                    <span className={cn(
                      'text-base font-semibold pr-4 transition-colors',
                      openIndex === i ? 'text-brand-600' : 'text-charcoal-900 group-hover:text-brand-600'
                    )}>
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={cn(
                        'w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200',
                        openIndex === i && 'rotate-180 text-brand-600'
                      )}
                    />
                  </button>
                  <div
                    className={cn(
                      'grid transition-all duration-200 ease-in-out',
                      openIndex === i ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                    )}
                  >
                    <div className="overflow-hidden">
                      <div className="pb-5 pr-12">
                        <p className="text-slate-500 leading-relaxed">{faq.answer}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
