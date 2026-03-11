import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="container footer-grid">
        <div className="footer-about">
          <div className="footer-logo-container">
            <img src="/assets/logo.jpg" alt="JS Constructions" className="footer-logo-img" />
          </div>
          <p className="footer-text">
            Leading the industry with excellence in construction and engineering. 
            We build with passion and precision.
          </p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p>Ullal Main Rd, Annapurneshwari Layout,</p>
          <p>Jnananjyothinagar, Railway Layout, Jnana Ganga Nagar,</p>
          <p>Bengaluru, Karnataka 560056</p>
          <p className="footer-phone">(+91) 7676534573</p>
          <p>info@jsconstructions.com</p>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} JS Constructions. All Rights Reserved.</p>
        </div>
      </div>

      <style jsx>{`
        .footer {
          background: var(--primary);
          color: white;
          padding: 80px 0 0;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1.5fr;
          gap: 4rem;
          padding-bottom: 60px;
        }

        .footer-logo-img {
          height: 110px;
          margin-bottom: 1.5rem;
        }

        .footer-text {
          opacity: 0.7;
          max-width: 300px;
        }

        .footer-links h3, .footer-contact h3 {
          margin-bottom: 1.5rem;
          font-size: 1.2rem;
          color: var(--accent);
        }

        .footer-links ul {
          list-style: none;
        }

        .footer-links li {
          margin-bottom: 0.8rem;
        }

        .footer-links a {
          opacity: 0.7;
        }

        .footer-links a:hover {
          opacity: 1;
          color: var(--accent);
          padding-left: 5px;
        }

        .footer-contact p {
          opacity: 0.7;
          margin-bottom: 0.5rem;
        }

        .footer-phone {
          font-weight: 700;
          color: white !important;
          opacity: 1 !important;
          margin-top: 1rem;
        }

        .footer-bottom {
          border-top: 1px solid rgba(255,255,255,0.1);
          padding: 2rem 0;
          text-align: center;
          font-size: 0.9rem;
          opacity: 0.5;
        }

        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
            text-align: center;
          }
          .footer-text { max-width: 100%; }
          .footer-logo-img { height: 80px; }
          .footer-contact p { text-align: center; }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
