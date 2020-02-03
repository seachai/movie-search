import React, { useState, useEffect, lazy, Suspense } from "react";
import axios from "axios";
import { connect } from "react-redux";

import SideBar from "../../Components/SideBar/SideBar";
import Hero from "../../Components/Hero/Hero";
import Search from "../../Components/Search/Search";
import Loading from "../../Components/Loading/Loading";

import "./HomePage.scss";

const FilmList = lazy(() => import("../../Components/FilmList/FilmList"));

const HomePage = () => {
  return (
    <Suspense fallback={<Loading />}>
      {/* <Hero /> */}
      <SideBar />
      <section className="homepage">
        <Search />
        <h1 className="homepage__title">Now Playing</h1>
        <FilmList />
      </section>
    </Suspense>
  );
};

export default HomePage;
