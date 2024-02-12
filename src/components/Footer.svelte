<script>
    import linkedin from '../assets/linkedin-in.svg'
    import envelope from '../assets/envelope-regular.svg'
    import git from '../assets/github.svg'
</script>

<ul class="socials">
    <li>
        <a href="https://github.com/sandrikk" class="link"><img src={git} alt="github-icon"></a>
    </li>
    <li>
        <a href="mailto:krevovasandra@gmail.com" class="link"><img src={envelope} alt="gmail-icon"></a>
    </li>
    <li>
        <a href="https://linkedin.com/in/sandra-krevova" class="link"><img src={linkedin} alt="linkedin-icon"></a>
    </li>
</ul>
<p>© Sandra Krevova, 2023</p>

<style>
    .socials {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .link img {
        width: 2rem;
        margin-right: 1rem;
    }

    .socials li:last-child img {
        margin-right: 0;
    }

    p {
        text-align: center;
    }




</style>