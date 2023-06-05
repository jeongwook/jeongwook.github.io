<script>
    export let link = 'Home'
    export let href = '/'
</script>

<li class="bg-slate-800">
    <button on:click class="w-full text-lg pl-5 py-5 hover:text-white flex justify-start">
        <a {href}>{link}</a>
    </button>
</li>

