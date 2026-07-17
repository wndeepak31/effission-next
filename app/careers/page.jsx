import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Careers - Effission',
  description: 'Join the team at Effission.'
};

export default function CareersPage() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: '120px', paddingBottom: '80px', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div className="container" style={{ maxWidth: '800px', textAlign: 'center' }}>
          <h1 className="section-title" style={{ marginBottom: '24px' }}>Careers</h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '18px', lineHeight: '1.6' }}>
            We're always looking for brilliant minds to join our team. 
            Currently, we do not have any open positions, but check back soon!
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
