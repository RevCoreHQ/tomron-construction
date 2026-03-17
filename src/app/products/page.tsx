import { Metadata } from 'next';
import Link from 'next/link';
import { ExternalLink, CheckCircle, ArrowRight, BadgeCheck } from 'lucide-react';
import { BrandLogo } from '@/components/ui/BrandLogo';
import { productBrands, brandCategories } from '@/data/products';
import { siteConfig } from '@/data/site-config';
import { generatePageMetadata } from '@/lib/metadata';
import { JsonLd } from '@/components/seo/JsonLd';
import { breadcrumbSchema } from '@/lib/schema';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Button } from '@/components/ui/Button';
import { CTASection } from '@/components/sections/CTASection';

export const metadata: Metadata = generatePageMetadata({
  title: 'Products & Trusted Partners | Tomron Construction',
  description:
    'Explore the premium siding, window, glass, and building products Tomron Construction installs. Authorized dealer for James Hardie, Mitten Siding, Centra Windows, Vitrum Glass, and more across the Lower Mainland.',
  path: '/products',
});

export default function ProductsPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: 'Home', url: siteConfig.url },
            { name: 'Products & Partners', url: `${siteConfig.url}/products` },
          ]),
        ]}
      />

      {/* Hero */}
      <section className="relative py-16 lg:py-24 bg-charcoal-900 overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Products & Partners', href: '/products' }]} variant="dark" />
          <div className="max-w-3xl mt-4">
            <h1 className="text-4xl sm:text-5xl font-display font-extrabold text-white mb-6">
              Products & Trusted Partners
            </h1>
            <p className="text-xl text-white/60 leading-relaxed mb-8">
              We install only premium, proven products from manufacturers we trust. Every brand we work with has been vetted for quality, warranty, and performance in BC&apos;s demanding climate.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" size="lg">
                Get a Free Quote
              </Button>
              <Link
                href="/products/glass-performance"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 text-base font-medium text-white/70 border border-white/20 rounded-lg hover:text-white hover:border-white/40 transition-all"
              >
                Glass Performance Guide <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Categories */}
      {brandCategories.map((cat) => {
        const brands = productBrands.filter((b) => b.category === cat.key);
        if (brands.length === 0) return null;

        return (
          <section
            key={cat.key}
            className={`section-padding ${cat.key === 'windows' || cat.key === 'building-products' ? 'bg-neutral-50' : ''}`}
          >
            <div className="container-wide">
              <div className="mb-8">
                <p className="text-sm font-semibold text-brand-600 uppercase tracking-wider mb-2">{cat.label}</p>
                <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-charcoal-900 mb-2">
                  {cat.label}
                </h2>
                <p className="text-slate-500 leading-relaxed max-w-2xl">{cat.description}</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {brands.map((brand) => (
                  <div
                    key={brand.slug}
                    className="bg-white rounded-lg border border-neutral-200 p-6 lg:p-8 hover:border-brand-300 transition-colors"
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <BrandLogo name={brand.name} logoUrl={brand.logoUrl} />
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="text-xl font-display font-bold text-charcoal-900">{brand.name}</h3>
                          {brand.isAuthorizedVendor && (
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 text-xs font-semibold bg-brand-50 text-brand-700 rounded-md">
                              <BadgeCheck className="w-3 h-3" /> Authorized Vendor
                            </span>
                          )}
                        </div>
                        <p className="text-sm font-medium text-brand-600">{brand.categoryLabel}</p>
                      </div>
                    </div>

                    <p className="text-slate-600 text-sm leading-relaxed mb-5">{brand.description}</p>

                    {/* Features */}
                    <ul className="space-y-2 mb-6">
                      {brand.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2 text-sm text-slate-700">
                          <CheckCircle className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {/* Links */}
                    <div className="flex flex-wrap gap-3">
                      <a
                        href={brand.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 hover:text-brand-700 transition-colors"
                      >
                        Visit Website <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                      {brand.catalogueUrl && (
                        <a
                          href={brand.catalogueUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-600 hover:text-brand-600 transition-colors"
                        >
                          Product Catalogue <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                      {brand.slug === 'vitrum-glass' && (
                        <Link
                          href="/products/glass-performance"
                          className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-600 hover:text-brand-600 transition-colors"
                        >
                          Glass Performance Guide <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {/* Why We Choose These Partners */}
      <section className="section-padding">
        <div className="container-wide">
          <h2 className="text-3xl font-display font-extrabold text-charcoal-900 mb-8">
            Why These Partners Matter
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Proven in BC Climate',
                text: 'Every product we install is selected specifically for performance in the Lower Mainland\'s heavy rainfall, humidity, and temperature swings.',
              },
              {
                title: 'Strong Warranties',
                text: 'We work with manufacturers who stand behind their products with 15 to 40+ year warranties, giving you long-term peace of mind.',
              },
              {
                title: 'Local Supply Chain',
                text: 'Most of our partners manufacture or stock products right here in BC, meaning faster lead times, local support, and products built for our region.',
              },
            ].map((item) => (
              <div key={item.title} className="bg-neutral-50 rounded-lg border border-neutral-200 p-6">
                <h3 className="font-display font-bold text-charcoal-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection headline="Ready to Choose the Right Products for Your Home?" />
    </>
  );
}
