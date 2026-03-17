import { Metadata } from 'next';
import Link from 'next/link';
import { ExternalLink, ThermometerSun, Shield, Zap, Sun, Eye, Layers } from 'lucide-react';
import { siteConfig } from '@/data/site-config';
import { generatePageMetadata } from '@/lib/metadata';
import { JsonLd } from '@/components/seo/JsonLd';
import { breadcrumbSchema } from '@/lib/schema';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Button } from '@/components/ui/Button';
import { CTASection } from '@/components/sections/CTASection';

export const metadata: Metadata = generatePageMetadata({
  title: 'Glass Performance & Vitrum | Tomron Construction',
  description:
    'Learn about insulated glass units (IGUs), R-values, and Low-E coating technology. Tomron Construction installs windows with Vitrum Glass sealed units, the standard for every major window manufacturer in Western Canada.',
  path: '/products/glass-performance',
});

const glassTypes = [
  {
    name: 'Double Glazed',
    rValue: 'R-2 to R-3',
    uValue: '~0.47',
    description: 'Two panes of glass with an insulating air or argon gas fill. The baseline for modern windows.',
    best: 'Budget-conscious upgrades from single-pane windows.',
  },
  {
    name: 'Double Glazed + Low-E',
    rValue: 'R-3 to R-4',
    uValue: '~0.30',
    description: 'Two panes with a low-emissivity coating that reflects radiant heat while allowing visible light through.',
    best: 'Most residential window replacements in BC. Best balance of cost and performance.',
  },
  {
    name: 'Triple Glazed + Low-E',
    rValue: 'R-5 to R-8',
    uValue: '~0.20',
    description: 'Three panes with two low-e coatings and dual gas fills for maximum insulation and solar control.',
    best: 'Premium builds, north-facing windows, and homes prioritizing maximum energy efficiency.',
  },
];

const lowEBenefits = [
  {
    icon: ThermometerSun,
    title: 'Reduces Heat Transfer',
    text: 'Low-E coatings reflect radiant heat back to its source, keeping heat inside during winter and outside during summer.',
  },
  {
    icon: Zap,
    title: 'Cuts Energy Costs',
    text: 'Low-E glass transmits up to 48% less solar energy than standard glass, significantly reducing heating and cooling bills.',
  },
  {
    icon: Sun,
    title: 'Blocks UV Damage',
    text: 'Reduces harmful UV rays by up to 75%, protecting furniture, flooring, and artwork from fading and sun damage.',
  },
  {
    icon: Eye,
    title: 'Maintains Visibility',
    text: 'Unlike tinted glass, Low-E coatings are virtually invisible, high performance with a clear, neutral appearance.',
  },
  {
    icon: Shield,
    title: 'Reduces Condensation',
    text: 'The improved insulation value keeps the inner glass surface warmer, reducing condensation buildup in humid BC weather.',
  },
  {
    icon: Layers,
    title: 'Sound Reduction',
    text: 'Multi-pane insulated units with gas fills provide measurable noise reduction, especially valuable in urban and roadside locations.',
  },
];

export default function GlassPerformancePage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: 'Home', url: siteConfig.url },
            { name: 'Products & Partners', url: `${siteConfig.url}/products` },
            { name: 'Glass Performance', url: `${siteConfig.url}/products/glass-performance` },
          ]),
        ]}
      />

      {/* Hero */}
      <section className="relative py-16 lg:py-24 bg-charcoal-900 overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: 'Products & Partners', href: '/products' },
              { label: 'Glass Performance', href: '/products/glass-performance' },
            ]}
            variant="dark"
          />
          <div className="max-w-3xl mt-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold bg-brand-600/20 text-brand-400 rounded-md mb-4">
              <Layers className="w-3.5 h-3.5" />
              Performance Guide
            </div>
            <h1 className="text-4xl sm:text-5xl font-display font-extrabold text-white mb-6">
              Glass Performance & Sealed Units
            </h1>
            <p className="text-xl text-white/60 leading-relaxed mb-8">
              The glass in your windows is the single most important factor in your home&apos;s energy efficiency, comfort, and protection from the elements. Understanding R-values, Low-E coatings, and sealed unit technology helps you make the right choice for your BC home.
            </p>
            <Button href="/contact" size="lg">
              Discuss Glass Options With Us
            </Button>
          </div>
        </div>
      </section>

      {/* What Are Sealed Glass Units */}
      <section className="section-padding">
        <div className="container-narrow">
          <p className="text-sm font-semibold text-brand-600 uppercase tracking-wider mb-2">The Basics</p>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-charcoal-900 mb-6">
            What Are Insulated Glass Units?
          </h2>
          <div className="prose prose-lg text-slate-600 max-w-none">
            <p>
              An insulated glass unit (IGU), also called a sealed unit, consists of two or three panes of glass separated by a spacer bar and hermetically sealed together. The space between the panes is filled with an inert gas (typically argon) that acts as an insulating barrier, dramatically reducing heat transfer compared to single-pane glass.
            </p>
            <p>
              The quality of the sealed unit determines how well your windows perform. A primary seal of polyisobutylene creates an airtight barrier to prevent moisture from entering the airspace, while a secondary structural seal holds the unit together for long-term durability. The glass itself may be clear, tinted, coated with low-emissivity films, or tempered for safety, depending on the application.
            </p>
            <p>
              Every major window manufacturer in the Lower Mainland uses sealed glass units from{' '}
              <a href="https://www.vitrum.ca/" target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:text-brand-700 font-semibold">
                Vitrum Glass Group
              </a>{' '}
             , Western Canada&apos;s largest glass fabricator, manufacturing from their 200,000 sq ft facility in Langley, BC. As a certified fabricator for Vitro, Guardian, and Saint-Gobain, Vitrum provides exclusive access to the highest-performance glass coatings available.
            </p>
          </div>
        </div>
      </section>

      {/* R-Values & Glass Comparison */}
      <section className="section-padding bg-neutral-50">
        <div className="container-wide">
          <div className="max-w-2xl mb-10">
            <p className="text-sm font-semibold text-brand-600 uppercase tracking-wider mb-2">Performance</p>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-charcoal-900 mb-4">
              R-Values: Understanding Glass Performance
            </h2>
            <p className="text-slate-500 leading-relaxed">
              R-value measures thermal resistance, the higher the R-value, the better the insulation. U-value is the inverse (lower is better). Here&apos;s how different glass configurations compare.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {glassTypes.map((glass, i) => (
              <div
                key={glass.name}
                className={`rounded-lg border p-6 lg:p-8 ${
                  i === 1
                    ? 'bg-charcoal-900 border-charcoal-800 text-white ring-2 ring-brand-600'
                    : 'bg-white border-neutral-200'
                }`}
              >
                {i === 1 && (
                  <span className="inline-block text-xs font-semibold text-brand-400 uppercase tracking-wider mb-3">
                    Most Popular
                  </span>
                )}
                <h3 className={`text-xl font-display font-bold mb-2 ${i === 1 ? 'text-white' : 'text-charcoal-900'}`}>
                  {glass.name}
                </h3>
                <div className="flex gap-4 mb-4">
                  <div>
                    <p className={`text-2xl font-display font-extrabold ${i === 1 ? 'text-brand-400' : 'text-brand-600'}`}>
                      {glass.rValue}
                    </p>
                    <p className={`text-xs font-medium ${i === 1 ? 'text-white/40' : 'text-slate-400'}`}>R-Value</p>
                  </div>
                  <div>
                    <p className={`text-2xl font-display font-extrabold ${i === 1 ? 'text-white' : 'text-charcoal-900'}`}>
                      {glass.uValue}
                    </p>
                    <p className={`text-xs font-medium ${i === 1 ? 'text-white/40' : 'text-slate-400'}`}>U-Value</p>
                  </div>
                </div>
                <p className={`text-sm leading-relaxed mb-4 ${i === 1 ? 'text-white/60' : 'text-slate-500'}`}>
                  {glass.description}
                </p>
                <p className={`text-sm font-medium ${i === 1 ? 'text-white/80' : 'text-charcoal-900'}`}>
                  <span className={`font-semibold ${i === 1 ? 'text-brand-400' : 'text-brand-600'}`}>Best for:</span>{' '}
                  {glass.best}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Low-E Coating */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="max-w-2xl mb-10">
            <p className="text-sm font-semibold text-brand-600 uppercase tracking-wider mb-2">Technology</p>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-charcoal-900 mb-4">
              Low-E Coating: The Invisible Performance Upgrade
            </h2>
            <p className="text-slate-500 leading-relaxed">
              Low-emissivity (Low-E) coatings are microscopically thin metallic layers applied to glass surfaces that reflect radiant heat while allowing visible light to pass through. This technology is the single biggest factor in modern window energy performance.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {lowEBenefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <div key={benefit.title} className="bg-neutral-50 rounded-lg border border-neutral-200 p-6">
                  <Icon className="w-7 h-7 text-brand-600 mb-3" />
                  <h3 className="font-display font-bold text-charcoal-900 mb-2">{benefit.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{benefit.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Vitrum */}
      <section className="section-padding bg-neutral-50">
        <div className="container-narrow">
          <p className="text-sm font-semibold text-brand-600 uppercase tracking-wider mb-2">Our Glass Partner</p>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-charcoal-900 mb-6">
            Why Vitrum Glass Group
          </h2>
          <div className="prose prose-lg text-slate-600 max-w-none">
            <p>
              Every window Tomron Construction installs features sealed glass units manufactured by{' '}
              <a href="https://www.vitrum.ca/" target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:text-brand-700 font-semibold">
                Vitrum Glass Group
              </a>
              . This is not unusual, virtually every window manufacturer in Western Canada uses Vitrum glass. There is a reason for that.
            </p>
            <p>
              Operating from a 200,000 square foot facility in Langley, BC, Vitrum fabricates more glass products than any other manufacturer in the Pacific Northwest. As a certified fabricator for all three major primary float glass manufacturers, <strong>Vitro</strong>, <strong>Guardian</strong>, and <strong>Saint-Gobain</strong>, Vitrum provides exclusive access to the highest-performance coatings available:
            </p>
            <ul>
              <li><strong>Vitro Solarban</strong>, Industry-leading solar control Low-E glass with exceptional clarity</li>
              <li><strong>Guardian SunGuard</strong>, Advanced low-e coatings for optimal solar control and thermal performance</li>
              <li><strong>Saint-Gobain Cool-Lite &amp; Planitherm</strong>, Premium European glass technology for superior insulation</li>
            </ul>
            <p>
              Vitrum&apos;s IGMAC certification ensures every sealed insulating glass unit meets the highest standards for design, manufacture, and long-term performance. When you choose Tomron Construction for your window replacement, you are getting glass technology from the best fabricator in Western Canada, regardless of which window brand you select.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="https://www.vitrum.ca/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand-600 hover:text-brand-700 transition-colors"
            >
              Visit Vitrum Glass Group <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://www.vitrum.ca/glass-products/insulating-glass/low-emissivity/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-brand-600 transition-colors"
            >
              Vitrum Low-E Product Info <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://www.vitrum.ca/glass-products/insulating-glass/education/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-brand-600 transition-colors"
            >
              Glass Education Centre <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>

      {/* What This Means For You */}
      <section className="section-padding">
        <div className="container-narrow">
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-charcoal-900 mb-6">
            What This Means for Your Home
          </h2>
          <div className="prose prose-lg text-slate-600 max-w-none">
            <p>
              When you work with Tomron Construction on a window replacement project, the glass performance is consistent and excellent across all the window brands we carry, <Link href="/products" className="text-brand-600 hover:text-brand-700 font-semibold">Centra, Tyee, and Ply Gem</Link>. The R-values and Low-E coating performance remain the same because they all source their sealed glass units from Vitrum.
            </p>
            <p>
              This means your decision comes down to frame material preferences, hardware quality, aesthetics, and budget, not glass quality. Every option we offer delivers the same high-performance sealed units, ensuring your home is protected against BC&apos;s rain, cold winters, and warm summers.
            </p>
            <p>
              Our team will help you select the right glass configuration, double or triple glazed, with the appropriate Low-E coating, based on your home&apos;s orientation, your energy goals, and your budget. The result is a home that is more comfortable, more energy efficient, and protected for decades.
            </p>
          </div>
        </div>
      </section>

      <CTASection headline="Ready to Upgrade Your Windows?" description="Get a free consultation to discuss glass options, R-values, and the right window solution for your home. We'll help you understand exactly what you're getting and why it matters." />
    </>
  );
}
