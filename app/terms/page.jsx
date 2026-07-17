import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Terms of Service - Effission',
  description: 'Terms of Service for Effission.'
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: '120px', paddingBottom: '80px', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div className="container" style={{ maxWidth: '800px', textAlign: 'left' }}>
          <h1 className="section-title" style={{ marginBottom: '24px' }}>Terms of Service</h1>
          <div style={{ color: 'var(--text-secondary)', fontSize: '16px', lineHeight: '1.8' }}>
            <p style={{ marginBottom: '16px' }}>Last updated: July 17, 2026</p>
            <p style={{ marginBottom: '16px' }}>
              Welcome to Effission. By accessing or using our website and services, you agree to be bound by these Terms of Service.
            </p>
            <h3 style={{ color: '#fff', marginTop: '32px', marginBottom: '16px' }}>1. Acceptance of Terms</h3>
            <p style={{ marginBottom: '16px' }}>
              If you do not agree to all the terms and conditions of this agreement, then you may not access the website or use any services.
            </p>
            <h3 style={{ color: '#fff', marginTop: '32px', marginBottom: '16px' }}>2. Use of Services</h3>
            <p style={{ marginBottom: '16px' }}>
              You agree to use our services only for lawful purposes and in accordance with these Terms. You are responsible for ensuring that your use of the services complies with all applicable laws and regulations.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
