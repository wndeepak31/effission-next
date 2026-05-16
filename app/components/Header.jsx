'use client';

import { useState, useEffect } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="logo">
        <img src="/images/effission-logo.png" alt="Effission Logo" className="logo-img" />
      </div>

      <nav className={`nav ${isMenuOpen ? 'mobile-active' : ''}`}>
        <ul className="nav-links">
          <li><a href="#about" className="active">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#products">3D Configurator</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <div className="header-actions">
        <a href="#contact" className="btn btn-primary" style={{ padding: '10px 20px', fontSize: '14px' }}>
          Request Demo
        </a>
        <button
          className={`menu-btn ${isMenuOpen ? 'active' : ''}`}
          aria-label="Menu"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className="hamburger">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
      </div>
    </header>
  );
}
