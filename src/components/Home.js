import React, { useState, useMemo, useEffect, useRef } from 'react';
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

// --- Data for the Animated Approach component ---
const stepsData = [
  {
    id: 1,
    title: 'Community-Centered Methods',
    description: 'Grounded in local culture and realities to ensure relevant, accurate, and respectful outcomes.',
  },
  {
    id: 2,
    title: 'Collaborative Partnerships',
    description: 'We work hand-in-hand with local organizations, building trust and ensuring our work has a lasting impact.',
  },
  {
    id: 3,
    title: 'Data-Driven Insights',
    description: 'Leveraging rigorous data analysis to provide clear, actionable insights that drive effective decision-making.',
  },
];

// --- The Animated Approach Component ---
const AnimatedApproach = () => {
  const [activeStep, setActiveStep] = useState(0);

  // Refs for the elements that will be animated
  const lineRef = useRef(null);
  const activeDotRef = useRef(null);

  const animationState = useRef({
    currentAngle: -90, // Start at the top to match the visual
  });

  const config = {
    numSteps: stepsData.length,
    svgSize: 800,
    arcRadius: 380,
    dotSize: 30,
    activeDotSize: 40,
  };
  const centerX = config.svgSize / 2;
  const centerY = config.svgSize / 2;

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prevStep) => (prevStep + 1) % stepsData.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []); 

  // Calculate the static positions for the numbered dots
  const stepPositions = useMemo(() => {
    const positions = [];
    // Spreading 3 dots across the top of the semi-circle
    const angles = [-135, -90, -45];
    for (let i = 0; i < config.numSteps; i++) {
      const angleDeg = angles[i];
      const angleRad = angleDeg * (Math.PI / 180);
      const x = centerX + config.arcRadius * Math.cos(angleRad);
      const y = centerY + config.arcRadius * Math.sin(angleRad);
      positions.push({ x, y, angle: angleDeg });
    }
    return positions;
  }, [config.numSteps, centerX, centerY, config.arcRadius]);

  // Animation loop for the moving line and active dot
  useEffect(() => {
    const targetAngle = stepPositions[activeStep].angle;
    
    let frameId;

    const animate = () => {
      const state = animationState.current;
      const easingFactor = 0.05;
      // Smoothly move the current angle towards the target
      state.currentAngle += (targetAngle - state.currentAngle) * easingFactor;
      
      const currentAngleRad = state.currentAngle * (Math.PI / 180);
      const x = centerX + config.arcRadius * Math.cos(currentAngleRad);
      const y = centerY + config.arcRadius * Math.sin(currentAngleRad);

      // Update the line's end point
      if (lineRef.current) {
        lineRef.current.setAttribute('x2', x);
        lineRef.current.setAttribute('y2', y);
      }
      
      // Update the active dot's position
      if (activeDotRef.current) {
        activeDotRef.current.setAttribute('transform', `translate(${x}, ${y})`);
      }

      frameId = requestAnimationFrame(animate);
    };
    
    animate();

    return () => {
      cancelAnimationFrame(frameId);
    };
  }, [activeStep, centerX, centerY, config.numSteps, config.arcRadius, stepPositions]);

  const activeContent = stepsData[activeStep];
  const foreignObjectSize = config.arcRadius * 0.9;
  const foreignObjectX = centerX - foreignObjectSize / 2;
  const foreignObjectY = centerY - foreignObjectSize / 1.5;
  
  // The line will start from a fixed point above the text block
  const lineStartX = centerX;
  const lineStartY = foreignObjectY + 30; // Positioned at the top of the text area

  const arcPath = `M ${centerX - config.arcRadius},${centerY} A ${config.arcRadius},${config.arcRadius} 0 0 1 ${centerX + config.arcRadius},${centerY}`;

  return (
    <div className="w-full mx-auto flex flex-col items-center text-white">
      <h2 className="text-4xl md:text-5xl font-bold mb-8 self-start text-left px-6">Our Approach</h2>
      <div className="relative w-full h-[500px] flex flex-col items-center">
        <svg viewBox={`0 0 ${config.svgSize} ${config.svgSize}`} className="w-full h-auto absolute -top-10" aria-hidden="true">
          
          {/* Static semi-circle path */}
          <path 
            d={arcPath} 
            fill="none" stroke="rgba(255, 255, 255, 0.5)" strokeWidth="2" 
          />

          {/* Static numbered dots */}
          {stepPositions.map((pos, index) => (
            <g key={index} transform={`translate(${pos.x}, ${pos.y})`} className="cursor-pointer" onClick={() => setActiveStep(index)}>
                <circle cx="0" cy="0" r={config.dotSize / 2} fill={activeStep === index ? "white" : "none"}
                  stroke="white" strokeWidth={2}
                  style={{transition: 'fill 0.3s ease'}}
                />
                <text x="0" y="0" textAnchor="middle" dominantBaseline="central" 
                  fill={activeStep === index ? "#2c4e8a" : "white"} fontSize="14" fontWeight="bold"
                  style={{transition: 'fill 0.3s ease'}}
                  >
                  {index + 1}
                </text>
            </g>
          ))}

          {/* Moving Line */}
          <line
            ref={lineRef}
            x1={lineStartX} y1={lineStartY}
            x2={centerX} y2={centerY - config.arcRadius}
            stroke="white" strokeWidth="2"
          />

          {/* This dot is now part of the static dots logic, so this group is no longer needed */}
          {/* <g ref={activeDotRef}> ... </g> */}

          {/* Static Central Text */}
          <foreignObject x={foreignObjectX} y={foreignObjectY} width={foreignObjectSize} height={foreignObjectSize}>
             <div xmlns="http://www.w3.org/1999/xhtml" className="w-full h-full flex flex-col items-center justify-center text-center p-4">
                <div key={activeContent.id} className="animate-fade-in">
                    <h3 className="text-xl font-bold mb-3">{activeContent.title}</h3>
                    <p className="text-base text-gray-200 leading-relaxed">{activeContent.description}</p>
                </div>
            </div>
          </foreignObject>
        </svg>
      </div>
    </div>
  );
};

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
            <p>The Next Level Of Data Collection – </p>
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
      <section className="approach-section-container bg-[#2c4e8a] overflow-hidden">
        <AnimatedApproach />
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

