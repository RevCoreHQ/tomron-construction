import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { services, ServiceData } from '@/data/services';

interface ServiceCardsProps {
  category?: ServiceData['category'];
  limit?: number;
  title?: string;
  subtitle?: string;
}

export function ServiceCards({ category, limit, title, subtitle }: ServiceCardsProps) {
  let items = category ? services.filter((s) => s.category === category) : services;
  if (limit) items = items.slice(0, limit);

  return (
    <section className="section-padding">
      <div className="container-wide">
        {title && (
          <div className="mb-8">
            {subtitle && (
              <p className="text-sm font-semibold text-brand-600 uppercase tracking-wider mb-2">
                {subtitle}
              </p>
            )}
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-charcoal-900">
              {title}
            </h2>
          </div>
        )}
        <div className="divide-y divide-neutral-200 border-t border-neutral-200">
          {items.map((service, index) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group flex items-center gap-6 sm:gap-10 py-6 sm:py-8 transition-colors hover:bg-neutral-50 -mx-4 px-4 sm:-mx-6 sm:px-6"
            >
              <span className="text-3xl sm:text-4xl font-display font-extrabold text-neutral-200 group-hover:text-brand-200 transition-colors shrink-0 w-12 sm:w-16">
                {String(index + 1).padStart(2, '0')}
              </span>
              <div className="flex-1 min-w-0">
                <h3 className="text-lg sm:text-xl font-display font-bold text-charcoal-900 group-hover:text-brand-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-slate-500 mt-1 hidden sm:block line-clamp-2">
                  {service.metaDescription}
                </p>
              </div>
              <ArrowRight className="w-5 h-5 text-neutral-300 group-hover:text-brand-600 group-hover:translate-x-1 transition-all shrink-0" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
