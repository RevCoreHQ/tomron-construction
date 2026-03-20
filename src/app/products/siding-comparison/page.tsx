import { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle, XCircle, ArrowRight, Layers } from 'lucide-react';
import { siteConfig } from '@/data/site-config';
import { generatePageMetadata } from '@/lib/metadata';
import { JsonLd } from '@/components/seo/JsonLd';
import { breadcrumbSchema } from '@/lib/schema';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Button } from '@/components/ui/Button';
import { CTASection } from '@/components/sections/CTASection';

export const metadata: Metadata = generatePageMetadata({
  title: 'Siding Comparison Guide | Tomron Construction',
  description:
    'Compare fiber cement, vinyl, composite, steel, and engineered wood siding. Cost, lifespan, maintenance, and best use cases for BC homes.',
  path: '/products/siding-comparison',
  keywords: ['siding comparison', 'fiber cement vs vinyl', 'best siding for BC', 'siding cost comparison'],
});

const sidingTypes = [
  {
    name: 'Fiber Cement',
    brand: 'James Hardie',
    brandHref: '/products#siding',
    costRange: '$9 – $14 / sq ft installed',
    lifespan: '30 – 50 years',
    maintenance: 'Low',
    maintenanceNote: 'Repaint every 15–20 years. No rot, no pests.',
    fireRating: 'Non-combustible',
    description:
      'Fiber cement is the gold standard for durability and curb appeal. Made from cement, sand, and cellulose fibers, it resists rot, fire, pests, and moisture. James Hardie\'s HZ5 formulation is specifically engineered for Canadian climates.',
    pros: [
      'Non-combustible, highest fire resistance of any siding',
      'Does not rot, warp, or attract pests',
      'ColorPlus factory finish lasts 15+ years without repainting',
      'Increases resale value more than any other siding type',
      'Available in lap, shingle, panel, and board & batten profiles',
    ],
    cons: [
      'Higher upfront cost than vinyl or engineered wood',
      'Heavier material requires experienced installation',
      'Will eventually need repainting (15–20 year cycle)',
    ],
    bestFor: 'Homeowners who want the longest-lasting, most fire-resistant siding with premium curb appeal. Ideal for strata, multi-family, and homes in fire-interface zones.',
    highlight: true,
  },
  {
    name: 'Vinyl Siding',
    brand: 'Mitten Building Products',
    brandHref: '/products#siding',
    costRange: '$5 – $8 / sq ft installed',
    lifespan: '20 – 40 years',
    maintenance: 'Very Low',
    maintenanceNote: 'Occasional wash. Colour is through the material, no painting.',
    fireRating: 'Melts, does not ignite',
    description:
      'Vinyl is the most affordable siding option and requires virtually zero maintenance. Modern vinyl siding from Mitten offers 37+ colour options, including the industry\'s first true Black vinyl with the Sentry line. Colour goes through the entire panel, so scratches do not show.',
    pros: [
      'Lowest cost siding option on the market',
      'Colour is integral, never needs painting',
      'Lightweight, fast installation reduces labour costs',
      'Lifetime warranty from Mitten with No Fade Promise',
      'Huge colour selection, 37+ options',
    ],
    cons: [
      'Can crack in extreme cold if struck',
      'Less perceived value than fiber cement or wood',
      'Can warp or distort under extreme heat',
      'Not fire-resistant, melts and deforms in fire',
    ],
    bestFor: 'Budget-conscious homeowners who want a clean, modern look without ongoing maintenance costs. Excellent for rental properties and full-home re-siding projects.',
    highlight: false,
  },
  {
    name: 'Composite Siding',
    brand: 'NewTechWood',
    brandHref: '/products#siding',
    costRange: '$10 – $16 / sq ft installed',
    lifespan: '25 – 40 years',
    maintenance: 'Zero',
    maintenanceNote: 'No painting, staining, or sealing ever.',
    fireRating: 'Class A fire rating',
    description:
      'Composite siding combines recycled wood fibers and plastic with a co-extruded protective cap on all sides. NewTechWood\'s UltraShield technology makes composite impervious to moisture, rot, mould, and UV fade. Available in Norwegian Fluted, Belgian Fluted, Gap, and Shiplap profiles.',
    pros: [
      'Truly zero maintenance, no painting or sealing ever',
      'Made from 95% recycled materials',
      'UltraShield cap protects all four sides, not just the face',
      'Natural brushed-wood texture without real wood drawbacks',
      'Class A fire rating',
    ],
    cons: [
      'Higher upfront cost',
      'Newer product, less long-term track record than fiber cement',
      'Limited profile options compared to fiber cement',
    ],
    bestFor: 'Homeowners who want the look of real wood with absolutely zero maintenance. Perfect for hard-to-reach areas, lake homes, and eco-conscious builds.',
    highlight: false,
  },
  {
    name: 'Steel Siding',
    brand: 'MAC Metal Architectural',
    brandHref: '/products#siding',
    costRange: '$10 – $15 / sq ft installed',
    lifespan: '40 – 60+ years',
    maintenance: 'Very Low',
    maintenanceNote: 'No painting needed. 40-year warranty on finish.',
    fireRating: 'Non-combustible',
    description:
      'Pre-painted steel siding from MAC Metal Architectural offers the longest lifespan of any siding material. 100% Canadian-made with contemporary profiles including Board & Batten and the Wood Collection that recreates real wood grain finishes without any maintenance.',
    pros: [
      'Longest lifespan of any siding, 40–60+ years',
      'Non-combustible, excellent fire resistance',
      '100% recyclable material with recycled content',
      'Wood Collection offers six wood-grain finish options',
      '40-year warranty on finish, will not fade, chalk, or peel',
    ],
    cons: [
      'Can dent on impact (hail, ladders, sports equipment)',
      'Higher upfront cost than vinyl',
      'Limited colour change options once installed',
      'Requires skilled installation for weathertight detailing',
    ],
    bestFor: 'Modern, contemporary builds and homeowners who want a 40+ year product with industrial strength. Excellent for commercial, agricultural, and coastal properties.',
    highlight: false,
  },
  {
    name: 'Engineered Wood',
    brand: 'LP SmartSide',
    brandHref: '/products#siding',
    costRange: '$7 – $11 / sq ft installed',
    lifespan: '30 – 50 years',
    maintenance: 'Low',
    maintenanceNote: 'Repaint every 10–15 years, or choose factory-finished ExpertFinish.',
    fireRating: 'Class A fire rating (treated)',
    description:
      'LP SmartSide is engineered wood treated to the core with the SmartGuard process, providing built-in protection against moisture, fungal decay, and termites. Available in lap, panel, shake, and soffit profiles with 16 prefinished ExpertFinish colours.',
    pros: [
      'Real wood workability at a fraction of real wood cost',
      'SmartGuard treatment protects the entire panel, not just the surface',
      'ExpertFinish factory prefinish eliminates on-site painting',
      'Industry-leading 5/50 warranty (5-year labour, 50-year substrate)',
      'Lighter than fiber cement, easier to handle and install',
    ],
    cons: [
      'Requires proper sealing at all cut edges during installation',
      'Field-finished versions need repainting every 10–15 years',
      'Not as impact-resistant as steel or fiber cement',
    ],
    bestFor: 'Homeowners who love the look and workability of real wood but want engineered durability. Great value for Craftsman, farmhouse, and traditional-style homes.',
    highlight: false,
  },
];

export default function SidingComparisonPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: 'Home', url: siteConfig.url },
            { name: 'Products & Partners', url: `${siteConfig.url}/products` },
            { name: 'Siding Comparison', url: `${siteConfig.url}/products/siding-comparison` },
          ]),
        ]}
      />

      {/* Hero */}
      <section className="relative py-16 lg:py-24 bg-charcoal-900 overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: 'Products & Partners', href: '/products' },
              { label: 'Siding Comparison', href: '/products/siding-comparison' },
            ]}
            variant="dark"
          />
          <div className="max-w-3xl mt-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold bg-brand-600/20 text-brand-400 rounded-md mb-4">
              <Layers className="w-3.5 h-3.5" />
              Homeowner Guide
            </div>
            <h1 className="text-4xl sm:text-5xl font-display font-extrabold text-white mb-6">
              Siding Comparison Guide
            </h1>
            <p className="text-xl text-white/60 leading-relaxed mb-8">
              Choosing the right siding is one of the biggest decisions you&apos;ll make for your home. This guide compares the five siding types we install, with honest cost, lifespan, and maintenance comparisons to help you decide.
            </p>
            <Button href="/contact" size="lg">
              Get a Free Siding Quote
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Comparison Table */}
      <section className="section-padding bg-gradient-to-br from-brand-50 via-white to-neutral-50">
        <div className="container-wide">
          <div className="max-w-2xl mb-10">
            <p className="text-sm font-semibold text-brand-600 uppercase tracking-wider mb-2">At a Glance</p>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-charcoal-900 mb-4">
              Quick Comparison
            </h2>
            <p className="text-slate-500 leading-relaxed">
              All prices are approximate installed costs in the Lower Mainland, BC. Actual pricing depends on home size, access, and project scope.
            </p>
          </div>

          <div className="overflow-x-auto bg-white rounded-xl border border-neutral-200 shadow-sm p-1">
            <table className="w-full text-sm text-left">
              <thead>
                <tr className="bg-charcoal-900 text-white">
                  <th className="py-3 px-4 font-display font-bold rounded-tl-lg">Material</th>
                  <th className="py-3 px-4 font-display font-bold">Cost / sq ft</th>
                  <th className="py-3 px-4 font-display font-bold">Lifespan</th>
                  <th className="py-3 px-4 font-display font-bold">Maintenance</th>
                  <th className="py-3 px-4 font-display font-bold rounded-tr-lg">Fire Rating</th>
                </tr>
              </thead>
              <tbody>
                {sidingTypes.map((s) => (
                  <tr key={s.name} className={`border-b border-neutral-100 ${s.highlight ? 'bg-brand-50/50' : 'hover:bg-neutral-50'}`}>
                    <td className="py-3.5 px-4 font-semibold text-charcoal-900">
                      {s.name}
                      {s.highlight && (
                        <span className="ml-2 text-xs font-semibold text-brand-600 bg-brand-100 px-1.5 py-0.5 rounded">
                          Most Popular
                        </span>
                      )}
                    </td>
                    <td className="py-3.5 px-4 text-slate-600">{s.costRange}</td>
                    <td className="py-3.5 px-4 text-slate-600">{s.lifespan}</td>
                    <td className="py-3.5 px-4 text-slate-600">{s.maintenance}</td>
                    <td className="py-3.5 px-4 text-slate-600">{s.fireRating}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Detailed Breakdowns */}
      {sidingTypes.map((siding, i) => {
        const isDark = siding.highlight;
        const bgClass = isDark
          ? 'bg-charcoal-900'
          : i % 2 === 0
            ? 'bg-white'
            : 'bg-gradient-to-br from-neutral-50 to-brand-50/30';

        return (
          <section
            key={siding.name}
            className={`section-padding ${bgClass}`}
          >
            <div className="container-wide">
              <div className="max-w-4xl">
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div>
                    <p className={`text-sm font-semibold uppercase tracking-wider mb-2 ${isDark ? 'text-brand-400' : 'text-brand-600'}`}>{siding.brand}</p>
                    <h2 className={`text-3xl sm:text-4xl font-display font-extrabold ${isDark ? 'text-white' : 'text-charcoal-900'}`}>
                      {siding.name}{siding.name.includes('Siding') ? '' : ' Siding'}
                    </h2>
                  </div>
                  <Link
                    href={siding.brandHref}
                    className={`inline-flex items-center gap-1.5 text-sm font-semibold transition-colors shrink-0 mt-2 ${isDark ? 'text-brand-400 hover:text-brand-300' : 'text-brand-600 hover:text-brand-700'}`}
                  >
                    View Brand <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

                <p className={`leading-relaxed mb-6 ${isDark ? 'text-white/60' : 'text-slate-600'}`}>{siding.description}</p>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                  {[
                    { label: 'Installed Cost', value: siding.costRange },
                    { label: 'Lifespan', value: siding.lifespan },
                    { label: 'Maintenance', value: siding.maintenance },
                    { label: 'Fire Rating', value: siding.fireRating },
                  ].map((stat) => (
                    <div key={stat.label} className={`rounded-lg border p-4 ${isDark ? 'bg-white/5 border-white/10' : 'bg-white border-neutral-200'}`}>
                      <p className={`text-xs font-medium mb-1 ${isDark ? 'text-white/40' : 'text-slate-400'}`}>{stat.label}</p>
                      <p className={`text-sm font-bold ${isDark ? 'text-white' : 'text-charcoal-900'}`}>{stat.value}</p>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h3 className={`font-display font-bold mb-3 ${isDark ? 'text-white' : 'text-charcoal-900'}`}>Advantages</h3>
                    <ul className="space-y-2">
                      {siding.pros.map((pro) => (
                        <li key={pro} className={`flex items-start gap-2 text-sm ${isDark ? 'text-white/70' : 'text-slate-700'}`}>
                          <CheckCircle className={`w-4 h-4 shrink-0 mt-0.5 ${isDark ? 'text-brand-400' : 'text-green-600'}`} />
                          {pro}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className={`font-display font-bold mb-3 ${isDark ? 'text-white' : 'text-charcoal-900'}`}>Considerations</h3>
                    <ul className="space-y-2">
                      {siding.cons.map((con) => (
                        <li key={con} className={`flex items-start gap-2 text-sm ${isDark ? 'text-white/70' : 'text-slate-700'}`}>
                          <XCircle className={`w-4 h-4 shrink-0 mt-0.5 ${isDark ? 'text-amber-400' : 'text-amber-500'}`} />
                          {con}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className={`rounded-lg border p-5 ${isDark ? 'bg-brand-600/15 border-brand-500/30' : 'bg-brand-50 border-brand-200'}`}>
                  <p className={`text-sm font-semibold ${isDark ? 'text-brand-300' : 'text-brand-800'}`}>
                    <span className="font-bold">Best for:</span>{' '}
                    <span className={`font-normal ${isDark ? 'text-brand-200/80' : 'text-brand-700'}`}>{siding.bestFor}</span>
                  </p>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* Bottom Line */}
      <section className="section-padding bg-charcoal-900">
        <div className="container-narrow text-center">
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white mb-6">
            Not Sure Which Siding Is Right?
          </h2>
          <p className="text-lg text-white/60 leading-relaxed mb-8 max-w-2xl mx-auto">
            Every home is different. The right siding depends on your budget, your home&apos;s style, your neighbourhood, and how long you plan to stay. Our team will visit your property, assess the existing conditions, and recommend the best option for your situation, with no pressure.
          </p>
          <Button href="/contact" size="lg">
            Book a Free Consultation
          </Button>
        </div>
      </section>

      <CTASection headline="Ready to Choose the Right Siding?" description="Contact us for a free on-site consultation. We'll assess your home and recommend the best siding material for your needs and budget." />
    </>
  );
}
