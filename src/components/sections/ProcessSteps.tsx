const steps = [
  {
    number: '01',
    title: 'Free Consultation',
    description: 'We visit your property, listen to your vision, assess the site, and discuss your goals and budget.',
  },
  {
    number: '02',
    title: '3D Design & Approval',
    description: 'Our team creates a detailed 3D rendering of your project. You review, refine, and approve every detail before we start.',
  },
  {
    number: '03',
    title: 'Expert Construction',
    description: 'Our experienced crew handles every aspect of the build, including permits, materials, craftsmanship, and scheduling.',
  },
  {
    number: '04',
    title: 'Final Walkthrough',
    description: 'We walk the completed project with you, ensure everything meets your expectations, and hand over your transformed space.',
  },
];

export function ProcessSteps() {
  return (
    <section className="section-padding bg-gradient-to-b from-white via-sand-50/50 to-white">
      <div className="container-wide">
        <div className="text-center mb-12 lg:mb-16">
          <p className="inline-flex items-center gap-2 text-sm font-medium tracking-wider uppercase mb-3">
            <span className="w-6 h-px bg-accent-gold" />
            <span className="gradient-text-gold">Our Process</span>
            <span className="w-6 h-px bg-accent-gold" />
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-slate-900">
            From Vision to Reality
          </h2>
        </div>
        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Connecting line (desktop only) */}
          <div className="hidden lg:block absolute top-10 left-[12%] right-[12%] h-px bg-gradient-to-r from-transparent via-brand-200 to-transparent" />

          {steps.map((step, i) => (
            <div key={step.number} className="relative text-center lg:text-left">
              {/* Step circle */}
              <div className="relative inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-brand-50 to-brand-100 border-2 border-brand-200 mb-5 shadow-soft">
                <span className="text-xl font-display font-bold gradient-text">{step.number}</span>
                {/* Dot on the connecting line */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute -right-2 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-brand-300" />
                )}
              </div>
              <h3 className="text-xl font-display font-semibold text-slate-900 mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
