import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, AlertTriangle, CheckCircle } from 'lucide-react';
import { services, getServiceBySlug, getRelatedServices } from '@/data/services';
import { productBrands } from '@/data/products';
import { BrandLogo } from '@/components/ui/BrandLogo';
import { siteConfig } from '@/data/site-config';
import { generatePageMetadata } from '@/lib/metadata';
import { JsonLd } from '@/components/seo/JsonLd';
import { breadcrumbSchema, serviceSchema, faqSchema } from '@/lib/schema';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Button } from '@/components/ui/Button';
import { FAQAccordion } from '@/components/sections/FAQAccordion';
import { CTASection } from '@/components/sections/CTASection';

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return generatePageMetadata({
    title: service.metaTitle,
    description: service.metaDescription,
    path: `/services/${service.slug}`,
  });
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const related = getRelatedServices(service.relatedSlugs);
  const brands = service.brandSlugs
    .map((slug) => productBrands.find((b) => b.slug === slug))
    .filter(Boolean);

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: 'Home', url: siteConfig.url },
            { name: 'Services', url: `${siteConfig.url}/services` },
            { name: service.title, url: `${siteConfig.url}/services/${service.slug}` },
          ]),
          serviceSchema(service.title, service.metaDescription, `${siteConfig.url}/services/${service.slug}`, {
            image: service.heroImage,
            category: service.category,
          }),
          faqSchema(service.faqs),
        ]}
      />

      {/* Hero */}
      <section className="relative py-16 lg:py-24 bg-charcoal-900 overflow-hidden">
        {service.heroImage && (
          <>
            <Image
              src={service.heroImage}
              alt={service.heroAlt}
              fill
              priority
              sizes="100vw"
              quality={70}
              className="object-cover object-[40%_50%] scale-110"
            />
            <div className="absolute inset-0 bg-charcoal-950/75" />
          </>
        )}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: 'Services', href: '/services' },
              { label: service.title, href: `/services/${service.slug}` },
            ]}
            variant="dark"
          />
          <div className="max-w-3xl mt-4">
            <span className="inline-block px-3 py-1 text-xs font-semibold bg-brand-600/20 text-brand-400 rounded-md mb-4 capitalize">
              {service.category}
            </span>
            <h1 className="text-4xl sm:text-5xl font-display font-extrabold text-white mb-6">
              {service.h1}
            </h1>
            <p className="text-xl text-white/60 leading-relaxed mb-8">{service.intro}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" size="lg">Get Your Free {service.shortTitle} Quote</Button>
              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-medium text-white/70 border border-white/20 rounded-lg hover:text-white hover:border-white/40 transition-all"
              >
                Call {siteConfig.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding">
        <div className="container-wide">
          <h2 className="text-3xl font-display font-extrabold text-charcoal-900 mb-8">What&apos;s Included</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {service.features.map((feature, i) => (
              <div key={i} className="flex items-start gap-3 p-4 bg-neutral-50 rounded-lg">
                <div className="w-6 h-6 rounded-full bg-brand-100 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-brand-700 text-xs font-bold">{i + 1}</span>
                </div>
                <p className="text-sm text-slate-700 leading-relaxed">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Warning Signals */}
      {service.warningSignals.length > 0 && (
        <section className="section-padding bg-charcoal-900">
          <div className="container-wide">
            <div className="flex items-center gap-3 mb-2">
              <AlertTriangle className="w-5 h-5 text-amber-400" />
              <p className="text-sm font-semibold text-amber-400 uppercase tracking-wider">Warning Signs</p>
            </div>
            <h2 className="text-3xl font-display font-extrabold text-white mb-8">
              Signs You May Need {service.shortTitle}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {service.warningSignals.map((signal, i) => (
                <div key={i} className="flex items-start gap-3 p-4 bg-white/5 rounded-lg border border-white/10">
                  <CheckCircle className="w-5 h-5 text-brand-400 shrink-0 mt-0.5" />
                  <p className="text-sm text-white/70 leading-relaxed">{signal}</p>
                </div>
              ))}
            </div>
            <p className="text-white/40 text-sm mt-6">
              Recognise any of these?{' '}
              <Link href="/contact" className="text-brand-400 font-semibold hover:text-brand-300 transition-colors">
                Book a free inspection
              </Link>{' '}
              and we will assess your home at no cost.
            </p>
          </div>
        </section>
      )}

      {/* Body content sections */}
      {service.body.length > 0 && (
        <section className="section-padding bg-neutral-50">
          <div className="container-narrow">
            <div className="space-y-12">
              {service.body.map((section, i) => (
                <div key={i}>
                  <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-charcoal-900 mb-4">
                    {section.heading}
                  </h2>
                  <p className="text-slate-600 leading-relaxed text-base lg:text-lg">
                    {section.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Products & Brands We Use */}
      {brands.length > 0 && (
        <section className="section-padding">
          <div className="container-wide">
            <p className="text-sm font-semibold text-brand-600 uppercase tracking-wider mb-2">Trusted Partners</p>
            <h2 className="text-3xl font-display font-extrabold text-charcoal-900 mb-3">
              Products &amp; Brands We Use
            </h2>
            <p className="text-slate-500 mb-8 max-w-2xl">
              We work with industry-leading manufacturers to ensure every project uses the best materials for the Lower Mainland climate.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {brands.map((brand) => (
                <Link
                  key={brand!.slug}
                  href="/products"
                  className="group flex items-start gap-4 p-5 bg-white rounded-lg border border-neutral-200 hover:border-brand-300 hover:-translate-y-0.5 transition-all"
                >
                  <BrandLogo name={brand!.name} logoUrl={brand!.logoUrl} />
                  <div className="min-w-0">
                    <h3 className="font-display font-bold text-charcoal-900 group-hover:text-brand-600 transition-colors text-sm">
                      {brand!.name}
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5">{brand!.categoryLabel}</p>
                    <p className="text-xs text-slate-400 mt-1 line-clamp-2">{brand!.features[0]}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <FAQAccordion faqs={service.faqs} title="Common Questions" subtitle="FAQ" />

      {/* Related Services */}
      {related.length > 0 && (
        <section className="section-padding">
          <div className="container-wide">
            <h2 className="text-3xl font-display font-extrabold text-charcoal-900 mb-8">Related Services</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/services/${r.slug}`}
                  className="group p-5 bg-white rounded-lg border border-neutral-200 hover:border-brand-300 hover:-translate-y-0.5 transition-all"
                >
                  <h3 className="font-display font-semibold text-charcoal-900 mb-2 group-hover:text-brand-600 transition-colors">
                    {r.title}
                  </h3>
                  <span className="inline-flex items-center gap-1 text-sm text-brand-600 font-medium">
                    Learn more <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection />
    </>
  );
}
