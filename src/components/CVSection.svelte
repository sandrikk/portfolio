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
        position: relative;
        background-color: var(--cl-button);
        color: var(--bg-primary);
        //padding-top: 50px;
    }

    .arrow {
        position: absolute;
        top: -2.5rem;
        right: 15vw;
    }

    .centered {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .centered a {
        display: flex;
        align-items: center;
        text-decoration: none;
    }

    .centered a img {
        margin-right: 5px;
    }

    @media screen and (max-width: 500px) {
        .arrow {
            right: 0;
        }

        .centered {
            justify-content: flex-start;
            margin-left: 2rem;
        }
    }

</style>
