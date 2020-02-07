import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import actions from "../../Redux/actions";

import FilmCard from "../FilmCard/FilmCard";
import Loading from "../Loading/Loading";
import "./FilmList.css";

const FilmList = () => {
  const { movieList } = useSelector((state) => ({
    movieList: state.movieList
  }));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.movieActions.getMovies);
  }, []);
  return (
    <div className="film-container">
      {/* {movies ? (
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
      )} */}
    </div>
  );
};

export default FilmList;
