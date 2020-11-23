import {
    SEARCH_TITLES
 } from './types'

 const MovieReducer = (state, action) => {
    if (action.type === SEARCH_TITLES){
        return {
            ...state,
            movies: state.payload
        }
    }
    else {
        return state
    }
 }
 export default MovieReducer;