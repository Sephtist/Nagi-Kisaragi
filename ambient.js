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
    ambientAudio.volume = 0.15;
    ambientAudio.preload = "auto";

    const hasStarted = localStorage.getItem("nagiAmbientStarted");

    if (hasStarted === "true") {
        ambientAudio.play().catch(() => {});
    }

    document.addEventListener("click", function () {

        ambientAudio.play().then(() => {
            localStorage.setItem("nagiAmbientStarted", "true");
        }).catch(() => {});

    }, { once: true });
}
