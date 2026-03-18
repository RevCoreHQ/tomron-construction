'use client';

import { useState } from 'react';
import Link from 'next/link';
import { MapPin, ArrowRight, Building2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { ScrollReveal } from '@/components/motion/ScrollReveal';
import { mapCities } from '@/data/map-coordinates';

type Filter = 'all' | 'primary' | 'extended';

export function ServiceAreaMap() {
  const [filter, setFilter] = useState<Filter>('all');

  const visibleCities = mapCities.filter((c) => {
    if (filter === 'primary') return c.isPrimary;
    if (filter === 'extended') return !c.isPrimary;
    return true;
  });

  const hqSlug = 'maple-ridge';

  return (
    <section
      className="section-padding bg-charcoal-900 relative overflow-hidden"
      aria-label="Service area map and city list"
    >
      {/* Subtle radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container-wide relative z-10">
        <ScrollReveal>
          <div className="text-center mb-10">
            <p className="text-sm font-semibold text-brand-500 uppercase tracking-wider mb-2">
              Lower Mainland &amp; Fraser Valley
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold text-white mb-4">
              Where We Work
            </h2>
            <p className="text-white/50 max-w-2xl mx-auto">
              Based in Maple Ridge, we serve 16 communities across the Lower Mainland and Fraser Valley.
            </p>
          </div>
        </ScrollReveal>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-2 mb-10" role="group" aria-label="Filter service areas">
          {[
            { id: 'all' as const, label: 'All Areas', count: mapCities.length },
            { id: 'primary' as const, label: 'Primary', count: mapCities.filter((c) => c.isPrimary).length },
            { id: 'extended' as const, label: 'Extended', count: mapCities.filter((c) => !c.isPrimary).length },
          ].map((f) => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              aria-pressed={filter === f.id}
              className={`px-4 py-2.5 text-sm font-semibold rounded-full transition-all min-h-[44px] ${
                filter === f.id
                  ? 'bg-brand-600 text-white'
                  : 'bg-white/5 text-white/50 hover:bg-white/10 hover:text-white/70 border border-white/10'
              }`}
            >
              {f.label}
              <span className={`ml-1.5 text-xs ${filter === f.id ? 'text-white/70' : 'text-white/30'}`}>
                {f.count}
              </span>
            </button>
          ))}
        </div>

        {/* City Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {visibleCities.map((city, i) => {
            const isHQ = city.slug === hqSlug;

            return (
              <motion.div
                key={city.slug}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.03 }}
              >
                <Link
                  href={`/service-areas/${city.slug}`}
                  className={`group flex items-center gap-3 p-4 rounded-xl border transition-all ${
                    isHQ
                      ? 'bg-brand-600/10 border-brand-500/30 hover:border-brand-500/60 hover:bg-brand-600/15'
                      : 'bg-white/[0.03] border-white/[0.08] hover:border-white/20 hover:bg-white/[0.06]'
                  }`}
                >
                  {isHQ ? (
                    <div className="w-9 h-9 rounded-lg bg-brand-600 flex items-center justify-center shrink-0">
                      <Building2 className="w-4 h-4 text-white" />
                    </div>
                  ) : (
                    <div className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${
                      city.isPrimary
                        ? 'bg-brand-600/10'
                        : 'bg-white/5'
                    }`}>
                      <MapPin className={`w-4 h-4 ${
                        city.isPrimary ? 'text-brand-500' : 'text-white/30'
                      }`} />
                    </div>
                  )}

                  <div className="min-w-0 flex-1">
                    <p className={`font-display font-bold text-sm transition-colors ${
                      isHQ
                        ? 'text-brand-400 group-hover:text-brand-300'
                        : 'text-white/80 group-hover:text-white'
                    }`}>
                      {city.city}
                      {isHQ && (
                        <span className="ml-2 text-[10px] font-semibold text-brand-500 uppercase tracking-wider">
                          HQ
                        </span>
                      )}
                    </p>
                    <p className="text-xs text-white/30">
                      {city.isPrimary ? 'Primary service area' : 'Extended service area'}
                    </p>
                  </div>

                  <ArrowRight className="w-3.5 h-3.5 text-white/20 group-hover:text-white/50 shrink-0 transition-colors" />
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom info */}
        <div className="mt-8 text-center">
          <p className="text-sm text-white/30">
            Don&apos;t see your area?{' '}
            <Link href="/contact" className="text-brand-400 font-semibold hover:text-brand-300 transition-colors">
              Contact us
            </Link>
            {' '}— we may still be able to serve you.
          </p>
        </div>
      </div>
    </section>
  );
}
