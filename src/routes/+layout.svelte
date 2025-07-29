<script lang="ts">
	import '../app.css';
	import { fade } from 'svelte/transition';
	import { PUBLIC_COMPANY_NAME, PUBLIC_DOMAIN } from '$env/static/public';
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	import { Toaster } from '$lib/components/ui/sonner';
	import { CaretUp } from 'svelte-radix';
	import { page } from '$app/stores';
	import { generateOrganizationSchema } from '$lib/utils/seo';

	interface Props {
		children?: import('svelte').Snippet;
	}

	let scrollY = $state(0);
	let { children }: Props = $props();

	// Generate default SEO data
	let domain = $derived(`${$page.url.protocol}//${$page.url.host}`);
	let organizationSchema = $derived(generateOrganizationSchema(domain));
</script>

<svelte:head>
	<title>{PUBLIC_COMPANY_NAME} - Premium Luxury Floor Installations in Metro Vancouver</title>

	<!-- Favicon and App Icons -->
	<link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
	<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
	<link rel="shortcut icon" href="/favicon.ico" />
	<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
	<meta name="apple-mobile-web-app-title" content="Luxury Floors" />
	<link rel="manifest" href="/site.webmanifest" />

	<!-- Primary Meta Tags -->
	<meta name="title" content="Luxury Floors - Premium Metallic Epoxy Floors | 25-Year Warranty" />
	<meta name="description" content="Premium luxury floor installations in Metro Vancouver. Specializing in metallic epoxy floors, flake epoxy, epoxy countertops, and decorative coatings with 25-year warranty. Certified by Leggari & Chromology." />
	<meta name="keywords" content="metallic epoxy floors, flake epoxy flooring, epoxy countertops, luxury floors, decorative concrete, Vancouver flooring, BC floor installation, premium flooring, 25 year warranty" />
	<meta name="author" content="Luxury Floors" />
	<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
	<meta name="googlebot" content="index, follow, max-video-preview:-1, max-image-preview:large, max-snippet:-1" />

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content={domain} />
	<meta property="og:title" content="Luxury Floors - Premium Metallic Epoxy Floors | 25-Year Warranty" />
	<meta property="og:description" content="Premium luxury floor installations in Metro Vancouver. Specializing in metallic epoxy floors, flake epoxy, epoxy countertops, and decorative coatings with 25-year warranty." />
	<meta property="og:image" content="{domain}/assets/logo.png" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta property="og:locale" content="en_CA" />
	<meta property="og:site_name" content="Luxury Floors" />

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content={domain} />
	<meta property="twitter:title" content="Luxury Floors - Premium Metallic Epoxy Floors | 25-Year Warranty" />
	<meta property="twitter:description" content="Premium luxury floor installations in Metro Vancouver. Specializing in metallic epoxy floors, flake epoxy, epoxy countertops, and decorative coatings with 25-year warranty." />
	<meta property="twitter:image" content="{domain}/assets/logo.png" />

	<!-- Geographic Information -->
	<meta name="geo.placename" content="Metro Vancouver, British Columbia, Canada" />
	<meta name="geo.region" content="CA-BC" />
	<meta name="geo.position" content="49.2827;-123.1207" />
	<meta name="ICBM" content="49.2827, -123.1207" />

	<!-- SEO: Sitemap and Verification -->
	<link rel="sitemap" type="application/xml" href="/sitemap.xml" />
	<link rel="canonical" href={domain + $page.url.pathname} />

	<!-- Preconnect for performance -->
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />

	<!-- Schema.org structured data -->
	{@html `<script type="application/ld+json">${JSON.stringify(organizationSchema)}</script>`}
</svelte:head>

<svelte:window bind:scrollY />

<Toaster />

<!-- {#key load} -->
<div class="flex h-screen flex-col justify-between">
	<Header />
	<main class="">
		{@render children?.()}
	</main>
	<Footer />
</div>
<!-- {/key} -->

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
