<script>
	import Work from '../components/Work.svelte';
	import Typewriter from 'svelte-typewriter';

	let workExperience = [
		{
			position: 'Intermediate Engineer (Full Stack)',
			name: 'VideoAmp',
			location: 'Los Angeles, CA',
			date: 'Apr 2022 - Feb 2023',
			href: '/work/videoamp'
		},
		{
			position: 'Sr. Data Engineer',
			name: 'Music Reports',
			location: 'Woodland Hills, CA',
			date: 'Aug 2020 - Apr 2022',
			href: '/work/musicreports'
		},
		{
			position: 'Senior Oracle Engineer',
			name: 'Trifecta Clinical',
			location: 'Los Angeles, CA',
			date: 'May 2016 - Nov 2019',
			href: '/work/trifectaclinical'
		},
		{
			position: 'Software Engineer Intern',
			name: 'OutboundEngine',
			location: 'Austin, TX',
			date: 'Feb 2015 - Aug 2015',
			href: '/work/outboundengine'
		}
	];
</script>

<!----- Typewriter ----->
<div id="summary" class="h-40 flex px-3.5 md:px-5 lg:px-6 py-8">
	<h1 class="text-3xl font-poppins font-extrabold tracking-tighter">
		Hello! My name is <br />
		<span class="text-red-500">Juan Yu</span> and I am a
		<Typewriter mode={'loop'} interval={150} cursor={false}>
			<span class="text-red-500">designer.</span>
			<span class="text-red-500">developer.</span>
			<span class="text-red-500">analyzer.</span>
			<span class="text-red-500">creative.</span>
		</Typewriter>
	</h1>
</div>

<!----- Summary ----->
<div class="px-3.5 md:px-5 lg:px-6 py-8 max-w-3xl">
	<p class="mb-3.5">
		I am a software engineer based in Los Angeles, CA. I am highly motivated with a passion for
		designing clean, efficient, and scalable code. I possess strong organizational skills and adhere
		to coding best practices and standards. I have strong leadership abilities and a proven track
		record of providing exceptional quality in both code and customer service.
	</p>

	<span class="font-medium px-2.5 py-0.5 rounded-lg bg-blue-900 text-blue-300"
		><a href="/about">Learn more about me</a>
	</span>
</div>

<!----- Work ----->
<div class="px-3.5 md:px-5 lg:px-6 py-8" id="work">
	<h1 class="text-red-500 mb-5 text-3xl font-poppins font-extrabold tracking-tighter">
		Work Experience
	</h1>
	<ol class="space-y-5 relative border-l-2 border-gray-700">
		{#each workExperience as work}
			<Work {...work} />
		{/each}
	</ol>
</div>

<!----- Projects ----->
<div class="h-30 px-3.5 md:px-5 lg:px-6 py-8" id="projects">
	<h1 class="text-red-500 mb-5 text-3xl font-poppins font-extrabold tracking-tighter">Projects</h1>
	<ul class="list-disc">
		<li class="hover:text-red-400">
			<a href="https://github.com/jeongwook/jeongwook.github.io">jeongwook.github.io</a>
		</li>
		<li class="mt-4 hover:text-red-400">
			<a href="https://github.com/jeongwook/httpserver">httpserver</a>
		</li>
		<div class="mt-4">More to come..</div>
	</ul>
</div>

<!----- Education ----->
<div class="px-3.5 md:px-5 lg:px-6 py-8" id="about">
	<h1 class="text-red-500 mb-5 text-3xl font-poppins font-extrabold tracking-tighter">Education</h1>
	<div class="flex">
		<img src="/images/ut-seal.png" alt="UT Seal" class="h-14 mr-5" />
		<p>
			University of Texas at Austin<br />
			<span class="font-garamond">Bachelor of Science, Computer Science 2015</span>
		</p>
	</div>
</div>

<!----- Skills ----->
<div class="px-3.5 md:px-5 lg:px-6 py-8" id="about">
	<h1 class="text-red-500 mb-5 text-3xl font-poppins font-extrabold tracking-tighter">
		Skills and Tools
	</h1>
	<p class="max-w-3xl">
		<span class="text-red-500">Skills:</span> Java, Python, SQL (Oracle, Postgres, MySQL), PL/SQL, Snowflake,
		Cassandra, Kafka, Spark, JavaScript, TypeScript, Svelte, JSON, Go, HTML, CSS, Tailwind, C++, Scala,
		DBT, API, gRPC
	</p>
	<p class="max-w-3xl">
		<span class="text-red-500">Tools:</span> Amazon Web Services (AWS), Google Cloud Platform (GCP),
		JupyterLab, Airflow, GitHub, Tableau, Docker, Postman, Jira, Confluence, JetBrains
	</p>
	<p><span class="text-red-500">Work Authorization:</span> U.S. Citizen</p>
	<p><span class="text-red-500">Languages:</span> English, Korean, Spanish</p>
	<p><span class="text-red-500">Hobbies and interets:</span> Sports, games, dogs, chess</p>
</div>
