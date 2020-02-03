import React from "react";
import "./SideBar.scss";

const SideBar = () => {
  return (
    <div className="sidenav">
      <a href="#about">Trending</a>
      <a href="#services">New Releases</a>
      <a href="#clients">Favorites</a>
      <a href="#contact">Watch Later</a>
    </div>
  );
};

export default SideBar;
