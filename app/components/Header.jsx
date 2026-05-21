'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

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
        <Link href="/">
          <img src="/images/effission-logo.png" alt="Effission Logo" className="logo-img" />
        </Link>
      </div>

      <nav className={`nav ${isMenuOpen ? 'mobile-active' : ''}`}>
        <ul className="nav-links">
          <li><Link href="/about" className="active">About</Link></li>
          <li><Link href="/services">Services</Link></li>
          <li><Link href="/#products">3D Configurator</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </nav>

      <div className="header-actions">
        <Link href="/contact" className="btn btn-primary" style={{ padding: '10px 20px', fontSize: '14px' }}>
          Request Demo
        </Link>
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
