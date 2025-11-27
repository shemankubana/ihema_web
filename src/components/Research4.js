import React, { useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import "../styles/Research1.css";
import "../styles/Navbar.css";
import logoWhite from "../assets/icons/Logo.png";
import logoBlack from "../assets/images/logo_black.svg";
import ellipse from "../assets/icons/Ellipse 4.svg";
import arrowWhiteButton from "../assets/icons/Group 12.svg";
import headerborder from "../assets/images/bordder-line.svg";
import content from "../assets/images/content.svg";
import analytics from "../assets/images/Research1_analytics.svg";
import researchcardimage from "../assets/images/Rectangle 60.svg";
import fullreport from "../assets/images/full-report.svg";
import reasearchcardborder from "../assets/images/research-card-border.svg";

const Research4 = () => {
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
                        {[
                            { name: 'Services', path: '/#services' },
                            { name: 'Approach', path: '/#approach' },
                            { name: 'Research', path: '/#research' },
                            { name: 'FAQ', path: '/#faq' },
                            { name: 'Contact', path: '/#contact' },
                        ].map(
                            (item) => (
                                <Link
                                    key={item.name}
                                    to={item.path}
                                    className="nav-link"
                                    onClick={closeMenu}
                                >
                                    <span className="dark-text">
                                        {item.name}
                                    </span>
                                    <img src={ellipse} className="ellipse" alt="" />
                                </Link>
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
                                    USDA McGovern-Dole Grant: Home Grown School
                                </p>
                                <p className="research-heading">
                                    Feeding Program - Phase II Midterm Evaluation
                                </p>
                            </div>
                            <p className="date">July - December 2023</p>
                            <p className="partnership">
                                Partnership: IHEMA Research Team & USDA
                            </p>
                        </div>
                    </div>
                </div>
                <div className="content-container">
                    <p className="content-paragraph">
                        This midterm evaluation assessed the progress of the USDA McGovern-Dole Grant's Home Grown School Feeding Program (Phase II). The evaluation focused on the efficiency, effectiveness, and relevance of the program's interventions. Key findings indicated that the program was on track to meet its objectives, with significant improvements in school attendance and student nutrition. The evaluation also highlighted challenges related to supply chain management and recommended strategies for strengthening local procurement systems.
                    </p>
                    <img src={content} alt="content" className="content-image" />
                    <img src={analytics} alt="Analytics" className="analytics" />
                </div>
                <div className="research-card-container">
                    <img src={reasearchcardborder} alt="headerborder" className="research-card-border" />
                    <div className="outer-container">
                        <p className="more-assessments">More Assessments</p>
                        <div className="cards-container">
                            <div className="research-card">
                                <p className="research-card-paragraph">
                                    USDA McGovern-Dole Grant: Home Grown School Feeding Program -
                                    Phase II Endline & Phase III Baseline
                                </p>
                                <img
                                    src={researchcardimage}
                                    alt="research-card"
                                    className="research-card-image"
                                />
                                <Link to="/research/mcgovern-dole" className="read-more-link">
                                    <img
                                        src={fullreport}
                                        alt="full report"
                                        className="full-report"
                                    />
                                </Link>
                            </div>
                            <div className="research-card">
                                <p className="research-card-paragraph">
                                    Rapid review of the Mastercard Foundation COVID-19 Recovery
                                    and Resilience Program (CRRP Rwanda)
                                </p>
                                <img
                                    src={researchcardimage}
                                    alt="research-card"
                                    className="research-card-image"
                                />
                                <Link to="/research/mastercard-foundation" className="read-more-link">
                                    <img
                                        src={fullreport}
                                        alt="full report"
                                        className="full-report"
                                    />
                                </Link>
                            </div>
                            <div className="research-card">
                                <p className="research-card-paragraph">
                                    Impact study of World Vision Rwanda programs focusing on
                                    community development and educational initiatives
                                </p>
                                <img
                                    src={researchcardimage}
                                    alt="research-card"
                                    className="research-card-image"
                                />
                                <Link to="/research/world-vision" className="read-more-link">
                                    <img
                                        src={fullreport}
                                        alt="full report"
                                        className="full-report"
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Research4;
