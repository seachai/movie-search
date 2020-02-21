import React from "react";
import { Link } from "react-router-dom";
import DefaultMoviePoster from "../../Images/poster.png";
import "./FilmListCard.scss";

const FilmListCard = ({ title, poster, id, rating }) => {
  return (
    <div className="film-list-card">
      <div className="film-list-card__rating">
        <span>{rating}</span>
      </div>
      <Link to={`film-details/${id}`}>
        <img
          className="film-list-card__poster"
          src={
            poster !== null
              ? `https://image.tmdb.org/t/p/original${poster}`
              : `${DefaultMoviePoster}`
          }
          loading="lazy"
          alt={title}
        />
      </Link>
      <div className="film-list-card__details">
        <h1>{title}</h1>
      </div>
    </div>
  );
};

export default FilmListCard;
