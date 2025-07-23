<script lang="ts">
	import { gsap } from 'gsap';

	const { number = 0, description = '', duration = 1, suffix = '' } = $props();

	let display = 0;
	let numberRef: HTMLElement;

	$effect(() => {
		gsap.to(
			{},
			{
				duration,
				onUpdate() {
					const progress = this.progress();
					display = Math.floor(number * progress);
					if (numberRef) numberRef.textContent = display.toLocaleString() + suffix;
				}
			}
		);
	});
</script>

<div class="grid place-content-center bg-neutral-900 p-8 text-center">
	<span bind:this={numberRef} class="font-pixel text-primary block text-3xl lg:text-5xl"> 0 </span>
	<span class="mt-4 text-sm font-bold sm:text-lg">{description}</span>
</div>
