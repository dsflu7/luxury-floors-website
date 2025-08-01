<script lang="ts">
	import SEO from '$lib/components/SEO.svelte';
	import { generateWebPageSchema } from '$lib/utils/structuredData';

	// Mock blog posts data - in real implementation this would come from Sanity CMS
	const blogPosts = [
		{
			id: 1,
			title: 'The Ultimate Guide to Metallic Epoxy Flooring',
			excerpt: 'Discover everything you need to know about metallic epoxy flooring, from benefits to installation process.',
			image: '/images/metallic-epoxy-guide.jpg',
			date: '2024-01-15',
			category: 'Guides',
			slug: 'ultimate-guide-metallic-epoxy-flooring',
			readTime: '8 min read'
		},
		{
			id: 2,
			title: '5 Reasons Why Epoxy Floors Are Perfect for Vancouver Homes',
			excerpt: 'Learn why epoxy flooring is an excellent choice for Vancouver homeowners.',
			image: '/images/vancouver-epoxy-homes.jpg',
			date: '2024-01-10',
			category: 'Tips',
			slug: 'epoxy-floors-vancouver-homes',
			readTime: '5 min read'
		},
		{
			id: 3,
			title: 'Maintenance Tips for Long-Lasting Epoxy Floors',
			excerpt: 'Keep your epoxy floors looking pristine with these professional maintenance tips.',
			image: '/images/epoxy-maintenance.jpg',
			date: '2024-01-05',
			category: 'Maintenance',
			slug: 'epoxy-floor-maintenance-tips',
			readTime: '6 min read'
		}
	];

	const categories = ['All', 'Guides', 'Tips', 'Maintenance', 'Projects'];
	let selectedCategory = 'All';

	$: filteredPosts = selectedCategory === 'All' 
		? blogPosts 
		: blogPosts.filter(post => post.category === selectedCategory);

	const pageSchema = generateWebPageSchema({
		name: 'Blog - Luxury Floors',
		description: 'Expert insights, tips, and guides on epoxy flooring solutions for Vancouver homes and businesses.',
		url: '/blog'
	});
</script>

<SEO 
	title="Blog - Expert Flooring Insights | Luxury Floors"
	description="Expert insights, tips, and guides on epoxy flooring solutions for Vancouver homes and businesses. Stay updated with the latest trends and maintenance tips."
	structuredData={pageSchema}
/>

<div class="min-h-screen bg-gray-50">
	<!-- Hero Section -->
	<section class="bg-white py-16">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<div class="text-center">
				<h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
					Flooring Insights & Tips
				</h1>
				<p class="text-xl text-gray-600 max-w-3xl mx-auto">
					Expert advice, maintenance tips, and the latest trends in luxury epoxy flooring solutions for Vancouver homes and businesses.
				</p>
			</div>
		</div>
	</section>

	<!-- Category Filter -->
	<section class="py-8 bg-white border-b">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<div class="flex flex-wrap gap-4 justify-center">
				{#each categories as category}
					<button
						onclick={() => selectedCategory = category}
						class="px-6 py-2 rounded-full transition-colors duration-200 {
							selectedCategory === category
								? 'bg-[#C7A865] text-white'
								: 'bg-gray-200 text-gray-700 hover:bg-gray-300'
						}"
					>
						{category}
					</button>
				{/each}
			</div>
		</div>
	</section>

	<!-- Blog Posts Grid -->
	<section class="py-16">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			{#if filteredPosts.length === 0}
				<div class="text-center py-12">
					<p class="text-gray-500 text-lg">No blog posts found in this category.</p>
				</div>
			{:else}
				<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
					{#each filteredPosts as post}
						<article class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
							<div class="aspect-video bg-gray-200 relative">
								<!-- Placeholder for blog post image -->
								<div class="absolute inset-0 flex items-center justify-center text-gray-400">
									<svg class="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
										<path fill-rule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clip-rule="evenodd" />
									</svg>
								</div>
							</div>
							
							<div class="p-6">
								<div class="flex items-center justify-between mb-3">
									<span class="text-sm text-[#C7A865] font-medium">
										{post.category}
									</span>
									<span class="text-sm text-gray-500">
										{post.readTime}
									</span>
								</div>
								
								<h3 class="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
									{post.title}
								</h3>
								
								<p class="text-gray-600 mb-4 line-clamp-3">
									{post.excerpt}
								</p>
								
								<div class="flex items-center justify-between">
									<time class="text-sm text-gray-500">
										{new Date(post.date).toLocaleDateString('en-US', { 
											year: 'numeric', 
											month: 'long', 
											day: 'numeric' 
										})}
									</time>
									
									<a 
										href="/blog/{post.slug}"
										class="text-[#C7A865] hover:text-[#B8965A] font-medium text-sm transition-colors duration-200"
									>
										Read More →
									</a>
								</div>
							</div>
						</article>
					{/each}
				</div>
			{/if}
		</div>
	</section>

	<!-- CTA Section -->
	<section class="bg-gray-900 py-16">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
			<h2 class="text-3xl font-bold text-white mb-6">
				Ready to Transform Your Space?
			</h2>
			<p class="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
				Get expert flooring consultation and see how we can bring your vision to life with premium epoxy solutions.
			</p>
			<a 
				href="/services"
				class="inline-block bg-[#C7A865] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#B8965A] transition-colors duration-200"
			>
				Explore Our Services
			</a>
		</div>
	</section>
</div>

<style>
	.line-clamp-2 {
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}
	
	.line-clamp-3 {
		display: -webkit-box;
		-webkit-line-clamp: 3;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}
</style>