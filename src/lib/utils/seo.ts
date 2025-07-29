import type { FloorService, Location, BlogPost } from '$lib/types';

// Base organization schema for structured data
export function generateOrganizationSchema(domain: string = 'https://www.luxuryfloors.ca') {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${domain}/#organization`,
    "name": "Luxury Floors",
    "description": "Premium luxury floor installations in Metro Vancouver. Specializing in metallic epoxy floors, flake epoxy, epoxy countertops, and decorative coatings with 25-year warranty.",
    "url": domain,
    "telephone": "(604) 555-0123",
    "email": "info@luxuryfloors.ca",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Main Street",
      "addressLocality": "Vancouver",
      "addressRegion": "BC",
      "postalCode": "V6B 1A1",
      "addressCountry": "CA"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 49.2827,
      "longitude": -123.1207
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Vancouver",
        "containedInPlace": {
          "@type": "Province",
          "name": "British Columbia"
        }
      },
      {
        "@type": "City", 
        "name": "Burnaby",
        "containedInPlace": {
          "@type": "Province",
          "name": "British Columbia"
        }
      },
      {
        "@type": "City",
        "name": "Richmond", 
        "containedInPlace": {
          "@type": "Province",
          "name": "British Columbia"
        }
      },
      {
        "@type": "City",
        "name": "Surrey",
        "containedInPlace": {
          "@type": "Province",
          "name": "British Columbia"
        }
      }
    ],
    "serviceType": [
      "Metallic Epoxy Flooring",
      "Flake Epoxy Flooring", 
      "Epoxy Countertops",
      "Textured Deck Coatings",
      "Decorative Concrete Wall Coatings"
    ],
    "priceRange": "$$$$",
    "paymentAccepted": ["Cash", "Credit Card", "Debit Card", "Bank Transfer"],
    "currenciesAccepted": "CAD",
    "openingHours": [
      "Mo-Fr 08:00-18:00",
      "Sa 09:00-16:00"
    ],
    "logo": {
      "@type": "ImageObject",
      "url": `${domain}/assets/logo.png`,
      "width": 400,
      "height": 400
    },
    "image": [
      `${domain}/assets/logo.png`,
      `${domain}/assets/metallic-epoxy-floors/carousel/0.jpg`,
      `${domain}/assets/flake-epoxy-floors/carousel/0.jpg`
    ],
    "sameAs": [
      "https://www.facebook.com/luxuryfloors",
      "https://www.instagram.com/luxuryfloors", 
      "https://www.linkedin.com/company/luxury-floors"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "bestRating": "5",
      "worstRating": "1",
      "ratingCount": "127"
    },
    "hasCredential": [
      {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "certification",
        "name": "Leggari Certified Installer"
      },
      {
        "@type": "EducationalOccupationalCredential", 
        "credentialCategory": "certification",
        "name": "Chromology Certified Technician"
      }
    ]
  };
}

// Service schema generator
export function generateServiceSchema(service: FloorService, domain: string = 'https://www.luxuryfloors.ca') {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${domain}/services/${service.slug}/#service`,
    "name": service.title,
    "description": service.description,
    "url": `${domain}/services/${service.slug}`,
    "serviceType": service.title,
    "provider": {
      "@type": "LocalBusiness",
      "@id": `${domain}/#organization`
    },
    "areaServed": service.cities?.map(city => ({
      "@type": "City",
      "name": city,
      "containedInPlace": {
        "@type": "Province",
        "name": "British Columbia"
      }
    })) || [],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": `${service.title} Options`,
      "itemListElement": service.keyFeatures.map((feature, index) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": feature
        }
      }))
    },
    "offers": service.price ? {
      "@type": "Offer",
      "price": service.price.basePrice.toString(),
      "priceCurrency": "CAD",
      "priceSpecification": {
        "@type": "UnitPriceSpecification",
        "price": service.price.basePrice,
        "priceCurrency": "CAD",
        "unitText": service.price.unit
      },
      "description": `Starting at $${service.price.basePrice} ${service.price.unit}`,
      "availability": "https://schema.org/InStock",
      "validFrom": new Date().toISOString(),
      "seller": {
        "@type": "LocalBusiness",
        "@id": `${domain}/#organization`
      }
    } : undefined,
    "additionalProperty": service.benefits.map(benefit => ({
      "@type": "PropertyValue",
      "name": "Benefit",
      "value": benefit
    })),
    "image": service.images.map(img => `${domain}${img}`),
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${domain}/services/${service.slug}`
    }
  };
}

// FAQ schema generator
export function generateFAQSchema(faqs: { question: string; answer: string }[], domain: string = 'https://www.luxuryfloors.ca') {
  if (!faqs.length) return null;
  
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
}

// Location schema generator  
export function generateLocationSchema(location: Location, domain: string = 'https://www.luxuryfloors.ca') {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${domain}/locations/${location.slug}/#location`,
    "name": `Luxury Floors - ${location.name}`,
    "description": location.description,
    "url": `${domain}/locations/${location.slug}`,
    "telephone": location.contactInfo?.phone || "(604) 555-0123",
    "email": location.contactInfo?.email || "info@luxuryfloors.ca",
    "address": location.contactInfo?.address ? {
      "@type": "PostalAddress",
      "streetAddress": location.contactInfo.address,
      "addressLocality": location.name,
      "addressRegion": "BC",
      "addressCountry": "CA"
    } : undefined,
    "areaServed": {
      "@type": "City",
      "name": location.name,
      "containedInPlace": {
        "@type": "Province", 
        "name": "British Columbia"
      }
    },
    "parentOrganization": {
      "@type": "LocalBusiness",
      "@id": `${domain}/#organization`
    },
    "serviceArea": location.coverageArea.map(area => ({
      "@type": "Place",
      "name": area
    }))
  };
}

// Blog post schema generator
export function generateBlogPostSchema(post: BlogPost, domain: string = 'https://www.luxuryfloors.ca') {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${domain}/blog/${post.slug.current}/#article`,
    "headline": post.title,
    "description": post.previewDescription,
    "url": `${domain}/blog/${post.slug.current}`,
    "datePublished": post.publishedAt,
    "dateModified": post.publishedAt,
    "author": {
      "@type": "Person",
      "name": post.author?.name || "Luxury Floors Team",
      "url": `${domain}/our-story`
    },
    "publisher": {
      "@type": "Organization",
      "@id": `${domain}/#organization`,
      "name": "Luxury Floors",
      "logo": {
        "@type": "ImageObject",
        "url": `${domain}/assets/logo.png`
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${domain}/blog/${post.slug.current}`
    },
    "articleSection": post.categories.join(', '),
    "keywords": post.seoKeywords?.join(', ') || post.categories.join(', '),
    "wordCount": post.readTime ? post.readTime * 250 : undefined, // Approximate word count
    "timeRequired": post.readTime ? `PT${post.readTime}M` : undefined,
    "inLanguage": "en-CA",
    "about": {
      "@type": "Thing",
      "name": "Luxury Flooring",
      "description": "Premium epoxy flooring, countertops, and decorative coating services"
    },
    "mentions": post.categories.map(category => ({
      "@type": "Thing",
      "name": category
    })),
    "image": post.featuredImage ? `${domain}${post.featuredImage}` : `${domain}/assets/logo.png`
  };
}

// Breadcrumb schema generator
export function generateBreadcrumbSchema(items: { name: string; url: string }[], domain: string = 'https://www.luxuryfloors.ca') {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url.startsWith('http') ? item.url : `${domain}${item.url}`
    }))
  };
}

// Homepage schema with all services
export function generateHomepageSchema(services: FloorService[], domain: string = 'https://www.luxuryfloors.ca') {
  const organizationSchema = generateOrganizationSchema(domain);
  
  return {
    "@context": "https://schema.org",
    "@graph": [
      organizationSchema,
      {
        "@type": "WebSite",
        "@id": `${domain}/#website`,
        "url": domain,
        "name": "Luxury Floors",
        "description": "Premium luxury floor installations in Metro Vancouver",
        "publisher": {
          "@id": `${domain}/#organization`
        },
        "potentialAction": [
          {
            "@type": "SearchAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": `${domain}/search?q={search_term_string}`
            },
            "query-input": "required name=search_term_string"
          }
        ]
      },
      {
        "@type": "ItemList",
        "name": "Luxury Flooring Services",
        "description": "Our complete range of premium flooring services",
        "itemListElement": services.map((service, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "item": {
            "@type": "Service",
            "@id": `${domain}/services/${service.slug}/#service`,
            "name": service.title,
            "description": service.shortDescription,
            "url": `${domain}/services/${service.slug}`
          }
        }))
      }
    ]
  };
}

// Meta tag generator
export function generateMetaTags(options: {
  title: string;
  description: string;
  url: string;
  image?: string;
  type?: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
  domain?: string;
}) {
  const {
    title,
    description,
    url,
    image = '/assets/logo.png',
    type = 'website',
    publishedTime,
    modifiedTime,
    section,
    tags,
    domain = 'https://www.luxuryfloors.ca'
  } = options;

  const fullUrl = url.startsWith('http') ? url : `${domain}${url}`;
  const fullImageUrl = image.startsWith('http') ? image : `${domain}${image}`;

  return {
    title,
    description,
    canonical: fullUrl,
    openGraph: {
      type,
      url: fullUrl,
      title,
      description,
      images: [
        {
          url: fullImageUrl,
          width: 1200,
          height: 630,
          alt: title
        }
      ],
      siteName: 'Luxury Floors',
      locale: 'en_CA',
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
      ...(section && { section }),
      ...(tags && { tags })
    },
    twitter: {
      card: 'summary_large_image',
      site: '@luxuryfloors',
      creator: '@luxuryfloors',
      title,
      description,
      image: fullImageUrl
    },
    additionalMetaTags: [
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        name: 'robots',
        content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
      },
      {
        name: 'author',
        content: 'Luxury Floors'
      },
      {
        name: 'format-detection',
        content: 'telephone=no'
      },
      {
        property: 'og:locale',
        content: 'en_CA'
      },
      {
        property: 'og:site_name',
        content: 'Luxury Floors'
      }
    ]
  };
}
