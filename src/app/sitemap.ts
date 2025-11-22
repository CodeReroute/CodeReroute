import type { MetadataRoute } from 'next';

const baseUrl = 'https://codereroute.com';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${baseUrl}/tech-agency`,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/mappetizer`,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/work-here`,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
  ];
}
