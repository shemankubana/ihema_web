import React, { useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
// Using absolute path from 'src'
import 'styles/Navbar.css';

// --- Using absolute paths for all assets from 'src' ---
// Original assets for dark backgrounds
import logoWhite from 'assets/icons/Logo.png';
import ellipse from 'assets/icons/Ellipse.png';
import arrowWhite from 'assets/icons/arrow_icon.png';

// New assets for light backgrounds
import logoBlack from 'assets/images/Logo_black.png';
import arrowBlack from 'assets/icons/arrow_blue.svg';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const whiteBgPages = ['/education', '/health', '/society'];
  const isWhiteBgPage = whiteBgPages.includes(location.pathname.toLowerCase());

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const navbarClasses = `navbar ${isWhiteBgPage ? 'light-theme' : ''}`;

  return (
    <nav className={navbarClasses}>
      <Link to="/" className="navbar-logo-link" onClick={closeMenu}>
        <img
          src={isWhiteBgPage ? logoBlack : logoWhite}
          alt="IHEMA Logo"
          className="navbar-logo"
        />
      </Link>

      <div className="right-container">
        <div
          className={`hamburger-menu ${menuOpen ? 'active' : ''}`}
          onClick={handleToggleMenu}
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>

        <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <NavLink to="/services" className="nav-link" onClick={closeMenu}>
            <span>Services</span>
            <img src={ellipse} className="ellipse" alt="" />
          </NavLink>
          <NavLink to="/approach" className="nav-link" onClick={closeMenu}>
            <span>Approach</span>
            <img src={ellipse} className="ellipse" alt="" />
          </NavLink>
          <NavLink to="/research" className="nav-link" onClick={closeMenu}>
            <span>Research</span>
            <img src={ellipse} className="ellipse" alt="" />
          </NavLink>
          <NavLink to="/faq" className="nav-link" onClick={closeMenu}>
            <span>FAQ</span>
            <img src={ellipse} className="ellipse" alt="" />
          </NavLink>
          <NavLink to="/contact" className="nav-link" onClick={closeMenu}>
            <span>Contact</span>
          </NavLink>
        </div>

        <Link to="/get-involved" className="nav-actions-link">
          <div className="nav-actions">
            <p>Get Involved</p>
            <img
              src={isWhiteBgPage ? arrowBlack : arrowWhite}
              alt="Arrow Icon"
            />
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

