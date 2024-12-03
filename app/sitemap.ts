import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://tehify.com';
  
  const routes = [
    '',
    '/features',
    '/pricing',
    '/about',
    '/login',
    '/signup',
    '/solutions/ecommerce',
    '/solutions/saas',
    '/solutions/marketplace',
    '/solutions/platform',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  return routes;
}