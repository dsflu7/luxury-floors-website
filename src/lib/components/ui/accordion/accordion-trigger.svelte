<script lang="ts">
	import { Accordion as AccordionPrimitive } from "bits-ui";
	import { cn } from "$lib/utils.js";
	import ChevronDown from "svelte-radix/ChevronDown.svelte";

	type $$Props = AccordionPrimitive.TriggerProps;

	let className: $$Props["class"] = undefined;
	export { className as class };
</script>

<AccordionPrimitive.Trigger
	class={cn(
		"flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
		className
	)}
	{...$$restProps}
>
	<slot />
	<ChevronDown class="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" />
</AccordionPrimitive.Trigger>
