<script>
    export let alt = 'Footer Button'
    export let src = '/'
    export let href = '/'
    export let link = 'Juan Yu'
</script>

<li class="mb-4 mr-8 hover:text-red-400">
    <a class="flex items-center" {href}>
        <img class="h-4 mr-4 hover:text-red-400" {src} {alt}/>
        {link}
    </a>
</li>
