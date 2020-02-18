import React from "react";
import "./FilmDetails.scss";

const FilmDetails = ({ movie }) => {
  const imageUrl = `https://image.tmdb.org/t/p/original${movie.poster_path}`;
  return (
    <div className="film-page">
      <div className="film-page__container">
        <div className="film-page__title">
          <img src={imageUrl} alt={movie.title} />
          <h1>{movie.title}</h1>
        </div>
        <div className="fiml-page__subtitle">
          <p>
            {movie.vote_average} / 10 from {movie.vote_count} votes
          </p>
          <p>Runtime: {movie.runtime}</p>

          <p>Release Date: {movie.release_date} ()</p>
        </div>
        <div className="fiml-page__body">
          <p>Plot: {movie.overview}</p>
        </div>
      </div>
    </div>
  );
};

export default FilmDetails;
