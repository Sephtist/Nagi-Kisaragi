const ambientTracks = {
    "index.html": "ambient-main.mp3.mp3",
    "profile.html": "ambient-main.mp3.mp3",
    "career.html": "ambient-career.mp3.mp3",
    "cases.html": "ambient-cases.mp3.mp3",
    "evidence.html": "ambient-evidence.mp3.mp3",
    "archive.html": "ambient-archive.mp3.mp3",
    "personal.html": "ambient-personal.mp3.mp3",
    "contact.html": "ambient-contact.mp3.mp3"
};

const currentPage =
    window.location.pathname.split("/").pop() || "index.html";

const ambientFile = ambientTracks[currentPage];

if (ambientFile) {

    const ambientAudio = new Audio("./" + ambientFile);

    ambientAudio.loop = true;
    ambientAudio.volume = 0;
    ambientAudio.preload = "auto";

    ambientAudio.addEventListener("loadedmetadata", () => {
    if (ambientAudio.duration > 30) {
        ambientAudio.currentTime =
            Math.random() * (ambientAudio.duration - 30);
    }
});

    function fadeIn() {

        ambientAudio.play().then(() => {

            let volume = 0;

            const fade = setInterval(() => {

                volume += 0.01;

                if (volume >= 0.15) {
                    volume = 0.15;
                    clearInterval(fade);
                }

                ambientAudio.volume = volume;

            }, 100);

            localStorage.setItem("nagiAmbientStarted", "true");

        }).catch(() => {});
    }

    const hasStarted =
        localStorage.getItem("nagiAmbientStarted");

    if (hasStarted === "true") {
        fadeIn();
    }

    document.addEventListener("click", fadeIn, { once: true });
}
