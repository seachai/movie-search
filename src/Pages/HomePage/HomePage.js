import React, { lazy, Suspense } from "react";

import SideBar from "../../Components/SideBar/SideBar";
import Search from "../../Components/Search/Search";
import Loading from "../../Components/Loading/Loading";

import "./HomePage.scss";

const FilmList = lazy(() => import("../../Components/FilmList/FilmList"));

// Add a slow transition to FilmList component

const HomePage = () => {
  return (
    <Suspense fallback={<Loading />}>
      <SideBar />
      <section className="homepage">
        <Search />
        <FilmList />
      </section>
    </Suspense>
  );
};

export default HomePage;
