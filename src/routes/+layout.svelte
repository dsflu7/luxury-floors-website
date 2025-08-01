<script lang="ts">
	import '../app.css';
	import { fade } from 'svelte/transition';
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	import SEO from '$lib/components/SEO.svelte';
	import { Toaster } from '$lib/components/ui/sonner';
	import { CaretUp } from 'svelte-radix';
	import { generateLocalBusinessSchema } from '$lib/utils/structuredData';

	interface Props {
		children?: import('svelte').Snippet;
	}

	let scrollY = $state(0);
	let { children }: Props = $props();

	// Generate structured data for the business
	const businessSchema = generateLocalBusinessSchema();
</script>

<SEO structuredData={businessSchema} />

<svelte:head>
	<link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
	<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
	<link rel="shortcut icon" href="/favicon.ico" />
	<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
	<meta name="apple-mobile-web-app-title" content="Luxury Floors" />
	<link rel="manifest" href="/site.webmanifest" />
	
	<!-- SEO: Robots and Sitemap -->
	<link rel="sitemap" type="application/xml" href="/sitemap.xml" />
</svelte:head>

<svelte:window bind:scrollY />

<Toaster />

<div class="flex h-screen flex-col justify-between">
	<Header />
	<main class="">
		{@render children?.()}
	</main>
	<Footer />
</div>

{#if scrollY !== 0}
	<button
		transition:fade
		class="group fixed bottom-6 right-6 z-[999] rounded-full bg-[#C7A865] object-cover p-4 shadow-lg transition-all duration-500 hover:-translate-y-1"
		aria-label="Scroll to top"
		onclick={() => {
			window.scrollTo({ top: 0, behavior: 'smooth' });
		}}
	>
		<CaretUp color="white" class="scale-125 transition-all duration-500 group-hover:scale-110" />
	</button>
{/if}

<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="" />
<link
	href="https://fonts.googleapis.com/css2?family=Alatsi&family=Cantarell:ital,wght@0,400;0,700;1,400;1,700&display=swap"
	rel="stylesheet"
/>
