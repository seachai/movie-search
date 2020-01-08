import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import HomePage from "./Pages/HomePage/HomePage";
import FilmPage from "./Pages/FilmPage/FilmPage";
import LandingPage from "./Pages/LandingPage/LandingPage";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route path="/main" component={HomePage} />
      <Route path="/:film" component={FilmPage} />
      <Route component={LandingPage} />
    </Switch>
  );
}

export default App;
