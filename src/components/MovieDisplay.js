import React from 'react';

const MovieDisplay  = (movie) => {
    return (
        <div>
            <p><h3>Title</h3> movie.title</p>
            <p><h3>Year</h3>movie.year</p>
            <p><h3>Plot</h3>movie.plot</p>
        </div>
    )
}

export default MovieDisplay;