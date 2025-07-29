import type { PageLoad } from './$types';
import { getLocationBySlug } from '$lib/data/locations';
import { error } from '@sveltejs/kit';

export const load: PageLoad = async ({ params }) => {
	const location = getLocationBySlug(params.city);
	
	if (!location) {
		throw error(404, 'Location not found');
	}

	return {
		location
	};
};
