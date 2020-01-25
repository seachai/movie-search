import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./FilmPage.css";

const FilmPage = (filmTitle) => {
  const [movie, setMovie] = useState("");
  let movieTitle = filmTitle.match.params.film;

  useEffect(() => {
    try {
      fetchMovie();
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  const fetchMovie = () => {
    const apiURL = `https://www.omdbapi.com/?apikey=9fe4ab07&t=${movieTitle}&plot=full`;
    const movieSearchResults = async () => {
      const data = await fetch(apiURL);
      const dataIntoJson = await data.json();
      let results = await dataIntoJson;
      setMovie(results);
    };
    movieSearchResults();
  };

  return (
    <div className="film--page">
      <div className="film--page_title">
        <img src={movie.Poster} alt={movie.imdbID} />
        <h1>
          {movie.Title} ( {movie.Year} )
        </h1>
      </div>

      <div className="film--page_subtitle">
        <p>{movie.Rated}</p>
        <p>{movie.Runtime}</p>
        <p>{movie.Genre}</p>
        <p>
          {movie.Released} ( {movie.Country} )
        </p>
      </div>
      <div className="film--page_body">
        <p>Director: {movie.Director}</p>
        <p>Plot: {movie.Plot}</p>
        <Link to="/">Go back</Link>
      </div>
    </div>
  );
};

export default FilmPage;
