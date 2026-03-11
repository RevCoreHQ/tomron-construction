import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { services, getServiceBySlug, getRelatedServices } from '@/data/services';
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

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: 'Home', url: siteConfig.url },
            { name: 'Services', url: `${siteConfig.url}/services` },
            { name: service.title, url: `${siteConfig.url}/services/${service.slug}` },
          ]),
          serviceSchema(service.title, service.metaDescription, `${siteConfig.url}/services/${service.slug}`),
          faqSchema(service.faqs),
        ]}
      />

      {/* Hero */}
      <section className="relative py-16 lg:py-24 bg-gradient-to-br from-slate-900 via-brand-950 to-slate-900 overflow-hidden">
        {service.heroImage && (
          <>
            <Image
              src={service.heroImage}
              alt={service.heroAlt}
              fill
              priority
              sizes="100vw"
              quality={70}
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-slate-950/75" />
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
            <span className="inline-block px-3 py-1 text-xs font-medium bg-brand-600/20 text-brand-300 rounded-full mb-4 capitalize">
              {service.category}
            </span>
            <h1 className="text-4xl sm:text-5xl font-display font-bold text-white mb-6">
              {service.h1}
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed mb-8">{service.intro}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" size="lg">Get Your Free {service.shortTitle} Quote</Button>
              <Button href={`tel:${siteConfig.phoneRaw}`} variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
                Call {siteConfig.phone}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding">
        <div className="container-wide">
          <h2 className="text-3xl font-display font-bold text-slate-900 mb-8">What&apos;s Included</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {service.features.map((feature, i) => (
              <div key={i} className="flex items-start gap-3 p-4 bg-sand-50 rounded-xl">
                <div className="w-6 h-6 rounded-full bg-brand-100 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-brand-700 text-xs font-bold">{i + 1}</span>
                </div>
                <p className="text-sm text-slate-700 leading-relaxed">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Body content sections */}
      {service.body.length > 0 && (
        <section className="section-padding bg-gradient-to-b from-sand-50 to-white">
          <div className="container-narrow">
            <div className="space-y-12">
              {service.body.map((section, i) => (
                <div key={i}>
                  <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 mb-4">
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

      {/* FAQ */}
      <FAQAccordion faqs={service.faqs} title="Common Questions" subtitle="FAQ" />

      {/* Related Services */}
      {related.length > 0 && (
        <section className="section-padding">
          <div className="container-wide">
            <h2 className="text-3xl font-display font-bold text-slate-900 mb-8">Related Services</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/services/${r.slug}`}
                  className="group p-5 bg-white rounded-xl border border-slate-100 shadow-soft hover:shadow-card hover:-translate-y-0.5 transition-all"
                >
                  <h3 className="font-display font-semibold text-slate-900 mb-2 group-hover:text-brand-600 transition-colors">
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
