/**
 * Contact Page Configuration
 */

import type { ContactInfo, ContactFAQ } from '../lib/types';

export const contact: ContactInfo = {
  email: 'contact@maillighter.com',
  supportEmail: 'support@maillighter.com',
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
