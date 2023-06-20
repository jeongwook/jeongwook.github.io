<script>
	import '../app.css';
	import NavBar from '../components/NavBar.svelte';
	import HamburgerNavBar from '../components/HamburgerNavBar.svelte';
	import HamburgerButton from '../components/HamburgerButton.svelte';
	import BackButton from '../components/BackButton.svelte';
	import Footer from '../components/Footer.svelte';
	import { page } from '$app/stores';

	// Navigation Links
	let buttons = [
		{ link: 'Summary', href: '#summary' },
		{ link: 'Work', href: '#work' },
		{ link: 'Projects', href: '#projects' },
		{ link: 'About', href: '#about' },
		{ link: 'Resume', href: '/Resume.pdf' },
		{ link: 'Contact', href: '#contact' }
	];

	// Variable to check to see if hamburger menu is open
	let hamIsOpen = false;

	// Function to change state of hamburger menu open/closed
	function onClickHamburgerBtn() {
		hamIsOpen = !hamIsOpen;
	}

	// Checks to see if window has gone over xl breakpoint
	// If it does go over, make sure to close/hide the button/menu
	// This is the case where the user goes back to small window, we don't want the menu to appear right away
	$: innerWidth = 0;
	$: hamIsOpen = innerWidth >= 1280 ? false : hamIsOpen;
	$: currentRoute = $page.url.pathname;
</script>

<!-- text-neutral-400 -->
<!-- sm - mobile, md - tablet, lg - laptop, xl - desktop -->
<!-- For mobile devices, the ideal padding is somewhere between 13 - 15 (p-3.5) pixels. 
	For tablets, padding looks best around (p-5) 20 - 24 pixels. 
	For desktop, padding is best starting at 24 (p-6) pixels and progressively wider for larger screens. -->
<!-- px-3.5 md:px-5 lg:px-6 -->
<!-- base font is 16 px so heading should be about 1.96 times text-3xl for headings -->
<div class="h-full min-h-screen bg-slate-900 text-white text-base font-oxygen">
	<div class="sticky top-0 z-10 bg-slate-900">
		<header class="flex items-center justify-between px-3.5 md:px-5 lg:px-6 py-5">
			<div>
				<a class="text-4xl font-poppins font-extrabold tracking-tighter" href="/">Juan Yu</a>
			</div>
			{#if currentRoute === '/'}
				<NavBar {buttons} />
				<HamburgerButton on:click={onClickHamburgerBtn} {hamIsOpen} />
			{:else}
				<BackButton />
			{/if}
		</header>
		{#if currentRoute === '/'}
			<HamburgerNavBar on:click={onClickHamburgerBtn} {buttons} {hamIsOpen} />
		{/if}
	</div>

	<!-- Still under development!!! -->
	<div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4 my-8">
		<div class="shrink-0">
			<img class="h-20 w-20" src="/images/under-construction.png" alt="Construction Logo" />
		</div>
		<div>
			<!-- <div class="text-xl font-medium text-black"></div> -->
			<p class="text-red-500">Site is still under development!<br />More to come.</p>
		</div>
	</div>

	<slot />

	<Footer />
</div>

<svelte:window bind:innerWidth />
