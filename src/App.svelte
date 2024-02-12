<script>
    import Header from "./components/Header.svelte";
    import Footer from "./components/Footer.svelte";
    import Home from "./pages/Home.svelte";
</script>

<header class="container">
  <Header />
</header>

<main>
    <Home />
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
