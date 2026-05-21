import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';

export const metadata = {
  title: 'Integrated CRM / ERP - Effission',
  description: 'Comprehensive business management solutions designed specifically to unify your jewelry operations, from raw material sourcing to final customer relations.'
};

export default function CrmErpPage() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: '100px', minHeight: '100vh' }}>
        {/* Hero Section */}
        <section className="section" style={{ paddingBottom: '40px' }}>
          <div className="container">
            <div className="section-header" style={{ marginBottom: '60px' }}>
              <span className="section-label">Management</span>
              <h1 className="section-title">Integrated CRM / ERP</h1>
              <p style={{ maxWidth: '700px', margin: '0 auto', color: 'var(--text-secondary)', fontSize: '18px' }}>
                Comprehensive business management solutions designed specifically to unify your jewelry operations, from raw material sourcing to final customer relations.
              </p>
            </div>
            
            <div className="process-split" style={{ marginBottom: '60px', alignItems: 'center' }}>
                <div className="process-split-content">
                  <h2 style={{ fontSize: '28px', marginBottom: '16px' }}>Complete Operational Control</h2>
                  <p style={{ color: 'var(--text-secondary)', marginBottom: '24px', fontSize: '16px' }}>
                    Replace fragmented software with a unified powerhouse that tracks every gemstone, interaction, and transaction.
                  </p>
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
                  
                  <div style={{ marginTop: '40px' }}>
                    <Link href="/contact" className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px' }}>
                      Streamline Your Business <span style={{ fontSize: '1.2em' }}>→</span>
                    </Link>
                  </div>
                </div>
                <div className="process-split-visual" style={{ background: 'url(/images/jewelry_crm_erp_1779341413648.png) center/cover no-repeat', minHeight: '400px', borderRadius: '16px' }}></div>
            </div>
          </div>
        </section>

        {/* Modules Grid */}
        <section className="section" style={{ background: 'rgba(255,255,255,0.02)', padding: '80px 0' }}>
          <div className="container">
            <h2 style={{ textAlign: 'center', marginBottom: '50px', fontSize: '32px' }}>Purpose-Built Modules</h2>
            <div className="services-grid">
              <div className="service-card">
                <h3 style={{ marginBottom: '16px' }}>Loose Stone Tracking</h3>
                <p style={{ color: 'var(--text-secondary)' }}>Track individual diamonds and gemstones from procurement to setting, including GIA certificates, carat weight, and origin tracking.</p>
              </div>
              <div className="service-card">
                <h3 style={{ marginBottom: '16px' }}>Custom Manufacturing</h3>
                <p style={{ color: 'var(--text-secondary)' }}>Manage bespoke orders. Track progress through CAD design, casting, polishing, and setting, keeping clients updated automatically.</p>
              </div>
              <div className="service-card">
                <h3 style={{ marginBottom: '16px' }}>Clienteling Dashboard</h3>
                <p style={{ color: 'var(--text-secondary)' }}>Empower associates with 360-degree client views. Get alerts for upcoming anniversaries and suggest gifts based on purchase history.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Data Security and Reporting */}
        <section className="section">
          <div className="container">
            <h2 style={{ textAlign: 'center', marginBottom: '50px', fontSize: '32px' }}>Security & Intelligence</h2>
            <div className="process-split" style={{ alignItems: 'flex-start', gap: '40px' }}>
              <div style={{ flex: 1 }}>
                <h4 style={{ color: 'var(--accent-primary)', marginBottom: '10px' }}>Bank-Grade Security</h4>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '30px' }}>Protect your client lists and financial data with enterprise-level encryption, multi-factor authentication, and granular role-based access controls.</p>
                
                <h4 style={{ color: 'var(--accent-primary)', marginBottom: '10px' }}>Real-Time Financials</h4>
                <p style={{ color: 'var(--text-secondary)' }}>Instantly generate reports on cash flow, inventory valuation, and sales commission calculations without exporting to spreadsheets.</p>
              </div>
              <div style={{ flex: 1 }}>
                <h4 style={{ color: 'var(--accent-primary)', marginBottom: '10px' }}>Omnichannel Syncing</h4>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '30px' }}>Inventory updates instantly across your physical POS systems, e-commerce website, and digital catalogues to prevent overselling.</p>
                
                <h4 style={{ color: 'var(--accent-primary)', marginBottom: '10px' }}>Vendor Management</h4>
                <p style={{ color: 'var(--text-secondary)' }}>Streamline purchase orders, manage vendor credit, and track consignment inventory automatically.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
