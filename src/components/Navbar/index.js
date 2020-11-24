import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./style.css";
import image from "../../assets/SKlogo.png";

function Navbar() {
  const [active, setActive] = useState(1);
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-light sticky-top align-items-right">
      <img className="logo" src={image} alt="logo" />

      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink
            to="/"
            onClick={() => setActive(1)}
            className={active === 1 ? "nav-link active1" : "nav-link"}
          >
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/about"
            onClick={() => setActive(2)}
            className={active === 2 ? "nav-link active1" : "nav-link"}
          >
            About
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/contact"
            onClick={() => setActive(3)}
            className={active === 3 ? "nav-link active1" : "nav-link"}
          >
            Contact
          </NavLink>
        </li>
        <li className="nav-item">
          <a
            className={active === 3 ? "nav-link active1" : "nav-link"}
            href="https://skrantz.com"
          >
            Photo
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
