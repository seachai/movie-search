import React, { lazy, Suspense } from "react";

import NavigationBar from "../../Components/NavigationBar/NavigationBar";
import Search from "../../Components/Search/Search";
import Loading from "../../Components/Loading/Loading";

import "./HomePage.scss";
import FilmListTitle from "../../Components/FilmListTitle/FilmListTitle";
import { setTitle } from "./setTitle";

const FilmList = lazy(() => import("../../Components/FilmList/FilmList"));

// Add a slow transition to FilmList component

const HomePage = props => {
  const currentLocation = props.history.location.pathname;

  return (
    <Suspense fallback={<Loading />}>
      <NavigationBar />
      <section className="homepage">
        <button>Next</button>
        <Search />
        <FilmListTitle title={setTitle(currentLocation)} />
        <FilmList />
      </section>
    </Suspense>
  );
};

export default HomePage;
