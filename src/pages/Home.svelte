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
    import image5 from '../assets/preview-image5.png'

    let projects = [
        { projectName: "RareReads", date: 2023, skillsUsed: "HTML, CSS, Svelte, Node.js, Express.js", previewImage: image2, projectLink: "https://github.com/sandrikk/auction-site", type: "web" },
        { projectName: "NEWGROUNDAI", date: 2023, skillsUsed: "HTML, CSS, JavaScript, Three.js", previewImage: image1, projectLink: "https://newgroundai.com/", type: "web" },
        { projectName: "SoundSculptor", date: 2023, skillsUsed: "HTML, CSS, JavaScript, Node.js, Express.js, SQLite", previewImage: image3, projectLink: "", type: "web" },
        { projectName: "TrackManager", date: 2023, skillsUsed: "Java", previewImage: image4, projectLink: "https://github.com/sandrikk/TrackManagerApp", type: "apps" },
        { projectName: "Lorenz System", date: 2022, skillsUsed: "Processing", previewImage: image5, projectLink: "https://openprocessing.org/sketch/1781876", type: "art" },
    ];
</script>

<HeroSection />
<Divider />

<AboutMeSection />

<ProjectsSection {projects} />

<SkillsSection />

<CVSection />