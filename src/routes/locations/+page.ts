import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
	return {
		title: 'Service Locations | Luxury Floors Metro Vancouver',
		description: 'We provide premium luxury flooring services across Metro Vancouver including Vancouver, Burnaby, Richmond, Surrey, and surrounding areas.'
	};
};
