import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';

export const metadata = {
  title: 'Digital Sales Catalogue - Effission',
  description: 'A portable, high-resolution digital showcase for your entire collection, perfect for trade exhibitions, B2B sales, and exclusive private viewings.'
};

export default function DigitalCataloguePage() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: '100px', minHeight: '100vh' }}>
        {/* Hero Section */}
        <section className="section" style={{ paddingBottom: '40px' }}>
          <div className="container">
            <div className="section-header" style={{ marginBottom: '60px' }}>
              <span className="section-label">Presentation</span>
              <h1 className="section-title">Digital Sales Catalogue</h1>
              <p style={{ maxWidth: '700px', margin: '0 auto', color: 'var(--text-secondary)', fontSize: '18px' }}>
                A portable, high-resolution digital showcase for your entire collection, perfect for trade exhibitions, B2B sales, and exclusive private viewings.
              </p>
            </div>
            
            <div className="process-split" style={{ marginBottom: '60px', alignItems: 'center' }}>
                <div className="process-split-content">
                  <h2 style={{ fontSize: '28px', marginBottom: '16px' }}>Your Collection, Anywhere</h2>
                  <p style={{ color: 'var(--text-secondary)', marginBottom: '24px', fontSize: '16px' }}>
                    Carry your entire inventory in the palm of your hand without compromising on visual quality or security.
                  </p>
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
                  
                  <div style={{ marginTop: '40px' }}>
                    <Link href="/contact" className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px' }}>
                      Upgrade Your Presentations <span style={{ fontSize: '1.2em' }}>→</span>
                    </Link>
                  </div>
                </div>
                <div className="process-split-visual" style={{ background: 'url(/images/digital_sales_catalog_1779341397882.png) center/cover no-repeat', minHeight: '400px', borderRadius: '16px' }}></div>
            </div>
          </div>
        </section>

        {/* Feature Grid */}
        <section className="section" style={{ background: 'rgba(255,255,255,0.02)', padding: '80px 0' }}>
          <div className="container">
            <h2 style={{ textAlign: 'center', marginBottom: '50px', fontSize: '32px' }}>Built for the Modern Sales Team</h2>
            <div className="services-grid">
              <div className="service-card">
                <h3 style={{ marginBottom: '16px' }}>Offline Mode</h3>
                <p style={{ color: 'var(--text-secondary)' }}>Perfect for trade shows with spotty Wi-Fi. The catalog securely caches your high-res assets for seamless offline presenting.</p>
              </div>
              <div className="service-card">
                <h3 style={{ marginBottom: '16px' }}>Dynamic Pricing Engine</h3>
                <p style={{ color: 'var(--text-secondary)' }}>Adjust margins, switch currencies, and apply VIP discounts on the fly during a presentation.</p>
              </div>
              <div className="service-card">
                <h3 style={{ marginBottom: '16px' }}>Instant Quote Generation</h3>
                <p style={{ color: 'var(--text-secondary)' }}>Select multiple pieces, generate a beautifully branded PDF tear sheet, and email it to the client instantly.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="section">
          <div className="container">
            <h2 style={{ textAlign: 'center', marginBottom: '50px', fontSize: '32px' }}>Perfect For Every Scenario</h2>
            <div className="process-split" style={{ alignItems: 'flex-start', gap: '40px' }}>
              <div style={{ flex: 1 }}>
                <h4 style={{ color: 'var(--accent-primary)', marginBottom: '10px' }}>Global Trade Exhibitions</h4>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '30px' }}>Reduce the liability and insurance costs of traveling with millions of dollars in physical inventory. Present your full range digitally.</p>
                
                <h4 style={{ color: 'var(--accent-primary)', marginBottom: '10px' }}>B2B Wholesale Pitching</h4>
                <p style={{ color: 'var(--text-secondary)' }}>Equip your traveling sales reps with interactive iPads that allow wholesale buyers to build their orders visually.</p>
              </div>
              <div style={{ flex: 1 }}>
                <h4 style={{ color: 'var(--accent-primary)', marginBottom: '10px' }}>In-Store Consultations</h4>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '30px' }}>If a specific stone or design isn't in the vault, retail associates can immediately pull it up on a tablet to close the sale.</p>
                
                <h4 style={{ color: 'var(--accent-primary)', marginBottom: '10px' }}>Private VIP Viewings</h4>
                <p style={{ color: 'var(--text-secondary)' }}>Create a highly curated, private digital lookbook tailored specifically to a high-net-worth client's known tastes.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
