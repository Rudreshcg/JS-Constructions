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
          <span className="hero-tag">Residential + commercial · Bengaluru</span>
          <h1 className="hero-title" id="hero-title">
            <span>Built with care.</span>
            <span className="highlight">Built to last.</span>
          </h1>
          <p className="hero-subtitle">
            Thoughtful residential and commercial construction, with dependable workmanship from the first plan to the final handover.
          </p>
          <div className="hero-btns">
            <button className="btn-primary" onClick={() => navigate('/projects')}>EXPLORE OUR WORK</button>
            <button className="btn-outline" onClick={() => navigate('/contact')}>PLAN YOUR PROJECT</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
