'use client';

import { useState, useRef, useCallback, useEffect } from 'react';
import { motion, useMotionValue, useTransform, useReducedMotion } from 'framer-motion';
import { ArrowLeftRight, MapPin } from 'lucide-react';
import { ScrollReveal } from '@/components/motion/ScrollReveal';
import { beforeAfterProjects } from '@/data/before-after-projects';

export function BeforeAfterSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const prefersReduced = useReducedMotion();

  const project = beforeAfterProjects[activeIndex];

  // Track container width for position calculations
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new ResizeObserver((entries) => {
      setContainerWidth(entries[0].contentRect.width);
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Slider position as motion value (0 to containerWidth)
  const x = useMotionValue(containerWidth * 0.5);
  const clipPercent = useTransform(x, [0, containerWidth || 1], [0, 100]);

  // Reset slider to 50% when project changes or container resizes
  useEffect(() => {
    if (containerWidth > 0) {
      x.set(containerWidth * 0.5);
    }
  }, [activeIndex, containerWidth, x]);

  const handlePointerMove = useCallback(
    (e: React.PointerEvent) => {
      if (e.buttons === 0 && e.pointerType === 'mouse') return;
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;
      const pos = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
      x.set(pos);
    },
    [x],
  );

  const handlePointerDown = useCallback(
    (e: React.PointerEvent) => {
      (e.target as HTMLElement).setPointerCapture(e.pointerId);
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;
      const pos = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
      x.set(pos);
    },
    [x],
  );

  // Reduced motion fallback: side-by-side layout
  if (prefersReduced) {
    return (
      <section className="section-padding bg-gradient-to-br from-neutral-50 via-white to-brand-50/30">
        <div className="container-wide">
          <ScrollReveal>
            <div className="text-center mb-12">
              <p className="text-sm font-semibold text-brand-600 uppercase tracking-wider mb-2">
                Transformations
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-charcoal-900">
                See the Difference
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-2 gap-4 max-w-4xl mx-auto">
            <div>
              <p className="text-sm font-semibold text-slate-500 mb-2">Before</p>
              <img src={project.beforeImage} alt={`Before: ${project.title}`} className="w-full rounded-lg" />
            </div>
            <div>
              <p className="text-sm font-semibold text-brand-600 mb-2">After</p>
              <img src={project.afterImage} alt={`After: ${project.title}`} className="w-full rounded-lg" />
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section-padding bg-gradient-to-br from-neutral-50 via-white to-brand-50/30">
      <div className="container-wide">
        <ScrollReveal>
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-brand-600 uppercase tracking-wider mb-2">
              Transformations
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-charcoal-900 mb-4">
              See the Difference
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              Drag the slider to compare before and after on real Tomron Construction projects.
            </p>
          </div>
        </ScrollReveal>

        {/* Project Tabs */}
        <div className="flex justify-center gap-2 mb-8">
          {beforeAfterProjects.map((p, i) => (
            <button
              key={p.id}
              onClick={() => setActiveIndex(i)}
              className={`px-4 py-2 text-sm font-semibold rounded-full transition-all ${
                i === activeIndex
                  ? 'bg-brand-600 text-white'
                  : 'bg-neutral-100 text-slate-600 hover:bg-neutral-200'
              }`}
            >
              {p.title}
            </button>
          ))}
        </div>

        {/* Slider Container */}
        <div className="max-w-4xl mx-auto">
          <div
            ref={containerRef}
            className="relative w-full aspect-[4/3] rounded-xl overflow-hidden cursor-col-resize select-none touch-none shadow-lg"
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
          >
            {/* Before Image (full width, behind) */}
            <img
              src={project.beforeImage}
              alt={`Before: ${project.title}`}
              className="absolute inset-0 w-full h-full object-cover"
              draggable={false}
            />

            {/* After Image (clipped) */}
            <motion.div
              className="absolute inset-0"
              style={{ clipPath: useTransform(clipPercent, (v) => `inset(0 ${100 - v}% 0 0)`) }}
            >
              <img
                src={project.afterImage}
                alt={`After: ${project.title}`}
                className="absolute inset-0 w-full h-full object-cover"
                draggable={false}
              />
            </motion.div>

            {/* Divider Line */}
            <motion.div
              className="absolute top-0 bottom-0 w-0.5 bg-white z-10 pointer-events-none"
              style={{ left: x }}
            />

            {/* Drag Handle */}
            <motion.div
              className="absolute top-1/2 -translate-y-1/2 z-20 pointer-events-none"
              style={{ left: x, x: '-50%' }}
            >
              <div className="w-10 h-10 rounded-full bg-brand-600 shadow-lg flex items-center justify-center border-2 border-white">
                <ArrowLeftRight className="w-4 h-4 text-white" />
              </div>
            </motion.div>

            {/* Before/After Labels */}
            <div className="absolute top-4 left-4 z-10">
              <span className="px-3 py-1 text-xs font-bold text-white bg-black/50 backdrop-blur-sm rounded-full">
                Before
              </span>
            </div>
            <div className="absolute top-4 right-4 z-10">
              <span className="px-3 py-1 text-xs font-bold text-white bg-brand-600/80 backdrop-blur-sm rounded-full">
                After
              </span>
            </div>
          </div>

          {/* Project Info */}
          <div className="mt-6 text-center">
            <h3 className="text-xl font-display font-bold text-charcoal-900 mb-1">
              {project.title}
            </h3>
            <p className="inline-flex items-center gap-1.5 text-sm text-slate-500 mb-2">
              <MapPin className="w-3.5 h-3.5" />
              {project.location}
            </p>
            <p className="text-sm text-slate-600 max-w-xl mx-auto">{project.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
