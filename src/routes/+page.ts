import type { PageLoad } from './$types';
import { getAllServices } from '$lib/data/services';
import { generateHomepageSchema } from '$lib/utils/seo';

export const load: PageLoad = async ({ url }) => {
  const services = getAllServices();
  const domain = `${url.protocol}//${url.host}`;
  
  // Generate homepage structured data
  const structuredData = generateHomepageSchema(services, domain);
  
  return {
    services,
    structuredData,
    meta: {
      title: 'Luxury Floors - Premium Metallic Epoxy Floors | 25-Year Warranty',
      description: 'Premium luxury floor installations in Metro Vancouver. Specializing in metallic epoxy floors, flake epoxy, epoxy countertops, and decorative coatings with 25-year warranty.',
      url: domain,
      image: '/assets/logo.png'
    }
  };
};
