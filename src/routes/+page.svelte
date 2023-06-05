<script>
    import Work from "../components/Work.svelte"
    import Typewriter from 'svelte-typewriter'

    let workExperience = [{position:'Intermediate Engineer (Full Stack)', name:'VideoAmp', location:'Los Angeles, CA', date:'Apr 2022 - Feb 2023'},
                        {position:'Sr. Data Engineer', name:'Music Reports', location:'Woodland Hills, CA', date:'Aug 2020 - Apr 2022'},
                        {position:'Senior Oracle Engineer', name:'Trifecta Clinical', location:'Los Angeles, CA', date:'Apr 2022 - Feb 2023'},
                        {position:'Software Engineer Intern', name:'OutboundEngine', location:'Austin, TX', date:'Feb 2015 - Aug 2015'}]
</script>

<div id="summary"  class="h-32 flex ml-12 mt-12 items-center">
    <div class="h-full pt-8">
        <h1 class="text-white">Hello! My name is <span class="text-red-500">Juan Yu</span>
            <Typewriter mode={'loop'} interval={150} cursor={false}>
                <span data-static>and I am a </span>
                <span class="text-red-500">designer.</span>
                <span class="text-red-500">developer.</span>
                <span class="text-red-500">analyzer.</span>
                <span class="text-red-500">creative.</span>
            </Typewriter>
        </h1>
    </div>
</div>

<div class="p-12 max-w-6xl">
    <p class="text-white text-base mb-3">I am a software engineer based in Los Angeles, CA. I am highly motivated with a passion for designing clean, efficient, and scalable code. I possess
    strong organizational skills and adhere to coding best practices and standards. I have strong leadership abilities and a proven track record of providing exceptional quality in both code and customer service.</p>
    
    <span class="text-base font-medium px-2.5 py-0.5 rounded-lg bg-blue-900 text-blue-300"><a href="/about">Learn more about me</a>
</div>

<!-- Work -->
<div class="p-12" id="work">
    <h1 class="pb-5 text-red-500">Work Experience</h1>
    <ol class="relative border-l-2 border-gray-700">
        {#each workExperience as work}
            <Work {...work} />
        {/each} 
    </ol>
</div>
<div class="h-96 p-12" id="projects"><h1 class="text-red-500">Projects</h1></div>
<div class="h-96 p-12" id="about"><h1 class="text-red-500">Education and Skills</h1></div>
