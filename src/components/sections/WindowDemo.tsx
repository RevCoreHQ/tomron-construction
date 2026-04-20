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

/* ────────────── Front-Facing Window (Realistic) ────────────── */

function WindowFrontView({ activeId }: { activeId: string | null }) {
  const isActive = (id: string) => activeId === id;
  const glassActive = isActive('outer-pane') || isActive('inner-pane') || isActive('low-e-coating') || isActive('argon-gas');

  return (
    <svg viewBox="0 0 380 480" className="w-full h-auto max-w-[320px] mx-auto" role="img" aria-label="Front view of a vinyl double-hung window installed in a home exterior wall">
      <defs>
        <linearGradient id="skyReflection" x1="0" y1="0" x2="0.3" y2="1">
          <stop offset="0%" stopColor="#7dd3fc" stopOpacity="0.5" />
          <stop offset="40%" stopColor="#bae6fd" stopOpacity="0.35" />
          <stop offset="70%" stopColor="#e0f2fe" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#f0f9ff" stopOpacity="0.2" />
        </linearGradient>
        <linearGradient id="frameDepth" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#f1f0ee" />
        </linearGradient>
        <linearGradient id="sillDepth" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="60%" stopColor="#f5f5f4" />
          <stop offset="100%" stopColor="#e7e5e4" />
        </linearGradient>
        <filter id="frameShadow">
          <feDropShadow dx="0" dy="2" stdDeviation="4" floodOpacity="0.12" />
        </filter>
        <filter id="windowGlow">
          <feGaussianBlur stdDeviation="6" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>

      {/* ── Exterior wall with lap siding ── */}
      <rect width="380" height="480" fill="#d6cfc6" rx="6" />
      {Array.from({ length: 19 }, (_, i) => (
        <g key={i}>
          <line x1="0" y1={i * 25 + 12} x2="380" y2={i * 25 + 12} stroke="#cac3b9" strokeWidth="0.8" />
          <line x1="0" y1={i * 25 + 13} x2="380" y2={i * 25 + 13} stroke="#ddd7ce" strokeWidth="0.4" />
        </g>
      ))}

      {/* ── Window shadow on wall ── */}
      <rect x="48" y="52" width="284" height="368" rx="2" fill="rgba(0,0,0,0.08)" />

      {/* ── Exterior casing (brick mould) ── */}
      <rect x="42" y="44" width="296" height="372" rx="3" fill="#e8e8e6" stroke="#c8c6c2" strokeWidth="1" />

      {/* ── Main frame ── */}
      <g filter="url(#frameShadow)">
        <rect
          x="50" y="52" width="280" height="356" rx="2"
          fill="url(#frameDepth)"
          stroke={isActive('frame') ? '#2563eb' : '#d4d4d8'}
          strokeWidth={isActive('frame') ? 3 : 1.5}
        />
      </g>

      {/* Frame glow when active */}
      {isActive('frame') && (
        <rect x="46" y="48" width="288" height="364" rx="4" fill="none" stroke="#3b82f6" strokeWidth="2" opacity="0.35" filter="url(#windowGlow)" />
      )}

      {/* ── Upper sash ── */}
      <rect x="58" y="60" width="264" height="162" rx="1.5" fill="url(#frameDepth)" stroke="#d4d4d8" strokeWidth="1" />

      {/* Upper glass */}
      <rect
        x="68" y="70" width="244" height="142" rx="1"
        fill="url(#skyReflection)"
        stroke={glassActive ? '#2563eb' : '#a5d8ff'}
        strokeWidth={glassActive ? 2 : 0.5}
      />
      {/* Glass highlights */}
      <polygon points="68,70 180,70 68,160" fill="white" opacity="0.1" />
      <rect x="280" y="80" width="1.5" height="120" rx="0.75" fill="white" opacity="0.15" />

      {/* Low-E shimmer */}
      {isActive('low-e-coating') && (
        <rect x="68" y="70" width="244" height="142" rx="1" fill="#fbbf24" opacity="0.12">
          <animate attributeName="opacity" values="0.06;0.15;0.06" dur="2.5s" repeatCount="indefinite" />
        </rect>
      )}

      {/* Argon gas visualization */}
      {isActive('argon-gas') && (
        <g opacity="0.45">
          <circle cx="140" cy="120" r="3" fill="#60a5fa"><animate attributeName="cy" values="120;130;120" dur="3s" repeatCount="indefinite" /></circle>
          <circle cx="200" cy="150" r="2.5" fill="#60a5fa"><animate attributeName="cy" values="150;142;150" dur="2.5s" repeatCount="indefinite" /></circle>
          <circle cx="260" cy="105" r="2" fill="#60a5fa"><animate attributeName="cy" values="105;112;105" dur="3.2s" repeatCount="indefinite" /></circle>
          <text x="190" y="118" textAnchor="middle" fill="#2563eb" fontSize="11" fontWeight="700" opacity="0.7">Ar</text>
        </g>
      )}

      {/* ── Meeting rail ── */}
      <rect x="58" y="222" width="264" height="14" rx="1" fill="url(#frameDepth)" stroke="#d4d4d8" strokeWidth="1" />
      {/* Lock hardware */}
      <rect x="178" y="219" width="24" height="8" rx="3" fill="#a1a1aa" stroke="#8a8a8a" strokeWidth="0.5" />
      <circle cx="190" cy="223" r="2.5" fill="#78716c" />

      {/* ── Lower sash ── */}
      <rect x="58" y="236" width="264" height="164" rx="1.5" fill="url(#frameDepth)" stroke="#d4d4d8" strokeWidth="1" />

      {/* Lower glass */}
      <rect
        x="68" y="246" width="244" height="144" rx="1"
        fill="url(#skyReflection)"
        stroke={glassActive ? '#2563eb' : '#a5d8ff'}
        strokeWidth={glassActive ? 2 : 0.5}
      />
      <polygon points="68,246 160,246 68,330" fill="white" opacity="0.08" />
      <rect x="280" y="256" width="1.5" height="120" rx="0.75" fill="white" opacity="0.12" />

      {/* Low-E shimmer lower */}
      {isActive('low-e-coating') && (
        <rect x="68" y="246" width="244" height="144" rx="1" fill="#fbbf24" opacity="0.12">
          <animate attributeName="opacity" values="0.06;0.15;0.06" dur="2.5s" repeatCount="indefinite" />
        </rect>
      )}

      {/* Argon lower */}
      {isActive('argon-gas') && (
        <g opacity="0.45">
          <circle cx="150" cy="300" r="2.5" fill="#60a5fa"><animate attributeName="cy" values="300;308;300" dur="2.8s" repeatCount="indefinite" /></circle>
          <circle cx="230" cy="340" r="3" fill="#60a5fa"><animate attributeName="cy" values="340;332;340" dur="3.5s" repeatCount="indefinite" /></circle>
          <text x="190" y="320" textAnchor="middle" fill="#2563eb" fontSize="11" fontWeight="700" opacity="0.7">Ar</text>
        </g>
      )}

      {/* Weatherstrip indicators */}
      {isActive('weatherstrip') && (
        <g>
          <rect x="66" y="68" width="248" height="146" rx="2" fill="none" stroke="#22c55e" strokeWidth="2.5" strokeDasharray="8 4" opacity="0.7" />
          <rect x="66" y="244" width="248" height="148" rx="2" fill="none" stroke="#22c55e" strokeWidth="2.5" strokeDasharray="8 4" opacity="0.7" />
        </g>
      )}

      {/* Spacer bar indicators */}
      {isActive('spacer-bar') && (
        <g>
          <rect x="68" y="69" width="244" height="3" fill="#1e293b" opacity="0.9" />
          <rect x="68" y="209" width="244" height="3" fill="#1e293b" opacity="0.9" />
          <rect x="68" y="246" width="244" height="3" fill="#1e293b" opacity="0.9" />
          <rect x="68" y="387" width="244" height="3" fill="#1e293b" opacity="0.9" />
        </g>
      )}

      {/* ── Window sill ── */}
      <rect x="36" y="408" width="308" height="20" rx="2" fill="url(#sillDepth)" stroke="#d4d4d8" strokeWidth="1" />
      {/* Sill nose / drip edge */}
      <rect x="34" y="426" width="312" height="10" rx="3" fill="#f5f5f4" stroke="#d4d4d8" strokeWidth="0.5" />
      {/* Sill shadow */}
      <ellipse cx="190" cy="442" rx="140" ry="4" fill="rgba(0,0,0,0.04)" />

      {/* ── Decorative elements ── */}
      {/* Small plant shadow on sill for realism */}
      <rect x="125" y="400" width="30" height="8" rx="2" fill="rgba(0,0,0,0.03)" />
    </svg>
  );
}

/* ────────────── Cross-Section Strip (Educational Layer Diagram) ────────────── */

function CrossSectionStrip({ activeId }: { activeId: string | null }) {
  const isActive = (id: string) => activeId === id;

  const layers = [
    { id: 'frame', label: 'Frame', width: 44, color: '#f5f5f4', activeColor: '#dbeafe', border: '#d1d5db' },
    { id: 'weatherstrip', label: 'Seal', width: 10, color: '#6b7280', activeColor: '#4ade80', border: '#4b5563' },
    { id: 'outer-pane', label: 'Outer Glass', width: 12, color: '#93c5fd', activeColor: '#60a5fa', border: '#3b82f6' },
    { id: 'low-e-coating', label: 'Low-E', width: 5, color: '#fcd34d', activeColor: '#f59e0b', border: '#d97706' },
    { id: 'argon-gas', label: 'Argon Gas Fill', width: 70, color: '#eff6ff', activeColor: '#dbeafe', border: '#93c5fd' },
    { id: 'inner-pane', label: 'Inner Glass', width: 12, color: '#93c5fd', activeColor: '#60a5fa', border: '#3b82f6' },
    { id: 'weatherstrip', label: 'Seal', width: 10, color: '#6b7280', activeColor: '#4ade80', border: '#4b5563' },
    { id: 'frame', label: 'Frame', width: 44, color: '#f5f5f4', activeColor: '#dbeafe', border: '#d1d5db' },
  ];

  let x = 0;
  const totalWidth = layers.reduce((sum, l) => sum + l.width, 0);

  return (
    <div className="mt-5">
      {/* Labels */}
      <div className="flex items-center justify-between mb-1.5 px-1">
        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Outside</span>
        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Inside</span>
      </div>

      {/* Layer bar */}
      <div className="relative rounded-lg overflow-hidden border border-neutral-200 shadow-sm" style={{ height: '56px' }}>
        <svg viewBox={`0 0 ${totalWidth} 56`} className="w-full h-full" preserveAspectRatio="none">
          {layers.map((layer, i) => {
            const xPos = x;
            x += layer.width;
            const active = isActive(layer.id);
            return (
              <g key={`${layer.id}-${i}`}>
                <rect
                  x={xPos} y="0" width={layer.width} height="56"
                  fill={active ? layer.activeColor : layer.color}
                  stroke={active ? layer.border : '#e5e5e5'}
                  strokeWidth={active ? 2 : 0.5}
                />
                {active && (
                  <rect x={xPos} y="0" width={layer.width} height="56" fill={layer.border} opacity="0.15">
                    <animate attributeName="opacity" values="0.1;0.2;0.1" dur="1.5s" repeatCount="indefinite" />
                  </rect>
                )}
              </g>
            );
          })}
          {/* Chamber lines in frame sections */}
          <line x1="11" y1="0" x2="11" y2="56" stroke="#d6d3d1" strokeWidth="0.5" />
          <line x1="22" y1="0" x2="22" y2="56" stroke="#d6d3d1" strokeWidth="0.5" />
          <line x1="33" y1="0" x2="33" y2="56" stroke="#d6d3d1" strokeWidth="0.5" />
          <line x1="174" y1="0" x2="174" y2="56" stroke="#d6d3d1" strokeWidth="0.5" />
          <line x1="185" y1="0" x2="185" y2="56" stroke="#d6d3d1" strokeWidth="0.5" />
          <line x1="196" y1="0" x2="196" y2="56" stroke="#d6d3d1" strokeWidth="0.5" />
        </svg>
      </div>

      {/* Bottom labels */}
      <div className="flex mt-2" style={{ fontSize: '9px' }}>
        {(() => {
          let pos = 0;
          return layers.map((layer, i) => {
            const left = pos;
            pos += layer.width;
            const active = isActive(layer.id);
            // Skip duplicate labels (second weatherstrip and frame)
            if (i === 6 || i === 7) return null;
            return (
              <span
                key={`label-${i}`}
                className={cn(
                  'text-center leading-tight',
                  active ? 'font-bold text-brand-700' : 'text-slate-400'
                )}
                style={{ width: `${(layer.width / totalWidth) * 100}%` }}
              >
                {layer.label}
              </span>
            );
          });
        })()}
      </div>

      {/* Caption */}
      <p className="text-[10px] text-center text-slate-400 mt-3">
        Cross-section — the layers inside your window from outside to inside
      </p>
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
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
      {/* Illustration side */}
      <div className="lg:sticky lg:top-24">
        <WindowFrontView activeId={currentStep.componentId} />
        <CrossSectionStrip activeId={currentStep.componentId} />
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
            className="min-h-[200px]"
          >
            <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-charcoal-900 mb-4">
              {currentStep.title}
            </h3>
            <p className="text-base text-slate-600 leading-relaxed mb-5">
              {currentStep.explanation}
            </p>
            {currentStep.stat && (
              <div className="inline-flex items-center gap-3 bg-brand-50 border border-brand-100 rounded-lg px-5 py-3">
                <div className="w-2.5 h-2.5 rounded-full bg-brand-600 shrink-0" />
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
