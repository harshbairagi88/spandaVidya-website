import React, { useState, useRef, useLayoutEffect, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { T } from '../theme';
import { applicationsData, ProductApplication } from '@/data';
import { useReducedMotion } from '../hooks';

gsap.registerPlugin(ScrollTrigger);

// ============================================================================
// VISUAL 01: Cataract AI Clinical Optical Viewfinder
// ============================================================================
const CataractAiVisual: React.FC = () => {
  return (
    <div
      className="w-full rounded-2xl border p-5 sm:p-7 transition-all duration-500 shadow-sm"
      style={{
        backgroundColor: '#FFFFFF',
        borderColor: 'rgba(140, 107, 62, 0.22)',
        boxShadow: '0 12px 36px rgba(140, 107, 62, 0.08)',
      }}
    >
      {/* Top Telemetry Header */}
      <div className="flex items-center justify-between pb-3 mb-5 border-b border-black/[0.06]">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#5C6E52] animate-pulse" />
          <span className="text-[10px] font-mono tracking-widest uppercase text-[#5C6E52] font-semibold">
            ANTERIOR SEGMENT SCANNER
          </span>
        </div>
        <span className="text-[9px] font-mono text-[#8A8378] uppercase">
          MODEL: EfficientNet-B3
        </span>
      </div>

      {/* Real Application Image */}
      <div
        className="relative h-72 sm:h-80 md:h-96 rounded-xl border flex items-center justify-center p-3 sm:p-4 overflow-hidden bg-[#FAF7F0]"
        style={{ borderColor: 'rgba(140, 107, 62, 0.3)' }}
      >
        <img
          src="/app/spandavidyaai.png"
          alt="SpandaVidya AI cataract assessment mobile application"
          width={1536}
          height={2752}
          className="w-full h-full object-contain rounded-lg transition-transform duration-300 hover:scale-[1.02]"
          loading="lazy"
          decoding="async"
        />
      </div>

      {/* 5-Step Pipeline Strip */}
      <div className="mt-5 grid grid-cols-5 gap-1.5 pt-4 border-t border-black/[0.06]">
        {['CAPTURE', 'VALIDATE', 'ANALYZE', 'PREDICT', 'RESULT'].map((step, i) => (
          <div
            key={step}
            className="p-2 rounded bg-[#FAF7F0] border border-black/[0.05] text-center"
          >
            <span className="text-[8px] font-mono text-[#8A8378] block">0{i + 1}</span>
            <span className="text-[9px] font-mono font-bold text-[#1A1814] uppercase truncate block">
              {step}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

// ============================================================================
// VISUAL 02: InfantMind Calm Developmental Visual
// ============================================================================
const InfantMindVisual: React.FC = () => {
  return (
    <div
      className="w-full rounded-2xl border p-5 sm:p-7 transition-all duration-500 shadow-sm"
      style={{
        backgroundColor: '#FFFFFF',
        borderColor: 'rgba(184, 147, 90, 0.25)',
        boxShadow: '0 12px 36px rgba(184, 147, 90, 0.08)',
      }}
    >
      {/* Header */}
      <div className="flex items-center justify-between pb-3 mb-5 border-b border-black/[0.06]">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#B8935A]" />
          <span className="text-[10px] font-mono tracking-widest uppercase text-[#B8935A] font-semibold">
            DEVELOPMENTAL VISUAL FIELD
          </span>
        </div>
        <span className="text-[9px] font-mono text-[#8A8378] uppercase">
          NEWBORN TO 6 MONTHS
        </span>
      </div>

      {/* Real Application Image */}
      <div
        className="relative h-72 sm:h-80 md:h-96 rounded-xl border flex items-center justify-center p-3 sm:p-4 overflow-hidden bg-[#FAF7F0]"
        style={{ borderColor: 'rgba(184, 147, 90, 0.2)' }}
      >
        <img
          src="/app/babyapp.png"
          alt="InfantMind early-life visual engagement application"
          width={853}
          height={1844}
          className="w-full h-full object-contain rounded-lg transition-transform duration-300 hover:scale-[1.02]"
          loading="lazy"
          decoding="async"
        />
      </div>

      {/* Product Pillars */}
      <div className="mt-5 grid grid-cols-3 gap-2 pt-4 border-t border-black/[0.06]">
        <div className="p-2.5 rounded bg-[#FAF7F0] border border-black/[0.05] text-center">
          <span className="text-[9px] font-mono font-bold text-[#1A1814] uppercase block">
            PARENT-LED
          </span>
          <span className="text-[9px] text-[#8A8378] leading-tight block mt-0.5">
            Shared bonding moments
          </span>
        </div>
        <div className="p-2.5 rounded bg-[#FAF7F0] border border-black/[0.05] text-center">
          <span className="text-[9px] font-mono font-bold text-[#1A1814] uppercase block">
            CALM ACTIVITIES
          </span>
          <span className="text-[9px] text-[#8A8378] leading-tight block mt-0.5">
            Gentle sensory rhythm
          </span>
        </div>
        <div className="p-2.5 rounded bg-[#FAF7F0] border border-black/[0.05] text-center">
          <span className="text-[9px] font-mono font-bold text-[#1A1814] uppercase block">
            LOCAL PRIVACY
          </span>
          <span className="text-[9px] text-[#8A8378] leading-tight block mt-0.5">
            Photos stay on device
          </span>
        </div>
      </div>
    </div>
  );
};

// ============================================================================
// VISUAL 03: RF & Multimodal Signal Intelligence Waveform
// ============================================================================
const RfSignalVisual: React.FC = () => {
  return (
    <div
      className="w-full rounded-2xl border p-5 sm:p-7 transition-all duration-500 shadow-sm"
      style={{
        backgroundColor: '#FFFFFF',
        borderColor: 'rgba(140, 107, 62, 0.22)',
        boxShadow: '0 12px 36px rgba(140, 107, 62, 0.08)',
      }}
    >
      {/* Header */}
      <div className="flex items-center justify-between pb-3 mb-5 border-b border-black/[0.06]">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#8C6B3E]" />
          <span className="text-[10px] font-mono tracking-widest uppercase text-[#8C6B3E] font-semibold">
            MULTIMODAL SIGNAL FUSION
          </span>
        </div>
        <span className="text-[9px] font-mono text-[#8A8378] uppercase">
          RESEARCH + DEVELOPMENT
        </span>
      </div>

      {/* Real Application Image */}
      <div
        className="relative h-72 sm:h-80 md:h-96 rounded-xl border flex items-center justify-center p-3 sm:p-4 overflow-hidden bg-[#FAF7F0]"
        style={{ borderColor: 'rgba(140, 107, 62, 0.3)' }}
      >
        <img
          src="/app/rfapp.png"
          alt="SpandaVidya RF signal intelligence application"
          width={941}
          height={1672}
          className="w-full h-full object-contain rounded-lg transition-transform duration-300 hover:scale-[1.02]"
          loading="lazy"
          decoding="async"
        />
      </div>

      {/* Multimodal Stream Inputs */}
      <div className="mt-5 grid grid-cols-4 gap-1.5 pt-4 border-t border-black/[0.06]">
        {['RF SIGNALS', 'AUDIO SPECTRA', 'MOBILE VISION', 'BLE SENSORS'].map(s => (
          <div key={s} className="p-2 rounded bg-[#FAF7F0] border border-black/[0.05] text-center">
            <span className="text-[9px] font-mono font-bold text-[#1A1814] uppercase block">
              {s}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

// ============================================================================
// MAIN COMPONENT: SpandaVidya AI Applications Showcase
// ============================================================================
export const ApplicationsSection: React.FC = () => {
  const [selectedProductIndex, setSelectedProductIndex] = useState(0);
  const sectionRef = useRef<HTMLElement | null>(null);
  const headerRef = useRef<HTMLDivElement | null>(null);
  const tabsRef = useRef<HTMLDivElement | null>(null);
  const showcaseRef = useRef<HTMLDivElement | null>(null);
  const hasSelectedProductRef = useRef(false);
  const reducedMotion = useReducedMotion();

  const currentProduct: ProductApplication = applicationsData.products[selectedProductIndex];

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section || reducedMotion) return;

    const ctx = gsap.context(() => {
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
              trigger: headerRef.current,
              start: 'top 82%',
              once: true,
            },
          }
        );
      }

      const showcaseElements = [tabsRef.current, showcaseRef.current].filter(Boolean);
      if (showcaseElements.length) {
        gsap.fromTo(
          showcaseElements,
          { y: 20, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.7,
            ease: 'power3.out',
            stagger: 0.1,
            scrollTrigger: {
              trigger: section,
              start: 'top 68%',
              once: true,
            },
          }
        );
      }
    }, section);

    return () => ctx.revert();
  }, [reducedMotion]);

  useEffect(() => {
    const showcase = showcaseRef.current;
    if (!showcase || reducedMotion) return;
    if (!hasSelectedProductRef.current) {
      hasSelectedProductRef.current = true;
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(showcase, { autoAlpha: 0, y: 14 }, { autoAlpha: 1, y: 0, duration: 0.45, ease: 'power2.out' });
    }, showcase);
    return () => ctx.revert();
  }, [currentProduct.id, reducedMotion]);

  const renderProductVisual = (productId: string) => {
    switch (productId) {
      case 'cataract-ai':
        return <CataractAiVisual />;
      case 'infantmind':
        return <InfantMindVisual />;
      case 'rf-signal-intelligence':
        return <RfSignalVisual />;
      default:
        return <CataractAiVisual />;
    }
  };

  return (
    <section
      ref={sectionRef}
      id="applications"
      aria-label="SpandaVidya AI Applications"
      className="py-1 sm:py-6 md:py-12 px-6 md:px-[8vw] bg-transparent relative overflow-hidden"
      style={{ borderTop: T.border.light }}
    >
      <div className="relative z-10 max-w-7xl mx-auto">

        {/* ============================================================ */}
        {/* SECTION HEADER: Platform to Applications Positioning         */}
        {/* ============================================================ */}
        <div ref={headerRef} className="text-center max-w-4xl mx-auto mb-16 sm:mb-20">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-[11px] font-mono font-semibold uppercase tracking-[0.2em] mb-6 shadow-xs"
            style={{
              backgroundColor: 'rgba(140, 107, 62, 0.05)',
              borderColor: 'rgba(140, 107, 62, 0.18)',
              color: T.accent,
            }}
          >
            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: T.accent }} />
            {applicationsData.eyebrow}
          </div>

          {/* Main Heading */}
          <h2
            className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal leading-[1.12] tracking-tight mb-6"
            style={{ color: T.charcoal }}
          >
            Different health problems need
            <br />
            <span className="italic font-light" style={{ color: T.accent }}>
              different kinds of intelligence.
            </span>
          </h2>

          {/* Supporting Paragraph */}
          <p
            className="text-base sm:text-lg leading-relaxed max-w-2xl mx-auto font-light"
            style={{ color: T.muted }}
          >
            {applicationsData.supportingText}
          </p>
        </div>

        {/* ============================================================ */}
        {/* HORIZONTAL PRODUCT SELECTOR (TABS)                           */}
        {/* ============================================================ */}
        <div
          ref={tabsRef}
          role="tablist"
          aria-label="SpandaVidya Applications"
          className="mb-2 sm:mb-2 grid grid-cols-1 md:grid-cols-3 gap-3 p-2 rounded-2xl border"
          style={{
            backgroundColor: T.cream,
            borderColor: 'rgba(140, 107, 62, 0.16)',
          }}
        >
          {applicationsData.products.map((prod, idx) => {
            const isSelected = selectedProductIndex === idx;

            return (
              <button
                key={prod.id}
                role="tab"
                id={`tab-${prod.id}`}
                aria-selected={isSelected}
                aria-controls={`panel-${prod.id}`}
                tabIndex={isSelected ? 0 : -1}
                onClick={() => setSelectedProductIndex(idx)}
                className="p-4 sm:p-5 rounded-xl border text-left transition-all duration-300 cursor-pointer flex flex-col justify-between relative group"
                style={{
                  backgroundColor: isSelected ? '#FFFFFF' : 'transparent',
                  borderColor: isSelected ? T.accent : 'transparent',
                  boxShadow: isSelected ? '0 4px 16px rgba(140, 107, 62, 0.08)' : 'none',
                }}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className="text-[10px] font-mono tracking-widest uppercase transition-colors"
                      style={{ color: isSelected ? T.accent : '#8A8378' }}
                    >
                      {prod.number} // {prod.label.split(' / ')[1]}
                    </span>
                    <span
                      className="text-[8px] font-mono px-2 py-0.5 rounded font-medium"
                      style={{
                        backgroundColor: `${prod.statusColor}15`,
                        color: prod.statusColor,
                        border: `1px solid ${prod.statusColor}30`,
                      }}
                    >
                      {prod.status}
                    </span>
                  </div>

                  <h3
                    className="font-serif text-xl sm:text-2xl font-medium tracking-tight mb-1 transition-colors"
                    style={{ color: isSelected ? T.charcoal : '#4A463D' }}
                  >
                    {prod.name}
                  </h3>
                  <p className="text-xs text-[#8A8378] font-light">
                    {prod.subtitle}
                  </p>
                </div>

                {/* Active Indicator Line */}
                <div
                  className="w-full h-[2px] mt-4 rounded-full transition-colors"
                  style={{
                    backgroundColor: isSelected ? T.accent : 'rgba(26, 24, 20, 0.06)',
                  }}
                />
              </button>
            );
          })}
        </div>

        {/* ============================================================ */}
        {/* ACTIVE PRODUCT SHOWCASE COMPONENT                            */}
        {/* ============================================================ */}
        <div
          ref={showcaseRef}
          role="tabpanel"
          id={`panel-${currentProduct.id}`}
          aria-labelledby={`tab-${currentProduct.id}`}
          className="p-8 sm:p-10 md:p-12 rounded-2xl border transition-all duration-500 mb-20"
          style={{
            backgroundColor: T.cream,
            borderColor: 'rgba(140, 107, 62, 0.18)',
            boxShadow: T.shadows.sm,
          }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

            {/* Left/Alternating Column: Product Info & Actions */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              {/* Product Badge */}
              <div className="flex items-center gap-3 mb-4">
                <span
                  className="text-[10px] font-mono tracking-[0.2em] uppercase px-2.5 py-1 rounded border font-semibold"
                  style={{
                    backgroundColor: `${currentProduct.statusColor}10`,
                    borderColor: `${currentProduct.statusColor}30`,
                    color: currentProduct.statusColor,
                  }}
                >
                  {currentProduct.status}
                </span>
                <span className="text-[10px] font-mono text-[#8A8378] tracking-widest uppercase">
                  {currentProduct.label}
                </span>
              </div>

              {/* Heading */}
              <h3
                className="font-serif text-3xl sm:text-4xl md:text-[40px] font-normal leading-tight tracking-tight mb-4"
                style={{ color: T.charcoal }}
              >
                "{currentProduct.heading}"
              </h3>

              {/* Description */}
              <p className="text-base leading-relaxed font-light text-[#8A8378] mb-6">
                {currentProduct.description}
              </p>

              {/* Technical Specifications / Specs pills */}
              <div className="mb-8">
                <span className="text-[10px] font-mono tracking-widest text-[#8C6B3E] uppercase block mb-3 font-semibold">
                  {currentProduct.specsTitle}
                </span>
                <div className="flex flex-wrap gap-2">
                  {currentProduct.specs.map((spec) => (
                    <span
                      key={spec}
                      className="text-xs font-mono px-3 py-1.5 rounded border bg-white text-[#2C2921]"
                      style={{ borderColor: 'rgba(26, 24, 20, 0.08)' }}
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>

              {/* Features / Research Directions Details */}
              {currentProduct.features && (
                <div className="mb-8 space-y-3">
                  {currentProduct.features.slice(0, 3).map((f) => (
                    <div key={f.title} className="text-left border-l-2 pl-3" style={{ borderColor: T.accent }}>
                      <h4 className="text-xs font-mono font-bold text-[#1A1814] uppercase">
                        {f.title}
                      </h4>
                      <p className="text-xs text-[#8A8378] font-light mt-0.5">
                        {f.description}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              {currentProduct.researchDirections && (
                <div className="mb-8 space-y-2.5">
                  {currentProduct.researchDirections.slice(0, 3).map((r) => (
                    <div key={r.title} className="p-2.5 rounded bg-white border border-black/[0.05] flex items-center justify-between">
                      <div>
                        <span className="text-xs font-mono font-semibold text-[#1A1814] uppercase block">
                          {r.title}
                        </span>
                        <span className="text-[11px] text-[#8A8378] font-light">
                          {r.description}
                        </span>
                      </div>
                      <span className="text-[8px] font-mono px-1.5 py-0.5 rounded bg-black/[0.04] text-[#8A8378] uppercase shrink-0 ml-2">
                        {r.status}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href={currentProduct.primaryCtaHref}
                  target={currentProduct.isExternalCta ? "_blank" : undefined}
                  rel={currentProduct.isExternalCta ? "noopener noreferrer" : undefined}
                  className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-sm text-xs font-mono font-medium tracking-widest uppercase transition-all duration-300 shadow-sm"
                  style={{
                    backgroundColor: T.charcoal,
                    color: T.ivory,
                    border: `1px solid ${T.charcoal}`,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = T.accent;
                    e.currentTarget.style.borderColor = T.accent;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = T.charcoal;
                    e.currentTarget.style.borderColor = T.charcoal;
                  }}
                >
                  <span>{currentProduct.primaryCtaText}</span>
                  <span className="transform group-hover:translate-x-1 transition-transform duration-300">
                    →
                  </span>
                </a>

                {currentProduct.secondaryCtaText && currentProduct.secondaryCtaHref && (
                  <a
                    href={currentProduct.secondaryCtaHref}
                    target={currentProduct.isSecondaryExternal ? "_blank" : undefined}
                    rel={currentProduct.isSecondaryExternal ? "noopener noreferrer" : undefined}
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-sm text-xs font-mono font-medium tracking-widest uppercase border transition-all duration-300"
                    style={{
                      borderColor: 'rgba(26, 24, 20, 0.2)',
                      color: T.charcoal,
                      backgroundColor: 'transparent',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = T.accent;
                      e.currentTarget.style.color = T.accent;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(26, 24, 20, 0.2)';
                      e.currentTarget.style.color = T.charcoal;
                    }}
                  >
                    <span>{currentProduct.secondaryCtaText}</span>
                    <span>↗</span>
                  </a>
                )}
              </div>
            </div>

            {/* Right Column: Tailored Product Visual */}
            <div className="lg:col-span-6">
              {renderProductVisual(currentProduct.id)}
            </div>

          </div>
        </div>

        {/* ============================================================ */}
        {/* WHY THESE PRODUCTS BELONG TOGETHER (EDITORIAL STATEMENT)     */}
        {/* ============================================================ */}
        <div
          className="p-8 sm:p-12 rounded-2xl border text-center max-w-4xl mx-auto"
          style={{
            backgroundColor: T.cream,
            borderColor: 'rgba(140, 107, 62, 0.16)',
          }}
        >
          <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-[#8C6B3E] block mb-3 font-semibold">
            ONE UNIFIED FOUNDATION
          </span>

          <h3
            className="font-serif text-2xl sm:text-3xl md:text-4xl font-normal leading-tight text-[#1A1814] mb-5"
          >
            "{applicationsData.togetherHeading}"
          </h3>

          <div className="space-y-3 max-w-2xl mx-auto mb-10 text-sm sm:text-base leading-relaxed text-[#8A8378] font-light">
            {applicationsData.togetherBody.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>

          {/* Technology Ecosystem Conceptual Visual */}
          <div className="p-6 rounded-xl border bg-white max-w-2xl mx-auto text-center" style={{ borderColor: 'rgba(26, 24, 20, 0.08)' }}>
            <span className="text-[9px] font-mono text-[#8C6B3E] tracking-widest uppercase block mb-1">
              CONCEPTUAL ECOSYSTEM
            </span>
            <span className="text-xs font-mono font-bold text-[#1A1814] uppercase tracking-wider block mb-4">
              SPANDAVIDYA AI PLATFORM
            </span>

            {/* 3 Streams */}
            <div className="grid grid-cols-3 gap-3 pt-3 border-t border-black/[0.06]">
              <div className="p-2.5 rounded bg-[#FAF7F0] border border-black/[0.05]">
                <span className="text-[9px] font-mono font-bold text-[#1A1814] uppercase block">
                  COMPUTER VISION
                </span>
                <span className="text-[8px] font-mono text-[#8A8378] uppercase block mt-0.5">
                  IMAGES // OPHTHALMIC
                </span>
              </div>

              <div className="p-2.5 rounded bg-[#FAF7F0] border border-black/[0.05]">
                <span className="text-[9px] font-mono font-bold text-[#1A1814] uppercase block">
                  MULTIMODAL AI
                </span>
                <span className="text-[8px] font-mono text-[#8A8378] uppercase block mt-0.5">
                  CONTEXT // INFANTMIND
                </span>
              </div>

              <div className="p-2.5 rounded bg-[#FAF7F0] border border-black/[0.05]">
                <span className="text-[9px] font-mono font-bold text-[#1A1814] uppercase block">
                  SIGNAL INTELLIGENCE
                </span>
                <span className="text-[8px] font-mono text-[#8A8378] uppercase block mt-0.5">
                  PHYSIOLOGY // RF & PPG
                </span>
              </div>
            </div>

            {/* Downward convergence */}
            <div className="mt-4 pt-3 border-t border-black/[0.06] flex items-center justify-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#5C6E52]" />
              <span className="text-[10px] font-mono text-[#1A1814] font-medium tracking-wider uppercase">
                HEALTH INTELLIGENCE & ACCESSIBLE SCREENING
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export const CataractDetection = ApplicationsSection;
export default ApplicationsSection;
