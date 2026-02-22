import React from "react";
import "../styles/solutions.modal.css";

const Solutions = ({id}) => {
  const industries = [
    {
      title: "Healthcare",
      description:
        "We build websites that inspire trust and simplify patient interactions. Features include appointment booking, service pages, and responsive design for mobile users.",
      result:
        "Improved patient engagement, easier appointment scheduling, and a professional online presence.",
    },
    {
      title: "Education",
      description:
        "Our education-focused websites help schools and online learning platforms connect with students and parents. Includes course catalogs, event calendars, student portals, and interactive content.",
      result:
        "Increased student enrollment, streamlined communication, and enhanced learning experience.",
    },
    {
      title: "Retail & E-commerce",
      description:
        "We develop scalable e-commerce websites for retailers. Features include product catalog, inventory management, secure payments, and mobile-first design.",
      result:
        "Higher sales conversions, automated operations, and improved customer retention.",
    },
    {
      title: "Finance & Banking",
      description:
        "Websites for financial institutions are secure and reliable. We include account management portals, financial tools, secure forms, and regulatory compliance.",
      result:
        "Enhanced client trust, secure digital transactions, and better customer support.",
    },
    {
      title: "Startups & Tech Companies",
      description:
        "We help startups build modern websites that highlight products and generate leads. Features include product showcase, lead capture forms, blog sections, and scalable architecture.",
      result:
        "Strong brand presence, effective lead generation, and scalable digital infrastructure.",
    },
  ];

  return (
    <section id={id} className="solutions-section">
      <div className="solutions-container">
        <h2 className="solutions-title">Industry-Specific Solutions</h2>
        <p className="solutions-intro">
          We create custom websites tailored to the unique needs of your industry, solving business challenges while providing an engaging user experience.
        </p>

        <div className="solutions-grid">
          {industries.map((industry, index) => (
            <div key={index} className="solution-card">
              <h3>{industry.title}</h3>
              <p className="solution-desc">{industry.description}</p>
              <p className="solution-result"><strong>Result:</strong> {industry.result}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;