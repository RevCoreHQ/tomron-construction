'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';
import { StaggerChildren, staggerItem } from '@/components/motion/StaggerChildren';
import { motion } from 'framer-motion';

export const projects = [
  {
    id: 1,
    title: 'Complete Siding Replacement',
    location: 'Maple Ridge, BC',
    category: 'Siding',
    image: 'https://assets.cdn.filesafe.space/oyhdrza3SwoM8YuXOsja/media/69b19ab28cb259736f3d988a.webp',
  },
  {
    id: 2,
    title: 'Exterior Renovation',
    location: 'Coquitlam, BC',
    category: 'Siding',
    image: 'https://assets.cdn.filesafe.space/oyhdrza3SwoM8YuXOsja/media/69b19ab257249b849038a781.webp',
  },
  {
    id: 3,
    title: 'Building Envelope Repair',
    location: 'Pitt Meadows, BC',
    category: 'Building Envelope',
    image: 'https://assets.cdn.filesafe.space/oyhdrza3SwoM8YuXOsja/media/69b19ab2bfc81fd1318a9dbb.webp',
  },
  {
    id: 4,
    title: 'Siding & Trim Work',
    location: 'Burnaby, BC',
    category: 'Siding',
    image: 'https://assets.cdn.filesafe.space/oyhdrza3SwoM8YuXOsja/media/69b19ab28cb2591a763d9889.webp',
  },
  {
    id: 5,
    title: 'Custom Metal Flashing',
    location: 'Maple Ridge, BC',
    category: 'Flashing',
    image: 'https://assets.cdn.filesafe.space/oyhdrza3SwoM8YuXOsja/media/69b19ab278565a8d38405c23.webp',
  },
  {
    id: 6,
    title: 'Full Home Exterior',
    location: 'Coquitlam, BC',
    category: 'Renovation',
    image: 'https://assets.cdn.filesafe.space/oyhdrza3SwoM8YuXOsja/media/69b19ab2cab7f72b28488946.webp',
  },
  {
    id: 7,
    title: 'Siding Installation',
    location: 'Abbotsford, BC',
    category: 'Siding',
    image: 'https://assets.cdn.filesafe.space/oyhdrza3SwoM8YuXOsja/media/69b19ab28cb25912223d988b.webp',
  },
  {
    id: 8,
    title: 'Exterior Cladding Project',
    location: 'Burnaby, BC',
    category: 'Siding',
    image: 'https://assets.cdn.filesafe.space/oyhdrza3SwoM8YuXOsja/media/69b19ab2c2389cb1a64f3b17.webp',
  },
  {
    id: 9,
    title: 'New Home Siding',
    location: 'Maple Ridge, BC',
    category: 'Siding',
    image: 'https://assets.cdn.filesafe.space/oyhdrza3SwoM8YuXOsja/media/69b19b2e78565a1fbc407e51.webp',
  },
  {
    id: 10,
    title: 'Exterior Finishing',
    location: 'Coquitlam, BC',
    category: 'Siding',
    image: 'https://assets.cdn.filesafe.space/oyhdrza3SwoM8YuXOsja/media/69b19b2e7fc07c5e0b9783e7.webp',
  },
  {
    id: 11,
    title: 'Residential Siding Project',
    location: 'Pitt Meadows, BC',
    category: 'Siding',
    image: 'https://assets.cdn.filesafe.space/oyhdrza3SwoM8YuXOsja/media/69b19b2e8d3eae32c01b588c.webp',
  },
  {
    id: 12,
    title: 'Home Renovation',
    location: 'Burnaby, BC',
    category: 'Renovation',
    image: 'https://assets.cdn.filesafe.space/oyhdrza3SwoM8YuXOsja/media/69b19b2e584eaaaf433d832c.webp',
  },
  {
    id: 13,
    title: 'Cladding & Trim',
    location: 'Maple Ridge, BC',
    category: 'Siding',
    image: 'https://assets.cdn.filesafe.space/oyhdrza3SwoM8YuXOsja/media/69b19b2e8d3eae49601b5887.webp',
  },
  {
    id: 14,
    title: 'Full Exterior Reclad',
    location: 'Abbotsford, BC',
    category: 'Siding',
    image: 'https://assets.cdn.filesafe.space/oyhdrza3SwoM8YuXOsja/media/69b19b2ec2389c823e4f5e04.webp',
  },
  {
    id: 15,
    title: 'Siding & Envelope Work',
    location: 'Coquitlam, BC',
    category: 'Building Envelope',
    image: 'https://assets.cdn.filesafe.space/oyhdrza3SwoM8YuXOsja/media/69b19b2e8cb259358e3db9a1.webp',
  },
];

export function ProjectGrid() {
  const [lightbox, setLightbox] = useState<string | null>(null);

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
          <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                variants={staggerItem}
                className="group relative rounded-lg overflow-hidden shadow-card hover:shadow-lg transition-all duration-300 cursor-pointer"
                onClick={() => setLightbox(project.image)}
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <p className="text-white font-semibold text-sm mb-1">{project.title}</p>
                  <span className="inline-block px-2.5 py-1 text-xs font-medium bg-brand-600 text-white rounded-md">
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
            className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors z-10"
            aria-label="Close"
          >
            <X className="w-8 h-8" />
          </button>
          <div className="relative max-w-5xl w-full max-h-[85vh]">
            <Image
              src={lightbox}
              alt="Project photo"
              width={1600}
              height={1200}
              className="w-full h-auto max-h-[85vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </>
  );
}
