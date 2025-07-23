<script lang="ts">
	const {
		children,
		border = 'bg-[#1a1a1a]',
		background = 'bg-[#242424]',
		isBlur = false,
		isAnimated = true
	} = $props();
</script>

<div
	class={[
		background,
		isBlur && 'backdrop-blur-sm',
		isAnimated && 'transition-all hover:-translate-y-4',
		'angled-card-wrapper p-[1px]'
	]}
>
	<div class={[border, isBlur && 'backdrop-blur-sm', 'angled-card h-full p-6 text-white']}>
		{@render children()}
	</div>
</div>
