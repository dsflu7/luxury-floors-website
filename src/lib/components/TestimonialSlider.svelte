<script lang="ts">
	import { onMount } from 'svelte';
	import { ChevronLeft, ChevronRight } from 'svelte-radix';

	interface Testimonial {
		name: string;
		company?: string;
		rating: number;
		content: string;
		image?: string;
		location?: string;
	}

	interface Props {
		testimonials: Testimonial[];
		autoPlay?: boolean;
		autoPlayDelay?: number;
	}

	let {
		testimonials = [],
		autoPlay = true,
		autoPlayDelay = 5000
	}: Props = $props();

	let currentIndex = $state(0);
	let isPlaying = $state(autoPlay);
	let intervalId: number | null = null;
	let containerRef = $state<HTMLElement | null>(null);

	function nextSlide() {
		currentIndex = (currentIndex + 1) % testimonials.length;
	}

	function prevSlide() {
		currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
	}

	function goToSlide(index: number) {
		currentIndex = index;
	}

	function startAutoPlay() {
		if (!autoPlay || testimonials.length <= 1) return;
		
		intervalId = window.setInterval(nextSlide, autoPlayDelay);
		isPlaying = true;
	}

	function stopAutoPlay() {
		if (intervalId) {
			clearInterval(intervalId);
			intervalId = null;
		}
		isPlaying = false;
	}

	function toggleAutoPlay() {
		if (isPlaying) {
			stopAutoPlay();
		} else {
			startAutoPlay();
		}
	}

	function renderStars(rating: number) {
		const stars = [];
		for (let i = 1; i <= 5; i++) {
			stars.push(i <= rating);
		}
		return stars;
	}

	onMount(() => {
		if (autoPlay && testimonials.length > 1) {
			startAutoPlay();
		}

		return () => {
			stopAutoPlay();
		};
	});
</script>

{#if testimonials.length > 0}
	<div 
		class="relative"
		bind:this={containerRef}
		onmouseenter={stopAutoPlay}
		onmouseleave={() => autoPlay && startAutoPlay()}
		role="region"
		aria-label="Customer testimonials carousel"
	>
		<!-- Main testimonial display -->
		<div class="overflow-hidden rounded-lg bg-white shadow-lg">
			<div 
				class="flex transition-transform duration-500 ease-in-out"
				style="transform: translateX(-{currentIndex * 100}%)"
			>
				{#each testimonials as testimonial, index}
					<div class="w-full flex-shrink-0 p-8">
						<div class="text-center">
							<!-- Quote Icon -->
							<div class="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-[#C7A865]/10">
								<svg class="h-6 w-6 text-[#C7A865]" fill="currentColor" viewBox="0 0 24 24">
									<path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
								</svg>
							</div>

							<!-- Rating Stars -->
							<div class="mb-4 flex justify-center space-x-1">
								{#each renderStars(testimonial.rating) as filled}
									<svg 
										class="h-5 w-5 {filled ? 'text-[#C7A865]' : 'text-gray-300'}" 
										fill="currentColor" 
										viewBox="0 0 20 20"
									>
										<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
									</svg>
								{/each}
							</div>

							<!-- Testimonial Content -->
							<blockquote class="mb-6 text-lg italic text-gray-700 leading-relaxed">
								"{testimonial.content}"
							</blockquote>

							<!-- Customer Info -->
							<div class="flex items-center justify-center space-x-4">
								{#if testimonial.image}
									<img 
										src={testimonial.image} 
										alt={testimonial.name}
										class="h-12 w-12 rounded-full object-cover"
									/>
								{:else}
									<div class="flex h-12 w-12 items-center justify-center rounded-full bg-[#C7A865] text-white font-semibold">
										{testimonial.name.charAt(0)}
									</div>
								{/if}
								<div class="text-left">
									<div class="font-semibold text-gray-900">{testimonial.name}</div>
									{#if testimonial.company}
										<div class="text-sm text-gray-600">{testimonial.company}</div>
									{/if}
									{#if testimonial.location}
										<div class="text-sm text-gray-500">{testimonial.location}</div>
									{/if}
								</div>
							</div>
						</div>
					</div>
				{/each}
			</div>
		</div>

		<!-- Navigation arrows -->
		{#if testimonials.length > 1}
			<button 
				onclick={prevSlide}
				class="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 shadow-lg transition-all hover:bg-white hover:scale-110"
				aria-label="Previous testimonial"
			>
				<ChevronLeft class="h-6 w-6 text-gray-700" />
			</button>

			<button 
				onclick={nextSlide}
				class="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 shadow-lg transition-all hover:bg-white hover:scale-110"
				aria-label="Next testimonial"
			>
				<ChevronRight class="h-6 w-6 text-gray-700" />
			</button>
		{/if}

		<!-- Dots indicator -->
		{#if testimonials.length > 1}
			<div class="mt-6 flex justify-center space-x-2">
				{#each testimonials as _, index}
					<button
						onclick={() => goToSlide(index)}
						class="h-3 w-3 rounded-full transition-all {
							index === currentIndex 
								? 'bg-[#C7A865] scale-110' 
								: 'bg-gray-300 hover:bg-gray-400'
						}"
						aria-label="Go to testimonial {index + 1}"
					></button>
				{/each}
			</div>
		{/if}

		<!-- Auto-play control -->
		{#if testimonials.length > 1 && autoPlay}
			<button
				onclick={toggleAutoPlay}
				class="absolute bottom-4 right-4 rounded-full bg-white/80 p-2 shadow-lg transition-all hover:bg-white hover:scale-110"
				aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
			>
				{#if isPlaying}
					<svg class="h-4 w-4 text-gray-700" fill="currentColor" viewBox="0 0 20 20">
						<path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd"/>
					</svg>
				{:else}
					<svg class="h-4 w-4 text-gray-700" fill="currentColor" viewBox="0 0 20 20">
						<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd"/>
					</svg>
				{/if}
			</button>
		{/if}
	</div>
{:else}
	<div class="rounded-lg bg-gray-50 p-8 text-center text-gray-500">
		No testimonials available.
	</div>
{/if}