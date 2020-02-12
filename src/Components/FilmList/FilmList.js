import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import actions from "../../Redux/actions";

import FilmCard from "../FilmCard/FilmCard";
import Loading from "../Loading/Loading";
import "./FilmList.css";

const FilmList = () => {
  const dispatch = useDispatch();
  const movies = useSelector(state => state.movieReducer.results);

  useEffect(() => {
    try {
      dispatch(actions.movieActions.fetchNowPlayingMovies());
    } catch (error) {
      console.log(error);
    }
  }, []);

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
