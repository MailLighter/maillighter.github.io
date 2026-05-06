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
        { label: 'Enterprise', href: '/enterprise', badge: 'Q4 2026' },
        { label: 'Contact', href: '/contact' },
        { label: 'Documentation', href: '/docs', feature: 'docs' },
      ],
      cta: [
        { label: 'Install for free', href: 'https://marketplace.microsoft.com/', variant: 'primary' },
      ],
    },
    footer: {
      product: [
        { label: 'Features', href: '/#features' },
        { label: 'FAQ', href: '/faq' },
        { label: 'Enterprise', href: '/enterprise', badge: 'Coming Q4 2026' },
      ],

      resources: [
        { label: 'Documentation', href: '/docs', feature: 'docs' },
        { label: 'Methodology', href: '/methodology' },
        { label: 'Support', href: '/support' },
      ],
      company: [
        { label: 'Contact', href: '/contact' },
        { label: 'About', href: '/about' },
      ],
      legal: [
        { label: 'Privacy', href: '/privacy' },
        { label: 'Terms', href: '/eula' },
      ],
    },
  },

  fr: {
    header: {
      main: [
        { label: 'Fonctionnalités', href: '/fr/#features' },
        { label: 'FAQ', href: '/fr/faq' },
        { label: 'Enterprise', href: '/fr/enterprise', badge: 'T4 2026' },
        { label: 'Contact', href: '/fr/contact' },
        { label: 'Documentation', href: '/fr/docs', feature: 'docs' },
      ],
      cta: [
        { label: 'Installer gratuitement', href: 'https://marketplace.microsoft.com/', variant: 'primary' },
      ],
    },
    footer: {
      product: [
        { label: 'Fonctionnalités', href: '/fr/#features' },
        { label: 'FAQ', href: '/fr/faq' },
        { label: 'Enterprise', href: '/fr/enterprise', badge: 'Bientôt T4 2026' },
      ],

      resources: [
        { label: 'Documentation', href: '/fr/docs', feature: 'docs' },
        { label: 'Méthodologie', href: '/fr/methodology' },
        { label: 'Support', href: '/fr/support' },
      ],
      company: [
        { label: 'Contact', href: '/fr/contact' },
        { label: 'À propos', href: '/fr/about' },
      ],
      legal: [
        { label: 'Confidentialité', href: '/fr/privacy' },
        { label: 'CGU', href: '/fr/eula' },
      ],
    },
  },

  es: {
    header: {
      main: [
        { label: 'Características', href: '/es/#features' },
        { label: 'Preguntas frecuentes', href: '/es/faq' },
        { label: 'Enterprise', href: '/es/enterprise', badge: 'T4 2026' },
        { label: 'Contacto', href: '/es/contact' },
        { label: 'Documentación', href: '/es/docs', feature: 'docs' },
      ],
      cta: [
        { label: 'Instalar gratis', href: 'https://marketplace.microsoft.com/', variant: 'primary' },
      ],
    },
    footer: {
      product: [
        { label: 'Características', href: '/es/#features' },
        { label: 'Preguntas frecuentes', href: '/es/faq' },
        { label: 'Enterprise', href: '/es/enterprise', badge: 'Pronto T4 2026' },
      ],

      resources: [
        { label: 'Documentación', href: '/es/docs', feature: 'docs' },
        { label: 'Metodología', href: '/es/methodology' },
        { label: 'Soporte', href: '/es/support' },
      ],
      company: [
        { label: 'Contacto', href: '/es/contact' },
        { label: 'Acerca de', href: '/es/about' },
      ],
      legal: [
        { label: 'Privacidad', href: '/es/privacy' },
        { label: 'Términos', href: '/es/eula' },
      ],
    },
  },
};
