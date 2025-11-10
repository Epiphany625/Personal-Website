import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NaviBar.css';

const NaviBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="nav-bar glass-panel">
      <div className="nav-brand">
        <Link to="/" className="nav-name" onClick={closeMenu}>
          xinyangxu<span className="nav-dot">.com</span>
        </Link>
        <span className="nav-status">Creativity × Computer Science</span>
      </div>
      <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
        <li><Link to="/" onClick={closeMenu}>Home</Link></li>
        <li><Link to="/projects" onClick={closeMenu}>Projects</Link></li>
        <li><Link to="/hobbies" onClick={closeMenu}>Hobbies</Link></li>
        <li><Link to="/experience" onClick={closeMenu}>Experience</Link></li>
        <li><Link to="/education" onClick={closeMenu}>Education</Link></li>
      </ul>
      <div className="nav-indicator">
        <span className="nav-indicator-dot" />
        shipping ideas
      </div>
      <button className="hamburger" onClick={toggleMenu} aria-label="Toggle navigation">
        <span />
        <span />
        <span />
      </button>
    </nav>
  );
};

export default NaviBar;
