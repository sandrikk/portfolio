<script>
    import download from '../assets/downloading.png'
    import arrow from '../assets/arrow.png'
</script>

<section class="cv" id="contact">
    <h2>CV</h2>

    <img class="arrow" src={arrow} alt="arrow">

    <div class="centered">
        <a href="/assets/SandraKrevovaCV.pdf" download>
            <img src={download} alt="download-icon">
            <span>Download my CV</span>
        </a>
    </div>
</section>

<style>
    .cv {
        position: relative; /* Make the section a positioned parent */
        background-color: var(--cl-button);
        color: var(--bg-primary);
        //padding-top: 50px; /* Adjust top padding to make space for the arrow */
    }

    .arrow {
        position: absolute; /* Position the arrow image */
        top: -2.5rem; /* Align the arrow to the top of the section */
        right: 15vw; /* Align the arrow to the right with a distance of 10vw */
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
</style>
