export interface SEOMetadata {
  readonly title: string;
  readonly description: string;
}

export const HOME_SEO = {
  title: "spandaVidya | AI-Powered Ayurvedic Pulse Diagnosis & Digital Naadi Pariksha",
  description: "spandaVidya revolutionizes traditional Ayurvedic pulse diagnostics (Naadi Pariksha) with AI-powered signal intelligence. Get accurate, clinical-grade health assessments using advanced PPG sensors and machine learning for personalized Ayurvedic wellness.",
} as const satisfies SEOMetadata;

export const PRIVACY_SEO = {
  title: "Privacy Policy & Security | SpandaVidya",
  description: "Privacy Policy and Security guidelines for SpandaVidya AI Cataract Detection. Understand our data safety, authentication, and clinical disclosures.",
} as const satisfies SEOMetadata;

export const TERMS_SEO = {
  title: "Terms & Conditions | SpandaVidya",
  description: "Terms and Conditions of service for the SpandaVidya AI Cataract Detection and Consultation platform.",
} as const satisfies SEOMetadata;

export const NOT_FOUND_SEO = {
  title: "404 Page Not Found | SpandaVidya",
  description: "The page you are looking for does not exist or has been moved.",
} as const satisfies SEOMetadata;
