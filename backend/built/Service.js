"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const get_songs_list = () => {
    const json_file = require('../songData.json');
    const data = json_file.map(({ song, artist, songReleaseDate, playCount }) => ({ song, artist, songReleaseDate, playCount }));
    return data;
};
exports.default = get_songs_list;
