import React, { useState } from "react";
import "./Search.css";

import { connect } from "react-redux";
import { findMovie } from "../../Redux/getMovies";

const Search = () => {
  const [value, setValue] = useState("");

  const handleChange = e => {
    setValue(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    findMovie(value);
    setValue("");
    console.log(findMovie);
  };

  return (
    <div className="search__container">
      <form onSubmit={handleSubmit}>
        <p className="search__title">Go ahead, find that perfect movie.</p>
        <input
          className="search__input"
          type="text"
          placeholder="Search"
          value={value}
          onChange={handleChange}
        />
      </form>
    </div>
  );
};

export default connect(null, { findMovie })(Search);
