
import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Button from '../components/Button';

const Hero: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const badgeRef = useRef<HTMLDivElement | null>(null);
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const paragraphRef = useRef<HTMLParagraphElement | null>(null);
  const ctaRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      if (badgeRef.current) {
        tl.fromTo(badgeRef.current, { y: 20, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.55 });
      }

      if (headingRef.current) {
        tl.fromTo(headingRef.current, { y: 36, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.9 }, '-=0.2');
      }

      if (paragraphRef.current) {
        tl.fromTo(paragraphRef.current, { y: 28, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.75 }, '-=0.45');
      }

      if (ctaRef.current) {
        tl.fromTo(
          ctaRef.current.children,
          { y: 22, autoAlpha: 0, scale: 0.97 },
          { y: 0, autoAlpha: 1, scale: 1, duration: 0.65, stagger: 0.1 },
          '-=0.35'
        );
      }
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="home" className="relative min-h-screen flex items-center px-6 md:px-[8vw] py-32 overflow-hidden bg-white">
      {/* Decorative Floating Elements */}
      <div className="absolute top-[15%] left-[10%] w-64 h-64 bg-brand-accent/5 rounded-full blur-[80px] animate-pulse-slow" aria-hidden="true" />
      <div className="absolute bottom-[20%] right-[15%] w-80 h-80 bg-brand-accent/10 rounded-full blur-[100px] animate-pulse-slow delay-1000" aria-hidden="true" />
      
      {/* Small floating spheres */}
      <div className="absolute top-[30%] right-[20%] w-4 h-4 bg-brand-accent/20 rounded-full animate-float" aria-hidden="true" />
      <div className="absolute bottom-[35%] left-[25%] w-6 h-6 bg-brand-accent/10 rounded-full animate-float delay-700" aria-hidden="true" />

      {/* Pulse Background SVG */}
      <div className="absolute top-1/2 left-0 w-full transform -translate-y-1/2 opacity-[0.15] pointer-events-none" aria-hidden="true">
        <svg viewBox="0 0 1000 300" className="w-full h-[400px]" preserveAspectRatio="none">
          <path
            className="animate-pulse-path"
            fill="none"
            stroke="#b58b2a"
            strokeWidth="2.5"
            strokeLinecap="round"
            d="M0,150 L80,150 L120,80 L160,220 L200,150 L260,150 L300,110 L340,190 L380,150 L1000,150"
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-5xl">
        <div ref={badgeRef} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-accent/5 border border-brand-accent/10 text-brand-accent text-xs font-bold uppercase tracking-widest mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-accent opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-accent"></span>
          </span>
          AI-Enabled Health Intelligence
        </div>
        
        <h1 ref={headingRef} className="font-serif text-6xl md:text-8xl font-bold text-brand-text leading-[1.05] mb-8">
          Digitizing <span className="text-brand-accent drop-shadow-sm">SpandaVidya</span> <br />
          <span className="italic font-medium text-brand-text/60">with Signal Intelligence</span>
        </h1>
        
        <p ref={paragraphRef} className="text-xl md:text-2xl text-brand-muted max-w-2xl mb-12 leading-relaxed">
          We leverage high-fidelity sensing and proprietary AI to capture Ayurvedic pulse signals, delivering objective, clinical-grade functional insights for integrative medicine.
        </p>
        
        <div ref={ctaRef} className="flex flex-wrap gap-5">
          <Button href="#approach" className="shadow-2xl shadow-brand-accent/20">Our Technology</Button>
          <Button href="#contact" variant="secondary">Partner & Collaborate</Button>
          <Button href="https://naadi-raksha-liart.vercel.app/" variant="secondary" className="bg-brand-accent/5 border-brand-accent/35">
            Try Spandhvidya Chatbot
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
