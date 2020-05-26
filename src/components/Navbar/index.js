import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <NavLink to="/" className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}>
        Home
      </NavLink>
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink
              to="/about"
              className={window.location.pathname === "/about" ? "nav-link active" : "nav-link"}
            >
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/contact"
              className={window.location.pathname === "/contact" ? "nav-link active" : "nav-link"}
              
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
