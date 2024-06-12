import React, { useState } from "react";
import menu from "../Images & Styles/images/3dots.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isDropdown, setIsDropdown] = useState(false);

  const toggleDropdown = () => {
    setIsDropdown(!isDropdown);
  };
  return (
    <div className="nav-section">
      <div className="nav-container">
        <div className="nav-logo">David Ohimai Portfolio</div>

        <img
          src={menu}
          className="hamburger-menu"
          id="dropdownClick"
          onClick={toggleDropdown}
          alt="Menu"
        />
        <ul className={isDropdown ? "visible" : "notVisible"}>
          <li>
            <Link to="/"className="active"> Home</Link>
          </li>
          <li>
            <Link to="/aboutme">About Me</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
