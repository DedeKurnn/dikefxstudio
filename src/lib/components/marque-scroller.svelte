<script lang="ts">
	import gsap from 'gsap';
	import Image from './Image.svelte';

	const {
		images,
		direction = 'left'
	}: {
		images: string[];
		direction?: 'left' | 'right';
	} = $props();

	let container: HTMLElement;
	let animation: gsap.core.Tween;

	const cloneArray = (arr: string[], times = 3) => Array(times).fill(arr).flat();

	const startMarquee = (el: HTMLElement, dir: 'left' | 'right', speed = 20) => {
		const allItems = el.querySelectorAll('.tech-item');
		const setSize = allItems.length / 3;
		const oneSet = Array.from(allItems).slice(0, setSize);

		const fullWidth = oneSet.reduce((acc, item) => {
			return acc + (item as HTMLElement).offsetWidth + 16;
		}, 0);

		const startX = dir === 'left' ? 0 : -fullWidth * 2;
		gsap.set(el, { x: startX });

		return gsap.to(el, {
			x: dir === 'left' ? `-=${fullWidth}` : `+=${fullWidth}`,
			duration: speed,
			ease: 'linear',
			repeat: -1,
			modifiers: {
				x: gsap.utils.unitize((x) => {
					const limit = fullWidth * 2;
					if (dir === 'left' && x < -limit) return 0;
					if (dir === 'right' && x > 0) return -limit;
					return x;
				})
			}
		});
	};

	$effect(() => {
		animation?.kill();
		animation = startMarquee(container, direction);

		const handleResize = () => {
			animation?.kill();
			animation = startMarquee(container, direction);
		};

		window.addEventListener('resize', handleResize);
		return () => {
			animation?.kill();
			window.removeEventListener('resize', handleResize);
		};
	});
</script>

<div class="relative py-2">
	<div class="mask-fade-x flex items-center overflow-hidden">
		<div bind:this={container} class="flex shrink-0 items-center gap-4 whitespace-nowrap">
			{#each cloneArray(images) as image}
				<Image
					src={image}
					alt="Featured"
					class="tech-item h-[300px] w-auto shrink-0 object-contain"
				/>
			{/each}
		</div>
	</div>
</div>
