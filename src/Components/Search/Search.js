import React from "react";
import "./Search.css";

const Search = ({ onChange }) => {
  return (
    <div className="search-height">
      <div className="search-container">
        <input
          id="search"
          type="search"
          placeholder="Search for movie"
          onChange={onChange}
          value=""
        ></input>
        <input type="submit"></input>
      </div>
    </div>
  );
};

export default Search;
