import React, { useEffect, useState } from 'react';
import './App.css';
import Movie from './components/Movie';
require('dotenv').config();

const apiKey = process.env.REACT_APP_API_KEY;

const basicCall = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.asc&include_adult=false&include_video=false&page=1`

const apiSearch = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=Alien`

const imageCall = 'https://image.tmdb.org/t/p/w500/kqjL17yufvn9OVLyXYpvtyrFfak.jpg'



function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(basicCall)
    .then(res => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data.results);
      });
  }, [])

  return (
    <div>
      {movies.length > 0 && movies.map((movie) => 
        <Movie key={movie.id} data={movie}/>
      )}
    </div>
  )
}

export default App;
