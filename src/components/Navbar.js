import React, { useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import '../styles/Navbar.css';
// Assets
import logoWhite from '../assets/icons/Logo.png';
import logoBlack from '../assets/images/logo_black.svg';
import ellipse from '../assets/icons/Ellipse 4.svg';
import arrowWhite from '../assets/icons/arrow_icon.png';
import arrowBlack from '../assets/icons/arrow-blue.svg';
import arrowWhiteButton from '../assets/icons/Group 12.svg';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // Only render navbar on home page
  if (location.pathname !== '/') {
    return null;
  }

  const handleToggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      {/* Logo */}
      <Link to="/" className="navbar-logo-link" onClick={closeMenu}>
        <img
          src={logoWhite}
          alt="IHEMA Logo"
          className="navbar-logo"
        />
      </Link>

      <div className="right-container">
        {/* Hamburger menu */}
        <div
          className={`hamburger-menu ${menuOpen ? 'active' : ''}`}
          onClick={handleToggleMenu}
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>

        {/* Nav links */}
        <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
          {['services', 'approach', 'research', 'faq', 'contact'].map((path) => (
            <NavLink
              key={path}
              to={`/${path}`}
              className="nav-link"
              onClick={closeMenu}
            >
              <span className="light-text">
                {path.charAt(0).toUpperCase() + path.slice(1)}
              </span>
              <img src={ellipse} className="ellipse" alt="" />
            </NavLink>
          ))}
        </div>

        {/* Get Involved button */}
        <Link to="/get-involved" className="nav-actions-link">
          <div className="nav-actions">
            <p>Get Involved</p>
            <img src={arrowWhite} alt="Arrow Icon" />
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;