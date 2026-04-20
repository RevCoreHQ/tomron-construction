'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { AnimatedCounter } from '@/components/motion/AnimatedCounter';

const stats = [
  { value: 10, suffix: '+', label: 'Years Experience' },
  { value: 500, suffix: '+', label: 'Projects Completed' },
  { value: 100, suffix: '%', label: 'Satisfaction Rate' },
  { value: 5, suffix: '', label: 'Star Google Rating' },
];

export function StatsBar() {
  const prefersReduced = useReducedMotion();

  return (
    <section className="py-12 sm:py-16 border-y border-neutral-200">
      <div className="container-wide px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="text-center lg:text-left"
              initial={prefersReduced ? undefined : { opacity: 0, scale: 0.8, filter: 'blur(8px)' }}
              whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.15, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <div className="text-4xl sm:text-5xl font-display font-extrabold text-charcoal-900 mb-1 tabular-nums">
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-sm font-medium text-slate-500 uppercase tracking-wider">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
