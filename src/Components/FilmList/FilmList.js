import React from "react";
import { useSelector } from "react-redux";

import FilmListCard from "./FilmListCard";
import Loading from "../Loading/Loading";
import "./FilmList.scss";

// From HomePage
const FilmList = () => {
  const movies = useSelector(state => state.movieReducer.results);

  return (
    <div className="film-container">
      {movies ? (
        movies.map(data => (
          <FilmListCard
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
