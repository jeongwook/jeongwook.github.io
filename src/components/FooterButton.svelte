<script>
	export let alt = 'Footer Button';
	export let src = '/';
	export let href = '/';
	export let link = 'Juan Yu';
	export let enabled = true;
</script>

<li class="mb-5 hover:text-red-400 {enabled ? '' : 'line-through decoration-red-500 decoration-2'}">
	<a class="flex items-center" {href}>
		<img class="h-4 mr-5 hover:text-red-400" {src} {alt} />
		{link}
	</a>
</li>
