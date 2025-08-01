<script lang="ts">
	import { Accordion as AccordionPrimitive } from "bits-ui";
	import type { Snippet } from "svelte";

	interface Props {
		children: Snippet;
		multiple?: boolean;
		disabled?: boolean;
		value?: string | string[];
		onValueChange?: (value: string | string[] | undefined) => void;
		class?: string;
	}

	let {
		children,
		multiple = false,
		disabled = false,
		value = $bindable(),
		onValueChange,
		class: className,
		...restProps
	}: Props = $props();
</script>

<AccordionPrimitive.Root
	bind:value
	{onValueChange}
	{multiple}
	{disabled}
	class="w-full {className}"
	{...restProps}
>
	{@render children()}
</AccordionPrimitive.Root>