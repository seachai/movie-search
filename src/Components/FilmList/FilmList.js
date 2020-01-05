import React from "react";
import uuid from "uuid";
import FilmCard from "../FilmCard/FilmCard";
import Loading from "../Loading/Loading";
import "./FilmList.css";

const FilmList = ({ movies }) => {
  console.log(movies);

  return (
    <div className="film-container">
      {movies !== undefined ? (
        movies.Search.map(data => (
          <FilmCard
            title={data.Title}
            year={data.Year}
            poster={data.Poster}
            key={uuid()}
          />
        ))
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default FilmList;
