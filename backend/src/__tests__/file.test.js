const json_file = require('../../songData.json');
const fs = require('fs');
const { get_songs_list } = require('../service');

test('reading json file', () => {
    const songs = get_songs_list();
    expect(songs[0]['song']).toBe('xmbrexa x');
})