<script lang="ts">
	import { getAllServices } from '$lib/data/services';
	import { generateMetaTags } from '$lib/utils/seo';
	import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '$lib/components/ui/card';
	import { Button } from '$lib/components/ui/button';
	import Image from '$lib/components/Image.svelte';
	import { page } from '$app/stores';

	let services = getAllServices();
	let domain = $derived(`${$page.url.protocol}//${$page.url.host}`);
	
	let meta = $derived(generateMetaTags({
		title: 'Premium Flooring Services | Luxury Floors Vancouver',
		description: 'Explore our complete range of luxury flooring services including metallic epoxy floors, flake epoxy, epoxy countertops, textured decks, and decorative concrete walls.',
		url: `${domain}/services`,
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
		<h1 class="text-4xl md:text-5xl font-bold mb-6">Premium Flooring Services</h1>
		<p class="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
			Discover our comprehensive range of luxury flooring solutions. From stunning metallic epoxy floors to durable textured deck coatings, we provide premium installations with a 25-year warranty.
		</p>
	</section>

	<!-- Services Grid -->
	<section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
		{#each services as service}
			<Card class="h-full hover:shadow-lg transition-shadow">
				<div class="aspect-video overflow-hidden rounded-t-lg">
					<Image 
						url={service.images[0]} 
						description={service.title}
						class="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
						fetchpriority="high"
					/>
				</div>
				<CardHeader>
					<CardTitle class="text-xl">{service.title.split('|')[0].trim()}</CardTitle>
					<CardDescription class="text-sm">{service.shortDescription}</CardDescription>
				</CardHeader>
				<CardContent class="flex-1 flex flex-col">
					<p class="text-sm text-muted-foreground mb-4 flex-1">
						{service.description.substring(0, 150)}...
					</p>
					
					<!-- Key Benefits -->
					<div class="mb-4">
						<h4 class="font-semibold mb-2">Key Benefits:</h4>
						<ul class="text-sm space-y-1">
							{#each service.benefits.slice(0, 3) as benefit}
								<li class="flex items-center">
									<span class="w-2 h-2 bg-primary rounded-full mr-2"></span>
									{benefit}
								</li>
							{/each}
						</ul>
					</div>

					<!-- Pricing -->
					{#if service.price}
						<div class="mb-4">
							<span class="text-lg font-bold text-primary">
								From ${service.price.basePrice} {service.price.unit}
							</span>
						</div>
					{/if}

					<!-- CTA -->
					<div class="mt-auto">
						<Button href="/services/{service.slug}" class="w-full">
							Learn More
						</Button>
					</div>
				</CardContent>
			</Card>
		{/each}
	</section>

	<!-- Call to Action -->
	<section class="text-center bg-muted rounded-lg p-8">
		<h2 class="text-3xl font-bold mb-4">Ready to Transform Your Space?</h2>
		<p class="text-lg text-muted-foreground mb-6">
			Get a free consultation and quote for your luxury flooring project. Our certified experts are ready to help bring your vision to life.
		</p>
		<div class="flex flex-col sm:flex-row gap-4 justify-center">
			<Button href="/contact" size="lg">Get Free Quote</Button>
			<Button href="/gallery" variant="outline" size="lg">View Gallery</Button>
		</div>
	</section>
</main>
