
<script>
    import illustration from '../assets/illustration-medium-gradient-ellipse.png'
    import Typewriter from "./Typewriter.svelte";
    import { onMount } from 'svelte';

    let currentIndex = 0;
    let currentText = '';
    const dataText = [
        "ICT Student",
        "Web Development Enthusiast",
    ];

    onMount(() => {
        startTextAnimation();
    });

    function startTextAnimation() {
        if (currentIndex >= dataText.length) {
            currentIndex = 0; // Loop back to the beginning
        }

        const text = dataText[currentIndex];
        typeWriter(text, 0);
    }

    function typeWriter(text, i) {
        if (i < text.length) {
            currentText = text.substring(0, i + 1);
            i++;
            setTimeout(() => {
                typeWriter(text, i);
            }, 100);
        } else {
            currentIndex++;
            setTimeout(startTextAnimation, 700);
        }
    }
</script>

<div class="hero-section">
    <div class="text-container">
        <h1>Hi, I'm Sandra!</h1>
        <h2>{currentText}</h2>
    </div>
    <img src={illustration} alt="illustration">
</div>



<style>
    .hero-section {
        display: flex;
        align-items: center;
        gap: 2rem;
    }

    .text-container {
        margin-left: 20vw; /* Initial margin for larger screens */
    }

    img {
        max-width: 50%;
        height: 93vh;
    }

    h1 {
        font-size: 5em;
        margin-bottom: 1.5rem;
    }

    h2 {
        display: inline-block;
        border-right: 2px solid var(--bg-secondary); /* Typewriter cursor */
        white-space: nowrap; /* Prevent text from wrapping */
        overflow: hidden; /* Hide overflowed text */
        animation: typing 1s steps(40, end); /* Typing animation */
        color: var(--cl-button);
    }

    @keyframes typing {
        from {
            width: 0;
        }
    }

    /* Media query for smaller screens */
    @media screen and (max-width: 1450px) {
        .hero-section {
            flex-direction: column; /* Stack items vertically on smaller screens */
            text-align: center; /* Center align text */
            gap: 0;
        }

        .text-container {
            margin-left: 0; /* Remove margin for smaller screens */
            height: 10vh;
        }

        img {
            max-width: 100%; /* Take full width on smaller screens */
            height: 83vh;
        }
    }

    @media screen and (max-width: 1050px) {
        h1 {
            font-size: 3em;
        }
    }
</style>
