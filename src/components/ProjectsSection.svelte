<!-- ProjectsSection.svelte -->
<script>
    import { writable } from 'svelte/store';
    import Project from "./Project.svelte";

    export let projects = [];
    console.log(projects)

    let filteredProjects = writable(projects);
    let filterType = writable(null);

    function filterProjects(type) {
        filterType.set(type);
    }

    $: $filteredProjects = $filteredProjects.map(project => {
        return projects.filter(p => p.type === $filterType);
    });
</script>

<section class="container">
    <h2>Portfolio</h2>

    <div class="filter-links">
        <button on:click={() => filterProjects(null)}>All</button>
        <button on:click={() => filterProjects("web")}>Web</button>
        <button on:click={() => filterProjects("apps")}>Apps</button>
        <button on:click={() => filterProjects("art")}>Art</button>
    </div>

    <div class="projects-grid">
        {#each $filteredProjects as project}
            <Project
                    projectName={project.projectName}
                    type={project.type}
                    date={project.date}
                    skillsUsed={project.skillsUsed}
                    previewImage={project.previewImage}
                    projectLink={project.projectLink}
            />
        {/each}
    </div>
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
        margin-bottom: 20px;
        color: white;
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
