import Image from 'next/image';
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
          <div className="text-center mb-12 lg:mb-16">
            {subtitle && (
              <p className="text-sm font-semibold text-brand-600 uppercase tracking-wider mb-2">
                {subtitle}
              </p>
            )}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-charcoal-900">
              {title}
            </h2>
          </div>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {items.map((service, index) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group relative bg-white rounded-lg border border-slate-100 p-6 lg:p-8 shadow-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative h-48 mb-6 rounded-lg overflow-hidden bg-slate-200">
                {service.heroImage && (
                  <Image
                    src={service.heroImage}
                    alt={service.heroAlt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    quality={75}
                    priority={index < 3}
                    className="object-cover object-[40%_50%] scale-110"
                  />
                )}
              </div>
              <div className="inline-block px-2.5 py-1 text-xs font-medium bg-brand-50 text-brand-700 rounded-full mb-3 capitalize">
                {service.category}
              </div>
              <h3 className="text-xl font-display font-semibold text-slate-900 mb-3 group-hover:text-brand-600 transition-colors">
                {service.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-4 line-clamp-3">
                {service.intro}
              </p>
              <span className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-600 group-hover:gap-2.5 transition-all">
                Learn More <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
