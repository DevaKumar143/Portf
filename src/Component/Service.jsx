import React from 'react';
import "../styles/service.modal.css";

const Service = ({id}) => {
  return (
    <section id={id} className="services-section py-5">
      <div className="container">
        <h2 className="section-title text-center mb-5">
          Website Development Services
        </h2>
        <p className="section-subtitle text-center mb-5">
          We create powerful digital experiences with scalable, responsive, and custom-built websites and web applications.
        </p>

        <div className="row g-4">
          {/* Service Cards */}
          <div className="col-md-6 col-lg-4">
            <div className="service-card">
              <h4 className="service-title">Custom Website Design</h4>
              <p className="service-description">
                Tailor-made websites that reflect your brand identity and deliver a seamless user experience.
              </p>
            </div>
          </div>

          <div className="col-md-6 col-lg-4">
            <div className="service-card">
              <h4 className="service-title">Responsive Web Design</h4>
              <p className="service-description">
                Mobile-friendly designs that adapt perfectly to smartphones, tablets, and desktops.
              </p>
            </div>
          </div>

          <div className="col-md-6 col-lg-4">
            <div className="service-card">
              <h4 className="service-title">E-commerce Website Development</h4>
              <p className="service-description">
                Seamless online stores with payment integration, product management, and optimized for conversions.
              </p>
            </div>
          </div>


          <div className="col-md-6 col-lg-4">
            <div className="service-card">
              <h4 className="service-title">Web App Development</h4>
              <p className="service-description">
                Interactive web apps built with React, Angular, and Vue.js—fast, scalable, and secure.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Service;