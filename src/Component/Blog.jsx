import React from "react";
import "../styles/blog.modal.css";

// Example blog images (replace with your own screenshots)
import blog1 from "../assets/blog1.png";
import blog2 from "../assets/blog2.png";
import blog3 from "../assets/blog3.png";

const Blog = ({id}) => {
  const blogPosts = [
    {
      title: "Top Web Design Trends in 2026",
      description:
        "Discover the latest web design trends that will dominate 2026 and how to make your website stand out.",
      image: blog1,
    },
    {
      title: "How React.js Improves Web App Performance",
      description:
        "Learn why React.js is one of the best choices for building fast, scalable, and responsive web applications.",
      image: blog2,
    },
    {
      title: "E-commerce Optimization Tips for Startups",
      description:
        "Boost your online sales with these actionable e-commerce optimization strategies for small businesses.",
      image: blog3,
    },
  ];

  return (
    <section id={id} className="blog-section">
      <div className="blog-container">
        <h2 className="blog-title">Latest Insights & Articles</h2>
        <p className="blog-intro">
          Stay updated with the latest trends, tips, and insights in web development, design, and digital marketing.
        </p>

        <div className="blog-grid">
          {blogPosts.map((post, index) => (
            <div key={index} className="blog-card">
              <img src={post.image} alt={post.title} />
              <div className="blog-content">
                <h3>{post.title}</h3>
                <p>{post.description}</p>
                <button className="blog-btn">Read More</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;