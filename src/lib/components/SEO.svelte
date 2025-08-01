<script lang="ts">
	import { page } from '$app/stores';
	import { PUBLIC_COMPANY_NAME, PUBLIC_DOMAIN } from '$env/static/public';

	interface Props {
		title?: string;
		description?: string;
		keywords?: string;
		image?: string;
		type?: 'website' | 'article' | 'product' | 'service';
		structuredData?: Record<string, any>;
		canonical?: string;
	}

	let {
		title = PUBLIC_COMPANY_NAME,
		description = 'High-end flooring solutions for your home or business. Premium epoxy floors, metallic finishes, and luxury floor coatings in British Columbia.',
		keywords = 'luxury floors, premium flooring, epoxy floors, metallic epoxy, flake epoxy, epoxy countertops, concrete walls, British Columbia',
		image = '/favicon-96x96.png',
		type = 'website',
		structuredData = null,
		canonical = ''
	}: Props = $props();

	const fullTitle = title === PUBLIC_COMPANY_NAME ? title : `${title} | ${PUBLIC_COMPANY_NAME}`;
	const fullImage = image.startsWith('http') ? image : `https://${PUBLIC_DOMAIN}${image}`;
	const currentUrl = canonical || `https://${PUBLIC_DOMAIN}${$page.url.pathname}`;
</script>

<svelte:head>
	<!-- Basic Meta Tags -->
	<title>{fullTitle}</title>
	<meta name="description" content={description} />
	<meta name="keywords" content={keywords} />
	<link rel="canonical" href={currentUrl} />

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content={type} />
	<meta property="og:title" content={fullTitle} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content={fullImage} />
	<meta property="og:url" content={currentUrl} />
	<meta property="og:site_name" content={PUBLIC_COMPANY_NAME} />

	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={fullTitle} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={fullImage} />

	<!-- Additional Meta -->
	<meta name="author" content={PUBLIC_COMPANY_NAME} />
	<meta name="geo.placename" content="British Columbia, Canada" />
	<meta name="geo.region" content="CA-BC" />
	<meta name="robots" content="index, follow" />

	<!-- Structured Data -->
	{#if structuredData}
		{@html `<script type="application/ld+json">${JSON.stringify(structuredData)}</script>`}
	{/if}
</svelte:head>