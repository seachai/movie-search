import React, { useState, useEffect } from "react";
import axios from "axios";
import SideBar from "../../Components/SideBar/SideBar";
import { Link } from "react-router-dom";
import "./FilmPage.scss";

const FilmPage = id => {
  const [movie, setMovie] = useState("");
  let movieId = id.match.params.film;

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
    <>
      <SideBar />
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
          <Link to="/" className="fiml-page__button">
            Go back
          </Link>
        </div>
      </div>
    </>
  );
};

export default FilmPage;
