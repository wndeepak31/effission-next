import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';

export const metadata = {
  title: 'AI-Powered Automation - Effission',
  description: 'Streamline your workflows with intelligent AI tools designed for jewelry design inspiration, smart inventory management, and deep customer insights.'
};

export default function AiAutomationPage() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: '100px', minHeight: '100vh' }}>
        {/* Hero Section */}
        <section className="section" style={{ paddingBottom: '40px' }}>
          <div className="container">
            <div className="section-header" style={{ marginBottom: '60px' }}>
              <span className="section-label">Intelligence</span>
              <h1 className="section-title">AI-Powered Automation</h1>
              <p style={{ maxWidth: '700px', margin: '0 auto', color: 'var(--text-secondary)', fontSize: '18px' }}>
                Streamline your workflows with intelligent AI tools designed for jewelry design inspiration, smart inventory management, and deep customer insights. Harness the power of data to fuel your growth.
              </p>
            </div>
            
            <div className="process-split" style={{ marginBottom: '60px', alignItems: 'center' }}>
                <div className="process-split-content">
                  <h2 style={{ fontSize: '28px', marginBottom: '16px' }}>Smarter Business Operations</h2>
                  <p style={{ color: 'var(--text-secondary)', marginBottom: '24px', fontSize: '16px' }}>
                    From predicting trends to automating repetitive tasks, our AI solutions are built specifically for the nuances of the jewelry industry.
                  </p>
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
                  
                  <div style={{ marginTop: '40px' }}>
                    <Link href="/contact" className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px' }}>
                      Talk to an AI Expert <span style={{ fontSize: '1.2em' }}>→</span>
                    </Link>
                  </div>
                </div>
                <div className="process-split-visual" style={{ background: 'url(/images/ai_jewelry_automation_1779341365264.png) center/cover no-repeat', minHeight: '400px', borderRadius: '16px' }}></div>
            </div>
          </div>
        </section>

        {/* Core Capabilities */}
        <section className="section" style={{ background: 'rgba(255,255,255,0.02)', padding: '80px 0' }}>
          <div className="container">
            <h2 style={{ textAlign: 'center', marginBottom: '50px', fontSize: '32px' }}>AI Capabilities for Jewelers</h2>
            <div className="services-grid">
              <div className="service-card">
                <h3 style={{ marginBottom: '16px' }}>Generative Design Inspiration</h3>
                <p style={{ color: 'var(--text-secondary)' }}>Use custom-trained AI models to generate hundreds of unique jewelry concepts based on your brand's historical design language.</p>
              </div>
              <div className="service-card">
                <h3 style={{ marginBottom: '16px' }}>Predictive Inventory</h3>
                <p style={{ color: 'var(--text-secondary)' }}>Our machine learning algorithms analyze past sales and market trends to tell you exactly what stones and metals to stock for the upcoming season.</p>
              </div>
              <div className="service-card">
                <h3 style={{ marginBottom: '16px' }}>Automated Customer Service</h3>
                <p style={{ color: 'var(--text-secondary)' }}>Deploy luxury-trained AI concierges that handle initial client inquiries, schedule viewings, and offer personalized product suggestions 24/7.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Integration Process */}
        <section className="section">
          <div className="container">
            <h2 style={{ textAlign: 'center', marginBottom: '50px', fontSize: '32px' }}>How We Implement AI</h2>
            <div className="process-split" style={{ alignItems: 'flex-start', gap: '40px' }}>
              <div style={{ flex: 1 }}>
                <h4 style={{ color: 'var(--accent-primary)', marginBottom: '10px' }}>1. Data Audit</h4>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '30px' }}>We securely analyze your existing business data—from ERP systems to sales records—to identify automation opportunities.</p>
                
                <h4 style={{ color: 'var(--accent-primary)', marginBottom: '10px' }}>2. Model Training</h4>
                <p style={{ color: 'var(--text-secondary)' }}>We train bespoke AI models specifically on your brand's aesthetic and operational workflows, ensuring a perfect fit.</p>
              </div>
              <div style={{ flex: 1 }}>
                <h4 style={{ color: 'var(--accent-primary)', marginBottom: '10px' }}>3. Seamless Deployment</h4>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '30px' }}>We integrate the AI seamlessly into your existing software stack without disrupting your day-to-day operations.</p>
                
                <h4 style={{ color: 'var(--accent-primary)', marginBottom: '10px' }}>4. Continuous Optimization</h4>
                <p style={{ color: 'var(--text-secondary)' }}>The AI learns and improves over time, becoming more accurate and helpful the more your team uses it.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
