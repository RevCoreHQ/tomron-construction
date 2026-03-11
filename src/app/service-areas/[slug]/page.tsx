import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { MapPin, ArrowRight, Phone, Shield, Clock, Star, CheckCircle, Droplets, TreePine, Hammer } from 'lucide-react';
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

const poolServices = services.filter((s) => s.category === 'pools');
const landscapeServices = services.filter((s) => s.category === 'landscape');
const concreteServices = services.filter((s) => s.category === 'concrete');

const serviceCategories = [
  {
    title: 'Swimming Pool Services',
    description: 'Custom in-ground pools, water features, 3D design, and pool renovations.',
    services: poolServices,
    icon: Droplets,
  },
  {
    title: 'Landscape Construction',
    description: 'Complete landscape design, artificial turf, outdoor kitchens, patios, and irrigation.',
    services: landscapeServices,
    icon: TreePine,
  },
  {
    title: 'Concrete Services',
    description: 'Driveways, retaining walls, stamped concrete, and decorative finishes.',
    services: concreteServices,
    icon: Hammer,
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
            `Pool Builder & Outdoor Living in ${area.city}`,
            area.metaDescription,
            `${siteConfig.url}/service-areas/${area.slug}`
          ),
        ]}
      />

      {/* Hero */}
      <section className="relative py-16 lg:py-24 bg-gradient-to-br from-slate-900 via-brand-950 to-slate-900 overflow-hidden">
        {area.heroImage && (
          <>
            <Image
              src={area.heroImage}
              alt={`${area.city} pool and outdoor living`}
              fill
              priority
              sizes="100vw"
              quality={60}
              className="object-cover object-center blur-[2px] scale-105"
            />
            <div className="absolute inset-0 bg-slate-950/80" />
          </>
        )}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: 'Service Areas', href: '/service-areas' },
              { label: `${area.city}, ${area.state}`, href: `/service-areas/${area.slug}` },
            ]}
            variant="dark"
          />
          <div className="max-w-3xl mt-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-medium bg-brand-600/20 text-brand-300 rounded-full mb-4">
              <MapPin className="w-3.5 h-3.5" />
              {area.isPrimary ? 'Primary Service Area' : 'Nearby Service Area'}
            </div>
            <h1 className="text-4xl sm:text-5xl font-display font-bold text-white mb-6">
              {area.h1}
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed mb-8">{area.intro}</p>
            {area.nearbyNote && (
              <div className="bg-brand-600/10 border border-brand-400/20 rounded-xl p-4 mb-8">
                <p className="text-brand-200 text-sm">{area.nearbyNote}</p>
              </div>
            )}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" size="lg">
                Get Your Free Estimate
              </Button>
              <Button
                href={`tel:${siteConfig.phoneRaw}`}
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white/10"
              >
                <Phone className="w-4 h-4 mr-2" />
                Call {siteConfig.phone}
              </Button>
            </div>
          </div>
        </div>
      </section>

      <TrustStrip />

      {/* Services Available */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 mb-4">
              Services Available in {area.city}
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Timberline Falls offers a full range of outdoor living construction services
              {area.isPrimary ? ` throughout ${area.city} and the surrounding area` : ` near ${area.city}`}.
              Click any service to learn more.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {serviceCategories.map((cat) => (
              <div key={cat.title} className="bg-white rounded-2xl border border-slate-100 shadow-soft overflow-hidden">
                <div className="p-6 border-b border-slate-100 bg-sand-50">
                  <cat.icon className="w-7 h-7 text-brand-600 mb-2" />
                  <h3 className="text-xl font-display font-bold text-slate-900 mb-1">{cat.title}</h3>
                  <p className="text-sm text-slate-600">{cat.description}</p>
                </div>
                <ul className="divide-y divide-slate-50">
                  {cat.services.map((s) => (
                    <li key={s.slug}>
                      <Link
                        href={`/services/${s.slug}`}
                        className="flex items-center justify-between px-6 py-4 hover:bg-sand-50 transition-colors group"
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
        <section className="section-padding bg-gradient-to-b from-sand-50 to-white">
          <div className="container-narrow">
            <div className="space-y-12">
              {area.body.map((section, i) => (
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

      {/* Why Timberline Falls */}
      <section className="section-padding bg-sand-50">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-display font-bold text-slate-900 mb-4">
              Why {area.city} Homeowners Choose Timberline Falls
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Star,
                title: '20+ Years Experience',
                text: 'Two decades of building premium outdoor spaces across the Wasatch Front.',
              },
              {
                icon: Shield,
                title: 'Licensed & Insured',
                text: 'Fully licensed, bonded, and insured for your complete peace of mind.',
              },
              {
                icon: CheckCircle,
                title: '3D Design Approval',
                text: 'See a photorealistic rendering of your project before construction starts.',
              },
              {
                icon: Clock,
                title: 'Free Estimates',
                text: 'No-obligation consultations and detailed project estimates at no cost.',
              },
            ].map((item) => (
              <div key={item.title} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-soft">
                <item.icon className="w-8 h-8 text-brand-600 mb-3" />
                <h3 className="font-display font-semibold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Areas */}
      <section className="section-padding">
        <div className="container-wide">
          <h2 className="text-2xl font-display font-bold text-slate-900 mb-6">
            We Also Serve These Utah Communities
          </h2>
          <div className="flex flex-wrap gap-3">
            {otherAreas.map((a) => (
              <Link
                key={a.slug}
                href={`/service-areas/${a.slug}`}
                className="inline-flex items-center gap-2 px-4 py-2 bg-sand-50 rounded-full text-sm font-medium text-slate-700 hover:bg-brand-50 hover:text-brand-700 transition-colors"
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
