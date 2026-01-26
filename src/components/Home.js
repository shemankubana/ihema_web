import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { scrollToContact } from "../utils/scroll";
import "../styles/Home.css";
import FAQSection from "./FAQs";

// Import assets for the Home page
import heroBg from "/assets/images/hero_bg.png";
//import educationImg from "/assets/images/Education.png";
//import healthImg from "/assets/images/Health.png";
//import societyImg from "/assets/images/Society.png";
//import arrowIcon from "/assets/icons/arrow_icon.png";
//import plusIcon from "/assets/icons/Plus.png";
import arrow from "/assets/icons/arrow_icon.png";
import whitearrow from "/assets/icons/arrow_icon.png";
import blueBox from "/assets/icons/rectangle.png";
import ai from "/assets/icons/Artificial Intelligence.png";
import biotech from "/assets/icons/Biotech.png";
import fingerprint from "/assets/icons/Fingerprint.png";
import layers from "/assets/icons/Layers.png";
import member1 from "/assets/images/WhatsApp Image 2025-12-22 at 13.28.12.jpeg"
import member2 from "/assets/images/WhatsApp Image 2025-12-22 at 13.28.13.jpeg"

// Import partner logos
import unhcrLogo from "/assets/logos/UNHCR 1.png";
import worldVisionLogo from "/assets/logos/WV 1.png";
import v37Logo from "/assets/logos/V37 1.png";
import vsoLogo from "/assets/logos/VSO 1.png";
import wfpLogo from "/assets/logos/WFP 1.png";
import mscLogo from "/assets/logos/MSC 1.png";
import researchimage from "/assets/images/Rectangle 45.svg";
import researchimage2 from "/assets/images/Rectangle 60.svg";
import researchimage3 from "/assets/images/research 3.svg";
import researchimage4 from "/assets/images/Rectangle 62.svg";
import fullreport from "/assets/images/Group 14.svg";
import researchborder from "/assets/icons/Line 32.svg";
import readmore from "/assets/images/Group 31-2.svg";

// --- Your Original Home Component ---
const Home = () => {
  // State for rotating approach points
  const [currentApproach, setCurrentApproach] = useState(0);

  // Define the three approach points
  const approaches = [
    {
      title: "Community-Centered Methods",
      description: "Grounded in local culture and realities to ensure the relevant, accurate, and respectful outcomes for our research's results."
    },
    {
      title: "Data-Driven Insights",
      description: "Leveraging rigorous quantitative and qualitative methodologies to deliver actionable intelligence that drives meaningful impact."
    },
    {
      title: "Collaborative Excellence",
      description: "Working closely with stakeholders and communities to co-create solutions that are sustainable, ethical, and transformative."
    }
  ];

  // Auto-rotate through approaches every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentApproach((prev) => (prev + 1) % approaches.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // scrollToContact imported from ../utils/scroll

  return (
    <div className="home-page">
      {/* Hero Section */}
      <header
        className="hero-section"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-container">
          <div className="hero-content">
            <h2>Empowering Decisions,</h2>
            <h2>Enabling Change.</h2>
          </div>
          <div className="second-hero-content">
            <div className="text-container">
              <div className="text">
                <p className="heading-paragraph">
                  Localised Research Expertise
                </p>
                <p className="hero-paragraph">
                  Deep cultural understanding and field experience for accurate
                  insights.
                </p>
              </div>
              <div className="text">
                <p className="heading-paragraph">Timely, Actionable Data</p>
                <p className="hero-paragraph">
                  Fast, high-quality analysis that supports evidence-based
                  decisions without delay.
                </p>
              </div>
              <div className="text">
                <p className="heading-paragraph">Community-Driven Solutions</p>
                <p className="hero-paragraph">
                  Grounded in real-world conditions to deliver sustainable and
                  practical outcomes.
                </p>
              </div>
            </div>
            <div className="learn-more">
              <div className="learn-more-p-container">
                <p className="learn-more-p">Communities hold the truth </p>
                <p className="learn-more-p">— we help bring it to light.</p>
              </div>
              <a href="#contact" className="nav-actions-link" onClick={scrollToContact}>
                <div className="nav-actions">
                  <p className="get-involved">Get Involved</p>
                  <img src={arrow} alt="" className="arrow-get-involved" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Partners Section */}
      {/* Partners Section */}
      <section className="partners-section" id="about-us">
        <div className="data-points-box">
          <img src={blueBox} alt="Blue Box" className="blue-box" />
          <p>Get To Know Us.</p>
        </div>
        <div className="know-us-container">
          <div className="know-us-header">
            <p>
              We don’t just talk about growth. We design{" "}
              <span>research-driven </span>
              strategies and solutions that are <span>relevant</span>,
              resilient, and built to last — even when everything around them is
              changing.
            </p>
          </div>
          <div className="know-us-subtitle">
            <p>
              We are committed to delivering reliable, high-quality research and
              consulting services that empower organizations and institutions to
              design and implement evidence-based, sustainable solutions.
            </p>
            <p>
              We envision becoming the leading research and consulting firm that
              drives impactful, evidence-based smart decisions to promote the
              sustainable development, equity, and resilience of Rwanda.
            </p>
          </div>
          <div className="partner-logos-container">
            <div className="partner-logos">
              <img src={unhcrLogo} alt="UNHCR" />
              <img src={worldVisionLogo} alt="World Vision" />
              <img src={v37Logo} alt="V37" />
              <img src={vsoLogo} alt="VSO" />
              <img src={wfpLogo} alt="WFP" className="wfp" />
              <img src={mscLogo} alt="MSC" className="master-card" />
              {/* Duplicate logos for seamless sliding loop */}
              <img src={unhcrLogo} alt="UNHCR" />
              <img src={worldVisionLogo} alt="World Vision" />
              <img src={v37Logo} alt="V37" />
              <img src={vsoLogo} alt="VSO" />
              <img src={wfpLogo} alt="WFP" className="wfp" />
              <img src={mscLogo} alt="MSC" className="master-card" />
            </div>
          </div>
        </div>
      </section>

      {/* Data Points Section */}
      <section className="data-points-section" id="services">
        <div className="data-points-box">
          <img src={blueBox} alt="Blue Box" className="blue-box" />
          <p>Evidence For Impact.</p>
        </div>
        <div className="data-points-container">
          <div className="data-points-header">
            <p>
              Hundreds of <span>data points</span>,
            </p>
            <p>dozens of stories uncovered.</p>
          </div>
          <div className="data-cards">
            <div className="data-card">
              <img src={fingerprint} alt="Fingerprint Icon" className="data-card-img" />
              <div className="data-card-text">
                <p className="data-points">Data Collection and Analysis</p>
                <p className="data-points-p">
                  High-quality, context-driven data gathering and analysis.
                </p>
              </div>
            </div>
            <div className="data-card">
              <img src={ai} alt="AI Icon" />
              <div>
                <p className="data-points">Impact Evaluation</p>
                <p className="data-points-p">
                  In-depth studies to understand trends, consumer behavior, &
                  economic conditions.
                </p>
              </div>
            </div>
            <div className="data-card">
              <img src={biotech} alt="Biotech Icon" />
              <div>
                <p className="data-points">Market Research</p>
                <p className="data-points-p">
                  Assessing program performance, effectiveness, and impact.
                </p>
              </div>
            </div>
            <div className="data-card">
              <img src={layers} alt="Layers Icon" />
              <div>
                <p className="data-points">Policy Research</p>
                <p className="data-points-p">
                  Expert support to design practical, sustainable solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Next Level Section */}
      <section className="next-level-section">
        <div className="data-points-box">
          <img src={blueBox} alt="Blue Box" className="blue-box" />
          <p>Explore What We Offer.</p>
        </div>
        <div className="next-level-container">
          <div className="next-level-content">
            <p>The Next Level Of </p>
            <p>Data Collection –</p>
            <p className="subtitle">Together</p>
            <p className="subtitle">For Impactful Insights.</p>
          </div>
          <div className="next-level-subtitle">
            <p className="description">
              We offer comprehensive data collection services, including
              <span> quantitative</span> methods such as face-to-face surveys,{" "}
              <span>mobile-based surveys</span>, and <span>household</span>{" "}
              surveys, as well as <span>qualitative</span> approaches like
              interviews and focus group discussions.
            </p>
            <p className="description">
              Our team is skilled in field team training and management, and we
              prioritize <span>rigorous</span> data quality assurance to ensure
              accurate and reliable results, tailoring our <span>unique</span>{" "}
              processes.
            </p>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="our-approach-section" id="approach">
        <p className="Our-Approach">Our Approach</p>
        <div className="approach-container">

          <div className="approach-arc-container">
            <div className="approach-arc">
              {/* Three decorative circles showing all approach numbers */}
              {/* Left: first inactive approach */}
              <div className="approach-decoration left"></div>
              {/* Top: active approach */}
              <div className="approach-decoration top active">
                {currentApproach + 1}
              </div>
              {/* Right: second inactive approach */}
              <div className="approach-decoration right"></div>

              {/* Vertical line from active number */}
              <div className="approach-line"></div>

              {/* Content for current approach */}
              <div className="approach-content">
                <h3>{approaches[currentApproach].title}</h3>
                <p>{approaches[currentApproach].description}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Wall Section */}
      {/* Research Wall Section */}
      <section className="research" id="research">
        <div className="data-points-box">
          <img src={blueBox} alt="Blue Box" className="blue-box" />
          <p>Our Research Wall</p>
        </div>
        <div className="research-research">
          <div className="research-container">
            <div className="research-card-list">
              <div className="research-main">
                <p>
                  USDA McGovern-Dole Grant: Home Grown School Feeding Program -
                  Phase II Endline & Phase III Baseline
                </p>
                <img
                  src={researchimage}
                  alt="research image"
                  className="research-image"
                />
                <Link to="/research/mcgovern-dole">
                  <img
                    src={fullreport}
                    alt="full report"
                    className="full-report-home"
                  />
                </Link>
              </div>
              <img src={researchborder} alt="research border" className="research-border" />
            </div>
            <div className="research-card-list">
              <div className="research-main">
                <p>
                  Rapid review of the Mastercard Foundation COVID-19 Recovery and
                  Resilience Program (CRRP Rwanda)
                </p>
                <img
                  src={researchimage2}
                  alt="research image"
                  className="research-image"
                />
                <Link to="/research/mastercard-foundation">
                  <img
                    src={fullreport}
                    alt="full report"
                    className="full-report-home"
                  />
                </Link>
              </div>
              <img src={researchborder} alt="research border" className="research-border" />
            </div>
            <div className="research-card-list">
              <div className="research-main">
                <p>
                  Impact study of World Vision Rwanda programs focusing on
                  community development and educational initiatives
                </p>
                <img
                  src={researchimage3}
                  alt="research image"
                  className="research-image"
                />
                <Link to="/research/world-vision">
                  <img
                    src={fullreport}
                    alt="full report"
                    className="full-report-home"
                  />
                </Link>
              </div>
              <img src={researchborder} alt="research border" className="research-border" />
            </div>
            <div className="research-card-list">
              <div className="research-main">
                <p>
                  USDA McGovern-Dole Grant: Home Grown School Feeding Program -
                  Phase II Midterm Evaluation
                </p>
                <img
                  src={researchimage4}
                  alt="research image"
                  className="research-image"
                />
                <Link to="/research/mcgovern-dole-midterm">
                  <img
                    src={fullreport}
                    alt="full report"
                    className="full-report-home"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us */}
      {/* About Us */}
      <div className="data-points-box-about-us">
        <img src={blueBox} alt="Blue Box" className="blue-box" />
        <p>Meet The Team</p>
      </div>
      <section className="about-us" id="team">
        <div className="about-us-container">
          <div className="about-us-paragraph">
            <p>
              Meet the <span>professionals</span> behind our success.
            </p>
          </div>
          <div className="profiles">
            <div className="profile-card">
              <div>
                <p className="about-us-name">[ + ] Justin TUYIRINGIRE</p>
                <p className="about-us-role">Chairperson</p>
              </div>
              <div>
                <p className="about-us-des">
                  With extensive experience in research management and
                  evaluation, Justin ensures impactful results and oversees the
                  governance of IHEMA Research Team Ltd.
                </p>
                <img src={readmore} alt="Readmore" className="readmore" />
              </div>
              <div>
                <img
                  src={member1}
                  alt="White Arrow"
                  className="profile-image"
                />
              </div>
              <div className="heading-about-us"></div>
            </div>
            <div className="profile-card">
              <div>
                <p className="about-us-name">[ + ] Daria MUTETERI</p>
                <p className="about-us-role">Managing Director</p>
              </div>
              <div>
                <p className="about-us-des">
                  Skilled in qualitative and quantitative research, she has led
                  major evaluations, including the Mastercard Foundation CRRP
                  review and USDA McGovern-Dole HGSF programs.
                </p>
                <img src={readmore} alt="Readmore" className="readmore" />
              </div>
              <div>
                <img
                  src={member2}
                  alt="profile image"
                  className="profile-image"
                />
              </div>
              <div className="heading-about-us"></div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <div id="faq">
        <div className="data-points-box">
          <img src={blueBox} alt="Blue Box" className="blue-box" />
          <p>All Your Questions, Answered.</p>
        </div>
        <FAQSection />
      </div>

      {/* Contact Section */}
      <div className="data-points-box">
        <img src={blueBox} alt="Blue Box" className="blue-box" />
        <p>Contact Us</p>
      </div>
      <section className="contact-section" id="contact">
        <div className="contact-section-container">
          <div className="text">
            <h2 className="contact-header">
              We're Just a <span>message</span> away.
            </h2>
            <p>
              Whether you are navigating complex challenges, seeking evidence to
              inform smarter decisions, or ready to design impactful programs,
              our expertise ensures you move forward with fresh & clear
              insights.
            </p>
          </div>
          <div className="form">
            <form className="contact-form">
              <div
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <img src={blueBox} alt="Blue Box" style={{ width: "10px" }} />
                <p>Name:</p>
              </div>
              <input type="text" placeholder="Enter your Name" required />
              <div
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <img src={blueBox} alt="Blue Box" style={{ width: "10px" }} />
                <p>Email:</p>
              </div>
              <input type="email" placeholder="Enter your e-mail" required />
              <div
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <img src={blueBox} alt="Blue Box" style={{ width: "10px" }} />
                <p>Message:</p>
              </div>
              <textarea
                placeholder="Enter your message"
                rows="5"
                required
              ></textarea>
              <button type="submit">Send</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
