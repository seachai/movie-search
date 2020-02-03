import React, { useState, useEffect, lazy, Suspense } from "react";
import axios from "axios";

import SideBar from "../../Components/SideBar/SideBar";
import TopBar from "../../Components/TopBar/TopBar";
import Hero from "../../Components/Hero/Hero";
import Search from "../../Components/Search/Search";
import Loading from "../../Components/Loading/Loading";

import "./HomePage.css";

const FilmList = lazy(() => import("../../Components/FilmList/FilmList"));

const HomePage = () => {
  const [movies, setMovies] = useState();
  const [searchQuery, setSearchQuery] = useState("");
  const [value, setValue] = useState("");

  useEffect(() => {
    fetchTMDB();
  }, [searchQuery]);

  const fetchTMDB = async () => {
    // https://api.themoviedb.org/3/movie/upcoming?api_key=ec7cf9725335473ff9bc286b6f5045a5&language=en-US&page=1
    const apiUrl = `https://api.themoviedb.org/3/movie/now_playing`;
    // const apiUrl = `https://api.themoviedb.org/3/movie/upcoming`;
    // const apiUrl = `https://api.themoviedb.org/3/trending/all/week`;
    // const apiUrl = `https://api.themoviedb.org/3/search/multi`;
    const apiKey = "ec7cf9725335473ff9bc286b6f5045a5";
    const response = await axios({
      url: apiUrl,
      method: "GET",
      responseType: "json",
      params: {
        api_key: apiKey,
        language: "en-US"
        // query: searchQuery
      }
    });
    setMovies(response.data.results);
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchQuery(value);
    setValue("");
  };

  return (
    <Suspense fallback={<Loading />}>
      {/* <Hero /> */}
      <TopBar />
      <SideBar />
      <section className="homepage">
        {/* <Search onChange={handleChange} value={value} onSubmit={handleSubmit} /> */}
        <h1 className="homepage-title">Trending</h1>
        <FilmList movies={movies} />
      </section>
    </Suspense>
  );
};

export default HomePage;
