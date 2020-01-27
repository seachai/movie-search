import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import HomePage from "./Pages/HomePage/HomePage";
import FilmPage from "./Pages/FilmPage/FilmPage";
import LandingPage from "./Pages/LandingPage/LandingPage";
import Login from "./Components/Login/Login";
// import SignUp from "./Components/SignUp/SignUp";
import SignUpClass from "./Components/SignUp/SignUpClass";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route path="/main" component={HomePage} />
      <Route path="/filmdetails/:film" component={FilmPage} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={SignUpClass} />
      <Route component={LandingPage} />
    </Switch>
  );
}

export default App;
