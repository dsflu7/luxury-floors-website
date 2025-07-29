import type { FloorService, Location, BlogPost } from '$lib/types';

interface SitemapUrl {
  url: string;
  lastmod?: string;
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;
}

export function generateSitemap(options: {
  domain: string;
  services: FloorService[];
  locations: Location[];
  blogPosts?: BlogPost[];
}): string {
  const { domain, services, locations, blogPosts = [] } = options;
  
  const urls: SitemapUrl[] = [
    // Homepage
    {
      url: domain,
      lastmod: new Date().toISOString().split('T')[0],
      changefreq: 'weekly',
      priority: 1.0
    },
    
    // Main pages
    {
      url: `${domain}/services`,
      lastmod: new Date().toISOString().split('T')[0],
      changefreq: 'weekly',
      priority: 0.9
    },
    {
      url: `${domain}/locations`,
      lastmod: new Date().toISOString().split('T')[0],
      changefreq: 'monthly',
      priority: 0.8
    },
    {
      url: `${domain}/gallery`,
      lastmod: new Date().toISOString().split('T')[0],
      changefreq: 'weekly',
      priority: 0.7
    },
    {
      url: `${domain}/our-story`,
      lastmod: new Date().toISOString().split('T')[0],
      changefreq: 'monthly',
      priority: 0.6
    },
    {
      url: `${domain}/contact`,
      lastmod: new Date().toISOString().split('T')[0],
      changefreq: 'monthly',
      priority: 0.8
    },
    
    // Service pages
    ...services.map(service => ({
      url: `${domain}/services/${service.slug}`,
      lastmod: new Date().toISOString().split('T')[0],
      changefreq: 'monthly' as const,
      priority: 0.8
    })),
    
    // Location pages  
    ...locations.map(location => ({
      url: `${domain}/locations/${location.slug}`,
      lastmod: new Date().toISOString().split('T')[0],
      changefreq: 'monthly' as const,
      priority: 0.7
    })),
    
    // Blog pages
    {
      url: `${domain}/blog`,
      lastmod: blogPosts.length > 0 ? 
        new Date(Math.max(...blogPosts.map(post => new Date(post.publishedAt).getTime()))).toISOString().split('T')[0] :
        new Date().toISOString().split('T')[0],
      changefreq: 'weekly',
      priority: 0.7
    },
    
    // Individual blog posts
    ...blogPosts.map(post => ({
      url: `${domain}/blog/${post.slug.current}`,
      lastmod: new Date(post.publishedAt).toISOString().split('T')[0],
      changefreq: 'monthly' as const,
      priority: 0.6
    })),
    
    // Legal pages
    {
      url: `${domain}/privacy-policy`,
      lastmod: new Date().toISOString().split('T')[0],
      changefreq: 'yearly',
      priority: 0.3
    },
    {
      url: `${domain}/terms-and-conditions`,
      lastmod: new Date().toISOString().split('T')[0],
      changefreq: 'yearly',
      priority: 0.3
    }
  ];

  return generateXmlSitemap(urls);
}

function generateXmlSitemap(urls: SitemapUrl[]): string {
  const urlElements = urls.map(url => {
    let urlElement = `  <url>
    <loc>${escapeXml(url.url)}</loc>`;
    
    if (url.lastmod) {
      urlElement += `
    <lastmod>${url.lastmod}</lastmod>`;
    }
    
    if (url.changefreq) {
      urlElement += `
    <changefreq>${url.changefreq}</changefreq>`;
    }
    
    if (url.priority !== undefined) {
      urlElement += `
    <priority>${url.priority.toFixed(1)}</priority>`;
    }
    
    urlElement += `
  </url>`;
    
    return urlElement;
  }).join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlElements}
</urlset>`;
}

function escapeXml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

// Robots.txt generator
export function generateRobotsTxt(domain: string): string {
  return `User-agent: *
Allow: /

# Disallow admin and private areas
Disallow: /admin/
Disallow: /_app/
Disallow: /api/

# Sitemap location
Sitemap: ${domain}/sitemap.xml

# Crawl delay for respectful crawling
Crawl-delay: 1`;
}

// Generate structured data for sitemap page
export function generateSitemapPageSchema(domain: string): object {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Sitemap - Luxury Floors",
    "description": "Complete sitemap of all pages on Luxury Floors website",
    "url": `${domain}/sitemap`,
    "mainEntity": {
      "@type": "SiteNavigationElement",
      "name": "Site Navigation",
      "url": `${domain}/sitemap`
    },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": domain
        },
        {
          "@type": "ListItem", 
          "position": 2,
          "name": "Sitemap",
          "item": `${domain}/sitemap`
        }
      ]
    }
  };
}
