import React from 'react';
import Contact from '../components/Contact';

const ContactPage = () => {
  return (
    <div>
      {/* Page Hero Banner */}
      <div className="page-hero">
        <div className="page-hero-overlay" style={{ backgroundImage: 'url(/assets/hero-bg-v2.png)' }}></div>
        <div className="container">
          <h1>Contact <span>Us</span></h1>
          <p>We'd love to hear from you. Let's build something great together.</p>
        </div>
      </div>

      {/* Contact Section */}
      <Contact />
    </div>
  );
};

export default ContactPage;
