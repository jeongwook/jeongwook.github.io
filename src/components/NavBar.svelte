<script>
	import NavBarButton from '../components/NavBarButton.svelte';

	export let buttons = [{ link: 'Home', href: '/' }];
</script>

<nav>
	<!-- hidden until large screen size -->
	<ul class="hidden lg:flex items-center justify-between">
		{#each buttons as button}
			<NavBarButton {...button} />
		{/each}
	</ul>
</nav>
