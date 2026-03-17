import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { MapPin, ArrowRight, Phone, Shield, Clock, Star, CheckCircle } from 'lucide-react';
import { serviceAreas, getServiceAreaBySlug } from '@/data/service-areas';
import { services } from '@/data/services';
import { siteConfig } from '@/data/site-config';
import { generatePageMetadata } from '@/lib/metadata';
import { JsonLd } from '@/components/seo/JsonLd';
import { breadcrumbSchema, serviceSchema } from '@/lib/schema';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Button } from '@/components/ui/Button';
import { TrustStrip } from '@/components/sections/TrustStrip';
import { CTASection } from '@/components/sections/CTASection';

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return serviceAreas.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const area = getServiceAreaBySlug(slug);
  if (!area) return {};
  return generatePageMetadata({
    title: area.metaTitle,
    description: area.metaDescription,
    path: `/service-areas/${area.slug}`,
  });
}

const exteriorServices = services.filter((s) => s.category === 'exterior');
const renovationServices = services.filter((s) => s.category === 'renovation');
const openingsServices = services.filter((s) => s.category === 'openings');

const serviceCategories = [
  {
    title: 'Exterior Services',
    description: 'Siding, cladding, metal flashing, and building envelope solutions.',
    services: exteriorServices,
  },
  {
    title: 'Windows & Doors',
    description: 'Window and door replacement with expert installation and sealing.',
    services: openingsServices,
  },
  {
    title: 'Renovation',
    description: 'Full home renovations from single rooms to complete transformations.',
    services: renovationServices,
  },
];

export default async function ServiceAreaPage({ params }: Props) {
  const { slug } = await params;
  const area = getServiceAreaBySlug(slug);
  if (!area) notFound();

  const otherAreas = serviceAreas.filter((a) => a.slug !== area.slug);

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: 'Home', url: siteConfig.url },
            { name: 'Service Areas', url: `${siteConfig.url}/service-areas` },
            { name: `${area.city}, ${area.state}`, url: `${siteConfig.url}/service-areas/${area.slug}` },
          ]),
          serviceSchema(
            `Siding & Exterior Contractor in ${area.city}`,
            area.metaDescription,
            `${siteConfig.url}/service-areas/${area.slug}`,
            { areaName: area.city }
          ),
        ]}
      />

      {/* Hero */}
      <section className="relative py-16 lg:py-24 bg-charcoal-900 overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: 'Service Areas', href: '/service-areas' },
              { label: `${area.city}, ${area.state}`, href: `/service-areas/${area.slug}` },
            ]}
            variant="dark"
          />
          <div className="max-w-3xl mt-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold bg-brand-600/20 text-brand-400 rounded-md mb-4">
              <MapPin className="w-3.5 h-3.5" />
              {area.isPrimary ? 'Primary Service Area' : 'Extended Service Area'}
            </div>
            <h1 className="text-4xl sm:text-5xl font-display font-extrabold text-white mb-6">
              {area.h1}
            </h1>
            <p className="text-xl text-white/60 leading-relaxed mb-8">{area.intro}</p>
            {area.nearbyNote && (
              <div className="bg-brand-600/10 border border-brand-500/20 rounded-lg p-4 mb-8">
                <p className="text-brand-300 text-sm">{area.nearbyNote}</p>
              </div>
            )}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" size="lg">
                Get Your Free Quote
              </Button>
              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-medium text-white/70 border border-white/20 rounded-lg hover:text-white hover:border-white/40 transition-all"
              >
                <Phone className="w-4 h-4" />
                Call {siteConfig.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      <TrustStrip />

      {/* Services Available */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="max-w-2xl mb-10">
            <p className="text-sm font-semibold text-brand-600 uppercase tracking-wider mb-2">Services</p>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-charcoal-900 mb-4">
              Services Available in {area.city}
            </h2>
            <p className="text-slate-500 leading-relaxed">
              Tomron Construction offers a full range of siding, exterior, and renovation services
              {area.isPrimary ? ` throughout ${area.city} and the surrounding area` : ` near ${area.city}`}.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {serviceCategories.map((cat) => (
              <div key={cat.title} className="bg-white rounded-lg border border-neutral-200 overflow-hidden">
                <div className="p-6 border-b border-neutral-200 bg-neutral-50">
                  <h3 className="text-lg font-display font-bold text-charcoal-900 mb-1">{cat.title}</h3>
                  <p className="text-sm text-slate-500">{cat.description}</p>
                </div>
                <ul className="divide-y divide-neutral-100">
                  {cat.services.map((s) => (
                    <li key={s.slug}>
                      <Link
                        href={`/services/${s.slug}`}
                        className="flex items-center justify-between px-6 py-4 hover:bg-neutral-50 transition-colors group"
                      >
                        <span className="text-sm font-medium text-slate-700 group-hover:text-brand-600 transition-colors">
                          {s.shortTitle}
                        </span>
                        <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-brand-600 transition-colors" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Body content sections */}
      {area.body.length > 0 && (
        <section className="section-padding bg-neutral-50">
          <div className="container-narrow">
            <div className="space-y-12">
              {area.body.map((section, i) => (
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

      {/* Why Tomron */}
      <section className="section-padding">
        <div className="container-wide">
          <h2 className="text-3xl font-display font-extrabold text-charcoal-900 mb-8">
            Why {area.city} Homeowners Choose Tomron
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                icon: Star,
                title: '10+ Years Experience',
                text: 'Over a decade of exterior construction expertise across the Lower Mainland.',
              },
              {
                icon: Shield,
                title: 'Licensed & Insured',
                text: 'Fully licensed and insured with comprehensive coverage for your peace of mind.',
              },
              {
                icon: CheckCircle,
                title: 'Industry-Leading Warranty',
                text: 'We stand behind every project with a warranty that gives you confidence.',
              },
              {
                icon: Clock,
                title: 'Free Quotes',
                text: 'No-obligation consultations and detailed project proposals at no cost.',
              },
            ].map((item) => (
              <div key={item.title} className="bg-neutral-50 p-6 rounded-lg border border-neutral-200">
                <item.icon className="w-7 h-7 text-brand-600 mb-3" />
                <h3 className="font-display font-bold text-charcoal-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Areas */}
      <section className="section-padding bg-neutral-50">
        <div className="container-wide">
          <h2 className="text-2xl font-display font-extrabold text-charcoal-900 mb-6">
            We Also Serve These BC Communities
          </h2>
          <div className="flex flex-wrap gap-3">
            {otherAreas.map((a) => (
              <Link
                key={a.slug}
                href={`/service-areas/${a.slug}`}
                className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-neutral-200 text-sm font-medium text-slate-700 hover:border-brand-300 hover:text-brand-600 transition-colors"
              >
                <MapPin className="w-3.5 h-3.5" />
                {a.city}, {a.state}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
