import React, { useState, useEffect, lazy, Suspense } from "react";
import Hero from "../../Components/Hero/Hero";
import Search from "../../Components/Search/Search";

import "./HomePage.css";

const FilmList = lazy(() => import("../../Components/FilmList/FilmList"));
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
    setSearchQuery(value.toLocaleLowerCase());
    setValue("");
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
          <Suspense fallback={<div>Loading...</div>}>
            <FilmList movies={movies} />
          </Suspense>
        </div>
      </>
    );
  }
};

export default HomePage;
