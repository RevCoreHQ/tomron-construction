'use client';

import { Star, ExternalLink, Quote } from 'lucide-react';
import { ScrollReveal } from '@/components/motion/ScrollReveal';
import { reviews } from '@/data/reviews';

export function ReviewWall() {
  const avgRating = 5;
  const totalReviews = reviews.length;

  return (
    <section className="section-padding bg-charcoal-900" aria-label="Client Reviews">
      <div className="container-wide">
        <ScrollReveal>
          <div className="text-center mb-16">
            {/* Google Rating Badge */}
            <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-white/5 border border-white/10 rounded-full mb-6">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-brand-500 text-brand-500" />
                ))}
              </div>
              <span className="text-sm font-semibold text-white">{avgRating}.0</span>
              <span className="w-px h-4 bg-white/20" />
              <span className="text-sm text-white/50">Google Reviews</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white mb-4">
              Hear It from Our Clients
            </h2>
            <p className="text-white/40 max-w-xl mx-auto">
              Every review is from a verified Google Business listing. We let our work speak for itself.
            </p>
          </div>
        </ScrollReveal>

        {/* Reviews — large, premium cards */}
        <div className="space-y-6 max-w-4xl mx-auto">
          {reviews.map((review, i) => (
            <ScrollReveal key={review.id} delay={i * 0.15}>
              <div className="relative bg-white/[0.03] border border-white/10 rounded-2xl p-8 sm:p-10 hover:bg-white/[0.06] transition-colors">
                {/* Decorative quote mark */}
                <Quote className="absolute top-6 right-6 w-10 h-10 text-brand-600/20" />

                {/* Stars */}
                <div className="flex gap-1 mb-6" role="img" aria-label={`${review.rating} out of 5 stars`}>
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-brand-500 text-brand-500" />
                  ))}
                </div>

                {/* Quote — large, prominent */}
                <blockquote className="text-lg sm:text-xl lg:text-2xl font-display font-semibold text-white leading-relaxed mb-8">
                  &ldquo;{review.quote}&rdquo;
                </blockquote>

                {/* Author */}
                <div className="flex items-center justify-between gap-4 pt-6 border-t border-white/10">
                  <div className="flex items-center gap-4">
                    {/* Avatar initial */}
                    <div className="w-11 h-11 rounded-full bg-brand-600/20 border border-brand-600/30 flex items-center justify-center">
                      <span className="text-sm font-bold text-brand-400">{review.author.charAt(0)}</span>
                    </div>
                    <div>
                      <p className="font-semibold text-white">{review.author}</p>
                      <p className="text-sm text-white/40">{review.location}</p>
                    </div>
                  </div>
                  <span className="hidden sm:inline-flex items-center px-3 py-1 text-xs font-semibold text-brand-400 bg-brand-600/15 rounded-full border border-brand-600/20">
                    {review.service}
                  </span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Google link */}
        <div className="text-center mt-10">
          <a
            href="https://www.google.com/maps/place/Tomron+Construction"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-white/50 border border-white/10 rounded-lg hover:text-white/80 hover:border-white/25 transition-all"
          >
            Read all reviews on Google
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
