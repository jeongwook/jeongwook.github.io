<script>
	import Card from './Card.svelte';

	let myExperience = [
		{
			src: '/images/me.JPG',
			alt: 'Juan at UT',
			heading: 'University of Texas at Austin',
			subheading: 'Computer Science',
			body: 'I graduated from the university of Texas at Austin with a Bachelor of Science: Computer Science degree.'
		},
		{
			src: '/images/basketball.jpeg',
			alt: 'basketball',
			heading: 'Sports',
			subheading: 'Basketball',
			body: 'I am an avid sports player/fan and enjoy playing almost all sports but my focus is mostly on basketball.'
		},
		{
			src: '/images/snowboard.jpg',
			alt: 'snowboarding',
			heading: 'Outdoors',
			subheading: 'Snowboarding',
			body: 'I also enjoy a great time snowboarding.'
		},
		{
			src: '/images/chess.jpeg',
			alt: 'basketball',
			heading: 'Board games',
			subheading: 'Chess',
			body: 'Middle school state champions 3 years in a row and High School state champions 4 years in a row. Best national result was tied for 2nd.'
		}
	];
</script>

<div class="px-3.5 md:px-5 lg:px-6 py-8" id="about">
	{#each myExperience as exp, i}
		<Card {...exp} {i} />
	{/each}
</div>
