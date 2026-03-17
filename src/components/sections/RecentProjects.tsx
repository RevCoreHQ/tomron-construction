'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { TextReveal } from '@/components/motion/TextReveal';
import { ScrollReveal } from '@/components/motion/ScrollReveal';
import { projects } from '@/components/sections/ProjectGrid';

const PREVIEW_COUNT = 8;
const previewProjects = projects.slice(0, PREVIEW_COUNT);

// Deterministic rotations so they don't shift on re-render
const rotations = [-2.5, 1.8, -1.2, 2.8, -1.8, 1.5, -2.2, 2.0];

export function RecentProjects() {
  const [lightbox, setLightbox] = useState<string | null>(null);

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightbox(null);
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [lightbox]);

  return (
    <>
      <section className="section-padding bg-neutral-50">
        <div className="container-wide">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-sm font-semibold text-brand-600 uppercase tracking-wider mb-2">Our Work</p>
              <TextReveal className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-charcoal-900">
                Recent Projects
              </TextReveal>
            </div>
            <Button href="/gallery" variant="outline" size="sm" className="hidden sm:inline-flex">
              View Gallery
            </Button>
          </div>

          {/* Polaroid grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
            {previewProjects.map((project, i) => (
              <ScrollReveal
                key={project.id}
                delay={i * 0.07}
                direction="up"
              >
                <motion.div
                  className="cursor-pointer"
                  style={{ rotate: rotations[i] }}
                  whileHover={{
                    scale: 1.05,
                    rotate: 0,
                    y: -8,
                    transition: { duration: 0.3, ease: 'easeOut' },
                  }}
                  onClick={() => setLightbox(project.image)}
                >
                  <div className="bg-white p-2 pb-5 rounded-sm shadow-md hover:shadow-xl transition-shadow duration-300">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                        className="object-cover"
                      />
                    </div>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>

          <div className="sm:hidden mt-6">
            <Button href="/gallery" variant="outline" size="sm">
              View Gallery
            </Button>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
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
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative max-w-5xl w-full max-h-[85vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={lightbox}
                alt="Project photo"
                width={1600}
                height={1200}
                className="w-full h-auto max-h-[85vh] object-contain rounded-lg"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
