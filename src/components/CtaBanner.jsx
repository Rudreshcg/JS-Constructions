import React from 'react';
import { useNavigate } from 'react-router-dom';

const CtaBanner = () => {
  const navigate = useNavigate();

  return (
    <section className="cta-section">
      <div className="cta-bg"></div>
      <div className="container cta-container">
        <div className="cta-text">
          <h2>Ready to Build Your <span>Dream Home?</span></h2>
          <p>Let's turn your vision into a landmark. Talk to our experts today — free consultation, no commitment.</p>
        </div>
        <div className="cta-actions">
          <button className="cta-btn-primary" onClick={() => navigate('/contact')}>
            Get Free Consultation
          </button>
          <a href="tel:+917676534573" className="cta-btn-outline">
            📞 Call Us Now
          </a>
        </div>
      </div>

      <style jsx>{`
        .cta-section {
          position: relative;
          padding: 80px 0;
          overflow: hidden;
          background: linear-gradient(135deg, #0A1D37 0%, #1a3a6b 50%, #0A1D37 100%);
        }

        .cta-bg {
          position: absolute;
          inset: 0;
          background: 
            radial-gradient(circle at 20% 50%, rgba(238,119,35,0.12) 0%, transparent 50%),
            radial-gradient(circle at 80% 50%, rgba(238,119,35,0.08) 0%, transparent 50%);
        }

        .cta-container {
          position: relative;
          z-index: 1;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 3rem;
        }

        .cta-text h2 {
          font-size: 2.5rem;
          color: white;
          margin-bottom: 1rem;
          line-height: 1.2;
        }

        .cta-text h2 span { color: #ee7723; }

        .cta-text p {
          color: rgba(255,255,255,0.7);
          font-size: 1rem;
          max-width: 500px;
        }

        .cta-actions {
          display: flex;
          gap: 1.2rem;
          flex-shrink: 0;
          flex-wrap: wrap;
        }

        .cta-btn-primary {
          background: #ee7723;
          color: #0A1D37;
          padding: 1rem 2rem;
          border-radius: 6px;
          font-weight: 700;
          font-size: 0.95rem;
          border: none;
          cursor: pointer;
          white-space: nowrap;
          transition: all 0.3s ease;
        }

        .cta-btn-primary:hover {
          background: white;
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(238,119,35,0.3);
        }

        .cta-btn-outline {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          border: 2px solid rgba(255,255,255,0.4);
          color: white;
          padding: 1rem 2rem;
          border-radius: 6px;
          font-weight: 600;
          font-size: 0.95rem;
          white-space: nowrap;
          transition: all 0.3s ease;
          text-decoration: none;
        }

        .cta-btn-outline:hover {
          border-color: white;
          background: rgba(255,255,255,0.1);
        }

        @media(max-width: 992px) {
          .cta-container { flex-direction: column; text-align: center; }
          .cta-text p { margin: 0 auto; }
          .cta-actions { justify-content: center; }
        }

        @media(max-width: 480px) {
          .cta-text h2 { font-size: 1.8rem; }
          .cta-btn-primary, .cta-btn-outline { padding: 0.9rem 1.5rem; font-size: 0.9rem; }
        }
      `}</style>
    </section>
  );
};

export default CtaBanner;
