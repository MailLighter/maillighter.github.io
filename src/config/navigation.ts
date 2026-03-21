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
  },

  fr: {
    header: {
      main: [
        { label: 'Fonctionnalités', href: '/fr/#features' },
        { label: 'Bénéfices', href: '/fr/#benefits' },
        { label: 'FAQ', href: '/fr/faq' },
        { label: 'Docs', href: '/docs', feature: 'docs' },
      ],
      cta: [
        { label: 'Essayer maintenant', href: 'https://appsource.microsoft.com/', variant: 'primary' },
      ],
    },
    footer: {
      product: [
        { label: 'Fonctionnalités', href: '/fr/#features' },
        { label: 'Bénéfices', href: '/fr/#benefits' },
        { label: 'FAQ', href: '/fr/faq' },
        { label: 'Documentation', href: '/docs', feature: 'docs' },
      ],
      solutions: [
        { label: 'Grandes entreprises', href: '/fr/#audience' },
        { label: 'Contact', href: '/contact' },
      ],
      resources: [
        { label: 'Documentation', href: '/docs', feature: 'docs' },
      ],
      company: [
        { label: 'Contact', href: '/contact' },
      ],
      legal: [
        { label: 'Confidentialité', href: '/privacy' },
        { label: "Conditions d'utilisation", href: '/terms' },
      ],
    },
  },

  es: {
    header: {
      main: [
        { label: 'Características', href: '/es/#features' },
        { label: 'Beneficios', href: '/es/#benefits' },
        { label: 'Preguntas frecuentes', href: '/es/faq' },
        { label: 'Docs', href: '/docs', feature: 'docs' },
      ],
      cta: [
        { label: 'Probar ahora', href: 'https://appsource.microsoft.com/', variant: 'primary' },
      ],
    },
    footer: {
      product: [
        { label: 'Características', href: '/es/#features' },
        { label: 'Beneficios', href: '/es/#benefits' },
        { label: 'Preguntas frecuentes', href: '/es/faq' },
        { label: 'Documentación', href: '/docs', feature: 'docs' },
      ],
      solutions: [
        { label: 'Empresas', href: '/es/#audience' },
        { label: 'Contacto', href: '/contact' },
      ],
      resources: [
        { label: 'Documentación', href: '/docs', feature: 'docs' },
      ],
      company: [
        { label: 'Contacto', href: '/contact' },
      ],
      legal: [
        { label: 'Privacidad', href: '/privacy' },
        { label: 'Términos de uso', href: '/terms' },
      ],
    },
  },
};

// Default export kept for backward compatibility
export const navigation = navigationByLang.en;
