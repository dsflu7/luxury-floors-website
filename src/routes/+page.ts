import type { PageLoad } from './$types';
import { queries, sanityFetch } from '$lib/sanity/client';
import type { Testimonial, FAQ } from '$lib/sanity/client';

export const load: PageLoad = async () => {
	try {
		// Try to fetch testimonials and FAQs from Sanity
		// If Sanity is not configured, we'll use fallback data
		const [testimonials, faqs] = await Promise.all([
			sanityFetch<Testimonial[]>(queries.testimonials).catch(() => null),
			sanityFetch<FAQ[]>(queries.faqs).catch(() => null)
		]);

		// Fallback testimonials if Sanity is not configured
		const fallbackTestimonials = [
			{
				_id: '1',
				name: 'Sarah L.',
				content: "I couldn't be happier with my new metallic epoxy floor! Luxury Floors transformed my basement into a stunning space that looks like a high-end showroom. The team was professional, detail-oriented, and delivered exactly what they promised. Highly recommend them for anyone looking for premium flooring solutions.",
				rating: 5,
				location: 'Vancouver, BC',
				date: '2024-01-15'
			},
			{
				_id: '2',
				name: 'David R.',
				content: 'We hired Luxury Floors to upgrade our retail store, and the results were beyond our expectations. The flake epoxy floor not only looks fantastic but is also incredibly durable and easy to clean. Our customers constantly compliment the sleek and modern design.',
				rating: 5,
				company: 'Downtown Retail Store',
				date: '2024-01-10'
			},
			{
				_id: '3',
				name: 'Jessica R.',
				content: "Luxury Floors lives up to its name! Their custom metallic floor has completely transformed the look of our home's entryway. The installation process was smooth, and the team was very knowledgeable, answering all our questions. A five-star experience.",
				rating: 5,
				location: 'Richmond, BC',
				date: '2024-01-05'
			},
			{
				_id: '4',
				name: 'James P.',
				content: "Our garage floor was in bad shape, and we needed something durable yet attractive. Luxury Floors installed a flake epoxy floor that's both tough and beautiful. It's perfect for heavy use and adds so much value to our property. Thank you for the amazing work.",
				rating: 5,
				location: 'Surrey, BC',
				date: '2024-01-01'
			},
			{
				_id: '5',
				name: 'Andrew S.',
				content: 'Top-notch service and quality. My floors look amazing!',
				rating: 5,
				date: '2023-12-28'
			},
			{
				_id: '6',
				name: 'Amrit B.',
				content: "Luxury Floors exceeded our expectations with their exceptional craftsmanship and attention to detail. The custom metallic epoxy floor they installed in our living room is a true work of art. It's durable, easy to maintain, and adds a unique touch of elegance to our home. We've already recommended them to friends and family.",
				rating: 5,
				location: 'Burnaby, BC',
				date: '2023-12-25'
			}
		];

		// Fallback FAQs if Sanity is not configured
		const fallbackFAQs = [
			{
				_id: '1',
				question: 'How long does it take to install epoxy flooring?',
				answer: 'Most residential projects take 2-3 days to complete, including surface preparation, application, and curing time. Commercial projects may take longer depending on the size and complexity.',
				category: 'Installation',
				order: 1
			},
			{
				_id: '2',
				question: 'How durable is epoxy flooring?',
				answer: 'Our epoxy floors are extremely durable and can last 20+ years with proper care. They resist chemicals, stains, and heavy foot traffic, making them perfect for both residential and commercial use.',
				category: 'Durability',
				order: 2
			},
			{
				_id: '3',
				question: 'Can epoxy flooring be applied over existing concrete?',
				answer: 'Yes, epoxy can be applied over existing concrete as long as the surface is properly prepared. We assess each floor to ensure proper adhesion and longevity.',
				category: 'Installation',
				order: 3
			},
			{
				_id: '4',
				question: 'What maintenance does epoxy flooring require?',
				answer: 'Epoxy floors are very low maintenance. Regular sweeping and occasional mopping with mild detergent is all that\'s needed to keep them looking pristine.',
				category: 'Maintenance',
				order: 4
			},
			{
				_id: '5',
				question: 'Do you offer a warranty on your work?',
				answer: 'Yes, we provide a comprehensive 25-year warranty on all our epoxy flooring installations, demonstrating our confidence in the quality and durability of our work.',
				category: 'Warranty',
				order: 5
			}
		];

		return {
			testimonials: testimonials || fallbackTestimonials,
			faqs: faqs || fallbackFAQs
		};
	} catch (error) {
		console.error('Error loading page data:', error);
		// Return fallback data if there's any error
		return {
			testimonials: [],
			faqs: []
		};
	}
};