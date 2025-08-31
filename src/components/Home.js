import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";

// Import assets for the Home page
import heroBg from "../assets/images/hero_bg.png";
import educationImg from "../assets/images/Education.png";
import healthImg from "../assets/images/Health.png";
import societyImg from "../assets/images/Society.png";
import arrowIcon from "../assets/icons/arrow_icon.png";
import plusIcon from "../assets/icons/Plus.png";
import arrow from "../assets/icons/arrow_icon.png";
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

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <header
        className="hero-section"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h2>Empowering Decisions, Enabling Change.</h2>
        </div>
        <div className="second-hero-content">
          <div className="text-container">
            <div className="text">
              <p className="heading-paragraph">Localised Research Expertise</p>
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
          Hundreds of <span>data points</span>, dozens of
          stories uncovered.
        </p>
        </div>
        <div className="data-cards">
          <div className="data-card">
            <img src={fingerprint} alt="Fingerprint Icon" />
            <h3>Data Collection and Analysis</h3>
            <p>
              Advanced statistical models to interpret complex datasets and
              provide clear, actionable intelligence.
            </p>
          </div>
          <div className="data-card">
            <img src={ai} alt="AI Icon" />
            <h3>Impact Evaluation</h3>
            <p>
              Rigorous methodologies to measure the true effect of programs and
              policies, ensuring accountability.
            </p>
          </div>
          <div className="data-card">
            <img src={biotech} alt="Biotech Icon" />
            <h3>Market Research</h3>
            <p>
              In-depth analysis of market trends, consumer behavior, and
              competitive landscapes to inform strategy.
            </p>
          </div>
          <div className="data-card">
            <img src={layers} alt="Layers Icon" />
            <h3>Policy Research</h3>
            <p>
              Evidence-based research to support the development of effective
              and equitable public policies.
            </p>
          </div>
        </div>
      </section>

      {/* Next Level Section */}
      <section className="next-level-section">
        <div className="next-level-content">
          <h2>The Next Level Of Data Collection – Together.</h2>
          <p className="subtitle">For Impactful Insights.</p>
          <p className="description">
            Our collaborative platform brings together diverse data sources,
            from satellite imagery to on-the-ground surveys. By integrating
            technology with community engagement, we unlock deeper insights and
            foster a more holistic understanding of the challenges and
            opportunities at hand.
          </p>
        </div>
        <div className="next-level-image">
          {/* Placeholder for the graph image */}
          <img
            src="https://via.placeholder.com/500x350?text=Data+Visualization"
            alt="Data Visualization Graph"
          />
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="our-approach-section">
        <h2>Our Approach</h2>
        <div className="approach-circle">
          <div className="approach-circle-inner">
            <div className="pointer p1">
              <h3>Community-Centric Methods</h3>
              <p>
                Engaging directly with communities to ensure our research is
                relevant and respectful.
              </p>
            </div>
            <div className="pointer p2">
              <h3>Data-Driven Strategies</h3>
              <p>
                Utilizing robust data to craft strategies that are effective and
                evidence-based.
              </p>
            </div>
            <div className="pointer p3">
              <h3>Sustainable Impact</h3>
              <p>
                Focusing on long-term solutions that empower communities and
                foster resilience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Research Wall Section */}
      <section className="research-wall-section">
        <div className="section-header">
          <p className="subtitle-light">Our Research</p>
          <h2>
            Turning local <span className="highlight-blue">insight</span> into
            powerful decisions through trusted research.
          </h2>
        </div>
        <div className="research-grid">
          <Link to="/education" className="research-item">
            <img src={educationImg} alt="Education" />
            <div className="research-item-overlay">
              <h3>Education</h3>
            </div>
            <img src={arrowIcon} className="arrow-icon" alt="Go" />
          </Link>
          <div className="research-item">
            <img src={healthImg} alt="Health" />
            <div className="research-item-overlay">
              <h3>Health</h3>
            </div>
            <img src={arrowIcon} className="arrow-icon" alt="Go" />
          </div>
          <div className="research-item">
            <img src={societyImg} alt="Society" />
            <div className="research-item-overlay">
              <h3>Society</h3>
            </div>
            <img src={arrowIcon} className="arrow-icon" alt="Go" />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-container">
          <details className="faq-item">
            <summary>
              What types of data do you specialize in?
              <img src={plusIcon} alt="Toggle" className="plus-icon" />
            </summary>
            <p>
              We specialize in both quantitative and qualitative data, ranging
              from large-scale surveys and econometric data to in-depth
              interviews, focus groups, and ethnographic studies. Our expertise
              lies in mixed-methods research that integrates different data
              types for a comprehensive understanding.
            </p>
          </details>
          <details className="faq-item">
            <summary>
              Which geographical regions do you cover?
              <img src={plusIcon} alt="Toggle" className="plus-icon" />
            </summary>
            <p>
              While we are a global network, our primary focus has been on
              projects in Sub-Saharan Africa, Southeast Asia, and parts of Latin
              America. However, our methodologies and network of researchers
              allow us to conduct studies in a wide variety of contexts
              worldwide.
            </p>
          </details>
          <details className="faq-item">
            <summary>
              How do you ensure data quality and ethical standards?
              <img src={plusIcon} alt="Toggle" className="plus-icon" />
            </summary>
            <p>
              Data quality is paramount. We employ rigorous training for our
              enumerators, multi-layered data verification processes, and pilot
              testing of all instruments. Ethically, we adhere to strict IRB
              standards, ensure informed consent, and prioritize the
              confidentiality and anonymity of our participants.
            </p>
          </details>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <h2>We're Just a message away</h2>
        <p>
          Drop us a line and let's explore how we can help you achieve your
          goals and make a difference.
        </p>
        <form className="contact-form">
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <textarea placeholder="Message" rows="5" required></textarea>
          <button type="submit">Send</button>
        </form>
      </section>
    </div>
  );
};

export default Home;
