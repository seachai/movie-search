import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./FilmPage.css";

const FilmPage = (id) => {
  const [movie, setMovie] = useState("");
  let movieId = id.match.params.film;

  let movieGenres = { ...movie };
  console.log(movieGenres);
  useEffect(() => {
    try {
      fetchTMDB();
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  const fetchTMDB = async () => {
    const apiUrl = `https://api.themoviedb.org/3/movie/${movieId}`;
    const apiKey = "ec7cf9725335473ff9bc286b6f5045a5";
    const response = await axios({
      url: apiUrl,
      method: "GET",
      responseType: "json",
      params: {
        api_key: apiKey
      }
    });
    setMovie(response.data);
  };

  return (
    <div className="film--page">
      <div className="film--page_title">
        <img
          src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
          alt={movie.orignal_title}
        />
        <h1>
          {movie.original_title} ( {movie.release_date} )
        </h1>
      </div>

      <div className="film--page_subtitle">
        <p>
          {movie.vote_average} / 10 from {movie.vote_count} votes
        </p>
        <p>Runtime: {movie.runtime}</p>
        {/* {movie.map((genre) => (
          <p>{genre.name}</p>
        ))} */}

        <p>Release Date: {movie.release_date} ()</p>
        <p>
          Homepage: <a href={movie.homepage}>{movie.orignal_title}</a>
        </p>
      </div>
      <div className="film--page_body">
        <p>Director: {movie.Director}</p>
        <p>Plot: {movie.overview}</p>
      </div>
      <Link to="/main" className="film--page_button">
        Go back
      </Link>
    </div>
  );
};

export default FilmPage;
