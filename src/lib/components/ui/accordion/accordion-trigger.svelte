<script lang="ts">
	import { Accordion as AccordionPrimitive } from "bits-ui";
	import { ChevronDown } from "svelte-radix";
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

<AccordionPrimitive.Header class="flex">
	<AccordionPrimitive.Trigger
		class={cn(
			"flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
			className
		)}
		{...restProps}
	>
		{@render children()}
		<ChevronDown class="h-4 w-4 shrink-0 transition-transform duration-200" />
	</AccordionPrimitive.Trigger>
</AccordionPrimitive.Header>