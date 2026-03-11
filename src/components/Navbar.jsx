import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const isActive = (path) => location.pathname === path ? 'active-link' : '';

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''} ${menuOpen ? 'menu-open' : ''}`}>
      <div className="container nav-container">
        {/* Logo */}
        <Link to="/" className="logo">
          <img src="/assets/logo.jpg" alt="JS Constructions" className="logo-img" />
        </Link>

        {/* Desktop Nav Links */}
        <ul className="nav-links">
          <li><Link to="/" className={isActive('/')}>HOME</Link></li>
          <li><Link to="/about" className={isActive('/about')}>ABOUT US</Link></li>
          <li><Link to="/projects" className={isActive('/projects')}>PROJECTS</Link></li>
          <li><Link to="/contact" className={isActive('/contact')}>CONTACT US</Link></li>
        </ul>

        {/* Right Actions */}
        <div className="nav-actions">
          <a href="tel:+917676534573" className="phone-link">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
            <span>(+91) 7676534573</span>
          </a>

          {/* Hamburger */}
          <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <ul>
          <li><Link to="/" className={isActive('/')}>HOME</Link></li>
          <li><Link to="/about" className={isActive('/about')}>ABOUT US</Link></li>
          <li><Link to="/projects" className={isActive('/projects')}>PROJECTS</Link></li>
          <li><Link to="/contact" className={isActive('/contact')}>CONTACT US</Link></li>
          <li><a href="tel:+917676534573" className="mobile-phone">(+91) 7676534573</a></li>
        </ul>
      </div>

      <style jsx>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          padding: 1rem 0;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          background: transparent;
          color: white;
        }

        .navbar.scrolled,
        .navbar.menu-open {
          background: white;
          padding: 0.8rem 0;
          color: var(--primary);
          box-shadow: 0 4px 20px rgba(0,0,0,0.1);
        }

        .nav-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo { display: flex; align-items: center; }

        .logo-img {
          height: 70px;
          width: auto;
          object-fit: contain;
          transition: height 0.3s ease;
        }

        .navbar.scrolled .logo-img,
        .navbar.menu-open .logo-img {
          height: 55px;
        }

        /* Desktop nav */
        .nav-links {
          display: flex;
          gap: 2rem;
          list-style: none;
        }

        .nav-links a {
          font-size: 0.85rem;
          font-weight: 600;
          letter-spacing: 1px;
          transition: color 0.3s ease;
        }

        .nav-links a:hover {
          color: var(--accent);
        }

        .active-link {
          color: var(--accent) !important;
          border-bottom: 2px solid var(--accent);
          padding-bottom: 2px;
        }

        /* Right actions */
        .nav-actions {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }

        .phone-link {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.85rem;
          font-weight: 600;
          white-space: nowrap;
        }

        /* Hamburger */
        .hamburger {
          display: none;
          flex-direction: column;
          justify-content: space-between;
          width: 26px;
          height: 18px;
          background: transparent;
          border: none;
          cursor: pointer;
          padding: 0;
        }

        .hamburger span {
          display: block;
          height: 2px;
          width: 100%;
          background: white; /* white over dark hero */
          border-radius: 2px;
          transition: all 0.3s ease;
        }

        .navbar.scrolled .hamburger span,
        .navbar.menu-open .hamburger span {
          background: var(--primary); /* dark over white navbar */
        }

        /* Mobile menu */
        .mobile-menu {
          display: none;
          position: absolute;
          top: 100%;
          left: 0;
          width: 100%;
          background: white;
          padding: 0;
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.4s ease, padding 0.3s ease;
          border-top: 1px solid #eee;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        }

        .mobile-menu.open {
          max-height: 400px;
          padding: 1rem 0;
        }

        .mobile-menu ul {
          list-style: none;
          padding: 0 2rem;
        }

        .mobile-menu li {
          border-bottom: 1px solid #f0f0f0;
        }

        .mobile-menu li:last-child {
          border-bottom: none;
        }

        .mobile-menu a {
          display: block;
          padding: 1rem 0;
          color: var(--primary);
          font-weight: 600;
          font-size: 0.95rem;
          letter-spacing: 0.5px;
        }

        .mobile-menu a:hover,
        .mobile-menu .active-link {
          color: var(--accent);
        }

        .mobile-phone {
          color: var(--accent) !important;
        }

        /* Responsive */
        @media (max-width: 992px) {
          .nav-links {
            display: none;
          }
          .phone-link span {
            display: none;
          }
          .hamburger {
            display: flex;
          }
          .mobile-menu {
            display: block;
          }
        }

        @media (max-width: 480px) {
          .logo-img { height: 55px; }
          .navbar.scrolled .logo-img { height: 45px; }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
