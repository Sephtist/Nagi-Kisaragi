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

const ambientAudio = new Audio();

if (ambientFile) {
    ambientAudio.src = "./" + ambientFile;
    ambientAudio.loop = true;
    ambientAudio.volume = 0.15;
    ambientAudio.preload = "auto";
}

if (ambientFile) {
    ambientAudio.src = ambientFile;
    ambientAudio.loop = true;
    ambientAudio.volume = 0.15;
}

function startAmbient() {
    if (!ambientFile) return;

    ambientAudio.play().catch(() => {
        console.log("Ambient audio waiting for user interaction.");
    });
}

document.addEventListener("click", startAmbient, { once: true });
