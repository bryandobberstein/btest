import React, { useState, useContext } from 'react'
import MovieContext from '../context/movieContext'


const Search = (props) => {
    const movieContext = useContext(MovieContext)
    const [text, setText] = useState('');

    const onSubmit = e => {
        if (text === '') {
            return "Nothing entered"
        }
        else{           
            e.preventDefault();
            movieContext.searchTitles(text)
            setText('')
        }
    };

const onChange = e => {
    setText(e.target.value); 
};
    return (
        <div>
        <form onSubmit = {onSubmit}>
            <input 
            type = 'text'
            name = 'text'
            placeholder = "Search Movie Title..."
            value = {text}
            onChange = {onChange} />
            <input type="submit" value="Search" />
        </form>
        </div>
    )
};

export default Search;

