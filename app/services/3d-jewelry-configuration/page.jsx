import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';

export const metadata = {
  title: '3D Jewelry Configuration - Effission',
  description: 'Empower your customers to customize their jewelry in real-time with physically accurate materials and stunning 3D renders directly in their browser.'
};

export default function Jewelry3DConfigPage() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: '100px', minHeight: '100vh' }}>
        {/* Hero Section */}
        <section className="section" style={{ paddingBottom: '40px' }}>
          <div className="container">
            <div className="section-header" style={{ marginBottom: '60px' }}>
              <span className="section-label">Visualization</span>
              <h1 className="section-title">3D Jewelry Configuration</h1>
              <p style={{ maxWidth: '700px', margin: '0 auto', color: 'var(--text-secondary)', fontSize: '18px' }}>
                Empower your customers to customize their jewelry in real-time with physically accurate materials and stunning 3D renders directly in their browser. Our advanced 3D configuration tools redefine the online shopping experience.
              </p>
            </div>
            
            <div className="process-split" style={{ marginBottom: '60px', alignItems: 'center' }}>
                <div className="process-split-content">
                  <h2 style={{ fontSize: '28px', marginBottom: '16px' }}>Interactive & Immersive</h2>
                  <p style={{ color: 'var(--text-secondary)', marginBottom: '24px', fontSize: '16px' }}>
                    Move beyond static images. Let your clients explore every facet, select different metals, and swap gemstones instantly.
                  </p>
                  <ul style={{ color: 'var(--text-secondary)', listStyle: 'none', padding: 0 }}>
                    <li style={{ marginBottom: '12px', display: 'flex', gap: '10px' }}>
                      <span style={{ color: 'var(--accent-primary)' }}>✓</span> 
                      <span><strong>Higher Conversion:</strong> Interactive 3D increases buyer confidence and ultimately drives more sales.</span>
                    </li>
                    <li style={{ marginBottom: '12px', display: 'flex', gap: '10px' }}>
                      <span style={{ color: 'var(--accent-primary)' }}>✓</span> 
                      <span><strong>Reduced Returns:</strong> Accurate visualization sets clear expectations, ensuring customers get exactly what they designed.</span>
                    </li>
                    <li style={{ display: 'flex', gap: '10px' }}>
                      <span style={{ color: 'var(--accent-primary)' }}>✓</span> 
                      <span><strong>Brand Prestige:</strong> Offer a luxury, studio-quality digital experience that matches the high-end nature of your jewelry.</span>
                    </li>
                  </ul>
                  
                  <div style={{ marginTop: '40px' }}>
                    <Link href="/contact" className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px' }}>
                      Request a Demo <span style={{ fontSize: '1.2em' }}>→</span>
                    </Link>
                  </div>
                </div>
                <div className="process-split-visual" style={{ background: 'url(/images/jewelry_3d_config_1779341346063.png) center/cover no-repeat', minHeight: '400px', borderRadius: '16px' }}></div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="section" style={{ background: 'rgba(255,255,255,0.02)', padding: '80px 0' }}>
          <div className="container">
            <h2 style={{ textAlign: 'center', marginBottom: '50px', fontSize: '32px' }}>How It Works</h2>
            <div className="services-grid">
              <div className="service-card" style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '48px', color: 'var(--accent-primary)', marginBottom: '20px' }}>1</div>
                <h3 style={{ marginBottom: '16px' }}>Asset Ingestion</h3>
                <p style={{ color: 'var(--text-secondary)' }}>We take your CAD files and optimize them into highly performant web-ready 3D models.</p>
              </div>
              <div className="service-card" style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '48px', color: 'var(--accent-primary)', marginBottom: '20px' }}>2</div>
                <h3 style={{ marginBottom: '16px' }}>Material Assignment</h3>
                <p style={{ color: 'var(--text-secondary)' }}>We map physically-based rendering (PBR) materials—like gold, platinum, and diamonds—to ensure photorealism.</p>
              </div>
              <div className="service-card" style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '48px', color: 'var(--accent-primary)', marginBottom: '20px' }}>3</div>
                <h3 style={{ marginBottom: '16px' }}>Seamless Integration</h3>
                <p style={{ color: 'var(--text-secondary)' }}>The final interactive configurator is embedded directly into your website's product pages.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="section">
          <div className="container">
            <h2 style={{ textAlign: 'center', marginBottom: '50px', fontSize: '32px' }}>Why Choose Effission for 3D</h2>
            <div className="process-split" style={{ alignItems: 'flex-start', gap: '40px' }}>
              <div style={{ flex: 1 }}>
                <h4 style={{ color: 'var(--accent-primary)', marginBottom: '10px' }}>Unmatched Realism</h4>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '30px' }}>Our rendering engine specifically calculates light dispersion and refraction to capture the true brilliance of diamonds.</p>
                
                <h4 style={{ color: 'var(--accent-primary)', marginBottom: '10px' }}>Blazing Fast Performance</h4>
                <p style={{ color: 'var(--text-secondary)' }}>Complex models load in milliseconds, ensuring a seamless experience even on mobile devices.</p>
              </div>
              <div style={{ flex: 1 }}>
                <h4 style={{ color: 'var(--accent-primary)', marginBottom: '10px' }}>End-to-End Analytics</h4>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '30px' }}>Track how users interact with the 3D viewer to understand which designs and materials are most popular.</p>
                
                <h4 style={{ color: 'var(--accent-primary)', marginBottom: '10px' }}>Augmented Reality (AR) Ready</h4>
                <p style={{ color: 'var(--text-secondary)' }}>Allow clients to project the jewelry onto their own hand or environment using native AR capabilities.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
