<script>
    export let hamIsOpen = false
</script>

<!-- Hamburger Button -->
<!-- Hidden on xl screen sizes -->
<button on:click type="button" class="flex items-center lg:hidden text-neutral-400 hover:text-white focus:outline-none">
    <svg class="h-8 w-8 fill-current" viewBox="0 0 24 24">
        {#if hamIsOpen}
            <path fill-rule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"/>
        {:else}
            <path fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/>
        {/if}
    </svg>
</button>
