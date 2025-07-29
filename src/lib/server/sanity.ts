import { createClient } from '@sanity/client';
import { 
  PUBLIC_SANITY_PROJECT_ID, 
  PUBLIC_SANITY_DATASET, 
  PUBLIC_SANITY_API_VERSION 
} from '$env/static/public';

// Server-side client with potential write access
export const serverClient = createClient({
  projectId: PUBLIC_SANITY_PROJECT_ID,
  dataset: PUBLIC_SANITY_DATASET,
  apiVersion: PUBLIC_SANITY_API_VERSION,
  useCdn: false, // Disable CDN for server-side operations
  perspective: 'published',
  stega: false,
  // Add token here if you need write access
  // token: process.env.SANITY_SECRET_TOKEN,
});
