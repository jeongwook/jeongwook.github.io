<script>
	export let src = '';
	export let alt = '';
	export let heading = '';
	export let subheading = '';
	export let body = '';
	export let i = 0;
</script>

<!-- on odd children reverse the ordering of image and text -->
<div class="max-w-md bg-white rounded-xl shadow-md overflow-hidden lg:max-w-2xl mb-8">
	<div class="lg:flex {i % 2 === 1 ? 'flex-row-reverse' : ''} items-center">
		<div class="lg:shrink-0">
			<img class="h-96 w-full object-cover lg:h-48 lg:w-48" {src} {alt} />
		</div>
		<div class="p-8">
			<div class="uppercase tracking-tight text-lg text-red-500 font-semibold">{heading}</div>
			<p class="block mt-1 text-lg leading-tight font-medium text-black font-garamond">
				{subheading}
			</p>
			<p class="mt-2 text-slate-500">{body}</p>
		</div>
	</div>
</div>

<!-- text-3xl font-poppins font-extrabold tracking-tighter -->
