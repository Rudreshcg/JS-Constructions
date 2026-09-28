import React from 'react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="hero" id="home" style={{ backgroundImage: 'url(/assets/hero-bg-v2.png)' }}>
      <div className="hero-overlay"></div>
      <div className="container hero-container">
        <div className="hero-content">
          <span className="hero-tag float-animation">A NEW STANDARD OF LUXURY</span>
          <h1 className="hero-title">
            Crafting Spaces of <span className="highlight">Distinction</span>
          </h1>
          <p className="hero-subtitle">
            Bespoke architecture and masterful engineering. We create legacy homes and commercial spaces defined by uncompromising quality and timeless elegance.
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
          position: relative;
          display: flex;
          align-items: center;
          color: white;
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
        }

        .hero-overlay {
          position: absolute;
          top: 0; left: 0; width: 100%; height: 100%;
          background: linear-gradient(to right, rgba(12, 18, 43, 0.9), rgba(12, 18, 43, 0.4));
          z-index: 1;
        }

        .hero-content {
          position: relative;
          z-index: 2;
          max-width: 800px;
        }

        .hero-subtitle {
          color: rgba(255, 255, 255, 0.8);
          font-size: 1.15rem;
          line-height: 1.8;
          font-weight: 300;
          margin-bottom: 2.5rem;
          max-width: 600px;
        }

        .hero-title {
          font-size: 4.5rem;
          margin-bottom: 1.5rem;
          animation: fadeInUp 1s ease;
        }

        .highlight {
          color: var(--accent);
        }

        .hero-tag {
          font-size: 0.8rem;
          letter-spacing: 4px;
          color: var(--accent);
          text-transform: uppercase;
          margin-bottom: 1.5rem;
          display: block;
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
