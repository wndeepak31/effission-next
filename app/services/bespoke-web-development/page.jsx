import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';

export const metadata = {
  title: 'Bespoke Web Development - Effission',
  description: 'Luxury e-commerce experiences tailored exclusively to the high-end jewelry market, focusing on immersive storytelling and seamless transactions.'
};

export default function WebDevPage() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: '100px', minHeight: '100vh' }}>
        {/* Hero Section */}
        <section className="section" style={{ paddingBottom: '40px' }}>
          <div className="container">
            <div className="section-header" style={{ marginBottom: '60px' }}>
              <span className="section-label">Digital Presence</span>
              <h1 className="section-title">Bespoke Web Development</h1>
              <p style={{ maxWidth: '700px', margin: '0 auto', color: 'var(--text-secondary)', fontSize: '18px' }}>
                Luxury e-commerce experiences tailored exclusively to the high-end jewelry market, focusing on immersive storytelling and seamless transactions.
              </p>
            </div>
            
            <div className="process-split" style={{ marginBottom: '60px', alignItems: 'center' }}>
                <div className="process-split-content">
                  <h2 style={{ fontSize: '28px', marginBottom: '16px' }}>Crafted for Luxury</h2>
                  <p style={{ color: 'var(--text-secondary)', marginBottom: '24px', fontSize: '16px' }}>
                    Your digital storefront should be as stunning as your physical showroom. We build lightning-fast, visually striking platforms that captivate users.
                  </p>
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
                  
                  <div style={{ marginTop: '40px' }}>
                    <Link href="/contact" className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px' }}>
                      Start Your Project <span style={{ fontSize: '1.2em' }}>→</span>
                    </Link>
                  </div>
                </div>
                <div className="process-split-visual" style={{ background: 'url(/images/bespoke_web_dev_1779341382162.png) center/cover no-repeat', minHeight: '400px', borderRadius: '16px' }}></div>
            </div>
          </div>
        </section>

        {/* Technologies and Approach */}
        <section className="section" style={{ background: 'rgba(255,255,255,0.02)', padding: '80px 0' }}>
          <div className="container">
            <h2 style={{ textAlign: 'center', marginBottom: '50px', fontSize: '32px' }}>Our Approach to Digital Luxury</h2>
            <div className="services-grid">
              <div className="service-card">
                <h3 style={{ marginBottom: '16px' }}>Headless Commerce</h3>
                <p style={{ color: 'var(--text-secondary)' }}>We decouple the front-end design from the back-end infrastructure (like Shopify Plus), giving you unlimited creative freedom without sacrificing reliability.</p>
              </div>
              <div className="service-card">
                <h3 style={{ marginBottom: '16px' }}>Micro-Animations</h3>
                <p style={{ color: 'var(--text-secondary)' }}>Fluid transitions, subtle hovers, and kinetic typography breathe life into your collections, making browsing an engaging experience.</p>
              </div>
              <div className="service-card">
                <h3 style={{ marginBottom: '16px' }}>Blazing Fast Next.js</h3>
                <p style={{ color: 'var(--text-secondary)' }}>Built on Next.js, our platforms offer near-instant page loads and exceptional SEO performance to dominate search rankings.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Development Process */}
        <section className="section">
          <div className="container">
            <h2 style={{ textAlign: 'center', marginBottom: '50px', fontSize: '32px' }}>The Build Process</h2>
            <div className="process-split" style={{ alignItems: 'flex-start', gap: '40px' }}>
              <div style={{ flex: 1 }}>
                <h4 style={{ color: 'var(--accent-primary)', marginBottom: '10px' }}>Discovery & UX Design</h4>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '30px' }}>We map out the ideal customer journey, wireframing a seamless flow from the homepage to checkout.</p>
                
                <h4 style={{ color: 'var(--accent-primary)', marginBottom: '10px' }}>High-Fidelity Prototyping</h4>
                <p style={{ color: 'var(--text-secondary)' }}>You review pixel-perfect mockups of the glassmorphic interfaces before a single line of code is written.</p>
              </div>
              <div style={{ flex: 1 }}>
                <h4 style={{ color: 'var(--accent-primary)', marginBottom: '10px' }}>Front-End & Back-End Engineering</h4>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '30px' }}>Our engineers bring the designs to life, connecting them securely to inventory databases and payment gateways.</p>
                
                <h4 style={{ color: 'var(--accent-primary)', marginBottom: '10px' }}>Quality Assurance & Launch</h4>
                <p style={{ color: 'var(--text-secondary)' }}>Rigorous testing across all devices and browsers ensures a flawless experience for your VIP clients on launch day.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
