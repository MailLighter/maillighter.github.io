/**
 * Content Strings Configuration
 */

import type { AnnouncementConfig, ContentStrings } from '../lib/types';

export const announcement: AnnouncementConfig = {
  enabled: false,
  id: 'launch-2026',
  text: '',
  variant: 'primary',
  dismissible: true,
};

export const content: ContentStrings = {
  newsletter: {
    title: 'Stay in the loop',
    description: 'Get the latest updates about MailLighter delivered to your inbox.',
    placeholder: 'Enter your email',
    buttonText: 'Subscribe',
    successMessage: 'Thanks for subscribing! Check your inbox to confirm.',
    errorMessage: 'Something went wrong. Please try again.',
    privacyNote: 'We respect your privacy. Unsubscribe at any time.',
  },
};
