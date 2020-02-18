import React, { useState, useEffect, Suspense, lazy } from "react";
import axios from "axios";
import NavigationBar from "../../Components/NavigationBar/NavigationBar";
import Loading from "../../Components/Loading/Loading";
import "./FilmPage.scss";

const FilmDetails = lazy(() =>
  import("../../Components/FilmDetails/FilmDetails")
);

const FilmPage = (id) => {
  const [movie, setMovie] = useState("");
  let movieId = id.match.params.film;
  console.log(movieId);
  console.log(id);

  useEffect(() => {
    try {
      fetchTMDB();
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  const fetchTMDB = async () => {
    const apiUrl = `https://api.themoviedb.org/3/movie/${movieId}`;
    const apiKey = "ec7cf9725335473ff9bc286b6f5045a5";
    const response = await axios({
      url: apiUrl,
      method: "GET",
      responseType: "json",
      params: {
        api_key: apiKey
      }
    });
    setMovie(response.data);
  };

  return (
    <>
      <NavigationBar />
      <Suspense fallback={<Loading />}>
        <FilmDetails movie={movie} />
      </Suspense>
    </>
  );
};

export default FilmPage;
