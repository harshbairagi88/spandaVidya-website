import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { cataractHero, cataractCapabilities, upcomingFeatures } from '@/data';
import Button from '@/components/Button';
import CataractAppPreview from '@/components/CataractAppPreview';
import CataractWorkflow from '@/components/CataractWorkflow';

gsap.registerPlugin(ScrollTrigger);

const CataractDetection: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const heroRef = useRef<HTMLDivElement | null>(null);
  const previewRef = useRef<HTMLDivElement | null>(null);
  const featuresRef = useRef<HTMLDivElement | null>(null);
  const workflowRef = useRef<HTMLDivElement | null>(null);
  const techRef = useRef<HTMLDivElement | null>(null);
  const roadmapRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      // 1. Hero Text Reveal
      if (heroRef.current) {
        gsap.fromTo(
          heroRef.current.children,
          { y: 30, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.9,
            ease: 'power3.out',
            stagger: 0.12,
            scrollTrigger: {
              trigger: heroRef.current,
              start: 'top 85%',
            },
          }
        );
      }

      // 2. Phone Preview Mockup Reveal
      if (previewRef.current) {
        gsap.fromTo(
          previewRef.current,
          { y: 40, autoAlpha: 0, scale: 0.98 },
          {
            y: 0,
            autoAlpha: 1,
            scale: 1,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: previewRef.current,
              start: 'top 80%',
            },
          }
        );
      }



      // 4. Workflow Timeline Reveal
      if (workflowRef.current) {
        gsap.fromTo(
          workflowRef.current.children,
          { y: 30, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.95,
            ease: 'power3.out',
            stagger: 0.12,
            scrollTrigger: {
              trigger: workflowRef.current,
              start: 'top 80%',
            },
          }
        );
      }

    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="cataract-detection"
      className="py-32 px-6 md:px-[8vw] bg-[#F8F5EF] relative overflow-hidden border-t border-black/5"
    >
      {/* Background Grid Layout Alignment Lines */}
      <div className="absolute inset-y-0 left-[8vw] w-px bg-brand-accent/10 pointer-events-none hidden md:block" />
      <div className="absolute inset-y-0 right-[8vw] w-px bg-brand-accent/10 pointer-events-none hidden md:block" />

      {/* Glassmorphic Background Blur Rings */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-brand-accent/5 rounded-full blur-[120px] pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-brand-accent/5 rounded-full blur-[120px] pointer-events-none" aria-hidden="true" />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Flagship Hero Title Area */}
        <div ref={heroRef} className="text-center max-w-4xl mx-auto mb-20">
          {/* Badge */}
          <span className="inline-flex items-center gap-2 px-4.5 py-1.5 rounded-full bg-brand-accent/5 border border-brand-accent/15 text-brand-accent text-[11px] font-bold uppercase tracking-[0.2em] mb-8 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-accent"></span>
            </span>
            {cataractHero.badge}
          </span>

          {/* Main Title */}
          <h2 className="font-serif text-5xl md:text-7xl font-bold text-brand-text leading-[1.1] mb-6">
            {cataractHero.title.split('\n').map((line, i) => (
              <React.Fragment key={i}>
                {line}
                {i === 0 && <br />}
              </React.Fragment>
            ))}
          </h2>

          {/* Description */}
          <p className="text-brand-muted text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
            {cataractHero.description}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap justify-center gap-5">
            <Button
              href={cataractHero.ctaDownloadHref}
              className="shadow-xl shadow-brand-accent/10 font-semibold"
            >
              {cataractHero.ctaDownloadText}
            </Button>
            <Button
              href={cataractHero.ctaLearnMoreHref}
              variant="outline"
              className="font-medium"
            >
              {cataractHero.ctaLearnMoreText}
            </Button>
          </div>
        </div>

        {/* Large Layout Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Block: Premium Camera Viewfinder/Telemetry Simulator */}
          <div ref={previewRef} className="lg:col-span-5 flex justify-center">
            <CataractAppPreview />
          </div>

          {/* Right Block: Capabilities List */}
          <div ref={featuresRef} className="lg:col-span-7 flex flex-col h-full justify-center">
            <div className="flex items-center gap-2 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-pulse" />
              <span className="text-[11px] font-bold uppercase tracking-widest text-brand-accent">
                Technical Specifications
              </span>
            </div>

            <h3 className="font-serif text-3xl md:text-4xl font-semibold text-brand-text mb-8 leading-tight">
              High-Fidelity Anterior Segment Intelligence
            </h3>

            {/* Feature List */}
            <ul className="space-y-6">
              {cataractCapabilities.map((feature) => (
                <li key={feature.id} className="flex items-start group">
                  <div className="w-5 h-5 rounded-full bg-brand-accent/5 border border-brand-accent/25 flex items-center justify-center mr-4 mt-1 flex-shrink-0 group-hover:border-brand-accent/50 transition-colors duration-300">
                    <svg
                      className="w-3 h-3 text-brand-accent"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="3.5"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>

                  <div>
                    <h4 className="text-base font-bold text-brand-text mb-1 group-hover:text-brand-accent transition-colors duration-300">
                      {feature.title}
                    </h4>
                    <p className="text-brand-muted text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Processing Workflow Timeline */}
        <div ref={workflowRef}>
          <CataractWorkflow />
        </div>

      </div>
    </section>
  );
};

export default CataractDetection;
