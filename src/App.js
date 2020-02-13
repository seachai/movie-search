import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import HomePage from "./Pages/HomePage/HomePage";
import FilmPage from "./Pages/FilmPage/FilmPage";

import "./App.css";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/film-details/:film" component={FilmPage} />
      </Switch>
    </Router>
  );
};

export default App;
