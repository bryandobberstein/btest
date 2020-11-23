import React, {useContext} from 'react'
import MovieContext from '../context/movieContext'
import MovieDisplay from './MovieDisplay'

function MovieList() {
    const movieContext = useContext(MovieContext)
    const {movies} = movieContext
    return (
        <div>
            {movies.map( movie => (
                <MovieDisplay key={movie.id} movie={movie} />
            ))}
        </div>
    )
}

export default MovieList

