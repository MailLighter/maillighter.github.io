/**
 * Navigation Configuration — multilingual (EN / FR / ES)
 */

import type { Navigation } from '../lib/types';

export type Lang = 'en' | 'fr' | 'es';

export const navigationByLang: Record<Lang, Navigation> = {
  en: {
    header: {
      main: [
        { label: 'Features', href: '/#features' },
        { label: 'FAQ', href: '/faq' },
        { label: 'Contact', href: '/contact' },
        { label: 'Documentation', href: '/docs', feature: 'docs' },
      ],
      cta: [
        { label: 'Try it now', href: 'https://appsource.microsoft.com/', variant: 'primary' },
      ],
    },
    footer: {
      product: [
        { label: 'Features', href: '/#features' },
        { label: 'FAQ', href: '/faq' },
      ],

      resources: [
        { label: 'Documentation', href: '/docs', feature: 'docs' },
      ],
      company: [
        { label: 'Contact', href: '/contact' },
      ],
      legal: [
        { label: 'Privacy', href: '/privacy' },
      ],
    },
  },

  fr: {
    header: {
      main: [
        { label: 'Fonctionnalités', href: '/fr/#features' },
        { label: 'FAQ', href: '/fr/faq' },
        { label: 'Contact', href: '/fr/contact' },
        { label: 'Documentation', href: '/docs', feature: 'docs' },
      ],
      cta: [
        { label: 'Essayer maintenant', href: 'https://appsource.microsoft.com/', variant: 'primary' },
      ],
    },
    footer: {
      product: [
        { label: 'Fonctionnalités', href: '/fr/#features' },
        { label: 'FAQ', href: '/fr/faq' },
      ],

      resources: [
        { label: 'Documentation', href: '/docs', feature: 'docs' },
      ],
      company: [
        { label: 'Contact', href: '/fr/contact' },
      ],
      legal: [
        { label: 'Confidentialité', href: '/privacy' },
      ],
    },
  },

  es: {
    header: {
      main: [
        { label: 'Características', href: '/es/#features' },
        { label: 'Preguntas frecuentes', href: '/es/faq' },
        { label: 'Contacto', href: '/es/contact' },
        { label: 'Documentation', href: '/docs', feature: 'docs' },
      ],
      cta: [
        { label: 'Probar ahora', href: 'https://appsource.microsoft.com/', variant: 'primary' },
      ],
    },
    footer: {
      product: [
        { label: 'Características', href: '/es/#features' },
        { label: 'Preguntas frecuentes', href: '/es/faq' },
      ],

      resources: [
        { label: 'Documentación', href: '/docs', feature: 'docs' },
      ],
      company: [
        { label: 'Contacto', href: '/es/contact' },
      ],
      legal: [
        { label: 'Privacidad', href: '/privacy' },
      ],
    },
  },
};

// Default export kept for backward compatibility
export const navigation = navigationByLang.en;
