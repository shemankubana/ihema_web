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
import content3 from "/assets/images/content3.svg";
import analytics3 from "/assets/images/analytics 3.png";
import analytics2 from "/assets/images/analytics 3-2.png";

const Research3 = () => {
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
                                    Impact study of World Vision Rwanda programs
                                </p>
                                <p className="research-heading">
                                    focusing on community development and educational initiatives
                                </p>
                            </div>
                            <p className="date">January - June 2024</p>
                            <p className="partnership">
                                Partnership: IHEMA Research Team & World Vision Rwanda
                            </p>
                        </div>
                    </div>
                </div>
                <div className="content-container">
                    <p className="content-paragraph">
                        Continuing our strategic partnership with Tango International, IHEMA Research Team was commissioned to support a comprehensive impact evaluation for World Vision Rwanda—one of the country's most significant international NGOs with programming spanning child protection, livelihoods development, health and nutrition, and community resilience. This evaluation presented unique methodological challenges, as impact evaluations require more sophisticated analytical approaches than process evaluations, demanding rigorous attention to attribution, counterfactual reasoning, and the isolation of program effects from other confounding factors influencing community development outcomes.
                    </p>
                    <p className="content-paragraph">
                        Our role began with the facilitation of intensive quantitative training for enumerators who would be deployed across World Vision's program areas. This training went beyond basic survey administration, delving into the theoretical foundations of impact evaluation, the importance of standardized protocols for ensuring data comparability, techniques for minimizing measurement bias, and strategies for maintaining respondent engagement during lengthy survey instruments. We developed comprehensive training materials including role-play scenarios, practice surveys, and field simulation exercises that prepared enumerators not just to collect data but to understand why specific questions were asked and how their work contributed to the broader evaluation framework.
                    </p>
                    <p className="content-paragraph">
                        The qualitative survey component demanded particular expertise in eliciting rich, contextual narratives that could illuminate the pathways through which World Vision's programming generated impact. IHEMA Research Team designed and conducted qualitative surveys that explored beneficiary experiences across multiple program dimensions—from household economic changes to shifts in parenting practices, from health-seeking behaviors to community social cohesion. Our qualitative approach employed a variety of data collection methods including in-depth interviews, focus group discussions, and participatory community mapping exercises, each selected based on the specific information needs and the cultural appropriateness for different beneficiary groups.
                    </p>
                    <p className="content-paragraph">
                        A critical aspect of our contribution involved the continuous review and refinement of qualitative research tools. As the evaluation unfolded and preliminary findings emerged, we maintained an adaptive approach, adjusting our interview protocols and discussion guides to probe more deeply into emerging themes and unexpected program effects. This iterative refinement process was conducted in close consultation with Tango International and World Vision staff, ensuring that our tools remained aligned with evaluation priorities while also remaining responsive to ground-level realities. We provided detailed technical feedback on question wording, interview sequencing, and probing strategies that enhanced the depth and quality of data captured.
                    </p>
                    <p className="content-paragraph">
                        The data management and analysis phase showcased IHEMA Research Team's advanced analytical capabilities. We developed comprehensive qualitative data matrices that organized hundreds of pages of interview transcripts and focus group notes into structured frameworks enabling systematic cross-case comparison. These matrices were not simply data repositories but analytical tools that facilitated pattern recognition, theme identification, and the development of causal narratives explaining how program inputs led to observed outcomes. Our top-line analysis provided preliminary findings that informed real-time program adjustments, while our deeper data interpretation work contributed to the final evaluation report's findings and recommendations.
                    </p>
                    <p className="content-paragraph">
                        Perhaps most importantly, we provided nuanced data interpretation that went beyond surface-level description to offer meaningful insights about program effectiveness, implementation challenges, and opportunities for program enhancement. Our interpretation work was grounded in deep contextual knowledge of Rwandan communities, understanding of international development best practices, and familiarity with the complex interplay of factors influencing community development outcomes. This interpretive expertise ensured that the evaluation findings were not just accurate but also actionable, providing World Vision Rwanda with evidence-based recommendations that could immediately inform program strategy and operations.
                    </p>
                    <img src={content3} alt="content" className="content-image" />
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

export default Research3;
