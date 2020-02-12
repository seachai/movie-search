import React, { useState } from "react";
import { useDispatch } from "react-redux";
import actions from "../../Redux/actions";

import "./Search.scss";

const Search = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const handleChange = e => {
    setValue(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(actions.movieActions.fetchMoviesFromValue(value));
    setValue("");
  };

  return (
    <div className="search__container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="search__input"
          placeholder="Go ahead, find that perfect movie"
          value={value}
          onChange={handleChange}
        />
      </form>
    </div>
  );
};

export default Search;
