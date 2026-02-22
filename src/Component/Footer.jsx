import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import "../styles/footer.modal.css";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-about">
          <h2>Vishwakarma Tech Solutions</h2>
          <p>
            Empowering businesses with modern websites, web apps, and digital
            solutions that drive growth and innovation.
          </p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="#about">About Us</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#industry">Industries</a>
            </li>
            <li>
              <a href="#templates">Templates</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>

        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p>Email: deva.vishwakarma063@gmail.com</p>
          <p>Phone: +91 6392734615</p>
          <div className="footer-socials">
            <a
              href="https://www.facebook.com/yourpage"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a
              href="https://in.linkedin.com/in/deva-vishwakarma-ba08a824b"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
            <a
              href="https://twitter.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Vishwakarma Tech Solutions. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
