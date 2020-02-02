import React from "react";
import FilmCard from "../FilmCard/FilmCard";
import Loading from "../Loading/Loading";
import "./FilmList.css";

const FilmList = ({ movies }) => {
  let movieData = movies;
  return (
    <div className="film-container">
      {movieData ? (
        movieData.map((data) => (
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
