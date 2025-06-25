import React from "react";
import "./Foot.css";
import { Link } from "react-router-dom";

function Foot() {
  return (
    <footer className="footer-premium">
      <div className="footer-container">
        <div className="footer-brand">
          <span className="footer-logo">JS Constructions</span>
          <span className="footer-copy">&copy; {new Date().getFullYear()} JS Constructions. All rights reserved.</span>
        </div>
        <nav className="footer-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/service">Services</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </div>
    </footer>
  );
}

export default Foot; 