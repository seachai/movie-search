import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import actions from "../../Redux/actions";
// import axios from "axios";

import FilmCard from "../FilmCard/FilmCard";
import Loading from "../Loading/Loading";
import "./FilmList.css";

const FilmList = () => {
  const [movies, setMovies] = useState([]);
  const dispatch = useDispatch();
  const state = useSelector(state => state.movieReducer.results);

  useEffect(() => {
    try {
      // getMovies();
      dispatch(actions.movieActions.fetchMoviesOnLoad());
      setMovies(state);
    } catch (error) {
      console.log(error);
    }
  }, []);

  // const getMovies = async () => {
  //   const apiUrl = `https://api.themoviedb.org/3/movie/now_playing`;
  //   const apiKey = "ec7cf9725335473ff9bc286b6f5045a5";
  //   const response = await axios({
  //     url: apiUrl,
  //     method: "GET",
  //     responseType: "json",
  //     params: {
  //       api_key: apiKey,
  //       language: "en-US"
  //     }
  //   });
  //   setMovies(response.data.results);
  // };

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

export default FilmList;
