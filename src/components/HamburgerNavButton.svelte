<script>
    export let link = 'Home'
    export let href = '/'
</script>

<li class="bg-slate-800">
    <button on:click class="w-full pl-3.5 md:pl-5 lg:pl-6 py-5 text-neutral-400 hover:text-white flex justify-start">
        <a {href}>{link}</a>
    </button>
</li>

