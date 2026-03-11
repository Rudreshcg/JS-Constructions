import React from 'react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="hero" id="home" style={{ backgroundImage: 'url(/assets/hero-bg-v2.png)' }}>
      <div className="hero-overlay"></div>
      <div className="container hero-container">
        <div className="hero-content">
          <span className="hero-tag float-animation">EXCELLENCE IN CONSTRUCTION</span>
          <h1 className="hero-title">
            We Build Your <span className="highlight">Future</span> <br /> 
            With Precision.
          </h1>
          <p className="hero-subtitle">
            Leading the way in modern architecture and engineering. 
            From luxury villas to massive industrial projects, we deliver perfection.
          </p>
          <div className="hero-btns">
            <button className="btn-primary" onClick={() => navigate('/projects')}>OUR PROJECTS</button>
            <button className="btn-outline" onClick={() => navigate('/contact')}>CONTACT US</button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero {
          height: 100vh;
          /* Background image is now set via inline style for dynamic updates */
          /* background: url('/assets/hero-bg.png') center/cover no-repeat; */
          position: relative;
          display: flex;
          align-items: center;
          color: white;
        }

        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(to right, rgba(10, 29, 55, 0.8), rgba(10, 29, 55, 0.4));
          z-index: 1;
        }

        .hero-content {
          position: relative;
          z-index: 2;
          max-width: 800px;
        }

        .hero-subtitle {
          color: var(--accent);
          letter-spacing: 4px;
          margin-bottom: 1rem;
          font-weight: 600;
        }

        .hero-title {
          font-size: 4.5rem;
          margin-bottom: 1.5rem;
          animation: fadeInUp 1s ease;
        }

        .highlight {
          color: var(--accent);
        }

        .hero-description {
          font-size: 1.2rem;
          margin-bottom: 2.5rem;
          opacity: 0.9;
          max-width: 600px;
        }

        .hero-btns {
          display: flex;
          gap: 1.5rem;
        }

        .btn-outline-white {
          border: 2px solid white;
          color: white;
          padding: 0.8rem 2rem;
          border-radius: 4px;
          font-weight: 600;
        }

        .btn-outline-white:hover {
          background: white;
          color: var(--primary);
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 768px) {
          .hero {
            min-height: 100svh;
            background-position: center;
          }
          .hero-content {
            text-align: center;
          }
          .hero-title {
            font-size: 2.5rem;
          }
          .hero-description {
            font-size: 1rem;
          }
          .hero-tag {
            font-size: 0.75rem;
            letter-spacing: 2px;
          }
          .hero-btns {
            justify-content: center;
            flex-wrap: wrap;
          }
        }

        @media (max-width: 480px) {
          .hero-title {
            font-size: 2rem;
          }
          .hero-btns {
            flex-direction: column;
            align-items: stretch;
          }
          .hero-btns button {
            width: 100%;
            text-align: center;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
