import React, { useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import "../styles/Research1.css";
import "../styles/Navbar.css";
import logoWhite from "../assets/icons/Logo.png";
import logoBlack from "../assets/images/logo_black.svg";
import ellipse from "../assets/icons/Ellipse 4.svg";
import arrowWhite from "../assets/icons/arrow_icon.png";
import arrowBlack from "../assets/icons/arrow-blue.svg";
import arrowWhiteButton from "../assets/icons/Group 12.svg";
import headerborder from "../assets/images/bordder-line.svg";
import content from "../assets/images/Group 32.svg";


const Research1 = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const handleToggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="research-page">
      {/* Custom Navbar for Research Page */}
      <nav className="navbar light-theme">
        {/* Logo */}
        <Link to="/" className="navbar-logo-link" onClick={closeMenu}>
          <img src={logoBlack} alt="IHEMA Logo" className="navbar-logo" />
        </Link>

        <div className="right-container">
          {/* Hamburger menu */}
          <div
            className={`hamburger-menu ${menuOpen ? "active" : ""}`}
            onClick={handleToggleMenu}
          >
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>

          {/* Nav links */}
          <div className={`nav-links ${menuOpen ? "active" : ""}`}>
            {["services", "approach", "research", "faq", "contact"].map(
              (path) => (
                <NavLink
                  key={path}
                  to={`/${path}`}
                  className="nav-link"
                  onClick={closeMenu}
                >
                  <span className="dark-text">
                    {path.charAt(0).toUpperCase() + path.slice(1)}
                  </span>
                  <img src={ellipse} className="ellipse" alt="" />
                </NavLink>
              )
            )}
          </div>

          {/* Get Involved button */}
          <Link to="/get-involved" className="nav-actions-link">
            <img
              src={arrowWhiteButton}
              alt="Get Involved Button"
              className="white_arrow"
            />
          </Link>
        </div>
      </nav>

      {/* Research Content */}
      <div className="Research1-container">
        <div className="research-heading-container">
          <img src={headerborder} alt="headerborder" className="headerborder" />
          <div>
            <div className="inner-research">
              <div>
                <p className="research-heading">
                  USDA McGovern-Dole Grant: Home Grown School{" "}
                </p>
                <p className="research-heading">
                  Feeding Program - Phase II Endline & Phase III Baseline
                </p>
              </div>
              <p className="date">April - August 2025</p>
              <p className="partnership">
                Partnership: IHEMA Research Team & Tango International
              </p>
            </div>
          </div>
        </div>
        <div className="content-container">
            <div className="content-pointers">
                <img src={content} alt="contentpointer" className="content-pointer"/>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Research1;
