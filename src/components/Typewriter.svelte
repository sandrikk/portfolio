<script>
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

<div>
    <h1>Hi, I'm Sandra!</h1>
    <h2>{currentText}</h2>
</div>


<style>
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
        margin-left: 20vw;
        color: var(--cl-button);
    }

    @keyframes typing {
        from {
            width: 0;
        }
    }
</style>


