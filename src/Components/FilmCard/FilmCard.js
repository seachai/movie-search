import React from "react";
import { Link } from "react-router-dom";
import "./FilmCard.css";

const FilmCard = ({ title, poster }) => {
  return (
    <div className="film-card">
      <img src={poster} alt={title} />
      <div className="film-details">
        <Link to={`filmdetails/${title}`} className="ticket-button">
          View More
        </Link>
      </div>
    </div>
  );
};

export default FilmCard;
