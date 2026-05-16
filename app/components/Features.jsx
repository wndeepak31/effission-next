'use client';

const Features = () => {
  return (
    <section id="features" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Innovation Stack</span>
          <h2 className="section-title">The Technology Behind the Sparkle</h2>
        </div>

        <div className="bento-grid" style={{ gridAutoRows: '250px' }}>
          <div className="premium-card large" style={{ gridColumn: 'span 2', gridRow: 'span 2' }}>
            <img src="/images/feat_cloud_node.png" className="premium-card-img" alt="Cloud Nodes" style={{ objectFit: 'cover' }} />
            <div className="premium-card-content">
              <span className="section-label" style={{ color: '#fff' }}>Performance</span>
              <h3 style={{ fontSize: '32px', marginBottom: '16px' }}>Real-Time Cloud Rendering</h3>
              <p style={{ color: 'var(--text-secondary)', maxWidth: '400px' }}>
                Our proprietary rendering nodes deliver physically accurate light 
                simulations directly to any browser, capturing the true "fire" of a diamond.
              </p>
            </div>
          </div>
          
          <div className="premium-card tall" style={{ gridRow: 'span 2' }}>
            <img src="/images/feat_ai_dash.png" className="premium-card-img" alt="AI Analytics" style={{ objectFit: 'cover' }} />
            <div className="premium-card-content">
              <span className="section-label" style={{ color: '#fff' }}>Intelligence</span>
              <h3 style={{ fontSize: '24px', marginBottom: '12px' }}>AI Inventory Forecasting</h3>
              <p style={{ color: 'var(--text-secondary)' }}>
                Intelligent stock management that predicts trends and optimizes procurement.
              </p>
            </div>
          </div>

          <div className="premium-card">
            <div className="premium-card-content" style={{ background: 'var(--bg-secondary)', justifyContent: 'center', textAlign: 'center' }}>
              <div style={{ fontSize: '40px', marginBottom: '10px' }}>📦</div>
              <h3>ERP Integration</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>Seamlessly sync with SAP, Oracle, and Tally.</p>
            </div>
          </div>

          <div className="premium-card">
            <div className="premium-card-content" style={{ background: 'var(--bg-secondary)', justifyContent: 'center', textAlign: 'center' }}>
              <div style={{ fontSize: '40px', marginBottom: '10px' }}>🔒</div>
              <h3>Secure Vault</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>Blockchain-backed asset tracking.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
