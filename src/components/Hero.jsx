import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="hero" id="home" aria-labelledby="hero-title">
      <div className="hero-overlay"></div>
      <div className="container hero-container">
        <div className="hero-content">
          <span className="hero-tag">Premier Construction Company · Bengaluru &amp; Karnataka</span>
          <h1 className="hero-title" id="hero-title">
            <span>Building Landmarks Across</span>
            <span className="highlight">Bangalore &amp; Karnataka.</span>
          </h1>
          <p className="hero-subtitle">
            Leading turnkey residential and commercial construction contractors. From luxury villas and duplex homes in Bengaluru to healthcare facilities and commercial venues across Karnataka, we engineer quality from blueprint to handover.
          </p>
          <div className="hero-btns">
            <button className="btn-primary" onClick={() => navigate('/projects')}>EXPLORE OUR PROJECTS</button>
            <button className="btn-outline" onClick={() => navigate('/contact')}>GET FREE ESTIMATE</button>
          </div>
          <div className="hero-trust-badges">
            <span className="badge-item">✓ BBMP &amp; BDA Approval Support</span>
            <span className="badge-item">✓ 100% Quality Certified Materials</span>
            <span className="badge-item">✓ On-Time Handover Guarantee</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
