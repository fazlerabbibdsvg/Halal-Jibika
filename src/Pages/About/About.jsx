import React from 'react';
import './About.css'
import { Link } from 'react-router-dom';


const About = () => {
  return (
    <section className="about-us">
      <div className="about">
        <img src="img/girl.jpg" className="pic" alt="Girl" />
        <div className="text">
          <h2>Welcome to our Halal job portal</h2>
          <h3>Our Distinctive Offering</h3>

          <ul>
            <li><b>Halal Job Opportunities</b>: We specialize in curating a diverse range of job openings that comply with Islamic principles, ensuring that job seekers can explore opportunities that align with their religious beliefs. </li>
            <li><b>Ethical Employer Partnerships</b>: We collaborate with organizations that uphold ethical business practices and adhere to halal standards. This ensures that employers on our platform share a commitment to providing a work environment that respects Islamic values. </li>
          </ul>

          <div className="data">
            <Link to='/apply'>Apply Now</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About

