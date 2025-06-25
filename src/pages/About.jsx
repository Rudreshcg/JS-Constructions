import React from "react";
import "./About.css";

const aboutImg =
  "https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&w=600&h=400&fit=crop"; // fallback, not used below

const heroImg =
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=compress&w=600&h=400&fit=crop"; // fallback, not used below

const mainImg =
  "https://images.githubusercontent.com/your-uploaded-image-url.jpg"; // Replace with your actual uploaded image URL

const AboutUs = () => {
  return (
    <section className="aboutus-hero-section">
      <div className="aboutus-hero-container">
        {/* Left: Text Content */}
        <div className="aboutus-hero-text">
          <h2 className="aboutus-hero-welcome">WELCOME TO</h2>
          <h1 className="aboutus-hero-title">JS CONSTRUCTIONS</h1>
          <p className="aboutus-hero-highlight">
            JS CONSTRUCTIONS BUILDS WITH PURPOSE — DELIVERING STRONG, RELIABLE, AND LASTING STRUCTURES THAT TURN VISIONS INTO REALITY.</p>
          <p className="aboutus-hero-desc">
           JS Constructions builds with purpose — delivering strong, reliable, and lasting structures that turn visions into reality.</p>
          <a href="#readmore" className="aboutus-hero-btn">READ MORE &mdash;</a>
        </div>
        {/* Right: Media (Image) */}
        <div className="aboutus-hero-media">
          <img
            src="https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&w=600&h=400&fit=crop"
            alt="Engineers reviewing plans at construction site"
            className="aboutus-hero-image"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;