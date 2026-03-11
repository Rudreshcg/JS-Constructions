import React from 'react';
import SEO from '../components/SEO';
import Contact from '../components/Contact';

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "name": "Contact JS Constructions",
  "url": "https://www.jsconstructions22.in/contact",
  "description": "Get in touch with JS Constructions for your residential or commercial construction projects in Bengaluru.",
  "mainEntity": {
    "@type": "LocalBusiness",
    "name": "JS Constructions",
    "telephone": "+91-7676534573",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Bengaluru",
      "addressRegion": "Karnataka",
      "addressCountry": "IN"
    }
  }
};

const ContactPage = () => {
  return (
    <div>
      <SEO
        title="Contact Us | JS Constructions Bengaluru"
        description="Get in touch with JS Constructions. Call us at +91 7676534573 or send a message. We're ready to bring your construction vision to life in Bengaluru."
        canonical="https://www.jsconstructions22.in/contact"
        schema={contactSchema}
      />
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
