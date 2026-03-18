import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle, ThermometerSun, Shield, Zap, Eye, Layers, Frame } from 'lucide-react';
import { siteConfig } from '@/data/site-config';
import { generatePageMetadata } from '@/lib/metadata';
import { JsonLd } from '@/components/seo/JsonLd';
import { breadcrumbSchema } from '@/lib/schema';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Button } from '@/components/ui/Button';
import { CTASection } from '@/components/sections/CTASection';

export const metadata: Metadata = generatePageMetadata({
  title: 'Window Buying Guide for BC | Tomron Construction',
  description:
    'Everything BC homeowners need to know before replacing windows. Frame materials, Energy Star, glass options, and what to look for.',
  path: '/products/window-buying-guide',
  keywords: ['window replacement guide', 'best windows for BC', 'Energy Star windows', 'vinyl vs wood windows'],
});

const frameMaterials = [
  {
    name: 'Vinyl (PVC)',
    brands: 'Centra, Tyee, Ply Gem',
    costRange: '$600 – $1,200 per window',
    lifespan: '25 – 40 years',
    energyRating: 'Excellent',
    description:
      'Vinyl is the most popular window frame material in BC and for good reason. It offers excellent thermal insulation, requires zero maintenance, and is the most cost-effective option. Modern vinyl frames are multi-chambered for structural strength and thermal performance.',
    pros: [
      'Best value for money, lowest cost per window',
      'Zero maintenance, never needs painting or staining',
      'Excellent thermal insulation, multi-chamber design',
      'Will not rot, rust, peel, or corrode in BC weather',
      'Wide range of colours and finishes available',
    ],
    cons: [
      'Cannot be repainted if you want a colour change',
      'Dark colours can absorb heat and expand',
      'Less perceived premium than wood or aluminum-clad',
    ],
    bestFor: 'Most BC homeowners. The best balance of performance, durability, and value.',
    highlight: true,
  },
  {
    name: 'Aluminum-Clad Vinyl',
    brands: 'Ply Gem Design Series',
    costRange: '$900 – $1,800 per window',
    lifespan: '30 – 50 years',
    energyRating: 'Excellent',
    description:
      'Aluminum-clad vinyl combines a vinyl frame interior (for thermal insulation) with a painted aluminum exterior (for durability and curb appeal). This gives you the low-maintenance insulation of vinyl with the bold colour options and weather resistance of aluminum.',
    pros: [
      'Bold exterior colour options not possible with vinyl alone',
      'Aluminum exterior is extremely weather-resistant and durable',
      'Interior vinyl provides excellent thermal performance',
      'Sleek, modern profile with narrow sightlines',
      'Exterior can be factory-painted in custom colours',
    ],
    cons: [
      'Higher cost than standard vinyl',
      'Aluminum exterior can conduct cold if thermal break is insufficient',
      'Fewer manufacturers offer this option in BC',
    ],
    bestFor: 'Homeowners who want premium curb appeal with bold exterior colours while keeping the thermal benefits of vinyl.',
    highlight: false,
  },
  {
    name: 'Aluminum-Clad Wood',
    brands: 'Ply Gem Signature Series',
    costRange: '$1,200 – $2,500+ per window',
    lifespan: '30 – 50+ years',
    energyRating: 'Good to Excellent',
    description:
      'Aluminum-clad wood windows feature a real wood interior for warmth and beauty, with a low-maintenance aluminum exterior to handle the weather. This is the premium choice for homeowners who want the look and feel of real wood without the exterior maintenance burden.',
    pros: [
      'Real wood interior, beautiful natural finish you can stain or paint',
      'Aluminum exterior eliminates exterior painting forever',
      'Highest perceived value and premium aesthetic',
      'Excellent for heritage homes and high-end renovations',
      'Strong structural performance from solid wood core',
    ],
    cons: [
      'Highest cost window option',
      'Wood interior still requires periodic maintenance (staining/sealing)',
      'Heavier than vinyl, may require structural consideration',
      'Longer lead times for custom orders',
    ],
    bestFor: 'Premium builds, heritage restorations, and homeowners who want real wood interior aesthetics with protected exteriors.',
    highlight: false,
  },
];

const whatToLookFor = [
  {
    icon: ThermometerSun,
    title: 'Energy Star Certification',
    text: 'All windows we install meet or exceed Energy Star standards for Zone 2 (BC\'s Lower Mainland). This ensures minimum thermal performance levels and may qualify you for rebates.',
  },
  {
    icon: Shield,
    title: 'Warranty Length & Coverage',
    text: 'Look for warranties that cover both the frame and the sealed unit separately. Our partners offer 20–30 year frame warranties and 15–20 year sealed unit warranties.',
  },
  {
    icon: Zap,
    title: 'U-Value & R-Value',
    text: 'U-value measures heat loss (lower is better). R-value measures insulation (higher is better). For BC, aim for U-value below 0.30 with double-glazed Low-E glass at minimum.',
  },
  {
    icon: Eye,
    title: 'Glass Options',
    text: 'Double-glazed with Low-E is the BC standard. Triple-glazed is ideal for north-facing walls and premium builds. All our windows use Vitrum Glass sealed units.',
  },
  {
    icon: Layers,
    title: 'Installation Quality',
    text: 'The best window in the world fails with poor installation. Proper flashing, shimming, insulation, and sealing are critical, especially in BC\'s rain-heavy climate.',
  },
];

const commonMistakes = [
  {
    mistake: 'Choosing based on price alone',
    reality: 'Cheap windows cost more long-term through higher energy bills, earlier failure, and warranty issues. A quality window pays for itself in 5–8 years through energy savings.',
  },
  {
    mistake: 'Ignoring the sealed unit warranty',
    reality: 'The sealed unit (glass) often fails before the frame. A 15-year sealed unit warranty is minimum. Our partners offer IGMAC-certified units from Vitrum Glass.',
  },
  {
    mistake: 'Overlooking installation standards',
    reality: 'Up to 80% of window performance issues come from improper installation, not the window itself. Always use an experienced installer who follows manufacturer specifications.',
  },
  {
    mistake: 'Not considering the full wall assembly',
    reality: 'Windows connect to your building envelope. Proper integration with your rain screen, WRB, and flashing is essential, especially in the Lower Mainland.',
  },
  {
    mistake: 'Skipping Low-E glass',
    reality: 'Low-E glass costs only 5–10% more but reduces energy transfer by up to 48%. There is no reason to skip it in BC\'s climate. It is the single best upgrade per dollar.',
  },
];

export default function WindowBuyingGuidePage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: 'Home', url: siteConfig.url },
            { name: 'Products & Partners', url: `${siteConfig.url}/products` },
            { name: 'Window Buying Guide', url: `${siteConfig.url}/products/window-buying-guide` },
          ]),
        ]}
      />

      {/* Hero */}
      <section className="relative py-16 lg:py-24 bg-charcoal-900 overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: 'Products & Partners', href: '/products' },
              { label: 'Window Buying Guide', href: '/products/window-buying-guide' },
            ]}
            variant="dark"
          />
          <div className="max-w-3xl mt-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold bg-brand-600/20 text-brand-400 rounded-md mb-4">
              <Layers className="w-3.5 h-3.5" />
              Homeowner Guide
            </div>
            <h1 className="text-4xl sm:text-5xl font-display font-extrabold text-white mb-6">
              Window Buying Guide for BC Homes
            </h1>
            <p className="text-xl text-white/60 leading-relaxed mb-8">
              Replacing windows is a major investment. This guide covers everything you need to know, from frame materials and glass options to what really matters for performance in British Columbia&apos;s climate.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" size="lg">
                Get a Free Window Quote
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

      {/* Frame Materials */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="max-w-2xl mb-10">
            <p className="text-sm font-semibold text-brand-600 uppercase tracking-wider mb-2">Frame Materials</p>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-charcoal-900 mb-4">
              Choosing the Right Frame
            </h2>
            <p className="text-slate-500 leading-relaxed">
              The frame material affects cost, maintenance, thermal performance, and aesthetics. Here are the three options we offer and install.
            </p>
          </div>

          <div className="space-y-8">
            {frameMaterials.map((frame) => (
              <div
                key={frame.name}
                className={`rounded-lg border p-6 lg:p-8 ${frame.highlight ? 'border-brand-300 bg-brand-50/30 ring-1 ring-brand-200' : 'border-neutral-200 bg-white'}`}
              >
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="text-xl font-display font-bold text-charcoal-900">{frame.name}</h3>
                      {frame.highlight && (
                        <span className="text-xs font-semibold text-brand-600 bg-brand-100 px-2 py-0.5 rounded">Most Popular in BC</span>
                      )}
                    </div>
                    <p className="text-sm text-slate-500">{frame.brands}</p>
                  </div>
                </div>

                <p className="text-slate-600 leading-relaxed mb-6">{frame.description}</p>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
                  <div className="bg-white rounded-lg border border-neutral-200 p-3">
                    <p className="text-xs font-medium text-slate-400 mb-1">Cost per Window</p>
                    <p className="text-sm font-bold text-charcoal-900">{frame.costRange}</p>
                  </div>
                  <div className="bg-white rounded-lg border border-neutral-200 p-3">
                    <p className="text-xs font-medium text-slate-400 mb-1">Lifespan</p>
                    <p className="text-sm font-bold text-charcoal-900">{frame.lifespan}</p>
                  </div>
                  <div className="bg-white rounded-lg border border-neutral-200 p-3">
                    <p className="text-xs font-medium text-slate-400 mb-1">Energy Rating</p>
                    <p className="text-sm font-bold text-charcoal-900">{frame.energyRating}</p>
                  </div>
                  <div className="bg-white rounded-lg border border-neutral-200 p-3">
                    <p className="text-xs font-medium text-slate-400 mb-1">Best For</p>
                    <p className="text-sm font-bold text-charcoal-900 truncate">{frame.highlight ? 'Most homes' : 'Premium builds'}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-display font-bold text-charcoal-900 mb-3 text-sm">Advantages</h4>
                    <ul className="space-y-2">
                      {frame.pros.map((pro) => (
                        <li key={pro} className="flex items-start gap-2 text-sm text-slate-700">
                          <CheckCircle className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                          {pro}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-charcoal-900 mb-3 text-sm">Considerations</h4>
                    <ul className="space-y-2">
                      {frame.cons.map((con) => (
                        <li key={con} className="flex items-start gap-2 text-sm text-slate-700">
                          <Shield className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                          {con}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What to Look For */}
      <section className="section-padding bg-neutral-50">
        <div className="container-wide">
          <div className="max-w-2xl mb-10">
            <p className="text-sm font-semibold text-brand-600 uppercase tracking-wider mb-2">What Matters</p>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-charcoal-900 mb-4">
              5 Things to Look For in New Windows
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whatToLookFor.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="bg-white rounded-lg border border-neutral-200 p-6">
                  <Icon className="w-7 h-7 text-brand-600 mb-3" />
                  <h3 className="font-display font-bold text-charcoal-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{item.text}</p>
                </div>
              );
            })}
            <Link
              href="/products/glass-performance"
              className="bg-charcoal-900 rounded-lg p-6 flex flex-col justify-between hover:bg-charcoal-800 transition-colors group"
            >
              <div>
                <Layers className="w-7 h-7 text-brand-400 mb-3" />
                <h3 className="font-display font-bold text-white mb-2">Glass Performance Guide</h3>
                <p className="text-sm text-white/60 leading-relaxed">Learn about R-values, Low-E coatings, and sealed unit technology in our detailed guide.</p>
              </div>
              <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-400 mt-4 group-hover:gap-2.5 transition-all">
                Read Guide <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Common Mistakes */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="max-w-2xl mb-10">
            <p className="text-sm font-semibold text-brand-600 uppercase tracking-wider mb-2">Avoid These</p>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-charcoal-900 mb-4">
              5 Common Window Buying Mistakes
            </h2>
            <p className="text-slate-500 leading-relaxed">
              We see these mistakes regularly. Understanding them upfront can save you thousands and years of frustration.
            </p>
          </div>

          <div className="space-y-4">
            {commonMistakes.map((item, i) => (
              <div key={item.mistake} className="bg-neutral-50 rounded-lg border border-neutral-200 p-6">
                <div className="flex items-start gap-4">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-charcoal-900 text-white text-sm font-bold shrink-0">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-display font-bold text-charcoal-900 mb-1">{item.mistake}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{item.reality}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection headline="Ready to Replace Your Windows?" description="Contact us for a free on-site window assessment. We'll measure, assess your existing windows, and recommend the right replacement option for your home and budget." />
    </>
  );
}
