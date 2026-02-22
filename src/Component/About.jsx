import React from "react";
import "../styles/about.modal.css";

const About = ({ id }) => {
  const aboutCards = [
    {
      title: "Our Mission",
      description:
        "To design transformative digital experiences that help businesses scale, engage customers, and achieve measurable results.",
    },
    {
      title: "Our Vision",
      description:
        "To be the most trusted web development partner for startups, SMEs, and enterprises by delivering innovative, scalable, and high-quality solutions.",
    },
    {
      title: "Our Values",
      description:
        "Creativity, transparency, quality, and client-focused service. We believe in building long-term relationships through trust and excellence.",
    },
    {
      title: "Why Choose Us",
      description:
        "We combine creativity, technical expertise, and a client-first approach to deliver websites and web apps that not only look great but also drive results.",
    },
    {
      title: "Our Expertise",
      description:
        "React.js, Node.js, WordPress, E-commerce platforms, CMS integration, responsive web design, and performance optimization.",
    },
    {
      title: "Our Promise",
      description:
        "We promise timely delivery, top-notch quality, and 24/7 support. Your success is our mission, and your satisfaction is our priority.",
    },
  ];

  return (
    <section className="about-section" id={id}>
      <div className="about-container">
        <h2 className="about-title">About Us</h2>
        <p className="about-intro">
          We are a passionate web development startup focused on empowering businesses with cutting-edge digital solutions. From custom websites to interactive web applications, our mission is to deliver creativity, innovation, and measurable growth.
        </p>

        <div className="about-cards">
          {aboutCards.map((card, index) => (
            <div key={index} className="about-card">
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;