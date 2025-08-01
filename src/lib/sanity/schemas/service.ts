export default {
	name: 'service',
	title: 'Flooring Service',
	type: 'document',
	fields: [
		{
			name: 'title',
			title: 'Service Title',
			type: 'string',
			validation: (Rule: any) => Rule.required()
		},
		{
			name: 'slug',
			title: 'Slug',
			type: 'slug',
			options: {
				source: 'title',
				maxLength: 96
			},
			validation: (Rule: any) => Rule.required()
		},
		{
			name: 'excerpt',
			title: 'Short Description',
			type: 'text',
			rows: 3,
			validation: (Rule: any) => Rule.required().max(200)
		},
		{
			name: 'description',
			title: 'Full Description',
			type: 'array',
			of: [{ type: 'block' }]
		},
		{
			name: 'features',
			title: 'Key Features',
			type: 'array',
			of: [{ type: 'string' }]
		},
		{
			name: 'benefits',
			title: 'Benefits',
			type: 'array',
			of: [{ type: 'string' }]
		},
		{
			name: 'image',
			title: 'Main Image',
			type: 'image',
			options: {
				hotspot: true
			},
			fields: [
				{
					name: 'alt',
					type: 'string',
					title: 'Alternative Text'
				}
			]
		},
		{
			name: 'gallery',
			title: 'Image Gallery',
			type: 'array',
			of: [
				{
					type: 'image',
					options: {
						hotspot: true
					},
					fields: [
						{
							name: 'alt',
							type: 'string',
							title: 'Alternative Text'
						},
						{
							name: 'caption',
							type: 'string',
							title: 'Caption'
						}
					]
				}
			]
		},
		{
			name: 'order',
			title: 'Display Order',
			type: 'number',
			initialValue: 0
		},
		{
			name: 'seo',
			title: 'SEO Settings',
			type: 'object',
			fields: [
				{
					name: 'title',
					title: 'SEO Title',
					type: 'string'
				},
				{
					name: 'description',
					title: 'SEO Description',
					type: 'text',
					rows: 3
				},
				{
					name: 'keywords',
					title: 'Keywords',
					type: 'string'
				},
				{
					name: 'noIndex',
					title: 'Hide from Search Engines',
					type: 'boolean',
					initialValue: false
				}
			],
			options: {
				collapsible: true,
				collapsed: true
			}
		}
	],
	preview: {
		select: {
			title: 'title',
			subtitle: 'excerpt',
			media: 'image'
		}
	}
};