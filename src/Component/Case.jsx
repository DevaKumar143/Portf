import React from "react";
import "../styles/case.modal.css";

const Case = () => {
  return (
    <section className="case-section">
      <div className="case-container">
        <h2 className="case-title">Case Study</h2>

        <div className="case-card">
          <h3 className="project-title">
            Luxury Cooling Service – HVAC & Air Conditioning Website
          </h3>

          <p className="project-link">
            Website: 
            <a 
              href="https://luxurycoolingservice.in/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              luxurycoolingservice.in
            </a>
          </p>

          <div className="case-block">
            <h4>Project Overview</h4>
            <p>
              Developed a modern, responsive business website for an HVAC
              service provider to establish a strong online presence and
              improve customer lead generation.
            </p>
          </div>

          <div className="case-block">
            <h4>Problem</h4>
            <ul>
              <li>No professional digital presence</li>
              <li>Limited online visibility</li>
              <li>No structured enquiry system</li>
            </ul>
          </div>

          <div className="case-block">
            <h4>Solution</h4>
            <ul>
              <li>Built responsive UI using React.js</li>
              <li>Structured service pages for clarity</li>
              <li>Integrated enquiry/contact form</li>
              <li>Optimized for performance & SEO</li>
            </ul>
          </div>

          <div className="case-block">
            <h4>Technologies Used</h4>
            <div className="tech-stack">
              <span>React.js</span>
              <span>JavaScript (ES6+)</span>
              <span>HTML5</span>
              <span>CSS3</span>
              <span>Responsive Design</span>
            </div>
          </div>

          <div className="case-block">
            <h4>Result</h4>
            <p>
              Successfully delivered a professional and conversion-focused
              website that improved brand credibility and enabled direct
              customer enquiries.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Case;