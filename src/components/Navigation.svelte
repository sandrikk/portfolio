<nav>
    <ul class="menu">
        <li><a href="">About me</a></li>
        <li><a href="">Portfolio</a></li>
        <li><a href="">Contact</a></li>
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