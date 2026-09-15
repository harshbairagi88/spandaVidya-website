# SpandaVidya AI — Healthcare Technology Platform

> An AI-powered healthcare technology platform and research initiative developing computer vision, multimodal signal intelligence, non-invasive physiological sensing, and integrative clinical intelligence across life stages.

![React](https://img.shields.io/badge/React-19.2-blue?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8-blue?logo=typescript)
![Vite](https://img.shields.io/badge/Vite-6.2-purple?logo=vite)
![React Router](https://img.shields.io/badge/React_Router-7.18-red?logo=react-router)
![GSAP](https://img.shields.io/badge/GSAP-3.15-green?logo=greensock)
![License](https://img.shields.io/badge/License-UNLICENSED-lightgrey)

---

## 🔬 Platform Overview

**SpandaVidya AI** bridges ancient Ayurvedic functional principles (*Naadi Pariksha* and systemic diagnostics) with modern machine learning, high-resolution optical computer vision, and radio-frequency signal intelligence.

Rather than a single diagnostic product, SpandaVidya operates as an integrated healthcare technology ecosystem focused on:

1. **AI-Assisted Diagnostics & Computer Vision**: Optical classification of anterior segment ocular conditions (Cataract AI).
2. **Early-Life Pediatric Health**: AI-guided acoustic and behavioral understanding for infant development (InfantMind).
3. **Multimodal Signal Intelligence**: Non-invasive micro-Doppler radar, RF sensing, and PPG arterial pulse waveform analysis.
4. **Conversational Healthcare Intelligence**: Contextual, non-diagnostic health orientation and integrative medicine assistance (Veda AI).
5. **Connected Processing Infrastructure**: Unified processing layer linking sensors, clinical devices, and AI inference models.

---

## 📱 Flagship Applications Showcase

The interactive applications showcase (`ApplicationsSection.tsx`) highlights SpandaVidya's three core product pillars:

### 01 / SpandaVidya AI — Cataract AI
- **Domain**: Eye / Cataract Assessment & Computer Vision
- **Technology**: EfficientNet-B3 deep convolutional networks, anterior segment optical pre-processing, region-of-interest segmentation.
- **Workflow Pipeline**: 5-step clinical evaluation (`CAPTURE` → `VALIDATE` → `ANALYZE` → `PREDICT` → `RESULT`).
- **Production Asset**: `public/app/spandavidyaai.png`

### 02 / InfantMind
- **Domain**: Early-Life Health & Developmental Understanding
- **Technology**: Neuro-acoustic frequency spectrum decomposition, acoustic cry classification, caregiver guidance algorithms.
- **Workflow Pipeline**: Real-time spectral analysis, distress pattern categorization, and structured developmental guidance.
- **Production Asset**: `public/app/babyapp.png`

### 03 / Signal Intelligence — RF & Pulse Analytics
- **Domain**: Non-Invasive Contactless Sensing & Arterial Waveform Intelligence
- **Technology**: Micro-Doppler radio-frequency radar, multi-position photoplethysmography (PPG), digital *Naadi* arterial pulse decomposition.
- **Workflow Pipeline**: Sub-millimeter mechanical wave acquisition, motion-artifact filtering, and classical functional marker mapping.
- **Production Asset**: `public/app/rfapp.png`

---

## 💬 Veda AI Consultation

SpandaVidya integrates **Veda AI**, a conversational clinical orientation agent delivering integrative health insights and Dosha context:
- **Application URL**: [https://naadi-raksha-liart.vercel.app/](https://naadi-raksha-liart.vercel.app/)
- **Integration**: Direct one-click access via the primary Hero CTA (`CHAT WITH VEDA AI →`) opening in a secure, external tab.

---

## 🏛️ System Architecture & Research Domains

The platform architecture (`HealthcareIntelligenceSection.tsx` & `TechSection.tsx`) organizes SpandaVidya into five core domains:

```
                          ┌───────────────────────────┐
                          │   SPANDAVIDYA PLATFORM    │
                          │    Research Initiative    │
                          └─────────────┬─────────────┘
                                        │
        ┌───────────────────┬───────────┴───────────┬───────────────────┐
        ▼                   ▼                       ▼                   ▼
┌──────────────┐    ┌──────────────┐        ┌──────────────┐    ┌──────────────┐
│Healthcare AI │    │Health Products│       │Research & Dev│    │Life-Stage &  │
│ Consultation │    │& Device Layer│        │  Pipeline    │    │Specialized AI│
└──────────────┘    └──────────────┘        └──────────────┘    └──────────────┘
```

1. **Healthcare AI**: Human inquiry → context analysis → holistic health marker orientation.
2. **Health Products**: Consumer sensors, optical cameras, and wearable pulse-sensing devices.
3. **Research & Development**: Active multi-centric clinical validation and model benchmarking.
4. **Care Across Life Stages**: Infant monitoring through geriatric preventive wellness.
5. **Specialized Systems**: Point-of-care anterior segment triage and digital arterial pulse profiling.

---

## 🗺️ Pages & Routing Architecture

Built using **React Router v7** with code-splitting via `React.lazy` and `Suspense`:

| Route | Layout | Page Component | Description |
| :--- | :--- | :--- | :--- |
| `/` | `MainLayout` | `HomePage.tsx` | Interactive single-page experience assembling all feature sections |
| `/privacy` | `StaticLayout` | `PrivacyPage.tsx` | Complete privacy policy, data governance, and HIPAA/GDPR compliance |
| `/terms` | `StaticLayout` | `TermsPage.tsx` | Terms of service, platform usage rules, and medical disclaimers |
| `*` | `StaticLayout` | `NotFoundPage.tsx` | 404 error recovery page with direct home navigation |

### Section Hash Anchors
Smooth scrolling is handled globally by `router/ScrollManager.tsx`:
- `#home`: Hero section with dual CTAs (`OUR SERVICES →` and `CHAT WITH VEDA AI →`)
- `#cataract-detection`: 3-app applications showcase (`ApplicationsSection.tsx`)
- `#infrastructure` / `#technology` / `#approach`: Signal intelligence processing graph (`TechSection.tsx`)
- `#differentiation`: Healthcare platform architecture and 5 research domains (`HealthcareIntelligenceSection.tsx`)
- `#mission`: Mission statement and research objectives (`Mission.tsx`)
- `#philosophy`: Classical Ayurvedic doshas — Vata, Pitta, Kapha (`PhilosophySection.tsx`)
- `#team`: Multidisciplinary scientific and clinical team (`Teams.tsx`)
- `#contact`: Institutional inquiries and partnership channels (`Contact.tsx`)

---

## 🎨 Design System

All aesthetic tokens are centralized in `theme.ts`:
- **Palette**: Editorial Ivory (`#FAF7F0`), Warm Accent Gold (`#8C6B3E`), Deep Charcoal (`#1A1814`), Soft Olive (`#5C6E52`).
- **Typography**: Editorial Serif (`Playfair Display` / `Cinzel`), Technical Monospace (`JetBrains Mono`), Clean UI Sans (`Inter`).
- **Surface Elevation**: Layered glassmorphism with subtle borders (`rgba(140, 107, 62, 0.22)`) and soft ambient shadows.

---

## 🚀 Getting Started

### Prerequisites
- **Node.js**: `>= 18.0.0`
- **npm**: `>= 9.0.0`

### 1. Installation
```bash
git clone https://github.com/spandavidya/platform.git
cd platform
npm install
```

### 2. Development
Start the local Vite development server:
```bash
npm run dev
```
*(Default server: `http://localhost:5173/`)*

### 3. Production Build
Verify TypeScript static typing and create an optimized production bundle:
```bash
# Type check
npx tsc --noEmit

# Production build
npm run build
```

### 4. Preview Build
Locally preview the generated `dist/` production assets:
```bash
npm run preview
```

---

## 📁 Repository Structure

For the detailed file-by-file directory map, refer to [PROJECT_STRUCTURE.md](./PROJECT_STRUCTURE.md).

---

## ⚖️ Medical Disclaimer

SpandaVidya AI and its research tools are engineered for screening assistance, physiological research, and wellness orientation. They do not constitute diagnostic medical devices or direct replacements for licensed professional medical consultations.

---

## 👥 Research & Organization

**SpandaVidya Research Initiative**
- **Website**: [https://www.spandavidyaai.com/](https://www.spandavidyaai.com/)
- **Contact**: `contact@spandavidya.ai`
- **GitHub**: [https://github.com/spandavidya](https://github.com/spandavidya)

<p align="center">Built with ❤️ by <strong>SAM</strong></p>
