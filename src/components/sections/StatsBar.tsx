const stats = [
  { value: '10+', label: 'Years Experience' },
  { value: '500+', label: 'Projects Completed' },
  { value: '100%', label: 'Satisfaction Rate' },
  { value: '5.0', label: 'Star Google Rating' },
];

export function StatsBar() {
  return (
    <section className="py-12 sm:py-16 border-y border-neutral-200">
      <div className="container-wide px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center lg:text-left">
              <div className="text-4xl sm:text-5xl font-display font-extrabold text-charcoal-900 mb-1 tabular-nums">
                {stat.value}
              </div>
              <p className="text-sm font-medium text-slate-500 uppercase tracking-wider">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
