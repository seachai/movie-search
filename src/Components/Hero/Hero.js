import React from "react";
import "./Hero.css";

const Hero = ({ image }) => {
  return <section className={`hero-image ${image}`} loading="lazy"></section>;
};

export default Hero;
