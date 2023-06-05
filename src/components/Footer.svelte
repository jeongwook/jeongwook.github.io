<script>
// @ts-nocheck
    import FooterButton from "../components/FooterButton.svelte"

    let contactBtns = [{alt: 'Linkedin', src: '/images/social-media-white/linkedin-16.png', href: 'https://www.linkedin.com/in/jeongwook/', link: 'in/jeongwook'}, 
        	            {alt: 'Github', src: '/images/social-media-white/github-16.png', href: 'https://github.com/jeongwook', link: 'jeongwook'}, 
         			    {alt: 'Twitter', src: '/images/social-media-white/twitter-16.png', href: '/', link: 'Jeongwook'}, 
                        {alt: 'Instragram', src: '/images/social-media-white/instagram-16.png', href: '/', link: 'jeongwook.yu'},
					    {alt: 'Facebook', src: '/images/social-media-white/facebook-16.png', href: '/', link: 'Juan'}] // !!! Juan Yu makes it appear in 2 rows
</script>

<div class="p-12" id="contact">
    <h1 class="text-red-500 mb-10">Get in touch</h1>

    <nav>
        <ul class="block sm:grid grid-flow-col grid-rows-3 text-sm text-white w-1/3">
            {#each contactBtns as button}
                <FooterButton {...button}/>
            {/each}
        </ul>
    </nav>
</div>
 