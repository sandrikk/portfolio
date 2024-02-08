<script>
    export let projectName;
    export let skillsUsed;
    export let previewImage;
</script>

<div class="project">
    <img src="{previewImage}" alt="{projectName}">
    <h3>{projectName}</h3>
    <p>{skillsUsed}</p>
</div>

<style>
    .project {
        margin-bottom: 20px;
        padding: 20px;
        border: 1px solid #ccc;
        border-radius: 5px;
    }

    .project img {
        max-width: 25vw;
        height: auto;
        margin-bottom: 10px; /* Optional: add space between image and text */
    }
</style>
