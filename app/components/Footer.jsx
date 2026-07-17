'use client';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer id="contact" className="section" style={{ borderTop: '1px solid var(--glass-border)', paddingBottom: '40px' }}>
      <div className="container">
        <div className="services-grid" style={{ marginBottom: '60px' }}>
          <div style={{ maxWidth: '300px' }}>
            <img src="/images/effission-logo.png" alt="Effission Logo" style={{ height: '40px', marginBottom: '24px' }} />
            <p style={{ color: 'var(--text-secondary)', fontSize: '15px' }}>
              Digital brilliance for the modern jeweler. Transforming retail through 
              innovation, precision, and luxury technology.
            </p>
          </div>
          
          <div>
            <h4 style={{ marginBottom: '24px', fontSize: '18px' }}>Solutions</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px', listStyle: 'none', padding: 0 }}>
              <li><Link href="/solutions/retailers" style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>Retailers</Link></li>
              <li><Link href="/solutions/wholesalers" style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>Wholesalers</Link></li>
              <li><Link href="/solutions/manufacturers" style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>Manufacturers</Link></li>
              <li><Link href="/solutions/digital-brands" style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>Digital Brands</Link></li>
              <li><Link href="/ai-studio" style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>AI Studio</Link></li>
            </ul>
          </div>

          <div>
            <h4 style={{ marginBottom: '24px', fontSize: '18px' }}>Company</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px', listStyle: 'none', padding: 0 }}>
              <li><Link href="/about" style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>About Us</Link></li>
              <li><Link href="/careers" style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>Careers</Link></li>
              <li><Link href="/privacy" style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>Privacy Policy</Link></li>
              <li><Link href="/terms" style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>Terms of Service</Link></li>
            </ul>
          </div>

          <div>
            <h4 style={{ marginBottom: '24px', fontSize: '18px' }}>Connect</h4>
            <div style={{ display: 'flex', gap: '20px' }}>
              <a href="https://www.facebook.com/Effission" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', transition: 'color 0.3s' }} aria-label="Facebook" onMouseOver={(e) => e.currentTarget.style.color = '#fff'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3.61l.39-4H14V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="https://www.youtube.com/channel/UCCTwNu56nhqqlkrF4TqzTmA" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', transition: 'color 0.3s' }} aria-label="YouTube" onMouseOver={(e) => e.currentTarget.style.color = '#fff'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path>
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                </svg>
              </a>
              <a href="https://www.instagram.com/effission_software" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', transition: 'color 0.3s' }} aria-label="Instagram" onMouseOver={(e) => e.currentTarget.style.color = '#fff'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div style={{ borderTop: '1px solid var(--glass-border)', paddingTop: '40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}>
          <p style={{ color: 'var(--text-secondary)', fontSize: '13px' }}>
            © 2026 Effission. All rights reserved.
          </p>
          <p style={{ color: 'var(--text-secondary)', fontSize: '13px' }}>
            Made with brilliance for the jewelry world.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
