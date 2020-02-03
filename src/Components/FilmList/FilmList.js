import React, { useState, useEffect } from "react";
import axios from "axios";
import { connect } from "react-redux";

import FilmCard from "../FilmCard/FilmCard";
import Loading from "../Loading/Loading";
import "./FilmList.css";

const FilmList = () => {
  const [movies, setMovies] = useState();

  useEffect(() => {
    fetchTMDB();
  }, []);

  const fetchTMDB = async () => {
    // https://api.themoviedb.org/3/movie/upcoming?api_key=ec7cf9725335473ff9bc286b6f5045a5&language=en-US&page=1
    const apiUrl = `https://api.themoviedb.org/3/movie/now_playing`;
    // const apiUrl = `https://api.themoviedb.org/3/movie/upcoming`;
    // const apiUrl = `https://api.themoviedb.org/3/trending/all/week`;
    // const apiUrl = `https://api.themoviedb.org/3/search/multi`;
    const apiKey = "ec7cf9725335473ff9bc286b6f5045a5";
    const response = await axios({
      url: apiUrl,
      method: "GET",
      responseType: "json",
      params: {
        api_key: apiKey,
        language: "en-US"
        // query: searchQuery
      }
    });
    setMovies(response.data.results);
  };
  console.log(movies);

  return (
    <div className="film-container">
      {movies ? (
        movies.map(data => (
          <FilmCard
            title={data.title ? data.title : data.original_name}
            poster={data.poster_path}
            key={data.id}
            id={data.id}
            rating={data.vote_average}
          />
        ))
      ) : (
        <Loading />
      )}
    </div>
  );
};

const mapStateToProps = ({ getMovies: { results, initial } }) => {
  return { results, initial };
};

export default connect(mapStateToProps)(FilmList);
