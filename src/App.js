import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

import HomePage from "./Pages/HomePage/HomePage";
import FilmPage from "./Pages/FilmPage/FilmPage";

import "./App.css";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Redirect from="/" to="/now-playing" />
        </Route>
        <Route exact path="/now-playing" component={HomePage} />
        <Route exact path="/upcoming" component={HomePage} />
        <Route exact path="/trending" component={HomePage} />
        <Route path="/search/:search" component={HomePage} />
        <Route exact path="/film-details/:film" component={FilmPage} />
        <Route component={HomePage} />
      </Switch>
    </Router>
  );
};

export default App;
