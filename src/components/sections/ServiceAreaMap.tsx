'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { MapPin, ArrowRight } from 'lucide-react';
import { ScrollReveal } from '@/components/motion/ScrollReveal';
import { mapCities, MapCity } from '@/data/map-coordinates';

type Filter = 'all' | 'primary' | 'extended';

export function ServiceAreaMap() {
  const [filter, setFilter] = useState<Filter>('all');
  const [activeCity, setActiveCity] = useState<MapCity | null>(null);

  const visibleCities = mapCities.filter((c) => {
    if (filter === 'primary') return c.isPrimary;
    if (filter === 'extended') return !c.isPrimary;
    return true;
  });

  return (
    <section className="section-padding bg-gradient-to-br from-brand-50/30 via-white to-neutral-50">
      <div className="container-wide">
        <ScrollReveal>
          <div className="text-center mb-8">
            <p className="text-sm font-semibold text-brand-600 uppercase tracking-wider mb-2">
              Interactive Map
            </p>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-charcoal-900 mb-4">
              Where We Work
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              Based in Maple Ridge, we serve 16 communities across the Lower Mainland and Fraser Valley. Click a pin to learn more.
            </p>
          </div>
        </ScrollReveal>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-2 mb-8">
          {[
            { id: 'all' as const, label: 'All Areas' },
            { id: 'primary' as const, label: 'Primary Areas' },
            { id: 'extended' as const, label: 'Extended Areas' },
          ].map((f) => (
            <button
              key={f.id}
              onClick={() => { setFilter(f.id); setActiveCity(null); }}
              className={`px-4 py-2 text-sm font-semibold rounded-full transition-all ${
                filter === f.id
                  ? 'bg-brand-600 text-white'
                  : 'bg-neutral-100 text-slate-600 hover:bg-neutral-200'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Map Container */}
        <div className="relative max-w-4xl mx-auto">
          <svg
            viewBox="0 0 1000 600"
            className="w-full h-auto"
            role="img"
            aria-label="Map of Tomron Construction service areas in the Lower Mainland, BC"
          >
            {/* Simplified Lower Mainland / Fraser Valley outline */}
            <path
              d="M 80 160 L 120 100 L 200 80 L 300 60 L 400 50 L 500 60 L 600 50 L 700 70 L 800 90 L 900 120 L 950 200 L 930 280 L 900 350 L 850 420 L 800 460 L 700 500 L 600 520 L 500 530 L 400 540 L 300 530 L 200 510 L 140 470 L 100 400 L 80 320 L 60 240 Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="text-neutral-300"
              strokeLinejoin="round"
            />

            {/* Land fill */}
            <path
              d="M 80 160 L 120 100 L 200 80 L 300 60 L 400 50 L 500 60 L 600 50 L 700 70 L 800 90 L 900 120 L 950 200 L 930 280 L 900 350 L 850 420 L 800 460 L 700 500 L 600 520 L 500 530 L 400 540 L 300 530 L 200 510 L 140 470 L 100 400 L 80 320 L 60 240 Z"
              fill="currentColor"
              className="text-brand-50"
            />

            {/* Fraser River approximation */}
            <path
              d="M 100 300 Q 200 280 300 290 Q 400 300 500 280 Q 600 260 700 270 Q 800 280 920 260"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              className="text-blue-200"
            />

            {/* City Pins */}
            {visibleCities.map((city) => {
              const isActive = activeCity?.slug === city.slug;
              const isPrimary = city.isPrimary;

              return (
                <g key={city.slug}>
                  {/* Pulse ring */}
                  <motion.circle
                    cx={city.x}
                    cy={city.y}
                    r={12}
                    fill="none"
                    stroke={isPrimary ? '#dc5a2c' : '#94a3b8'}
                    strokeWidth={1.5}
                    initial={{ scale: 1, opacity: 0.6 }}
                    animate={{
                      scale: [1, 1.6, 1],
                      opacity: [0.6, 0, 0.6],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      delay: Math.random() * 2,
                    }}
                  />

                  {/* Pin dot */}
                  <circle
                    cx={city.x}
                    cy={city.y}
                    r={isActive ? 10 : 7}
                    fill={isPrimary ? '#dc5a2c' : '#94a3b8'}
                    stroke="white"
                    strokeWidth={2.5}
                    className="cursor-pointer transition-all"
                    onClick={() => setActiveCity(isActive ? null : city)}
                    onMouseEnter={() => setActiveCity(city)}
                  />

                  {/* City Label */}
                  <text
                    x={city.x}
                    y={city.y - 16}
                    textAnchor="middle"
                    className={`text-[11px] font-semibold fill-current pointer-events-none ${
                      isActive ? 'text-charcoal-900' : 'text-slate-500'
                    }`}
                  >
                    {city.city}
                  </text>
                </g>
              );
            })}
          </svg>

          {/* Active City Tooltip */}
          <AnimatePresence>
            {activeCity && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                transition={{ duration: 0.2 }}
                className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white rounded-lg shadow-lg border border-neutral-200 p-4 min-w-[240px] z-10"
              >
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className={`w-4 h-4 ${activeCity.isPrimary ? 'text-brand-600' : 'text-slate-400'}`} />
                  <h4 className="font-display font-bold text-charcoal-900">{activeCity.city}</h4>
                  <span className={`text-[10px] font-semibold px-2 py-0.5 rounded ${
                    activeCity.isPrimary
                      ? 'bg-brand-100 text-brand-600'
                      : 'bg-neutral-100 text-slate-500'
                  }`}>
                    {activeCity.isPrimary ? 'Primary' : 'Extended'}
                  </span>
                </div>
                <Link
                  href={`/service-areas/${activeCity.slug}`}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 hover:text-brand-700 transition-colors"
                >
                  View services in {activeCity.city}
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Legend */}
        <div className="flex justify-center gap-6 mt-6">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-brand-600" />
            <span className="text-xs text-slate-500 font-medium">Primary Area</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-slate-400" />
            <span className="text-xs text-slate-500 font-medium">Extended Area</span>
          </div>
        </div>
      </div>
    </section>
  );
}
