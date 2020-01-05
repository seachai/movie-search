import React, { useState, useEffect } from "react";
import "./FilmCard.css";

const FilmModal = () => {
  return (
    <div className="film-modal">
      <h5>Title</h5>
      <p>Description</p>
    </div>
  );
};

const FilmCard = ({ title, year, poster }) => {
  const [movieSearch, setMovieSearch] = useState("");

  useEffect(() => {
    async function fetchData() {
      const results = await fetch(
        // `https://www.omdbapi.com/?&apikey=9fe4ab07&s=${}`
        `https://www.omdbapi.com/?apikey=9fe4ab07&t=${movieSearch}&plot=full`
      )
        .then(res => res.json())
        .then(res => res);
      setMovieSearch(results);
    }
    fetchData();
  }, []);
  return (
    <div className="film-card">
      <img src={poster} alt={title} />
      <div className="film-details">
        <h5>{title}</h5>
        <p>{year}</p>
        <button onClick={() => console.log(title)}>More Info</button>
      </div>
    </div>
  );
};

export default FilmCard;
