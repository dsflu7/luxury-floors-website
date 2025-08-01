import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit';

export const load: PageLoad = async ({ params }) => {
	const { slug } = params;

	// Mock blog posts data - in real implementation this would come from Sanity CMS
	const blogPosts = [
		{
			slug: 'ultimate-guide-metallic-epoxy-flooring',
			title: 'The Ultimate Guide to Metallic Epoxy Flooring',
			excerpt: 'Discover everything you need to know about metallic epoxy flooring, from benefits to installation process.',
			content: `
				<p>Metallic epoxy flooring has become increasingly popular among homeowners and business owners in Vancouver who want to create stunning, durable surfaces that make a lasting impression.</p>
				
				<h2>What is Metallic Epoxy Flooring?</h2>
				<p>Metallic epoxy flooring is a three-dimensional flooring system that creates unique, swirled patterns reminiscent of flowing water, molten metal, or cloud formations. The process involves applying a specially formulated epoxy coating mixed with metallic pigments to create depth and movement in the finished surface.</p>
				
				<h2>Benefits of Metallic Epoxy Floors</h2>
				<ul>
					<li><strong>Durability:</strong> Extremely resistant to wear, chemicals, and stains</li>
					<li><strong>Easy Maintenance:</strong> Simple to clean with just soap and water</li>
					<li><strong>Customization:</strong> Endless color and pattern possibilities</li>
					<li><strong>Seamless Surface:</strong> No grout lines or joints to collect dirt</li>
					<li><strong>Long-lasting:</strong> Can last 20+ years with proper care</li>
				</ul>
				
				<h2>Installation Process</h2>
				<p>Our certified installation process ensures optimal results:</p>
				<ol>
					<li>Surface preparation and concrete assessment</li>
					<li>Crack repair and surface profiling</li>
					<li>Primer application</li>
					<li>Base coat application</li>
					<li>Metallic pigment application</li>
					<li>Topcoat sealing</li>
				</ol>
				
				<h2>Why Choose Luxury Floors?</h2>
				<p>With our certification from industry leaders Leggari (U.S.) and Chromology (Toronto), we bring unmatched expertise to every project. Our 25-year warranty demonstrates our confidence in the quality and longevity of our work.</p>
			`,
			image: '/images/metallic-epoxy-guide.jpg',
			date: '2024-01-15',
			category: 'Guides',
			readTime: '8 min read',
			author: 'Luxury Floors Team'
		},
		{
			slug: 'epoxy-floors-vancouver-homes',
			title: '5 Reasons Why Epoxy Floors Are Perfect for Vancouver Homes',
			excerpt: 'Learn why epoxy flooring is an excellent choice for Vancouver homeowners.',
			content: `
				<p>Vancouver's unique climate and lifestyle make epoxy flooring an ideal choice for local homeowners. Here's why more Vancouver residents are choosing epoxy floors for their homes.</p>
				
				<h2>1. Weather Resistance</h2>
				<p>Vancouver's wet climate can be challenging for many flooring types. Epoxy floors are completely waterproof and resistant to moisture damage, making them perfect for basements, garages, and entryways.</p>
				
				<h2>2. Easy Snow and Salt Cleanup</h2>
				<p>During winter months, tracked-in snow and road salt can damage traditional flooring. Epoxy floors clean up easily with just a mop, protecting your investment year-round.</p>
				
				<h2>3. Supports Active Lifestyles</h2>
				<p>Vancouver residents love outdoor activities. Epoxy floors can handle wet gear, muddy boots, and sports equipment without showing wear or staining.</p>
				
				<h2>4. Increases Home Value</h2>
				<p>In Vancouver's competitive real estate market, premium flooring features like metallic epoxy can significantly increase your home's appeal and value.</p>
				
				<h2>5. Energy Efficiency</h2>
				<p>Epoxy floors reflect light, helping to brighten spaces and potentially reduce lighting costs - important in Vancouver's darker winter months.</p>
			`,
			image: '/images/vancouver-epoxy-homes.jpg',
			date: '2024-01-10',
			category: 'Tips',
			readTime: '5 min read',
			author: 'Luxury Floors Team'
		},
		{
			slug: 'epoxy-floor-maintenance-tips',
			title: 'Maintenance Tips for Long-Lasting Epoxy Floors',
			excerpt: 'Keep your epoxy floors looking pristine with these professional maintenance tips.',
			content: `
				<p>Proper maintenance is key to ensuring your epoxy floors maintain their beauty and durability for decades. Follow these professional tips to keep your floors in pristine condition.</p>
				
				<h2>Daily Cleaning</h2>
				<p>For daily maintenance, simply sweep or vacuum to remove loose debris. Use a damp mop with warm water for quick cleaning. Avoid harsh chemicals or abrasive cleaners.</p>
				
				<h2>Weekly Deep Cleaning</h2>
				<p>Once a week, clean with a pH-neutral cleaner diluted in warm water. This removes accumulated dirt and maintains the floor's shine.</p>
				
				<h2>Stain Prevention</h2>
				<ul>
					<li>Clean spills immediately to prevent staining</li>
					<li>Use mats at entrances to reduce tracked-in dirt</li>
					<li>Place protective pads under heavy furniture</li>
					<li>Avoid dragging heavy objects across the surface</li>
				</ul>
				
				<h2>What to Avoid</h2>
				<ul>
					<li>Citrus-based cleaners (can etch the surface)</li>
					<li>Abrasive scrubbers or steel wool</li>
					<li>Excessive amounts of water standing on the surface</li>
					<li>Sharp objects that could scratch the coating</li>
				</ul>
				
				<h2>Professional Maintenance</h2>
				<p>Consider professional cleaning and inspection annually to maintain your warranty and ensure optimal performance.</p>
			`,
			image: '/images/epoxy-maintenance.jpg',
			date: '2024-01-05',
			category: 'Maintenance',
			readTime: '6 min read',
			author: 'Luxury Floors Team'
		}
	];

	const post = blogPosts.find(p => p.slug === slug);

	if (!post) {
		throw error(404, 'Blog post not found');
	}

	return {
		post
	};
};