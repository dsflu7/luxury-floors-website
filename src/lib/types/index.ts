// TypeScript interfaces for luxury floors data structures
export interface FloorService {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  description: string;
  images: string[];
  benefits: string[];
  keyFeatures: string[];
  applications: string[];
  colorChartPoints: string[];
  cities?: string[];
  faqItems?: FAQ[];
  price?: {
    basePrice: number;
    unit: string;
    factors?: string[];
  };
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Location {
  id: string;
  name: string;
  slug: string;
  description?: string;
  region?: string;
  featured?: boolean;
  coverageArea: string[];
  coverageAreas?: string[]; // Alias for backward compatibility
  phone?: string;
  email?: string;
  contact?: {
    phone?: string;
    email?: string;
    address?: string;
  };
  contactInfo?: {
    phone?: string;
    email?: string;
    address?: string;
  };
  coordinates?: {
    lat: number;
    lng: number;
  };
  faqItems?: FAQ[];
  mapEmbedUrl?: string;
}

export interface Testimonial {
  id: string;
  author: string;
  location?: string;
  rating: number;
  testimonial: string;
  service?: string;
  date?: string;
  verified?: boolean;
}

export interface WhyPoint {
  id: string;
  title: string;
  description: string;
  icon?: string;
}

export interface Project {
  id: string;
  title: string;
  slug: string;
  description: string;
  longDescription?: any[];
  featuredImage?: string;
  gallery?: string[];
  service: FloorService;
  location?: Location;
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
    before?: string[];
    after?: string[];
  };
  challenges?: string[];
  solutions?: string[];
  featured: boolean;
  status: 'completed' | 'in-progress' | 'planned';
  publishedAt: string;
}

// Blog interfaces
export interface BlogPost {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
  previewDescription: string;
  content?: any[];
  categories: string[];
  readTime?: number;
  seoKeywords?: string[];
  featuredImage?: string;
  author?: {
    name: string;
    bio?: string;
    image?: string;
  };
}
