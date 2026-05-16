'use client';

export default function AboutUs() {
  return (
    <section id="about" className="section" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container">
        <div className="services-grid" style={{ alignItems: 'center' }}>
          <div>
            <span className="section-label">Our Philosophy</span>
            <h2 className="section-title">Crafting the Future of Jewelry Retail</h2>
            <p className="hero-desc" style={{ fontSize: '18px' }}>
              At Effission, we bridge the gap between traditional craftsmanship and 
              cutting-edge technology. We believe that luxury deserves a digital 
              presence that is as brilliant as the pieces it represents.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginTop: '40px' }}>
              <div>
                <h4 style={{ color: 'var(--accent-primary)', fontSize: '24px' }}>150+</h4>
                <p style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>Brands Empowered</p>
              </div>
              <div>
                <h4 style={{ color: 'var(--accent-primary)', fontSize: '24px' }}>99%</h4>
                <p style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>Visual Accuracy</p>
              </div>
            </div>
          </div>
          <div className="glass-effect" style={{ padding: '20px', borderRadius: '16px' }}>
            <img 
              src="/images/about_jewelry_tech.png" 
              alt="Digital Jewelry Design Workshop" 
              style={{ width: '100%', borderRadius: '12px', display: 'block' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
