<!-- ProjectsSection.svelte -->
<script>
    import { onMount } from 'svelte';
    import Project from "./Project.svelte";

    export let projects = [];
    let filteredProjects = projects;
    let filterType = null;

    function filterProjects(type) {
        filterType = type;
    }

    // Update filteredProjects when projects or filterType changes
    $: filteredProjects = filterType === null ? projects : projects.filter(project => project.type === filterType);
</script>

<section class="container">
    <h2>Portfolio</h2>

    <div class="filter-links">
        <button on:click={() => filterProjects(null)}>All</button>
        <button on:click={() => filterProjects("web")}>Web</button>
        <button on:click={() => filterProjects("apps")}>Apps</button>
        <button on:click={() => filterProjects("art")}>Art</button>
    </div>

    <section class="projects-grid">
        {#each filteredProjects as project}
            <Project
                    projectName={project.projectName}
                    date={project.date}
                    skillsUsed={project.skillsUsed}
                    previewImage={project.previewImage}
                    projectLink={project.projectLink}
            />
        {/each}
    </section>
</section>

<style>
    section.container {
        padding-top: 2.5rem;
        padding-bottom: 2.5rem;
    }

    h2 {
        text-transform: uppercase;
        text-align: center;
        margin-bottom: 2.5rem;
    }

    .filter-links {
        text-align: center;
        color: white;
        margin-bottom: 20px;
    }

    .filter-links button {
        margin-right: 10px;
    }

    .projects-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(20vw, 1fr));
        grid-gap: 20px;
    }
</style>
