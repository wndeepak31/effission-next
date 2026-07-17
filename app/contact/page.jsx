import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';

export const metadata = {
  title: 'Contact Us - Effission',
  description: 'Get in touch with Effission for enterprise jewelry technology solutions.'
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: '100px', minHeight: '100vh' }}>
        <section className="section" style={{ paddingBottom: '40px' }}>
          <div className="container">
            <div className="section-header" style={{ marginBottom: '60px' }}>
              <span className="section-label" style={{ color: 'var(--accent-gold)' }}>Get in Touch</span>
              <h1 className="section-title">Start Your Digital Transformation</h1>
              <p style={{ maxWidth: '700px', margin: '0 auto', color: 'var(--text-secondary)', fontSize: '18px' }}>
                Whether you need a bespoke e-commerce platform, a real-time 3D configurator, or an enterprise CRM, our experts are ready to assist you.
              </p>
            </div>
            
            <div className="process-split" style={{ alignItems: 'flex-start', gap: '60px' }}>
              
              {/* Contact Form */}
              <ContactForm />

              {/* Contact Info & Locations */}
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '40px' }}>
                <div>
                  <h3 style={{ fontSize: '24px', marginBottom: '20px' }}>Direct Contact</h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <div className="glass-effect" style={{ padding: '20px', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '16px' }}>
                      <span style={{ fontSize: '24px' }}>✉️</span>
                      <div>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>Sales & Inquiries</p>
                        <p style={{ fontSize: '16px', fontWeight: '500' }}>hello@effission.com</p>
                      </div>
                    </div>
                    <div className="glass-effect" style={{ padding: '20px', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '16px' }}>
                      <span style={{ fontSize: '24px' }}>🎧</span>
                      <div>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>Technical Support</p>
                        <p style={{ fontSize: '16px', fontWeight: '500' }}>support@effission.com</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 style={{ fontSize: '24px', marginBottom: '20px' }}>Global Offices</h3>
                  <div className="services-grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
                    <div className="glass-effect" style={{ padding: '24px', borderRadius: '12px' }}>
                      <h4 style={{ color: 'var(--accent-gold)', marginBottom: '8px' }}>Mumbai (HQ)</h4>
                      <p style={{ color: 'var(--text-secondary)', fontSize: '14px', lineHeight: '1.6' }}>
                        Bandra Kurla Complex,<br/>
                        Mumbai, Maharashtra,<br/>
                        India
                      </p>
                    </div>
                    <div className="glass-effect" style={{ padding: '24px', borderRadius: '12px' }}>
                      <h4 style={{ color: 'var(--accent-gold)', marginBottom: '8px' }}>New York</h4>
                      <p style={{ color: 'var(--text-secondary)', fontSize: '14px', lineHeight: '1.6' }}>
                        Diamond District,<br/>
                        5th Ave, New York, NY,<br/>
                        USA
                      </p>
                    </div>
                    <div className="glass-effect" style={{ padding: '24px', borderRadius: '12px' }}>
                      <h4 style={{ color: 'var(--accent-gold)', marginBottom: '8px' }}>London</h4>
                      <p style={{ color: 'var(--text-secondary)', fontSize: '14px', lineHeight: '1.6' }}>
                        Hatton Garden,<br/>
                        London,<br/>
                        United Kingdom
                      </p>
                    </div>
                    <div className="glass-effect" style={{ padding: '24px', borderRadius: '12px' }}>
                      <h4 style={{ color: 'var(--accent-gold)', marginBottom: '8px' }}>Dubai</h4>
                      <p style={{ color: 'var(--text-secondary)', fontSize: '14px', lineHeight: '1.6' }}>
                        Gold Souk,<br/>
                        Deira, Dubai,<br/>
                        UAE
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
