import React from "react";
import { Link } from "react-router-dom";
import Hero from "../../Components/Hero/Hero";
import NavBar from "../../Components/NavBar/NavBar";
import "./LandingPage.css";

import LandingImage from "../../Images/film.svg";

const LandingPage = () => {
  return (
    <section className="landing-page">
      {/* <Hero image={"landing"} /> */}
      <NavBar />
      <div className="landing-details">
        <div className="landing-info animated fadeInLeft">
          <h1 className="title">
            Cinema
            <br />
            Chai
            <span role="img" aria-label="tea">
              🍵
            </span>
          </h1>
          <Link to="/main" className="button">
            About
          </Link>
        </div>
        <div className="landing-image-container animated fadeInRight">
          <img
            className="landing-image"
            src={LandingImage}
            alt="landing page film"
          ></img>
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
