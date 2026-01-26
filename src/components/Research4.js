import React, { useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import "../styles/Research1.css";
import "../styles/Navbar.css";
import logoWhite from "/assets/icons/Logo.png";
import logoBlack from "/assets/images/logo_black.svg";
import ellipse from "/assets/icons/Ellipse 4.svg";
import arrowWhiteButton from "/assets/icons/Group 12.svg";
import headerborder from "/assets/images/bordder-line.svg";
import content from "/assets/images/content.svg";
import analytics from "/assets/images/Research1_analytics.svg";
import researchimage from "/assets/images/Rectangle 45.svg";
import researchimage2 from "/assets/images/Rectangle 60.svg";
import researchimage3 from "/assets/images/research 3.svg";
import researchimage4 from "/assets/images/Rectangle 62.svg";
import fullreport from "/assets/images/full-report.svg";
import reasearchcardborder from "/assets/images/research-card-border.svg";
import content4 from "/assets/images/content4.svg";
import analytics3 from "/assets/images/analytics 44.png";
import analytics2 from "/assets/images/analytics 442.png";

const Research4 = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();

    const handleToggleMenu = () => setMenuOpen(!menuOpen);
    const closeMenu = () => setMenuOpen(false);

    return (
        <div className="research-page">
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
                        Building on our successful track record from the COVID-19 recovery evaluation, IHEMA Research Team was again entrusted by Tango International to lead the midterm evaluation of Rwanda's Home Grown School Feeding Program Phase II—a critical initiative funded by the USDA McGovern-Dole International Food for Education and Child Nutrition Program. This evaluation represented a significant expansion of our technical capabilities, requiring expertise in educational assessment methodologies, nutrition programming evaluation, and large-scale quantitative data collection across Rwanda's diverse geographic regions.
                    </p>
                    <p className="content-paragraph">
                        The scope and complexity of this evaluation demanded exceptional project management and technical precision. Our team coordinated evaluation activities across 54 schools distributed throughout multiple districts, each presenting unique logistical challenges related to accessibility, language diversity, and varying levels of school infrastructure. We developed and delivered a comprehensive training curriculum for our evaluation team that covered not only standard survey administration protocols but also specialized training in the Early Grade Reading Assessment (EGRA) methodology—a rigorous literacy assessment tool requiring careful standardization to ensure valid and reliable results across different testing environments.
                    </p>
                    <p className="content-paragraph">
                        The administration of EGRA assessments to Primary 2 students represented one of the most technically demanding aspects of this evaluation. Our enumerators received intensive training in child-friendly assessment techniques, understanding that working with young learners requires patience, encouragement, and the ability to create a comfortable testing environment that yields authentic performance data rather than anxiety-influenced results. Each assessment session was carefully timed and conducted in accordance with international EGRA protocols, generating valuable literacy data that would inform program adjustments and demonstrate the educational impact of adequate nutrition on learning outcomes.
                    </p>
                    <p className="content-paragraph">
                        Parallel to our EGRA administration, IHEMA Research Team executed large-scale quantitative school surveys using Open Data Kit (ODK) software—a mobile data collection platform that we customized and programmed to capture comprehensive information about school feeding implementation, student attendance patterns, teacher observations, and school-level infrastructure supporting the feeding program. Our technical team developed sophisticated ODK forms with built-in validation rules and skip logic that minimized data entry errors while maximizing the richness of information captured. This digital approach allowed for real-time data quality monitoring and rapid identification of any anomalies requiring immediate follow-up.
                    </p>
                    <p className="content-paragraph">
                        Beyond the quantitative components, IHEMA Research Team led the qualitative research dimension, conducting in-depth interviews with key project stakeholders including school administrators, teachers, district education officials, parent-teacher association representatives, and local farmers supplying food to the program. These qualitative inquiries explored implementation fidelity, community perceptions of program value, challenges in procurement and distribution, and the broader community development impacts of linking school feeding to local agricultural production. Our team compiled these rich narratives into comprehensive data reports that provided contextual depth to the quantitative findings, revealing not just what was happening in the program but why certain outcomes were occurring and how communities were experiencing the intervention.
                    </p>
                    <p className="content-paragraph">
                        A critical value-added service provided by IHEMA Research Team was our translation and cultural adaptation work on survey tools. Recognizing that effective evaluation requires culturally appropriate instruments that resonate with local contexts, we provided detailed feedback on survey language, question framing, and cultural appropriateness of various assessment items. This iterative refinement process ensured that our evaluation tools were not simply translated versions of international instruments but rather culturally grounded tools that could elicit authentic, meaningful responses from Rwandan stakeholders while maintaining methodological rigor and international comparability.
                    </p>
                    <img src={content4} alt="content" className="content-image" />
                    <div className="analytics">
                        <img src={analytics3} alt="Analytics" className="analytics" />
                        <img src={analytics2} alt="Analytics" className="analytics" />
                    </div>
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
                                    Rapid review of the Mastercard Foundation COVID-19 Recovery
                                    and Resilience Program (CRRP Rwanda)
                                </p>
                                <img
                                    src={researchimage2}
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Research4;
