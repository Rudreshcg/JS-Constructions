import React from "react";
import "./Contact.css";

const contactImg =
  "https://images.pexels.com/photos/8961065/pexels-photo-8961065.jpeg?auto=compress&w=600&h=400&fit=crop";

const Contact = () => {
  return (
    <div className="contact-modern-main">
      <div className="contact-modern-container">
        {/* Left: Image */}
        <div className="contact-modern-image-wrap">
          <img src={contactImg} alt="Construction Site" className="contact-modern-image" />
        </div>
        {/* Right: Info */}
        <div className="contact-modern-info-wrap contact-modern-info-blue">
          <h1 className="contact-modern-title">Contact Us</h1>
          <div className="contact-modern-info-list">
            <div className="contact-modern-info-item">
              <span className="contact-modern-info-icon contact-modern-info-yellow">
                <i className="fas fa-map-marker-alt"></i>
              </span>
              <div>
                <div className="contact-modern-info-label contact-modern-info-yellow">Address</div>
                <div className="contact-modern-info-value contact-modern-info-light">
                  XYZ Construction<br />
                  123 Building Lane, Suite 456 City, State, ZIP Code
                </div>
              </div>
            </div>
            <div className="contact-modern-info-item">
              <span className="contact-modern-info-icon contact-modern-info-yellow">
                <i className="fas fa-envelope"></i>
              </span>
              <div>
                <div className="contact-modern-info-label contact-modern-info-yellow">Email</div>
                <div className="contact-modern-info-value contact-modern-info-light">
                  info@xyzconstruction.com
                </div>
              </div>
            </div>
            <div className="contact-modern-info-item">
              <span className="contact-modern-info-icon contact-modern-info-yellow">
                <i className="fas fa-globe"></i>
              </span>
              <div>
                <div className="contact-modern-info-label contact-modern-info-yellow">Website</div>
                <div className="contact-modern-info-value contact-modern-info-light">
                  www.xyzconstruction.com
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;