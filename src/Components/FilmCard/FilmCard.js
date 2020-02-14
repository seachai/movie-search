import React from "react";
import { Link } from "react-router-dom";
import DefaultMoviePoster from "../../Images/poster.png";
import "./FilmCard.scss";

// From FilmList
const FilmCard = ({ title, poster, id, rating }) => {
  return (
    <div className="film-card">
      <div className="film-card__rating">
        <span>{rating}</span>
      </div>
      <Link to={`film-details/${id}`}>
        <img
          className="film-card__poster"
          src={
            poster !== null
              ? `https://image.tmdb.org/t/p/original${poster}`
              : `${DefaultMoviePoster}`
          }
          loading="lazy"
          alt={title}
        />
      </Link>
      <div className="film-card__details">
        <h1>{title}</h1>
      </div>
    </div>
  );
};

export default FilmCard;
