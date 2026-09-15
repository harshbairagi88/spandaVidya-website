export interface SEOMetadata {
  readonly title: string;
  readonly description: string;
}

export const HOME_SEO = {
  title: 'SpandaVidya AI | Healthcare AI & Signal Intelligence',
  description: 'SpandaVidya AI develops healthcare technology combining AI, computer vision, signal intelligence and digital Naadi research for eye care and infant experiences.',
} as const satisfies SEOMetadata;

export const PRIVACY_SEO = {
  title: 'Privacy Policy | SpandaVidya AI',
  description: 'Read the SpandaVidya AI privacy policy for this healthcare technology platform and its digital products.',
} as const satisfies SEOMetadata;

export const TERMS_SEO = {
  title: 'Terms and Conditions | SpandaVidya AI',
  description: 'Read the terms and conditions for SpandaVidya AI healthcare technology products and research experiences.',
} as const satisfies SEOMetadata;

export const NOT_FOUND_SEO = {
  title: 'Page Not Found | SpandaVidya AI',
  description: 'The page you are looking for does not exist or has moved.',
} as const satisfies SEOMetadata;
