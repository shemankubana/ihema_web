import React from "react";
import "../styles/Footer.css";
import logo from "../assets/images/logo.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <img src={logo} alt="IHEMA Logo" className="footer-logo" />
        </div>
        <div className="footer-form">
          <div>
            <p className="footer-tagline">Be The First To Know</p>
            <p className="footer-pline">
              We’ll send you only what matters — no noise, no spam.
            </p>
          </div>
          <div className="footer-subscribe">
            <input type="email" placeholder="Email" />
            <button>OK</button>
          </div>
        </div>
        <div className="footer-right">
          <div className="footer-links-column-container">
            <div className="footer-links-column">
              <p>Information</p>
              <div className="footer-address">
                <a href="/about">About Us</a>
                <a href="/about">Services</a>
                <a href="/about">Approach</a>
                <a href="/research">Research</a>
                <a href="/careers">FAQs</a>
                <a href="/contact">Contact</a>
              </div>
            </div>
            <div className="footer-links-column">
              <p>Contact</p>
              <div className="footer-address">
                <a href="/about">info@ihema.rw</a>
              </div>
            </div>
          </div>
          <div className="footer-links-column">
            <p>Social Media</p>
            <div className="footer-address">
              <a href="/about">Instagram</a>
              <a href="/about">LinkedIn</a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025. iHEMA. All Rights Reserved.</p>
        <div className="footer-social-links">
          <a href="/about">Privacy Policy</a>
          <a href="/about" className="epique">Website by: EpiqueAI</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
