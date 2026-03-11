'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { FAQ } from '@/data/services';

interface FAQAccordionProps {
  faqs: FAQ[];
  title?: string;
  subtitle?: string;
}

export function FAQAccordion({ faqs, title, subtitle }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section-padding bg-gradient-to-b from-sand-50 to-white">
      <div className="container-narrow">
        {title && (
          <div className="text-center mb-12">
            {subtitle && (
              <p className="inline-flex items-center gap-2 text-sm font-medium tracking-wider uppercase mb-3 mx-auto">
                <span className="w-6 h-px bg-accent-gold" />
                <span className="gradient-text-gold">{subtitle}</span>
                <span className="w-6 h-px bg-accent-gold" />
              </p>
            )}
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900">
              {title}
            </h2>
          </div>
        )}
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={cn(
                'bg-white rounded-xl border overflow-hidden shadow-soft transition-all duration-300',
                openIndex === i ? 'border-brand-200 shadow-card border-l-4 border-l-brand-500' : 'border-slate-100'
              )}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-5 lg:p-6 text-left hover:bg-slate-50/50 transition-colors"
                aria-expanded={openIndex === i}
              >
                <span className={cn(
                  'text-base lg:text-lg font-semibold pr-4 transition-colors',
                  openIndex === i ? 'text-brand-700' : 'text-slate-800'
                )}>
                  {faq.question}
                </span>
                <ChevronDown
                  className={cn(
                    'w-5 h-5 text-brand-600 shrink-0 transition-transform duration-300',
                    openIndex === i && 'rotate-180'
                  )}
                />
              </button>
              <div
                className={cn(
                  'grid transition-all duration-300 ease-in-out',
                  openIndex === i ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                )}
              >
                <div className="overflow-hidden">
                  <div className="px-5 pb-5 lg:px-6 lg:pb-6">
                    <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
