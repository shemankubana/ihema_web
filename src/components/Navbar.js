import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import '../styles/Navbar.css';
import logo from '../assets/icons/Logo.png';
import ellipse from '../assets/icons/Ellipse.png';
import arrow from '../assets/icons/arrow_icon.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo-link">
        <img src={logo} alt="IHEMA Logo" className="navbar-logo" />
      </Link>

      <div className="right-container">
        <div className="nav-links">
          <NavLink to="/services" className="nav-link">
            <span>Services</span>
            <img src={ellipse} className='ellipse' alt="" />
          </NavLink>
          <NavLink to="/approach" className="nav-link">
            <span>Approach</span>
            <img src={ellipse} className='ellipse' alt="" />
          </NavLink>
          <NavLink to="/research" className="nav-link">
            <span>Research</span>
            <img src={ellipse} className='ellipse' alt="" />
          </NavLink>
          <NavLink to="/faq" className="nav-link">
            <span>FAQ</span>
            <img src={ellipse} className='ellipse' alt="" />
          </NavLink>
          <NavLink to="/contact" className="nav-link">
            <span>Contact</span>
          </NavLink>
        </div>

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