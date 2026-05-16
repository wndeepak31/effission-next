'use client';

const Features = () => {
  return (
    <section id="features" className="section" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-label">Innovation</span>
          <h2 className="section-title">Beyond the Brilliance</h2>
        </div>

        <div className="bento-grid">
          <div className="bento-item large">
            <h3 style={{ marginBottom: '10px' }}>Physically Accurate Materials</h3>
            <p style={{ color: 'var(--text-secondary)' }}>Capturing the real-world properties of gold, platinum, and precious stones with mathematical precision.</p>
          </div>
          <div className="bento-item tall">
            <h3 style={{ marginBottom: '10px' }}>Cloud Rendering</h3>
            <p style={{ color: 'var(--text-secondary)' }}>Server-side rendering nodes that deliver high-res frames in milliseconds to any device.</p>
          </div>
          <div className="bento-item">
            <h3 style={{ marginBottom: '10px' }}>AI Inventory</h3>
            <p style={{ color: 'var(--text-secondary)' }}>Smart tracking and forecasting.</p>
          </div>
          <div className="bento-item">
            <h3 style={{ marginBottom: '10px' }}>E-commerce Sync</h3>
            <p style={{ color: 'var(--text-secondary)' }}>Direct Shopify/Magento integration.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
