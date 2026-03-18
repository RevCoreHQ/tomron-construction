import { Metadata } from 'next';
import Link from 'next/link';
import { ExternalLink, CheckCircle, DollarSign, ArrowRight, Layers, AlertCircle } from 'lucide-react';
import { siteConfig } from '@/data/site-config';
import { generatePageMetadata } from '@/lib/metadata';
import { JsonLd } from '@/components/seo/JsonLd';
import { breadcrumbSchema } from '@/lib/schema';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Button } from '@/components/ui/Button';
import { CTASection } from '@/components/sections/CTASection';

export const metadata: Metadata = generatePageMetadata({
  title: 'BC Rebates & Incentives | Tomron Construction',
  description:
    'Save thousands on windows and siding with CleanBC, FortisBC, and federal grants. Guide to rebates available for BC homeowners.',
  path: '/products/bc-rebates',
  keywords: ['BC rebates windows', 'CleanBC rebate', 'FortisBC rebate', 'Canada Greener Homes Grant', 'home renovation rebates BC'],
});

const rebatePrograms = [
  {
    name: 'CleanBC Better Homes',
    provider: 'Province of British Columbia',
    website: 'https://betterhomesbc.ca/',
    description:
      'The provincial CleanBC program offers rebates for energy-efficient home upgrades including windows, insulation, and heat pumps. Rebates are available for both individual upgrades and comprehensive retrofits, with higher incentives when you combine multiple upgrades.',
    eligibility: [
      'Must be a BC homeowner (principal residence)',
      'Home must be built before specific cutoff dates (varies by upgrade)',
      'Pre and post energy assessment (EnerGuide audit) required for most rebates',
      'Must use eligible products that meet minimum efficiency standards',
    ],
    windowRebate: 'Up to $2,000 for window upgrades',
    otherRebates: 'Insulation up to $3,000, heat pumps up to $6,000',
    notes: 'CleanBC rebates can often be stacked with federal and utility rebates for maximum savings. Check the Better Homes BC website for current amounts as they change periodically.',
    highlight: true,
  },
  {
    name: 'Canada Greener Homes Initiative',
    provider: 'Government of Canada (NRCan)',
    website: 'https://natural-resources.canada.ca/energy-efficiency/homes/canada-greener-homes-initiative/24831',
    description:
      'The federal government offers grants for eligible home retrofits that improve energy efficiency. The program requires an EnerGuide evaluation before and after your upgrades to measure the actual energy improvement. Grants are based on the type and scope of upgrades completed.',
    eligibility: [
      'Must be a Canadian homeowner or authorized tenant',
      'Home must be your primary residence',
      'Pre-retrofit EnerGuide evaluation required before starting work',
      'Post-retrofit evaluation required to confirm improvements',
    ],
    windowRebate: 'Up to $250 per window (with qualifying improvements)',
    otherRebates: 'Up to $5,000 total for combined upgrades',
    notes: 'Program availability may change. Check the NRCan website for current status and application windows. The EnerGuide evaluation itself may be partially rebated.',
    highlight: false,
  },
  {
    name: 'FortisBC Rebates',
    provider: 'FortisBC',
    website: 'https://www.fortisbc.com/rebates',
    description:
      'FortisBC offers rebates to natural gas and electricity customers for energy-efficient home upgrades. Window and insulation rebates are available as part of their home renovation rebate program, with additional incentives for comprehensive energy retrofits.',
    eligibility: [
      'Must be a FortisBC natural gas or electricity customer',
      'Upgrades must meet minimum efficiency requirements',
      'Some rebates require an energy assessment',
      'Available for both single-family and multi-family residences',
    ],
    windowRebate: 'Varies by product and scope of upgrade',
    otherRebates: 'Insulation, heating systems, water heaters, and more',
    notes: 'FortisBC rebates can typically be stacked with CleanBC and federal programs. They also offer a free Home Energy Evaluation for qualifying customers.',
    highlight: false,
  },
  {
    name: 'BC Hydro Rebates',
    provider: 'BC Hydro',
    website: 'https://www.bchydro.com/powersmart/residential/rebates-programs.html',
    description:
      'BC Hydro offers rebates and incentives to electricity customers for energy-efficient upgrades. While their primary focus is on heating systems, insulation, and appliances, window upgrades may qualify as part of comprehensive energy retrofit programs.',
    eligibility: [
      'Must be a BC Hydro electricity customer',
      'Home must meet program requirements for age and type',
      'Some programs require a home energy assessment',
      'Available in addition to other provincial and federal rebates',
    ],
    windowRebate: 'Available as part of comprehensive retrofit programs',
    otherRebates: 'Heat pumps, insulation, draft proofing, and more',
    notes: 'BC Hydro frequently updates their programs. Check their website for the most current offerings. Their income-qualified programs offer even higher rebates for eligible households.',
    highlight: false,
  },
];

const steps = [
  {
    step: '1',
    title: 'Book an EnerGuide Evaluation',
    description: 'Most rebate programs require a pre-retrofit energy assessment. A certified energy advisor visits your home, runs a blower door test, and evaluates your current energy performance. This establishes your baseline.',
  },
  {
    step: '2',
    title: 'Apply for Rebates Before Starting',
    description: 'Some programs require pre-approval before you begin work. Apply to the relevant programs and get confirmation. We can help you understand which programs you qualify for.',
  },
  {
    step: '3',
    title: 'Complete Your Upgrades',
    description: 'Tomron Construction performs the window, siding, or envelope upgrades. We ensure all products meet the minimum efficiency standards required by each rebate program.',
  },
  {
    step: '4',
    title: 'Post-Retrofit Evaluation',
    description: 'The energy advisor returns to test your home again. The difference between pre and post results determines your actual energy improvement and final rebate amount.',
  },
  {
    step: '5',
    title: 'Submit for Rebate',
    description: 'Submit your receipts, evaluation reports, and application to each program. Rebates are typically paid by direct deposit or cheque within 4–8 weeks of approval.',
  },
];

export default function BCRebatesPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: 'Home', url: siteConfig.url },
            { name: 'Products & Partners', url: `${siteConfig.url}/products` },
            { name: 'BC Rebates & Incentives', url: `${siteConfig.url}/products/bc-rebates` },
          ]),
        ]}
      />

      {/* Hero */}
      <section className="relative py-16 lg:py-24 bg-charcoal-900 overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: 'Products & Partners', href: '/products' },
              { label: 'BC Rebates & Incentives', href: '/products/bc-rebates' },
            ]}
            variant="dark"
          />
          <div className="max-w-3xl mt-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold bg-brand-600/20 text-brand-400 rounded-md mb-4">
              <DollarSign className="w-3.5 h-3.5" />
              Save Money
            </div>
            <h1 className="text-4xl sm:text-5xl font-display font-extrabold text-white mb-6">
              BC Rebates & Incentives for Home Upgrades
            </h1>
            <p className="text-xl text-white/60 leading-relaxed mb-8">
              Save thousands on your window, siding, and insulation upgrades with provincial, federal, and utility rebate programs available to BC homeowners. Many programs can be stacked for maximum savings.
            </p>
            <Button href="/contact" size="lg">
              Ask Us About Rebates
            </Button>
          </div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-6 bg-amber-50 border-b border-amber-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <p className="text-sm text-amber-800">
              <strong>Important:</strong> Rebate programs change frequently. Amounts, eligibility, and availability shown here are for general guidance. Always verify current program details on the official program websites before starting your project. Last reviewed: March 2026.
            </p>
          </div>
        </div>
      </section>

      {/* Rebate Programs */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="max-w-2xl mb-10">
            <p className="text-sm font-semibold text-brand-600 uppercase tracking-wider mb-2">Available Programs</p>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-charcoal-900 mb-4">
              Rebate Programs for BC Homeowners
            </h2>
            <p className="text-slate-500 leading-relaxed">
              These are the major rebate and incentive programs available for window, siding, and energy efficiency upgrades in British Columbia.
            </p>
          </div>

          <div className="space-y-6">
            {rebatePrograms.map((program) => (
              <div
                key={program.name}
                className={`rounded-lg border p-6 lg:p-8 ${program.highlight ? 'border-brand-300 bg-brand-50/30 ring-1 ring-brand-200' : 'border-neutral-200 bg-white'}`}
              >
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="text-xl font-display font-bold text-charcoal-900">{program.name}</h3>
                      {program.highlight && (
                        <span className="text-xs font-semibold text-brand-600 bg-brand-100 px-2 py-0.5 rounded">Top Program</span>
                      )}
                    </div>
                    <p className="text-sm text-slate-500">{program.provider}</p>
                  </div>
                  <a
                    href={program.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 hover:text-brand-700 transition-colors shrink-0"
                  >
                    Official Website <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                <p className="text-slate-600 leading-relaxed mb-6">{program.description}</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <div className="bg-white rounded-lg border border-neutral-200 p-4">
                    <p className="text-xs font-medium text-slate-400 mb-1">Window Rebate</p>
                    <p className="text-sm font-bold text-charcoal-900">{program.windowRebate}</p>
                  </div>
                  <div className="bg-white rounded-lg border border-neutral-200 p-4">
                    <p className="text-xs font-medium text-slate-400 mb-1">Other Rebates</p>
                    <p className="text-sm font-bold text-charcoal-900">{program.otherRebates}</p>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="font-display font-bold text-charcoal-900 mb-3 text-sm">Eligibility Requirements</h4>
                  <ul className="space-y-2">
                    {program.eligibility.map((req) => (
                      <li key={req} className="flex items-start gap-2 text-sm text-slate-700">
                        <CheckCircle className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" />
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-neutral-50 rounded-lg p-4">
                  <p className="text-sm text-slate-600">
                    <strong className="text-charcoal-900">Note:</strong> {program.notes}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stacking Rebates */}
      <section className="section-padding bg-neutral-50">
        <div className="container-wide">
          <div className="max-w-2xl mb-10">
            <p className="text-sm font-semibold text-brand-600 uppercase tracking-wider mb-2">Maximize Savings</p>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-charcoal-900 mb-4">
              Stacking Rebates for Maximum Savings
            </h2>
            <p className="text-slate-500 leading-relaxed">
              Many BC rebate programs can be combined. For a typical window replacement project, you may be eligible for rebates from multiple programs simultaneously.
            </p>
          </div>

          <div className="bg-white rounded-lg border border-neutral-200 p-6 lg:p-8">
            <h3 className="font-display font-bold text-charcoal-900 mb-4">Example: Window Replacement Rebate Stack</h3>
            <div className="space-y-3 mb-6">
              <div className="flex items-center justify-between py-2 border-b border-neutral-100">
                <span className="text-sm text-slate-600">CleanBC Better Homes window rebate</span>
                <span className="text-sm font-bold text-charcoal-900">Up to $2,000</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-neutral-100">
                <span className="text-sm text-slate-600">Canada Greener Homes Grant</span>
                <span className="text-sm font-bold text-charcoal-900">Up to $5,000</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-neutral-100">
                <span className="text-sm text-slate-600">FortisBC or BC Hydro utility rebate</span>
                <span className="text-sm font-bold text-charcoal-900">Varies</span>
              </div>
              <div className="flex items-center justify-between py-3 border-t-2 border-charcoal-900">
                <span className="text-sm font-bold text-charcoal-900">Potential Total Savings</span>
                <span className="text-lg font-display font-extrabold text-brand-600">Up to $7,000+</span>
              </div>
            </div>
            <p className="text-xs text-slate-400">
              Actual rebate amounts vary based on project scope, products installed, and energy improvement achieved. Not all programs may be available simultaneously. Verify current availability before starting your project.
            </p>
          </div>
        </div>
      </section>

      {/* How to Get Rebates */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="max-w-2xl mb-10">
            <p className="text-sm font-semibold text-brand-600 uppercase tracking-wider mb-2">Step by Step</p>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-charcoal-900 mb-4">
              How to Claim Your Rebates
            </h2>
            <p className="text-slate-500 leading-relaxed">
              The rebate process has specific steps that must be followed in order. Here is the typical process from start to finish.
            </p>
          </div>

          <div className="space-y-4">
            {steps.map((item) => (
              <div key={item.step} className="flex items-start gap-4 bg-white rounded-lg border border-neutral-200 p-6">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-brand-600 text-white text-sm font-bold shrink-0">
                  {item.step}
                </span>
                <div>
                  <h3 className="font-display font-bold text-charcoal-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-charcoal-900">
        <div className="container-narrow text-center">
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white mb-6">
            We Can Help You Navigate Rebates
          </h2>
          <p className="text-lg text-white/60 leading-relaxed mb-8 max-w-2xl mx-auto">
            Rebate programs can be confusing. Contact us and we will help you understand which programs you qualify for, what products meet the requirements, and how to maximize your savings on your window or siding project.
          </p>
          <Button href="/contact" size="lg">
            Get a Free Quote & Rebate Guidance
          </Button>
        </div>
      </section>

      <CTASection headline="Ready to Save on Your Home Upgrade?" description="Contact us for a free consultation. We'll help you understand available rebates, recommend qualifying products, and guide you through the application process." />
    </>
  );
}
