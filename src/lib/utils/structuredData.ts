import { PUBLIC_COMPANY_NAME, PUBLIC_DOMAIN } from '$env/static/public';

interface BusinessInfo {
	name: string;
	address: {
		streetAddress: string;
		addressLocality: string;
		addressRegion: string;
		postalCode: string;
		addressCountry: string;
	};
	telephone: string;
	email: string;
	url: string;
	logo: string;
	image: string[];
	description: string;
	priceRange: string;
	areaServed: string[];
	serviceArea: {
		'@type': string;
		name: string;
	};
}

const businessInfo: BusinessInfo = {
	name: PUBLIC_COMPANY_NAME,
	address: {
		streetAddress: 'Service Area',
		addressLocality: 'Vancouver',
		addressRegion: 'BC',
		postalCode: 'V6B 1A1',
		addressCountry: 'CA'
	},
	telephone: '+1-604-555-0123',
	email: 'info@luxuryfloors.ca',
	url: `https://${PUBLIC_DOMAIN}`,
	logo: `https://${PUBLIC_DOMAIN}/favicon-96x96.png`,
	image: [`https://${PUBLIC_DOMAIN}/favicon-96x96.png`],
	description: 'Premium luxury flooring solutions including epoxy floors, metallic finishes, and concrete coatings for residential and commercial spaces in British Columbia.',
	priceRange: '$$$$',
	areaServed: ['British Columbia', 'Vancouver', 'Surrey', 'Burnaby', 'Richmond'],
	serviceArea: {
		'@type': 'GeoCircle',
		name: 'British Columbia, Canada'
	}
};

export function generateLocalBusinessSchema() {
	return {
		'@context': 'https://schema.org',
		'@type': 'LocalBusiness',
		'@id': `https://${PUBLIC_DOMAIN}/#business`,
		name: businessInfo.name,
		alternateName: 'Luxury Floors BC',
		description: businessInfo.description,
		url: businessInfo.url,
		logo: businessInfo.logo,
		image: businessInfo.image,
		telephone: businessInfo.telephone,
		email: businessInfo.email,
		priceRange: businessInfo.priceRange,
		address: {
			'@type': 'PostalAddress',
			...businessInfo.address
		},
		geo: {
			'@type': 'GeoCoordinates',
			latitude: 49.2827,
			longitude: -123.1207
		},
		areaServed: businessInfo.areaServed.map(area => ({
			'@type': 'City',
			name: area
		})),
		serviceArea: businessInfo.serviceArea,
		hasOfferCatalog: {
			'@type': 'OfferCatalog',
			name: 'Flooring Services',
			itemListElement: [
				{
					'@type': 'Offer',
					itemOffered: {
						'@type': 'Service',
						name: 'Metallic Epoxy Flooring',
						description: 'Premium metallic epoxy floor coatings'
					}
				},
				{
					'@type': 'Offer',
					itemOffered: {
						'@type': 'Service',
						name: 'Flake Epoxy Flooring',
						description: 'Decorative flake epoxy floor systems'
					}
				},
				{
					'@type': 'Offer',
					itemOffered: {
						'@type': 'Service',
						name: 'Epoxy Countertops',
						description: 'Custom epoxy countertop installations'
					}
				}
			]
		},
		openingHours: ['Mo-Fr 08:00-18:00', 'Sa 09:00-17:00'],
		aggregateRating: {
			'@type': 'AggregateRating',
			ratingValue: '4.9',
			reviewCount: '127'
		}
	};
}

export function generateServiceSchema(service: {
	name: string;
	description: string;
	image?: string;
	url?: string;
}) {
	return {
		'@context': 'https://schema.org',
		'@type': 'Service',
		'@id': `https://${PUBLIC_DOMAIN}/services/${service.name.toLowerCase().replace(/\s+/g, '-')}#service`,
		name: service.name,
		description: service.description,
		provider: {
			'@type': 'LocalBusiness',
			'@id': `https://${PUBLIC_DOMAIN}/#business`
		},
		areaServed: businessInfo.areaServed.map(area => ({
			'@type': 'City',
			name: area
		})),
		image: service.image || businessInfo.image[0],
		url: service.url || `https://${PUBLIC_DOMAIN}/services/${service.name.toLowerCase().replace(/\s+/g, '-')}`,
		offers: {
			'@type': 'Offer',
			availability: 'https://schema.org/InStock',
			priceRange: businessInfo.priceRange
		}
	};
}

export function generateWebPageSchema(page: {
	name: string;
	description: string;
	url: string;
	breadcrumbs?: Array<{ name: string; url: string; }>;
}) {
	const schema: any = {
		'@context': 'https://schema.org',
		'@type': 'WebPage',
		'@id': `${page.url}#webpage`,
		name: page.name,
		description: page.description,
		url: page.url,
		isPartOf: {
			'@type': 'WebSite',
			'@id': `https://${PUBLIC_DOMAIN}/#website`,
			name: businessInfo.name,
			url: businessInfo.url
		},
		about: {
			'@type': 'LocalBusiness',
			'@id': `https://${PUBLIC_DOMAIN}/#business`
		}
	};

	if (page.breadcrumbs && page.breadcrumbs.length > 0) {
		schema.breadcrumb = generateBreadcrumbSchema(page.breadcrumbs);
	}

	return schema;
}

export function generateBreadcrumbSchema(breadcrumbs: Array<{ name: string; url: string; }>) {
	return {
		'@context': 'https://schema.org',
		'@type': 'BreadcrumbList',
		itemListElement: breadcrumbs.map((crumb, index) => ({
			'@type': 'ListItem',
			position: index + 1,
			name: crumb.name,
			item: crumb.url.startsWith('http') ? crumb.url : `https://${PUBLIC_DOMAIN}${crumb.url}`
		}))
	};
}

export function generateFAQPageSchema(faqs: Array<{ question: string; answer: string; }>) {
	return {
		'@context': 'https://schema.org',
		'@type': 'FAQPage',
		mainEntity: faqs.map(faq => ({
			'@type': 'Question',
			name: faq.question,
			acceptedAnswer: {
				'@type': 'Answer',
				text: faq.answer
			}
		}))
	};
}

export function generateBlogPostSchema(post: {
	title: string;
	description: string;
	author: string;
	datePublished: string;
	dateModified?: string;
	image?: string;
	url: string;
}) {
	return {
		'@context': 'https://schema.org',
		'@type': 'BlogPosting',
		'@id': `${post.url}#article`,
		headline: post.title,
		description: post.description,
		image: post.image || businessInfo.image[0],
		author: {
			'@type': 'Person',
			name: post.author
		},
		publisher: {
			'@type': 'Organization',
			'@id': `https://${PUBLIC_DOMAIN}/#business`,
			name: businessInfo.name,
			logo: businessInfo.logo
		},
		datePublished: post.datePublished,
		dateModified: post.dateModified || post.datePublished,
		mainEntityOfPage: {
			'@type': 'WebPage',
			'@id': post.url
		}
	};
}