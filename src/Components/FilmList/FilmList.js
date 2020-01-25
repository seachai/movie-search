import React from "react";
import uuid from "uuid";
import FilmCard from "../FilmCard/FilmCard";
import Loading from "../Loading/Loading";
import "./FilmList.css";

const FilmList = ({ movies }) => {
  let movieData = movies;

  console.log(movieData);

  return (
    <div className="film-container">
      {movieData ? (
        movieData.Search.map((data) => (
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
