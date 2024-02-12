<script>
    document.addEventListener("DOMContentLoaded", function() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();

                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
    });

</script>

<nav>
    <ul class="menu">
        <li><a href="#about-me">About me</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
    </ul>
</nav>

<style>
    nav {
        width: 100%;
    }
    .menu {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .menu li {
        font-weight: bolder;
        line-height: 1;
        letter-spacing: 0.05rem;
    }

    a:hover {
        color: var(--cl-button);
        text-decoration: underline;
    }
</style>