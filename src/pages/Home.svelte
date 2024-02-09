<script>
    import HeroSection from "../components/HeroSection.svelte";
    import Divider from "../components/Divider.svelte";
    import Project from "../components/Project.svelte";
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

<section class="container">
    <h2>Portfolio</h2>

    <div class="projects-grid">
        <Project
                projectName="NEWGROUNDAI"
                skillsUsed="HTML, CSS, JavaScript, Three.js"
                previewImage="./src/assets/preview-image1.png"
                projectLink="https://newgroundai.com/"
        />

        <Project
                projectName="NEWGROUNDAI"
                skillsUsed="HTML, CSS, JavaScript, Three.js"
                previewImage="./src/assets/preview-image1.png"
                projectLink="https://newgroundai.com/"
        />

        <Project
                projectName="NEWGROUNDAI"
                skillsUsed="HTML, CSS, JavaScript, Three.js"
                previewImage="./src/assets/preview-image1.png"
                projectLink="https://newgroundai.com/"
        />

        <Project
                projectName="NEWGROUNDAI"
                skillsUsed="HTML, CSS, JavaScript, Three.js"
                previewImage="./src/assets/preview-image1.png"
                projectLink="https://newgroundai.com/"
        />


    </div>
</section>

<section class="container">
    <h2>Skills</h2>
</section>

<section class="cv">
    <h2>CV</h2>
    <div class="centered">
        <a href="./src/assets/SandraKrevovaCV.pdf" download>
            <img src="./src/assets/downloading.png" alt="download-icon">
            <span>Download my CV</span>
        </a>
    </div>
</section>



<style>
section {
    padding-top: 2.5rem;
    padding-bottom: 2.5rem;
}

.about-me {
    background-color: var(--bg-secondary);
    color: var(--cl-button);
}

.description {
    max-width: 40vw;
    margin: auto;
}

.description p {
    font-size: 1.2em;
}

h2 {
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 1rem;
}

.cv {
    background-color: var(--cl-button);
    color: var(--bg-primary);
}

.centered {
    display: flex;
    justify-content: center;
    align-items: center;
}

.centered a {
    display: flex;
    align-items: center;
    text-decoration: none; /* Optional: remove underline */
}

.centered a img {
    margin-right: 5px; /* Optional: adjust spacing between image and text */
}

.projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(20vw, 1fr));
    grid-gap: 20px;
}
</style>