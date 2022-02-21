import React from 'react';
import { Link } from 'react-router-dom';

const songs = [
    {
      "song": "xmbrexa x",
      "artist": "RIHANNA",
      "songReleaseDate": "01/03/2013",
      "playCount": 8165,
      "metricA": 81,
      "metricB": 67,
      "metricC": 66,
      "metricD": 55,
      "metricE": 92,
      "metricF": 44,
      "metricG": 58,
      "metricH": 53,
      "metricI": 65,
      "metricJ": 77,
      "metricK": 36,
      "metricL": 59,
      "metricM": 20,
      "metricN": 42,
      "metricO": 1,
      "metricP": 58
    },
    {
      "song": "What's I b? x",
      "artist": "RIHANNA",
      "songReleaseDate": "01/10/900",
      "playCount": 3135,
      "metricA": 38,
      "metricB": 30,
      "metricC": 50,
      "metricD": 18,
      "metricE": 50,
      "metricF": 93,
      "metricG": 69,
      "metricH": 42,
      "metricI": 18,
      "metricJ": 94,
      "metricK": 17,
      "metricL": 23,
      "metricM": 37,
      "metricN": 17,
      "metricO": 41,
      "metricP": 87
    },
    {
      "song": "I100 Yox youd",
      "artist": "UPWIS LAPALDI",
      "songReleaseDate": "01/11/2000",
      "playCount": 2635,
      "metricA": 13,
      "metricB": 4,
      "metricC": 86,
      "metricD": 82,
      "metricE": 60,
      "metricF": 91,
      "metricG": 75,
      "metricH": 87,
      "metricI": 5,
      "metricJ": 67,
      "metricK": 14,
      "metricL": 55,
      "metricM": 22,
      "metricN": 76,
      "metricO": 67,
      "metricP": 20
    },
];

const Song = () => {
    return (
        <div>
            <h1>List of songs:</h1>
            <Link to='/'>Back to home</Link>
            <hr  /><br/>

            <div className="table-container" role="table" arial-label="Songs">
                <div className="flex-table header" role="rowgroup">
                    <div className="flex-row first" role="columnheader">Song</div>
                    <div className="flex-row" role="columnheader">Artist</div>
                    <div className="flex-row" role="columnheader">Release Date</div>
                    <div className="flex-row" role="columnheader">Played Count</div>
                </div>

                {songs.map(song => (
                    <div className="flex-table row" role="rowgroup" key={song.song}>
                        <div className="flex-box first" role="cell">{song.song}</div>
                        <div className="flex-box" role="cell">{song.artist}</div>
                        <div className="flex-box" role="cell">{song.songReleaseDate}</div>
                        <div className="flex-box" role="cell">{song.playCount}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Song;