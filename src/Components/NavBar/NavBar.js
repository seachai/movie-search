import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav>
      <ul className="nav-list animated fadeIn">
        <li>
          <Link to="/">Login</Link>
        </li>
        <li>
          <Link to="/">Register</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
