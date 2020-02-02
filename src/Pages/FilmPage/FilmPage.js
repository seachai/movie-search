import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./FilmPage.css";

const FilmPage = (filmTitle) => {
  const [movie, setMovie] = useState("");
  let movieTitle = filmTitle.match.params.film;

  useEffect(() => {
    try {
      // fetchMovie();
      fetchTMDB();
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  // const fetchMovie = () => {
  //   const apiURL = `https://www.omdbapi.com/?apikey=9fe4ab07&t=${movieTitle}&plot=full`;
  //   const movieSearchResults = async () => {
  //     const data = await fetch(apiURL);
  //     const dataIntoJson = await data.json();
  //     let results = await dataIntoJson;
  //     setMovie(results);
  //   };
  //   movieSearchResults();
  // };

  const fetchTMDB = async () => {
    const apiUrl = `https://api.themoviedb.org/3/search/`;
    const apiKey = "ec7cf9725335473ff9bc286b6f5045a5";
    const response = await axios({
      url: apiUrl,
      method: "GET",
      responseType: "json",
      params: {
        api_key: apiKey,
        language: "en-US",
        query: movieTitle
      }
    });
    setMovie(response);
    console.log(movie);
  };

  return (
    <div className="film--page">
      {/* <div className="film--page_title">
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
      </div> */}
      <Link to="/main" className="film--page_button">
        Go back
      </Link>
    </div>
  );
};

export default FilmPage;
