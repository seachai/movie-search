import React from "react";
import "./SideBar.css";

const SideBar = () => {
  return (
    <div class="sidenav">
      <a href="#about">Trending</a>
      <a href="#services">New Releases</a>
      <a href="#clients">Favorites</a>
      <a href="#contact">Watch Later</a>
    </div>
  );
};

export default SideBar;
