import { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/metadata';
import { JsonLd } from '@/components/seo/JsonLd';
import { breadcrumbSchema } from '@/lib/schema';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { TrustStrip } from '@/components/sections/TrustStrip';
import { MeetOwner } from '@/components/sections/MeetOwner';
import { CTASection } from '@/components/sections/CTASection';
import { siteConfig } from '@/data/site-config';
import { Shield, Users, Eye, Award } from 'lucide-react';
import { ScrollReveal } from '@/components/motion/ScrollReveal';
import { TextReveal } from '@/components/motion/TextReveal';

export const metadata: Metadata = generatePageMetadata({
  title: 'About Tomron Construction, Siding & Exterior Contractor, Lower Mainland BC',
  description: 'Family-owned siding and exterior contractor with 10+ years experience. Siding, windows, doors, building envelope, and renovation services in Maple Ridge and the Lower Mainland, BC.',
  path: '/about',
});

const values = [
  { icon: Shield, title: 'Craftsmanship First', description: 'We never cut corners. Every exterior project is completed with premium materials, proven techniques, and the attention to detail that ensures lasting protection and curb appeal.' },
  { icon: Users, title: 'Family-Owned & Operated', description: 'Tomron Construction is a family business built on personal relationships. When you work with us, you work directly with the people who care most about getting it right.' },
  { icon: Eye, title: 'Transparent Process', description: 'From detailed written proposals to clear pricing, you always know exactly what to expect. No surprises, no hidden costs, no vague estimates.' },
  { icon: Award, title: 'Licensed & Insured', description: 'Full licensing and comprehensive insurance coverage, protecting you and your property at every stage of your project.' },
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
            <ScrollReveal direction="up">
              <p className="text-sm font-semibold text-brand-600 uppercase tracking-wider mb-2">About Us</p>
            </ScrollReveal>
            <TextReveal as="h1" className="text-4xl sm:text-5xl font-display font-extrabold text-charcoal-900 mb-6">
              Family-Run Exterior Specialists Protecting Lower Mainland Homes
            </TextReveal>
            <ScrollReveal direction="up" delay={0.1}>
              <div className="prose prose-lg text-slate-600 space-y-4">
                <p>
                  Tomron Construction was founded by Brendan Prendergast on a simple principle: every homeowner deserves quality exterior work completed by people who take genuine pride in their craft. For over a decade, our family-run team has been installing siding, windows, doors, and building envelope systems across Maple Ridge and the Lower Mainland, BC.
                </p>
                <p>
                  As a locally owned and operated business based in Maple Ridge, we are deeply invested in the communities we serve. Our team understands the unique weather challenges of the Lower Mainland, from heavy rain and moisture to temperature swings, and we engineer every project to stand up to the conditions that BC homes face year-round.
                </p>
                <p>
                  What sets us apart is our commitment to doing things the right way. Every project begins with a thorough on-site assessment and a detailed written proposal, so you know exactly what you are getting before any work begins. We handle materials, scheduling, and construction management, delivering a finished result that protects your home and enhances its appearance.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>

      <section className="section-padding bg-gradient-to-b from-neutral-50 to-white grain">
        <div className="container-narrow">
          <div className="space-y-12">
            <ScrollReveal direction="up">
              <div>
                <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-charcoal-900 mb-4">
                  Our Story
                </h2>
                <p className="text-slate-600 leading-relaxed text-base lg:text-lg">
                  Tomron Construction started with owner Brendan Prendergast, a dedication to honest work, and a belief that Lower Mainland homeowners deserved better from their exterior contractors. Over 10 years later, that belief has grown into a trusted contracting company that has completed hundreds of siding installations, window and door replacements, building envelope repairs, and renovation projects across Maple Ridge and the surrounding communities. We have earned the trust of homeowners throughout the Lower Mainland, one project at a time. Our growth has been entirely organic, driven by referrals from satisfied clients who recommend us to their neighbours, friends, and family members. That word-of-mouth reputation is something we protect fiercely by never compromising on quality, communication, or follow-through.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.08}>
              <div>
                <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-charcoal-900 mb-4">
                  Experience That Shows in Every Detail
                </h2>
                <p className="text-slate-600 leading-relaxed text-base lg:text-lg">
                  Over a decade of exterior work in the Lower Mainland teaches lessons that no textbook can. We know how BC&apos;s wet climate affects building envelopes and which materials perform best in our conditions. We know the building codes and permit processes across the municipalities we serve, and we understand the construction methods that prevent moisture intrusion, air leakage, and premature wear. This accumulated local knowledge translates directly into fewer surprises, smoother projects, and better long-term results for our clients. Every member of our crew brings years of hands-on experience, and Brendan personally oversees projects to ensure the finished product meets our exacting standards.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.16}>
              <div>
                <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-charcoal-900 mb-4">
                  Complete Exterior Services Under One Roof
                </h2>
                <p className="text-slate-600 leading-relaxed text-base lg:text-lg">
                  Most contractors specialize in one thing. Tomron Construction brings multiple exterior capabilities, including siding installation, window and door replacement, building envelope repair, and renovation services, under a single team. This means your siding, windows, doors, flashing, moisture barriers, and trim can all be handled as a unified project with one point of contact, one schedule, and one crew that communicates seamlessly. There is no finger-pointing between subcontractors, no scheduling conflicts between trades, and no design disconnects between your siding and your window installations. Homeowners who have worked with multiple contractors on past projects consistently tell us that the single-contractor experience with Tomron Construction is dramatically simpler, faster, and produces better results.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.24}>
              <div>
                <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-charcoal-900 mb-4">
                  Our Commitment After the Build
                </h2>
                <p className="text-slate-600 leading-relaxed text-base lg:text-lg">
                  Our relationship with clients does not end when the last piece of equipment leaves the jobsite. Tomron Construction stands behind our work with comprehensive warranties and responsive support for every project we complete. If something is not right, we fix it, plain and simple. Many of our earliest clients still call us when they are ready for their next project or need advice on maintaining their home&apos;s exterior. That long-term loyalty is the truest measure of the quality we deliver and the relationships we build.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <MeetOwner />

      <TrustStrip />

      <section className="section-padding bg-neutral-50 grain">
        <div className="container-wide">
          <TextReveal as="h2" className="text-3xl sm:text-4xl font-display font-extrabold text-charcoal-900 text-center mb-12">
            What We Stand For
          </TextReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, index) => {
              const Icon = v.icon;
              return (
                <ScrollReveal key={v.title} direction="up" delay={index * 0.08}>
                  <div className="text-center">
                    <div className="w-14 h-14 rounded-lg bg-brand-50 flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-7 h-7 text-brand-600" />
                    </div>
                    <h3 className="text-lg font-display font-semibold text-slate-900 mb-2">{v.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{v.description}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection headline="Let's Build Something Together" />
    </>
  );
}
