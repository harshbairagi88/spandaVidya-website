import React, { useLayoutEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { T } from '../theme';
import { teamMembers, TeamMember } from '@/data';
import { useReducedMotion } from '../hooks';

gsap.registerPlugin(ScrollTrigger);

const TeamCard: React.FC<{ member: TeamMember }> = ({ member }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group overflow-hidden flex flex-col transition-all"
      style={{
        backgroundColor: T.cream,
        border: T.border.light,
        borderRadius: T.radius.xl, // 24px
        boxShadow: isHovered ? T.shadows.md : T.shadows.sm,
        transform: isHovered ? "translateY(-4px)" : "translateY(0)",
        transitionDuration: T.transitions.duration,
        transitionTimingFunction: T.transitions.easing,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image */}
      <div className="overflow-hidden bg-gray-100">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-[320px] object-cover object-top transition-transform duration-700"
          style={{
            transform: isHovered ? "scale(1.05)" : "scale(1)",
          }}
        />
      </div>

      {/* Content */}
      <div className="p-8 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold" style={{ color: T.charcoal }}>
          {member.name}
        </h3>

        <p className="text-sm font-semibold uppercase tracking-wider mt-2 mb-4" style={{ color: T.accent }}>
          {member.role}
        </p>

        <p className="text-sm leading-relaxed font-light" style={{ color: T.muted }}>
          {member.description}
        </p>
      </div>
    </div>
  );
};

const Team: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const headerRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<HTMLDivElement[]>([]);
  const reducedMotion = useReducedMotion();

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section || reducedMotion) return;

    const ctx = gsap.context(() => {
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current.children,
          { autoAlpha: 0, y: 20 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.75,
            stagger: 0.1,
            ease: 'power3.out',
            scrollTrigger: { trigger: section, start: 'top 76%', once: true },
          }
        );
      }

      gsap.fromTo(
        cardRefs.current,
        { autoAlpha: 0, y: 20 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: { trigger: section, start: 'top 66%', once: true },
        }
      );
    }, section);

    return () => ctx.revert();
  }, [reducedMotion]);

  return (
    <section
      ref={sectionRef}
      id="team"
      className="relative py-12 px-6 md:px-[8vw] bg-transparent overflow-hidden"
    >
      <div className="relative z-10">
        {/* Heading */}
        <div ref={headerRef} className="max-w-3xl mb-20">
          <span 
            className="inline-block text-xs font-semibold uppercase tracking-[0.16em] mb-5" 
            style={{ color: T.accent }}
          >
            Our Team
          </span>

          <h2 className="font-serif text-5xl md:text-6xl font-semibold leading-tight mb-6" style={{ color: T.charcoal }}>
            The Minds Behind
            <span style={{ color: T.accent }}> SpandaVidya AI</span>
          </h2>

          <p className="text-lg leading-relaxed font-light" style={{ color: T.muted }}>
            A multidisciplinary team working at the intersection of Ayurveda,
            artificial intelligence, signal processing, and healthcare systems.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={member.name} ref={(element) => { if (element) cardRefs.current[index] = element; }}>
              <TeamCard member={member} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
