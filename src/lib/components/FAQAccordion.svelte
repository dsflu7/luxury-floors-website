<script lang="ts">
	import * as Accordion from '$lib/components/ui/accordion';
	import PortableText from './PortableText.svelte';

	interface FAQ {
		question: string;
		answer: string | any[]; // Can be plain string or PortableText content
		category?: string;
	}

	interface Props {
		faqs: FAQ[];
		allowMultiple?: boolean;
		defaultOpen?: string[];
	}

	let {
		faqs = [],
		allowMultiple = false,
		defaultOpen = []
	}: Props = $props();

	let value = $state<string | string[]>(allowMultiple ? defaultOpen : defaultOpen[0] || '');
</script>

<div class="w-full">
	{#if faqs.length > 0}
		<Accordion.Root bind:value multiple={allowMultiple} class="w-full space-y-2">
			{#each faqs as faq, index}
				<Accordion.Item value="item-{index}" class="border border-gray-200 rounded-lg overflow-hidden">
					<Accordion.Trigger class="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#C7A865] focus:ring-inset text-lg font-medium text-gray-900">
						{faq.question}
					</Accordion.Trigger>
					<Accordion.Content class="px-6 py-4 bg-gray-50 border-t border-gray-200">
						{#if typeof faq.answer === 'string'}
							<p class="text-gray-700 leading-relaxed">{faq.answer}</p>
						{:else}
							<PortableText value={faq.answer} />
						{/if}
					</Accordion.Content>
				</Accordion.Item>
			{/each}
		</Accordion.Root>
	{:else}
		<div class="text-center py-12 text-gray-500">
			<p>No frequently asked questions available.</p>
		</div>
	{/if}
</div>