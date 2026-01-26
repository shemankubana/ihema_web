import React, { useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import "../styles/Research1.css";
import "../styles/Navbar.css";
import { image } from "framer-motion/client";

const Research1 = () => {
  // Asset paths from public folder
  const logoWhite = "/assets/icons/Logo.png";
  const logoBlack = "/assets/images/logo_black.svg";
  const ellipse = "/assets/icons/Ellipse 4.svg";
  const arrowWhite = "/assets/icons/arrow_icon.png";
  const arrowBlack = "/assets/icons/arrow-blue.svg";
  const arrowWhiteButton = "/assets/icons/Group 12.svg";
  const headerborder = "/assets/images/bordder-line.svg";
  const content = "/assets/images/content.svg";
  const analytics = "/assets/images/Research1_analytics.svg";
  const researchimage = "/assets/images/Rectangle 45.svg";
  const researchimage2 = "/assets/images/Rectangle 60.svg";
  const researchimage3 = "/assets/images/research 3.svg";
  const researchimage4 = "/assets/images/Rectangle 62.svg";
  const fullreport = "/assets/images/full-report.svg";
  const reasearchcardborder = "/assets/images/research-card-border.svg";
  const analytics2 = "/assets/images/analytics for research 4.png";
  const analytics3 = "/assets/images/analytics 2 for research 4.png";

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
                  USDA McGovern-Dole Grant: Home Grown School{" "}
                </p>
                <p className="research-heading">
                  Feeding Program - Phase II Endline & Phase III Baseline
                </p>
              </div>
              <p className="date">April - August 2025</p>
              <p className="partnership">
                Partnership: IHEMA Research Team & Tango International
              </p>
            </div>
          </div>
        </div>
        <div className="content-container">
          <p className="content-paragraph">
            Representing the culmination of IHEMA Research Team's sustained
            engagement with Rwanda's Home Grown School Feeding Program, this
            comprehensive evaluation project combined endline assessment of
            Phase II with baseline establishment for Phase III—a complex
            dual-purpose evaluation requiring sophisticated methodological
            design to ensure comparability across program phases while adapting
            to evolving program strategies and contexts. This project
            demonstrated our organization's maturation from a newly established
            consultancy to a trusted evaluation partner capable of managing
            large-scale, multi-component evaluations over extended timeframes
            while maintaining consistently high-quality deliverables.
          </p>
          <p className="content-paragraph">
            The dual endline-baseline design presented unique methodological challenges that required careful consideration. Endline evaluations measure program impact by comparing final outcomes against initial baselines, requiring meticulous attention to measurement consistency to ensure valid comparisons. Simultaneously, baseline evaluations establish the starting point for new program phases, requiring forward-looking measurement strategies that anticipate program theory changes and emerging evaluation questions. IHEMA Research Team navigated these competing demands by developing evaluation protocols that maintained methodological continuity where appropriate for longitudinal comparison while introducing innovative measurement approaches for new Phase III components and priorities.
          </p>
          <p className="content-paragraph">
            Building on our proven track record from the Phase II midterm evaluation, we again mobilized evaluation activities across 54 schools, though this time with even greater logistical complexity given the dual-purpose evaluation design and the need for expanded data collection to capture both outcome achievement and new baseline indicators. Our evaluation team training curriculum was substantially enhanced, incorporating lessons learned from previous iterations while introducing new modules on handling dual-purpose data collection, managing respondent burden when surveys must capture both retrospective outcome data and forward-looking baseline information, and maintaining data quality across extended field deployment periods.
          </p>
          <p className="content-paragraph">
            The EGRA administration component for this evaluation was particularly significant, as it provided crucial literacy outcome data demonstrating the educational impact of five years of school feeding program implementation. Our enumerators conducted hundreds of individual reading assessments with Primary 2 students, following rigorous EGRA protocols that ensured comparability with midterm data while also establishing robust baseline measures for the incoming Phase III cohort. This literacy data would provide compelling evidence of the program's contribution to improved educational outcomes, supporting advocacy for continued investment in school feeding as an education intervention alongside its nutritional benefits.
          </p>
          <p className="content-paragraph">
            The quantitative school survey component leveraged ODK technology that we had refined over multiple project iterations. Our customized survey instruments captured comprehensive data on program implementation quality, student attendance and enrollment patterns, teacher perceptions of student learning and behavior, school infrastructure supporting feeding activities, and the evolving dynamics of local procurement from smallholder farmers. We implemented sophisticated data quality assurance protocols including real-time range checks, logical consistency validation, and automated flagging of outlier values requiring field verification. This robust quality assurance system ensured that the thousands of data points collected across 54 schools met the highest standards for accuracy and reliability.
          </p>
          <p className="content-paragraph">
            The qualitative research dimension expanded significantly for this evaluation, reflecting the program's evolution and the need to understand broader systemic effects beyond individual school outcomes. IHEMA Research Team conducted extensive interviews with diverse stakeholder groups including district education officers, school feeding committee members, parent representatives, local government officials, agricultural cooperative leaders, and representatives from the Rwanda Education Board. These wide-ranging interviews explored themes including program sustainability, institutional capacity for continued implementation, the evolution of community ownership, challenges in maintaining supply chain reliability, and the broader community development impacts of linking school feeding to local agricultural production.
          </p>
          <img src={content} alt="content" className="content-image" />
          <div className="analytics">
            <img src={analytics2} alt="Analytics" className="analytics" />
            <img src={analytics3} alt="Analytics" className="analytics" />
          </div>
        </div>
        <div className="research-card-container">
          <img src={reasearchcardborder} alt="headerborder" className="research-card-border" />
          <div className="outer-container">
            <p className="more-assessments">More Assessments</p>
            <div className="cards-container">
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

export default Research1;
