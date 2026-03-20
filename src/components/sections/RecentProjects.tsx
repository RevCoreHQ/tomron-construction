'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { projects } from '@/components/sections/ProjectGrid';

const PREVIEW_COUNT = 8;
const previewProjects = projects.slice(0, PREVIEW_COUNT);

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
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-charcoal-900">
                Recent Projects
              </h2>
            </div>
            <Button href="/gallery" variant="outline" size="sm" className="hidden sm:inline-flex">
              View Gallery
            </Button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
            {previewProjects.map((project) => (
              <div
                key={project.id}
                className="cursor-pointer rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200"
                onClick={() => setLightbox(project.image)}
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={project.image}
                    alt={project.alt}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="object-cover"
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="sm:hidden mt-6">
            <Button href="/gallery" variant="outline" size="sm">
              View Gallery
            </Button>
          </div>
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
          <div
            className="relative max-w-5xl w-full max-h-[85vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={lightbox}
              alt="Project photo by Tomron Construction"
              className="w-full h-auto max-h-[85vh] object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </>
  );
}
