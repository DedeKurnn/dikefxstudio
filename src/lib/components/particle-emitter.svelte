<script lang="ts">
	import { gsap } from 'gsap';

	const PARTICLE_COUNT = 80;
	const particleSrc = '/smoke.png';
	let container: HTMLElement;

	$effect(() => {
		if (!container) return;

		container.innerHTML = '';

		for (let i = 0; i < PARTICLE_COUNT; i++) {
			const flake = document.createElement('img');
			flake.src = particleSrc;
			flake.className = 'particleflake';

			const flakeWidth = gsap.utils.random(8, 16);
			const containerWidth = container.offsetWidth;

			flake.style.position = 'absolute';
			flake.style.width = `${flakeWidth}px`;
			flake.style.left = `${gsap.utils.random(0, containerWidth - flakeWidth)}px`;
			flake.style.top = `${gsap.utils.random(-100, 0)}px`;

			container.appendChild(flake);

			// Fall animation
			gsap.to(flake, {
				y: container.offsetHeight + 100,
				x: `+=${gsap.utils.random(-50, 50)}`,
				opacity: gsap.utils.random(0.4, 0.9),
				duration: gsap.utils.random(6, 12),
				delay: gsap.utils.random(0, 4),
				ease: 'none',
				repeat: -1
			});

			// Continuous rotation animation
			gsap.to(flake, {
				rotation: gsap.utils.random([-360, 360]),
				duration: gsap.utils.random(6, 12),
				ease: 'none',
				repeat: -1
			});
		}
	});
</script>

<div bind:this={container} class="particle-container mask-fade-y"></div>
