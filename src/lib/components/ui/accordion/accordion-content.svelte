<script lang="ts">
	import { Accordion as AccordionPrimitive } from "bits-ui";
	import type { Snippet } from "svelte";
	import { cn } from "$lib/utils";

	interface Props {
		children: Snippet;
		class?: string;
	}

	let {
		children,
		class: className,
		...restProps
	}: Props = $props();
</script>

<AccordionPrimitive.Content
	class={cn(
		"overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
		className
	)}
	{...restProps}
>
	<div class="pb-4 pt-0">
		{@render children()}
	</div>
</AccordionPrimitive.Content>