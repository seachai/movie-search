import React from "react";
import uuid from "uuid";
import "./FilmList.css";
import FilmCard from "../FilmCard/FilmCard";

const FilmList = ({ movies }) => {
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
        <div>Loading movies...</div>
      )}
    </div>
  );
};

export default FilmList;
