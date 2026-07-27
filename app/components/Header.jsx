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
          <li><Link href="/solutions" className="nav-item">Solutions</Link></li>
          <li><Link href="/platform" className="nav-item">Platform</Link></li>
          <li><Link href="/ai-studio" className="nav-item">AI Studio</Link></li>
          <li><Link href="/customers" className="nav-item">Customers</Link></li>
          <li><Link href="/company" className="nav-item" onClick={() => setIsMenuOpen(false)}>Company</Link></li>
        </ul>
        <div className="mobile-cta" style={{ marginTop: '40px', display: 'none' }}>
          <Link href="/contact" className="btn btn-gold" onClick={() => setIsMenuOpen(false)}>
            Book a Demo
          </Link>
        </div>
      </nav>

      <div className="header-actions">
        <Link href="/contact" className="btn btn-outline-gold btn-sm">
          Book a Demo <span className="arrow" style={{ color: 'var(--accent-gold)' }}>→</span>
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
