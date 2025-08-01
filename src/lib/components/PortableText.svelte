<script lang="ts">
	import { PortableText } from '@portabletext/svelte';

	interface Props {
		value: any[];
	}

	let { value }: Props = $props();

	// Custom components for portable text rendering
	const components = {
		block: {
			normal: ({ children }: { children: any }) => `<p class="mb-4 text-gray-700 leading-relaxed">${children}</p>`,
			h1: ({ children }: { children: any }) => `<h1 class="text-4xl font-bold mb-6 text-gray-900">${children}</h1>`,
			h2: ({ children }: { children: any }) => `<h2 class="text-3xl font-semibold mb-5 text-gray-900">${children}</h2>`,
			h3: ({ children }: { children: any }) => `<h3 class="text-2xl font-medium mb-4 text-gray-900">${children}</h3>`,
			h4: ({ children }: { children: any }) => `<h4 class="text-xl font-medium mb-3 text-gray-900">${children}</h4>`
		}
	};
</script>

<div class="portable-text prose prose-lg max-w-none">
	<PortableText {value} {components} />
</div>

<style>
	:global(.portable-text p:last-child) {
		margin-bottom: 0;
	}
	
	:global(.portable-text h1:first-child),
	:global(.portable-text h2:first-child),
	:global(.portable-text h3:first-child) {
		margin-top: 0;
	}
</style>