<!-- ProjectsSection.svelte -->
<script>
    import Project from "./Project.svelte";
    export let projects = [];
    let filteredProjects = projects;
    let filterType = null;

    function filterProjects(type) {
        filterType = type;
        // Filter projects based on the selected type
        filteredProjects = type ? projects.filter(project => project.type === type) : projects;
    }
</script>

<section class="container">
    <h2>Portfolio</h2>

    <div class="filter-links">
        <!-- Bind class to each button based on whether it's selected or not -->
        <button class:selected={filterType === null} on:click={() => filterProjects(null)}>All</button>
        <span class="separator">/</span>
        <button class:selected={filterType === 'web'} on:click={() => filterProjects('web')}>Web</button>
        <span class="separator">/</span>
        <button class:selected={filterType === 'apps'} on:click={() => filterProjects('apps')}>Apps</button>
        <span class="separator">/</span>
        <button class:selected={filterType === 'art'} on:click={() => filterProjects('art')}>Art</button>
    </div>

    <div class="projects">
        {#each filteredProjects as project}
            <Project
                    projectName={project.projectName}
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
    }

    .separator {
        margin: 0 5px;
    }

    .filter-links button {
        background-color: transparent;
        border: none;
        cursor: pointer;
        padding: 5px 10px;
        font-size: 16px;
    }

    /* Define the selected class to change the color */
    .selected {
        color: var(--cl-button);
    }

    .projects {
        display: flex; /* Change to flexbox */
        flex-wrap: wrap; /* Allow projects to wrap to the next row */
        justify-content: flex-start;
        gap: 1.5rem;
    }
</style>
