import { gsap } from 'gsap';
import React, { useLayoutEffect, useRef } from 'react';
import Button from '../components/Button';
import { useReducedMotion } from '../hooks';
import { T } from '../theme';

const Hero: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const badgeRef = useRef<HTMLDivElement | null>(null);
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const paragraphRef = useRef<HTMLParagraphElement | null>(null);
  const ctaRef = useRef<HTMLDivElement | null>(null);
  const reducedMotion = useReducedMotion();

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section || reducedMotion) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      if (badgeRef.current) {
        tl.fromTo(badgeRef.current, { y: 15, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.5 });
      }

      if (headingRef.current) {
        tl.fromTo(headingRef.current, { y: 25, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.8 }, '-=0.15');
      }

      if (paragraphRef.current) {
        tl.fromTo(paragraphRef.current, { y: 15, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.65 }, '-=0.38');
      }

      if (ctaRef.current) {
        tl.fromTo(
          ctaRef.current.children,
          { y: 15, autoAlpha: 0 },
          { y: 0, autoAlpha: 1, duration: 0.55, stagger: 0.1 },
          '-=0.35'
        );
      }
    }, section);

    return () => ctx.revert();
  }, [reducedMotion]);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-screen flex items-center px-6 md:px-[8vw] py-2 overflow-hidden bg-transparent"
    >
      {/* Large background text */}
        <div
          className="
            serif
            absolute
            pointer-events-none
            select-none
            whitespace-nowrap
            z-0

            top-[13%]
            left-1/2
            -translate-x-1/2
            -translate-y-1/2
            text-[72px]

            sm:top-[80%]
            sm:text-[100px]

            md:top-[79%]
            md:left-[15.5%]
            md:translate-x-0
            md:text-[18vw]
          "
          style={{
            fontWeight: 900,
            color: `${T.accent}11`,
            letterSpacing: "-0.06em",
          }}
        >
         SpandaVidya
        </div>
      <div className="relative mt-20 max-w-5xl">
        <div
          ref={badgeRef}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border text-xs font-bold uppercase tracking-widest mb-8"
          style={{
            backgroundColor: "rgba(140, 107, 62, 0.05)",
            borderColor: "rgba(140, 107, 62, 0.15)",
            color: T.accent,
          }}
        >
          <span className="relative flex h-2 w-2">
            <span
              className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
              style={{ backgroundColor: T.accent }}
            />
            <span
              className="relative inline-flex rounded-full h-2 w-2"
              style={{ backgroundColor: T.accent }}
            />
          </span>
          AI-Enabled Health Intelligence
        </div>

        <h1
          ref={headingRef}
          className="font-serif text-6xl md:text-8xl font-bold leading-[1.05]"
          style={{ color: T.charcoal }}
        >
          Digitizing <span style={{ color: T.accent }}>SpandaVidya</span> <br />
          <span className="italic font-medium" style={{ color: "rgba(26, 24, 20, 0.6)" }}>with Signal Intelligence</span>
        </h1>

        <p
          ref={paragraphRef}
          className="text-xl md:text-2xl max-w-2xl mb-12 leading-relaxed font-light"
          style={{ color: T.muted }}
        >
          We develop healthcare technology that combines AI, computer vision, signal intelligence, and digital Naadi research across eye health, infant experiences, and physiological monitoring.
        </p>

        <div ref={ctaRef} className="flex flex-wrap gap-5">
          <Button href="#applications" className="shadow-xl">
            OUR SERVICES →
          </Button>
          <Button
            href="https://naadi-raksha-liart.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            variant="outline"
          >
            CHAT WITH VEDA AI →
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
