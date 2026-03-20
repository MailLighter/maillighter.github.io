/**
 * Site Configuration
 */

import type { SocialLinks, LegalConfig } from '../lib/types';

export const name = import.meta.env.SITE_NAME || 'MailLighter';

export const description =
  import.meta.env.SITE_DESCRIPTION ||
  'The Outlook plugin that cleans your emails in one click. Lighter emails, lighter impact.';

export const url = import.meta.env.SITE_URL || 'http://localhost:4321';

export const author = import.meta.env.SITE_AUTHOR || 'MailLighter';

export const logo = '/images/logo-full.png';

export const ogImage = '/images/og-image.png';

export const social: SocialLinks = {
  github: 'https://github.com/maillighter',
};

export const legal: LegalConfig = {
  privacyEmail: 'privacy@maillighter.com',
  legalEmail: 'legal@maillighter.com',
  lastUpdated: 'March 2026',
};
