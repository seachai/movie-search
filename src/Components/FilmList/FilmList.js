import React from "react";
import "./FilmList.css";
import FilmCard from "../FilmCard/FilmCard";

const FilmList = ({ movies }) => {
  console.log(movies);
  return (
    <div className="film-container">
      {movies.Search.map(data => (
        <FilmCard
          key={data.imdbID}
          title={data.Title}
          year={data.Year}
          poster={data.Poster}
        />
      ))}
    </div>
  );
};

export default FilmList;
