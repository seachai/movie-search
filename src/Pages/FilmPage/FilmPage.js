import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./FilmPage.css";

const FilmPage = filmTitle => {
  const [movie, setMovie] = useState("");
  let movieTitle = filmTitle.match.params.film;

  useEffect(() => {
    async function fetchData() {
      const results = await fetch(
        // `https://www.omdbapi.com/?&apikey=9fe4ab07&s=${}`
        `https://www.omdbapi.com/?apikey=9fe4ab07&t=${movieTitle}&plot=full`
      )
        .then(res => res.json())
        .then(res => res);
      setMovie(results);
    }
    fetchData();
  }, []);

  console.log(movie);

  return (
    <div className="film--page">
      <img src={movie.Poster} alt={movie.imdbID} />
      <h1>
        {movie.Title} ( {movie.Year} )
      </h1>
      <div className="film--page_details">
        <p>{movie.Rated}</p>
        <p>{movie.Runtime}</p>
        <p>{movie.Genre}</p>
        <p>
          {movie.Released} ( {movie.Country} )
        </p>
      </div>
      {/* <h4>Released date: {movie.Released}</h4> */}
      <p>Director: {movie.Director}</p>
      <p>Plot: {movie.Plot}</p>
      <Link to="">Go back</Link>
    </div>
  );
};

export default FilmPage;
