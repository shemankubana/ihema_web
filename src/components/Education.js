import React from 'react';
import '../styles/Education.css';

// Import images for the education page
// Assuming you have these in your assets folder
import mainEduImg from '../assets/images/Education.png'; // Replace with the actual large image
import cardImg1 from '../assets/images/Health.png'; // Replace with actual card images
import cardImg2 from '../assets/images/Society.png'; // Replace with actual card images
// ... import others

const Education = () => {
  // Create an array of article data to avoid repetition
  const articles = [
    { title: "Assessing Learning Outcomes in Rural Primary Schools: A Case Study of Eastern Rwanda", img: cardImg1 },
    { title: "Barriers to School Attendance among Adolescent Girls in Low-Income Communities.", img: cardImg2 },
    { title: "The Impact of School Meals Program on Student Performance and Attendance.", img: cardImg1 },
    { title: "Teacher Training and Classroom Effectiveness: An Evaluation of Capacity-Building Interventions.", img: cardImg2 },
    // ... add all 9 articles
  ];

  return (
    <div className="education-page">
      <header className="page-header">
        <h1>Education</h1>
        <p>We are a research and data analysis organization with the goal of generating actionable insights for educational improvement.</p>
      </header>

      <section className="education-content">
        <h2>Inclusion of Children with Disabilities In Mainstream Schools: Policy and General Practice Gaps in Rural Education Settings.</h2>
        <img src={mainEduImg} alt="Students in a classroom" className="main-content-image" />
        
        <div className="articles-grid">
          {articles.map((article, index) => (
            <div className="article-card" key={index}>
              <img src={article.img} alt={article.title} />
              <div className="article-card-content">
                <p className="article-category">K-Hub Research Team | 2023</p>
                <h3>{article.title}</h3>
                <a href="#" className="full-report-link">Full report &gt;</a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Education;