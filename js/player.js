// Fonction pour changer le volume
function changeVolume() {
    var player = document.getElementById('musicPlayer');
    var volume = document.getElementById('volumeControl').value;
    player.volume = volume;
}

// Fonction pour mettre en pause ou jouer la musique
function togglePlayPause() {
    var player = document.getElementById('musicPlayer');
    if (player.paused) {
        player.play();
    } else {
        player.pause();
    }
}

// Définir le volume initial à 5% au chargement de la page
window.onload = function() {
    var player = document.getElementById('musicPlayer');
    player.volume = 0.05;
};
