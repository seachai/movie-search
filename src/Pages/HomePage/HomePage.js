import React, { useState, useEffect, lazy, Suspense } from "react";
import Hero from "../../Components/Hero/Hero";
import Search from "../../Components/Search/Search";
import Loading from "../../Components/Loading/Loading";

import "./HomePage.css";

const FilmList = lazy(() => import("../../Components/FilmList/FilmList"));

const HomePage = () => {
  const [movies, setMovies] = useState();
  const [searchQuery, setSearchQuery] = useState("Star Wars");
  const [value, setValue] = useState("");

  useEffect(() => {
    fetchData();
  }, [searchQuery]);
  // useEffect(() => {
  //   fetchData();
  // }, [searchQuery]);

  const fetchData = async () => {
    const response = await fetch(
      `https://www.omdbapi.com/?&apikey=9fe4ab07&s=${searchQuery}`
    );

    const results = await response.json();
    setMovies(results);
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // let filteredValue = value.replace(/[^a-zA-Z0-9]/gi, "");
    setSearchQuery(value);
    setValue("");
  };

  return (
    <>
      <Suspense fallback={<Loading />}>
        <Hero />
        <section className="homepage">
          <Search
            onChange={handleChange}
            value={value}
            onSubmit={handleSubmit}
          />
          <FilmList movies={movies} />
        </section>
      </Suspense>
    </>
  );
};

export default HomePage;
