import React, { lazy, Suspense } from "react";

import NavigationBar from "../../Components/NavigationBar/NavigationBar";
import Search from "../../Components/Search/Search";
import Loading from "../../Components/Loading/Loading";

import "./HomePage.scss";
import FilmListTitle from "../../Components/FilmListTitle/FilmListTitle";

const FilmList = lazy(() => import("../../Components/FilmList/FilmList"));

// Add a slow transition to FilmList component

const HomePage = () => {
  return (
    <Suspense fallback={<Loading />}>
      <NavigationBar />
      <section className="homepage">
        <Search />
        <FilmListTitle title={"Hello World"} />
        <FilmList />
      </section>
    </Suspense>
  );
};

export default HomePage;
