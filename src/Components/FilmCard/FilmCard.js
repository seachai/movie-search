import React from "react";
import { Link } from "react-router-dom";
import "./FilmCard.css";

const FilmCard = ({ title, poster, id, rating }) => {
  return (
    <div className="film-card">
      <div className="film-rating">
        <span>{rating}</span>
      </div>
      <img
        src={`https://image.tmdb.org/t/p/original${poster}`}
        loading="lazy"
        alt={title}
      />
      <div className="film-details">
        <h1>{title}</h1>
        {/* <Link to={`film-details/${id}`} className="ticket-button">
          View More
        </Link> */}
      </div>
    </div>
  );
};

export default FilmCard;
