'use client';

import { ScrollReveal } from '@/components/motion/ScrollReveal';
import { AnimatedCounter } from '@/components/motion/AnimatedCounter';

const stats = [
  { value: 10, suffix: '+', label: 'Years Experience' },
  { value: 500, suffix: '+', label: 'Projects Completed' },
  { value: 100, suffix: '%', label: 'Satisfaction Rate' },
  { value: 5, suffix: '', label: 'Star Google Rating' },
];

export function StatsBar() {
  return (
    <section className="py-12 sm:py-16 border-y border-neutral-200">
      <div className="container-wide px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center lg:text-left">
                <div className="text-4xl sm:text-5xl font-display font-extrabold text-charcoal-900 mb-1">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-sm font-medium text-slate-500 uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
