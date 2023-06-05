<script>
	import "../app.css";
	import NavBar from "../components/NavBar.svelte"
	import HamburgerNavBar from  "../components/HamburgerNavBar.svelte"
	import HamburgerButton from "../components/HamburgerButton.svelte"
	import BackButton from "../components/BackButton.svelte"
	import Footer from "../components/Footer.svelte"
	import { page } from "$app/stores"

	// Navigation Links
	let buttons = [{link: 'Summary', href: '#summary'}, 
        			{link: 'Work', href: '#work'}, 
         			{link: 'Projects', href: '#projects'}, 
                    {link: 'About', href: '#about'},
					{link: 'Resume', href: '#'},
                    {link: 'Contact', href: '#contact'}]

	// Variable to check to see if hamburger menu is open
	let hamIsOpen = false

	// Function to change state of hamburger menu open/closed
	function onClickHamburgerBtn() {
		hamIsOpen = !hamIsOpen
	}

	// Checks to see if window has gone over xl breakpoint 
    // If it does go over, make sure to close/hide the button/menu
    // This is the case where the user goes back to small window, we don't want the menu to appear right away
	$: innerWidth = 0
	$: hamIsOpen = innerWidth >= 1280 ? false : hamIsOpen
	$: currentRoute = $page.url.pathname
</script>

<div class="h-full min-h-screen bg-slate-900 text-neutral-400 text-3xl font-poppins">
	<div class="sticky top-0 z-10 bg-slate-900">
    	<header class="flex items-center justify-between p-5">
			<div>
				<a class="text-white font-bold" href="/">Juan Yu</a>
			</div>		
			{#if currentRoute === '/'}
				<NavBar {buttons}/>
				<HamburgerButton on:click={onClickHamburgerBtn} {hamIsOpen}/>
			{:else}
				<BackButton />
			{/if}
		</header>
		<HamburgerNavBar on:click={onClickHamburgerBtn} {buttons} {hamIsOpen}/>
	</div>

	<slot />

	<Footer />
</div>

<svelte:window bind:innerWidth />