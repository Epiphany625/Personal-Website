import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NaviBar.css';

const NaviBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="nav-bar">
      <div className="nav-name">Xinyang Xu</div>
      <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
        <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
        <li><Link to="/projects" onClick={() => setMenuOpen(false)}>Projects</Link></li>
        <li><Link to="/hobbies" onClick={() => setMenuOpen(false)}>Hobbies</Link></li>
        <li><Link to="/experience" onClick={() => setMenuOpen(false)}>Experience</Link></li>
        <li><Link to="/education" onClick={() => setMenuOpen(false)}>Education</Link></li>
      </ul>
      <div className="hamburger" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default NaviBar;
