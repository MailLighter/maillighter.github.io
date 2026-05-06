import type { APIRoute } from 'astro';
import { siteConfig } from '@/config';

export const GET: APIRoute = () => {
  const robotsTxt = `# robots.txt for ${siteConfig.name}
# https://www.robotstxt.org/

User-agent: *
Allow: /

# Disallow admin and API routes (if any)
Disallow: /api/
Disallow: /_astro/

# Enterprise thank-you confirmation pages (no SEO value)
Disallow: /enterprise/thank-you
Disallow: /fr/enterprise/thank-you
Disallow: /es/enterprise/thank-you

# Sitemap location
Sitemap: ${siteConfig.url}/sitemap-index.xml
`;

  return new Response(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
};
