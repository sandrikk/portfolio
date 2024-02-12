<script>
    import HeroSection from "../components/HeroSection.svelte";
    import Divider from "../components/Divider.svelte";

    import ProjectsSection from "../components/ProjectsSection.svelte";
    import SkillsSection from "../components/SkillsSection.svelte";
    import CVSection from "../components/CVSection.svelte";
    import AboutMeSection from "../components/AboutMeSection.svelte";

    let projects = [
        { projectName: "NEWGROUNDAI", date: 2023, skillsUsed: "HTML, CSS, JavaScript, Three.js", previewImage: "./src/assets/preview-image1.png", projectLink: "https://newgroundai.com/", type: "web" },
        { projectName: "RareReads", date: 2023, skillsUsed: "HTML, CSS, JavaScript, Three.js", previewImage: "./src/assets/preview-image2.png", projectLink: "https://newgroundai.com/", type: "web" },
        { projectName: "SoundSculptor", date: 2023, skillsUsed: "HTML, CSS, JavaScript, SQLite", previewImage: "./src/assets/preview-image3.png", projectLink: "https://newgroundai.com/", type: "web" },
        { projectName: "TrackManager", date: 2023, skillsUsed: "Java", previewImage: "./src/assets/preview-image4.png", projectLink: "https://github.com/sandrikk/TrackManagerApp", type: "apps" },
    ];
</script>

<HeroSection />
<Divider />

<AboutMeSection />

<ProjectsSection {projects} />

<SkillsSection />

<CVSection />