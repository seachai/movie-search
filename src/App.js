import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import HomePage from "./Pages/HomePage/HomePage";
import FilmPage from "./Pages/FilmPage/FilmPage";
// import LandingPage from "./Pages/LandingPage/LandingPage";
// import Login from "./Components/Login/Login";
// import SignUp from "./Components/SignUp/SignUp";

function App() {
  return (
    <Switch>
      {/* <Route exact path="/" component={LandingPage} /> */}
      <Route exact path="/" component={HomePage} />
      <Route path="/film-details/:film" component={FilmPage} />
      {/* <Route path="/login" component={Login} />
      <Route path="/register" component={SignUp} />
      <Route component={LandingPage} /> */}
    </Switch>
  );
}

export default App;
