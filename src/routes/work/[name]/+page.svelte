<script>
	// @ts-nocheck

	import { page } from '$app/stores';
	import { WorkExperience } from '../../../stores.js';

	let currentRoute = $page.url.pathname;
	let companyName = currentRoute.substring(6);
	let work = $WorkExperience.find(
		(work) => work.name.toLowerCase().replace(/\s/g, '') === companyName.toLowerCase()
	);
	// let work = $WorkExperience.find(work => work.name.toLowerCase() === 'music reports')
</script>

<div class="px-3.5 md:px-5 lg:px-6 py-8 text-black" id="about">
	<div class="bg-white rounded-xl shadow-md p-8 max-w-4xl">
		<div class="flex items-center">
			<h1 class="text-3xl font-poppins font-extrabold tracking-tighter mr-3">{work.name}</h1>
			<img src={work.src} alt="company logo" class="h-16" />
		</div>
		<div class="block text-2xl leading-tight font-medium text-black font-garamond">
			{work.position}
		</div>
		<div class="text-sm">{work.location}</div>
		<div class="text-sm mb-8">{work.date}</div>
		<ul class="list-disc">
			{#each work.keypoints as kp}
				<li>{kp}</li>
			{/each}
		</ul>
	</div>
</div>
