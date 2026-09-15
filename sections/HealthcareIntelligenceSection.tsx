import React, { useRef, useLayoutEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { T } from '../theme';
import { differentiationData } from '@/data';
import { useReducedMotion } from '../hooks';

gsap.registerPlugin(ScrollTrigger);

// ============================================================================
// VISUAL 01: Healthcare AI Interaction Flow (Question -> Understand -> Guidance -> Next Step)
// ============================================================================
const HealthcareAiVisual: React.FC<{ isHovered: boolean }> = ({ isHovered }) => {
  const steps = [
    {
      phase: 'QUESTION',
      label: 'Person shares initial health query or concern',
      detail: '"Feeling persistent fatigue and eye strain during screen work"',
      tag: 'HUMAN INPUT',
    },
    {
      phase: 'UNDERSTAND',
      label: 'AI contextualizes with holistic health & lifestyle markers',
      detail: 'Evaluates sleep patterns, daily screen exposure, and dosha balance',
      tag: 'CONTEXT ANALYSIS',
    },
    {
      phase: 'GUIDANCE',
      label: 'Clear, structured orientation without alarming jargon',
      detail: 'Non-diagnostic preliminary insights and restorative recommendations',
      tag: 'ORIENTATION',
    },
    {
      phase: 'NEXT STEP',
      label: 'Actionable progression path adapted to need',
      detail: 'Option to initiate guided eye check, dosha survey, or doctor consult',
      tag: 'CONTINUITY',
    },
  ];

  return (
    <div
      className="w-full rounded-xl border transition-all duration-500 overflow-hidden shadow-sm"
      style={{
        backgroundColor: isHovered ? '#FFFFFF' : T.cream,
        borderColor: isHovered ? 'rgba(140, 107, 62, 0.3)' : 'rgba(26, 24, 20, 0.08)',
        boxShadow: isHovered ? '0 12px 32px rgba(140, 107, 62, 0.08)' : T.shadows.sm,
      }}
    >
      {/* Header */}
      <div
        className="px-4 py-3 border-b flex items-center justify-between"
        style={{
          borderColor: isHovered ? 'rgba(140, 107, 62, 0.15)' : 'rgba(26, 24, 20, 0.06)',
          backgroundColor: isHovered ? 'rgba(140, 107, 62, 0.03)' : 'transparent',
        }}
      >
        <div className="flex items-center gap-2">
          <span
            className={`w-2 h-2 rounded-full transition-transform duration-300 ${
              isHovered ? 'scale-125' : 'scale-100'
            }`}
            style={{ backgroundColor: T.accent }}
          />
          <span className="text-[10px] font-mono tracking-widest uppercase" style={{ color: T.accent }}>
            CONVERSATIONAL HEALTH ENGINE
          </span>
        </div>
        <span className="text-[9px] font-mono tracking-wider text-[#8A8378] uppercase">
          PERSON-CENTERED
        </span>
      </div>

      {/* Progression Flow */}
      <div className="p-5 sm:p-6 space-y-2.5">
        {steps.map((step, idx) => (
          <div
            key={step.phase}
            className="p-3 rounded-lg border transition-all duration-300"
            style={{
              backgroundColor: isHovered && idx === 1 ? 'rgba(140, 107, 62, 0.05)' : '#FFFFFF',
              borderColor: isHovered && idx === 1 ? T.accent : 'rgba(26, 24, 20, 0.07)',
            }}
          >
            <div className="flex items-center justify-between mb-1">
              <div className="flex items-center gap-2">
                <span
                  className="text-[9px] font-mono font-bold px-1.5 py-0.5 rounded"
                  style={{
                    backgroundColor: 'rgba(140, 107, 62, 0.1)',
                    color: T.accent,
                  }}
                >
                  0{idx + 1} // {step.phase}
                </span>
                <span className="text-xs font-mono font-semibold tracking-wider text-[#1A1814] uppercase">
                  {step.label}
                </span>
              </div>
              <span className="hidden sm:inline-block text-[9px] font-mono text-[#8A8378] uppercase">
                {step.tag}
              </span>
            </div>
            <p className="text-[11px] text-[#8A8378] font-light leading-relaxed pl-1">
              {step.detail}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

// ============================================================================
// VISUAL 02: Health Products Ecosystem (Connected Modules & Real Tools)
// ============================================================================
const HealthProductsVisual: React.FC<{ isHovered: boolean }> = ({ isHovered }) => {
  const products = [
    {
      title: 'AI Health Assistant',
      role: 'Everyday conversational interface & health guidance',
      status: 'AVAILABLE',
      statusColor: '#5C6E52',
    },
    {
      title: 'Guided Health Tools',
      role: 'Camera-based screeners & standardized data capture',
      status: 'IN DEVELOPMENT',
      statusColor: '#B8935A',
    },
    {
      title: 'Specialized Systems',
      role: 'Targeted assessment modules for specific care needs',
      status: 'RESEARCH',
      statusColor: '#8A8378',
    },
  ];

  return (
    <div
      className="w-full rounded-xl border transition-all duration-500 overflow-hidden shadow-sm"
      style={{
        backgroundColor: isHovered ? '#FFFFFF' : T.cream,
        borderColor: isHovered ? 'rgba(140, 107, 62, 0.3)' : 'rgba(26, 24, 20, 0.08)',
        boxShadow: isHovered ? '0 12px 32px rgba(140, 107, 62, 0.08)' : T.shadows.sm,
      }}
    >
      {/* Header */}
      <div
        className="px-4 py-3 border-b flex items-center justify-between"
        style={{
          borderColor: isHovered ? 'rgba(140, 107, 62, 0.15)' : 'rgba(26, 24, 20, 0.06)',
          backgroundColor: isHovered ? 'rgba(140, 107, 62, 0.03)' : 'transparent',
        }}
      >
        <div className="flex items-center gap-2">
          <span
            className={`w-2 h-2 rounded-full transition-transform duration-300 ${
              isHovered ? 'scale-125' : 'scale-100'
            }`}
            style={{ backgroundColor: T.accent }}
          />
          <span className="text-[10px] font-mono tracking-widest uppercase" style={{ color: T.accent }}>
            PRODUCT ECOSYSTEM
          </span>
        </div>
        <span className="text-[9px] font-mono tracking-wider text-[#8A8378] uppercase">
          CONNECTED SURFACES
        </span>
      </div>

      <div className="p-5 sm:p-6 space-y-4">
        {/* Core Hub Badge */}
        <div
          className="p-3 rounded-lg border text-center transition-all duration-300"
          style={{
            backgroundColor: '#FFFFFF',
            borderColor: isHovered ? T.accent : 'rgba(26, 24, 20, 0.1)',
          }}
        >
          <span className="text-[9px] font-mono tracking-[0.2em] text-[#8C6B3E] uppercase block mb-0.5">
            SPANDAVIDYA PLATFORM
          </span>
          <span className="text-xs font-mono font-bold tracking-wider text-[#1A1814] uppercase">
            UNIFIED DIGITAL HEALTHCORE
          </span>
        </div>

        {/* 3 Interconnected Product Surfaces */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {products.map((p) => (
            <div
              key={p.title}
              className="p-3 rounded-lg border flex flex-col justify-between transition-all duration-300"
              style={{
                backgroundColor: '#FFFFFF',
                borderColor: 'rgba(26, 24, 20, 0.07)',
              }}
            >
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <span
                    className="text-[8px] font-mono px-1.5 py-0.2 rounded font-medium"
                    style={{
                      backgroundColor: `${p.statusColor}15`,
                      color: p.statusColor,
                      border: `1px solid ${p.statusColor}30`,
                    }}
                  >
                    {p.status}
                  </span>
                </div>
                <h4 className="text-xs font-mono font-bold tracking-wide text-[#1A1814] uppercase mb-1">
                  {p.title}
                </h4>
                <p className="text-[10px] text-[#8A8378] leading-tight font-light">
                  {p.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// ============================================================================
// VISUAL 03: Research & Development Pipeline (Research -> Prototype -> Validate -> Build -> Product)
// ============================================================================
const ResearchDevelopmentVisual: React.FC<{ isHovered: boolean }> = ({ isHovered }) => {
  const pipeline = [
    { step: '01', phase: 'RESEARCH', desc: 'Physiological literature & algorithmic formulation' },
    { step: '02', phase: 'PROTOTYPE', desc: 'Exploratory model testing & synthetic benchmarks' },
    { step: '03', phase: 'VALIDATE', desc: 'Sensor calibration & empirical consistency tests' },
    { step: '04', phase: 'BUILD', desc: 'Resilient backend architecture & client applications' },
    { step: '05', phase: 'PRODUCT', desc: 'Accessible, human-friendly health experience' },
  ];

  const domains = [
    'AI', 'COMPUTER VISION', 'SIGNAL ANALYSIS', 'HEALTHCARE', 'AYURVEDA', 'SOFTWARE SYSTEMS'
  ];

  return (
    <div
      className="w-full rounded-xl border transition-all duration-500 overflow-hidden shadow-sm"
      style={{
        backgroundColor: isHovered ? '#FFFFFF' : T.cream,
        borderColor: isHovered ? 'rgba(140, 107, 62, 0.3)' : 'rgba(26, 24, 20, 0.08)',
        boxShadow: isHovered ? '0 12px 32px rgba(140, 107, 62, 0.08)' : T.shadows.sm,
      }}
    >
      {/* Header */}
      <div
        className="px-4 py-3 border-b flex items-center justify-between"
        style={{
          borderColor: isHovered ? 'rgba(140, 107, 62, 0.15)' : 'rgba(26, 24, 20, 0.06)',
          backgroundColor: isHovered ? 'rgba(140, 107, 62, 0.03)' : 'transparent',
        }}
      >
        <div className="flex items-center gap-2">
          <span
            className={`w-2 h-2 rounded-full transition-transform duration-300 ${
              isHovered ? 'scale-125' : 'scale-100'
            }`}
            style={{ backgroundColor: T.accent }}
          />
          <span className="text-[10px] font-mono tracking-widest uppercase" style={{ color: T.accent }}>
            R&D TRANSLATIONAL PIPELINE
          </span>
        </div>
        <span className="text-[9px] font-mono tracking-wider text-[#8A8378] uppercase">
          LAB TO REAL WORLD
        </span>
      </div>

      <div className="p-5 sm:p-6 space-y-4">
        {/* Multidisciplinary Domain Matrix */}
        <div className="flex flex-wrap gap-1.5 pb-3 border-b border-black/[0.05]">
          {domains.map((dom) => (
            <span
              key={dom}
              className="text-[9px] font-mono px-2 py-0.5 rounded border uppercase"
              style={{
                backgroundColor: 'rgba(140, 107, 62, 0.04)',
                borderColor: 'rgba(140, 107, 62, 0.15)',
                color: T.accent,
              }}
            >
              {dom}
            </span>
          ))}
        </div>

        {/* 5-Step Pipeline Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-5 gap-2">
          {pipeline.map((item, idx) => (
            <div
              key={item.phase}
              className="p-2.5 rounded-lg border text-left transition-all duration-300"
              style={{
                backgroundColor: isHovered && idx === 2 ? 'rgba(140, 107, 62, 0.08)' : '#FFFFFF',
                borderColor: isHovered && idx === 2 ? T.accent : 'rgba(26, 24, 20, 0.07)',
              }}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-[9px] font-mono text-[#8A8378]">{item.step}</span>
                {idx < pipeline.length - 1 && (
                  <span className="hidden sm:inline text-[9px] font-mono text-[#8C6B3E]">→</span>
                )}
              </div>
              <p className="text-[10px] font-mono font-bold tracking-wider text-[#1A1814] uppercase">
                {item.phase}
              </p>
              <p className="text-[9px] text-[#8A8378] leading-tight mt-0.5 font-light">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// ============================================================================
// VISUAL 04: Care Across Life (Child -> Young Adult -> Adult -> Family -> Older Adult)
// ============================================================================
const CareAcrossLifeVisual: React.FC<{ isHovered: boolean }> = ({ isHovered }) => {
  const lifecycle = [
    {
      stage: 'CHILD',
      focus: 'Visual ergonomics & developmental habit tracking',
      status: 'EXPLORATION',
    },
    {
      stage: 'YOUNG ADULT',
      focus: 'Digital eye fatigue, circadian rhythms & stress signals',
      status: 'EXPLORATION',
    },
    {
      stage: 'ADULT',
      focus: 'Metabolic balance, Ayurvedic constitution & preventive checks',
      status: 'IN DEVELOPMENT',
    },
    {
      stage: 'FAMILY',
      focus: 'Shared health records, caregiver triage & unified guidance',
      status: 'EXPLORATION',
    },
    {
      stage: 'OLDER ADULT',
      focus: 'Lens opacity screening, sensory wellness & mobility assistance',
      status: 'IN DEVELOPMENT',
    },
  ];

  return (
    <div
      className="w-full rounded-xl border transition-all duration-500 overflow-hidden shadow-sm"
      style={{
        backgroundColor: isHovered ? '#FFFFFF' : T.cream,
        borderColor: isHovered ? 'rgba(140, 107, 62, 0.3)' : 'rgba(26, 24, 20, 0.08)',
        boxShadow: isHovered ? '0 12px 32px rgba(140, 107, 62, 0.08)' : T.shadows.sm,
      }}
    >
      {/* Header */}
      <div
        className="px-4 py-3 border-b flex items-center justify-between"
        style={{
          borderColor: isHovered ? 'rgba(140, 107, 62, 0.15)' : 'rgba(26, 24, 20, 0.06)',
          backgroundColor: isHovered ? 'rgba(140, 107, 62, 0.03)' : 'transparent',
        }}
      >
        <div className="flex items-center gap-2">
          <span
            className={`w-2 h-2 rounded-full transition-transform duration-300 ${
              isHovered ? 'scale-125' : 'scale-100'
            }`}
            style={{ backgroundColor: T.accent }}
          />
          <span className="text-[10px] font-mono tracking-widest uppercase" style={{ color: T.accent }}>
            LIFECYCLE CONTINUUM
          </span>
        </div>
        <span className="text-[9px] font-mono tracking-wider text-[#8A8378] uppercase">
          EXPLORING HEALTHCARE ACROSS LIFE
        </span>
      </div>

      <div className="p-5 sm:p-6 space-y-3">
        {/* Horizontal Lifecycle Chain */}
        <div className="grid grid-cols-1 sm:grid-cols-5 gap-2.5">
          {lifecycle.map((item, idx) => (
            <div
              key={item.stage}
              className="p-3 rounded-lg border text-left flex flex-col justify-between transition-all duration-300"
              style={{
                backgroundColor: '#FFFFFF',
                borderColor: isHovered && (idx === 2 || idx === 4) ? T.accent : 'rgba(26, 24, 20, 0.07)',
              }}
            >
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[8px] font-mono text-[#8A8378]">0{idx + 1}</span>
                  <span
                    className="text-[8px] font-mono px-1 py-0.2 rounded font-medium"
                    style={{
                      backgroundColor: item.status === 'IN DEVELOPMENT' ? 'rgba(184, 147, 90, 0.12)' : 'rgba(138, 131, 120, 0.1)',
                      color: item.status === 'IN DEVELOPMENT' ? '#8C6B3E' : '#8A8378',
                    }}
                  >
                    {item.status}
                  </span>
                </div>
                <h4 className="text-xs font-mono font-bold tracking-wider text-[#1A1814] uppercase mb-1">
                  {item.stage}
                </h4>
                <p className="text-[10px] text-[#8A8378] leading-tight font-light">
                  {item.focus}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// ============================================================================
// VISUAL 05: Specialized AI Systems (Cataract as One Example + Full Horizons)
// ============================================================================
const SpecializedSystemsVisual: React.FC<{ isHovered: boolean }> = ({ isHovered }) => {
  const systems = [
    { title: 'AI Health Assistant', stage: 'AVAILABLE', active: true },
    { title: 'AI-Assisted Eye Assessment', stage: 'CURRENT EXAMPLE', active: true },
    { title: 'Ayurvedic Pulse Intelligence', stage: 'IN DEVELOPMENT', active: false },
    { title: 'Digital Dosha Synthesis', stage: 'IN DEVELOPMENT', active: false },
    { title: 'Future AI Diagnostics', stage: 'RESEARCH EXPLORATION', active: false },
  ];

  return (
    <div
      className="w-full rounded-xl border transition-all duration-500 overflow-hidden shadow-sm"
      style={{
        backgroundColor: isHovered ? '#FFFFFF' : T.cream,
        borderColor: isHovered ? 'rgba(140, 107, 62, 0.3)' : 'rgba(26, 24, 20, 0.08)',
        boxShadow: isHovered ? '0 12px 32px rgba(140, 107, 62, 0.08)' : T.shadows.sm,
      }}
    >
      {/* Header */}
      <div
        className="px-4 py-3 border-b flex items-center justify-between"
        style={{
          borderColor: isHovered ? 'rgba(140, 107, 62, 0.15)' : 'rgba(26, 24, 20, 0.06)',
          backgroundColor: isHovered ? 'rgba(140, 107, 62, 0.03)' : 'transparent',
        }}
      >
        <div className="flex items-center gap-2">
          <span
            className={`w-2 h-2 rounded-full transition-transform duration-300 ${
              isHovered ? 'scale-125' : 'scale-100'
            }`}
            style={{ backgroundColor: T.accent }}
          />
          <span className="text-[10px] font-mono tracking-widest uppercase" style={{ color: T.accent }}>
            SPECIALIZED HEALTH SYSTEMS
          </span>
        </div>
        <span className="text-[9px] font-mono tracking-wider text-[#8A8378] uppercase">
          FOCUSED CLINICAL DOMAINS
        </span>
      </div>

      <div className="p-5 sm:p-6 grid grid-cols-1 sm:grid-cols-12 gap-5">
        {/* Left: Concrete Example - Cataract Assessment */}
        <div
          className="sm:col-span-6 p-4 rounded-lg border flex flex-col justify-between transition-all duration-300"
          style={{
            backgroundColor: '#FFFFFF',
            borderColor: isHovered ? T.accent : 'rgba(140, 107, 62, 0.25)',
          }}
        >
          <div>
            <div className="flex items-center justify-between mb-2">
              <span
                className="text-[9px] font-mono font-bold tracking-wider px-2 py-0.5 rounded"
                style={{ backgroundColor: 'rgba(92, 110, 82, 0.12)', color: '#5C6E52' }}
              >
                CURRENT EXAMPLE
              </span>
              <span className="text-[9px] font-mono text-[#8A8378]">CV MODEL</span>
            </div>
            <h4 className="text-sm font-mono font-bold tracking-wider text-[#1A1814] uppercase mb-1.5">
              AI-Assisted Eye Assessment
            </h4>
            <p className="text-xs text-[#8A8378] leading-relaxed font-light mb-3">
              An image-based assessment workflow using computer vision and machine learning to analyze eye images for lens opacity patterns.
            </p>
          </div>
          <div className="pt-2 border-t border-black/[0.04] flex items-center justify-between text-[10px] font-mono text-[#8C6B3E]">
            <span>ONE APPLICATION OF THE PLATFORM</span>
            <span>→</span>
          </div>
        </div>

        {/* Right: Research & Future Exploration Horizons */}
        <div className="sm:col-span-6 space-y-2">
          <span className="text-[9px] font-mono tracking-wider text-[#8A8378] uppercase block mb-1">
            ACTIVE RESEARCH & DEVELOPMENT HORIZONS
          </span>
          {systems.map((s) => (
            <div
              key={s.title}
              className="p-2.5 rounded border flex items-center justify-between transition-colors duration-200"
              style={{
                backgroundColor: '#FFFFFF',
                borderColor: s.active ? 'rgba(140, 107, 62, 0.2)' : 'rgba(26, 24, 20, 0.06)',
              }}
            >
              <span className="text-xs font-mono text-[#1A1814]">
                {s.title}
              </span>
              <span
                className="text-[8px] font-mono px-1.5 py-0.5 rounded font-medium"
                style={{
                  backgroundColor: s.active ? 'rgba(92, 110, 82, 0.1)' : 'rgba(138, 131, 120, 0.08)',
                  color: s.active ? '#5C6E52' : '#8A8378',
                }}
              >
                {s.stage}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// ============================================================================
// MAIN COMPONENT: SpandaVidya Healthcare Platform & Research Studio
// ============================================================================
export const HealthcareIntelligenceSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const headerRef = useRef<HTMLDivElement | null>(null);
  const rowsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [hoveredRowIndex, setHoveredRowIndex] = useState<number | null>(null);
  const reducedMotion = useReducedMotion();

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section || reducedMotion) return;

    const ctx = gsap.context(() => {
      // Header animation
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current.children,
          { y: 20, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.75,
            ease: 'power3.out',
            stagger: 0.1,
            scrollTrigger: {
              trigger: section,
              start: 'top 80%',
              once: true,
            },
          }
        );
      }

      // Editorial row animations
      rowsRef.current.forEach((row) => {
        if (!row) return;
        gsap.fromTo(
          row,
          { y: 20, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.75,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: row,
              start: 'top 86%',
              once: true,
            },
          }
        );
      });
    }, section);

    return () => ctx.revert();
  }, [reducedMotion]);

  const renderVisual = (areaId: string, isHovered: boolean) => {
    switch (areaId) {
      case 'healthcare-ai':
        return <HealthcareAiVisual isHovered={isHovered} />;
      case 'health-products':
        return <HealthProductsVisual isHovered={isHovered} />;
      case 'research-development':
        return <ResearchDevelopmentVisual isHovered={isHovered} />;
      case 'across-life':
        return <CareAcrossLifeVisual isHovered={isHovered} />;
      case 'specialized-systems':
        return <SpecializedSystemsVisual isHovered={isHovered} />;
      default:
        return null;
    }
  };

  const handleCtaClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const approachSection = document.getElementById('approach');
    if (approachSection) {
      approachSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.hash = 'approach';
    }
  };

  const scrollToArea = (index: number) => {
    const targetRow = rowsRef.current[index];
    if (targetRow) {
      targetRow.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <section
      ref={sectionRef}
      id="differentiation"
      aria-label="What We Are Building — SpandaVidya Healthcare Platform"
      className="py-24 sm:py-28 md:py-36 px-6 md:px-[8vw] relative bg-transparent overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">

        {/* ============================================================ */}
        {/* SECTION HEADER: Real Healthcare Perspective                  */}
        {/* ============================================================ */}
        <div ref={headerRef} className="mb-20 sm:mb-24 md:mb-28">
          {/* Eyebrow */}
          <div className="flex items-center gap-2.5 mb-5">
            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: T.accent }} />
            <span
              className="text-xs font-mono font-semibold uppercase tracking-[0.2em]"
              style={{ color: T.accent }}
            >
              {differentiationData.eyebrow}
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            <div className="lg:col-span-7">
              <h2
                className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal leading-[1.12] tracking-tight"
                style={{ color: T.charcoal }}
              >
                Healthcare is not
                <br />
                <span className="italic font-light" style={{ color: T.accent }}>
                  one problem.
                </span>
              </h2>
            </div>
            <div className="lg:col-span-5 pt-2">
              <p className="text-base sm:text-lg leading-relaxed font-light" style={{ color: T.muted }}>
                {differentiationData.supportingText}
              </p>
            </div>
          </div>
          <div className="mt-20 sm:mt-24 md:mt-28 text-center max-w-3xl mx-auto">
          {/* Primary Statement */}
          <h4 className="font-serif text-2xl sm:text-3xl md:text-4xl font-normal leading-tight text-[#1A1814] mb-3">
            "{differentiationData.closingPrimary}"
          </h4>

          {/* Secondary Statement */}
          <p className="font-serif text-lg sm:text-xl font-light italic leading-relaxed text-[#8A8378] mb-8">
            {differentiationData.closingSecondary}
          </p>
        </div>
        </div>

        {/* ============================================================ */}
        {/* PLATFORM & RESEARCH ECOSYSTEM MAP                            */}
        {/* ============================================================ */}
        <div
          className="mb-20 sm:mb-24 p-6 sm:p-8 rounded-2xl border transition-all duration-300"
          style={{
            backgroundColor: T.cream,
            borderColor: 'rgba(140, 107, 62, 0.18)',
            boxShadow: T.shadows.sm,
          }}
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 mb-6 border-b border-black/[0.06]">
            <div>
              <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-[#8C6B3E] font-medium">
                PRODUCT & RESEARCH ECOSYSTEM
              </span>
              <p className="text-xs text-[#8A8378] font-light">
                An integrated platform growing across multiple health technologies
              </p>
            </div>
            <span className="text-[10px] font-mono text-[#8A8378] uppercase">
              INTERACTIVE ARCHITECTURE // 5 DOMAINS
            </span>
          </div>

          {/* Interactive Flow Tree Diagram */}
          <div className="flex flex-col items-center">
            {/* Top Root: SpandaVidya Platform */}
            <div
              className="px-6 py-2.5 rounded border text-center shadow-xs"
              style={{
                backgroundColor: '#FFFFFF',
                borderColor: T.accent,
              }}
            >
              <span className="text-[10px] font-mono tracking-[0.2em] text-[#8C6B3E] uppercase block">
                SPANDAVIDYA
              </span>
              <span className="text-xs font-mono font-bold tracking-wider text-[#1A1814] uppercase">
                HEALTHCARE PLATFORM & RESEARCH INITIATIVE
              </span>
            </div>

            {/* Connecting Stem */}
            <div className="w-[1.5px] h-5" style={{ backgroundColor: 'rgba(140, 107, 62, 0.3)' }} />

            {/* 3 Core Pillars */}
            <div className="relative w-full max-w-3xl">
              {/* Horizontal bar */}
              <div className="w-full h-[1.5px]" style={{ backgroundColor: 'rgba(140, 107, 62, 0.25)' }} />

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => scrollToArea(0)}
                  className="p-3 rounded border text-center bg-white hover:border-[#8C6B3E] hover:bg-[#FAF7F0] transition-all cursor-pointer group"
                  style={{ borderColor: 'rgba(26, 24, 20, 0.08)' }}
                >
                  <span className="text-[9px] font-mono text-[#8C6B3E] block mb-0.5">01 // CONVERSATIONAL</span>
                  <span className="text-xs font-mono font-bold text-[#1A1814] uppercase group-hover:text-[#8C6B3E] transition-colors">
                    HEALTHCARE AI
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => scrollToArea(1)}
                  className="p-3 rounded border text-center bg-white hover:border-[#8C6B3E] hover:bg-[#FAF7F0] transition-all cursor-pointer group"
                  style={{ borderColor: 'rgba(26, 24, 20, 0.08)' }}
                >
                  <span className="text-[9px] font-mono text-[#8C6B3E] block mb-0.5">02 // USER TOOLS</span>
                  <span className="text-xs font-mono font-bold text-[#1A1814] uppercase group-hover:text-[#8C6B3E] transition-colors">
                    HEALTH PRODUCTS
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => scrollToArea(2)}
                  className="p-3 rounded border text-center bg-white hover:border-[#8C6B3E] hover:bg-[#FAF7F0] transition-all cursor-pointer group"
                  style={{ borderColor: 'rgba(26, 24, 20, 0.08)' }}
                >
                  <span className="text-[9px] font-mono text-[#8C6B3E] block mb-0.5">03 // INNOVATION</span>
                  <span className="text-xs font-mono font-bold text-[#1A1814] uppercase group-hover:text-[#8C6B3E] transition-colors">
                    RESEARCH + R&D
                  </span>
                </button>
              </div>
            </div>

            {/* Convergence Stem */}
            <div className="w-[1.5px] h-5" style={{ backgroundColor: 'rgba(140, 107, 62, 0.3)' }} />

            {/* Specialized Systems Node */}
            <button
              type="button"
              onClick={() => scrollToArea(4)}
              className="w-full max-w-xl p-3 rounded border text-center bg-white hover:border-[#8C6B3E] hover:bg-[#FAF7F0] transition-all cursor-pointer group"
              style={{ borderColor: 'rgba(140, 107, 62, 0.2)' }}
            >
              <span className="text-[9px] font-mono text-[#8C6B3E] block mb-0.5">05 // FOCUSED CLINICAL DOMAINS</span>
              <div className="flex flex-wrap items-center justify-center gap-2">
                <span className="text-xs font-mono font-bold text-[#1A1814] uppercase group-hover:text-[#8C6B3E] transition-colors">
                  SPECIALIZED SYSTEMS
                </span>
                <span className="text-[10px] font-mono text-[#8A8378]">
                  [ EYE AI • AYURVEDIC INTELLIGENCE • FUTURE DIAGNOSTICS ]
                </span>
              </div>
            </button>

            {/* Drop to Life stages */}
            <div className="w-[1.5px] h-5" style={{ backgroundColor: 'rgba(140, 107, 62, 0.3)' }} />

            {/* Across Life Node */}
            <button
              type="button"
              onClick={() => scrollToArea(3)}
              className="w-full max-w-md p-2.5 rounded border text-center bg-white hover:border-[#8C6B3E] hover:bg-[#FAF7F0] transition-all cursor-pointer group"
              style={{ borderColor: 'rgba(26, 24, 20, 0.08)' }}
            >
              <span className="text-[9px] font-mono text-[#8C6B3E] block mb-0.5">04 // ADAPTED BY AGE & NEED</span>
              <span className="text-xs font-mono font-bold text-[#1A1814] uppercase group-hover:text-[#8C6B3E] transition-colors">
                CARE ACROSS DIFFERENT STAGES OF LIFE
              </span>
            </button>
          </div>
        </div>

        {/* ============================================================ */}
        {/* 5 DEEP-DIVE EDITORIAL AREAS                                  */}
        {/* ============================================================ */}
        <div className="border-t" style={{ borderColor: 'rgba(26, 24, 20, 0.09)' }}>
          {differentiationData.areas.map((area, idx) => {
            const isHovered = hoveredRowIndex === idx;

            return (
              <div
                key={area.id}
                ref={(el) => {
                  rowsRef.current[idx] = el;
                }}
                onMouseEnter={() => setHoveredRowIndex(idx)}
                onMouseLeave={() => setHoveredRowIndex(null)}
                className="group relative py-16 sm:py-20 md:py-24 border-b transition-colors duration-500"
                style={{
                  borderColor: 'rgba(26, 24, 20, 0.09)',
                  backgroundColor: isHovered ? 'rgba(251, 249, 244, 0.7)' : 'transparent',
                }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

                  {/* Left Column: Number, Label, Heading, Body, Tags */}
                  <div className="lg:col-span-5 flex flex-col justify-center">

                    {/* Header: Number, Label, Status */}
                    <div className="flex items-center gap-3 mb-4">
                      <span
                        className="font-mono text-2xl sm:text-3xl font-light tracking-tight transition-colors duration-300"
                        style={{
                          color: isHovered ? T.accent : 'rgba(140, 107, 62, 0.4)',
                        }}
                      >
                        {area.number}
                      </span>
                      <span className="text-white/20">•</span>
                      <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-[#8C6B3E] font-medium">
                        {area.label.split(' / ')[1]}
                      </span>
                      <span
                        className="ml-auto text-[9px] font-mono px-2 py-0.5 rounded border uppercase"
                        style={{
                          backgroundColor: 'rgba(140, 107, 62, 0.05)',
                          borderColor: 'rgba(140, 107, 62, 0.2)',
                          color: T.accent,
                        }}
                      >
                        {area.status}
                      </span>
                    </div>

                    {/* Heading */}
                    <h3
                      className="font-serif text-2xl sm:text-3xl md:text-[32px] font-normal leading-snug tracking-tight mb-4 transition-colors duration-300"
                      style={{
                        color: isHovered ? T.charcoal : '#2C2921',
                      }}
                    >
                      "{area.heading}"
                    </h3>

                    {/* Body Paragraphs */}
                    <div className="space-y-3 mb-6">
                      {area.body.map((paragraph, pIdx) => (
                        <p
                          key={pIdx}
                          className="text-sm sm:text-base leading-relaxed font-light"
                          style={{ color: T.muted }}
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>

                    {/* Supporting Secondary Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-2 border-t border-black/[0.04]">
                      {area.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[9px] font-mono px-2 py-0.5 rounded border uppercase"
                          style={{
                            backgroundColor: 'rgba(26, 24, 20, 0.02)',
                            borderColor: 'rgba(26, 24, 20, 0.08)',
                            color: '#8A8378',
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right Column: Tailored Studio Visual Widget */}
                  <div className="lg:col-span-7">
                    {renderVisual(area.id, isHovered)}
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export const Differentiation = HealthcareIntelligenceSection;
export default HealthcareIntelligenceSection;
