import { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/metadata';
import { JsonLd } from '@/components/seo/JsonLd';
import { breadcrumbSchema } from '@/lib/schema';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { TrustStrip } from '@/components/sections/TrustStrip';
import { CTASection } from '@/components/sections/CTASection';
import { siteConfig } from '@/data/site-config';
import { Shield, Users, Eye, Award } from 'lucide-react';

export const metadata: Metadata = generatePageMetadata({
  title: 'About Timberline Falls — Utah Pool & Outdoor Living Builder',
  description: 'Locally owned outdoor living contractor with 20+ years experience. Pool construction, landscaping, and concrete services in Saratoga Springs & Bountiful, UT.',
  path: '/about',
});

const values = [
  { icon: Shield, title: 'Craftsmanship First', description: 'We never cut corners. Every project is built with the materials, techniques, and attention to detail that ensure it lasts for decades.' },
  { icon: Users, title: 'Locally Owned & Operated', description: 'We live and work in the communities we serve. Our reputation is built on the trust of our neighbors.' },
  { icon: Eye, title: 'Transparent Process', description: 'From 3D design approval to clear pricing, you always know exactly what to expect. No surprises, no hidden costs.' },
  { icon: Award, title: 'Licensed, Bonded & Insured', description: 'Full licensing, bonding, and comprehensive insurance coverage, protecting you and your property at every stage.' },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([
        { name: 'Home', url: siteConfig.url },
        { name: 'About', url: `${siteConfig.url}/about` },
      ])} />

      <div className="section-padding">
        <div className="container-wide">
          <Breadcrumbs items={[{ label: 'About', href: '/about' }]} />

          <div className="max-w-3xl">
            <p className="text-brand-600 font-medium text-sm tracking-wide uppercase mb-3">About Us</p>
            <h1 className="text-4xl sm:text-5xl font-display font-bold text-slate-900 mb-6">
              Two Decades of Building Utah&apos;s Finest Outdoor Spaces
            </h1>
            <div className="prose prose-lg text-slate-600 space-y-4">
              <p>
                Timberline Falls was founded on a simple principle: every homeowner deserves an outdoor space that brings them joy, built by people who take genuine pride in their work. For over 20 years, we have been designing and constructing custom swimming pools, landscapes, and concrete installations across Saratoga Springs, Bountiful, and the surrounding Utah communities.
              </p>
              <p>
                As a locally owned and operated business, we are deeply invested in the communities we serve. Our team lives here, works here, and stands behind every project we deliver. We understand Utah&apos;s unique climate, soil conditions, and building requirements, and we engineer every project accordingly.
              </p>
              <p>
                What sets us apart is our commitment to the full process. Every project begins with a detailed consultation and a 3D design rendering, so you see exactly what your finished space will look like before construction begins. We handle permits, scheduling, materials, and construction management, so you get to enjoy the transformation without the stress.
              </p>
            </div>
          </div>
        </div>
      </div>

      <section className="section-padding bg-gradient-to-b from-sand-50 to-white">
        <div className="container-narrow">
          <div className="space-y-12">
            <div>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 mb-4">
                Our Story
              </h2>
              <p className="text-slate-600 leading-relaxed text-base lg:text-lg">
                Timberline Falls started with a crew truck, a commitment to honest work, and a belief that Utah homeowners deserved better from their outdoor living contractors. Over two decades later, that belief has grown into a full-service design-build company that has completed hundreds of custom pools, landscape installations, and concrete projects across the Wasatch Front. We have earned the trust of homeowners in Saratoga Springs, Bountiful, Lehi, Eagle Mountain, Draper, and beyond, one project at a time. Our growth has been entirely organic, driven by referrals from satisfied clients who recommend us to their neighbors, friends, and family members. That word-of-mouth reputation is something we protect fiercely by never compromising on quality, communication, or follow-through.
              </p>
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 mb-4">
                Experience That Shows in Every Detail
              </h2>
              <p className="text-slate-600 leading-relaxed text-base lg:text-lg">
                Twenty years of building in Utah teaches lessons that no textbook can. We know which soils in Saratoga Springs shift the most during wet seasons and how to engineer pool shells and retaining walls to handle that movement. We know which plant species thrive in Bountiful&apos;s hillside microclimates and which ones will struggle. We know the permit processes in every municipality we serve, the inspectors who review our work, and the building codes that apply to every type of project we construct. This accumulated local knowledge translates directly into fewer surprises, smoother projects, and better long-term results for our clients. Every member of our crew brings years of field experience, and our project managers oversee every stage of construction to ensure the finished product meets our exacting standards.
              </p>
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 mb-4">
                Three Crafts Under One Roof
              </h2>
              <p className="text-slate-600 leading-relaxed text-base lg:text-lg">
                Most contractors specialize in one thing. Timberline Falls brings three core capabilities, pool construction, landscape design and installation, and concrete services, under a single team. This means your pool, patio, retaining walls, landscaping, irrigation, lighting, and outdoor kitchen can all be designed and built as a unified project with one point of contact, one schedule, and one team that communicates seamlessly. There is no finger-pointing between subcontractors, no scheduling conflicts between trades, and no design disconnects between your pool and your landscape. Homeowners who have worked with multiple contractors on past projects consistently tell us that the single-contractor experience with Timberline Falls is dramatically simpler, faster, and produces better results.
              </p>
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 mb-4">
                Our Commitment After the Build
              </h2>
              <p className="text-slate-600 leading-relaxed text-base lg:text-lg">
                Our relationship with clients does not end when the last piece of equipment leaves the jobsite. Timberline Falls stands behind our work with comprehensive warranties and responsive support for every project we complete. If something is not right, we fix it, plain and simple. We also offer seasonal maintenance services for pools, irrigation systems, and landscapes to help you protect your investment year-round. Many of our earliest clients from over 15 years ago still call us when they are ready for their next project or need advice on maintaining their outdoor space. That long-term loyalty is the truest measure of the quality we deliver and the relationships we build.
              </p>
            </div>
          </div>
        </div>
      </section>

      <TrustStrip />

      <section className="section-padding bg-sand-50">
        <div className="container-wide">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 text-center mb-12">
            What We Stand For
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <div key={v.title} className="text-center">
                  <div className="w-14 h-14 rounded-2xl bg-brand-50 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-7 h-7 text-brand-600" />
                  </div>
                  <h3 className="text-lg font-display font-semibold text-slate-900 mb-2">{v.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{v.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection headline="Let's Build Something Together" />
    </>
  );
}
