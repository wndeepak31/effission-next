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

  const ChevronDown = () => (
    <svg width="10" height="6" viewBox="0 0 10 6" fill="none" style={{ marginLeft: '6px', opacity: 0.7 }}>
      <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="logo">
        <Link href="/">
          <img src="/images/effission-logo.png" alt="Effission Logo" className="logo-img" />
        </Link>
      </div>

      <nav className={`nav ${isMenuOpen ? 'mobile-active' : ''}`}>
        <ul className="nav-links">
          <li><Link href="/solutions" className="nav-item">Solutions <ChevronDown /></Link></li>
          <li><Link href="/platform" className="nav-item">Platform <ChevronDown /></Link></li>
          <li><Link href="/ai-studio" className="nav-item">AI Studio <ChevronDown /></Link></li>
          <li><Link href="/customers" className="nav-item">Customers <span style={{ fontSize: '8px', marginLeft: '6px', opacity: 0.7, verticalAlign: 'middle' }}>•</span></Link></li>
          <li><Link href="#company" className="nav-item">Company <ChevronDown /></Link></li>
        </ul>
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
