import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="container footer-grid">
        <div className="footer-about">
          <div className="footer-logo-container">
            <img src="/assets/js%20logo%20round.png" alt="JS Constructions" className="footer-logo-img" />
          </div>
          <p className="footer-text">
            Leading the industry with excellence in construction and engineering. 
            We build with passion and precision.
          </p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/our-business">Our Business</Link></li>
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
          <div className="social-links" style={{ marginTop: '1rem', display: 'flex', gap: '1rem' }}>
            <a href="#" aria-label="Facebook" style={{ color: 'white', opacity: 0.8 }}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></a>
            <a href="#" aria-label="Instagram" style={{ color: 'white', opacity: 0.8 }}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg></a>
            <a href="#" aria-label="LinkedIn" style={{ color: 'white', opacity: 0.8 }}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg></a>
            <a href="#" aria-label="Twitter" style={{ color: 'white', opacity: 0.8 }}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4.01c-1 .49-1.98.689-3 .99-1.121-1.265-2.783-1.335-4.38-.737S11.977 6.323 12 8v1c-3.245.083-6.135-1.395-8-4 0 0-4.182 7.433 4 11-1.872 1.247-3.739 2.088-6 2 3.308 1.803 6.913 2.423 10.034 1.517 3.58-1.04 6.522-3.723 7.651-7.742a13.84 13.84 0 0 0 .497-3.753C20.18 7.773 21.692 5.25 22 4.009z"></path></svg></a>
          </div>
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
