import React from 'react';
import SEO from '../components/SEO';
import Contact from '../components/Contact';

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "name": "Contact JS Constructions",
  "url": "https://www.jsconstructions22.in/contact",
  "description": "Get in touch with JS Constructions for residential and commercial construction projects across Bangalore and Karnataka.",
  "mainEntity": {
    "@type": ["GeneralContractor", "LocalBusiness"],
    "name": "JS Constructions",
    "telephone": "+91-7676534573",
    "email": "constructionsjs22@gmail.com",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "09:00",
        "closes": "19:00"
      }
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Ullal Main Rd, Annapurneshwari Layout, Jnananjyothinagar, Railway Layout, Jnana Ganga Nagar",
      "addressLocality": "Bengaluru",
      "addressRegion": "Karnataka",
      "postalCode": "560056",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 12.9629,
      "longitude": 77.5028
    },
    "areaServed": ["Bengaluru", "Bangalore", "Kunigal", "Channapatna", "Mandya", "Belagavi", "Tumakuru", "Ramanagara", "Karnataka"]
  }
};

const ContactPage = () => {
  return (
    <div>
      <SEO
        title="Contact JS Constructions | Building Contractors in Bangalore & Karnataka"
        description="Contact JS Constructions in Bengaluru. Call +91 7676534573 for free site visits, consultations, and turnkey construction estimates across Bangalore and Karnataka."
        canonical="https://www.jsconstructions22.in/contact"
        keywords="contact JS Constructions, building contractors Bangalore phone number, construction company Ullal Bengaluru, house builders Karnataka quote"
        breadcrumbs={[
          { name: 'Home', item: '/' },
          { name: 'Contact', item: '/contact' }
        ]}
        schema={contactSchema}
      />
      {/* Page Hero Banner */}
      <div className="page-hero">
        <div className="page-hero-overlay" style={{ backgroundImage: 'url(/assets/hero-premium.webp)' }}></div>
        <div className="container">
          <h1>Contact <span>JS Constructions</span></h1>
          <p>Let's Discuss Your Dream Project in Bangalore or Anywhere in Karnataka</p>
        </div>
      </div>

      {/* Contact Section */}
      <Contact />
    </div>
  );
};

export default ContactPage;
