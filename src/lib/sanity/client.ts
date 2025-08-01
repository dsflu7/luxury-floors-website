import { createClient } from '@sanity/client';

// Client for fetching data (used in the app)
export const client = createClient({
	projectId: process.env.PUBLIC_SANITY_PROJECT_ID || 'your-project-id',
	dataset: process.env.PUBLIC_SANITY_DATASET || 'production',
	useCdn: true, // Enable CDN for faster reads
	apiVersion: '2023-05-03', // Use current UTC date - see "specifying API version"!
});

// Define common GROQ queries
export const queries = {
	// Get all services
	services: `*[_type == "service"] | order(order asc) {
		_id,
		title,
		slug,
		description,
		excerpt,
		features,
		image,
		gallery,
		order,
		seo
	}`,

	// Get service by slug
	serviceBySlug: `*[_type == "service" && slug.current == $slug][0] {
		_id,
		title,
		slug,
		description,
		excerpt,
		features,
		benefits,
		image,
		gallery,
		faqs,
		testimonials,
		seo,
		relatedServices[]->
	}`,

	// Get all blog posts
	blogPosts: `*[_type == "blogPost"] | order(publishedAt desc) {
		_id,
		title,
		slug,
		excerpt,
		publishedAt,
		author,
		categories,
		mainImage,
		readTime,
		seo
	}`,

	// Get blog post by slug
	blogPostBySlug: `*[_type == "blogPost" && slug.current == $slug][0] {
		_id,
		title,
		slug,
		content,
		excerpt,
		publishedAt,
		author,
		categories,
		mainImage,
		readTime,
		seo,
		relatedPosts[]->
	}`,

	// Get all locations
	locations: `*[_type == "location"] | order(order asc) {
		_id,
		name,
		slug,
		description,
		address,
		coordinates,
		image,
		services,
		testimonials,
		contactInfo,
		seo
	}`,

	// Get location by slug
	locationBySlug: `*[_type == "location" && slug.current == $slug][0] {
		_id,
		name,
		slug,
		description,
		address,
		coordinates,
		image,
		services,
		testimonials,
		contactInfo,
		seo
	}`,

	// Get all testimonials
	testimonials: `*[_type == "testimonial"] | order(order asc) {
		_id,
		name,
		company,
		rating,
		content,
		image,
		service,
		location,
		date
	}`,

	// Get all FAQs
	faqs: `*[_type == "faq"] | order(order asc) {
		_id,
		question,
		answer,
		category,
		order
	}`,

	// Get company information
	companyInfo: `*[_type == "companyInfo"][0] {
		_id,
		name,
		description,
		address,
		phone,
		email,
		socialMedia,
		hours,
		logo,
		images
	}`
};

// Helper function to fetch data
export async function sanityFetch<T>(query: string, params: Record<string, any> = {}): Promise<T> {
	return await client.fetch(query, params);
}

// Type definitions for Sanity data
export interface SanityService {
	_id: string;
	title: string;
	slug: { current: string };
	description: string;
	excerpt: string;
	features: string[];
	benefits?: string[];
	image: SanityImage;
	gallery?: SanityImage[];
	order: number;
	faqs?: FAQ[];
	testimonials?: Testimonial[];
	seo?: SEOData;
	relatedServices?: SanityService[];
}

export interface SanityBlogPost {
	_id: string;
	title: string;
	slug: { current: string };
	content: any[]; // PortableText
	excerpt: string;
	publishedAt: string;
	author: string;
	categories: string[];
	mainImage: SanityImage;
	readTime: number;
	seo?: SEOData;
	relatedPosts?: SanityBlogPost[];
}

export interface SanityLocation {
	_id: string;
	name: string;
	slug: { current: string };
	description: string;
	address: Address;
	coordinates: {
		lat: number;
		lng: number;
	};
	image: SanityImage;
	services: string[];
	testimonials: Testimonial[];
	contactInfo: ContactInfo;
	seo?: SEOData;
}

export interface SanityImage {
	_type: 'image';
	asset: {
		_ref: string;
		_type: 'reference';
	};
	alt?: string;
	caption?: string;
}

export interface FAQ {
	_id: string;
	question: string;
	answer: string;
	category: string;
	order: number;
}

export interface Testimonial {
	_id: string;
	name: string;
	company?: string;
	rating: number;
	content: string;
	image?: SanityImage;
	service?: string;
	location?: string;
	date: string;
}

export interface Address {
	street: string;
	city: string;
	province: string;
	postalCode: string;
	country: string;
}

export interface ContactInfo {
	phone: string;
	email: string;
	hours: string[];
}

export interface SEOData {
	title?: string;
	description?: string;
	keywords?: string;
	image?: SanityImage;
	noIndex?: boolean;
}

export interface CompanyInfo {
	_id: string;
	name: string;
	description: string;
	address: Address;
	phone: string;
	email: string;
	socialMedia: {
		facebook?: string;
		instagram?: string;
		linkedin?: string;
		twitter?: string;
	};
	hours: string[];
	logo: SanityImage;
	images: SanityImage[];
}