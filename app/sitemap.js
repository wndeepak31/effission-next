export default function sitemap() {
  const baseUrl = 'https://www.effission.com';

  const routes = [
    '',
    '/about',
    '/ai-studio',
    '/careers',
    '/company',
    '/contact',
    '/customers',
    '/platform',
    '/privacy',
    '/services',
    '/solutions',
    '/terms'
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1.0 : (route === '/platform' || route === '/ai-studio' ? 0.9 : 0.8),
  }));
}
