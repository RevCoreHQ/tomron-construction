import { Star } from 'lucide-react';

/* TODO: Replace with real testimonials from verified customers. */
const testimonials = [
  {
    id: 'placeholder-1',
    quote: "We got quotes from three different pool companies and Timberline Falls was the only one that actually walked the whole yard with us before giving a number. The 3D design they did before breaking ground was incredible, my wife cried when she saw it. Pool was done by August and we used it every single weekend. Couldn't be happier.",
    author: 'Jason R.',
    location: 'Saratoga Springs, UT',
    service: 'Pool Construction',
    rating: 5,
  },
  {
    id: 'placeholder-2',
    quote: "Our backyard was basically a dirt pit for two years after we moved in. Timberline Falls turned it into something we actually want to spend time in. They handled the grading, the sod, a small retaining wall, and even ran the irrigation. The crew was respectful of our property and cleaned up every day before they left. Genuinely impressed.",
    author: 'Amber T.',
    location: 'Bountiful, UT',
    service: 'Landscape Construction',
    rating: 5,
  },
  {
    id: 'placeholder-3',
    quote: "Had them pour a new driveway and an RV pad on the side of the house. Straightforward job but they showed up when they said they would, did clean work, and the finish has held up perfectly through two winters now. Already recommended them to my brother-in-law in Eagle Mountain.",
    author: 'Derek M.',
    location: 'Lehi, UT',
    service: 'Concrete & RV Pad',
    rating: 5,
  },
];

export function TestimonialCards() {
  return (
    <section className="section-padding bg-gradient-to-b from-sand-50 to-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="orb w-[300px] h-[300px] bg-brand-100/30 top-[10%] -right-[5%]" />

      <div className="container-wide relative z-10">
        <div className="text-center mb-12 lg:mb-16">
          <p className="inline-flex items-center gap-2 text-sm font-medium tracking-wider uppercase mb-3">
            <span className="w-6 h-px bg-accent-gold" />
            <span className="gradient-text-gold">Client Experiences</span>
            <span className="w-6 h-px bg-accent-gold" />
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-slate-900">
            What Our Clients Say
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="relative bg-white rounded-2xl p-6 lg:p-8 shadow-soft border border-slate-100 border-l-4 border-l-brand-500 hover:shadow-card transition-all duration-300"
            >
              {/* Large decorative quote mark */}
              <span className="absolute top-4 right-5 text-6xl font-display text-brand-100/60 leading-none select-none pointer-events-none">
                &ldquo;
              </span>

              <div className="relative z-10">
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-slate-700 leading-relaxed mb-5 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-100 to-brand-200 flex items-center justify-center">
                    <span className="text-sm font-bold text-brand-700">{t.author[1]}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">{t.author}</p>
                    <p className="text-sm text-slate-500">{t.location} · {t.service}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
