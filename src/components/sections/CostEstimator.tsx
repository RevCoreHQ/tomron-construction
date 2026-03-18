'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, Layers, SquareStack, ArrowRight, ArrowLeft, Calculator, Phone } from 'lucide-react';
import { AnimatedCounter } from '@/components/motion/AnimatedCounter';
import {
  ProjectType,
  windowMaterials,
  sidingMaterials,
  homeSizes,
  windowCountOptions,
  WindowMaterial,
  SidingMaterial,
} from '@/data/cost-estimator';
import { Button } from '@/components/ui/Button';

interface Selections {
  projectType: ProjectType | null;
  windowMaterial: string | null;
  sidingMaterial: string | null;
  homeSize: string | null;
  windowCount: string | null;
}

const projectTypes = [
  { id: 'windows' as const, label: 'Window Replacement', icon: SquareStack, desc: 'Replace some or all windows' },
  { id: 'siding' as const, label: 'Siding Installation', icon: Layers, desc: 'New siding for your home' },
  { id: 'both' as const, label: 'Windows & Siding', icon: Home, desc: 'Complete exterior upgrade' },
];

function calculateEstimate(selections: Selections) {
  let low = 0;
  let high = 0;

  const homeSize = homeSizes.find((h) => h.id === selections.homeSize);
  const windowCount = windowCountOptions.find((w) => w.id === selections.windowCount);

  if (selections.projectType === 'windows' || selections.projectType === 'both') {
    const material = windowMaterials.find((m) => m.id === selections.windowMaterial);
    if (material && windowCount) {
      low += material.pricePerWindow[0] * windowCount.count;
      high += material.pricePerWindow[1] * windowCount.count;
    }
  }

  if (selections.projectType === 'siding' || selections.projectType === 'both') {
    const material = sidingMaterials.find((m) => m.id === selections.sidingMaterial);
    if (material && homeSize) {
      low += material.pricePerSqFt[0] * homeSize.exteriorSqFt;
      high += material.pricePerSqFt[1] * homeSize.exteriorSqFt;
    }
  }

  // Round to nearest 500
  low = Math.round(low / 500) * 500;
  high = Math.round(high / 500) * 500;

  return { low, high };
}

const slideVariants = {
  enter: (dir: number) => ({ x: dir > 0 ? 60 : -60, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir > 0 ? -60 : 60, opacity: 0 }),
};

export function CostEstimator() {
  const [step, setStep] = useState(0);
  const [direction, setDirection] = useState(1);
  const [selections, setSelections] = useState<Selections>({
    projectType: null,
    windowMaterial: null,
    sidingMaterial: null,
    homeSize: null,
    windowCount: null,
  });

  const needsWindows = selections.projectType === 'windows' || selections.projectType === 'both';
  const needsSiding = selections.projectType === 'siding' || selections.projectType === 'both';

  // Determine total steps based on project type
  const getStepLabels = () => {
    const labels = ['Project Type'];
    if (needsWindows) labels.push('Window Details');
    if (needsSiding) labels.push('Siding Details');
    labels.push('Your Estimate');
    return labels;
  };
  const stepLabels = getStepLabels();
  const totalSteps = stepLabels.length;

  const goNext = () => {
    setDirection(1);
    setStep((s) => Math.min(s + 1, totalSteps - 1));
  };

  const goBack = () => {
    setDirection(-1);
    setStep((s) => Math.max(s - 1, 0));
  };

  const canAdvance = () => {
    if (step === 0) return !!selections.projectType;
    // Dynamic steps depend on project type
    const currentLabel = stepLabels[step];
    if (currentLabel === 'Window Details') return !!selections.windowMaterial && !!selections.windowCount;
    if (currentLabel === 'Siding Details') return !!selections.sidingMaterial && !!selections.homeSize;
    return true;
  };

  const currentLabel = stepLabels[step];
  const isResultStep = currentLabel === 'Your Estimate';
  const estimate = calculateEstimate(selections);

  const renderStepContent = () => {
    if (currentLabel === 'Project Type') {
      return (
        <div>
          <h3 className="text-xl font-display font-bold text-charcoal-900 mb-2">What type of project?</h3>
          <p className="text-sm text-slate-500 mb-6">Select the type of upgrade you are considering.</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {projectTypes.map((pt) => {
              const Icon = pt.icon;
              const selected = selections.projectType === pt.id;
              return (
                <button
                  key={pt.id}
                  onClick={() => {
                    setSelections((s) => ({ ...s, projectType: pt.id, windowMaterial: null, sidingMaterial: null, homeSize: null, windowCount: null }));
                  }}
                  className={`p-6 rounded-lg border-2 text-left transition-all ${
                    selected
                      ? 'border-brand-600 bg-brand-50 ring-2 ring-brand-200'
                      : 'border-neutral-200 bg-white hover:border-brand-300'
                  }`}
                >
                  <Icon className={`w-8 h-8 mb-3 ${selected ? 'text-brand-600' : 'text-slate-400'}`} />
                  <p className="font-display font-bold text-charcoal-900">{pt.label}</p>
                  <p className="text-xs text-slate-500 mt-1">{pt.desc}</p>
                </button>
              );
            })}
          </div>
        </div>
      );
    }

    if (currentLabel === 'Window Details') {
      return (
        <div>
          <h3 className="text-xl font-display font-bold text-charcoal-900 mb-2">Window Details</h3>
          <p className="text-sm text-slate-500 mb-6">Select your preferred frame material and number of windows.</p>

          <p className="text-sm font-semibold text-charcoal-900 mb-3">Frame Material</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
            {windowMaterials.map((m) => {
              const selected = selections.windowMaterial === m.id;
              return (
                <button
                  key={m.id}
                  onClick={() => setSelections((s) => ({ ...s, windowMaterial: m.id }))}
                  className={`p-4 rounded-lg border-2 text-left transition-all ${
                    selected
                      ? 'border-brand-600 bg-brand-50 ring-2 ring-brand-200'
                      : 'border-neutral-200 bg-white hover:border-brand-300'
                  }`}
                >
                  <p className="font-semibold text-charcoal-900 text-sm">{m.label}</p>
                  <p className="text-xs text-slate-500 mt-1">{m.description}</p>
                  <p className="text-xs font-bold text-brand-600 mt-2">${m.pricePerWindow[0].toLocaleString()} – ${m.pricePerWindow[1].toLocaleString()} / window</p>
                </button>
              );
            })}
          </div>

          <p className="text-sm font-semibold text-charcoal-900 mb-3">Number of Windows</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {windowCountOptions.map((w) => {
              const selected = selections.windowCount === w.id;
              return (
                <button
                  key={w.id}
                  onClick={() => setSelections((s) => ({ ...s, windowCount: w.id }))}
                  className={`p-3 rounded-lg border-2 text-center transition-all ${
                    selected
                      ? 'border-brand-600 bg-brand-50 ring-2 ring-brand-200'
                      : 'border-neutral-200 bg-white hover:border-brand-300'
                  }`}
                >
                  <p className="font-semibold text-charcoal-900 text-sm">{w.label}</p>
                </button>
              );
            })}
          </div>
        </div>
      );
    }

    if (currentLabel === 'Siding Details') {
      return (
        <div>
          <h3 className="text-xl font-display font-bold text-charcoal-900 mb-2">Siding Details</h3>
          <p className="text-sm text-slate-500 mb-6">Select your preferred siding material and home size.</p>

          <p className="text-sm font-semibold text-charcoal-900 mb-3">Siding Material</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {sidingMaterials.map((m) => {
              const selected = selections.sidingMaterial === m.id;
              return (
                <button
                  key={m.id}
                  onClick={() => setSelections((s) => ({ ...s, sidingMaterial: m.id }))}
                  className={`p-4 rounded-lg border-2 text-left transition-all ${
                    selected
                      ? 'border-brand-600 bg-brand-50 ring-2 ring-brand-200'
                      : 'border-neutral-200 bg-white hover:border-brand-300'
                  }`}
                >
                  <p className="font-semibold text-charcoal-900 text-sm">{m.label}</p>
                  <p className="text-xs text-slate-500 mt-1">{m.description}</p>
                  <p className="text-xs font-bold text-brand-600 mt-2">${m.pricePerSqFt[0]} – ${m.pricePerSqFt[1]} / sq ft installed</p>
                </button>
              );
            })}
          </div>

          <p className="text-sm font-semibold text-charcoal-900 mb-3">Home Size</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {homeSizes.map((h) => {
              const selected = selections.homeSize === h.id;
              return (
                <button
                  key={h.id}
                  onClick={() => setSelections((s) => ({ ...s, homeSize: h.id }))}
                  className={`p-3 rounded-lg border-2 text-left transition-all ${
                    selected
                      ? 'border-brand-600 bg-brand-50 ring-2 ring-brand-200'
                      : 'border-neutral-200 bg-white hover:border-brand-300'
                  }`}
                >
                  <p className="font-semibold text-charcoal-900 text-sm">{h.label}</p>
                </button>
              );
            })}
          </div>
        </div>
      );
    }

    // Results step
    const windowMat = windowMaterials.find((m) => m.id === selections.windowMaterial);
    const sidingMat = sidingMaterials.find((m) => m.id === selections.sidingMaterial);
    const homeSize = homeSizes.find((h) => h.id === selections.homeSize);
    const windowCount = windowCountOptions.find((w) => w.id === selections.windowCount);

    return (
      <div>
        <div className="text-center mb-8">
          <Calculator className="w-10 h-10 text-brand-600 mx-auto mb-3" />
          <h3 className="text-xl font-display font-bold text-charcoal-900 mb-2">Your Estimated Cost</h3>
          <p className="text-sm text-slate-500">Based on your selections, here is an approximate cost range.</p>
        </div>

        {/* Price Display */}
        <div className="bg-gradient-to-br from-brand-600 to-brand-700 rounded-xl p-8 text-center mb-8">
          <p className="text-sm font-semibold text-white/70 mb-2">Estimated Range</p>
          <div className="flex items-center justify-center gap-3 text-white">
            <AnimatedCounter target={estimate.low} prefix="$" className="text-3xl sm:text-4xl font-display font-extrabold" />
            <span className="text-2xl text-white/60">–</span>
            <AnimatedCounter target={estimate.high} prefix="$" className="text-3xl sm:text-4xl font-display font-extrabold" />
          </div>
          <p className="text-xs text-white/50 mt-3">Includes materials, labour, and installation</p>
        </div>

        {/* Breakdown */}
        <div className="bg-neutral-50 rounded-lg p-6 mb-8">
          <h4 className="font-display font-bold text-charcoal-900 mb-4 text-sm">Your Selections</h4>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between py-1.5 border-b border-neutral-200">
              <span className="text-slate-500">Project Type</span>
              <span className="font-semibold text-charcoal-900">
                {projectTypes.find((p) => p.id === selections.projectType)?.label}
              </span>
            </div>
            {windowMat && (
              <>
                <div className="flex justify-between py-1.5 border-b border-neutral-200">
                  <span className="text-slate-500">Window Frame</span>
                  <span className="font-semibold text-charcoal-900">{windowMat.label}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-neutral-200">
                  <span className="text-slate-500">Window Count</span>
                  <span className="font-semibold text-charcoal-900">{windowCount?.label}</span>
                </div>
              </>
            )}
            {sidingMat && (
              <>
                <div className="flex justify-between py-1.5 border-b border-neutral-200">
                  <span className="text-slate-500">Siding Material</span>
                  <span className="font-semibold text-charcoal-900">{sidingMat.label}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-neutral-200">
                  <span className="text-slate-500">Home Size</span>
                  <span className="font-semibold text-charcoal-900">{homeSize?.label}</span>
                </div>
              </>
            )}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center space-y-4">
          <Button href="/contact" size="lg">
            Get an Exact Quote
          </Button>
          <p className="text-sm text-slate-500">
            Or call{' '}
            <a href="tel:+16047549392" className="font-semibold text-brand-600 hover:text-brand-700">
              (604) 754-9392
            </a>{' '}
            for a free consultation
          </p>
        </div>

        {/* Disclaimer */}
        <p className="text-[11px] text-slate-400 text-center mt-6 max-w-md mx-auto">
          These estimates are for budgeting purposes only and may vary based on site conditions, building code requirements, product availability, and project complexity. Contact us for an accurate quote specific to your home.
        </p>
      </div>
    );
  };

  return (
    <div className="max-w-3xl mx-auto">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-3">
          {stepLabels.map((label, i) => (
            <div key={label} className="flex items-center gap-2">
              <div
                className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${
                  i <= step ? 'bg-brand-600 text-white' : 'bg-neutral-200 text-slate-400'
                }`}
              >
                {i + 1}
              </div>
              <span className={`text-xs font-medium hidden sm:block ${i <= step ? 'text-charcoal-900' : 'text-slate-400'}`}>
                {label}
              </span>
              {i < stepLabels.length - 1 && (
                <div className={`w-8 lg:w-16 h-0.5 mx-1 ${i < step ? 'bg-brand-600' : 'bg-neutral-200'}`} />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Step Content */}
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={step}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
        >
          {renderStepContent()}
        </motion.div>
      </AnimatePresence>

      {/* Navigation */}
      {!isResultStep && (
        <div className="flex justify-between mt-8">
          <button
            onClick={goBack}
            disabled={step === 0}
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-slate-600 hover:text-charcoal-900 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </button>
          <button
            onClick={goNext}
            disabled={!canAdvance()}
            className="inline-flex items-center gap-2 px-6 py-2.5 text-sm font-semibold text-white bg-brand-600 rounded-lg hover:bg-brand-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
          >
            Next
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}

      {isResultStep && (
        <div className="text-center mt-6">
          <button
            onClick={() => {
              setStep(0);
              setSelections({ projectType: null, windowMaterial: null, sidingMaterial: null, homeSize: null, windowCount: null });
            }}
            className="text-sm text-brand-600 font-semibold hover:text-brand-700 transition-colors"
          >
            Start Over
          </button>
        </div>
      )}
    </div>
  );
}
