/**
 * Navigation Configuration
 */

import type { Navigation } from '../lib/types';

export const navigation: Navigation = {
  header: {
    main: [
      { label: 'Features', href: '/#features' },
      { label: 'Benefits', href: '/#benefits' },
      { label: 'FAQ', href: '/faq' },
      { label: 'Docs', href: '/docs', feature: 'docs' },
    ],
    cta: [
      { label: 'Try it now', href: 'https://appsource.microsoft.com/', variant: 'primary' },
    ],
  },

  footer: {
    product: [
      { label: 'Features', href: '/#features' },
      { label: 'Benefits', href: '/#benefits' },
      { label: 'FAQ', href: '/faq' },
      { label: 'Documentation', href: '/docs', feature: 'docs' },
    ],
    solutions: [
      { label: 'Enterprise', href: '/#audience' },
      { label: 'Contact', href: '/contact' },
    ],
    resources: [
      { label: 'Documentation', href: '/docs', feature: 'docs' },
    ],
    company: [
      { label: 'Contact', href: '/contact' },
    ],
    legal: [
      { label: 'Privacy', href: '/privacy' },
      { label: 'Terms', href: '/terms' },
    ],
  },
};
