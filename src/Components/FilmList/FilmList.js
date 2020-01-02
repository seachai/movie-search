import React from "react";
import "./FilmList.css";
import FilmCard from "../FilmCard/FilmCard";

const FilmList = ({ movies }) => {
  return (
    <div className="film-container">
      {movies !== undefined ? (
        movies.Search.map(data => (
          <FilmCard
            key={data.imdbID}
            title={data.Title}
            year={data.Year}
            poster={data.Poster}
          />
        ))
      ) : (
        <div>Loading movies...</div>
      )}
    </div>
  );
};

export default FilmList;
