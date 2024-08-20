# MusicPlayer

**MusicPlayer** is a web-based music player that allows users to play, pause, skip, and control the volume of their music. The player also includes a search feature and a playlist that users can interact with.

## Features

- **Play/Pause:** Play and pause the current track.
- **Previous/Next:** Skip to the previous or next track in the playlist.
- **Volume Control:** Adjust the playback volume.
- **Playlist:** A list of songs that the user can select and play.
- **Search:** Search through the playlist for specific songs.

## Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/EndrexAkoto/MusicPlayer.git
   cd MusicPlayer

Add Your Music:

    Place your .mp3 files in the music directory.

Run the Application:

    Open the index.html file in your web browser.

File Structure

    MusicPlayer/
│
├── index.html       # The main HTML file that contains the structure of the music player.
├── styles.css       # The CSS file that contains the styles for the music player.
├── script.js        # The JavaScript file that contains the logic for the music player.
├── music/           # The directory containing the music files.
│   ├── Adekunle Gold - Mercy (Official Video).mp3
│   ├── Adekunle Gold - Okay.mp3
│   ├── Anthony Gonzalez, Gael García Bernal - Un Poco Loco (From Coco).mp3
│   ├── Ayra Starr - Rush (Official Music Video).mp3
│   └── ...
└── README.md        # Documentation for the project.

How It Works
1. index.html

The main HTML file that defines the structure of the music player, including the controls (play, pause, skip, volume) and the playlist.
2. styles.css

Contains the styles for the music player, including the layout, colors, and fonts. It ensures the player has a clean and responsive design.
3. script.js

Implements the functionality of the music player:

    Loads songs into the playlist.
    Handles play, pause, and skip functions.
    Manages volume control.
    Allows users to search for songs in the playlist.

4. music/

Contains the .mp3 files that are played by the music player. Each file is referenced in the script.js file's songs array.
Adding Songs

To add new songs to the music player:

    Place the .mp3 files in the music/ directory.
    Update the songs array in script.js with the new file paths and titles.

    Future Enhancements

    Saving Playlists: Implement functionality to save user playlists between sessions using localStorage.
    Backend Integration: Add backend support to manage user accounts and store playlists on a server.

Contributing

If you wish to contribute to this project, feel free to submit a pull request. For major changes, please open an issue to discuss what you would like to change.
License

This project is licensed under the MIT License - see the LICENSE file for details.
Acknowledgments

    Icons: The icons used in the music player are provided by various free icon resources.
    Inspiration: This project was inspired by the desire to create a simple and functional web-based music player.
