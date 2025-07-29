<script lang="ts">
	import { generateMetaTags } from '$lib/utils/seo';
	import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '$lib/components/ui/card';
	import { Button } from '$lib/components/ui/button';
	import { Badge } from '$lib/components/ui/badge';
	import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '$lib/components/ui/carousel';
	import Image from '$lib/components/Image.svelte';
	import { page } from '$app/stores';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
	let service = $derived(data.service);
	let domain = $derived(`${$page.url.protocol}//${$page.url.host}`);
	
	let meta = $derived(generateMetaTags({
		title: service.title,
		description: service.description,
		url: `${domain}/services/${service.slug}`,
		domain,
		image: service.images[0]
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
	<section class="mb-12">
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
			<div>
				<div class="mb-4">
					<a href="/services" class="text-primary hover:underline">← Back to Services</a>
				</div>
				<h1 class="text-4xl md:text-5xl font-bold mb-6">{service.title.split('|')[0].trim()}</h1>
				<p class="text-xl text-muted-foreground mb-6">{service.shortDescription}</p>
				
				{#if service.price}
					<div class="mb-6">
						<span class="text-3xl font-bold text-primary">
							From ${service.price.basePrice} {service.price.unit}
						</span>
						{#if service.price.factors}
							<p class="text-sm text-muted-foreground mt-1">
								*Final pricing depends on {service.price.factors.join(', ')}
							</p>
						{/if}
					</div>
				{/if}

				<div class="flex flex-col sm:flex-row gap-4">
					<Button href="/contact" size="lg">Get Free Quote</Button>
					<Button href="/gallery" variant="outline" size="lg">View Gallery</Button>
				</div>
			</div>
			
			<div class="order-first lg:order-last">
				<div class="aspect-video rounded-lg overflow-hidden">
					<Image 
						url={service.images[0]} 
						description={service.title}
						class="w-full h-full object-cover"
						fetchpriority="high"
					/>
				</div>
			</div>
		</div>
	</section>

	<!-- Image Gallery -->
	{#if service.images.length > 1}
		<section class="mb-12">
			<h2 class="text-3xl font-bold mb-6">Gallery</h2>
			<Carousel class="w-full">
				<CarouselContent>
					{#each service.images as image, index}
						<CarouselItem class="basis-1/1 md:basis-1/2 lg:basis-1/3">
							<div class="aspect-video rounded-lg overflow-hidden">
								<Image 
									url={image} 
									description={`${service.title} example ${index + 1}`}
									class="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
								/>
							</div>
						</CarouselItem>
					{/each}
				</CarouselContent>
				<CarouselPrevious />
				<CarouselNext />
			</Carousel>
		</section>
	{/if}

	<div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
		<!-- Main Content -->
		<div class="lg:col-span-2">
			<!-- Description -->
			<section class="mb-8">
				<h2 class="text-3xl font-bold mb-4">About This Service</h2>
				<p class="text-lg leading-relaxed">{service.description}</p>
			</section>

			<!-- Benefits -->
			{#if service.benefits && service.benefits.length > 0}
				<section class="mb-8">
					<h2 class="text-3xl font-bold mb-4">Benefits & Features</h2>
					<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
						{#each service.benefits as benefit}
							<div class="flex items-start">
								<span class="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></span>
								<span>{benefit}</span>
							</div>
						{/each}
					</div>
				</section>
			{/if}

			<!-- Applications -->
			{#if service.applications && service.applications.length > 0}
				<section class="mb-8">
					<h2 class="text-3xl font-bold mb-4">Perfect For</h2>
					<div class="flex flex-wrap gap-2">
						{#each service.applications as application}
							<Badge variant="secondary">{application}</Badge>
						{/each}
					</div>
				</section>
			{/if}

			<!-- Process -->
			{#if service.process && service.process.length > 0}
				<section class="mb-8">
					<h2 class="text-3xl font-bold mb-4">Our Process</h2>
					<div class="space-y-4">
						{#each service.process as step, index}
							<div class="flex items-start">
								<div class="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold mr-4 flex-shrink-0">
									{index + 1}
								</div>
								<div>
									<h3 class="font-semibold">{step.title}</h3>
									<p class="text-muted-foreground">{step.description}</p>
								</div>
							</div>
						{/each}
					</div>
				</section>
			{/if}

			<!-- Maintenance -->
			{#if service.maintenance && service.maintenance.length > 0}
				<section class="mb-8">
					<h2 class="text-3xl font-bold mb-4">Maintenance & Care</h2>
					<ul class="space-y-2">
						{#each service.maintenance as item}
							<li class="flex items-start">
								<span class="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></span>
								<span>{item}</span>
							</li>
						{/each}
					</ul>
				</section>
			{/if}
		</div>

		<!-- Sidebar -->
		<div class="lg:col-span-1">
			<!-- Quick Info -->
			<Card class="mb-6">
				<CardHeader>
					<CardTitle>Service Details</CardTitle>
				</CardHeader>
				<CardContent class="space-y-4">
					{#if service.warranty}
						<div>
							<h4 class="font-semibold">Warranty</h4>
							<p class="text-sm text-muted-foreground">{service.warranty}</p>
						</div>
					{/if}
					
					{#if service.duration}
						<div>
							<h4 class="font-semibold">Project Duration</h4>
							<p class="text-sm text-muted-foreground">{service.duration}</p>
						</div>
					{/if}

					{#if service.cities && service.cities.length > 0}
						<div>
							<h4 class="font-semibold">Service Areas</h4>
							<p class="text-sm text-muted-foreground">{service.cities.join(', ')}</p>
						</div>
					{/if}
				</CardContent>
			</Card>

			<!-- CTA -->
			<Card>
				<CardHeader>
					<CardTitle>Ready to Get Started?</CardTitle>
					<CardDescription>Get a free consultation and quote for your project</CardDescription>
				</CardHeader>
				<CardContent class="space-y-4">
					<Button href="/contact" size="lg" class="w-full">Get Free Quote</Button>
					<Button href="tel:+1-604-123-4567" variant="outline" class="w-full">Call Now</Button>
				</CardContent>
			</Card>
		</div>
	</div>

	<!-- Related Services -->
	<section class="mt-12">
		<h2 class="text-3xl font-bold mb-6">Other Services</h2>
		<div class="text-center">
			<Button href="/services" variant="outline">View All Services</Button>
		</div>
	</section>
</main>
