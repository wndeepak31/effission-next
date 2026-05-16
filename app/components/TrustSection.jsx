'use client';

export default function TrustSection() {
  const partners = ["LUXE", "BRILLIANCE", "AURELIUS", "GILDED", "PRECISION"];

  return (
    <section className="section" style={{ backgroundColor: 'var(--bg-primary)', borderTop: '1px solid var(--glass-border)' }}>
      <div className="container">
        <div className="section-header" style={{ marginBottom: '40px' }}>
          <span className="section-label">Global Trust</span>
          <h2 style={{ fontSize: '20px', color: 'var(--text-secondary)' }}>Powering the world's most prestigious jewelry houses</h2>
        </div>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', opacity: 0.5, flexWrap: 'wrap', gap: '40px' }}>
          {partners.map((partner, index) => (
            <span key={index} style={{ fontSize: '24px', fontWeight: '700', letterSpacing: '0.2em', fontFamily: 'Outfit' }}>
              {partner}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
