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
        {/* Dynamic Background Elements */}
        <div className="menu-ambient-glow glow-primary"></div>
        <div className="menu-ambient-glow glow-secondary"></div>

        <div className="mobile-nav-logo">
          <img src="/images/effission-logo.png" alt="Effission Logo" className="mobile-logo-img" />
        </div>
        <ul className="nav-links">
          <li><Link href="/solutions" className="nav-item" onClick={() => setIsMenuOpen(false)}>Solutions</Link></li>
          <li><Link href="/platform" className="nav-item" onClick={() => setIsMenuOpen(false)}>Platform</Link></li>
          <li><Link href="/ai-studio" className="nav-item" onClick={() => setIsMenuOpen(false)}>AI Studio</Link></li>
          <li><Link href="/customers" className="nav-item" onClick={() => setIsMenuOpen(false)}>Customers</Link></li>
          <li><Link href="/company" className="nav-item" onClick={() => setIsMenuOpen(false)}>Company</Link></li>
        </ul>
        
        <div className="mobile-cta" style={{ display: 'none' }}>
          <Link href="/contact" className="btn btn-gold" onClick={() => setIsMenuOpen(false)}>
            Book a Demo
          </Link>
        </div>

        <div className="mobile-menu-footer">
          <div className="mobile-contact" style={{ marginBottom: '20px' }}>
            <span style={{ display: 'block', fontSize: '12px', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px' }}>Email Us</span>
            <a href="mailto:demo@effission.com" className="mobile-social-link" style={{ textTransform: 'none', fontSize: '16px', letterSpacing: 'normal', color: 'var(--text-primary)' }}>demo@effission.com</a>
          </div>

          <div className="mobile-socials" style={{ gap: '20px' }}>
            <a href="https://www.facebook.com/Effission" target="_blank" rel="noopener noreferrer" className="mobile-social-icon" aria-label="Facebook">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3.61l.39-4H14V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
            <a href="https://www.youtube.com/channel/UCCTwNu56nhqqlkrF4TqzTmA" target="_blank" rel="noopener noreferrer" className="mobile-social-icon" aria-label="YouTube">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path>
                <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
              </svg>
            </a>
            <a href="https://www.instagram.com/effission_software" target="_blank" rel="noopener noreferrer" className="mobile-social-icon" aria-label="Instagram">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
          </div>
          <div className="mobile-copyright" style={{ marginTop: '5px' }}>
            © {new Date().getFullYear()} Effission. Elevating Potential.
          </div>
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
