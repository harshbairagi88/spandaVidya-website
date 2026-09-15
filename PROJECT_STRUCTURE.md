# Project Structure

This document provides a comprehensive overview of the **SpandaVidya AI Healthcare Platform** repository structure, detailing directory organization, architectural patterns, and file responsibilities.

```
├── .gitignore
├── App.tsx                           # Root application component with ErrorBoundary and AppRouter
├── hooks.ts                          # Shared custom React hooks (useScrollReveal, useCountUp, useSEO)
├── htaccess                          # Apache server redirection & routing rules
├── index.html                        # HTML5 entrypoint with metadata, font imports, and root mounting point
├── index.tsx                         # React 19 bootstrap entrypoint
├── metadata.json                     # Project environment and configuration metadata
├── package.json                      # Project dependencies, scripts, and package metadata
├── package-lock.json                 # Pinned dependency lockfile
├── PROJECT_STRUCTURE.md              # Project file map and architecture guide (this file)
├── README.md                         # Comprehensive platform overview, setup, and documentation
├── robots.txt                        # Web crawler instructions
├── sitemap.xml                       # Search engine sitemap
├── theme.ts                          # Design system tokens (colors, typography, spacing, shadows, radius)
├── tsconfig.json                     # TypeScript compiler configuration with path aliases
├── types.ts                          # Core TypeScript data contracts and application interfaces
├── vercel.json                       # Vercel deployment and SPA routing configuration
├── vite.config.ts                    # Vite build configuration with React plugin and path aliases
│
├── components/                       # Modular, reusable UI components
│   ├── Button.tsx                    # Theme-aware interactive button supporting primary, secondary, outline & links
│   ├── Card.tsx                      # Framed card surface with hover transitions and theme tokens
│   ├── CataractAppPreview.tsx        # Device frame mockup for Cataract AI mobile application
│   ├── CataractWorkflow.tsx          # Step-by-step clinical workflow component for Cataract AI
│   ├── ErrorBoundary.tsx             # React error boundary component for graceful fault tolerance
│   ├── Footer.tsx                    # Technical editorial research footer with interactive status & modals
│   ├── GlobalBackground.tsx          # Ambient animated SVG background grid and fluid gradients
│   ├── GlobalLoader.tsx              # Fallback loading spinner for React Suspense lazy routes
│   ├── Navbar.tsx                    # Floating sticky navigation bar with desktop links, mobile drawer, and CTA
│   └── TechStackItem.tsx             # Technical badge/item for rendering architecture infrastructure items
│
├── data/                             # Content datasets, configuration, and data contracts
│   ├── index.ts                      # Barrel export unifying configuration and content modules
│   ├── config/                       # Application configuration constants
│   │   ├── branding.ts               # Brand assets, logos, and taglines
│   │   ├── company.ts                # Corporate identity, founding year, registration, and status
│   │   ├── contact.ts                # Communication channels, addresses, and clinical inquiry endpoints
│   │   ├── index.ts                  # Barrel export for all configuration data
│   │   ├── navigation.ts             # Navigation menu links and section anchor mapping
│   │   ├── seo.ts                    # Meta titles, descriptions, and OpenGraph defaults for all routes
│   │   ├── social.ts                 # Social media URLs and community links
│   │   └── urls.ts                   # External product URLs, including Veda AI chatbot link
│   └── content/                      # Content matrices, editorial copy, and application data
│       ├── applications.ts           # Data for 3 flagship apps (Cataract AI, InfantMind, RF Signal Intelligence)
│       ├── approach.ts               # Core research and scientific methodology data
│       ├── cataract-detection.ts     # Cataract AI technical specifications, workflow, and model details
│       ├── differentiation.ts        # Healthcare intelligence platform editorial content across 5 domains
│       ├── index.ts                  # Barrel export for content datasets
│       ├── philosophy.ts             # Classical Ayurvedic dosha principles (Vata, Pitta, Kapha) and elements
│       ├── privacy.ts                # HIPAA and GDPR privacy policy content
│       ├── progress.ts               # Clinical development milestones and pipeline roadmap
│       ├── team.ts                   # Multidisciplinary research team bios, roles, and avatars
│       └── terms.ts                  # Clinical and web platform terms of service
│
├── layouts/                          # Route layout wrappers
│   ├── MainLayout.tsx                # Main layout with Navbar, Outlet, and Technical Footer
│   └── StaticLayout.tsx              # Static content layout for legal and standalone documentation pages
│
├── pages/                            # Top-level view components
│   ├── HomePage.tsx                  # Primary interactive landing page assembling all feature sections
│   ├── NotFoundPage.tsx              # 404 error page with route recovery and return home navigation
│   ├── PrivacyPage.tsx               # Dedicated privacy policy document page
│   └── TermsPage.tsx                 # Dedicated terms and conditions document page
│
├── public/                           # Static assets served at root
│   ├── app/                          # High-resolution production application screenshots
│   │   ├── babyapp.png               # InfantMind mobile application screenshot
│   │   ├── rfapp.png                 # RF Signal Intelligence application screenshot
│   │   └── spandavidyaai.png         # SpandaVidya AI / Cataract AI application screenshot
│   ├── dheeraj.jpeg                  # Team member avatar (Dr. Dheeraj)
│   ├── dilip.png                     # Team member avatar (Dr. Dilip)
│   ├── harsh.jpg                     # Team member avatar (Harsh Bairagi)
│   ├── jyoti.jpeg                    # Team member avatar (Dr. Jyoti)
│   ├── logo2.png                     # SpandaVidya brand icon / logo
│   ├── mahendra.jpeg                 # Team member avatar (Dr. Mahendra)
│   ├── rahul.jpeg                    # Team member avatar (Dr. Rahul)
│   ├── rakesh.jpeg                   # Team member avatar (Dr. Rakesh)
│   ├── sameer.jpg                    # Team member avatar (Sameer Khan)
│   ├── robots.txt                    # Search crawler directive
│   ├── site.webmanifest              # Progressive Web App manifest
│   └── sitemap.xml                   # XML sitemap
│
├── router/                           # Client-side routing infrastructure
│   ├── AppRouter.tsx                 # React Router v7 routes configuration with Suspense code-splitting
│   ├── index.ts                      # Barrel export for router modules
│   ├── routes.ts                     # URL route constants and in-page anchor constants
│   └── ScrollManager.tsx             # Smooth scroll coordinator for hash navigation and route transitions
│
└── sections/                         # Modular landing page sections
    ├── ApplicationsSection.tsx       # 3-App Interactive Showcase (Cataract AI, InfantMind, RF Signal Intelligence)
    ├── Challenge.tsx                 # The Challenge: Bridging Ancient Wisdom & Precise Instrumentation
    ├── Contact.tsx                   # Interactive Contact Section with inquiry channels & direct email
    ├── HealthcareIntelligenceSection.tsx # 5-Domain Ecosystem (AI Interaction, Products, R&D, Life-Stages, Systems)
    ├── Hero.tsx                      # Hero Section with dual CTAs ("OUR SERVICES →", "CHAT WITH VEDA AI →")
    ├── Mission.tsx                   # Core mission statement and vision cards
    ├── PhilosophySection.tsx         # Ayurvedic foundations (Vata, Pitta, Kapha) and systemic diagnostics
    ├── PrivacyPolicy.tsx             # Legal privacy section with table of contents and HIPAA compliance details
    ├── Teams.tsx                     # Research leadership and multidisciplinary engineering team showcase
    ├── TechSection.tsx               # Signal-to-intelligence pipeline graph & multimodal processing layers
    └── TermsAndConditions.tsx        # Legal terms section with medical liability and research usage conditions
```
