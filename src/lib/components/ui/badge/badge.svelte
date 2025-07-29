<script lang="ts">
	import type { HTMLAttributes } from "svelte/elements";
	import { badgeVariants, type Variant } from ".";
	import { cn } from "$lib/utils";
	import type { Snippet } from "svelte";

	type $$Props = HTMLAttributes<HTMLDivElement> & {
		variant?: Variant;
		children?: Snippet;
	};

	let { variant = "default", class: className, children, ...restProps }: $$Props = $props();
</script>

<div class={cn(badgeVariants({ variant }), className)} {...restProps}>
	{@render children?.()}
</div>
