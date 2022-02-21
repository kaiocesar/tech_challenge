const json_file = require('../songData.json');
const fs = require('fs');
const get_songs_list = () => {
    const data = json_file.map(
        ({song, artist, songReleaseDate, playCount, ...rest}) =>
            ({song, artist, songReleaseDate, playCount}));
    return data
}

exports.get_songs_list = get_songs_list;