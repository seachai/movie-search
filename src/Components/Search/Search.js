import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

import "./Search.css";

const Search = () => {
  // const dispatch = useDispatch(getMovies());
  const [value, setValue] = useState("");
  const [movies, setMovies] = useState([]);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    test();
    setValue("");
  };

  const test = async () => {
    const apiUrl = `https://api.themoviedb.org/3/search/movie`;
    const apiKey = "ec7cf9725335473ff9bc286b6f5045a5";
    const response = await axios({
      url: apiUrl,
      method: "GET",
      responseType: "json",
      params: {
        api_key: apiKey,
        query: value
      }
    });
    setMovies(response.data.results);
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
