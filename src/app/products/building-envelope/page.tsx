import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Droplets, Shield, Layers, Wind, AlertTriangle, ThermometerSun } from 'lucide-react';
import { siteConfig } from '@/data/site-config';
import { generatePageMetadata } from '@/lib/metadata';
import { JsonLd } from '@/components/seo/JsonLd';
import { breadcrumbSchema } from '@/lib/schema';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Button } from '@/components/ui/Button';
import { CTASection } from '@/components/sections/CTASection';

export const metadata: Metadata = generatePageMetadata({
  title: 'Building Envelope Guide | Tomron Construction',
  description:
    'Understand rain screen systems, moisture management, and building envelope science. Essential knowledge for BC homeowners after the leaky condo crisis.',
  path: '/products/building-envelope',
  keywords: ['building envelope', 'rain screen system', 'leaky condo', 'moisture management BC', 'WRB'],
});

const envelopeLayers = [
  {
    layer: '1',
    name: 'Interior Finish',
    description: 'Drywall and vapour barrier on the interior side. The vapour barrier prevents warm, moist indoor air from reaching the wall cavity where it could condense.',
  },
  {
    layer: '2',
    name: 'Insulation',
    description: 'Batt or rigid insulation within the wall cavity. This provides the thermal barrier that keeps your home warm in winter and cool in summer.',
  },
  {
    layer: '3',
    name: 'Structural Sheathing',
    description: 'Plywood or OSB sheathing attached to the studs. This provides structural rigidity and a surface for the weather-resistive barrier.',
  },
  {
    layer: '4',
    name: 'Weather-Resistive Barrier (WRB)',
    description: 'A breathable membrane (like Tyvek or self-adhered membranes) applied over the sheathing. The WRB blocks liquid water but allows water vapour to escape, preventing moisture from being trapped inside the wall.',
  },
  {
    layer: '5',
    name: 'Drainage Cavity (Air Gap)',
    description: 'A 10–19mm gap between the WRB and the cladding, created by furring strips or a drainage mat. This is the critical rain screen component, allowing any moisture that gets behind the cladding to drain down and out.',
  },
  {
    layer: '6',
    name: 'Exterior Cladding (Siding)',
    description: 'The outermost layer, your siding. In a rain screen system, the cladding is the first line of defence but is NOT expected to be 100% waterproof. Water that penetrates is managed by the layers behind it.',
  },
];

const whyItMatters = [
  {
    icon: Droplets,
    title: 'BC Gets Over 1,200mm of Rain Per Year',
    text: 'The Lower Mainland is one of the wettest regions in North America. Without proper moisture management, water will find its way into your walls.',
  },
  {
    icon: Wind,
    title: 'Wind-Driven Rain Is the Main Threat',
    text: 'Unlike vertical rain, wind-driven rain pushes water horizontally into wall joints, around windows, and behind siding. A rain screen system handles this.',
  },
  {
    icon: ThermometerSun,
    title: 'Temperature Swings Cause Condensation',
    text: 'BC\'s temperature variations create condensation risk inside wall cavities. A properly designed envelope manages both liquid water and water vapour.',
  },
  {
    icon: Shield,
    title: 'Building Code Now Requires It',
    text: 'After the leaky condo crisis, BC Building Code was updated to require rain screen construction in most new buildings and major renovations in the coastal climate zone.',
  },
];

const flashingTypes = [
  {
    name: 'Window Head Flashing',
    description: 'Installed above every window and door opening to divert water away from the top of the frame. Without it, water runs behind the window trim and into the wall.',
  },
  {
    name: 'Sill Pan Flashing',
    description: 'A waterproof tray under each window that catches any water that penetrates and directs it back outside through weep holes.',
  },
  {
    name: 'Kickout Flashing',
    description: 'Installed where a roof meets a sidewall to prevent roof runoff from flowing behind the siding. One of the most commonly missed flashings.',
  },
  {
    name: 'Z-Flashing',
    description: 'Horizontal flashings at transitions between different materials or at horizontal joints in panel siding. Creates a positive drip edge.',
  },
  {
    name: 'Corner Flashings',
    description: 'Pre-formed metal pieces at inside and outside corners that prevent water penetration at these vulnerable joint locations.',
  },
  {
    name: 'Deck-to-Wall Flashing',
    description: 'Critical flashing where a deck or balcony meets the building wall. One of the most common failure points in BC construction.',
  },
];

export default function BuildingEnvelopePage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: 'Home', url: siteConfig.url },
            { name: 'Products & Partners', url: `${siteConfig.url}/products` },
            { name: 'Building Envelope Guide', url: `${siteConfig.url}/products/building-envelope` },
          ]),
        ]}
      />

      {/* Hero */}
      <section className="relative py-16 lg:py-24 bg-charcoal-900 overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: 'Products & Partners', href: '/products' },
              { label: 'Building Envelope Guide', href: '/products/building-envelope' },
            ]}
            variant="dark"
          />
          <div className="max-w-3xl mt-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold bg-brand-600/20 text-brand-400 rounded-md mb-4">
              <Layers className="w-3.5 h-3.5" />
              Homeowner Guide
            </div>
            <h1 className="text-4xl sm:text-5xl font-display font-extrabold text-white mb-6">
              Building Envelope & Rain Screen Systems
            </h1>
            <p className="text-xl text-white/60 leading-relaxed mb-8">
              Your building envelope is the barrier between the inside of your home and the outside elements. In BC&apos;s wet climate, getting this right is the difference between a home that lasts decades and one that rots from the inside out.
            </p>
            <Button href="/contact" size="lg">
              Book an Envelope Assessment
            </Button>
          </div>
        </div>
      </section>

      {/* The Leaky Condo Crisis */}
      <section className="section-padding bg-gradient-to-br from-amber-50 via-orange-50/30 to-white">
        <div className="container-narrow">
          <div className="flex items-start gap-4 mb-6">
            <div className="p-2 bg-amber-100 rounded-lg">
              <AlertTriangle className="w-6 h-6 text-amber-600 shrink-0" />
            </div>
            <div>
              <p className="text-sm font-semibold text-amber-700 uppercase tracking-wider mb-2">Why This Matters</p>
              <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-charcoal-900">
                Lessons from BC&apos;s Leaky Condo Crisis
              </h2>
            </div>
          </div>
          <div className="prose prose-lg text-slate-600 max-w-none">
            <p>
              Between the 1980s and early 2000s, tens of thousands of BC homes and condos suffered catastrophic water damage due to inadequate building envelope design. Buildings were constructed with face-sealed systems that relied on the cladding alone to stop all water. When that single barrier failed, there was no backup, and water entered the wall cavity with nowhere to go.
            </p>
            <p>
              The result was widespread rot, mould, and structural damage that cost BC homeowners an estimated <strong>$4 billion in repairs</strong>. Entire buildings had to be completely re-clad. Some were demolished. The crisis led to a complete overhaul of BC Building Code, making rain screen construction mandatory in the coastal climate zone.
            </p>
            <p>
              Today, every siding project Tomron Construction performs follows rain screen principles. We build in multiple lines of defence, because in the Lower Mainland, it is not a question of <em>if</em> water gets behind your siding, but <em>when</em>, and whether your wall assembly can handle it.
            </p>
          </div>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="section-padding bg-neutral-50">
        <div className="container-wide">
          <div className="max-w-2xl mb-10">
            <p className="text-sm font-semibold text-brand-600 uppercase tracking-wider mb-2">BC Climate</p>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-charcoal-900 mb-4">
              Why Building Envelope Matters in BC
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {whyItMatters.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="bg-white rounded-lg border border-neutral-200 p-6">
                  <Icon className="w-7 h-7 text-brand-600 mb-3" />
                  <h3 className="font-display font-bold text-charcoal-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How a Rain Screen Works */}
      <section className="section-padding bg-gradient-to-br from-brand-50/50 via-white to-white">
        <div className="container-wide">
          <div className="max-w-2xl mb-10">
            <p className="text-sm font-semibold text-brand-600 uppercase tracking-wider mb-2">The System</p>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-charcoal-900 mb-4">
              How a Rain Screen Wall Assembly Works
            </h2>
            <p className="text-slate-500 leading-relaxed">
              A rain screen is not a single product. It is a system of layers that work together to manage water, air, vapour, and heat. Here is each layer from inside to outside.
            </p>
          </div>

          <div className="space-y-4">
            {envelopeLayers.map((layer) => (
              <div key={layer.layer} className="flex items-start gap-4 bg-white rounded-lg border border-neutral-200 p-6">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-charcoal-900 text-white text-sm font-bold shrink-0">
                  {layer.layer}
                </span>
                <div>
                  <h3 className="font-display font-bold text-charcoal-900 mb-1">{layer.name}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{layer.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-brand-50 rounded-lg border border-brand-200 p-6">
            <h3 className="font-display font-bold text-brand-800 mb-2">The Key Principle</h3>
            <p className="text-sm text-brand-700 leading-relaxed">
              A rain screen system accepts that some water will get past the cladding. Instead of trying to make a single perfect barrier, it creates a drainage cavity that lets water escape harmlessly. The WRB behind the cavity is the true waterproofing layer, and the air gap allows drying. This is called the <strong>drained and ventilated</strong> approach, and it is the standard for all modern construction in BC&apos;s coastal climate zone.
            </p>
          </div>
        </div>
      </section>

      {/* Flashing */}
      <section className="section-padding bg-neutral-50">
        <div className="container-wide">
          <div className="max-w-2xl mb-10">
            <p className="text-sm font-semibold text-brand-600 uppercase tracking-wider mb-2">Critical Details</p>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-charcoal-900 mb-4">
              Flashing: Where Most Failures Happen
            </h2>
            <p className="text-slate-500 leading-relaxed">
              Flashing is the metal or membrane detailing at transitions, penetrations, and joints. It is where water management either works or fails. Every opening, joint, and transition needs proper flashing.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {flashingTypes.map((item) => (
              <div key={item.name} className="bg-white rounded-lg border border-neutral-200 p-6">
                <h3 className="font-display font-bold text-charcoal-900 mb-2">{item.name}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/services/metal-flashing"
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand-600 hover:text-brand-700 transition-colors"
            >
              Our Metal Flashing Service <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link
              href="/services/building-envelope"
              className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-brand-600 transition-colors"
            >
              Building Envelope Service <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Signs of Envelope Failure */}
      <section className="section-padding bg-gradient-to-br from-red-950 to-charcoal-900">
        <div className="container-wide">
          <div className="max-w-2xl mb-10">
            <p className="text-sm font-semibold text-amber-400 uppercase tracking-wider mb-2">Warning Signs</p>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white mb-4">
              Signs Your Building Envelope May Be Failing
            </h2>
            <p className="text-white/50 leading-relaxed">
              Catching envelope problems early can save tens of thousands in repair costs. Watch for these warning signs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              'Peeling or bubbling paint on exterior or interior walls',
              'Musty or mouldy smell in rooms near exterior walls',
              'Staining or discolouration on interior drywall',
              'Soft or spongy areas when pressing on exterior walls',
              'Visible rot around windows, doors, or deck connections',
              'Condensation between window panes (sealed unit failure)',
              'Caulking that is cracked, missing, or pulling away',
              'Siding that is warped, buckled, or has visible gaps',
              'Efflorescence (white mineral deposits) on masonry or concrete',
            ].map((sign) => (
              <div key={sign} className="flex items-start gap-3 bg-white/5 rounded-lg border border-white/10 p-4">
                <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <p className="text-sm text-white/70">{sign}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tomron Approach */}
      <section className="section-padding bg-charcoal-900">
        <div className="container-narrow text-center">
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white mb-6">
            How Tomron Protects Your Home
          </h2>
          <p className="text-lg text-white/60 leading-relaxed mb-8 max-w-2xl mx-auto">
            Every siding project we take on starts with an assessment of the existing building envelope. We do not just put new siding over old problems. If underlying issues exist, we address them first, because beautiful siding over a failing envelope is just an expensive cover-up.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left mb-8">
            {[
              { title: 'Assess First', text: 'We inspect the existing sheathing, WRB, and flashing before quoting. If repairs are needed, you know upfront.' },
              { title: 'Build Right', text: 'Every project follows rain screen principles with proper WRB, drainage cavity, and code-compliant flashing at every penetration.' },
              { title: 'Stand Behind It', text: 'Our craftsmanship warranty covers the installation and detailing, because we are confident in our work.' },
            ].map((item) => (
              <div key={item.title} className="bg-white/5 rounded-lg border border-white/10 p-5">
                <h3 className="font-display font-bold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
          <Button href="/contact" size="lg">
            Book a Free Envelope Assessment
          </Button>
        </div>
      </section>

      <CTASection headline="Concerned About Your Building Envelope?" description="If you're seeing signs of moisture damage or planning a re-siding project, contact us for a free assessment. We'll inspect your wall assembly and give you an honest evaluation." />
    </>
  );
}
