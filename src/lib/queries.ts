// Sanity GROQ queries for content management

// Query for all services (for homepage)
export const servicesQuery = `*[_type == "service"] | order(_createdAt asc) {
  _id,
  title,
  slug,
  shortDescription,
  description,
  images,
  benefits,
  keyFeatures,
  cities,
  faqItems,
  price
}`;

// Query for a single service by slug
export const serviceQuery = `*[_type == "service" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  shortDescription,
  description,
  images,
  benefits,
  keyFeatures,
  applications,
  colorChartPoints,
  cities,
  faqItems,
  price
}`;

// Query for all locations
export const locationsQuery = `*[_type == "location"] | order(name asc) {
  _id,
  name,
  slug,
  description,
  coverageArea,
  contactInfo,
  faqItems,
  mapEmbedUrl
}`;

// Query for a single location by slug
export const locationQuery = `*[_type == "location" && slug.current == $slug][0] {
  _id,
  name,
  slug,
  description,
  coverageArea,
  contactInfo,
  faqItems,
  mapEmbedUrl
}`;

// Query for all projects
export const projectsQuery = `*[_type == "project"] | order(publishedAt desc) {
  _id,
  title,
  slug,
  description,
  featuredImage,
  gallery,
  service-> {
    title,
    slug
  },
  location-> {
    name,
    slug
  },
  client,
  projectDetails,
  beforeAfter,
  featured,
  status,
  publishedAt
}`;

// Query for featured projects (homepage)
export const featuredProjectsQuery = `*[_type == "project" && featured == true] | order(publishedAt desc) [0...6] {
  _id,
  title,
  slug,
  description,
  featuredImage,
  service-> {
    title,
    slug
  },
  status
}`;

// Query for a single project by slug
export const projectQuery = `*[_type == "project" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  description,
  longDescription,
  featuredImage,
  gallery,
  service-> {
    title,
    slug,
    shortDescription
  },
  location-> {
    name,
    slug
  },
  client,
  projectDetails,
  beforeAfter,
  challenges,
  solutions,
  featured,
  status,
  publishedAt
}`;

// Query for testimonials
export const testimonialsQuery = `*[_type == "testimonial"] | order(_createdAt desc) {
  _id,
  author,
  location,
  rating,
  testimonial,
  service,
  date,
  verified
}`;

// Query for why choose us points
export const whyPointsQuery = `*[_type == "whyPoint"] | order(_createdAt asc) {
  _id,
  title,
  description,
  icon
}`;

// Query for blog posts
export const blogPostsQuery = `*[_type == "blogPost"] | order(publishedAt desc) {
  _id,
  title,
  slug,
  publishedAt,
  previewDescription,
  categories,
  readTime,
  seoKeywords,
  featuredImage,
  author
}`;

// Query for a single blog post by slug
export const blogPostQuery = `*[_type == "blogPost" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  publishedAt,
  previewDescription,
  content,
  categories,
  readTime,
  seoKeywords,
  featuredImage,
  author
}`;

// Query for related blog posts
export const relatedBlogPostsQuery = `*[_type == "blogPost" && slug.current != $slug && count(categories[@ in $categories]) > 0] | order(publishedAt desc) [0...3] {
  _id,
  title,
  slug,
  previewDescription,
  categories,
  readTime,
  featuredImage
}`;

// TypeScript interfaces for Sanity data
export interface SanityService {
  _id: string;
  title: string;
  slug: { current: string };
  shortDescription: string;
  description: string;
  images: string[];
  benefits: string[];
  keyFeatures: string[];
  applications?: string[];
  colorChartPoints?: string[];
  cities: string[];
  faqItems: {
    question: string;
    answer: string;
  }[];
  price?: {
    basePrice: number;
    unit: string;
    factors?: string[];
  };
}

export interface SanityLocation {
  _id: string;
  name: string;
  slug: { current: string };
  description?: string;
  coverageArea: string[];
  contactInfo?: {
    phone?: string;
    email?: string;
    address?: string;
  };
  faqItems?: {
    question: string;
    answer: string;
  }[];
  mapEmbedUrl?: string;
}

export interface SanityProject {
  _id: string;
  title: string;
  slug: { current: string };
  description: string;
  longDescription?: any[];
  featuredImage?: any;
  gallery?: any[];
  service?: {
    title: string;
    slug: { current: string };
    shortDescription?: string;
  };
  location?: {
    name: string;
    slug: { current: string };
  };
  client?: {
    name: string;
    type: 'residential' | 'commercial' | 'industrial';
    showName: boolean;
  };
  projectDetails?: {
    startDate?: string;
    completionDate?: string;
    duration?: string;
    squareFootage?: number;
    materials?: string[];
  };
  beforeAfter?: {
    before?: any[];
    after?: any[];
  };
  challenges?: string[];
  solutions?: string[];
  featured: boolean;
  status: 'completed' | 'in-progress' | 'planned';
  publishedAt: string;
}

export interface SanityTestimonial {
  _id: string;
  author: string;
  location?: string;
  rating: number;
  testimonial: string;
  service?: string;
  date?: string;
  verified?: boolean;
}

export interface SanityWhyPoint {
  _id: string;
  title: string;
  description: string;
  icon?: string;
}

export interface SanityBlogPost {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
  previewDescription: string;
  content?: any[];
  categories: string[];
  readTime?: number;
  seoKeywords?: string[];
  featuredImage?: any;
  author?: {
    name: string;
    bio?: string;
    image?: any;
  };
}

// Utility functions for reading time calculation
export function calculateReadingTime(content: any[]): number {
  if (!content) return 0;
  
  let wordCount = 0;
  
  const extractText = (blocks: any[]): string => {
    return blocks
      .filter(block => block._type === 'block')
      .map(block => {
        return block.children
          ?.filter((child: any) => child._type === 'span')
          .map((span: any) => span.text)
          .join('') || '';
      })
      .join(' ');
  };
  
  const text = extractText(content);
  wordCount = text.split(/\s+/).filter(word => word.length > 0).length;
  
  // Average reading speed is 250 words per minute
  return Math.max(1, Math.round(wordCount / 250));
}

// Utility function to format Sanity image URLs
export function urlFor(source: any) {
  // This would typically use @sanity/image-url
  // For now, return a placeholder or the source URL
  if (!source?.asset?._ref) return null;
  
  // Basic URL construction - in production, use @sanity/image-url
  const projectId = 'your_project_id';
  const dataset = 'production';
  const ref = source.asset._ref;
  
  return `https://cdn.sanity.io/images/${projectId}/${dataset}/${ref}`;
}
