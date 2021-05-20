import React from 'react';

const imageCall = 'https://image.tmdb.org/t/p/w500';

const setVoteClass = (vote) => {
    if (vote >= 8) {
        return "green";
    } else if (vote >= 6) {
        return "yellow";
    } else {
        return "red"
    }
}


const Movie = ({ title, poster_path, overview, vote_average, release_date }) =>
    <div className="movie">
        <img src={imageCall + poster_path} alt={title} />
        <div className="movie-info">
            <h4>{title}</h4>
            <span className={
                `tag ${setVoteClass(vote_average)}`
                }>
                {vote_average}
            </span>
        </div>

        <div className="release-date">
            <h6>Release Date: {release_date}</h6>
        </div>

        <div className="movie-overview">
            <h2>Overview</h2>
            <p>{overview}</p>
        </div>
    </div>

export default Movie;
