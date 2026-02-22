import React from "react";
import "../styles/hero.modal.css";

const Hero = ({ id }) => {
  return (
    <section  id={id}  className="hero-section">
      <div className="container">
        <div className="col-lg-12  hero-row">
          <div className="col-lg-6 col-md-12 hero-left">
            <h1 className="hero-headline">
              Empowering Visionaries with{" "}
              <span className="gradient-text">
                Cutting-Edge Digital Solutions
              </span>
            </h1>

            <p className="hero-subheadline">
              We design transformative websites, mobile apps, and
              enterprise-grade software that drive innovation, accelerate
              growth, and deliver measurable ROI.
            </p>

            <a href="tel:+916392734615" className="btn hero-btn">
              Connect with Our Experts
            </a>

            <p className="hero-trust">
              Trusted by visionary startups, ambitious SMEs, and global
              enterprises.
            </p>
          </div>

          <div className="col-lg-6 col-md-12 text-center hero-right">
            <img
              src="Banner.png"
              alt="Digital Solutions"
              className="hero-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
