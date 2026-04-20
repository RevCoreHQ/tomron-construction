'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowLeft, Info, Crosshair, Route, BarChart3 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { AnimatedCounter } from '@/components/motion/AnimatedCounter';
import { windowComponents, tourSteps, comparisonPresets } from '@/data/window-demo';

type Section = 'explore' | 'tour' | 'compare';

const slideVariants = {
  enter: (dir: number) => ({ x: dir > 0 ? 60 : -60, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir > 0 ? -60 : 60, opacity: 0 }),
};

/* ──────────────────────────── Window Diagram (CSS) ──────────────────────────── */

function WindowDiagram({ activeId, onSelect }: { activeId: string | null; onSelect: (id: string) => void }) {
  return (
    <div className="relative w-full max-w-md mx-auto aspect-[3/4]">
      {/* Outer Frame */}
      <div className="absolute inset-0 rounded-lg bg-charcoal-800 shadow-2xl" />
      {/* Inner Frame Cavity */}
      <div className="absolute inset-3 rounded-md bg-charcoal-700" />

      {/* Glass Unit Area */}
      <div className="absolute inset-6 rounded-sm overflow-hidden">
        {/* Outer Pane */}
        <div
          className={cn(
            'absolute inset-0 w-[30%] bg-gradient-to-b from-sky-200/50 to-sky-300/40 border-r border-sky-400/30 transition-all duration-300',
            activeId === 'outer-pane' && 'ring-2 ring-brand-400 bg-sky-300/60'
          )}
        />

        {/* Low-E Coating Line */}
        <div
          className={cn(
            'absolute top-0 bottom-0 left-[28%] w-[3px] transition-all duration-300',
            activeId === 'low-e-coating' ? 'bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.6)]' : 'bg-amber-300/60'
          )}
        />

        {/* Argon Gas Cavity */}
        <div
          className={cn(
            'absolute inset-0 left-[30%] right-[30%] transition-all duration-300',
            activeId === 'argon-gas' ? 'bg-blue-200/40' : 'bg-blue-50/20'
          )}
        >
          {activeId === 'argon-gas' && (
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-[10px] font-bold text-blue-500/70 uppercase tracking-wider">Ar</span>
            </div>
          )}
        </div>

        {/* Inner Pane */}
        <div
          className={cn(
            'absolute inset-0 left-[70%] bg-gradient-to-b from-sky-200/50 to-sky-300/40 border-l border-sky-400/30 transition-all duration-300',
            activeId === 'inner-pane' && 'ring-2 ring-brand-400 bg-sky-300/60'
          )}
        />

        {/* Spacer Bar (bottom) */}
        <div
          className={cn(
            'absolute bottom-0 left-[28%] right-[28%] h-4 rounded-t-sm transition-all duration-300',
            activeId === 'spacer-bar' ? 'bg-neutral-500 ring-2 ring-brand-400' : 'bg-neutral-400'
          )}
        />
      </div>

      {/* Weatherstrip Indicator */}
      <div
        className={cn(
          'absolute top-4 left-6 right-6 h-1.5 rounded-full transition-all duration-300',
          activeId === 'weatherstrip' ? 'bg-green-400 shadow-[0_0_6px_rgba(74,222,128,0.5)]' : 'bg-neutral-500'
        )}
      />

      {/* Frame highlight */}
      {activeId === 'frame' && (
        <div className="absolute inset-0 rounded-lg ring-2 ring-brand-400 pointer-events-none" />
      )}

      {/* Hotspot Dots */}
      {windowComponents.map((comp) => (
        <button
          key={comp.id}
          onClick={() => onSelect(comp.id)}
          className={cn(
            'absolute w-6 h-6 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white shadow-lg transition-all duration-200 z-10',
            'hover:scale-125 focus:outline-none focus:ring-2 focus:ring-brand-400 focus:ring-offset-2',
            activeId === comp.id
              ? 'bg-brand-600 scale-125'
              : 'bg-brand-500 animate-pulse'
          )}
          style={{ top: comp.position.top, left: comp.position.left }}
          aria-label={comp.label}
        >
          <span className="sr-only">{comp.label}</span>
        </button>
      ))}

      {/* Heat Flow Arrows (decorative) */}
      <div className="absolute -left-4 top-1/3 flex flex-col gap-1 opacity-60">
        <span className="text-red-400 text-xs font-bold">→</span>
        <span className="text-red-400 text-xs font-bold">→</span>
        <span className="text-red-400 text-xs font-bold">→</span>
      </div>
      <div className="absolute -right-6 top-1/3 flex flex-col gap-1 opacity-60">
        <span className="text-orange-300 text-[10px] font-bold">← blocked</span>
      </div>

      {/* Sun Rays (top) */}
      <div className="absolute -top-6 left-1/2 -translate-x-1/2 flex gap-1 opacity-50">
        <span className="text-yellow-400 text-xs">☀</span>
        <span className="text-yellow-400 text-[10px]">↓</span>
      </div>
    </div>
  );
}

/* ──────────────────────────── Section 1: Explore ──────────────────────────── */

function ExploreSection() {
  const [active, setActive] = useState<string | null>(null);
  const activeComp = windowComponents.find((c) => c.id === active);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-start">
      <div className="lg:col-span-3 flex justify-center">
        <WindowDiagram activeId={active} onSelect={setActive} />
      </div>
      <div className="lg:col-span-2">
        <AnimatePresence mode="wait">
          {activeComp ? (
            <motion.div
              key={activeComp.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="bg-white border border-neutral-200 rounded-lg p-6 shadow-sm"
            >
              <h4 className="text-lg font-display font-bold text-charcoal-900 mb-2">
                {activeComp.label}
              </h4>
              <p className="text-sm text-slate-500 leading-relaxed">
                {activeComp.description}
              </p>
            </motion.div>
          ) : (
            <motion.div
              key="placeholder"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-neutral-50 border border-dashed border-neutral-300 rounded-lg p-6 text-center"
            >
              <Crosshair className="w-8 h-8 text-neutral-300 mx-auto mb-3" />
              <p className="text-sm text-slate-400">
                Tap any glowing dot on the window to learn about that component.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

/* ──────────────────────────── Section 2: Guided Tour ──────────────────────────── */

function TourSection() {
  const [stepIdx, setStepIdx] = useState(0);
  const [direction, setDirection] = useState(1);
  const currentStep = tourSteps[stepIdx];

  const next = () => {
    if (stepIdx < tourSteps.length - 1) {
      setDirection(1);
      setStepIdx((s) => s + 1);
    }
  };
  const prev = () => {
    if (stepIdx > 0) {
      setDirection(-1);
      setStepIdx((s) => s - 1);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-start">
      <div className="lg:col-span-3 flex justify-center">
        <WindowDiagram activeId={currentStep.componentId} onSelect={() => {}} />
      </div>
      <div className="lg:col-span-2 flex flex-col gap-6">
        {/* Step counter */}
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold text-brand-600 uppercase tracking-wider">
            Step {stepIdx + 1} of {tourSteps.length}
          </span>
          <div className="flex-1 h-1 bg-neutral-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-brand-600 rounded-full transition-all duration-300"
              style={{ width: `${((stepIdx + 1) / tourSteps.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Tour Content */}
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={stepIdx}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <h4 className="text-xl font-display font-bold text-charcoal-900 mb-3">
              {currentStep.title}
            </h4>
            <p className="text-sm text-slate-500 leading-relaxed mb-4">
              {currentStep.explanation}
            </p>
            {currentStep.stat && (
              <div className="bg-brand-50 border border-brand-100 rounded-lg px-4 py-3">
                <span className="text-xs font-semibold text-brand-700 uppercase tracking-wider">
                  {currentStep.stat.label}
                </span>
                <p className="text-sm font-bold text-charcoal-900 mt-0.5">
                  {currentStep.stat.value}
                </p>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Nav Buttons */}
        <div className="flex items-center gap-3 mt-2">
          <button
            onClick={prev}
            disabled={stepIdx === 0}
            className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium rounded-lg border border-neutral-200 text-charcoal-900 hover:bg-neutral-50 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back
          </button>
          <button
            onClick={next}
            disabled={stepIdx === tourSteps.length - 1}
            className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium rounded-lg bg-brand-600 text-white hover:bg-brand-700 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          >
            Next <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Progress Dots */}
        <div className="flex gap-1.5">
          {tourSteps.map((_, i) => (
            <button
              key={i}
              onClick={() => { setDirection(i > stepIdx ? 1 : -1); setStepIdx(i); }}
              className={cn(
                'w-2 h-2 rounded-full transition-all duration-200',
                i === stepIdx ? 'bg-brand-600 w-4' : 'bg-neutral-300 hover:bg-neutral-400'
              )}
              aria-label={`Go to step ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

/* ──────────────────────────── Section 3: Compare ──────────────────────────── */

function CompareSection() {
  const [presetIdx, setPresetIdx] = useState(2); // Default to Double + Low-E 270
  const preset = comparisonPresets[presetIdx];

  // Scale factors for meter bars (relative to max values)
  const uMax = 5.5;
  const shgcMax = 1.0;
  const vtMax = 1.0;
  const erMax = 45;

  return (
    <div className="space-y-8">
      {/* Preset Selector */}
      <div className="flex flex-wrap gap-2 justify-center">
        {comparisonPresets.map((p, i) => (
          <button
            key={p.id}
            onClick={() => setPresetIdx(i)}
            className={cn(
              'px-4 py-2 text-sm font-medium rounded-lg border transition-all duration-200',
              i === presetIdx
                ? 'border-brand-600 bg-brand-50 text-brand-700 ring-2 ring-brand-200'
                : 'border-neutral-200 text-slate-600 hover:border-brand-300 hover:text-charcoal-900'
            )}
          >
            {p.label}
          </button>
        ))}
      </div>

      {/* Stats Display */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* U-Factor */}
        <div className="bg-white border border-neutral-200 rounded-lg p-5">
          <div className="flex items-baseline justify-between mb-2">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">U-Factor</span>
            <span className="text-xs text-slate-400">Lower = Better</span>
          </div>
          <div className="text-2xl font-display font-extrabold text-charcoal-900">
            <AnimatedCounter target={preset.specs.uFactor * 10} prefix="" suffix="" duration={0.8} />
            <span className="text-lg text-slate-400 font-normal"> / 10</span>
          </div>
          <p className="text-[10px] text-slate-400 mt-0.5">W/m²·K (×10 for display)</p>
          <div className="mt-3 h-2 bg-neutral-100 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-red-400 rounded-full"
              animate={{ width: `${(preset.specs.uFactor / uMax) * 100}%` }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            />
          </div>
        </div>

        {/* SHGC */}
        <div className="bg-white border border-neutral-200 rounded-lg p-5">
          <div className="flex items-baseline justify-between mb-2">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">SHGC</span>
            <span className="text-xs text-slate-400">Context-dependent</span>
          </div>
          <div className="text-2xl font-display font-extrabold text-charcoal-900">
            0.<AnimatedCounter target={Math.round(preset.specs.shgc * 100)} duration={0.8} />
          </div>
          <p className="text-[10px] text-slate-400 mt-0.5">Solar Heat Gain Coefficient</p>
          <div className="mt-3 h-2 bg-neutral-100 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-yellow-400 rounded-full"
              animate={{ width: `${(preset.specs.shgc / shgcMax) * 100}%` }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            />
          </div>
        </div>

        {/* VT */}
        <div className="bg-white border border-neutral-200 rounded-lg p-5">
          <div className="flex items-baseline justify-between mb-2">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">VT</span>
            <span className="text-xs text-slate-400">Higher = Brighter</span>
          </div>
          <div className="text-2xl font-display font-extrabold text-charcoal-900">
            0.<AnimatedCounter target={Math.round(preset.specs.vt * 100)} duration={0.8} />
          </div>
          <p className="text-[10px] text-slate-400 mt-0.5">Visible Transmittance</p>
          <div className="mt-3 h-2 bg-neutral-100 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-sky-400 rounded-full"
              animate={{ width: `${(preset.specs.vt / vtMax) * 100}%` }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            />
          </div>
        </div>

        {/* ER */}
        <div className="bg-white border border-neutral-200 rounded-lg p-5">
          <div className="flex items-baseline justify-between mb-2">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">ER</span>
            <span className="text-xs text-slate-400">Higher = Better</span>
          </div>
          <div className="text-2xl font-display font-extrabold text-charcoal-900">
            <AnimatedCounter target={preset.specs.er} duration={0.8} />
          </div>
          <p className="text-[10px] text-slate-400 mt-0.5">Energy Rating</p>
          <div className="mt-3 h-2 bg-neutral-100 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-green-400 rounded-full"
              animate={{ width: `${Math.max(0, (preset.specs.er + 30) / (erMax + 30)) * 100}%` }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            />
          </div>
        </div>
      </div>

      {/* Description */}
      <AnimatePresence mode="wait">
        <motion.div
          key={preset.id}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2 }}
          className="max-w-2xl mx-auto text-center"
        >
          <p className="text-slate-500 leading-relaxed">{preset.description}</p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

/* ──────────────────────────── Main Component ──────────────────────────── */

const sections: { id: Section; label: string; icon: typeof Crosshair }[] = [
  { id: 'explore', label: 'Explore', icon: Crosshair },
  { id: 'tour', label: 'Guided Tour', icon: Route },
  { id: 'compare', label: 'Compare', icon: BarChart3 },
];

export function WindowDemo() {
  const [activeSection, setActiveSection] = useState<Section>('explore');

  return (
    <div className="space-y-10">
      {/* Section Tabs */}
      <div className="flex items-center justify-center gap-1 p-1 bg-neutral-100 rounded-lg max-w-md mx-auto">
        {sections.map((sec) => {
          const Icon = sec.icon;
          return (
            <button
              key={sec.id}
              onClick={() => setActiveSection(sec.id)}
              className={cn(
                'flex-1 flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium rounded-md transition-all duration-200',
                activeSection === sec.id
                  ? 'bg-white text-charcoal-900 shadow-sm'
                  : 'text-slate-500 hover:text-charcoal-900'
              )}
            >
              <Icon className="w-4 h-4" />
              <span className="hidden sm:inline">{sec.label}</span>
            </button>
          );
        })}
      </div>

      {/* Section Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeSection}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
        >
          {activeSection === 'explore' && <ExploreSection />}
          {activeSection === 'tour' && <TourSection />}
          {activeSection === 'compare' && <CompareSection />}
        </motion.div>
      </AnimatePresence>

      {/* Info note */}
      <div className="flex items-start gap-3 max-w-2xl mx-auto bg-neutral-50 border border-neutral-200 rounded-lg p-4">
        <Info className="w-5 h-5 text-brand-600 shrink-0 mt-0.5" />
        <p className="text-xs text-slate-500 leading-relaxed">
          All performance values shown are approximate and based on typical configurations. Actual window performance varies by
          manufacturer, size, and installation quality. Contact us for specific product recommendations for your home.
        </p>
      </div>
    </div>
  );
}
