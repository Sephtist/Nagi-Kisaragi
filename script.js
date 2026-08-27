const audioPlayer = document.getElementById("audio-player");

const playButton = document.getElementById("play-btn");
const nextButton = document.getElementById("next-btn");
const prevButton = document.getElementById("prev-btn");

const trackTitle = document.getElementById("track-title");
const trackArtist = document.getElementById("track-artist");

const tracks = document.querySelectorAll(".track");

let currentTrack = 0;


function loadTrack(index) {
    const track = tracks[index];

    audioPlayer.src = track.dataset.src;

    trackTitle.textContent = track.dataset.title;
    trackArtist.textContent = track.dataset.artist;

    currentTrack = index;
}


playButton.addEventListener("click", () => {

    if (!audioPlayer.src) {
        loadTrack(0);
    }

    if (audioPlayer.paused) {
        audioPlayer.play();
        playButton.textContent = "❚❚";
    } else {
        audioPlayer.pause();
        playButton.textContent = "▶";
    }

});


tracks.forEach((track, index) => {

    track.addEventListener("click", () => {

        loadTrack(index);

        audioPlayer.play();

        playButton.textContent = "❚❚";

    });

});


nextButton.addEventListener("click", () => {

    currentTrack++;

    if (currentTrack >= tracks.length) {
        currentTrack = 0;
    }

    loadTrack(currentTrack);

    audioPlayer.play();

    playButton.textContent = "❚❚";

});


prevButton.addEventListener("click", () => {

    currentTrack--;

    if (currentTrack < 0) {
        currentTrack = tracks.length - 1;
    }

    loadTrack(currentTrack);

    audioPlayer.play();

    playButton.textContent = "❚❚";

});


audioPlayer.addEventListener("ended", () => {

    currentTrack++;

    if (currentTrack >= tracks.length) {
        currentTrack = 0;
    }

    loadTrack(currentTrack);

    audioPlayer.play();

});
