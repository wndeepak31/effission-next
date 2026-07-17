import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Privacy Policy - Effission',
  description: 'Privacy Policy for Effission.'
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: '120px', paddingBottom: '80px', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div className="container" style={{ maxWidth: '800px', textAlign: 'left' }}>
          <h1 className="section-title" style={{ marginBottom: '24px' }}>Privacy Policy</h1>
          <div style={{ color: 'var(--text-secondary)', fontSize: '16px', lineHeight: '1.8' }}>
            <p style={{ marginBottom: '16px' }}>Last updated: July 17, 2026</p>
            <p style={{ marginBottom: '16px' }}>
              At Effission, we take your privacy seriously. This Privacy Policy explains how we collect, use, and protect your personal information when you use our services and website.
            </p>
            <h3 style={{ color: '#fff', marginTop: '32px', marginBottom: '16px' }}>1. Information We Collect</h3>
            <p style={{ marginBottom: '16px' }}>
              We may collect personal information that you provide to us, such as your name, email address, and company details when you submit a contact form or request a demo.
            </p>
            <h3 style={{ color: '#fff', marginTop: '32px', marginBottom: '16px' }}>2. How We Use Your Information</h3>
            <p style={{ marginBottom: '16px' }}>
              We use the information we collect to respond to your inquiries, provide technical support, and communicate with you about our products and services.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
