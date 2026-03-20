'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { projects } from '@/components/sections/ProjectGrid';
import { useRef } from 'react';

const PREVIEW_COUNT = 12;
const previewProjects = projects.slice(0, PREVIEW_COUNT);

export function RecentProjects() {
  const [lightbox, setLightbox] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

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

  function scroll(direction: 'left' | 'right') {
    if (!scrollRef.current) return;
    const amount = scrollRef.current.clientWidth * 0.6;
    scrollRef.current.scrollBy({
      left: direction === 'left' ? -amount : amount,
      behavior: 'smooth',
    });
  }

  return (
    <>
      <section className="section-padding bg-neutral-50">
        <div className="container-wide">
          <div className="flex items-end justify-between mb-8">
            <div>
              <p className="text-sm font-semibold text-brand-600 uppercase tracking-wider mb-2">Our Work</p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-charcoal-900">
                Recent Projects
              </h2>
            </div>
            <div className="flex items-center gap-3">
              <div className="hidden sm:flex items-center gap-2">
                <button
                  onClick={() => scroll('left')}
                  className="w-10 h-10 rounded-full border border-neutral-300 flex items-center justify-center text-slate-500 hover:border-brand-600 hover:text-brand-600 transition-colors"
                  aria-label="Scroll left"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={() => scroll('right')}
                  className="w-10 h-10 rounded-full border border-neutral-300 flex items-center justify-center text-slate-500 hover:border-brand-600 hover:text-brand-600 transition-colors"
                  aria-label="Scroll right"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
              <Button href="/gallery" variant="outline" size="sm" className="hidden sm:inline-flex">
                View Gallery
              </Button>
            </div>
          </div>
        </div>

        {/* Full-bleed horizontal carousel */}
        <div
          ref={scrollRef}
          className="overflow-x-auto scrollbar-hide scroll-smooth"
        >
          <div className="flex gap-4 px-4 sm:px-6 lg:px-[max(1.5rem,calc((100vw-80rem)/2+1.5rem))]">
            {previewProjects.map((project, i) => (
              <div
                key={project.id}
                className={`shrink-0 cursor-pointer rounded-lg overflow-hidden ${
                  i % 3 === 0 ? 'w-[320px] sm:w-[400px]' : 'w-[240px] sm:w-[300px]'
                }`}
                onClick={() => setLightbox(project.image)}
              >
                <div className={`relative ${i % 3 === 0 ? 'aspect-[4/3]' : 'aspect-[3/4]'}`}>
                  <Image
                    src={project.image}
                    alt={project.alt}
                    fill
                    sizes="400px"
                    className="object-cover"
                  />
                </div>
              </div>
            ))}
            <div className="shrink-0 w-4 sm:w-6" />
          </div>
        </div>

        <div className="container-wide">
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
