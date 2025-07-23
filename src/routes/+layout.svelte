<script lang="ts">
	import '../app.css';
	import { Navbar, Footer } from '$lib/components';

	let { children } = $props();
</script>

<Navbar />
{@render children()}
<Footer />
