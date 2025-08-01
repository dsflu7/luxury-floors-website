export const config = {
	projectId: process.env.PUBLIC_SANITY_PROJECT_ID || 'your-project-id',
	dataset: process.env.PUBLIC_SANITY_DATASET || 'production',
	title: 'Commission Luxury Floors CMS',
	apiVersion: '2023-05-03',
	basePath: '/studio',
	
	// Define which schemas to use
	schema: {
		types: [
			// Content types will be added here when schemas are created
		]
	}
};

export default config;