'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Custom Pool Build',
    location: 'Saratoga Springs, UT',
    category: 'Pool Construction',
    image: 'https://assets.cdn.filesafe.space/VpxNeZuIvxjzZljfxNjd/media/699da56fe9512da1bdaad21f.jpg',
  },
  {
    id: 2,
    title: 'Luxury Inground Pool',
    location: 'Bountiful, UT',
    category: 'Pool Construction',
    image: 'https://assets.cdn.filesafe.space/VpxNeZuIvxjzZljfxNjd/media/699da56f2837e84064252853.jpg',
  },
  {
    id: 3,
    title: 'Resort-Style Pool',
    location: 'Lehi, UT',
    category: 'Pool Construction',
    image: 'https://assets.cdn.filesafe.space/VpxNeZuIvxjzZljfxNjd/media/699da56fe9512d2930aad21e.jpg',
  },
  {
    id: 4,
    title: 'Pool with Water Features',
    location: 'Eagle Mountain, UT',
    category: 'Pool Construction',
    image: 'https://assets.cdn.filesafe.space/VpxNeZuIvxjzZljfxNjd/media/699da7c52d8479b3ef5ed66a.jpg',
  },
  {
    id: 5,
    title: 'Retaining Wall & Stonework',
    location: 'Draper, UT',
    category: 'Concrete',
    image: 'https://assets.cdn.filesafe.space/VpxNeZuIvxjzZljfxNjd/media/699f51fef074ea4879d2208c.jpg',
  },
  {
    id: 6,
    title: 'Outdoor Kitchen & Patio',
    location: 'Saratoga Springs, UT',
    category: 'Landscaping',
    image: 'https://assets.cdn.filesafe.space/VpxNeZuIvxjzZljfxNjd/media/699f50235dbbe8b1c857bf2b.jpg',
  },
  {
    id: 7,
    title: 'Custom Stone Landscape',
    location: 'Bountiful, UT',
    category: 'Concrete',
    image: 'https://assets.cdn.filesafe.space/VpxNeZuIvxjzZljfxNjd/media/699f51fee3be14e39084df38.jpg',
  },
  {
    id: 8,
    title: 'Stone Patio & Steps',
    location: 'Eagle Mountain, UT',
    category: 'Concrete',
    image: 'https://assets.cdn.filesafe.space/VpxNeZuIvxjzZljfxNjd/media/699f51fe2837e84ab7a33e55.jpg',
  },
  {
    id: 9,
    title: 'Stone Walkway & Borders',
    location: 'Lehi, UT',
    category: 'Concrete',
    image: 'https://assets.cdn.filesafe.space/VpxNeZuIvxjzZljfxNjd/media/699f51fef074ea0321d2208d.jpg',
  },
  {
    id: 10,
    title: 'Decorative Stonework',
    location: 'Saratoga Springs, UT',
    category: 'Concrete',
    image: 'https://assets.cdn.filesafe.space/VpxNeZuIvxjzZljfxNjd/media/699f51fee3be1427f784df45.jpg',
  },
  {
    id: 11,
    title: 'Stamped Concrete Driveway',
    location: 'Lehi, UT',
    category: 'Concrete',
    image: 'https://assets.cdn.filesafe.space/VpxNeZuIvxjzZljfxNjd/media/699f4f728a039eccc1bca32e.jpg',
  },
  {
    id: 12,
    title: 'Decorative Concrete Patio',
    location: 'Bountiful, UT',
    category: 'Concrete',
    image: 'https://assets.cdn.filesafe.space/VpxNeZuIvxjzZljfxNjd/media/699f4f725dbbe846c65789df.jpg',
  },
  {
    id: 13,
    title: 'Concrete Pool Deck',
    location: 'Eagle Mountain, UT',
    category: 'Concrete',
    image: 'https://assets.cdn.filesafe.space/VpxNeZuIvxjzZljfxNjd/media/699f4f725dbbe85cf45789e0.jpg',
  },
  {
    id: 14,
    title: 'Custom Concrete Finish',
    location: 'Draper, UT',
    category: 'Concrete',
    image: 'https://assets.cdn.filesafe.space/VpxNeZuIvxjzZljfxNjd/media/699f4f72753f15299cf47d21.jpg',
  },
  {
    id: 15,
    title: 'Modern Pool Design',
    location: 'Saratoga Springs, UT',
    category: 'Pool Construction',
    image: 'https://assets.cdn.filesafe.space/VpxNeZuIvxjzZljfxNjd/media/699f502395735c151ac48c31.jpg',
  },
  {
    id: 16,
    title: 'Custom Inground Pool',
    location: 'Lehi, UT',
    category: 'Pool Construction',
    image: 'https://assets.cdn.filesafe.space/VpxNeZuIvxjzZljfxNjd/media/699f50239a0c1801d793bc5c.jpg',
  },
];

export function ProjectGrid() {
  const [lightbox, setLightbox] = useState<{ image: string; category: string } | null>(null);

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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {projects.map((project, index) => (
              <button
                key={project.id}
                onClick={() => setLightbox({ image: project.image, category: project.category })}
                className="group relative rounded-2xl overflow-hidden shadow-soft hover:shadow-card transition-all duration-300 cursor-zoom-in text-left"
              >
                <div className="relative aspect-[4/3] bg-slate-200">
                  <Image
                    src={project.image}
                    alt={`${project.category} by Timberline Falls`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    quality={70}
                    priority={index < 6}
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="inline-block px-2.5 py-1 text-xs font-medium bg-brand-600 text-white rounded-full">
                    {project.category}
                  </span>
                </div>
              </button>
            ))}
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
            className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors"
            aria-label="Close"
          >
            <X className="w-8 h-8" />
          </button>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
            <span className="px-3 py-1 text-xs font-medium bg-brand-600 text-white rounded-full">
              {lightbox.category}
            </span>
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={lightbox.image}
            alt={lightbox.category}
            onClick={(e) => e.stopPropagation()}
            className="max-w-[90vw] max-h-[90vh] object-contain rounded-lg shadow-2xl"
          />
        </div>
      )}
    </>
  );
}
