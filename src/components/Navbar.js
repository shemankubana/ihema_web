import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import '../styles/Navbar.css';
import logo from '../assets/icons/Logo.png';
import ellipse from '../assets/icons/Ellipse.png';
import arrow from '../assets/icons/arrow_icon.png';

const Navbar = () => {
  // State to manage whether the mobile navigation is open or not
  const [menuOpen, setMenuOpen] = useState(false);

  // Function to toggle the menu state
  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Function to close the menu (useful when a link is clicked)
  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo-link" onClick={closeMenu}>
        <img src={logo} alt="IHEMA Logo" className="navbar-logo" />
      </Link>

      {/* The right container holds the navigation and actions */}
      <div className="right-container">
        
        {/* Hamburger Menu Icon - visible only on mobile */}
        {/* The 'active' class is added conditionally for the 'X' animation */}
        <div 
          className={`hamburger-menu ${menuOpen ? 'active' : ''}`} 
          onClick={handleToggleMenu}
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>

        {/* Navigation Links */}
        {/* The 'active' class is added conditionally to show/hide the menu */}
        <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <NavLink to="/services" className="nav-link" onClick={closeMenu}>
            <span>Services</span>
            <img src={ellipse} className='ellipse' alt="" />
          </NavLink>
          <NavLink to="/approach" className="nav-link" onClick={closeMenu}>
            <span>Approach</span>
            <img src={ellipse} className='ellipse' alt="" />
          </NavLink>
          <NavLink to="/research" className="nav-link" onClick={closeMenu}>
            <span>Research</span>
            <img src={ellipse} className='ellipse' alt="" />
          </NavLink>
          <NavLink to="/faq" className="nav-link" onClick={closeMenu}>
            <span>FAQ</span>
            <img src={ellipse} className='ellipse' alt="" />
          </NavLink>
          <NavLink to="/contact" className="nav-link" onClick={closeMenu}>
            <span>Contact</span>
          </NavLink>
        </div>

        {/* Call-to-action button */}
        <Link to="/get-involved" className="nav-actions-link">
          <div className="nav-actions">
            <p>Get Involved</p>
            <img src={arrow} alt="" />
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;