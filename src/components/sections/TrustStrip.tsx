'use client';

import { useEffect, useRef, useState } from 'react';
import { Shield, BadgeCheck, Award, FileText } from 'lucide-react';
import { siteConfig } from '@/data/site-config';

const iconMap = { Shield, BadgeCheck, Award, FileText } as const;

export function TrustStrip() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && window.scrollY > 80) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2, rootMargin: '0px 0px -60px 0px' }
    );
    observer.observe(el);
    const onScroll = () => {
      if (window.scrollY > 80 && el.getBoundingClientRect().top < window.innerHeight - 60) {
        setVisible(true);
        observer.disconnect();
        window.removeEventListener('scroll', onScroll);
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => { observer.disconnect(); window.removeEventListener('scroll', onScroll); };
  }, []);

  return (
    <section ref={ref} className="relative -mt-8 z-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
          {siteConfig.trustPoints.map((point, i) => {
            const Icon = iconMap[point.icon];
            return (
              <div
                key={point.label}
                className="group flex items-center gap-3 bg-white rounded-lg p-4 lg:p-5 shadow-card border border-neutral-200 hover:-translate-y-0.5 transition-all duration-300"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? 'translateY(0)' : 'translateY(24px)',
                  transition: `opacity 0.5s ease ${i * 0.1}s, transform 0.5s ease ${i * 0.1}s`,
                }}
              >
                <div className="w-10 h-10 rounded-lg bg-brand-50 flex items-center justify-center shrink-0 group-hover:bg-brand-100 transition-all">
                  <Icon className="w-5 h-5 text-brand-600" />
                </div>
                <span className="text-sm font-semibold text-charcoal-900 leading-tight">
                  {point.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
