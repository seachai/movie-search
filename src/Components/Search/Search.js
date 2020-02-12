import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import actions from "../../Redux/actions";

import "./Search.css";

const Search = () => {
  const [value, setValue] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {}, []);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchQuery(value);
    dispatch(actions.movieActions.fetchMoviesFromValue(searchQuery));
    setValue("");
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

export default Search;
