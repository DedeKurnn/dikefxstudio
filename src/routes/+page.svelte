<script lang="ts">
	import { gsap } from 'gsap';
	import Lenis from 'lenis';
	import RiArrowRightLine from '~icons/ri/arrow-right-line';
	import RiAddFill from '~icons/ri/add-fill';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	import { animateOnScroll } from '$lib/helper';
	import { AngledContainer, MarqueScroller, ParticleEmitter, StatCounter } from '$lib/components';
	import { faqs, featuredOne, featuredTwo } from '$lib/constants';

	let openIndex = $state<number | null>(null);

	$effect(() => {
		const lenis = new Lenis();

		lenis.on('scroll', ScrollTrigger.update);

		gsap.ticker.add((time) => {
			lenis.raf(time * 1000);
		});

		gsap.ticker.lagSmoothing(0);

		requestAnimationFrame(() => {
			animateOnScroll(['hero', 'stats', 'featured', 'services', 'testimonials', 'faqs', 'cta']);
			ScrollTrigger.refresh();
		});
	});
</script>

<!-- HERO -->
<section class="relative flex h-screen w-full flex-col justify-center">
	<section id="hero" class="container mx-auto max-w-7xl px-4">
		<h1 class="font-pixel text-4xl leading-tight text-white sm:text-6xl">
			MINECRAFT<br />CREATIVE<br />STUDIO
		</h1>
		<p class="mt-4 mb-6 max-w-lg text-sm text-neutral-300 sm:text-base">
			We design and develop Minecraft-styled illustrations, renders, logos, websites, and servers!
		</p>
		<a
			href="/"
			class="bg-primary hover:bg-secondary font-space flex w-fit items-center gap-2 px-6 py-4 text-sm font-bold text-neutral-950 transition-all sm:text-base"
		>
			Explore Our Work <RiArrowRightLine />
		</a>
	</section>
	<section
		id="stats"
		class="container mx-auto mt-24 grid max-w-7xl grid-cols-2 gap-6 px-4 md:grid-cols-4"
	>
		<StatCounter number={1165} suffix="+" description="COMPLETED ORDERS" />
		<StatCounter number={900} suffix="+" description="SATISFIED CLIENTS" />
		<StatCounter number={6} suffix="+" description="YEARS OF EXPERIENCE" />
		<StatCounter number={3} description="TALENTED MEMBERS" />
	</section>
	<enhanced:img
		src="$lib/assets/images/668.webp"
		alt="Hero Image"
		class="absolute inset-0 -z-50 h-full w-full object-cover"
		draggable="false"
	/>
	<div class="absolute inset-0 -z-50 bg-gradient-to-b from-neutral-950/25 to-neutral-950 to-90%">
		<ParticleEmitter />
	</div>
</section>
<!-- END OF HERO -->

<!-- FEATURED WORKS -->
<section class="relative min-h-screen w-full py-32">
	<div id="featured" class="container mx-auto max-w-7xl px-4">
		<div class="flex w-full items-start justify-between"></div>
		<div class="grid grid-cols-1 place-items-center gap-12 md:grid-cols-4">
			<div class="col-span-1">
				<h2 class="font-pixel text-secondary text-5xl">FEATURED WORKS</h2>
				<p class="mt-4">
					Here's a glimpse of the quality<br />creativity we deliver over the years.
				</p>
			</div>
			<div class="col-span-3">
				<MarqueScroller images={featuredOne} direction="left" />
			</div>
			<div class="col-span-3">
				<MarqueScroller images={featuredTwo} direction="right" />
			</div>
			<div>
				<p class="font-pixel text-5xl text-white">CRAVING FOR MORE?</p>
				<a
					href="/"
					class="bg-primary hover:bg-secondary font-space mt-8 flex w-fit items-center gap-2 px-6 py-4 text-sm font-bold text-neutral-950 transition-all sm:text-base"
				>
					Explore Our Work <RiArrowRightLine />
				</a>
			</div>
		</div>
	</div>
	<enhanced:img
		src="$lib/assets/images/618.webp"
		alt="Hero Image"
		class="absolute inset-0 -z-50 h-full w-full object-cover"
		draggable="false"
	/>
	<div
		class="absolute inset-0 -z-50 bg-gradient-to-b from-[#2A185C]/100 to-neutral-950/50 to-50%"
	></div>
</section>
<!-- END OF FEATURED WORKS -->

<!-- WHAT WE DO -->
<section id="services" class="container mx-auto max-w-7xl px-4 py-40">
	<div class="text-center">
		<h2 class="font-pixel text-primary text-5xl">WHAT WE CREATE</h2>
		<p class="mt-4">
			From stunning visuals to fully-featured servers, we bring your Minecraft vision to life.
		</p>
	</div>
	<div class="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
		<AngledContainer>
			<div class="flex flex-col items-center py-4 text-center">
				<enhanced:img
					src="$lib/assets/images/command_block.png"
					alt="Illustration"
					class="mb-4 w-full max-w-40 object-cover"
					draggable="false"
					width="337"
					height="337"
				/>
				<p class="font-pixel text-xl">CUSTOM SERVER</p>
				<p class="mt-2 text-neutral-400">
					Full server setups with plugins, worlds, and custom gameplay.
				</p>
			</div>
		</AngledContainer>
		<AngledContainer>
			<div class="flex flex-col items-center py-4 text-center">
				<enhanced:img
					src="$lib/assets/images/painting.png"
					alt="Illustration"
					class="mb-4 w-full max-w-40 object-cover"
					draggable="false"
					width="337"
					height="337"
				/>
				<p class="font-pixel text-xl">DESIGN</p>
				<p class="mt-2 text-neutral-400">
					3D renders of characters, thumbnails, banner, scenes, and more.
				</p>
			</div>
		</AngledContainer>
		<AngledContainer>
			<div class="flex flex-col items-center py-4 text-center">
				<enhanced:img
					src="$lib/assets/images/lectern.png"
					alt="Illustration"
					class="mb-4 w-full max-w-40 object-cover"
					draggable="false"
					width="337"
					height="337"
				/>
				<p class="font-pixel text-xl">WEBSITES</p>
				<p class="mt-2 text-neutral-400">
					Complete integrated dedicated website of your server for donation and store.
				</p>
			</div>
		</AngledContainer>
	</div>
</section>
<!-- END OF WHAT WE DO -->

<!-- WHAT OUR CLIENTS SAY -->
<section id="testimonials" class="relative w-full">
	<div class="container mx-auto max-w-7xl px-4 py-40">
		<div class="text-center">
			<h2 class="font-pixel text-primary text-5xl">WHAT OUR CLIENTS SAY</h2>
			<p class="mt-4">We're proud to have worked with so many amazing creators.</p>
		</div>
		<div class="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
			<AngledContainer isBlur background="bg-white/10" border="bg-neutral-200/10">
				<div class="flex h-full flex-col justify-between p-4">
					<p class="mt-2 text-white">
						“They work very professionally and have a lot of experience. One of the best offers for
						larger servers. Maybe a little too professional for my little server 😂, I'm very
						satisfied!”
					</p>

					<div class="mt-6 flex items-center gap-4">
						<enhanced:img
							src="$lib/assets/images/testimonial1.png"
							alt="Illustration"
							class="w-full max-w-12 object-cover"
							draggable="false"
							width="100"
							height="100"
						/>
						<div>
							<p class="font-pixel">d4undranzigste</p>
							<p class="text-neutral-300">Owner - Blocktopia</p>
						</div>
					</div>
				</div>
			</AngledContainer>
			<AngledContainer isBlur background="bg-white/10" border="bg-neutral-200/10">
				<div class="flex h-full flex-col justify-between p-4">
					<p class="mt-2 text-white">
						“Absolut amazing banner for this price!! will come back soon with new orders :)”
					</p>

					<div class="mt-6 flex items-center gap-4">
						<enhanced:img
							src="$lib/assets/images/testimonial2.png"
							alt="Illustration"
							class="w-full max-w-12 object-cover"
							draggable="false"
							width="100"
							height="100"
						/>
						<div>
							<p class="font-pixel">Janthox</p>
							<p class="text-neutral-300">YouTuber</p>
						</div>
					</div>
				</div>
			</AngledContainer>
			<AngledContainer isBlur background="bg-white/10" border="bg-neutral-200/10">
				<div class="flex h-full flex-col justify-between p-4">
					<p class="mt-2 text-white">
						“The design exceeded all my expectations. Every comment was implemented down to the
						smallest detail. Delivery was quick and uncomplicated. If I need additional designs,
						I'll contact him directly.”
					</p>

					<div class="mt-6 flex items-center gap-4">
						<enhanced:img
							src="$lib/assets/images/testimonial3.png"
							alt="Illustration"
							class="w-full max-w-12 object-cover"
							draggable="false"
							width="100"
							height="100"
						/>
						<div>
							<p class="font-pixel">Minelodon</p>
							<p class="text-neutral-300">Streamer</p>
						</div>
					</div>
				</div>
			</AngledContainer>
		</div>
	</div>

	<enhanced:img
		src="$lib/assets/images/660.webp"
		alt="Hero Image"
		class="absolute inset-0 -z-50 h-full w-full object-cover"
		draggable="false"
	/>
	<div class="absolute inset-0 -z-50 bg-neutral-950/50"></div>
</section>
<!-- END OF WHAT OUR CLIENTS SAY -->

<!-- FAQs -->
<section id="faq" class="container mx-auto max-w-7xl px-4 py-40">
	<div class="text-center">
		<h2 class="font-pixel text-primary text-5xl">FREQUENTLY ASKED QUESTIONS</h2>
		<p class="mt-4">
			Got questions? We've got answers. If you don't see your question here, feel free to reach out.
		</p>
	</div>
	<div class="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
		{#each faqs as faq, i}
			<AngledContainer isAnimated={false} isBlur background="h-fit bg-[#242424]">
				<div class="flex h-full flex-col justify-between">
					<button class="cursor-pointer" onclick={() => (openIndex = openIndex === i ? null : i)}>
						<div class="flex items-center justify-between">
							<p class="text-lg font-semibold text-white">{faq.question}</p>
							<RiAddFill
								class={[
									openIndex === i ? 'rotate-45' : 'rotate-0',
									'text-primary cursor-pointer text-2xl transition-all'
								]}
							/>
						</div>
					</button>
					{#if openIndex === i}
						<p class="mt-4 text-neutral-300">{faq.answer}</p>
					{/if}
				</div>
			</AngledContainer>
		{/each}
	</div>
</section>
<!-- END OF FAQs -->

<!-- CTA -->
<section id="cta" class="relative">
	<div class="container mx-auto max-w-7xl px-4">
		<div class="grid grid-cols-1 place-items-center gap-12 md:grid-cols-3">
			<enhanced:img
				src="$lib/assets/images/586.png"
				alt="Call to Action Image"
				class="z-0 col-span-1 w-full object-cover"
				draggable="false"
				width="845"
				height="1440"
			/>
			<div class="col-span-2">
				<AngledContainer isAnimated={false}>
					<div class=" flex flex-col items-center justify-center gap-4 p-4 text-center">
						<h2 class="font-pixel text-primary text-4xl">READY TO START YOUR PROJECT?</h2>
						<p class="mb-4">
							Let's build something amazing together. We're ready to bring your ideas to life.
						</p>
						<a
							href="/"
							class="bg-primary hover:bg-secondary font-space flex w-fit items-center gap-2 px-6 py-4 text-sm font-bold text-neutral-950 transition-all sm:text-base"
						>
							Get in Touch <RiArrowRightLine />
						</a>
					</div>
				</AngledContainer>
			</div>
		</div>
	</div>

	<div
		class="absolute inset-0 -z-50 bg-gradient-to-t from-[#2A185C]/100 to-neutral-950/50 to-50%"
	></div>
</section>

<!-- END OF CTA -->
