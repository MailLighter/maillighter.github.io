/**
 * Contact Page Configuration
 */

import type { ContactInfo, ContactFAQ } from '../lib/types';

export const contact: ContactInfo = {
  email: 'contact@maillighter.com',
};

export const contactFAQs: ContactFAQ[] = [
  {
    question: 'How do I install MailLighter?',
    answer:
      'MailLighter is available on the Microsoft Marketplace. Install it directly from there into your Outlook environment.',
  },
  {
    question: 'Is MailLighter compatible with my Outlook version?',
    answer:
      'MailLighter works with Microsoft 365 environments (Outlook desktop and Outlook on the Web) on Windows & macOS.',
  },
  {
    question: 'Is my data safe with MailLighter?',
    answer:
      'Yes. MailLighter processes emails locally and is fully GDPR compliant. No data leaves your working environment.',
  },
];

export const contactFAQsFr: ContactFAQ[] = [
  {
    question: 'Comment installer MailLighter ?',
    answer:
      'MailLighter est disponible sur le Microsoft Marketplace. Installez-le directement depuis là dans votre environnement Outlook.',
  },
  {
    question: 'MailLighter est-il compatible avec ma version d\'Outlook ?',
    answer:
      'MailLighter fonctionne avec les environnements Microsoft 365 (Outlook bureau et Outlook Web) sous Windows & macOS.',
  },
  {
    question: 'Mes données sont-elles en sécurité avec MailLighter ?',
    answer:
      'Oui. MailLighter traite les emails localement et est entièrement conforme au RGPD. Aucune donnée ne quitte votre environnement de travail.',
  },
];

export const contactFAQsEs: ContactFAQ[] = [
  {
    question: '¿Cómo instalo MailLighter?',
    answer:
      'MailLighter está disponible en Microsoft Marketplace. Instálelo directamente desde allí en su entorno de Outlook.',
  },
  {
    question: '¿Es MailLighter compatible con mi versión de Outlook?',
    answer:
      'MailLighter funciona con entornos Microsoft 365 (Outlook de escritorio y Outlook Web) en Windows & macOS.',
  },
  {
    question: '¿Están seguros mis datos con MailLighter?',
    answer:
      'Sí. MailLighter procesa los correos localmente y cumple plenamente con el RGPD. Ningún dato abandona su entorno de trabajo.',
  },
];
