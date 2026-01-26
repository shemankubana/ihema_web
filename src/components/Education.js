import React from "react";
import "../styles/Education.css";

const Education = () => {
  // Asset paths from public folder
  const mainEduImg = "/assets/images/Rectangle 44.png";
  const cardImg1 = "/assets/images/Health.png";
  const cardImg2 = "/assets/images/Society.png";

  // Create an array of article data to avoid repetition
  const articles = [
    {
      title:
        "Assessing Learning Outcomes in Rural Primary Schools: A Case Study of Eastern Rwanda",
      img: cardImg1,
    },
    {
      title:
        "Barriers to School Attendance among Adolescent Girls in Low-Income Communities.",
      img: cardImg2,
    },
    {
      title:
        "The Impact of School Meals Program on Student Performance and Attendance.",
      img: cardImg1,
    },
    {
      title:
        "Teacher Training and Classroom Effectiveness: An Evaluation of Capacity-Building Interventions.",
      img: cardImg2,
    },
  ];

  return (
    <div className="education-page">
      <header className="page-header">
        <h1>[1] Education</h1>
        <p>We are a research and data analysis organization with the goal</p>
        <p>of generating actionable insights for educational improvement.</p>
      </header>

      <section className="education-content">
        <div className="education-content-container">
          <img
            src={mainEduImg}
            alt="Students in a classroom"
            className="main-content-image"
          />
          <p>
            Inclusion of Children with Disabilities In Mainstream Schools:
            Policy and General Practice Gaps in Rural Education Settings.
          </p>
        </div>
        <div className="articles-grid">
          {articles.map((article, index) => (
            <div className="article-card" key={index}>
              <img src={article.img} alt={article.title} />
              <div className="article-card-content">
                <p className="article-category">K-Hub Research Team | 2023</p>
                <h3>{article.title}</h3>
                <a href="#" className="full-report-link">
                  Full report &gt;
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Education;
