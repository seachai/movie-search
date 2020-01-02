import React, { useState, useEffect } from "react";
import FilmList from "../../Components/FilmList/FilmList";
import Hero from "../../Components/Hero/Hero";
import Search from "../../Components/Search/Search";

import "./HomePage.css";

const Loading = () => {
  return <div>Loading...</div>;
};

const HomePage = () => {
  const [movies, setMovies] = useState();
  const [searchQuery, setSearchQuery] = useState("frozen");
  const [value, setValue] = useState("");

  useEffect(() => {
    async function fetchData() {
      const results = await fetch(
        `http://www.omdbapi.com/?&apikey=9fe4ab07&s=${searchQuery}`
      )
        .then(res => res.json())
        .then(res => res);
      setMovies(results);
    }
    fetchData();
  }, [searchQuery]);

  const handleChange = e => {
    setValue(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSearchQuery(value);
  };

  if (movies === undefined) {
    return <Loading />;
  } else {
    return (
      <>
        <Hero />
        <div className="container">
          <Search
            onChange={handleChange}
            value={value}
            onSubmit={handleSubmit}
          />
          <FilmList movies={movies} />
        </div>
      </>
    );
  }
};

export default HomePage;
