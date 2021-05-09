import React from 'react';

const imageCall = 'https://image.tmdb.org/t/p/w500';


const Movie = ({ title, poster_path, overview, vote_average }) => 
    <div className='movie'>
    <img src={imageCall + poster_path} alt={title} />
    </div>

export default Movie;
