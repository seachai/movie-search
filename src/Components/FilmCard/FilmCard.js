import React from "react";
import { Link } from "react-router-dom";
import "./FilmCard.css";

const FilmCard = ({ title, poster }) => {
  return (
    <div className="film-card">
      <img src={poster} alt={title} />
      <div className="film-details">
        <Link to={title} className="ticket-button">
          Tickets Available
        </Link>
      </div>
    </div>
  );
};

export default FilmCard;
