import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="container footer-grid">
        <div className="footer-about">
          <div className="footer-logo-container">
            <img src="/assets/logo.jpg" alt="JS Constructions - Premier Construction Company in Bangalore & Karnataka" className="footer-logo-img" />
          </div>
          <p className="footer-text">
            Premier turnkey residential and commercial building contractors based in Bengaluru, serving clients across Karnataka since 2022.
          </p>
          <div className="footer-accreditations">
            <span>✓ Certified IS Quality</span>
            <span>✓ BBMP / BDA Assistance</span>
          </div>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/our-business">Our Business</Link></li>
            <li><Link to="/projects">Our Projects</Link></li>
            <li><Link to="/contact">Get Free Quote</Link></li>
          </ul>
        </div>

        <div className="footer-links">
          <h3>Core Services</h3>
          <ul>
            <li><Link to="/#services">Turnkey Villa Construction</Link></li>
            <li><Link to="/#services">Commercial Chowtries & Halls</Link></li>
            <li><Link to="/#services">Hospital Infrastructure</Link></li>
            <li><Link to="/#packages">Construction Cost Packages</Link></li>
            <li><Link to="/#service-areas">Karnataka Service Areas</Link></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h3>Contact &amp; Office</h3>
          <p>Ullal Main Rd, Annapurneshwari Layout,</p>
          <p>Jnananjyothinagar, Railway Layout, Jnana Ganga Nagar,</p>
          <p>Bengaluru, Karnataka 560056</p>
          <p className="footer-phone"><a href="tel:+917676534573" style={{ color: 'white' }}>(+91) 7676534573</a></p>
          <p><a href="mailto:constructionsjs22@gmail.com" style={{ color: 'rgba(255,255,255,0.7)', wordBreak: 'break-word' }}>constructionsjs22@gmail.com</a></p>
          <div className="social-links" style={{ marginTop: '1rem', display: 'flex', gap: '1rem' }}>
            <a href="https://www.instagram.com/jsconstructions.co/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" style={{ color: 'white', opacity: 0.8 }}><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg></a>
            <a href="https://wa.me/917676534573" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" style={{ color: 'white', opacity: 0.8 }}><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg></a>
          </div>
        </div>
      </div>

      <div className="footer-regions-ribbon">
        <div className="container">
          <p>
            <strong>Serving Bangalore Metro &amp; Karnataka Districts:</strong> Bengaluru Urban &amp; Rural (Ullal, Nagarbhavi, RR Nagar, Kengeri, Vijayanagar, Malleshwaram, Whitefield, Indiranagar, JP Nagar) · Tumakuru &amp; Kunigal · Ramanagara &amp; Channapatna · Mandya · Belagavi · Statewide Karnataka Turnkey Construction.
          </p>
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
          grid-template-columns: 1.8fr 1fr 1.2fr 1.5fr;
          gap: 3rem;
          padding-bottom: 50px;
        }

        .footer-logo-img {
          height: 100px;
          margin-bottom: 1.2rem;
        }

        .footer-text {
          opacity: 0.8;
          max-width: 320px;
          font-size: 0.92rem;
          line-height: 1.6;
          margin-bottom: 1.2rem;
        }

        .footer-accreditations {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }

        .footer-accreditations span {
          font-size: 0.78rem;
          color: var(--accent);
          font-weight: 600;
          letter-spacing: 0.5px;
        }

        .footer-links h3, .footer-contact h3 {
          margin-bottom: 1.5rem;
          font-size: 1.15rem;
          color: var(--accent);
        }

        .footer-links ul {
          list-style: none;
        }

        .footer-links li {
          margin-bottom: 0.75rem;
        }

        .footer-links a {
          opacity: 0.75;
          font-size: 0.92rem;
          transition: all 0.25s ease;
        }

        .footer-links a:hover {
          opacity: 1;
          color: var(--accent);
          padding-left: 5px;
        }

        .footer-contact p {
          opacity: 0.75;
          margin-bottom: 0.5rem;
          font-size: 0.92rem;
        }

        .footer-phone {
          font-weight: 700;
          color: white !important;
          opacity: 1 !important;
          margin-top: 1rem;
        }

        .footer-regions-ribbon {
          border-top: 1px solid rgba(255,255,255,0.08);
          background: rgba(0,0,0,0.15);
          padding: 1.5rem 0;
          font-size: 0.82rem;
          line-height: 1.6;
          color: rgba(255,255,255,0.65);
        }

        .footer-regions-ribbon strong {
          color: var(--accent);
        }

        .footer-bottom {
          border-top: 1px solid rgba(255,255,255,0.06);
          padding: 1.8rem 0;
          text-align: center;
          font-size: 0.85rem;
          opacity: 0.5;
        }

        @media (max-width: 1024px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: 2.5rem;
          }
        }

        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
            text-align: center;
          }
          .footer-text { max-width: 100%; }
          .footer-logo-img { height: 80px; margin: 0 auto 1rem; }
          .footer-contact p { text-align: center; }
          .footer-accreditations { align-items: center; }
          .social-links { justify-content: center; }
          .footer-regions-ribbon { text-align: center; }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
