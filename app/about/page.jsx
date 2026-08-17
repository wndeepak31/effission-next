import Header from '../components/Header';
import Footer from '../components/Footer';
import Footprint from '../components/Footprint';
import Script from 'next/script';

export const metadata = {
  title: 'About Us | Effission - Jewelry Software Innovators',
  description: 'Learn about Effission, our vision, and our dedication to the luxury jewelry sector. We provide cutting-edge enterprise software, 3D visualization, and web development.',
  keywords: 'Effission about, jewelry software company, 3D visualization jewelry, luxury jewelry tech',
  alternates: {
    canonical: 'https://www.effission.com/about'
  }
};

const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "name": "About Effission",
  "description": "Effission merges the timeless elegance of fine jewelry with the cutting edge of digital innovation.",
  "url": "https://www.effission.com/about"
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <Script
        id="about-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />
      <main className="about-main-spacing" style={{ paddingTop: '100px', minHeight: '100vh' }}>
        {/* Hero Section */}
        <section className="section" style={{ paddingBottom: '40px' }}>
          <article className="container">
            <header className="section-header about-header-spacing" style={{ marginBottom: '60px' }}>
              <span className="section-label" style={{ color: 'var(--accent-gold)' }}>Our Story</span>
              <h1 className="section-title">Redefining Jewelry Technology</h1>
              <p style={{ maxWidth: '700px', margin: '0 auto', color: 'var(--text-secondary)', fontSize: '18px' }}>
                <strong>What is Effission?</strong> Effission merges the timeless elegance of fine jewelry with the cutting edge of digital innovation. We are dedicated to providing the high-end jewelry market with unparalleled enterprise software, 3D visualization, and web development.
              </p>
            </header>
          </article>
        </section>

        {/* Vision & Mission Split */}
        <section className="section" style={{ background: 'rgba(255,255,255,0.02)' }}>
          <div className="container">
            <div className="process-split" style={{ alignItems: 'center', marginBottom: 0 }}>
              <div className="process-split-content">
                <h2 style={{ fontSize: '32px', marginBottom: '24px' }}>Our Mission</h2>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '30px', fontSize: '18px' }}>
                  To empower jewelry brands with intelligent digital tools that enhance operations, elevate the customer experience, and capture the true brilliance of their craftsmanship online.
                </p>

                <h2 style={{ fontSize: '32px', marginBottom: '24px' }}>Our Vision</h2>
                <p style={{ color: 'var(--text-secondary)', fontSize: '18px' }}>
                  We envision a future where technology and luxury are seamlessly integrated—where every jeweler can offer a bespoke, studio-quality digital experience without compromising on security or scale.
                </p>
              </div>
              <div className="process-split-visual" style={{ background: 'url(/images/about_jewelry_tech.png) center/cover no-repeat', minHeight: '400px', borderRadius: '16px', width: '100%' }}></div>
            </div>
          </div>
        </section>

        {/* Values Grid */}
        <section className="section section-padding-lg">
          <div className="container">
            <h2 style={{ textAlign: 'center', marginBottom: '50px', fontSize: '32px' }}>Our Core Values</h2>
            <div className="services-grid">
              <div className="service-card" style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '40px', marginBottom: '20px' }}>💎</div>
                <h3 style={{ marginBottom: '16px' }}>Uncompromising Quality</h3>
                <p style={{ color: 'var(--text-secondary)' }}>Just like the diamonds we help you sell, our software is crafted to the highest standards of precision and performance.</p>
              </div>
              <div className="service-card" style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '40px', marginBottom: '20px' }}>🔒</div>
                <h3 style={{ marginBottom: '16px' }}>Absolute Security</h3>
                <p style={{ color: 'var(--text-secondary)' }}>We understand the value of your assets. Our platforms are built with bank-grade encryption to protect your data.</p>
              </div>
              <div className="service-card" style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '40px', marginBottom: '20px' }}>🚀</div>
                <h3 style={{ marginBottom: '16px' }}>Relentless Innovation</h3>
                <p style={{ color: 'var(--text-secondary)' }}>From AI to real-time 3D rendering, we continuously push the boundaries of what's possible in jewelry tech.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Global Footprint */}
        <div className="footprint-spacing" style={{ marginTop: '40px', marginBottom: '80px' }}>
          <Footprint />
        </div>

      </main>
      <Footer />
    </>
  );
}
