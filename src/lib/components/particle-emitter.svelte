<script lang="ts">
	import { gsap } from 'gsap';

	let {
		direction = 'down',
		particleSrc = '/smoke.png',
		count = 80
	} = $props<{
		direction?: 'down' | 'up' | 'left' | 'right';
		particleSrc?: string;
		count?: number;
	}>();

	let container: HTMLElement;
	let maskClass = `mask-fade-${direction}`;

	$effect(() => {
		if (!container) return;

		container.innerHTML = '';

		for (let i = 0; i < count; i++) {
			const flake = document.createElement('img');
			flake.src = particleSrc;
			flake.className = 'particleflake';

			const flakeSize = gsap.utils.random(8, 16);
			const width = container.offsetWidth;
			const height = container.offsetHeight;

			flake.style.position = 'absolute';
			flake.style.width = `${flakeSize}px`;

			// Set initial position based on direction
			switch (direction) {
				case 'down':
					flake.style.left = `${gsap.utils.random(0, width - flakeSize)}px`;
					flake.style.top = `${gsap.utils.random(-100, 0)}px`;
					break;
				case 'up':
					flake.style.left = `${gsap.utils.random(0, width - flakeSize)}px`;
					flake.style.top = `${height + gsap.utils.random(0, 100)}px`;
					break;
				case 'left':
					flake.style.left = `${width + gsap.utils.random(0, 100)}px`;
					flake.style.top = `${gsap.utils.random(0, height - flakeSize)}px`;
					break;
				case 'right':
					flake.style.left = `${-gsap.utils.random(0, 100)}px`;
					flake.style.top = `${gsap.utils.random(0, height - flakeSize)}px`;
					break;
			}

			container.appendChild(flake);

			// Animate based on direction
			let x: string | number = 0;
			let y: string | number = 0;

			switch (direction) {
				case 'down':
					y = height + 100;
					x = `+=${gsap.utils.random(-50, 50)}`;
					break;
				case 'up':
					y = -height - 100;
					x = `+=${gsap.utils.random(-50, 50)}`;
					break;
				case 'left':
					x = -width - 100;
					y = `+=${gsap.utils.random(-50, 50)}`;
					break;
				case 'right':
					x = width + 100;
					y = `+=${gsap.utils.random(-50, 50)}`;
					break;
			}

			gsap.to(flake, {
				x,
				y,
				opacity: gsap.utils.random(0.4, 0.9),
				duration: gsap.utils.random(6, 12),
				delay: gsap.utils.random(0, 4),
				ease: 'none',
				repeat: -1
			});

			gsap.to(flake, {
				rotation: gsap.utils.random([-360, 360]),
				duration: gsap.utils.random(6, 12),
				ease: 'none',
				repeat: -1
			});
		}
	});
</script>

<div bind:this={container} class={['particle-container', maskClass]}></div>
