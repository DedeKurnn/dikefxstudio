<script lang="ts">
	import { slide } from 'svelte/transition';
	import SimpleIconsDiscord from '~icons/simple-icons/discord';

	let mobileOpen = $state(false);
	let scrolled = $state(false);
	let navRef: HTMLElement | null = null;

	$effect(() => {
		function handleClickOutside(event: MouseEvent) {
			if (mobileOpen && navRef && !navRef.contains(event.target as Node)) {
				mobileOpen = false;
			}
		}

		function handleScroll() {
			scrolled = window.scrollY > 10;
		}

		window.addEventListener('click', handleClickOutside);
		window.addEventListener('scroll', handleScroll);

		handleScroll();

		return () => {
			window.removeEventListener('click', handleClickOutside);
			window.removeEventListener('scroll', handleScroll);
		};
	});

	function toggleMenu() {
		mobileOpen = !mobileOpen;
	}
</script>

<header
	bind:this={navRef}
	class={[
		'sticky top-0 z-50 w-full px-4 backdrop-blur transition-colors duration-300',
		scrolled ? 'bg-neutral-950/80' : 'bg-neutral-950'
	]}
>
	<nav class="container mx-auto flex max-w-7xl items-center justify-between py-3 sm:py-0">
		<!-- Logo -->
		<a href="/" class="flex cursor-pointer items-center gap-2">
			<enhanced:img
				src="$lib/assets/images/logo.png"
				class="h-10 w-10"
				alt="Logo"
				width="640"
				height="640"
			/>
			<span class="font-pixel text-base text-white sm:text-xl">DIKEFX</span>
		</a>

		<!-- Desktop Nav -->
		<ul class="hidden items-center gap-6 sm:flex">
			<li>
				<a href="/" class="hover:text-primary p-2 transition-all">Commissions</a>
			</li>
			<li>
				<a href="/" class="hover:text-primary p-2 transition-all">Portfolio</a>
			</li>
			<li>
				<a href="/" class="hover:text-primary p-2 transition-all">About</a>
			</li>
			<li>
				<a href="/" class="hover:text-primary p-2 transition-all">Contact</a>
			</li>
			<li class="bg-primary hover:bg-secondary transition-all">
				<a
					href="https://discord.gg/48RRjGX5AH"
					target="_blank"
					class="flex items-center gap-2 px-6 py-8 font-bold text-neutral-950"
					><SimpleIconsDiscord /> Discord</a
				>
			</li>
		</ul>

		<button
			class="flex flex-col items-center justify-center gap-[6px] p-2 focus:outline-none sm:hidden"
			aria-label="Toggle menu"
			onclick={toggleMenu}
		>
			<span
				class="block h-[2px] w-6 origin-center bg-white transition-transform duration-300"
				class:rotate-45={mobileOpen}
				class:translate-y-[8px]={mobileOpen}
			></span>
			<span
				class="block h-[2px] w-6 bg-white transition-all duration-200"
				class:opacity-0={mobileOpen}
			></span>
			<span
				class="block h-[2px] w-6 origin-center bg-white transition-transform duration-300"
				class:-rotate-45={mobileOpen}
				class:-translate-y-[8px]={mobileOpen}
			></span>
		</button>
	</nav>

	<!-- Mobile Menu -->
	{#if mobileOpen}
		<ul
			in:slide={{ duration: 250 }}
			out:slide={{ duration: 200 }}
			class="flex flex-col gap-4 px-6 pb-6 text-white sm:hidden"
		>
			<li>
				<a href="/" class="hover:text-primary block py-2" onclick={() => (mobileOpen = false)}
					>Commissions</a
				>
			</li>
			<li>
				<a href="/" class="hover:text-primary block py-2" onclick={() => (mobileOpen = false)}
					>Portfolio</a
				>
			</li>
			<li>
				<a href="/" class="hover:text-primary block py-2" onclick={() => (mobileOpen = false)}
					>About</a
				>
			</li>
			<li>
				<a href="/" class="hover:text-primary block py-2" onclick={() => (mobileOpen = false)}
					>Contact</a
				>
			</li>
			<li class="bg-primary hover:bg-secondary px-4 py-3 text-center">
				<a
					href="https://discord.gg/48RRjGX5AH"
					target="_blank"
					class="flex items-center justify-center gap-2 font-bold text-neutral-950"
					><SimpleIconsDiscord /> Join Discord</a
				>
			</li>
		</ul>
	{/if}
</header>
