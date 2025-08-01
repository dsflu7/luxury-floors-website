<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import Image from '$lib/components/Image.svelte';
	import { goto } from '$app/navigation';

	interface Props {
		title: string;
		description: string;
		image?: string;
		features?: string[];
		href?: string;
		imageAlt?: string;
	}

	let {
		title,
		description,
		image = '/assets/default-service.jpg',
		features = [],
		href = '/services',
		imageAlt = title
	}: Props = $props();

	function handleLearnMore() {
		goto(href);
	}
</script>

<div class="group relative overflow-hidden rounded-lg bg-white shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
	<!-- Service Image -->
	<div class="relative h-48 overflow-hidden">
		<Image
			src={image}
			alt={imageAlt}
			class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
			loading="lazy"
		/>
		<div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
	</div>

	<!-- Card Content -->
	<div class="p-6">
		<h3 class="mb-3 text-xl font-semibold text-gray-900 transition-colors group-hover:text-[#C7A865]">
			{title}
		</h3>
		
		<p class="mb-4 text-gray-600 leading-relaxed">
			{description}
		</p>

		{#if features.length > 0}
			<ul class="mb-4 space-y-1">
				{#each features.slice(0, 3) as feature}
					<li class="flex items-center text-sm text-gray-600">
						<svg class="mr-2 h-4 w-4 text-[#C7A865]" fill="currentColor" viewBox="0 0 20 20">
							<path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
						</svg>
						{feature}
					</li>
				{/each}
			</ul>
		{/if}

		<Button 
			onclick={handleLearnMore}
			class="w-full bg-[#C7A865] hover:bg-[#B8984A] text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200"
		>
			Learn More
		</Button>
	</div>
</div>