/**
 * Type Definitions for Site Configuration
 *
 * @description
 * TypeScript interfaces used across the site configuration.
 * These types are separated from config values for better maintainability.
 */

export interface NavigationItem {
  label: string;
  href: string;
  /** Feature flag key - item only shows if this feature is enabled */
  feature?: keyof FeatureFlags;
}

export interface NavigationCTA {
  label: string;
  href: string;
  variant: 'primary' | 'secondary' | 'ghost';
}

export interface HeaderNavigation {
  /** Main navigation items */
  main: NavigationItem[];
  /** CTA buttons on the right side */
  cta: NavigationCTA[];
}

export interface FooterNavigation {
  /** Product-related links */
  product: NavigationItem[];
  /** Resources like docs, blog */
  resources: NavigationItem[];
  /** Company info links */
  company: NavigationItem[];
  /** Legal links */
  legal: NavigationItem[];
}

export interface Navigation {
  header: HeaderNavigation;
  footer: FooterNavigation;
}

export interface SocialLinks {
  twitter?: string;
  github?: string;
  discord?: string;
}

export interface Address {
  street: string;
  city: string;
  state: string;
  zip: string;
  country: string;
}

export interface ContactInfo {
  email: string;
  supportEmail?: string;
  salesEmail?: string;
  address: Address;
}

export interface ContactMethod {
  icon: string;
  label: string;
  value: string;
  href: string;
}

export interface ContactFAQ {
  question: string;
  answer: string;
}

export interface LegalConfig {
  privacyEmail: string;
  legalEmail: string;
  lastUpdated: string;
}

export interface FeatureFlags {
  docs: boolean;
}

export interface AnnouncementConfig {
  enabled: boolean;
  id: string;
  text: string;
  href?: string;
  linkText?: string;
  variant: 'primary' | 'secondary' | 'gradient';
  dismissible: boolean;
}

export interface SiteConfig {
  name: string;
  description: string;
  url: string;
  author: string;
  logo: string;
  ogImage: string;
  contact: ContactInfo;
  legal: LegalConfig;
  social: SocialLinks;
  navigation: Navigation;
  features: FeatureFlags;
  announcement: AnnouncementConfig;
}


