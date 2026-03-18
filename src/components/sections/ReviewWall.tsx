'use client';

import { useState } from 'react';
import { Star, ChevronDown, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { StaggerChildren, staggerItem } from '@/components/motion/StaggerChildren';
import { ScrollReveal } from '@/components/motion/ScrollReveal';
import { reviews } from '@/data/reviews';

const INITIAL_COUNT = 9;

export function ReviewWall() {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? reviews : reviews.slice(0, INITIAL_COUNT);

  return (
    <section className="section-padding bg-charcoal-900">
      <div className="container-wide">
        <ScrollReveal>
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-brand-400 uppercase tracking-wider mb-2">
              Real Reviews
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white mb-4">
              What Homeowners Are Saying
            </h2>
            <p className="text-white/50 max-w-2xl mx-auto">
              Real feedback from homeowners across the Lower Mainland. Every review is from a verified Google Business listing.
            </p>
          </div>
        </ScrollReveal>

        <StaggerChildren
          className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4"
          staggerDelay={0.06}
        >
          {visible.map((review) => (
            <motion.div
              key={review.id}
              variants={staggerItem}
              className="break-inside-avoid bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 p-5 hover:bg-white/[0.08] transition-colors"
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-brand-500 text-brand-500" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-sm text-white/70 leading-relaxed mb-4">
                &ldquo;{review.quote}&rdquo;
              </p>

              {/* Author + Meta */}
              <div className="flex items-center justify-between gap-2">
                <div>
                  <p className="text-sm font-semibold text-white">{review.author}</p>
                  <p className="text-xs text-white/40">{review.location}</p>
                </div>
                <span className="inline-flex items-center px-2 py-0.5 text-[10px] font-semibold text-brand-400 bg-brand-600/20 rounded">
                  {review.service}
                </span>
              </div>
            </motion.div>
          ))}
        </StaggerChildren>

        <AnimatePresence>
          {!showAll && reviews.length > INITIAL_COUNT && (
            <motion.div
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center mt-8"
            >
              <button
                onClick={() => setShowAll(true)}
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white border border-white/20 rounded-lg hover:bg-white/10 hover:border-white/40 transition-all"
              >
                Show All {reviews.length} Reviews
                <ChevronDown className="w-4 h-4" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Google link */}
        <div className="text-center mt-8">
          <a
            href="https://www.google.com/maps/place/Tomron+Construction"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-white/40 hover:text-white/70 transition-colors"
          >
            View all reviews on Google <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </section>
  );
}
