import { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/metadata';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { ProcessSteps } from '@/components/sections/ProcessSteps';
import { CTASection } from '@/components/sections/CTASection';

export const metadata: Metadata = generatePageMetadata({
  title: 'Our Process — Design to Build | Timberline Falls UT',
  description: 'From free consultation to 3D design approval to expert construction. Learn how Timberline Falls builds custom pools, landscapes, and concrete projects in Utah.',
  path: '/process',
});

export default function ProcessPage() {
  return (
    <>
      <div className="section-padding pb-0">
        <div className="container-wide">
          <Breadcrumbs items={[{ label: 'Our Process', href: '/process' }]} />
          <div className="max-w-3xl mb-4">
            <p className="text-brand-600 font-medium text-sm tracking-wide uppercase mb-3">How We Work</p>
            <h1 className="text-4xl sm:text-5xl font-display font-bold text-slate-900 mb-4">
              A Clear, Proven Process From Vision to Reality
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              Building a pool, landscape, or concrete project is a significant investment. Our structured process ensures you know exactly what to expect at every stage, and that you love the result before we ever break ground.
            </p>
          </div>
        </div>
      </div>
      <ProcessSteps />

      <section className="section-padding bg-sand-50">
        <div className="container-narrow">
          <h2 className="text-3xl font-display font-bold text-slate-900 mb-6">The 3D Design Advantage</h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-4">
            Before any construction begins, our design team creates a detailed 3D rendering of your project. You will see your new pool, patio, landscape, or outdoor kitchen from every angle, in photorealistic detail. This is not a rough sketch; it is a precise visualization of what your finished space will look like.
          </p>
          <p className="text-lg text-slate-600 leading-relaxed mb-4">
            We include multiple rounds of revisions so you can explore different materials, colors, layouts, and features until the design is exactly right. Only when you give your full approval do we move to construction. This approach eliminates surprises and ensures you love the final result.
          </p>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-b from-white to-sand-50">
        <div className="container-narrow">
          <div className="space-y-12">
            <div>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 mb-4">
                Step 1: Free On-Site Consultation
              </h2>
              <p className="text-slate-600 leading-relaxed text-base lg:text-lg">
                Every project starts with a visit to your property. One of our experienced project consultants will walk your yard, take measurements, discuss your vision and priorities, and evaluate site-specific factors like soil conditions, drainage, access, and slope. We will also review any HOA guidelines and municipal requirements that may apply to your project. This consultation typically takes 45 to 60 minutes and is completely free with no obligation. By the end, we will have a clear understanding of your goals and the information we need to begin designing your project and preparing a detailed estimate. We encourage you to share inspiration photos, Pinterest boards, or examples of features you like, as the more we understand your vision, the better the design will be.
              </p>
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 mb-4">
                Step 2: Custom Design and Estimate
              </h2>
              <p className="text-slate-600 leading-relaxed text-base lg:text-lg">
                After the consultation, our design team creates a comprehensive project plan that includes a 3D rendering of your outdoor space, a detailed scope of work, material specifications, and a transparent line-item estimate. For pool projects, this includes the pool shell, equipment, decking, water features, and surrounding landscape elements. For landscape projects, it includes grading, irrigation, planting, hardscape, and lighting. You will see exactly what you are getting and exactly what it costs, with no vague allowances or hidden fees. We present this package in person and walk through every element together, answering questions and noting any changes you would like to make before moving forward.
              </p>
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 mb-4">
                Step 3: Design Revisions and Final Approval
              </h2>
              <p className="text-slate-600 leading-relaxed text-base lg:text-lg">
                We never rush the design phase because getting it right before construction is the single most important factor in a successful project. After the initial presentation, most clients request two to four rounds of revisions, adjusting pool shape, swapping materials, repositioning features, or exploring different planting schemes. Each revision is reflected in an updated 3D rendering so you can see the impact of every change. Once you are completely satisfied with the design and estimate, you give your formal approval and we schedule your project for construction. This approved design becomes the blueprint that our construction team follows precisely, ensuring the finished result matches what you approved on screen.
              </p>
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 mb-4">
                Step 4: Permits and Pre-Construction
              </h2>
              <p className="text-slate-600 leading-relaxed text-base lg:text-lg">
                Before construction begins, Timberline Falls handles all necessary permits and approvals. This includes city building permits, HOA architectural review submissions, utility locates, and any engineering reviews required for your project. We prepare all drawings and documentation, submit applications, respond to reviewer comments, and schedule inspections. For pool projects, this process typically takes two to four weeks depending on the municipality. During this time, we also finalize material orders, coordinate equipment delivery, and schedule our construction crews so work begins promptly once permits are approved. We keep you informed throughout the permitting process so you always know the status and expected timeline.
              </p>
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 mb-4">
                Step 5: Expert Construction
              </h2>
              <p className="text-slate-600 leading-relaxed text-base lg:text-lg">
                Construction day is when your project starts becoming real. Our in-house crews manage every phase of the build, from excavation and grading through final planting and cleanup. A dedicated project manager oversees your job from start to finish, coordinating all trades, scheduling inspections, and ensuring quality at every stage. You will receive regular updates with progress photos and clear communication about what is happening and what comes next. We respect your property by maintaining clean jobsites, protecting existing landscaping and structures, and working efficiently to minimize disruption to your daily life. Most pool projects are completed in 8 to 14 weeks, landscape installations in 2 to 6 weeks, and concrete projects in 1 to 3 weeks depending on scope.
              </p>
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 mb-4">
                Step 6: Final Walkthrough and Handoff
              </h2>
              <p className="text-slate-600 leading-relaxed text-base lg:text-lg">
                When construction is complete, your project manager schedules a final walkthrough where we review every element of the finished project together. For pool projects, this includes a comprehensive orientation covering your equipment, automation system, chemical management, and maintenance schedule. For landscape projects, we review irrigation programming, planting care instructions, and seasonal maintenance recommendations. We document any items that need attention and address them promptly before considering the project complete. You also receive all warranty information, equipment manuals, and our direct contact information for any questions or support after the project is finished. Our goal is for you to feel completely confident enjoying and caring for your new outdoor space from day one.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection headline="Ready to Start Your Project?" />
    </>
  );
}
