<script>
    export let projectName;
    export let skillsUsed;
    export let previewImage;
    export let projectLink;
</script>

<div class="project">
    <a href="{projectLink}" target="_blank">
        <img src="{previewImage}" alt="{projectName}">
        <h3>{projectName}</h3>
        <p>{skillsUsed}</p>
    </a>
</div>

<style>
    .project {
        margin-bottom: 20px;
        padding: 20px;
        border: 1px solid #ccc;
        border-radius: 5px;
    }

    .project img {
        height: auto;
        margin-bottom: 10px; /* Optional: add space between image and text */
    }

    .project a {
        text-decoration: none; /* Optional: remove underline */
        color: inherit; /* Optional: inherit color from parent */
    }
</style>
