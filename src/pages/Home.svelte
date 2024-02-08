<script>
    import HeroSection from "../components/HeroSection.svelte";
    import Divider from "../components/Divider.svelte";
</script>

<HeroSection />
<Divider />
<section class="about-me container">
    <h2>About me</h2>
    <div class="description">
        <p>
            Hello! ✨
        </p>
        <p>
            I'm a second-year ICT student at Saxion, deeply engaged in the world of web development. My passion for IT took root in Slovakia during my early years, where it blossomed into an academic journey now unfolding in the Netherlands.

        </p>
        <p>
            Alongside my studies, I am fascinated by the power of AI, dedicating my spare time to understanding its impact on our everyday lives and future possibilities. I also have a keen interest in generative art, where technology meets creativity.

        </p>
        <p>
            Beyond the digital realm, I find joy in the calming beauty of nature.
        </p>
    </div>

</section>


<style>
.about-me {
    background-color: var(--bg-secondary);
    color: var(--cl-button);
    padding-top: 2.5rem;
    padding-bottom: 2.5rem;
}

.description {
    max-width: 40vw;
    margin: auto;
}

.description p {
    font-size: 1.5em;
}

.about-me h2 {
    text-transform: uppercase;
    text-align: center;
}
</style>