<script lang="ts">
	import type { PageData } from './$types';
	import SEO from '$lib/components/SEO.svelte';
	import { generateBlogPostSchema } from '$lib/utils/structuredData';
	import { ChevronLeft } from 'svelte-radix';

	interface Props {
		data: PageData;
	}

	let { data }: Props = $props();
	const { post } = data;

	const blogPostSchema = generateBlogPostSchema({
		headline: post.title,
		description: post.excerpt,
		datePublished: post.date,
		dateModified: post.date,
		author: post.author,
		image: post.image,
		url: `/blog/${post.slug}`
	});
</script>

<SEO 
	title="{post.title} | Luxury Floors Blog"
	description={post.excerpt}
	structuredData={blogPostSchema}
/>

<article class="min-h-screen bg-white">
	<!-- Header -->
	<header class="bg-gray-50 py-8 border-b">
		<div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
			<a 
				href="/blog" 
				class="inline-flex items-center text-[#C7A865] hover:text-[#B8965A] mb-6 transition-colors duration-200"
			>
				<ChevronLeft class="w-4 h-4 mr-2" />
				Back to Blog
			</a>
			
			<div class="mb-6">
				<div class="flex items-center gap-4 mb-4">
					<span class="text-sm text-[#C7A865] font-medium bg-[#C7A865]/10 px-3 py-1 rounded-full">
						{post.category}
					</span>
					<span class="text-sm text-gray-500">
						{post.readTime}
					</span>
				</div>
				
				<h1 class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
					{post.title}
				</h1>
				
				<div class="flex items-center text-sm text-gray-500">
					<span>By {post.author}</span>
					<span class="mx-2">•</span>
					<time>
						{new Date(post.date).toLocaleDateString('en-US', { 
							year: 'numeric', 
							month: 'long', 
							day: 'numeric' 
						})}
					</time>
				</div>
			</div>
		</div>
	</header>

	<!-- Featured Image -->
	<div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
		<div class="aspect-video bg-gray-200 rounded-lg overflow-hidden">
			<!-- Placeholder for blog post image -->
			<div class="w-full h-full flex items-center justify-center text-gray-400">
				<svg class="w-16 h-16" fill="currentColor" viewBox="0 0 20 20">
					<path fill-rule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clip-rule="evenodd" />
				</svg>
			</div>
		</div>
	</div>

	<!-- Content -->
	<div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
		<div class="prose prose-lg max-w-none">
			<div class="text-xl text-gray-600 mb-8 font-medium">
				{post.excerpt}
			</div>
			
			<div class="blog-content">
				{@html post.content}
			</div>
		</div>

		<!-- CTA Section -->
		<div class="mt-16 bg-gray-50 rounded-lg p-8 text-center">
			<h3 class="text-2xl font-bold text-gray-900 mb-4">
				Ready to Get Started?
			</h3>
			<p class="text-gray-600 mb-6 max-w-2xl mx-auto">
				Contact our team to discuss your flooring project and get a free consultation.
			</p>
			<div class="flex flex-col sm:flex-row gap-4 justify-center">
				<a 
					href="/services"
					class="inline-block bg-[#C7A865] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#B8965A] transition-colors duration-200"
				>
					View Our Services
				</a>
				<a 
					href="/contact"
					class="inline-block border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-200"
				>
					Get Free Quote
				</a>
			</div>
		</div>

		<!-- Navigation -->
		<div class="mt-12 flex justify-between items-center pt-8 border-t">
			<a 
				href="/blog" 
				class="text-[#C7A865] hover:text-[#B8965A] font-medium transition-colors duration-200"
			>
				← All Blog Posts
			</a>
			
			<div class="flex gap-4">
				<a 
					href="/blog"
					class="text-gray-600 hover:text-gray-900 transition-colors duration-200"
				>
					More Articles
				</a>
			</div>
		</div>
	</div>
</article>

<style>
	:global(.blog-content h2) {
		@apply text-2xl font-bold text-gray-900 mt-8 mb-4 first:mt-0;
	}
	
	:global(.blog-content h3) {
		@apply text-xl font-semibold text-gray-900 mt-6 mb-3;
	}
	
	:global(.blog-content p) {
		@apply text-gray-700 leading-relaxed mb-4;
	}
	
	:global(.blog-content ul) {
		@apply list-disc list-inside mb-4 space-y-2;
	}
	
	:global(.blog-content ol) {
		@apply list-decimal list-inside mb-4 space-y-2;
	}
	
	:global(.blog-content li) {
		@apply text-gray-700;
	}
	
	:global(.blog-content strong) {
		@apply font-semibold text-gray-900;
	}
	
	:global(.blog-content a) {
		@apply text-[#C7A865] hover:text-[#B8965A] underline;
	}
</style>