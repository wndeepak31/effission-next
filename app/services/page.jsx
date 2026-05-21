import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';

export const metadata = {
  title: 'Our Services - Effission',
  description: 'Explore Effission\'s comprehensive digital ecosystem tailored for the high-end jewelry market.'
};

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: '100px', minHeight: '100vh' }}>
        <section className="section">
          <div className="container">
            <div className="section-header">
              <span className="section-label">Our Capabilities</span>
              <h1 className="section-title">Comprehensive Digital Solutions</h1>
              <p style={{ maxWidth: '700px', margin: '0 auto', color: 'var(--text-secondary)', fontSize: '18px' }}>
                Elevate your jewelry business with our end-to-end digital services, from immersive 3D configurations to powerful AI-driven automation. Discover how our ecosystem can transform your operations and sales.
              </p>
            </div>
            
            <div style={{ marginTop: '80px' }}>
              {/* Service 1 */}
              <div className="process-split" style={{ marginBottom: '100px', alignItems: 'center' }}>
                <div className="process-split-content">
                  <span className="section-label">01. Visualization</span>
                  <h2 style={{ fontSize: '36px', marginBottom: '16px' }}>3D Jewelry Configuration</h2>
                  <p style={{ color: 'var(--text-secondary)', marginBottom: '24px', fontSize: '16px' }}>
                    Empower your customers to customize their jewelry in real-time with physically accurate materials and stunning 3D renders directly in their browser.
                  </p>
                  <div className="glass-effect" style={{ padding: '24px', borderRadius: '16px' }}>
                    <h4 style={{ color: 'var(--accent-primary)', marginBottom: '16px', fontSize: '18px' }}>How It Helps You</h4>
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
                  </div>
                  <div style={{ marginTop: '30px' }}>
                    <Link href="/services/3d-jewelry-configuration" className="btn btn-outline" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>Explore Details <span>→</span></Link>
                  </div>
                </div>
                <div className="process-split-visual" style={{ background: 'url(/images/jewelry_3d_config_1779341346063.png) center/cover no-repeat', minHeight: '400px' }}></div>
              </div>

              {/* Service 2 */}
              <div className="process-split" style={{ marginBottom: '100px', alignItems: 'center' }}>
                <div className="process-split-content">
                  <span className="section-label">02. Intelligence</span>
                  <h2 style={{ fontSize: '36px', marginBottom: '16px' }}>AI-Powered Automation</h2>
                  <p style={{ color: 'var(--text-secondary)', marginBottom: '24px', fontSize: '16px' }}>
                    Streamline your workflows with intelligent AI tools designed for jewelry design inspiration, smart inventory management, and deep customer insights.
                  </p>
                  <div className="glass-effect" style={{ padding: '24px', borderRadius: '16px' }}>
                    <h4 style={{ color: 'var(--accent-primary)', marginBottom: '16px', fontSize: '18px' }}>How It Helps You</h4>
                    <ul style={{ color: 'var(--text-secondary)', listStyle: 'none', padding: 0 }}>
                      <li style={{ marginBottom: '12px', display: 'flex', gap: '10px' }}>
                        <span style={{ color: 'var(--accent-primary)' }}>✓</span> 
                        <span><strong>Operational Efficiency:</strong> Automate repetitive administrative tasks and save valuable time for creative work.</span>
                      </li>
                      <li style={{ marginBottom: '12px', display: 'flex', gap: '10px' }}>
                        <span style={{ color: 'var(--accent-primary)' }}>✓</span> 
                        <span><strong>Data-Driven Decisions:</strong> Predict market trends, optimize pricing, and manage stock intelligently to avoid overstocking.</span>
                      </li>
                      <li style={{ display: 'flex', gap: '10px' }}>
                        <span style={{ color: 'var(--accent-primary)' }}>✓</span> 
                        <span><strong>Hyper-Personalization:</strong> Offer AI-curated product recommendations tailored to individual client preferences.</span>
                      </li>
                    </ul>
                  </div>
                  <div style={{ marginTop: '30px' }}>
                    <Link href="/services/ai-powered-automation" className="btn btn-outline" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>Explore Details <span>→</span></Link>
                  </div>
                </div>
                <div className="process-split-visual" style={{ background: 'url(/images/ai_jewelry_automation_1779341365264.png) center/cover no-repeat', minHeight: '400px' }}></div>
              </div>

              {/* Service 3 */}
              <div className="process-split" style={{ marginBottom: '100px', alignItems: 'center' }}>
                <div className="process-split-content">
                  <span className="section-label">03. Digital Presence</span>
                  <h2 style={{ fontSize: '36px', marginBottom: '16px' }}>Bespoke Web Development</h2>
                  <p style={{ color: 'var(--text-secondary)', marginBottom: '24px', fontSize: '16px' }}>
                    Luxury e-commerce experiences tailored exclusively to the high-end jewelry market, focusing on immersive storytelling and seamless transactions.
                  </p>
                  <div className="glass-effect" style={{ padding: '24px', borderRadius: '16px' }}>
                    <h4 style={{ color: 'var(--accent-primary)', marginBottom: '16px', fontSize: '18px' }}>How It Helps You</h4>
                    <ul style={{ color: 'var(--text-secondary)', listStyle: 'none', padding: 0 }}>
                      <li style={{ marginBottom: '12px', display: 'flex', gap: '10px' }}>
                        <span style={{ color: 'var(--accent-primary)' }}>✓</span> 
                        <span><strong>Distinctive Custom Design:</strong> Stand out from competitors with a unique, glassmorphic aesthetic that reflects your brand's elegance.</span>
                      </li>
                      <li style={{ marginBottom: '12px', display: 'flex', gap: '10px' }}>
                        <span style={{ color: 'var(--accent-primary)' }}>✓</span> 
                        <span><strong>Flawless User Experience:</strong> Optimized user journeys from discovery to secure checkout, reducing cart abandonment.</span>
                      </li>
                      <li style={{ display: 'flex', gap: '10px' }}>
                        <span style={{ color: 'var(--accent-primary)' }}>✓</span> 
                        <span><strong>Enterprise Scalability:</strong> Built on robust, modern frameworks (like Next.js) designed to scale effortlessly as your business grows.</span>
                      </li>
                    </ul>
                  </div>
                  <div style={{ marginTop: '30px' }}>
                    <Link href="/services/bespoke-web-development" className="btn btn-outline" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>Explore Details <span>→</span></Link>
                  </div>
                </div>
                <div className="process-split-visual" style={{ background: 'url(/images/bespoke_web_dev_1779341382162.png) center/cover no-repeat', minHeight: '400px' }}></div>
              </div>

              {/* Service 4 */}
              <div className="process-split" style={{ marginBottom: '100px', alignItems: 'center' }}>
                <div className="process-split-content">
                  <span className="section-label">04. Presentation</span>
                  <h2 style={{ fontSize: '36px', marginBottom: '16px' }}>Digital Sales Catalogue</h2>
                  <p style={{ color: 'var(--text-secondary)', marginBottom: '24px', fontSize: '16px' }}>
                    A portable, high-resolution digital showcase for your entire collection, perfect for trade exhibitions, B2B sales, and exclusive private viewings.
                  </p>
                  <div className="glass-effect" style={{ padding: '24px', borderRadius: '16px' }}>
                    <h4 style={{ color: 'var(--accent-primary)', marginBottom: '16px', fontSize: '18px' }}>How It Helps You</h4>
                    <ul style={{ color: 'var(--text-secondary)', listStyle: 'none', padding: 0 }}>
                      <li style={{ marginBottom: '12px', display: 'flex', gap: '10px' }}>
                        <span style={{ color: 'var(--accent-primary)' }}>✓</span> 
                        <span><strong>Infinite Accessibility:</strong> Showcase thousands of exquisite pieces directly from a tablet without the security risks of physical inventory.</span>
                      </li>
                      <li style={{ marginBottom: '12px', display: 'flex', gap: '10px' }}>
                        <span style={{ color: 'var(--accent-primary)' }}>✓</span> 
                        <span><strong>Always Up-to-Date:</strong> Real-time syncing ensures your sales team always has the latest collections, availability, and pricing.</span>
                      </li>
                      <li style={{ display: 'flex', gap: '10px' }}>
                        <span style={{ color: 'var(--accent-primary)' }}>✓</span> 
                        <span><strong>Interactive Exploration:</strong> Allow clients to zoom, rotate, and explore intricate details that traditional photography misses.</span>
                      </li>
                    </ul>
                  </div>
                  <div style={{ marginTop: '30px' }}>
                    <Link href="/services/digital-sales-catalogue" className="btn btn-outline" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>Explore Details <span>→</span></Link>
                  </div>
                </div>
                <div className="process-split-visual" style={{ background: 'url(/images/digital_sales_catalog_1779341397882.png) center/cover no-repeat', minHeight: '400px' }}></div>
              </div>

              {/* Service 5 */}
              <div className="process-split" style={{ marginBottom: '40px', alignItems: 'center' }}>
                <div className="process-split-content">
                  <span className="section-label">05. Management</span>
                  <h2 style={{ fontSize: '36px', marginBottom: '16px' }}>Integrated CRM / ERP</h2>
                  <p style={{ color: 'var(--text-secondary)', marginBottom: '24px', fontSize: '16px' }}>
                    Comprehensive business management solutions designed specifically to unify your jewelry operations, from raw material sourcing to final customer relations.
                  </p>
                  <div className="glass-effect" style={{ padding: '24px', borderRadius: '16px' }}>
                    <h4 style={{ color: 'var(--accent-primary)', marginBottom: '16px', fontSize: '18px' }}>How It Helps You</h4>
                    <ul style={{ color: 'var(--text-secondary)', listStyle: 'none', padding: 0 }}>
                      <li style={{ marginBottom: '12px', display: 'flex', gap: '10px' }}>
                        <span style={{ color: 'var(--accent-primary)' }}>✓</span> 
                        <span><strong>Unified Operations:</strong> Connect sales, inventory, accounting, and production in one central source of truth.</span>
                      </li>
                      <li style={{ marginBottom: '12px', display: 'flex', gap: '10px' }}>
                        <span style={{ color: 'var(--accent-primary)' }}>✓</span> 
                        <span><strong>Enhanced Customer Loyalty:</strong> Track VIP client preferences, anniversaries, and purchase history to provide white-glove service.</span>
                      </li>
                      <li style={{ display: 'flex', gap: '10px' }}>
                        <span style={{ color: 'var(--accent-primary)' }}>✓</span> 
                        <span><strong>Security & Compliance:</strong> Robust data protection features tailored for high-value transactions and sensitive client data.</span>
                      </li>
                    </ul>
                  </div>
                  <div style={{ marginTop: '30px' }}>
                    <Link href="/services/integrated-crm-erp" className="btn btn-outline" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>Explore Details <span>→</span></Link>
                  </div>
                </div>
                <div className="process-split-visual" style={{ background: 'url(/images/jewelry_crm_erp_1779341413648.png) center/cover no-repeat', minHeight: '400px' }}></div>
              </div>
            </div>
            
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
