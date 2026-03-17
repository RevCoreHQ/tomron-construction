import { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/metadata';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { ProcessSteps } from '@/components/sections/ProcessSteps';
import { CTASection } from '@/components/sections/CTASection';

export const metadata: Metadata = generatePageMetadata({
  title: 'Our Process | Tomron Construction',
  description: 'See how Tomron Construction works: free consultation, detailed proposal, expert construction, and final walkthrough. Siding, window, door, and renovation projects in Maple Ridge & the Lower Mainland, BC.',
  path: '/process',
});

export default function ProcessPage() {
  return (
    <>
      <div className="section-padding pb-0">
        <div className="container-wide">
          <Breadcrumbs items={[{ label: 'Our Process', href: '/process' }]} />
          <div className="max-w-3xl mb-4">
            <p className="text-sm font-semibold text-brand-600 uppercase tracking-wider mb-2">How We Work</p>
            <h1 className="text-4xl sm:text-5xl font-display font-extrabold text-charcoal-900 mb-4">
              A Clear, Proven Process From Start to Finish
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              Whether it is a full siding replacement, new windows and doors, or a building envelope repair, your project is a significant investment. Our structured process ensures you know exactly what to expect at every stage, and that you are completely satisfied with the result.
            </p>
          </div>
        </div>
      </div>
      <ProcessSteps />

      <section className="section-padding bg-gradient-to-b from-white to-neutral-50">
        <div className="container-narrow">
          <div className="space-y-12">
            <div>
              <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-charcoal-900 mb-4">
                Step 1: Free Consultation
              </h2>
              <p className="text-slate-600 leading-relaxed text-base lg:text-lg">
                Every project starts with a visit to your home. Brendan or one of our experienced team members will inspect your exterior, assess the condition of your siding, windows, doors, and building envelope, and discuss your goals and priorities. We will evaluate factors like moisture damage, insulation performance, and any underlying issues that need to be addressed. This consultation typically takes 30 to 60 minutes and is completely free with no obligation. By the end, we will have a clear understanding of your needs and the information required to prepare a detailed proposal. We encourage you to share any concerns you have about your home&apos;s exterior, whether it is visible damage, drafts, high energy bills, or simply wanting to update the look of your property.
              </p>
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-charcoal-900 mb-4">
                Step 2: Detailed Proposal
              </h2>
              <p className="text-slate-600 leading-relaxed text-base lg:text-lg">
                After the consultation, we prepare a comprehensive written proposal that includes a detailed scope of work, material specifications, and transparent pricing. For siding projects, this covers material selection, removal of existing siding, moisture barrier installation, and all finishing details. For window and door replacements, it includes the specific units, flashing, insulation, and interior and exterior trim. You will see exactly what you are getting and exactly what it costs, with no vague allowances or hidden fees. We present this proposal in person and walk through every element together, answering questions and discussing any adjustments you would like to make. We want you to feel completely confident before moving forward.
              </p>
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-charcoal-900 mb-4">
                Step 3: Expert Construction
              </h2>
              <p className="text-slate-600 leading-relaxed text-base lg:text-lg">
                Once you approve the proposal and materials are ordered, construction begins on schedule. Our experienced crew manages every phase of the build, from careful removal of existing materials through installation, finishing, and cleanup. Brendan oversees each project to ensure quality at every stage. You will receive regular updates and clear communication about what is happening and what comes next. We respect your property by maintaining clean jobsites, protecting landscaping and structures, and working efficiently to minimize disruption to your daily life. Most siding projects are completed in one to three weeks, window and door replacements in one to two weeks, and building envelope repairs vary depending on the scope of the issue.
              </p>
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-charcoal-900 mb-4">
                Step 4: Final Walkthrough
              </h2>
              <p className="text-slate-600 leading-relaxed text-base lg:text-lg">
                When construction is complete, we schedule a final walkthrough where we review every element of the finished project together. We inspect all siding, windows, doors, trim, flashing, and sealing to ensure everything meets our standards and your expectations. We document any items that need attention and address them promptly before considering the project complete. You also receive all warranty information, maintenance recommendations, and our direct contact information for any questions or support after the project is finished. Our goal is for you to feel completely confident that your home is protected and looking its best from day one.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection headline="Ready to Start Your Project?" />
    </>
  );
}
