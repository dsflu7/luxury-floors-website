<script lang="ts">
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import Button from '$lib/components/ui/button/button.svelte';
	import { scrollThreshold } from '$lib/animations.store';
	import { fade } from 'svelte/transition';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { isMobile, services, servicesPageNavigating } from '$lib/stores.svelte';
	import Image from '$lib/components/Image.svelte';
	import Logo from '$lib/icons/Logo.svelte';
	import ServiceCard from '$lib/components/ServiceCard.svelte';
	import TestimonialSlider from '$lib/components/TestimonialSlider.svelte';
	import FAQAccordion from '$lib/components/FAQAccordion.svelte';
	import SEO from '$lib/components/SEO.svelte';
	import { generateWebPageSchema } from '$lib/utils/structuredData';

	let initScroll = $state(0);
	let tweenInstance: gsap.core.Tween;
	let servicesSection: HTMLElement;

	const handleScroll = () => {
		if (initScroll < $scrollThreshold) {
			tweenInstance.reverse();
		} else {
			tweenInstance.play();
		}
	};

	const whyPoints = [
		{
			title: 'Certified Expertise by Industry Leaders',
			desc: 'Our team is certified and trained by two renowned companies, Leggari (U.S.) and Chromology (Toronto), ensuring the highest standards of epoxy craftsmanship.'
		},
		{
			title: 'Unmatched Quality & Craftsmanship',
			desc: 'We use top-grade materials and meticulous techniques to ensure your floors are as durable as they are beautiful.'
		},
		{
			title: 'Custom Design And Color',
			desc: 'Every project is unique, tailored to meet your vision. From metallic epoxy finishes to textured coatings, our range of premium options brings style and character to your space.'
		},
		{
			title: '25-Year Warranty',
			desc: 'We stand by the longevity and durability of our floors, offering a 25-year warranty for complete peace of mind. With Luxury Floors, you’re investing in quality that lasts.'
		},
		{
			title: 'Portfolio of Proven Results',
			desc: 'With an impressive portfolio that showcases our best work, you can see firsthand how Luxury Floors transforms spaces throughout Vancouver. Browse our gallery to discover the possibilities for your next project.'
		}
	];

	const knowMorePoints = [
		{
			title: 'Metallic Epoxy Flooring',
			desc: 'A Durable, High-Gloss Flooring Solution with Unique Swirl Effects'
		},
		{
			title: 'Flake Epoxy Flooring',
			desc: 'A Slip-Resistant, Textured Flooring with Customizable Colors and Patterns'
		},
		{
			title: 'Epoxy Countertops',
			desc: 'A Seamless, High-Gloss Surface with Exceptional Durability and Style'
		},
		{
			title: 'Texture Deck',
			desc: 'Enhance Your Deck with a Slip-Resistant, Durable, and Stylish Finish'
		},
		// {
		// 	title: 'Concrete repair',
		// 	desc: 'Restore and Strengthen Your Surfaces with Lasting Solutions'
		// },
		// {
		// 	title: 'Asphalt repair',
		// 	desc: 'Revitalize and Protect Your Pavement with Durable Restoration Solutions'
		// },
		{
			title: 'Concrete Walls',
			desc: 'Enhance Your Deck with a Slip-Resistant, Durable, and Stylish Finish'
		}
	];

	const testimonials = [
		{
			name: 'Sarah L.',
			content: "I couldn't be happier with my new metallic epoxy floor! Luxury Floors transformed my basement into a stunning space that looks like a high-end showroom. The team was professional, detail-oriented, and delivered exactly what they promised. Highly recommend them for anyone looking for premium flooring solutions.",
			rating: 5,
			location: 'Vancouver, BC'
		},
		{
			name: 'David R.',
			content: 'We hired Luxury Floors to upgrade our retail store, and the results were beyond our expectations. The flake epoxy floor not only looks fantastic but is also incredibly durable and easy to clean. Our customers constantly compliment the sleek and modern design.',
			rating: 5,
			company: 'Downtown Retail Store'
		},
		{
			name: 'Jessica R.',
			content: "Luxury Floors lives up to its name! Their custom metallic floor has completely transformed the look of our home's entryway. The installation process was smooth, and the team was very knowledgeable, answering all our questions. A five-star experience.",
			rating: 5,
			location: 'Richmond, BC'
		},
		{
			name: 'James P.',
			content: "Our garage floor was in bad shape, and we needed something durable yet attractive. Luxury Floors installed a flake epoxy floor that's both tough and beautiful. It's perfect for heavy use and adds so much value to our property. Thank you for the amazing work.",
			rating: 5,
			location: 'Surrey, BC'
		},
		{
			name: 'Andrew S.',
			content: 'Top-notch service and quality. My floors look amazing!',
			rating: 5
		},
		{
			name: 'Amrit B.',
			content: "Luxury Floors exceeded our expectations with their exceptional craftsmanship and attention to detail. The custom metallic epoxy floor they installed in our living room is a true work of art. It's durable, easy to maintain, and adds a unique touch of elegance to our home. We've already recommended them to friends and family.",
			rating: 5,
			location: 'Burnaby, BC'
		}
	];

	const serviceCards = [
		{
			title: 'Metallic Epoxy Flooring',
			description: 'A Durable, High-Gloss Flooring Solution with Unique Swirl Effects',
			image: '/assets/landing/more1.jpeg',
			features: ['Unique metallic patterns', 'High-gloss finish', '25-year warranty'],
			href: `/services/metalic-epoxy-floors`
		},
		{
			title: 'Flake Epoxy Flooring', 
			description: 'A Slip-Resistant, Textured Flooring with Customizable Colors and Patterns',
			image: '/assets/landing/more2.jpeg',
			features: ['Slip-resistant texture', 'Customizable colors', 'Easy maintenance'],
			href: `/services/flake-epoxy-floors`
		},
		{
			title: 'Epoxy Countertops',
			description: 'A Seamless, High-Gloss Surface with Exceptional Durability and Style',
			image: '/assets/landing/more3.jpeg',
			features: ['Seamless surface', 'Heat resistant', 'Custom designs'],
			href: `/services/epoxy-countertops`
		},
		{
			title: 'Texture Deck',
			description: 'Enhance Your Deck with a Slip-Resistant, Durable, and Stylish Finish',
			image: '/assets/landing/more4.jpeg',
			features: ['Weather resistant', 'Non-slip surface', 'Long-lasting'],
			href: `/services/texture-deck`
		},
		{
			title: 'Concrete Walls',
			description: 'Enhance Your Walls with a Slip-Resistant, Durable, and Stylish Finish',
			image: '/assets/landing/more5.jpeg',
			features: ['Modern appearance', 'Durable coating', 'Custom textures'],
			href: `/services/concrete-walls`
		}
	];

	const frequentlyAskedQuestions = [
		{
			question: 'How long does epoxy flooring last?',
			answer: 'Our premium epoxy floors come with a 25-year warranty and are designed to last decades with proper care. The high-quality materials and professional installation ensure exceptional durability.'
		},
		{
			question: 'Is epoxy flooring suitable for residential use?',
			answer: 'Absolutely! Epoxy flooring is perfect for homes, offering beautiful aesthetics, easy maintenance, and exceptional durability for basements, garages, kitchens, and living areas.'
		},
		{
			question: 'How long does the installation process take?',
			answer: 'Most residential projects take 2-3 days to complete, including preparation, application, and curing time. We will provide a detailed timeline during your consultation.'
		},
		{
			question: 'Do you offer free estimates?',
			answer: 'Yes, we provide free, no-obligation estimates for all our services. Contact us to schedule a consultation and receive your personalized quote.'
		}
	];

	// Generate structured data for the homepage
	const pageSchema = generateWebPageSchema({
		name: 'Luxury Floors - Premium Epoxy Flooring in British Columbia',
		description: 'Premium, seamless, and durable epoxy floors for modern homes and commercial spaces in Vancouver, Surrey, Richmond, and throughout BC.',
		url: $page.url.href,
		breadcrumbs: [
			{ name: 'Home', url: '/' }
		]
	});

	onMount(() => {
		tweenInstance = gsap.to('#logo', {
			duration: 0.3,

			width: '4rem',
			height: '4rem',
			top: '1rem',
			left: '6%',
			zIndex: 50,

			filter: 'invert(1)',
			webkitFilter: 'invert(1)',

			ease: 'power2.inOut',
			paused: initScroll < $scrollThreshold
		});
		if ($page.url.toString().includes('services')) {
			servicesSection.scrollIntoView({ behavior: 'smooth' });
			handleScroll();
		}
	});

	$effect(() => {
		if ($servicesPageNavigating || $page.url.toString().includes('services')) {
			handleScroll();
			$servicesPageNavigating = false;
			console.log('services page navigating');
			
		}
	});
</script>

<SEO 
	title="Luxury Floors - Premium Epoxy Flooring in British Columbia"
	description="Premium, seamless, and durable epoxy floors for modern homes and commercial spaces in Vancouver, Surrey, Richmond, and throughout BC."
	keywords="luxury floors, epoxy flooring, metallic epoxy, flake epoxy, epoxy countertops, Vancouver, Surrey, Richmond, BC"
	structuredData={pageSchema}
/>

<svelte:window onscroll={handleScroll} bind:scrollY={initScroll} />

<main class="flex w-screen flex-col items-center gap-16 pb-48 lg:gap-8">
	<div id="logo" class="fixed top-[12vh] z-10 aspect-square h-[50vh] w-[50vh]">
		<Logo class="h-full w-full" width="50vh" height="50vh" />
	</div>

	<!-- landing screen -->
	<section class="relative flex h-[80vh] w-full flex-row justify-evenly gap-0">
		{#each Array(4) as _, i}
			<Image
				url={`/assets/landing/floor${i + 1}.png`}
				description=""
				class="h-[80vh] w-1/4 object-cover object-left"
				size={[480]}
				quality={i === 3 ? 50 : 80}
				fetchpriority="high"
			/>
		{/each}

		{#if initScroll > $scrollThreshold}
			<div
				transition:fade={{ duration: 300 }}
				class="absolute left-1/2 top-1/2 flex w-full -translate-x-1/2 -translate-y-1/2 transform flex-col items-center"
			>
				<h1 class="text-shadow text-center text-[10vw] font-semibold text-white">Luxury Floors</h1>
				<p class="text-center font-[Cantarell] text-2xl text-white">
					Premium, seamless, and durable floors for modern homes and commercial spaces.
				</p>
			</div>
		{/if}
		<Button
			onclick={() => goto('/gallery')}
			variant="outline"
			aria-label="View portfolio"
			class="absolute bottom-[15%] mt-8 uppercase ">Portfolio</Button
		>
	</section>

	<!-- know more why -->
	<section class="flex w-full flex-col items-center px-[6%] pt-16 font-[Alatsi] lg:gap-12">
		<h1 class="text-2xl leading-10">Why Luxury Flooring ?</h1>

		<div class="grid w-full grid-flow-row-dense grid-cols-6 grid-rows-3 gap-10">
			<div class="col-span-6 flex w-full items-center justify-center">
				<div class="overflow-hidden rounded-3xl lg:w-1/2">
					<Image
						url="/assets/landing/tiles.jpeg"
						description=""
						class="aspect-video h-auto w-full object-cover transition-all duration-500 ease-in-out hover:scale-110"
						size={[640]}
						quality={70}
					/>
				</div>
			</div>

			{#each whyPoints as point, i}
				<div
					class="flex flex-row gap-2 font-[Alatsi] {$isMobile
						? 'col-span-6'
						: i <= 2
							? 'col-span-2 items-center'
							: 'col-span-3 px-[15%]'}"
				>
					<span class="mt-5 w-1/4 text-[7rem] leading-[50%] lg:w-auto lg:text-[9rem]">{i + 1}</span>
					<span class="w-3/4 lg:w-auto">
						{point.title} <br />
						<span class="font-[Cantarell]">{point.desc}</span>
					</span>
				</div>
			{/each}
		</div>
	</section>

	<!-- services -->
	<section
		class="flex scroll-mt-32 flex-col items-center gap-12 px-[6%] pb-16 lg:gap-16"
		id="services"
		bind:this={servicesSection}
	>
		<h1 class="text-center text-4xl font-semibold leading-10">Services</h1>

		<div class="grid w-full gap-8 lg:grid-cols-3">
			{#each serviceCards as service, i}
				<ServiceCard
					title={service.title}
					description={service.description}
					image={service.image}
					features={service.features}
					href={service.href}
				/>
			{/each}
		</div>
	</section>

	<!-- testimonials -->
	<section class="flex w-full flex-col gap-12 px-[6%] pb-16 text-center lg:gap-16">
		<h1 class="text-center text-4xl font-semibold leading-10">What Our Customers Say</h1>
		
		<TestimonialSlider {testimonials} autoPlay={true} autoPlayDelay={6000} />
	</section>

	<!-- FAQ Section -->
	<section class="flex w-full flex-col gap-12 px-[6%] pb-16 lg:gap-16">
		<h1 class="text-center text-4xl font-semibold leading-10">Frequently Asked Questions</h1>
		
		<div class="mx-auto max-w-4xl">
			<FAQAccordion faqs={frequentlyAskedQuestions} allowMultiple={false} />
		</div>
	</section>
</main>

<style>
	.text-shadow {
		text-shadow: 2px 3px 9px rgba(0, 0, 0, 0.59);
	}
</style>
