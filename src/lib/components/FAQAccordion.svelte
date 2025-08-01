<script lang="ts">
	import { ChevronDown } from 'svelte-radix';
	import PortableText from './PortableText.svelte';

	interface FAQ {
		question: string;
		answer: string | any[]; // Can be plain string or PortableText content
		category?: string;
	}

	interface Props {
		faqs: FAQ[];
		allowMultiple?: boolean;
		defaultOpen?: number[];
	}

	let {
		faqs = [],
		allowMultiple = false,
		defaultOpen = []
	}: Props = $props();

	let openItems = $state(new Set(defaultOpen));

	function toggleItem(index: number) {
		const newOpenItems = new Set(openItems);
		
		if (newOpenItems.has(index)) {
			newOpenItems.delete(index);
		} else {
			if (!allowMultiple) {
				newOpenItems.clear();
			}
			newOpenItems.add(index);
		}
		
		openItems = newOpenItems;
	}

	function isOpen(index: number) {
		return openItems.has(index);
	}

	// Group FAQs by category if categories exist
	let groupedFaqs = $derived(() => {
		const hasCategories = faqs.some(faq => faq.category);
		
		if (!hasCategories) {
			return [{ category: null, faqs }];
		}

		const groups = faqs.reduce((acc, faq, index) => {
			const category = faq.category || 'General';
			if (!acc[category]) {
				acc[category] = [];
			}
			acc[category].push({ ...faq, originalIndex: index });
			return acc;
		}, {} as Record<string, (FAQ & { originalIndex: number })[]>);

		return Object.entries(groups).map(([category, categoryFaqs]) => ({
			category,
			faqs: categoryFaqs
		}));
	});
</script>

<div class="space-y-6">
	{#each groupedFaqs as group}
		{#if group.category}
			<div>
				<h3 class="mb-4 text-xl font-semibold text-gray-900 border-b border-gray-200 pb-2">
					{group.category}
				</h3>
				<div class="space-y-2">
					{#each group.faqs as faq, groupIndex}
						{@const index = 'originalIndex' in faq ? faq.originalIndex : groupIndex}
						<div class="border border-gray-200 rounded-lg overflow-hidden">
							<button
								onclick={() => toggleItem(index)}
								class="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#C7A865] focus:ring-inset"
								aria-expanded={isOpen(index)}
								aria-controls="faq-answer-{index}"
							>
								<div class="flex items-center justify-between">
									<h4 class="text-lg font-medium text-gray-900 pr-4">
										{faq.question}
									</h4>
									<ChevronDown 
										class="h-5 w-5 text-gray-500 transition-transform duration-200 {
											isOpen(index) ? 'transform rotate-180' : ''
										}"
									/>
								</div>
							</button>
							
							{#if isOpen(index)}
								<div 
									id="faq-answer-{index}"
									class="px-6 py-4 bg-gray-50 border-t border-gray-200"
									role="region"
									aria-labelledby="faq-question-{index}"
								>
									{#if typeof faq.answer === 'string'}
										<p class="text-gray-700 leading-relaxed">{faq.answer}</p>
									{:else}
										<PortableText value={faq.answer} />
									{/if}
								</div>
							{/if}
						</div>
					{/each}
				</div>
			</div>
		{:else}
			<div class="space-y-2">
				{#each group.faqs as faq, index}
					<div class="border border-gray-200 rounded-lg overflow-hidden">
						<button
							onclick={() => toggleItem(index)}
							class="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#C7A865] focus:ring-inset"
							aria-expanded={isOpen(index)}
							aria-controls="faq-answer-{index}"
							id="faq-question-{index}"
						>
							<div class="flex items-center justify-between">
								<h4 class="text-lg font-medium text-gray-900 pr-4">
									{faq.question}
								</h4>
								<ChevronDown 
									class="h-5 w-5 text-gray-500 transition-transform duration-200 {
										isOpen(index) ? 'transform rotate-180' : ''
									}"
								/>
							</div>
						</button>
						
						{#if isOpen(index)}
							<div 
								id="faq-answer-{index}"
								class="px-6 py-4 bg-gray-50 border-t border-gray-200"
								role="region"
								aria-labelledby="faq-question-{index}"
							>
								{#if typeof faq.answer === 'string'}
									<p class="text-gray-700 leading-relaxed">{faq.answer}</p>
								{:else}
									<PortableText value={faq.answer} />
								{/if}
							</div>
						{/if}
					</div>
				{/each}
			</div>
		{/if}
	{/each}
</div>

{#if faqs.length === 0}
	<div class="text-center py-12 text-gray-500">
		<p>No frequently asked questions available.</p>
	</div>
{/if}