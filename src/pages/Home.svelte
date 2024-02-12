<script>
    import HeroSection from "../components/HeroSection.svelte";
    import Divider from "../components/Divider.svelte";

    import ProjectsSection from "../components/ProjectsSection.svelte";
    import SkillsSection from "../components/SkillsSection.svelte";
    import CVSection from "../components/CVSection.svelte";
    import AboutMeSection from "../components/AboutMeSection.svelte";

    import image1 from '../assets/preview-image1.png'
    import image2 from '../assets/preview-image2.png'
    import image3 from '../assets/preview-image3.png'
    import image4 from '../assets/preview-image4.png'

    let projects = [
        { projectName: "NEWGROUNDAI", date: 2023, skillsUsed: "HTML, CSS, JavaScript, Three.js", previewImage: image1, projectLink: "https://newgroundai.com/", type: "web" },
        { projectName: "RareReads", date: 2023, skillsUsed: "HTML, CSS, JavaScript, Three.js", previewImage: image2, projectLink: "https://newgroundai.com/", type: "web" },
        { projectName: "SoundSculptor", date: 2023, skillsUsed: "HTML, CSS, JavaScript, SQLite", previewImage: image3, projectLink: "https://newgroundai.com/", type: "web" },
        { projectName: "TrackManager", date: 2023, skillsUsed: "Java", previewImage: image4, projectLink: "https://github.com/sandrikk/TrackManagerApp", type: "apps" },
    ];
</script>

<HeroSection />
<Divider />

<AboutMeSection />

<ProjectsSection {projects} />

<SkillsSection />

<CVSection />