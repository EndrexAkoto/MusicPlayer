const playPauseBtn = document.getElementById('play-pause')
const prevBtn = document.getElementById('prev')
const nextBtn = document.getElementById('next')
const volumeControl = document.getElementById('volume-control')
const playlist = document.getElementById('playlist')
const searchInput = document.getElementById('search')

let currentSongIndex = 0
let isPlaying = false
let audio = new Audio()

const songs = [
    { title: "Mercy-Adekunle Gold", url: "music/Adekunle Gold   Mercy (Official Video).mp3" },
    { title: "Okay-Adekunle Gold", url: "music/Adekunle Gold   Okay.mp3" },
    { title: "Un Poco Loco-Anthony Gonzalez", url: "music/Anthony Gonzalez, Gael García Bernal   Un Poco Loco (From  Coco ).mp3" },
    { title: "Rush-Ayra Starr", url: "music/Ayra Starr   Rush (Official Music Video).mp3" }
]


// Load the first song
loadSong(currentSongIndex)

// Event Listeners
playPauseBtn.addEventListener('click', togglePlayPause)
prevBtn.addEventListener('click', playPrevSong)
nextBtn.addEventListener('click', playNextSong)
volumeControl.addEventListener('input', adjustVolume)
playlist.addEventListener('click', selectSong)
searchInput.addEventListener('input', searchSongs)

function loadSong(index) {
    audio.src = songs[index].url
    playPauseBtn.textContent = '▶️'
    isPlaying = false
}

function togglePlayPause() {
    if (isPlaying) {
        audio.pause()
        playPauseBtn.textContent = '▶️'
    } else {
        audio.play()
        playPauseBtn.textContent = '⏸️'
    }
    isPlaying = !isPlaying
}

function playPrevSong() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length
    loadSong(currentSongIndex)
    audio.play()
    isPlaying = true
    playPauseBtn.textContent = '⏸️'
}

function playNextSong() {
    currentSongIndex = (currentSongIndex + 1) % songs.length
    loadSong(currentSongIndex)
    audio.play()
    isPlaying = true
    playPauseBtn.textContent = '⏸️'
}

function adjustVolume() {
    audio.volume = volumeControl.value
}

function selectSong(e) {
    const songIndex = Array.from(playlist.children).indexOf(e.target)
    if (songIndex !== -1) {
        currentSongIndex = songIndex
        loadSong(currentSongIndex)
        audio.play()
        isPlaying = true
        playPauseBtn.textContent = '⏸️'
    }
}

function searchSongs() {
    const query = searchInput.value.toLowerCase()
    Array.from(playlist.children).forEach((li, index) => {
        li.style.display = songs[index].title.toLowerCase().includes(query) ? 'block' : 'none'
    })
}

// Populate the playlist
function populatePlaylist() {
    songs.forEach(song => {
        const li = document.createElement('li')
        li.textContent = song.title
        playlist.appendChild(li)
    })
}

populatePlaylist()
