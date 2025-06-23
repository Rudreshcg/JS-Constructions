import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "./Logo";
import { FiMenu } from "react-icons/fi";
// import "./Header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className={`main-header-premium floating-header${menuOpen ? ' menu-open' : ''}`}>
      <div className="container header-container-premium">
        <Logo />
        <div className="header-actions">
          <div className="header-contact">
            <span className="contact-icon">📞</span>
            <a href="tel:+919606125333" className="contact-number">(+91) 096061 25333</a>
          </div>
          <button
            className={`hamburger-btn${menuOpen ? ' open' : ''}`}
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle navigation"
          >
            <FiMenu size={32} color="#000" />
          </button>
        </div>
        <nav className={`nav-mobile${menuOpen ? ' open' : ''}`}> 
          <Link to="/about" className={location.pathname === "/about" ? "active" : ""} onClick={() => setMenuOpen(false)}>About Us</Link>
          <Link to="/service" className={location.pathname === "/service" ? "active" : ""} onClick={() => setMenuOpen(false)}>Services</Link>
          <Link to="/contact" className={location.pathname === "/contact" ? "active" : ""} onClick={() => setMenuOpen(false)}>Contact Us</Link>
        </nav>
        {menuOpen && <div className="nav-overlay" onClick={() => setMenuOpen(false)}></div>}
      </div>
    </header>
  );
}

export default Header;