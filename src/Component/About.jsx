

import React from "react";
import "../styles/about.modal.css";

const About = ({ id }) => {
  return (
    <section id={id} className="about-section">
      <div className="container">
        <div className="about-grid">
          <div className="about-left">
            <span className="about-tag">ABOUT OUR STUDIO</span>
            <h2 className="about-heading">
              Building <span>scalable digital products</span> for modern businesses.
            </h2>
            <p className="about-text">
              We are a passionate web development studio transforming ideas
              into powerful digital platforms — from sleek marketing websites
              to enterprise-grade applications.
            </p>
            <a href="#contact" className="about-btn">
              Start Your Project
            </a>
          </div>

          <div className="about-right">
            <img src="https://plus.unsplash.com/premium_photo-1661877737564-3dfd7282efcb?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="About" />
          </div>

        </div>
        <div className="about-stats">
          <div className="stat-card">
            <h3>120+</h3>
            <p>Projects Delivered</p>
          </div>
          <div className="stat-card">
            <h3>85+</h3>
            <p>Happy Clients</p>
          </div>

          <div className="stat-card">
            <h3>5+</h3>
            <p>Years Experience</p>
          </div>

          <div className="stat-card">
            <h3>99%</h3>
            <p>Client Satisfaction</p>
          </div>

        </div>

        {/* Pillars */}
        <div className="about-features">

          <div className="feature-card">
            <h4>Craft</h4>
            <p>
              Every pixel intentional. Every interaction designed to deliver
              exceptional digital experiences.
            </p>
          </div>

          <div className="feature-card">
            <h4>Scale</h4>
            <p>
              Our architecture grows with your business — from startup MVPs
              to enterprise platforms.
            </p>
          </div>

          <div className="feature-card">
            <h4>Trust</h4>
            <p>
              Transparent processes, reliable delivery, and full ownership
              of your product.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;