import React, {useReducer} from 'react'
import axios from 'axios'
import MovieContext from './movieContext'
import MovieReducer from './MovieReducer'
import {
    SEARCH_TITLES
 } from './types'

const MovieState = props => {
    const initialState = {
    movies: [],
    movie: {}
}
    const [state, dispatch] = useReducer(MovieReducer, initialState)

    const searchTitles = async text => {
    const res = await axios.get(`http://localhost:5000/search?q=${text}`)
    dispatch({
        type: SEARCH_TITLES,
        payload: res.data.items
    })
  }


    return <MovieContext.Provider 
        value={{
            movies: state.movies,
            movie: state.movie,
            searchTitles
        }}
    >
        {props.children}
    </MovieContext.Provider>
}

export default MovieState
