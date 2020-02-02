import React, { useState, useEffect, lazy, Suspense } from "react";
import axios from "axios";
import Hero from "../../Components/Hero/Hero";
import Search from "../../Components/Search/Search";
import Loading from "../../Components/Loading/Loading";

import "./HomePage.css";

const FilmList = lazy(() => import("../../Components/FilmList/FilmList"));

const HomePage = () => {
  const [movies, setMovies] = useState();
  const [searchQuery, setSearchQuery] = useState("Pokemon");
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState("");

  useEffect(() => {
    // fetchData();
    fetchTMDB();
  }, []);

  // const fetchData = async () => {
  //   const response = await fetch(
  //     `https://www.omdbapi.com/?&apikey=9fe4ab07&s=${searchQuery}`
  //   );

  //   const results = await response.json();
  //   setMovies(results);
  // };

  const fetchTMDB = async () => {
    const apiUrl = `https://api.themoviedb.org/3/search/multi`;
    const apiKey = "ec7cf9725335473ff9bc286b6f5045a5";
    const response = await axios({
      url: apiUrl,
      method: "GET",
      responseType: "json",
      params: {
        api_key: apiKey,
        language: "en-US",
        query: searchQuery
      }
    });
    setMovies(response.data.results);
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
    <Suspense fallback={<Loading />}>
      <Hero />
      <section className="homepage">
        <Search onChange={handleChange} value={value} onSubmit={handleSubmit} />
        <FilmList movies={movies} />
      </section>
    </Suspense>
  );
};

export default HomePage;
