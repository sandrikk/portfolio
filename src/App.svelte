<script>
    import router from 'page';
    import Header from "./components/Header.svelte";
    import Footer from "./components/Footer.svelte";
    import Home from "./pages/Home.svelte";

    let page;
    let params;
    let currentRoute;

    router('/', (ctx) => {
        page = Home;
        currentRoute = ctx.pathname;
    });

    router.start();
</script>

<header class="container">
  <Header />
</header>

<main>
    <svelte:component active={currentRoute} this={page} {params} />
</main>

<footer class="container">
   <Footer />
</footer>

<style>
    footer {
        padding: 1.5rem 0;
        background-color: var(--bg-secondary);
        color: var(--cl-button);
    }

    header {
        display: flex;
        align-items: center;

        text-transform: uppercase;
        height: 7vh;
        position: sticky;
        top: 0;
        z-index: 1000;
    }
</style>
