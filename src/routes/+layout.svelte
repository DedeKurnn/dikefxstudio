<script lang="ts">
	import '../app.css';
	import { page } from '$app/state';
	import { Navbar, Footer } from '$lib/components';
	import { locales, localizeHref } from '$lib/paraglide/runtime';

	let { children } = $props();
</script>

<svelte:head>
	<title>DIKEFX — Minecraft Creative Studio</title>
	<meta
		name="description"
		content="We design professional, pixel-styled web, design, and server experiences. Over 1,100 commissions completed worldwide."
	/>

	<!-- Open Graph -->
	<meta property="og:title" content="DIKEFX — Minecraft Creative Studio" />
	<meta property="og:site_name" content="DikeFX Studio" />
	<meta property="article:publisher" content="https://dikefx.com" />
	<meta
		property="og:description"
		content="We design professional, pixel-styled web, design, and server experiences. Over 1,100 commissions completed worldwide."
	/>
	<meta property="og:image" content="https://dikefx.com/images/og_image.webp" />
	<meta property="og:image:width" content="1280" />
	<meta property="og:image:height" content="640" />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://dikefx.com/" />

	<!-- Twitter Card -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="DIKEFX — Minecraft Creative Studio" />
	<meta
		name="twitter:description"
		content="We design professional, pixel-styled web, design, and server experiences. Over 1,100 commissions completed worldwide."
	/>
	<meta name="twitter:image" content="https://dikefx.com/images/og_image.webp" />
	<meta property="twitter:site" content="@dikefxstudio" />
</svelte:head>

<Navbar />
{@render children()}
<Footer />

<div style="display:none">
	{#each locales as locale}
		<a href={localizeHref(page.url.pathname, { locale })}>{locale}</a>
	{/each}
</div>
