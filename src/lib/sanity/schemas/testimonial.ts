export default {
	name: 'testimonial',
	title: 'Customer Testimonial',
	type: 'document',
	fields: [
		{
			name: 'name',
			title: 'Customer Name',
			type: 'string',
			validation: (Rule: any) => Rule.required()
		},
		{
			name: 'company',
			title: 'Company (Optional)',
			type: 'string'
		},
		{
			name: 'rating',
			title: 'Rating (1-5 stars)',
			type: 'number',
			validation: (Rule: any) => Rule.required().min(1).max(5),
			initialValue: 5
		},
		{
			name: 'content',
			title: 'Testimonial Content',
			type: 'text',
			rows: 4,
			validation: (Rule: any) => Rule.required()
		},
		{
			name: 'image',
			title: 'Customer Photo',
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
			name: 'service',
			title: 'Related Service',
			type: 'reference',
			to: [{ type: 'service' }]
		},
		{
			name: 'location',
			title: 'Location',
			type: 'string'
		},
		{
			name: 'date',
			title: 'Date',
			type: 'date',
			validation: (Rule: any) => Rule.required()
		},
		{
			name: 'featured',
			title: 'Featured Testimonial',
			type: 'boolean',
			initialValue: false
		},
		{
			name: 'order',
			title: 'Display Order',
			type: 'number',
			initialValue: 0
		}
	],
	preview: {
		select: {
			title: 'name',
			subtitle: 'content',
			media: 'image'
		},
		prepare(selection: any) {
			const { title, subtitle, media } = selection;
			return {
				title: title,
				subtitle: subtitle ? subtitle.substring(0, 60) + '...' : '',
				media: media
			};
		}
	}
};