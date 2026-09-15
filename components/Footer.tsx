import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { branding, company, social, contact, urls } from '@/data';
import { ROUTES, HASH_ROUTES } from '../router';

interface NavItem {
  readonly label: string;
  readonly href?: string;
  readonly isRoute?: boolean;
  readonly isExternal?: boolean;
  readonly isAction?: boolean;
  readonly actionType?: 'disclaimer';
  readonly isNonClickable?: boolean;
  readonly badge?: string;
}

export const Footer: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;

  const [isDisclaimerOpen, setIsDisclaimerOpen] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);

  // Close modal on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsDisclaimerOpen(false);
      }
    };
    if (isDisclaimerOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isDisclaimerOpen]);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    const emailToCopy = 'contact@spandavidya.ai';
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(emailToCopy).then(() => {
        setEmailCopied(true);
        setTimeout(() => setEmailCopied(false), 2400);
      }).catch(() => {
        window.location.href = `mailto:${emailToCopy}`;
      });
    } else {
      window.location.href = `mailto:${emailToCopy}`;
    }
  };

  const navigateToSection = (hash: string) => {
    const sectionId = hash.replace('#', '');
    if (currentPath !== ROUTES.HOME) {
      navigate(`${ROUTES.HOME}#${sectionId}`);
    } else {
      const target = document.getElementById(sectionId);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleItemClick = (e: React.MouseEvent, item: NavItem) => {
    if (item.isNonClickable) {
      e.preventDefault();
      return;
    }
    if (item.isAction && item.actionType === 'disclaimer') {
      e.preventDefault();
      setIsDisclaimerOpen(true);
      return;
    }
    if (item.href && item.href.startsWith('#')) {
      e.preventDefault();
      navigateToSection(item.href);
    }
  };

  // Structured navigation data mapping
  const exploreLinks: NavItem[] = [
    { label: 'AI Health Assistant', href: urls.chatbotUrl || `#${HASH_ROUTES.PHILOSOPHY}`, isExternal: true, badge: 'LIVE' },
    { label: 'Cataract Detection', href: `#${HASH_ROUTES.CATARACT_DETECTION}` },
    { label: 'Ayurvedic Consultation', href: `#${HASH_ROUTES.PHILOSOPHY}` },
    { label: 'How It Works', href: `#${HASH_ROUTES.APPROACH}` },
    { label: 'Technology', href: `#${HASH_ROUTES.TECHNOLOGY}` },
    { label: 'About SpandaVidya', href: `#${HASH_ROUTES.MISSION}` },
  ];

  const platformItems: NavItem[] = [
    { label: 'Mobile Application', href: `#${HASH_ROUTES.CATARACT_DETECTION}`, badge: 'EXPO' },
    { label: 'AI Consultation', href: `#${HASH_ROUTES.PHILOSOPHY}`, badge: 'GEMINI' },
    { label: 'Eye Scan', href: `#${HASH_ROUTES.CATARACT_DETECTION}`, badge: 'VISION' },
    { label: 'Health Insights', href: `#${HASH_ROUTES.PROGRESS}`, badge: 'ASSIST' },
    { label: 'AI Diagnostics', isNonClickable: true, badge: 'RESEARCH' },
  ];

  const informationLinks: NavItem[] = [
    { label: 'Privacy Policy', href: ROUTES.PRIVACY, isRoute: true },
    { label: 'Terms of Use', href: ROUTES.TERMS, isRoute: true },
    { label: 'Medical Disclaimer', isAction: true, actionType: 'disclaimer' },
    { label: 'Security', href: `#${HASH_ROUTES.TECHNOLOGY}`, badge: 'TLS 1.3' },
    { label: 'About', href: `#${HASH_ROUTES.MISSION}` },
  ];

  // Subtle technology / trust pipeline layer
  const techArchitecture = [
    {
      step: '01 / INTAKE',
      title: 'Edge Capture',
      detail: 'React Native & Expo anterior segment image acquisition pipeline',
    },
    {
      step: '02 / REASONING',
      title: 'Ayurvedic Consultation',
      detail: 'NestJS backend microservices paired with Google Gemini models',
    },
    {
      step: '03 / VISION',
      title: 'Cataract Detection',
      detail: 'Deep neural networks for lens opacity and ocular pre-screening',
    },
    {
      step: '04 / INTEGRITY',
      title: 'Secure Infrastructure',
      detail: 'PostgreSQL persistence with AWS S3 encrypted asset vault',
    },
  ];

  return (
    <footer
      role="contentinfo"
      aria-label="SpandaVidya Global Footer"
      className="relative w-full bg-[#080706] text-[#F8F5EF] overflow-hidden border-t border-white/[0.08]"
      style={{
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      }}
    >
      {/* Subtle ambient lighting layer */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          background: 'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(184, 147, 90, 0.12), transparent 70%)',
        }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.02] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px]"
        aria-hidden="true"
      />

      <div className="relative z-10 w-full max-w-[1600px] mx-auto">
        
        {/* ============================================================ */}
        {/* TOP ROW: Large Editorial Contact & Clinical Advisory Notice  */}
        {/* ============================================================ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 border-b border-white/[0.08]">
          
          {/* Top Left: Large Editorial Email */}
          <div className="lg:col-span-7 p-6 sm:p-8 md:p-12 lg:p-14 lg:border-r border-white/[0.08] flex flex-col justify-between">
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-flex items-center px-2 py-0.5 text-[10px] font-mono tracking-[0.2em] uppercase text-[#D4B896] bg-white/[0.03] border border-white/10 rounded-sm">
                DIRECT INQUIRIES
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#B8935A] animate-pulse" />
              <span className="text-[10px] font-mono tracking-wider text-[#8A8378] uppercase">
                RESEARCH & COLLABORATION
              </span>
            </div>

            <div className="mt-2 mb-4">
              <a
                href="mailto:contact@spandavidya.ai"
                onClick={handleCopyEmail}
                className="group inline-flex items-center gap-3 text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-light tracking-tight text-[#F8F5EF] hover:text-[#D4B896] transition-colors duration-200"
                title="Click to copy email or compose message"
              >
                <span className="break-all font-serif">contact@spandavidya.ai</span>
                <span
                  className="inline-flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full border border-white/10 group-hover:border-[#B8935A] group-hover:bg-[#B8935A]/10 text-white/60 group-hover:text-[#D4B896] transition-all duration-200 transform group-hover:translate-x-1 group-hover:-translate-y-0.5 shrink-0"
                  aria-hidden="true"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </span>
              </a>

              {/* Copy confirmation feedback */}
              <div className="h-5 mt-1">
                {emailCopied && (
                  <span className="text-[11px] font-mono text-[#D4B896] tracking-wider uppercase transition-opacity">
                    ✓ Email copied to clipboard
                  </span>
                )}
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-[11px] font-mono tracking-wider text-[#8A8378]">
              <span>CAMPUS: IIT KANPUR, INDIA</span>
              <span className="hidden sm:inline text-white/20">•</span>
              <span>EST. 2024</span>
              <span className="hidden sm:inline text-white/20">•</span>
              <span>AYURVEDIC SIGNAL INTELLIGENCE</span>
            </div>
          </div>

          {/* Top Right: Monospaced Clinical Advisory Box */}
          <div className="lg:col-span-5 p-6 sm:p-8 md:p-12 lg:p-14 bg-white/[0.01] flex flex-col justify-between border-t lg:border-t-0 border-white/[0.08]">
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="inline-flex items-center px-2 py-0.5 text-[10px] font-mono tracking-[0.2em] uppercase text-[#B8935A] bg-white/[0.03] border border-white/10 rounded-sm">
                  CLINICAL NOTICE
                </span>
                <span className="text-[10px] font-mono tracking-wider text-[#8A8378]">
                  REF: SV-MED-2026
                </span>
              </div>
              <p className="text-[11px] sm:text-xs font-mono leading-relaxed text-[#8A8378] uppercase tracking-wider">
                SPANDAVIDYA IS AN ASSISTIVE PRE-SCREENING & INTEGRATIVE WELLNESS TECHNOLOGY PLATFORM. IT DOES NOT PROVIDE FORMAL MEDICAL DIAGNOSES OR REPLACE EMERGENCY SERVICES. IN AN ACUTE MEDICAL EMERGENCY, CONTACT LOCAL EMERGENCY SERVICES (112) IMMEDIATELY.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between">
              <button
                type="button"
                onClick={() => setIsDisclaimerOpen(true)}
                className="text-[10px] font-mono uppercase tracking-[0.18em] text-[#D4B896] hover:text-white underline underline-offset-4 transition-colors"
              >
                VIEW FULL MEDICAL ADVISORY [→]
              </button>
              <span className="text-[10px] font-mono tracking-widest text-[#8A8378]">
                SECURE PLATFORM
              </span>
            </div>
          </div>
        </div>

        {/* ============================================================ */}
        {/* MAIN COLUMNS GRID: 5 Dedicated Sections with Thin Borders    */}
        {/* ============================================================ */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 border-b border-white/[0.08]">
          
          {/* ------------------------------------------------------------ */}
          {/* SECTION 1 — BRAND                                           */}
          {/* ------------------------------------------------------------ */}
          <div className="p-6 sm:p-8 lg:p-10 border-b md:border-b-0 md:border-r border-white/[0.08] flex flex-col justify-between">
            <div>
              {/* Section badge */}
              <div className="mb-6">
                <span className="inline-flex items-center px-2 py-0.5 text-[10px] font-mono tracking-[0.2em] uppercase text-[#D4B896] bg-white/[0.03] border border-white/10 rounded-sm">
                  SPANDAVIDYA
                </span>
              </div>

              {/* Logo and Name */}
              <div className="flex items-center gap-3 mb-6">
                <img
                  src={branding.logo}
                  alt={`${branding.title} Logo`}
                  className="h-8 w-auto object-contain brightness-110"
                  loading="lazy"
                />
                <span className="font-serif text-2xl font-light tracking-wide text-[#F8F5EF]">
                  {branding.title}
                </span>
              </div>

              {/* Main Brand Statement */}
              <h2 className="font-serif text-lg sm:text-xl font-normal tracking-tight text-[#F8F5EF] leading-snug uppercase mb-4">
                AI-POWERED HEALTHCARE.
                <br />
                <span className="text-[#D4B896]">ROOTED IN CARE.</span>
              </h2>

              {/* Concise Description */}
              <p className="text-xs sm:text-[13px] leading-relaxed text-[#9E988E] mb-6 font-normal">
                SpandaVidya brings together artificial intelligence, computer vision, and Ayurvedic knowledge to create accessible digital healthcare experiences.
              </p>
            </div>

            {/* Technology Statement */}
            <div className="pt-4 border-t border-white/[0.06]">
              <div className="inline-block text-[10px] font-mono tracking-[0.2em] text-[#D4B896] uppercase bg-white/[0.02] border border-white/5 px-2.5 py-1.5 rounded-sm">
                AI • COMPUTER VISION • AYURVEDA
              </div>
            </div>
          </div>

          {/* ------------------------------------------------------------ */}
          {/* SECTION 2 — EXPLORE                                         */}
          {/* ------------------------------------------------------------ */}
          <div className="p-6 sm:p-8 lg:p-10 border-b md:border-b-0 md:border-r border-white/[0.08] flex flex-col justify-between">
            <div>
              <div className="mb-6">
                <span className="inline-flex items-center px-2 py-0.5 text-[10px] font-mono tracking-[0.2em] uppercase text-[#D4B896] bg-white/[0.03] border border-white/10 rounded-sm">
                  EXPLORE
                </span>
              </div>

              <ul className="space-y-3.5" role="list">
                {exploreLinks.map((item) => (
                  <li key={item.label}>
                    {item.isExternal ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center justify-between text-xs sm:text-[13px] text-[#A19C91] hover:text-[#F8F5EF] transition-colors duration-200 py-0.5"
                      >
                        <span className="transition-transform duration-200 group-hover:translate-x-1">
                          {item.label}
                        </span>
                        <span className="flex items-center gap-1.5">
                          {item.badge && (
                            <span className="text-[9px] font-mono px-1 py-0.2 rounded bg-[#B8935A]/15 text-[#D4B896] border border-[#B8935A]/30">
                              {item.badge}
                            </span>
                          )}
                          <svg
                            className="w-3 h-3 text-[#8A8378] group-hover:text-[#D4B896] transition-colors"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                            aria-hidden="true"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </span>
                      </a>
                    ) : (
                      <a
                        href={item.href}
                        onClick={(e) => handleItemClick(e, item)}
                        className="group flex items-center justify-between text-xs sm:text-[13px] text-[#A19C91] hover:text-[#F8F5EF] transition-colors duration-200 py-0.5"
                      >
                        <span className="transition-transform duration-200 group-hover:translate-x-1">
                          {item.label}
                        </span>
                        <span className="opacity-0 group-hover:opacity-100 transition-opacity text-[#D4B896] font-mono text-xs">
                          →
                        </span>
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-6 mt-6 border-t border-white/[0.06] text-[10px] font-mono tracking-widest text-[#8A8378] uppercase">
              INDEX • SECTIONS 01-06
            </div>
          </div>

          {/* ------------------------------------------------------------ */}
          {/* SECTION 3 — PLATFORM                                        */}
          {/* ------------------------------------------------------------ */}
          <div className="p-6 sm:p-8 lg:p-10 border-b md:border-b-0 md:border-r border-white/[0.08] flex flex-col justify-between">
            <div>
              <div className="mb-6">
                <span className="inline-flex items-center px-2 py-0.5 text-[10px] font-mono tracking-[0.2em] uppercase text-[#D4B896] bg-white/[0.03] border border-white/10 rounded-sm">
                  PLATFORM
                </span>
              </div>

              <ul className="space-y-3.5" role="list">
                {platformItems.map((item) => (
                  <li key={item.label}>
                    {item.isNonClickable ? (
                      <div className="flex items-center justify-between text-xs sm:text-[13px] text-[#6E695F] py-0.5 select-none">
                        <span>{item.label}</span>
                        {item.badge && (
                          <span className="text-[9px] font-mono px-1 py-0.2 rounded bg-white/[0.03] text-[#8A8378] border border-white/5">
                            {item.badge}
                          </span>
                        )}
                      </div>
                    ) : (
                      <a
                        href={item.href}
                        onClick={(e) => handleItemClick(e, item)}
                        className="group flex items-center justify-between text-xs sm:text-[13px] text-[#A19C91] hover:text-[#F8F5EF] transition-colors duration-200 py-0.5"
                      >
                        <span className="transition-transform duration-200 group-hover:translate-x-1">
                          {item.label}
                        </span>
                        {item.badge && (
                          <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-white/[0.04] text-[#D4B896] border border-white/10 group-hover:border-[#B8935A]/50">
                            {item.badge}
                          </span>
                        )}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-6 mt-6 border-t border-white/[0.06] text-[10px] font-mono tracking-widest text-[#8A8378] uppercase">
              STATUS • MULTI-MODAL PIPELINE
            </div>
          </div>

          {/* ------------------------------------------------------------ */}
          {/* SECTION 4 — TRUST & INFORMATION                             */}
          {/* ------------------------------------------------------------ */}
          <div className="p-6 sm:p-8 lg:p-10 border-b md:border-b-0 md:border-r border-white/[0.08] flex flex-col justify-between">
            <div>
              <div className="mb-6">
                <span className="inline-flex items-center px-2 py-0.5 text-[10px] font-mono tracking-[0.2em] uppercase text-[#D4B896] bg-white/[0.03] border border-white/10 rounded-sm">
                  INFORMATION
                </span>
              </div>

              <ul className="space-y-3.5" role="list">
                {informationLinks.map((item) => (
                  <li key={item.label}>
                    {item.isRoute ? (
                      <Link
                        to={item.href || '/'}
                        className="group flex items-center justify-between text-xs sm:text-[13px] text-[#A19C91] hover:text-[#F8F5EF] transition-colors duration-200 py-0.5"
                      >
                        <span className="transition-transform duration-200 group-hover:translate-x-1">
                          {item.label}
                        </span>
                        <span className="opacity-0 group-hover:opacity-100 transition-opacity text-[#D4B896] font-mono text-xs">
                          →
                        </span>
                      </Link>
                    ) : item.isAction ? (
                      <button
                        type="button"
                        onClick={(e) => handleItemClick(e, item)}
                        className="group w-full flex items-center justify-between text-xs sm:text-[13px] text-[#A19C91] hover:text-[#F8F5EF] transition-colors duration-200 py-0.5 text-left"
                      >
                        <span className="transition-transform duration-200 group-hover:translate-x-1">
                          {item.label}
                        </span>
                        <span className="text-[9px] font-mono px-1 py-0.5 rounded bg-white/[0.04] text-[#B8935A] border border-white/10">
                          READ
                        </span>
                      </button>
                    ) : (
                      <a
                        href={item.href}
                        onClick={(e) => handleItemClick(e, item)}
                        className="group flex items-center justify-between text-xs sm:text-[13px] text-[#A19C91] hover:text-[#F8F5EF] transition-colors duration-200 py-0.5"
                      >
                        <span className="transition-transform duration-200 group-hover:translate-x-1">
                          {item.label}
                        </span>
                        {item.badge && (
                          <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-white/[0.04] text-[#D4B896] border border-white/10">
                            {item.badge}
                          </span>
                        )}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-6 mt-6 border-t border-white/[0.06] text-[10px] font-mono tracking-widest text-[#8A8378] uppercase">
              ETHICS • CLINICAL STANDARDS
            </div>
          </div>

          {/* ------------------------------------------------------------ */}
          {/* SECTION 5 — CONNECT & CTA                                   */}
          {/* ------------------------------------------------------------ */}
          <div className="p-6 sm:p-8 lg:p-10 flex flex-col justify-between bg-white/[0.01]">
            <div>
              <div className="mb-6">
                <span className="inline-flex items-center px-2 py-0.5 text-[10px] font-mono tracking-[0.2em] uppercase text-[#D4B896] bg-white/[0.03] border border-white/10 rounded-sm">
                  CONNECT
                </span>
              </div>

              {/* Direct emails */}
              <div className="space-y-3 mb-6">
                <div>
                  <span className="block text-[10px] font-mono tracking-widest text-[#8A8378] uppercase mb-1">
                    PRIMARY INQUIRY
                  </span>
                  <a
                    href="mailto:contact@spandavidya.ai"
                    className="text-xs sm:text-[13px] text-[#F8F5EF] hover:text-[#D4B896] transition-colors font-mono break-all"
                  >
                    contact@spandavidya.ai
                  </a>
                </div>

                {contact.supportEmail && (
                  <div>
                    <span className="block text-[10px] font-mono tracking-widest text-[#8A8378] uppercase mb-1">
                      SUPPORT & ESCALATIONS
                    </span>
                    <a
                      href={`mailto:${contact.supportEmail}`}
                      className="text-xs text-[#A19C91] hover:text-[#D4B896] transition-colors font-mono break-all"
                    >
                      {contact.supportEmail}
                    </a>
                  </div>
                )}
              </div>

              {/* Verified Social Links */}
              <div className="mb-6">
                <span className="block text-[10px] font-mono tracking-widest text-[#8A8378] uppercase mb-2">
                  DISPATCH CHANNELS
                </span>
                <div className="flex flex-wrap gap-2">
                  {social.github && (
                    <a
                      href={social.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-sm text-[11px] font-mono text-[#A19C91] hover:text-[#F8F5EF] bg-white/[0.03] border border-white/10 hover:border-[#B8935A] hover:bg-white/[0.06] transition-all"
                      aria-label="SpandaVidya on GitHub"
                    >
                      <span>GITHUB</span>
                      <span className="text-[#D4B896] text-[10px]">↗</span>
                    </a>
                  )}
                  {social.linkedin && (
                    <a
                      href={social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-sm text-[11px] font-mono text-[#A19C91] hover:text-[#F8F5EF] bg-white/[0.03] border border-white/10 hover:border-[#B8935A] hover:bg-white/[0.06] transition-all"
                      aria-label="SpandaVidya on LinkedIn"
                    >
                      <span>LINKEDIN</span>
                      <span className="text-[#D4B896] text-[10px]">↗</span>
                    </a>
                  )}
                  {social.twitter && (
                    <a
                      href={social.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-sm text-[11px] font-mono text-[#A19C91] hover:text-[#F8F5EF] bg-white/[0.03] border border-white/10 hover:border-[#B8935A] hover:bg-white/[0.06] transition-all"
                      aria-label="SpandaVidya on X"
                    >
                      <span>X / TWITTER</span>
                      <span className="text-[#D4B896] text-[10px]">↗</span>
                    </a>
                  )}
                </div>
              </div>
            </div>

            {/* Compact CTA block */}
            <div className="pt-6 border-t border-white/[0.08]">
              <p className="text-[11px] font-mono tracking-wider text-[#D4B896] uppercase mb-3">
                BUILD THE FUTURE OF DIGITAL HEALTH.
              </p>
              <a
                href={`#${HASH_ROUTES.CATARACT_DETECTION}`}
                onClick={(e) => {
                  e.preventDefault();
                  navigateToSection(`#${HASH_ROUTES.CATARACT_DETECTION}`);
                }}
                className="group w-full inline-flex items-center justify-between px-4 py-3 text-xs font-mono tracking-widest uppercase text-[#080706] bg-[#D4B896] hover:bg-[#F8F5EF] rounded-sm transition-all duration-200 font-medium active:scale-[0.99] shadow-sm"
              >
                <span>EXPLORE SPANDAVIDYA</span>
                <span className="transform group-hover:translate-x-1 transition-transform duration-200">
                  →
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* ============================================================ */}
        {/* SUBTLE TECHNOLOGY & TRUST ARCHITECTURE LAYER                 */}
        {/* ============================================================ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-b border-white/[0.08] bg-white/[0.01]">
          {techArchitecture.map((item, idx) => (
            <div
              key={item.step}
              className={`p-6 sm:p-7 border-b sm:border-b-0 ${
                idx !== techArchitecture.length - 1 ? 'lg:border-r border-white/[0.08]' : ''
              } ${idx % 2 === 0 ? 'sm:border-r border-white/[0.08]' : ''}`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-mono tracking-[0.2em] text-[#B8935A] uppercase">
                  {item.step}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
              </div>
              <h4 className="text-xs font-mono font-semibold tracking-wider text-[#F8F5EF] uppercase mb-1.5">
                {item.title}
              </h4>
              <p className="text-[11px] font-mono leading-relaxed text-[#8A8378]">
                {item.detail}
              </p>
            </div>
          ))}
        </div>

        {/* ============================================================ */}
        {/* BOTTOM AREA: Legal Bar & Monospaced Signatures               */}
        {/* ============================================================ */}
        <div className="p-6 sm:p-8 lg:px-10 lg:py-8 flex flex-col lg:flex-row items-center justify-between gap-6 text-[11px] font-mono tracking-wider text-[#8A8378]">
          
          {/* Left: Copyright */}
          <div className="text-center lg:text-left">
            <span className="text-[#A19C91]">
              © 2026 SPANDAVIDYA. ALL RIGHTS RESERVED.
            </span>
          </div>

          {/* Center: Core Pillars */}
          <div className="text-center text-[10px] text-[#8A8378] tracking-[0.16em] uppercase">
            AI-POWERED HEALTHCARE • AYURVEDIC INTELLIGENCE • COMPUTER VISION
          </div>

          {/* Right: Quick Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-[11px]">
            <Link
              to={ROUTES.PRIVACY}
              className="text-[#8A8378] hover:text-[#D4B896] transition-colors uppercase tracking-wider"
            >
              PRIVACY
            </Link>
            <span className="text-white/20" aria-hidden="true">•</span>
            <Link
              to={ROUTES.TERMS}
              className="text-[#8A8378] hover:text-[#D4B896] transition-colors uppercase tracking-wider"
            >
              TERMS
            </Link>
            <span className="text-white/20" aria-hidden="true">•</span>
            <button
              type="button"
              onClick={() => setIsDisclaimerOpen(true)}
              className="text-[#8A8378] hover:text-[#D4B896] transition-colors uppercase tracking-wider cursor-pointer"
            >
              MEDICAL DISCLAIMER
            </button>
          </div>
        </div>

        {/* Technical Footer Signature Strip */}
        <div className="py-3 px-6 lg:px-10 bg-black/40 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-2 text-[9px] font-mono tracking-[0.25em] text-[#6E695F] uppercase">
          <div>
            BUILT WITH INTELLIGENCE. DESIGNED FOR CARE.
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#5C6E52]" />
            <span>NODE: IIT KANPUR // DISTRIBUTED HEALTH-TECH</span>
          </div>
        </div>

      </div>

      {/* ============================================================ */}
      {/* ACCESSIBLE MEDICAL DISCLAIMER MODAL                          */}
      {/* ============================================================ */}
      {isDisclaimerOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="disclaimer-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm transition-opacity animate-fadeIn"
          onClick={() => setIsDisclaimerOpen(false)}
        >
          <div
            className="relative w-full max-w-2xl bg-[#0E0D0A] border border-white/15 p-6 sm:p-8 md:p-10 shadow-2xl text-[#F8F5EF] max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
            style={{ borderRadius: '2px' }}
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4 pb-4 border-b border-white/10 mb-6">
              <div>
                <span className="inline-flex items-center px-2 py-0.5 text-[10px] font-mono tracking-[0.2em] uppercase text-[#D4B896] bg-white/[0.03] border border-white/10 rounded-sm mb-2">
                  REGULATORY & CLINICAL NOTICE
                </span>
                <h3 id="disclaimer-modal-title" className="font-serif text-xl sm:text-2xl font-light text-[#F8F5EF]">
                  SpandaVidya Medical & Research Disclaimer
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setIsDisclaimerOpen(false)}
                className="w-8 h-8 flex items-center justify-center rounded border border-white/15 text-[#A19C91] hover:text-white hover:border-[#D4B896] transition-colors"
                aria-label="Close medical disclaimer"
              >
                ✕
              </button>
            </div>

            {/* Modal Content */}
            <div className="space-y-4 text-xs sm:text-[13px] leading-relaxed text-[#9E988E] font-normal">
              <p>
                <strong className="text-[#F8F5EF] font-medium uppercase font-mono text-xs tracking-wider block mb-1">
                  1. Assistive Pre-Screening Only
                </strong>
                SpandaVidya is an investigational health-technology initiative that combines computer vision and Ayurvedic signal intelligence. The assessments provided by the platform—including cataract risk classification and Ayurvedic dosha pulse analysis—are for informational, educational, and pre-screening purposes only.
              </p>

              <p>
                <strong className="text-[#F8F5EF] font-medium uppercase font-mono text-xs tracking-wider block mb-1">
                  2. Not a Diagnostic Device
                </strong>
                SpandaVidya does not deliver formal medical diagnoses, therapeutic prescriptions, or definitive disease management recommendations. It is designed to augment and assist, not replace, clinical examination by board-certified ophthalmologists, licensed Ayurvedic Vaidyas, or general practitioners.
              </p>

              <p>
                <strong className="text-[#F8F5EF] font-medium uppercase font-mono text-xs tracking-wider block mb-1">
                  3. Emergency Situations
                </strong>
                If you are experiencing acute eye trauma, sudden vision loss, severe pain, or any medical emergency, do not wait for automated digital assessments. Seek immediate attention at a hospital emergency room or contact emergency services (112 in India / 911 in the US).
              </p>

              <p>
                <strong className="text-[#F8F5EF] font-medium uppercase font-mono text-xs tracking-wider block mb-1">
                  4. Privacy & Data Architecture
                </strong>
                All image uploads and user queries are routed via secure TLS 1.3 encrypted endpoints and processed with strict access governance. We prioritize user privacy and objective algorithmic transparency.
              </p>
            </div>

            {/* Modal Footer */}
            <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between">
              <span className="text-[10px] font-mono text-[#8A8378] uppercase">
                DOCUMENT CODE: SV-LEGAL-MED-01
              </span>
              <button
                type="button"
                onClick={() => setIsDisclaimerOpen(false)}
                className="px-4 py-2 text-xs font-mono uppercase tracking-widest text-[#080706] bg-[#D4B896] hover:bg-[#F8F5EF] rounded-sm transition-colors font-medium"
              >
                ACKNOWLEDGE & CLOSE
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
