import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';
import Script from 'next/script';

export const metadata = {
  title: 'Contact Us | Effission - Get in Touch',
  description: 'Get in touch with Effission for enterprise jewelry technology solutions, including bespoke e-commerce, 3D configurators, and enterprise CRM.',
  keywords: 'Contact Effission, jewelry software support, enterprise CRM jewelry, 3D configurator contact',
  alternates: {
    canonical: 'https://www.effission.com/contact'
  }
};

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "name": "Contact Effission",
  "description": "Get in touch with Effission for enterprise jewelry technology solutions.",
  "url": "https://www.effission.com/contact",
  "mainEntity": {
    "@type": "Organization",
    "name": "Effission",
    "email": "noreply@effission.com",
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "email": "noreply@effission.com",
        "contactType": "Sales & Inquiries"
      },
      {
        "@type": "ContactPoint",
        "email": "noreply@effission.com",
        "contactType": "Technical Support"
      }
    ]
  }
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <Script
        id="contact-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      <main style={{ paddingTop: '100px', minHeight: '100vh' }}>
        <section className="section" style={{ paddingBottom: '40px' }}>
          <div className="container">
            <header className="section-header" style={{ marginBottom: '60px' }}>
              <span className="section-label" style={{ color: 'var(--accent-gold)' }}>Get in Touch</span>
              <h1 className="section-title">Start Your Digital Transformation</h1>
              <p style={{ maxWidth: '700px', margin: '0 auto', color: 'var(--text-secondary)', fontSize: '18px' }}>
                Whether you need a bespoke e-commerce platform, a real-time 3D configurator, or an enterprise CRM, our experts are ready to assist you.
              </p>
            </header>
            
            <div className="process-split" style={{ alignItems: 'flex-start', gap: '60px' }}>
              
              {/* Contact Form */}
              <ContactForm />

              {/* Contact Information */}
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '40px' }}>
                <div>
                  <h3 style={{ fontSize: '24px', marginBottom: '20px' }}>Contact Information</h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    
                    {/* Location */}
                    <div className="glass-effect" style={{ padding: '20px', borderRadius: '12px', display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                      <span style={{ fontSize: '24px', marginTop: '2px' }}>📍</span>
                      <div>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '14px', marginBottom: '4px' }}>Location</p>
                        <p style={{ fontSize: '16px', fontWeight: '500', lineHeight: '1.6' }}>
                          615-616, Parekh Market<br />
                          39 Kennedy Bridge, Opera House<br />
                          Charni Road, Mumbai 400004<br />
                          INDIA.
                        </p>
                      </div>
                    </div>

                    {/* Telephone */}
                    <div className="glass-effect" style={{ padding: '20px', borderRadius: '12px', display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                      <span style={{ fontSize: '24px', marginTop: '2px' }}>📞</span>
                      <div>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '14px', marginBottom: '4px' }}>Telephone</p>
                        <p style={{ fontSize: '16px', fontWeight: '500', lineHeight: '1.6' }}>
                          +91-22-2382 7852<br />
                          +91-22-2384 2691<br />
                          +91-22-2384 2513
                        </p>
                      </div>
                    </div>

                    {/* Email Us */}
                    <div className="glass-effect" style={{ padding: '20px', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '16px' }}>
                      <span style={{ fontSize: '24px' }}>✉️</span>
                      <div>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '14px', marginBottom: '4px' }}>Email Us</p>
                        <p style={{ fontSize: '16px', fontWeight: '500' }}>demo@effission.com</p>
                      </div>
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
