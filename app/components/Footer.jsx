'use client';

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
            <h4 style={{ marginBottom: '24px', fontSize: '18px' }}>Services</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px', listStyle: 'none', padding: 0 }}>
              <li><a href="#services" style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>3D Configurator</a></li>
              <li><a href="#services" style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>AI Automation</a></li>
              <li><a href="#services" style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>Web Development</a></li>
              <li><a href="#services" style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>Digital Catalogue</a></li>
            </ul>
          </div>

          <div>
            <h4 style={{ marginBottom: '24px', fontSize: '18px' }}>Company</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px', listStyle: 'none', padding: 0 }}>
              <li><a href="#about" style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>About Us</a></li>
              <li><a href="#" style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>Careers</a></li>
              <li><a href="#" style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>Privacy Policy</a></li>
              <li><a href="#" style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>Terms of Service</a></li>
            </ul>
          </div>

          <div>
            <h4 style={{ marginBottom: '24px', fontSize: '18px' }}>Connect</h4>
            <div style={{ display: 'flex', gap: '16px' }}>
              <a href="#" style={{ color: 'var(--text-secondary)' }}>LinkedIn</a>
              <a href="#" style={{ color: 'var(--text-secondary)' }}>Twitter</a>
              <a href="#" style={{ color: 'var(--text-secondary)' }}>Instagram</a>
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
