import React from 'react';
import '../styles/Footer.css';
import logo from '../assets/icons/Logo.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <img src={logo} alt="SIEIA Logo" className="footer-logo" />
          <p className="footer-tagline">Be The First To Know</p>
          <div className="footer-subscribe">
            <input type="email" placeholder="Email" />
            <button>Subscribe</button>
          </div>
        </div>
        <div className="footer-right">
          <div className="footer-links-column">
            <h4>Company</h4>
            <a href="/about">About Us</a>
            <a href="/research">Research</a>
            <a href="/careers">Careers</a>
            <a href="/contact">Contact</a>
          </div>
          <div className="footer-links-column">
            <h4>Services</h4>
            <a href="/data-analysis">Data Analysis</a>
            <a href="/impact-evaluation">Impact Evaluation</a>
            <a href="/policy-research">Policy Research</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 SIEIA. All rights reserved.</p>
        <div className="footer-social-links">
          {/* FIX: Replaced '#' with actual URLs */}
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;