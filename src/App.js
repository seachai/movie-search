import React from "react";
import { Route, Switch } from "react-router-dom";

import HomePage from "./Pages/HomePage/HomePage";
import FilmPage from "./Pages/FilmPage/FilmPage";

import "./App.css";

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/film-details/:film" component={FilmPage} />
    </Switch>
  );
};

export default App;
