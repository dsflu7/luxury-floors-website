<script lang="ts">
	import type { HTMLAttributes } from "svelte/elements";
	import { badgeVariants, type Variant } from ".";
	import { cn } from "$lib/utils";

	type $$Props = HTMLAttributes<HTMLDivElement> & {
		variant?: Variant;
	};

	let { variant = "default", class: className, ...restProps }: $$Props = $props();
</script>

<div class={cn(badgeVariants({ variant }), className)} {...restProps}>
	{@render children?.()}
</div>
