import React, {useState, useEffect} from 'react'
import './App.css';
import Search from './components/Search';
import MovieList from './components/MovieList'
import axios from 'axios'
import MovieState from './context/MovieState'


const App = () => {

  const [text, setText] = useState('');

  return (
    <MovieState>
    <div className="App">
      <Search />
      <MovieList />
    </div>
    </MovieState>
  );
}

export default App;
