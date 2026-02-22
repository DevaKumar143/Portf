import React from "react";
import "../styles/testnomial.modal.css";

const Testonomial = ({id}) => {
  const testimonials = [
    {
      name: "Mahendra ",
      role: "Owner, Luxury Cooling Service",
      feedback:
        "Working with this team was seamless! They understood our needs, delivered a professional website on time, and helped us generate more online leads. Highly recommended!",
      website: "https://luxurycoolingservice.in/",
      rating: 5,
    },
    // {
    //   name: "Sarah Malik",
    //   role: "Digital Consultant",
    //   feedback:
    //     "I loved how my personal brand website turned out! The design is modern, responsive, and user-friendly. The team was responsive and delivered exactly what I envisioned.",
    //   rating: 4,
    // },
    // {
    //   name: "Elite Interior Designs",
    //   role: "Founder",
    //   feedback:
    //     "Our portfolio website now reflects the professionalism of our work. The attention to detail and clear communication made the entire process smooth and enjoyable.",
    //   rating: 5,
    // },
    // {
    //   name: "QuickFix IT Services",
    //   role: "Startup Founder",
    //   feedback:
    //     "They created a fast, clean landing page for our startup. The website helped us generate leads quickly and gave us a strong online presence from day one.",
    //   rating: 4,
    // },
    // {
    //   name: "Bella’s Handmade Crafts",
    //   role: "Small Business Owner",
    //   feedback:
    //     "The e-commerce website they built for us is beautiful and easy to manage. Our online sales increased significantly, and our customers love the smooth shopping experience.",
    //   rating: 5,
    // },
  ];

  // Function to render stars
  const renderStars = (rating) => {
    const totalStars = 5;
    let stars = [];
    for (let i = 1; i <= totalStars; i++) {
      if (i <= rating) {
        stars.push(<span key={i} className="star filled">★</span>);
      } else {
        stars.push(<span key={i} className="star">★</span>);
      }
    }
    return stars;
  };

  return (
    <section id={id} className="testimonial-section">
      <div className="testimonial-container">
        <h2 className="testimonial-title">Client </h2>
        <p className="testimonial-intro">
          Here's what our clients say about working with us. Their feedback
          reflects our commitment to quality and results.
        </p>

        <div className="testimonial-grid">
          {testimonials.map((item, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-stars">{renderStars(item.rating)}</div>
              <p className="testimonial-feedback">"{item.feedback}"</p>
              <p className="testimonial-name">{item.name}</p>
              <p className="testimonial-role">{item.role}</p>
              {item.website && (
                <a
                  href={item.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="testimonial-website"
                >
                  Visit Website
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testonomial;