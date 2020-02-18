import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { Routes } from "./Routes";

import HomePage from "./Pages/HomePage/HomePage";
import FilmPage from "./Pages/FilmPage/FilmPage";

import "./App.scss";

const App = () => {
  const { nowPlaying, upcoming, trending, search, filmDetails } = Routes;

  return (
    <Switch>
      <Route exact path="/">
        <Redirect from="/" to="/now-playing" />
      </Route>
      <Route
        exact
        path={nowPlaying}
        label={"Now Playing"}
        component={HomePage}
      />
      <Route
        exact
        path={upcoming}
        label={"Upcoming Movies"}
        component={HomePage}
      />
      <Route
        exact
        path={trending}
        label={"Trending Movies"}
        component={HomePage}
      />
      {/* <Route exact path={search} component={HomePage} /> */}
      <Route exact path={filmDetails} component={FilmPage} />
      <Route component={HomePage} />
    </Switch>
  );
};

export default App;
