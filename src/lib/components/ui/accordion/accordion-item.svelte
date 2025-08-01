<script lang="ts">
	import { Accordion as AccordionPrimitive } from "bits-ui";
	import type { Snippet } from "svelte";

	interface Props {
		children: Snippet;
		value: string;
		disabled?: boolean;
		class?: string;
	}

	let {
		children,
		value,
		disabled = false,
		class: className,
		...restProps
	}: Props = $props();
</script>

<AccordionPrimitive.Item
	{value}
	{disabled}
	class="border-b {className}"
	{...restProps}
>
	{@render children()}
</AccordionPrimitive.Item>