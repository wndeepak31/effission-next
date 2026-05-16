'use client';

const Features = () => {
  return (
    <section id="features" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Proprietary Technology</span>
          <h2 className="section-title">The Future of Luxury Retail</h2>
        </div>

        <div className="bento-grid" style={{ gridAutoRows: '220px' }}>
          <div className="premium-card large" style={{ gridColumn: 'span 2', gridRow: 'span 2' }}>
            <img src="/images/feat_cloud_node.png" className="premium-card-img" alt="Cloud Nodes" style={{ objectFit: 'cover' }} />
            <div className="premium-card-content">
              <h3 style={{ fontSize: '36px', marginBottom: '16px' }}>Holographic Rendering</h3>
              <p style={{ color: 'var(--text-secondary)', maxWidth: '400px' }}>
                Studio-grade light simulation delivering 99.9% visual accuracy across all global devices instantly.
              </p>
            </div>
          </div>
          
          <div className="premium-card tall" style={{ gridRow: 'span 2' }}>
            <img src="/images/feat_ai_dash.png" className="premium-card-img" alt="AI Analytics" style={{ objectFit: 'cover' }} />
            <div className="premium-card-content">
              <h3 style={{ fontSize: '24px', marginBottom: '12px' }}>Intelligent Atelier</h3>
              <p style={{ color: 'var(--text-secondary)' }}>
                AI-driven inventory curation that adapts to regional luxury trends in real-time.
              </p>
            </div>
          </div>

          <div className="premium-card">
            <div className="premium-card-content" style={{ background: 'var(--bg-secondary)', justifyContent: 'center', textAlign: 'center', padding: '20px' }}>
              <h4 style={{ color: 'var(--accent-primary)', marginBottom: '8px' }}>API Unified</h4>
              <p style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>Universal sync with SAP, Oracle & Salesforce.</p>
            </div>
          </div>

          <div className="premium-card">
            <div className="premium-card-content" style={{ background: 'var(--bg-secondary)', justifyContent: 'center', textAlign: 'center', padding: '20px' }}>
              <h4 style={{ color: 'var(--accent-primary)', marginBottom: '8px' }}>Zero Latency</h4>
              <p style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>Global edge delivery for seamless 3D viewing.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
