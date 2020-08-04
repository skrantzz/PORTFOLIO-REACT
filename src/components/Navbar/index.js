import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./style.css";

function Navbar() {
  const [active, setActive] = useState(1);
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-light sticky-top align-items-right"> 
  
    <h2 className='logo'>SYDNEY KRANTZ</h2>
  
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
      </ul>
    </nav>
  );
}

export default Navbar;
