import React from "react";
import "./Search.css";

const Search = ({ onChange, value, onSubmit }) => {
  return (
    <div className="search__container">
      <form onSubmit={onSubmit}>
        <p className="search__title">Go ahead, find that perfect movie.</p>
        <input
          className="search__input"
          type="text"
          placeholder="Search"
          value={value}
          onChange={onChange}
        />
      </form>
    </div>
  );
};

export default Search;
