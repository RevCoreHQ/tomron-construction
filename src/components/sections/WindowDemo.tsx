'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowLeft, Route, BarChart3, Phone } from 'lucide-react';
import { cn } from '@/lib/utils';
import { AnimatedCounter } from '@/components/motion/AnimatedCounter';
import { tourSteps, comparisonPresets } from '@/data/window-demo';
import { siteConfig } from '@/data/site-config';

type Section = 'tour' | 'compare';

const slideVariants = {
  enter: (dir: number) => ({ x: dir > 0 ? 60 : -60, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir > 0 ? -60 : 60, opacity: 0 }),
};

/* ────────────── Realistic Window Cross-Section (SVG) ────────────── */

function WindowCrossSection({ activeId }: { activeId: string | null }) {
  const isActive = (id: string) => activeId === id;

  return (
    <div className="relative w-full max-w-lg mx-auto">
      <svg
        viewBox="0 0 500 600"
        className="w-full h-auto drop-shadow-xl"
        aria-label="Window cross-section diagram showing components of a double-pane Low-E window"
      >
        <defs>
          {/* Glass gradient */}
          <linearGradient id="glassGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#bfdbfe" stopOpacity="0.6" />
            <stop offset="50%" stopColor="#93c5fd" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#bfdbfe" stopOpacity="0.5" />
          </linearGradient>
          {/* Frame gradient */}
          <linearGradient id="frameGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#f5f5f4" />
            <stop offset="15%" stopColor="#ffffff" />
            <stop offset="85%" stopColor="#e7e5e4" />
            <stop offset="100%" stopColor="#d6d3d1" />
          </linearGradient>
          {/* Frame inner chambers */}
          <pattern id="chambers" width="12" height="12" patternUnits="userSpaceOnUse">
            <rect width="12" height="12" fill="#f5f5f4" />
            <rect x="1" y="1" width="10" height="10" fill="#fafaf9" rx="1" />
          </pattern>
          {/* Low-E shimmer */}
          <linearGradient id="loweGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.3" />
            <stop offset="30%" stopColor="#f59e0b" stopOpacity="0.7" />
            <stop offset="70%" stopColor="#fbbf24" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.3" />
          </linearGradient>
          {/* Argon gas subtle */}
          <linearGradient id="argonGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#dbeafe" stopOpacity="0.2" />
            <stop offset="50%" stopColor="#bfdbfe" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#dbeafe" stopOpacity="0.2" />
          </linearGradient>
        </defs>

        {/* ── Background context ── */}
        {/* Exterior side indicator */}
        <rect x="0" y="0" width="140" height="600" fill="#f0f9ff" opacity="0.5" />
        <text x="70" y="30" textAnchor="middle" className="text-[11px]" fill="#64748b" fontWeight="600" fontSize="11" letterSpacing="1">
          EXTERIOR
        </text>
        {/* Interior side indicator */}
        <rect x="360" y="0" width="140" height="600" fill="#fef3c7" opacity="0.3" />
        <text x="430" y="30" textAnchor="middle" className="text-[11px]" fill="#64748b" fontWeight="600" fontSize="11" letterSpacing="1">
          INTERIOR
        </text>

        {/* ── FRAME (outer) ── */}
        <g opacity={isActive('frame') ? 1 : 0.95}>
          {/* Left frame profile */}
          <rect
            x="60" y="50" width="55" height="500" rx="3"
            fill="url(#frameGrad)"
            stroke={isActive('frame') ? '#2563eb' : '#a8a29e'}
            strokeWidth={isActive('frame') ? 2.5 : 1}
          />
          {/* Frame chamber lines */}
          <line x1="75" y1="60" x2="75" y2="540" stroke="#d6d3d1" strokeWidth="0.5" />
          <line x1="88" y1="60" x2="88" y2="540" stroke="#d6d3d1" strokeWidth="0.5" />
          <line x1="100" y1="60" x2="100" y2="540" stroke="#d6d3d1" strokeWidth="0.5" />
          {/* Right frame profile */}
          <rect
            x="385" y="50" width="55" height="500" rx="3"
            fill="url(#frameGrad)"
            stroke={isActive('frame') ? '#2563eb' : '#a8a29e'}
            strokeWidth={isActive('frame') ? 2.5 : 1}
          />
          <line x1="400" y1="60" x2="400" y2="540" stroke="#d6d3d1" strokeWidth="0.5" />
          <line x1="413" y1="60" x2="413" y2="540" stroke="#d6d3d1" strokeWidth="0.5" />
          <line x1="425" y1="60" x2="425" y2="540" stroke="#d6d3d1" strokeWidth="0.5" />
          {/* Top frame */}
          <rect
            x="60" y="50" width="380" height="35" rx="3"
            fill="url(#frameGrad)"
            stroke={isActive('frame') ? '#2563eb' : '#a8a29e'}
            strokeWidth={isActive('frame') ? 2.5 : 1}
          />
          {/* Bottom frame */}
          <rect
            x="60" y="515" width="380" height="35" rx="3"
            fill="url(#frameGrad)"
            stroke={isActive('frame') ? '#2563eb' : '#a8a29e'}
            strokeWidth={isActive('frame') ? 2.5 : 1}
          />
        </g>

        {/* ── WEATHERSTRIPPING ── */}
        <g opacity={isActive('weatherstrip') ? 1 : 0.8}>
          <rect
            x="112" y="82" width="6" height="436" rx="3"
            fill={isActive('weatherstrip') ? '#4ade80' : '#6b7280'}
            stroke={isActive('weatherstrip') ? '#16a34a' : 'none'}
            strokeWidth="1.5"
          />
          <rect
            x="382" y="82" width="6" height="436" rx="3"
            fill={isActive('weatherstrip') ? '#4ade80' : '#6b7280'}
            stroke={isActive('weatherstrip') ? '#16a34a' : 'none'}
            strokeWidth="1.5"
          />
        </g>

        {/* ── OUTER GLASS PANE ── */}
        <g opacity={isActive('outer-pane') ? 1 : 0.9}>
          <rect
            x="130" y="88" width="14" height="424" rx="1"
            fill="url(#glassGrad)"
            stroke={isActive('outer-pane') ? '#2563eb' : '#7dd3fc'}
            strokeWidth={isActive('outer-pane') ? 2.5 : 1.5}
          />
          {/* Glass reflection highlight */}
          <rect x="132" y="100" width="3" height="380" rx="1" fill="white" opacity="0.4" />
        </g>

        {/* ── LOW-E COATING (on inner surface of outer pane) ── */}
        <rect
          x="143" y="88" width="3" height="424" rx="0.5"
          fill="url(#loweGrad)"
          stroke={isActive('low-e-coating') ? '#f59e0b' : 'none'}
          strokeWidth="1.5"
          opacity={isActive('low-e-coating') ? 1 : 0.7}
        />
        {isActive('low-e-coating') && (
          <g>
            {/* Shimmer effect */}
            <rect x="143" y="88" width="3" height="424" fill="#fbbf24" opacity="0.3">
              <animate attributeName="opacity" values="0.3;0.6;0.3" dur="2s" repeatCount="indefinite" />
            </rect>
          </g>
        )}

        {/* ── ARGON GAS CAVITY ── */}
        <rect
          x="148" y="88" width="200" height="424"
          fill="url(#argonGrad)"
          stroke={isActive('argon-gas') ? '#3b82f6' : 'none'}
          strokeWidth="2"
          strokeDasharray={isActive('argon-gas') ? '6 3' : 'none'}
        />
        {/* Gas molecule indicators */}
        {isActive('argon-gas') && (
          <g opacity="0.5">
            <circle cx="200" cy="200" r="4" fill="#93c5fd"><animate attributeName="cy" values="200;210;200" dur="3s" repeatCount="indefinite" /></circle>
            <circle cx="260" cy="300" r="3" fill="#93c5fd"><animate attributeName="cy" values="300;290;300" dur="2.5s" repeatCount="indefinite" /></circle>
            <circle cx="230" cy="400" r="3.5" fill="#93c5fd"><animate attributeName="cy" values="400;408;400" dur="3.5s" repeatCount="indefinite" /></circle>
            <circle cx="300" cy="250" r="3" fill="#93c5fd"><animate attributeName="cy" values="250;258;250" dur="2.8s" repeatCount="indefinite" /></circle>
            <text x="248" y="160" textAnchor="middle" fill="#3b82f6" fontSize="14" fontWeight="600">Ar</text>
          </g>
        )}

        {/* ── INNER GLASS PANE ── */}
        <g opacity={isActive('inner-pane') ? 1 : 0.9}>
          <rect
            x="348" y="88" width="14" height="424" rx="1"
            fill="url(#glassGrad)"
            stroke={isActive('inner-pane') ? '#2563eb' : '#7dd3fc'}
            strokeWidth={isActive('inner-pane') ? 2.5 : 1.5}
          />
          <rect x="350" y="100" width="3" height="380" rx="1" fill="white" opacity="0.4" />
        </g>

        {/* ── WARM-EDGE SPACER ── */}
        <g opacity={isActive('spacer-bar') ? 1 : 0.9}>
          {/* Top spacer */}
          <rect
            x="140" y="88" width="224" height="16" rx="2"
            fill={isActive('spacer-bar') ? '#1e293b' : '#374151'}
            stroke={isActive('spacer-bar') ? '#2563eb' : '#1f2937'}
            strokeWidth={isActive('spacer-bar') ? 2 : 0.5}
          />
          {/* Bottom spacer */}
          <rect
            x="140" y="496" width="224" height="16" rx="2"
            fill={isActive('spacer-bar') ? '#1e293b' : '#374151'}
            stroke={isActive('spacer-bar') ? '#2563eb' : '#1f2937'}
            strokeWidth={isActive('spacer-bar') ? 2 : 0.5}
          />
          {/* Desiccant dots on spacer */}
          <circle cx="180" cy="96" r="2" fill="#6b7280" opacity="0.5" />
          <circle cx="200" cy="96" r="2" fill="#6b7280" opacity="0.5" />
          <circle cx="220" cy="96" r="2" fill="#6b7280" opacity="0.5" />
          <circle cx="240" cy="96" r="2" fill="#6b7280" opacity="0.5" />
          <circle cx="260" cy="96" r="2" fill="#6b7280" opacity="0.5" />
          <circle cx="280" cy="96" r="2" fill="#6b7280" opacity="0.5" />
          <circle cx="300" cy="96" r="2" fill="#6b7280" opacity="0.5" />
          <circle cx="320" cy="96" r="2" fill="#6b7280" opacity="0.5" />
        </g>

        {/* ── HEAT FLOW ARROWS (exterior → blocked) ── */}
        <g opacity="0.6">
          {/* Cold arrows from exterior */}
          <path d="M 20 200 L 55 200" stroke="#ef4444" strokeWidth="2" markerEnd="url(#arrowRed)" />
          <path d="M 20 300 L 55 300" stroke="#ef4444" strokeWidth="2" markerEnd="url(#arrowRed)" />
          <path d="M 20 400 L 55 400" stroke="#ef4444" strokeWidth="2" markerEnd="url(#arrowRed)" />
          <text x="12" y="250" fill="#ef4444" fontSize="9" fontWeight="600" transform="rotate(-90, 12, 250)">COLD</text>
        </g>

        {/* Sun rays from top */}
        <g opacity="0.5">
          <path d="M 200 10 L 200 44" stroke="#f59e0b" strokeWidth="2" strokeDasharray="3 2" />
          <path d="M 250 5 L 250 44" stroke="#f59e0b" strokeWidth="2" strokeDasharray="3 2" />
          <path d="M 300 10 L 300 44" stroke="#f59e0b" strokeWidth="2" strokeDasharray="3 2" />
          <circle cx="250" cy="5" r="8" fill="#fbbf24" opacity="0.4" />
          <text x="250" y="9" textAnchor="middle" fill="#f59e0b" fontSize="10">☀</text>
        </g>

        {/* Warm interior indicator */}
        <g opacity="0.5">
          <text x="460" y="300" fill="#f59e0b" fontSize="9" fontWeight="600" transform="rotate(90, 460, 300)">WARM</text>
        </g>

        {/* Arrow marker definitions */}
        <defs>
          <marker id="arrowRed" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
            <path d="M 0 0 L 8 4 L 0 8 Z" fill="#ef4444" />
          </marker>
        </defs>
      </svg>

      {/* Active component label overlay */}
      {activeId && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="absolute top-4 left-1/2 -translate-x-1/2 bg-brand-600 text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg"
        >
          {tourSteps.find(s => s.componentId === activeId)?.title || activeId}
        </motion.div>
      )}
    </div>
  );
}

/* ────────────── Guided Tour Section ────────────── */

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
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
      {/* Diagram */}
      <div className="flex justify-center">
        <WindowCrossSection activeId={currentStep.componentId} />
      </div>

      {/* Tour Content */}
      <div className="flex flex-col gap-6">
        {/* Progress */}
        <div className="flex items-center gap-3">
          <span className="text-sm font-bold text-brand-600">
            {stepIdx + 1}/{tourSteps.length}
          </span>
          <div className="flex-1 h-1.5 bg-neutral-100 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-brand-600 rounded-full"
              animate={{ width: `${((stepIdx + 1) / tourSteps.length) * 100}%` }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
            />
          </div>
        </div>

        {/* Content */}
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={stepIdx}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
            className="min-h-[180px]"
          >
            <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-charcoal-900 mb-4">
              {currentStep.title}
            </h3>
            <p className="text-base text-slate-600 leading-relaxed mb-5">
              {currentStep.explanation}
            </p>
            {currentStep.stat && (
              <div className="inline-flex items-center gap-3 bg-brand-50 border border-brand-100 rounded-lg px-5 py-3">
                <div className="w-2 h-2 rounded-full bg-brand-600" />
                <div>
                  <span className="text-xs font-semibold text-brand-700 uppercase tracking-wider block">
                    {currentStep.stat.label}
                  </span>
                  <span className="text-sm font-bold text-charcoal-900">
                    {currentStep.stat.value}
                  </span>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Navigation */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={prev}
              disabled={stepIdx === 0}
              className="inline-flex items-center gap-1.5 px-5 py-2.5 text-sm font-semibold rounded-lg border border-neutral-200 text-charcoal-900 hover:bg-neutral-50 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            >
              <ArrowLeft className="w-4 h-4" /> Back
            </button>
            <button
              onClick={next}
              disabled={stepIdx === tourSteps.length - 1}
              className="inline-flex items-center gap-1.5 px-5 py-2.5 text-sm font-semibold rounded-lg bg-brand-600 text-white hover:bg-brand-700 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            >
              Next <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Dots */}
          <div className="flex gap-1.5">
            {tourSteps.map((_, i) => (
              <button
                key={i}
                onClick={() => { setDirection(i > stepIdx ? 1 : -1); setStepIdx(i); }}
                className={cn(
                  'w-2.5 h-2.5 rounded-full transition-all duration-200',
                  i === stepIdx ? 'bg-brand-600 scale-125' : i < stepIdx ? 'bg-brand-200' : 'bg-neutral-200 hover:bg-neutral-300'
                )}
                aria-label={`Go to step ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ────────────── Compare Section ────────────── */

function CompareSection() {
  const [presetIdx, setPresetIdx] = useState(2);
  const preset = comparisonPresets[presetIdx];

  const uMax = 5.5;
  const erMax = 45;

  return (
    <div className="space-y-10">
      {/* Heading */}
      <div className="text-center max-w-2xl mx-auto">
        <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-charcoal-900 mb-3">
          Compare Window Configurations
        </h3>
        <p className="text-slate-500 leading-relaxed">
          See how different glass types perform. Click each option to compare U-factor, solar heat gain, light transmission, and overall energy rating.
        </p>
      </div>

      {/* Preset Selector */}
      <div className="flex flex-wrap gap-2 justify-center">
        {comparisonPresets.map((p, i) => (
          <button
            key={p.id}
            onClick={() => setPresetIdx(i)}
            className={cn(
              'px-5 py-2.5 text-sm font-semibold rounded-full border-2 transition-all duration-200',
              i === presetIdx
                ? 'border-brand-600 bg-brand-600 text-white shadow-md'
                : 'border-neutral-200 text-slate-600 hover:border-brand-300 hover:text-charcoal-900 bg-white'
            )}
          >
            {p.label}
          </button>
        ))}
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
        {/* U-Factor */}
        <div className="bg-white border border-neutral-200 rounded-xl p-5 shadow-sm">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">U-Factor</span>
          <div className="mt-2 text-3xl font-display font-extrabold text-charcoal-900">
            <AnimatedCounter target={preset.specs.uFactor * 10} duration={0.6} />
            <span className="text-base text-slate-300 font-normal ml-0.5">/ 50</span>
          </div>
          <p className="text-[10px] text-slate-400 mt-1">W/m²·K (×10)</p>
          <div className="mt-3 h-2.5 bg-neutral-100 rounded-full overflow-hidden">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-green-400 to-red-400"
              animate={{ width: `${(preset.specs.uFactor / uMax) * 100}%` }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            />
          </div>
          <p className="text-[10px] text-slate-400 mt-1.5">Lower = Better insulation</p>
        </div>

        {/* SHGC */}
        <div className="bg-white border border-neutral-200 rounded-xl p-5 shadow-sm">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">SHGC</span>
          <div className="mt-2 text-3xl font-display font-extrabold text-charcoal-900">
            0.<AnimatedCounter target={Math.round(preset.specs.shgc * 100)} duration={0.6} />
          </div>
          <p className="text-[10px] text-slate-400 mt-1">Solar Heat Gain</p>
          <div className="mt-3 h-2.5 bg-neutral-100 rounded-full overflow-hidden">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-yellow-300 to-orange-400"
              animate={{ width: `${preset.specs.shgc * 100}%` }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            />
          </div>
          <p className="text-[10px] text-slate-400 mt-1.5">Depends on orientation</p>
        </div>

        {/* VT */}
        <div className="bg-white border border-neutral-200 rounded-xl p-5 shadow-sm">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">VT</span>
          <div className="mt-2 text-3xl font-display font-extrabold text-charcoal-900">
            0.<AnimatedCounter target={Math.round(preset.specs.vt * 100)} duration={0.6} />
          </div>
          <p className="text-[10px] text-slate-400 mt-1">Visible Light</p>
          <div className="mt-3 h-2.5 bg-neutral-100 rounded-full overflow-hidden">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-sky-200 to-sky-500"
              animate={{ width: `${preset.specs.vt * 100}%` }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            />
          </div>
          <p className="text-[10px] text-slate-400 mt-1.5">Higher = Brighter</p>
        </div>

        {/* ER */}
        <div className="bg-white border border-neutral-200 rounded-xl p-5 shadow-sm">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Energy Rating</span>
          <div className="mt-2 text-3xl font-display font-extrabold text-charcoal-900">
            <AnimatedCounter target={preset.specs.er} duration={0.6} />
          </div>
          <p className="text-[10px] text-slate-400 mt-1">ER (Canada)</p>
          <div className="mt-3 h-2.5 bg-neutral-100 rounded-full overflow-hidden">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-emerald-300 to-emerald-600"
              animate={{ width: `${Math.max(0, (preset.specs.er + 30) / (erMax + 30)) * 100}%` }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            />
          </div>
          <p className="text-[10px] text-slate-400 mt-1.5">Higher = Better</p>
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
          className="max-w-2xl mx-auto bg-neutral-50 border border-neutral-200 rounded-xl p-6 text-center"
        >
          <p className="text-sm font-semibold text-charcoal-900 mb-1">{preset.label}</p>
          <p className="text-sm text-slate-500 leading-relaxed">{preset.description}</p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

/* ────────────── Inline CTA ────────────── */

function InlineCTA() {
  return (
    <div className="bg-charcoal-900 rounded-xl p-8 sm:p-10 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-brand-600/10 rounded-bl-[80px]" />
      <div className="relative z-10 flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
        <div className="flex-1 text-center sm:text-left">
          <h3 className="text-xl sm:text-2xl font-display font-extrabold text-white mb-2">
            Get a Free Window Estimate
          </h3>
          <p className="text-sm text-white/50 leading-relaxed">
            Not sure which glass configuration is right for your home? Our team will assess your windows, recommend the best options for each orientation, and provide a detailed quote.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 shrink-0">
          <a
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold bg-brand-600 text-white rounded-lg hover:bg-brand-700 transition-all shadow-md"
          >
            Get Your Free Quote <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href={`tel:${siteConfig.phoneRaw}`}
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white/70 border border-white/20 rounded-lg hover:text-white hover:border-white/40 transition-all"
          >
            <Phone className="w-4 h-4" />
            {siteConfig.phone}
          </a>
        </div>
      </div>
    </div>
  );
}

/* ────────────── Main Component ────────────── */

const sections: { id: Section; label: string; icon: typeof Route }[] = [
  { id: 'tour', label: 'Guided Tour', icon: Route },
  { id: 'compare', label: 'Compare Glass', icon: BarChart3 },
];

export function WindowDemo() {
  const [activeSection, setActiveSection] = useState<Section>('tour');

  return (
    <div className="space-y-16">
      {/* Section Tabs */}
      <div className="flex items-center justify-center gap-1 p-1.5 bg-neutral-100 rounded-xl max-w-sm mx-auto">
        {sections.map((sec) => {
          const Icon = sec.icon;
          return (
            <button
              key={sec.id}
              onClick={() => setActiveSection(sec.id)}
              className={cn(
                'flex-1 flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold rounded-lg transition-all duration-200',
                activeSection === sec.id
                  ? 'bg-white text-charcoal-900 shadow-sm'
                  : 'text-slate-500 hover:text-charcoal-900'
              )}
            >
              <Icon className="w-4 h-4" />
              {sec.label}
            </button>
          );
        })}
      </div>

      {/* Section Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeSection}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
        >
          {activeSection === 'tour' && <TourSection />}
          {activeSection === 'compare' && <CompareSection />}
        </motion.div>
      </AnimatePresence>

      {/* CTA */}
      <InlineCTA />
    </div>
  );
}
