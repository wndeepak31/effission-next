'use client';

const GlobalInnovation = () => {
  const regions = [
    { city: "New York", focus: "Retail Excellence" },
    { city: "London", focus: "Creative Design" },
    { city: "Dubai", focus: "Luxury Logistics" },
    { city: "Mumbai", focus: "Tech Innovation" }
  ];

  return (
    <section id="innovation" className="section" style={{ overflow: 'hidden' }}>
      <div className="container">
        <div className="process-split" style={{ alignItems: 'center' }}>
          <div className="process-split-content">
            <span className="section-label">Global Benchmark</span>
            <h2 className="section-title" style={{ fontSize: '48px', lineHeight: '1.1' }}>Setting the Global Standard in Jewelry Technology</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '18px', margin: '24px 0 40px' }}>
              We transcend borders to provide a unified digital ecosystem for the world's 
              most prestigious jewelry houses. From custom ERPs to AI-driven sales, 
              we are the backbone of modern luxury.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
              {regions.map((reg, i) => (
                <div key={i} className="glass-effect" style={{ padding: '20px', borderRadius: '16px' }}>
                  <h4 style={{ color: 'var(--accent-primary)', marginBottom: '4px' }}>{reg.city}</h4>
                  <p style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>{reg.focus}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="process-split-visual premium-card" style={{ height: '500px' }}>
            <img src="/images/jewelry_global_tech.png" alt="Global Jewelry Tech" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            <div className="premium-card-content">
              <h3 style={{ fontSize: '24px' }}>Connected Ecosystem</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalInnovation;
