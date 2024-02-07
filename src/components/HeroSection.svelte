<script>
    import Typewriter from "./Typewriter.svelte";
</script>

<div class="hero-section">
    <img src="./src/assets/illustration-medium-gradient-ellipse.png" alt="illustration">
    <Typewriter />
</div>



<style>
    img {
        max-width: 50%;
        height: 93vh;
    }

    .hero-section {
        display: flex;
        align-items: center;
        gap: 2rem;
    }
</style>