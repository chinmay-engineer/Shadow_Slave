import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

import icon from "../../assets/icon.jpg";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="navbar-logo">
        <img src={icon} alt="Shadow Slave Logo" />
      </div>

      <div className="navbar-links">

        <Link to="/">
          <span>Home</span>
        </Link>

        <Link to="/characters">
          <span>Characters</span>
        </Link>

        <Link to="/characterdetails">
          <span>Character Details</span>
        </Link>

        <Link to="/about">
          <span>About</span>
        </Link>

        <Link to="/logout">
          <span>Logout </span>
        </Link>

      </div>

    </nav>
  );
}

export default Navbar;