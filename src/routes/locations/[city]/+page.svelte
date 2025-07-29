<script lang="ts">
	import { generateMetaTags, generateLocalBusinessSchema } from '$lib/utils/seo';
	import { getAllServices } from '$lib/data/services';
	import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '$lib/components/ui/card';
	import { Button } from '$lib/components/ui/button';
	import { Badge } from '$lib/components/ui/badge';
	import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '$lib/components/ui/accordion';
	import Image from '$lib/components/Image.svelte';
	import { page } from '$app/stores';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
	let location = $derived(data.location);
	let services = getAllServices();
	let domain = $derived(`${$page.url.protocol}//${$page.url.host}`);
	
	let meta = $derived(generateMetaTags({
		title: `${location.name} Luxury Flooring Services | Premium Epoxy Floors ${location.name}`,
		description: `Professional luxury flooring services in ${location.name}, BC. Specializing in metallic epoxy floors, flake epoxy, countertops & more. 25-year warranty. Free quotes!`,
		url: `${domain}/locations/${location.slug}`,
		domain,
		image: '/assets/landing/floor1.png'
	}));

	let businessSchema = $derived(generateLocalBusinessSchema(location, domain));
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

	<!-- Local Business Schema -->
	{@html `<script type="application/ld+json">${JSON.stringify(businessSchema)}</script>`}
</svelte:head>

<main class="container mx-auto px-4 py-8">
	<!-- Hero Section -->
	<section class="mb-12">
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
			<div>
				<div class="mb-4">
					<a href="/locations" class="text-primary hover:underline">← Back to Locations</a>
				</div>
				<h1 class="text-4xl md:text-5xl font-bold mb-6">
					Luxury Flooring Services in {location.name}
				</h1>
				<p class="text-xl text-muted-foreground mb-6">{location.description}</p>
				
				<div class="mb-6 space-y-2">
					{#if location.contact?.phone}
						<div class="flex items-center">
							<span class="font-semibold mr-2">Call:</span>
							<a href="tel:{location.contact.phone}" class="text-primary hover:underline text-lg">
								{location.contact.phone}
							</a>
						</div>
					{/if}
					{#if location.contact?.email}
						<div class="flex items-center">
							<span class="font-semibold mr-2">Email:</span>
							<a href="mailto:{location.contact.email}" class="text-primary hover:underline">
								{location.contact.email}
							</a>
						</div>
					{/if}
				</div>

				<div class="flex flex-col sm:flex-row gap-4">
					<Button href="/contact?location={location.slug}" size="lg">Get Free Quote</Button>
					{#if location.contact?.phone}
						<Button href="tel:{location.contact.phone}" variant="outline" size="lg">Call Now</Button>
					{:else}
						<Button href="tel:+1-604-123-4567" variant="outline" size="lg">Call Now</Button>
					{/if}
				</div>
			</div>
			
			<div class="order-first lg:order-last">
				<div class="aspect-video rounded-lg overflow-hidden">
					<Image 
						url="/assets/landing/floor1.png" 
						description="Luxury flooring in {location.name}"
						class="w-full h-full object-cover"
						fetchpriority="high"
					/>
				</div>
			</div>
		</div>
	</section>

	<!-- Coverage Areas -->
	{#if location.coverageAreas && location.coverageAreas.length > 0}
		<section class="mb-12">
			<h2 class="text-3xl font-bold mb-6">Service Areas in {location.name}</h2>
			<div class="bg-muted rounded-lg p-6">
				<p class="mb-4 text-muted-foreground">
					We provide comprehensive luxury flooring services throughout {location.name} and surrounding neighborhoods:
				</p>
				<div class="flex flex-wrap gap-2">
					{#each location.coverageAreas as area}
						<Badge variant="secondary">{area}</Badge>
					{/each}
				</div>
			</div>
		</section>
	{/if}

	<!-- Services -->
	<section class="mb-12">
		<h2 class="text-3xl font-bold mb-6">Our Services in {location.name}</h2>
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
			{#each services as service}
				<Card class="h-full hover:shadow-lg transition-shadow">
					<div class="aspect-video overflow-hidden rounded-t-lg">
						<Image 
							url={service.images[0]} 
							description={service.title}
							class="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
						/>
					</div>
					<CardHeader>
						<CardTitle class="text-lg">{service.title.split('|')[0].trim()}</CardTitle>
						<CardDescription class="text-sm">{service.shortDescription}</CardDescription>
					</CardHeader>
					<CardContent class="flex-1 flex flex-col">
						{#if service.price}
							<div class="mb-4">
								<span class="text-lg font-bold text-primary">
									From ${service.price.basePrice} {service.price.unit}
								</span>
							</div>
						{/if}
						<div class="mt-auto">
							<Button href="/services/{service.slug}" class="w-full">Learn More</Button>
						</div>
					</CardContent>
				</Card>
			{/each}
		</div>
	</section>

	<!-- Map Section -->
	{#if location.mapEmbedUrl}
		<section class="mb-12">
			<h2 class="text-3xl font-bold mb-6">Find Us in {location.name}</h2>
			<div class="aspect-video rounded-lg overflow-hidden">
				<iframe 
					src={location.mapEmbedUrl}
					width="100%" 
					height="100%" 
					style="border:0;" 
					allowfullscreen={true}
					loading="lazy" 
					referrerpolicy="no-referrer-when-downgrade"
					title="{location.name} Service Area Map"
				></iframe>
			</div>
		</section>
	{/if}

	<!-- FAQ -->
	{#if location.faqItems && location.faqItems.length > 0}
		<section class="mb-12">
			<h2 class="text-3xl font-bold mb-6">Frequently Asked Questions - {location.name}</h2>
			<Accordion class="w-full">
				{#each location.faqItems as faq, index}
					<AccordionItem value={`item-${index}`}>
						<AccordionTrigger>{faq.question}</AccordionTrigger>
						<AccordionContent>{faq.answer}</AccordionContent>
					</AccordionItem>
				{/each}
			</Accordion>
		</section>
	{/if}

	<!-- Call to Action -->
	<section class="text-center bg-muted rounded-lg p-8">
		<h2 class="text-3xl font-bold mb-4">Ready to Transform Your {location.name} Space?</h2>
		<p class="text-lg text-muted-foreground mb-6">
			Get a free consultation and quote for your luxury flooring project in {location.name}. 
			Our local certified experts are ready to help bring your vision to life.
		</p>
		<div class="flex flex-col sm:flex-row gap-4 justify-center">
			<Button href="/contact?location={location.slug}" size="lg">Get Free Local Quote</Button>
			<Button href="/gallery" variant="outline" size="lg">View Local Projects</Button>
		</div>
	</section>
</main>
