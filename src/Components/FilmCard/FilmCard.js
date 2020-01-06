import React from "react";
import { Link } from "react-router-dom";
import "./FilmCard.css";

const FilmCard = ({ title, year, poster }) => {
  return (
    <div className="film-card">
      <img src={poster} alt={title} />
      <div className="film-details">
        <h5>{title}</h5>
        <p>{year}</p>
        <Link to={title}>More Info</Link>
      </div>
    </div>
  );
};

export default FilmCard;
