<script>
    import HamburgerNavButton from "../components/HamburgerNavButton.svelte"
    
    export let buttons = [{link: 'Home', href: '/'}]
    export let hamIsOpen = true
</script>

<!-- Hamburger Links -->
<!-- Only visible when button is clicked/open but must also hide the menu when screen goes over xl -->
<nav class="w-full {hamIsOpen ? 'absolute' : 'hidden'} xl:hidden z-10">
    <ul class="w-full">
        {#each buttons as button}
            <HamburgerNavButton on:click {...button}/>      
        {/each}        
    </ul>
</nav>
