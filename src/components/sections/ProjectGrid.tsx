'use client';

import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { StaggerChildren, staggerItem } from '@/components/motion/StaggerChildren';
import { motion } from 'framer-motion';

const projects = [
  { id: 1, title: 'Complete Siding Replacement', location: 'Maple Ridge, BC', category: 'Siding' },
  { id: 2, title: 'Fiber Cement Siding Install', location: 'Coquitlam, BC', category: 'Siding' },
  { id: 3, title: 'Window & Door Package', location: 'Pitt Meadows, BC', category: 'Windows & Doors' },
  { id: 4, title: 'Exterior Envelope Repair', location: 'Burnaby, BC', category: 'Building Envelope' },
  { id: 5, title: 'Full Home Renovation', location: 'Maple Ridge, BC', category: 'Renovation' },
  { id: 6, title: 'Custom Metal Flashing', location: 'Coquitlam, BC', category: 'Flashing' },
  { id: 7, title: 'Vinyl Siding Upgrade', location: 'Abbotsford, BC', category: 'Siding' },
  { id: 8, title: 'Triple-Pane Window Install', location: 'Burnaby, BC', category: 'Windows & Doors' },
  { id: 9, title: 'Entry Door Replacement', location: 'Pitt Meadows, BC', category: 'Windows & Doors' },
];

export function ProjectGrid() {
  const [lightbox, setLightbox] = useState<{ category: string } | null>(null);

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setLightbox(null); };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [lightbox]);

  return (
    <>
      <section className="section-padding">
        <div className="container-wide">
          <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                variants={staggerItem}
                className="group relative rounded-lg overflow-hidden shadow-card hover:shadow-lg transition-all duration-300 text-left"
              >
                <div className="relative aspect-[4/3] image-placeholder-premium">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <p className="text-white/40 text-sm font-medium tracking-widest uppercase">{project.category}</p>
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <p className="text-white font-semibold text-sm mb-1">{project.title}</p>
                  <span className="inline-block px-2.5 py-1 text-xs font-medium bg-brand-600 text-white rounded-full">
                    {project.location}
                  </span>
                </div>
              </motion.div>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors"
            aria-label="Close"
          >
            <X className="w-8 h-8" />
          </button>
        </div>
      )}
    </>
  );
}
