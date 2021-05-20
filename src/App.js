import React, { useEffect, useState } from 'react';
import './App.css';
import Movie from './components/Movie';
require('dotenv').config();

const apiKey = process.env.REACT_APP_API_KEY;

const basicCall = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`

const apiSearch = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=`


function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    getMovies(basicCall);
  }, [])

  const getMovies = (API) => {
    fetch(API)
      .then(res => res.json())
      .then((data) => {
        setMovies(data.results);
      });
  }

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (searchTerm) {
      getMovies(apiSearch + searchTerm);
        };
      setSearchTerm("")
    }



  const handleOnChange = (e) => {
    setSearchTerm(e.target.value);
  }

  return (
    <>
      <header>
        <form onSubmit={handleOnSubmit}>
          <input
            className="search"
            type="search"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleOnChange}
          />
        </form>
      </header>
      <div className="movie-container">
        {movies.length > 0 && movies.map((movie) =>
          <Movie key={movie.id} {...movie} />
        )}
      </div>
    </>
  )
}



export default App;
