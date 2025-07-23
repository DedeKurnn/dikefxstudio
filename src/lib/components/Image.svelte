<script lang="ts">
	const images = import.meta.glob<{ default: string }>(
		['$lib/assets/images/**/*.{avif,gif,heif,jpeg,jpg,png,tiff,webp}'],
		{
			eager: true,
			query: { enhanced: true }
		}
	);

	const getImage = (desiredImage: string): any => {
		desiredImage = '/src/lib' + desiredImage;
		return images[desiredImage].default;
	};

	const {
		customClass,
		src,
		alt = 'Image',
		...props
	}: {
		customClass?: string;
		src: string;
		alt?: string;
		[key: string]: any;
	} = $props();

	const image = getImage(src);
</script>

<enhanced:img src={image} {alt} class={customClass} {...props} />
