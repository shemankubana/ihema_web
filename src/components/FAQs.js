import React, { useState } from "react";
import "../styles/Home.css";
import blueBox from "/assets/icons/rectangle.png";
import plusIcon from "/assets/icons/Plus.svg";

const FAQSection = () => {
  const [visibleCount, setVisibleCount] = useState(4);
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question:
        "What types of research and consulting services does IHEMA offer?",
      answer:
        "IHEMA provides tailored research, data collection, market assessments, policy analysis, and consulting services across multiple sectors including health, education, and social development.",
    },
    {
      question:
        "How does IHEMA ensure the quality and reliability of its data?",
      answer:
        "We apply strict quality assurance processes, including training enumerators, piloting tools, and using technology-driven validation techniques to ensure accuracy and consistency.",
    },
    {
      question: "Who are your typical clients and partners?",
      answer:
        "Our clients range from international NGOs, government institutions, UN agencies, and private organizations seeking reliable, localized insights.",
    },
    {
      question: "Can IHEMA conduct research in remote or hard-to-reach areas?",
      answer:
        "Yes. Our experienced field teams and adaptive methodologies enable us to reach rural and hard-to-access communities while maintaining high data quality standards.",
    },
    {
      question: "How long does a typical research project take?",
      answer:
        "The timeline varies depending on the project scope, but most studies are completed within weeks to a few months.",
    },
    {
      question: "Does IHEMA also provide policy advisory services?",
      answer:
        "Yes. Beyond data collection, we provide evidence-based recommendations to support policy design, program improvement, and sustainable decision-making.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <p className="faq-header">
        Frequently <span className="highlight">Asked</span> Questions
      </p>
      <div className="faq-container">
        {faqs.slice(0, visibleCount).map((faq, index) => (
          <div
            key={index}
            className={`faq-item ${openIndex === index ? "open" : ""}`}
          >
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              <span>{faq.question}</span>
              <span className="faq-icon">
                {openIndex === index ? "−" : "+"}
              </span>
            </div>
            <div
              className="faq-answer"
              style={{
                maxHeight: openIndex === index ? "200px" : "0px",
              }}
            >
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>

      {visibleCount < faqs.length && (
        <div
          className="load-more"
          onClick={() => setVisibleCount(visibleCount + 2)}
        >
          <img src={plusIcon} alt="plus-icon" className="plus-icon" />Load More...
        </div>
      )}
    </section>
  );
};

export default FAQSection;
