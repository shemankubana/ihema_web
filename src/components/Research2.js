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
import researchimage from "../assets/images/Rectangle 45.svg";
import researchimage2 from "../assets/images/Rectangle 60.svg";
import researchimage3 from "../assets/images/Rectangle 61.svg";
import researchimage4 from "../assets/images/Rectangle 62.svg";
import fullreport from "../assets/images/full-report.svg";
import reasearchcardborder from "../assets/images/research-card-border.svg";
import content2 from "../assets/images/content2.svg";
import analytics2 from "../assets/images/analytics2.svg";

const contentParagraph1 = "In the critical months following the COVID-19 pandemic's devastating impact on Rwanda's economic landscape, IHEMA Research Team Ltd. was strategically subcontracted by Tango International to spearhead the comprehensive Rapid Review of the Mastercard Foundation COVID-19 Recovery and Resilience Program (CRRP Rwanda). This pivotal evaluation represented one of the foundational projects for our newly established consultancy, demonstrating our capability to deliver high-impact research within tight timelines while maintaining rigorous academic standards.";

const contentParagraph2 = "Our role extended far beyond traditional data collection. IHEMA Research Team assumed full operational leadership of all field-based evaluation activities, orchestrating a complex multi-phase approach that required exceptional coordination and expertise. We designed and implemented a comprehensive enumerator training program that equipped field researchers with the specialized skills necessary to capture nuanced recovery indicators across diverse communities affected by the pandemic. This training emphasized not only technical data collection methodologies but also the cultural sensitivity required when engaging with vulnerable populations navigating post-pandemic economic challenges.";

const contentParagraph3 = "The qualitative research component demanded particular innovation and rigor. Our team meticulously designed qualitative research instruments that could effectively capture the multifaceted experiences of program beneficiaries, including small business owners, youth entrepreneurs, and community organizations working to rebuild economic resilience. Through an iterative refinement process, we continuously enhanced these tools based on pilot testing feedback and emerging insights from the field, ensuring that our data collection captured both the intended program outcomes and unexpected ripple effects throughout beneficiary communities.";

const contentParagraph4 = "One of our most significant contributions was the development of comprehensive qualitative data matrices that transformed raw interview transcripts and focus group discussions into structured analytical frameworks. These matrices didn't simply organize data - they provided top-line analysis that identified emerging patterns, highlighted success stories, flagged implementation challenges, and revealed critical insights about program effectiveness. This analytical work laid the foundation for evidence-based recommendations that could immediately inform program adjustments and future resilience initiatives.";

const contentParagraph5 = "Throughout the evaluation process, IHEMA Research Team maintained close collaborative ties with Tango International researchers, participating in regular synthesis meetings where qualitative findings were triangulated with quantitative data streams. This collaboration enriched the final evaluation report, which we co-authored, ensuring that the narrative authentically represented ground-level realities while meeting international evaluation standards. Our team also contributed to the development of compelling presentations that effectively communicated complex findings to diverse audiences, including the Mastercard Foundation team, government stakeholders, and implementing partners.";

const Research2 = () => {
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
                                    Rapid review of the Mastercard Foundation
                                </p>
                                <p className="research-heading">
                                    COVID-19 Recovery and Resilience Program (CRRP Rwanda)
                                </p>
                            </div>
                            <p className="date">September - December 2024</p>
                            <p className="partnership">
                                Partnership: IHEMA Research Team & Mastercard Foundation
                            </p>
                        </div>
                    </div>
                </div>
                <div className="content-container">
                    <p className="content-paragraph">
                        {contentParagraph1}
                    </p>
                    <p className="content-paragraph">
                        {contentParagraph2}
                    </p>
                    <p className="content-paragraph">
                        {contentParagraph3}
                    </p>
                    <p className="content-paragraph">
                        {contentParagraph4}
                    </p>
                    <p className="content-paragraph">
                        {contentParagraph5}
                    </p>
                    <img src={content2} alt="content" className="content-image" />
                    <img src={analytics2} alt="Analytics" className="analytics" />
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
                                    src={researchimage}
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
                                    Impact study of World Vision Rwanda programs focusing on
                                    community development and educational initiatives
                                </p>
                                <img
                                    src={researchimage3}
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
                            <div className="research-card">
                                <p className="research-card-paragraph">
                                    USDA McGovern-Dole Grant: Home Grown School Feeding Program -
                                    Phase II Midterm Evaluation
                                </p>
                                <img
                                    src={researchimage4}
                                    alt="research-card"
                                    className="research-card-image"
                                />
                                <Link to="/research/mcgovern-dole-midterm" className="read-more-link">
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

export default Research2;
