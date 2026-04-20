import { MetadataRoute } from 'next';
import { siteConfig } from '@/data/site-config';
import { services } from '@/data/services';
import { serviceAreas } from '@/data/service-areas';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const now = new Date().toISOString();

  const staticPages: MetadataRoute.Sitemap = [
    { url: base, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${base}/services`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/service-areas`, lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/gallery`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${base}/products`, lastModified: now, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${base}/products/siding-comparison`, lastModified: now, changeFrequency: 'monthly', priority: 0.65 },
    { url: `${base}/products/glass-performance`, lastModified: now, changeFrequency: 'monthly', priority: 0.65 },
    { url: `${base}/process`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/faq`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
  ];

  const servicePages: MetadataRoute.Sitemap = services.map((s) => ({
    url: `${base}/services/${s.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.85,
  }));

  const areaPages: MetadataRoute.Sitemap = serviceAreas.map((a) => ({
    url: `${base}/service-areas/${a.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.75,
  }));

  return [...staticPages, ...servicePages, ...areaPages];
}
