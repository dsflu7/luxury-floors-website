import type { PageLoad } from './$types';
import { getAllServices } from '$lib/data/services';
import { generateMetaTags } from '$lib/utils/seo';

export const load: PageLoad = async ({ url }) => {
  const services = getAllServices();
  const domain = `${url.protocol}//${url.host}`;
  
  const meta = generateMetaTags({
    title: 'Premium Flooring Services | Luxury Floors Vancouver',
    description: 'Explore our complete range of luxury flooring services including metallic epoxy floors, flake epoxy, epoxy countertops, textured decks, and decorative concrete walls.',
    url: `${domain}/services`,
    domain
  });
  
  return {
    services,
    meta
  };
};
