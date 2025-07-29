<script lang="ts">
	import { getAllLocations } from '$lib/data/locations';
	import { generateMetaTags } from '$lib/utils/seo';
	import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '$lib/components/ui/card';
	import { Button } from '$lib/components/ui/button';
	import { Badge } from '$lib/components/ui/badge';
	import { page } from '$app/stores';

	let locations = getAllLocations();
	let domain = $derived(`${$page.url.protocol}//${$page.url.host}`);
	
	let meta = $derived(generateMetaTags({
		title: 'Service Locations | Luxury Floors Metro Vancouver',
		description: 'We provide premium luxury flooring services across Metro Vancouver including Vancouver, Burnaby, Richmond, Surrey, Langley, and surrounding areas. Find your local service area.',
		url: `${domain}/locations`,
		domain
	}));
</script>

<svelte:head>
	<title>{meta.title}</title>
	<meta name="description" content={meta.description} />
	<link rel="canonical" href={meta.canonical} />
	
	<!-- Open Graph -->
	<meta property="og:title" content={meta.openGraph.title} />
	<meta property="og:description" content={meta.openGraph.description} />
	<meta property="og:url" content={meta.openGraph.url} />
	<meta property="og:type" content={meta.openGraph.type} />
	{#each meta.openGraph.images as image}
		<meta property="og:image" content={image.url} />
		<meta property="og:image:width" content={image.width.toString()} />
		<meta property="og:image:height" content={image.height.toString()} />
		<meta property="og:image:alt" content={image.alt} />
	{/each}
	
	<!-- Twitter -->
	<meta name="twitter:card" content={meta.twitter.card} />
	<meta name="twitter:title" content={meta.twitter.title} />
	<meta name="twitter:description" content={meta.twitter.description} />
	<meta name="twitter:image" content={meta.twitter.image} />
</svelte:head>

<main class="container mx-auto px-4 py-8">
	<!-- Hero Section -->
	<section class="text-center mb-12">
		<h1 class="text-4xl md:text-5xl font-bold mb-6">Service Locations</h1>
		<p class="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
			We proudly serve Metro Vancouver and surrounding areas with premium luxury flooring services. 
			Find your local service area and get connected with our certified installation experts.
		</p>
	</section>

	<!-- Service Area Map Section -->
	<section class="mb-12">
		<div class="bg-muted rounded-lg p-8 text-center">
			<h2 class="text-3xl font-bold mb-4">Metro Vancouver Coverage</h2>
			<p class="text-lg text-muted-foreground mb-6">
				Our certified teams provide comprehensive luxury flooring services across the Greater Vancouver area, 
				ensuring consistent quality and professional installation wherever you are located.
			</p>
			<div class="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
				<div>
					<div class="text-2xl font-bold text-primary">{locations.length}+</div>
					<div class="text-sm text-muted-foreground">Cities Served</div>
				</div>
				<div>
					<div class="text-2xl font-bold text-primary">25+</div>
					<div class="text-sm text-muted-foreground">Years Experience</div>
				</div>
				<div>
					<div class="text-2xl font-bold text-primary">100%</div>
					<div class="text-sm text-muted-foreground">Local Teams</div>
				</div>
				<div>
					<div class="text-2xl font-bold text-primary">24/7</div>
					<div class="text-sm text-muted-foreground">Support</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Locations Grid -->
	<section class="mb-12">
		<h2 class="text-3xl font-bold text-center mb-8">Our Service Areas</h2>
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
			{#each locations as location}
				<Card class="h-full hover:shadow-lg transition-shadow">
					<CardHeader>
						<CardTitle class="flex items-center justify-between">
							{location.name}
							{#if location.featured}
								<Badge variant="default">Popular</Badge>
							{/if}
						</CardTitle>
						<CardDescription>{location.region}</CardDescription>
					</CardHeader>
					<CardContent class="flex-1 flex flex-col">
						<p class="text-sm text-muted-foreground mb-4 flex-1">
							{location.description}
						</p>
						
						<!-- Coverage Areas -->
						{#if location.coverageAreas && location.coverageAreas.length > 0}
							<div class="mb-4">
								<h4 class="font-semibold mb-2">Coverage Areas:</h4>
								<div class="flex flex-wrap gap-1">
									{#each location.coverageAreas.slice(0, 4) as area}
										<Badge variant="secondary" class="text-xs">{area}</Badge>
									{/each}
									{#if location.coverageAreas.length > 4}
										<Badge variant="outline" class="text-xs">+{location.coverageAreas.length - 4} more</Badge>
									{/if}
								</div>
							</div>
						{/if}

						<!-- Contact Info -->
						<div class="mb-4 space-y-2">
							{#if location.phone}
								<div class="text-sm">
									<span class="font-semibold">Phone:</span> 
									<a href="tel:{location.phone}" class="text-primary hover:underline">
										{location.phone}
									</a>
								</div>
							{/if}
							{#if location.email}
								<div class="text-sm">
									<span class="font-semibold">Email:</span> 
									<a href="mailto:{location.email}" class="text-primary hover:underline">
										{location.email}
									</a>
								</div>
							{/if}
						</div>

						<!-- CTA -->
						<div class="mt-auto space-y-2">
							<Button href="/locations/{location.slug}" class="w-full">
								View {location.name} Details
							</Button>
							<Button href="/contact?location={location.slug}" variant="outline" class="w-full">
								Get Local Quote
							</Button>
						</div>
					</CardContent>
				</Card>
			{/each}
		</div>
	</section>

	<!-- Call to Action -->
	<section class="text-center bg-muted rounded-lg p-8">
		<h2 class="text-3xl font-bold mb-4">Don't See Your Area?</h2>
		<p class="text-lg text-muted-foreground mb-6">
			We're constantly expanding our service areas. Contact us to discuss your luxury flooring project 
			and we'll do our best to accommodate your location.
		</p>
		<div class="flex flex-col sm:flex-row gap-4 justify-center">
			<Button href="/contact" size="lg">Contact Us</Button>
			<Button href="tel:+1-604-123-4567" variant="outline" size="lg">Call Direct</Button>
		</div>
	</section>
</main>
