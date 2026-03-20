/**
 * Feature Flags Configuration
 */

import type { FeatureFlags } from '../lib/types';

export const features: FeatureFlags = {
  blog: false,
  docs: true,
  changelog: false,
  testimonials: false,
  roadmap: false,
};
