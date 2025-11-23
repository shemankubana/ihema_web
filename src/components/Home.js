import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";
import FAQSection from "./FAQs";

// Import assets for the Home page
import heroBg from "../assets/images/hero_bg.png";
//import educationImg from "../assets/images/Education.png";
//import healthImg from "../assets/images/Health.png";
//import societyImg from "../assets/images/Society.png";
//import arrowIcon from "../assets/icons/arrow_icon.png";
//import plusIcon from "../assets/icons/Plus.png";
import arrow from "../assets/icons/arrow_icon.png";
import whitearrow from "../assets/icons/arrow_icon.png";
import blueBox from "../assets/icons/rectangle.png";
import ai from "../assets/icons/Artificial Intelligence.png";
import biotech from "../assets/icons/Biotech.png";
import fingerprint from "../assets/icons/Fingerprint.png";
import layers from "../assets/icons/Layers.png";

// Import partner logos
import unhcrLogo from "../assets/logos/UNHCR 1.png";
import worldVisionLogo from "../assets/logos/WV 1.png";
import v37Logo from "../assets/logos/V37 1.png";
import vsoLogo from "../assets/logos/VSO 1.png";
import wfpLogo from "../assets/logos/WFP 1.png";
import mscLogo from "../assets/logos/MSC 1.png";
import researchimage from "../assets/images/Rectangle 45.png";
import fullreport from "../assets/icons/Group 14.png";
import researchborder from "../assets/icons/Line 32.svg";


// --- Your Original Home Component ---
const Home = () => {
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
              <p className="learn-more-p">Communities hold the truth </p>
              <p className="learn-more-p">— we help bring it to light.</p>
              <Link to="/get-involved" className="nav-actions-link">
                <div className="nav-actions">
                  <p className="get-involved">Get Involved</p>
                  <img src={arrow} alt="" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Partners Section */}
      <section className="partners-section">
        <div className="know-us-container">
          <div className="get-to-know">
            <img src={blueBox} alt="Blue Box" className="blue-box" />
            <p>Get To Know Us</p>
          </div>
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
          <div className="partner-logos">
            <img src={unhcrLogo} alt="UNHCR" />
            <img src={worldVisionLogo} alt="World Vision" />
            <img src={v37Logo} alt="V37" />
            <img src={vsoLogo} alt="VSO" />
            <img src={wfpLogo} alt="WFP" className="wfp" />
            <img src={mscLogo} alt="MSC" className="master-card" />
          </div>
        </div>
      </section>

      {/* Data Points Section */}
      <section className="data-points-section">
        <div className="data-points-box">
          <img src={blueBox} alt="Blue Box" className="blue-box" />
          <p>Evidence For Impact.</p>
        </div>
        <div className="data-points-header">
          <p>
            Hundreds of <span>data points</span>, dozens of stories uncovered.
          </p>
        </div>
        <div className="data-cards">
          <div className="data-card">
            <img src={fingerprint} alt="Fingerprint Icon" />
            <div>
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
      </section>

      {/* Next Level Section */}
      <div className="data-points-box">
        <img src={blueBox} alt="Blue Box" className="blue-box" />
        <p>Explore What We Offer.</p>
      </div>
      <section className="next-level-section">
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

      {/* Research Wall Section */}
      <div className="data-points-box">
        <img src={blueBox} alt="Blue Box" className="blue-box" />
        <p>Our Research Wall</p>
      </div>
      <section className="research-wall-section">
        <div className="section-header">
          <p>
            Turning <span>local insight</span> into powerful decisions through{" "}
            <span>trusted</span> research.
          </p>
        </div>
        <div className="research-grid">
          <Link to="/education" className="research-item">
            <div className="research-item-container">
              <div>
                <p className="research-item-heading">Education</p>
                <p className="research-item-p">
                  {" "}
                  Evaluating Learning Outcomes.{" "}
                </p>
              </div>
              <div className="research-item-bottom">
                <p>
                  Research focused on education, social dynamics, and community
                  challenges to support inclusive growth.
                </p>
                <img
                  src={whitearrow}
                  alt="Education"
                  className="research-image"
                />
              </div>
            </div>
          </Link>
          <Link to="/health" className="research-item health">
            <div className="research-item-container">
              <div>
                <p className="research-item-heading">Health</p>
                <p className="research-item-p">
                  {" "}
                  Studying health services and access.{" "}
                </p>
              </div>
              <div className="research-item-bottom">
                <p>
                  Studies addressing public health issues, healthcare access,
                  and health-related behaviors for better outcomes.
                </p>
                <img
                  src={whitearrow}
                  alt="Education"
                  className="research-image"
                />
              </div>
            </div>
          </Link>
          <Link to="/health" className="research-item society">
            <div className="research-item-container">
              <div>
                <p className="research-item-heading">Society</p>
                <p className="research-item-p">
                  {" "}
                  Community needs and social issues.{" "}
                </p>
              </div>
              <div className="research-item-bottom">
                <p>
                  Analysis of markets, evaluation of programs, and assessment of
                  impacts to guide development improvement strategies.
                </p>
                <img
                  src={whitearrow}
                  alt="Education"
                  className="research-image"
                />
              </div>
            </div>
          </Link>
        </div>
      </section>
      <section className="research">
        <div className="research-container">
          <div className="research-card">
            <p>
              USDA McGovern-Dole Grant: Home Grown School Feeding Program -
              Phase II Endline & Phase III Baseline
            </p>
            <img src={researchimage} alt="research image" className="research-image" />
            <img src={fullreport} alt="full report" className="full-report" />
          </div>
          <div>
                      <img src={researchborder} alt="research border" className="researchborder" />

          </div>
          <div className="research-card">
            <p>
              USDA McGovern-Dole Grant: Home Grown School Feeding Program -
              Phase II Endline & Phase III Baseline
            </p>
            <img src={researchimage} alt="research image" className="research-image" />
            <img src={fullreport} alt="full report" className="full-report" />
          </div>
          <div className="research-card">
            <p>
              USDA McGovern-Dole Grant: Home Grown School Feeding Program -
              Phase II Endline & Phase III Baseline
            </p>
            <img src={researchimage} alt="research image" className="research-image" />
            <img src={fullreport} alt="full report" className="full-report" />
          </div>
          <div className="research-card">
            <p>
              USDA McGovern-Dole Grant: Home Grown School Feeding Program -
              Phase II Endline & Phase III Baseline
            </p>
            <img src={researchimage} alt="research image" className="research-image" />
            <img src={fullreport} alt="full report" className="full-report" />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <div className="data-points-box">
        <img src={blueBox} alt="Blue Box" className="blue-box" />
        <p>All Your Questions, Answered.</p>
      </div>
      <FAQSection />

      {/* Contact Section */}
      <div className="data-points-box">
        <img src={blueBox} alt="Blue Box" className="blue-box" />
        <p>Contact Us</p>
      </div>
      <section className="contact-section">
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
