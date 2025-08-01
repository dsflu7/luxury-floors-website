export default {
	name: 'faq',
	title: 'Frequently Asked Question',
	type: 'document',
	fields: [
		{
			name: 'question',
			title: 'Question',
			type: 'string',
			validation: (Rule: any) => Rule.required()
		},
		{
			name: 'answer',
			title: 'Answer',
			type: 'array',
			of: [{ type: 'block' }],
			validation: (Rule: any) => Rule.required()
		},
		{
			name: 'category',
			title: 'Category',
			type: 'string',
			options: {
				list: [
					{ title: 'General', value: 'general' },
					{ title: 'Services', value: 'services' },
					{ title: 'Pricing', value: 'pricing' },
					{ title: 'Process', value: 'process' },
					{ title: 'Maintenance', value: 'maintenance' }
				]
			},
			initialValue: 'general'
		},
		{
			name: 'relatedServices',
			title: 'Related Services',
			type: 'array',
			of: [
				{
					type: 'reference',
					to: [{ type: 'service' }]
				}
			]
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
			title: 'question',
			subtitle: 'category'
		}
	}
};