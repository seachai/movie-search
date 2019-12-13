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
  }, []);

  const handleChange = e => {
    console.log(e.target.value);
  };

  // const onSearch = (e) => {
  //   e.preventDefault();

  //   console.log(e.target.value)
  // }

  if (movies === undefined) {
    return <Loading />;
  } else {
    return (
      <>
        <Hero />
        <div className="container">
          <Search onChange={handleChange} />
          <FilmList movies={movies} />
        </div>
      </>
    );
  }
};

export default HomePage;
