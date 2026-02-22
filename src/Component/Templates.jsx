import React, { useState } from "react";
import "../styles/templates.modal.css";

const Templates = ({id}) => {
  const [filter, setFilter] = useState("All");

  const templates = [
    { title: "Luxury Cooling Service", category: "Corporate" },
    { title: "QuickFix IT Services", category: "Web App" },
    { title: "Bella’s Handmade Crafts", category: "E-commerce" },
    { title: "Elite Interior Designs", category: "Corporate" },
  ];

  const filteredTemplates =
    filter === "All"
      ? templates
      : templates.filter((item) => item.category === filter);

  return (
    <section id={id} className="templates-section">
      <div className="templates-container">
        <h2 className="templates-title">Website Templates / Demos</h2>
        <p className="templates-intro">
          Explore our ready-made website templates. Browse screenshots or descriptions to see the type of websites we create.
        </p>

        <div className="templates-filters">
          {["All", "E-commerce", "Corporate", "Web App"].map((cat) => (
            <button
              key={cat}
              className={filter === cat ? "active" : ""}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="templates-grid">
          {filteredTemplates.map((template, index) => (
            <div key={index} className="template-card">
              {template.image ? (
                <img src={template.image} alt={template.title} />
              ) : (
                <div className="template-placeholder">
                  <h3>{template.title}</h3>
                  <p>{template.category}</p>
                  <span>No Screenshot Available</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Templates;