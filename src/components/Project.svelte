<!-- Project.svelte -->
<script>
    export let projectName;
    export let date;
    export let skillsUsed;
    export let previewImage;
    export let projectLink;
    export let type;
</script>

<div class="project">
    <a href="{projectLink}">
        <img src="{previewImage}" alt="{projectName}">
        <h3>{projectName}</h3>
        <p>Date: {date}</p>
        <p>Skills Used: {skillsUsed}</p>
    </a>
</div>

<style>
    /* Additional CSS for projects */
    .project {
        width: 300px; /* Fixed width for each project */
        margin-bottom: 20px;
        padding: 20px;
        border: 1px solid #ccc;
        border-radius: 5px;
    }

    .project img {
        width: 100%;
        height: 12rem;
        margin-bottom: 10px; /* Optional: add space between image and text */
    }
</style>
