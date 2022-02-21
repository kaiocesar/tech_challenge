import fs from 'fs';

const get_songs_list = () => {
    const json_file = require('../songData.json');
    const data = json_file.map((
        {song, artist, songReleaseDate, playCount}: 
            {song: string, artist: string, songReleaseDate: string, playCount: string}) =>
            ({song, artist, songReleaseDate, playCount}));
    return data
}

export default get_songs_list;