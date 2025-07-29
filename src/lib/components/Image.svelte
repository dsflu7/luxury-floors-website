<script lang="ts">
	import { optimize } from '$lib/image';

	interface Props {
		url: string;
		description: string;
		class?: string;
		size?: number[];
		quality?: number;
		fetchpriority?: "high" | "low";
		width?: string;
		height?: string;
		loading?: "lazy" | "eager";
		sizes?: string;
	}

	let { 
		url, 
		description, 
		class: className = "", 
		size = [480, 640, 828, 1200, 1920], 
		quality = 85, 
		fetchpriority = "low", 
		width, 
		height,
		loading = "lazy",
		sizes = "(min-width: 1024px) 1200px, (min-width: 768px) 828px, (min-width: 640px) 640px, 480px"
	}: Props = $props();

	// For enhanced images, we'll prepare optimized attributes
	let optimizedSrc = $derived(url);
	let optimizedSrcset = $derived(optimize(url, size, quality));
</script>

<img
	src={optimizedSrc}
	srcset={optimizedSrcset}
	alt={description}
	class={className}
	{width}
	{height}
	{sizes}
	{loading}
	{fetchpriority}
	decoding="async"
/>
