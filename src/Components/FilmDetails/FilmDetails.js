import React from "react";
import { useHistory } from "react-router-dom";

const FilmDetails = ({ movie }) => {
  const history = useHistory();

  const handlePreviousLocation = () => {
    return history.length !== 0 ? history.goBack() : null;
  };
  return (
    <div className="film-page">
      <div className="film-page__container">
        <div className="film-page__title">
          <img
            src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            alt={movie.orignal_title}
          />
          <h1>
            {movie.original_title} ( {movie.release_date} )
          </h1>
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
        <button
          onClick={() => handlePreviousLocation}
          className="fiml-page__button"
        >
          Go back
        </button>
      </div>
    </div>
  );
};

export default FilmDetails;
