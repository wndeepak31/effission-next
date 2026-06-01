'use client';

export default function PlatformModules() {
  const modules = [
    {
      id: 'erp',
      title: 'ERP',
      desc: 'Production, inventory, costing, purchasing, and accounting for every jewelry format.',
      image: '/images/erp.png', // DUMMY PATH: Replace with your actual image path
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
          <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
          <line x1="12" y1="22.08" x2="12" y2="12"></line>
        </svg>
      )
    },
    {
      id: 'pos',
      title: 'POS',
      desc: 'Retail and exhibition billing with live stock and customer data at the counter.',
      image: '/images/pos.png', // DUMMY PATH: Replace with your actual image path
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
          <rect x="4" y="6" width="16" height="12" rx="2" ry="2"></rect>
          <path d="M8 6V4h8v2"></path>
          <path d="M4 12h16"></path>
          <path d="M8 15h3"></path>
        </svg>
      )
    },
    {
      id: 'crm',
      title: 'CRM & Loyalty',
      desc: 'Single customer view, loyalty programs, and automated engagement journeys.',
      image: '/images/crm.png', // DUMMY PATH: Replace with your actual image path
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
          <circle cx="12" cy="7" r="4"></circle>
          <polygon points="18 2 19.5 5 23 5.5 20.5 8 21 11.5 18 10 15 11.5 15.5 8 13 5.5 16.5 5 18 2" fill="var(--accent-gold)" stroke="none"></polygon>
        </svg>
      )
    },
    {
      id: 'ecatalog',
      title: 'B2B eCatalog',
      desc: '10,000+ digital designs enabling inventory-light wholesale selling.',
      image: '/images/b2b.png', // DUMMY PATH: Replace with your actual image path
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
          <circle cx="8" cy="8" r="1.5"></circle>
          <circle cx="12" cy="8" r="1.5"></circle>
          <circle cx="16" cy="8" r="1.5"></circle>
          <circle cx="8" cy="16" r="1.5"></circle>
          <circle cx="12" cy="16" r="1.5"></circle>
          <circle cx="16" cy="16" r="1.5"></circle>
        </svg>
      )
    },
    {
      id: 'commerce',
      title: 'B2C Commerce',
      desc: 'Shopify and custom storefronts fully synced with ERP and POS.',
      image: '/images/b2c.png', // DUMMY PATH: Replace with your actual image path
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
          <path d="M10 8h4"></path>
          <path d="M9 14h6"></path>
          <path d="M9 11l1 4h4l1-4Z"></path>
        </svg>
      )
    },
    {
      id: 'automation',
      title: 'Automation Hub',
      desc: 'Agentic AI workflows, alerts, and bots across WhatsApp, email, and web.',
      image: '/images/automation.png', // DUMMY PATH: Replace with your actual image path
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3"></circle>
          <circle cx="5" cy="5" r="2"></circle>
          <circle cx="19" cy="5" r="2"></circle>
          <circle cx="5" cy="19" r="2"></circle>
          <circle cx="19" cy="19" r="2"></circle>
          <path d="M6.5 6.5l4 4"></path>
          <path d="M17.5 6.5l-4 4"></path>
          <path d="M6.5 17.5l4-4"></path>
          <path d="M17.5 17.5l-4-4"></path>
        </svg>
      )
    }
  ];

  return (
    <section id="platform-modules" className="section" style={{ backgroundColor: '#050505', padding: '40px 0', position: 'relative', overflow: 'hidden' }}>
      <div className="container">
        
        {/* Header Section */}
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', marginBottom: '24px' }}>
            <div style={{ height: '1px', width: '40px', background: 'linear-gradient(90deg, transparent, var(--accent-gold))' }}></div>
            <span style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: 'var(--accent-gold)' }}></span>
            <span style={{ color: 'var(--accent-gold)', fontSize: '11px', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase' }}>
              PLATFORM MODULES
            </span>
            <span style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: 'var(--accent-gold)' }}></span>
            <div style={{ height: '1px', width: '40px', background: 'linear-gradient(270deg, transparent, var(--accent-gold))' }}></div>
          </div>
          
          <h2 style={{ fontSize: 'clamp(36px, 4vw, 48px)', fontFamily: 'Georgia, serif', fontWeight: 400, marginBottom: '20px', lineHeight: 1.2 }}>
            One Platform. <span style={{ color: 'var(--accent-gold)' }}>Every Critical Function.</span>
          </h2>
          
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '16px', maxWidth: '700px', margin: '0 auto', lineHeight: 1.6 }}>
            Start with one module or run the full stack—every capability shares<br />
            the same real-time jewelry data model.
          </p>
        </div>

        {/* 6 Columns & Connection Network */}
        <div style={{ position: 'relative', paddingBottom: '40px', maxWidth: '1440px', margin: '0 auto' }}>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(6, 1fr)', 
            gap: '20px'
          }}>
            {modules.map((m) => (
              <div key={m.id} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                
                {/* Module Card */}
                <div style={{ 
                  border: '1px solid rgba(255, 180, 50, 0.4)', 
                  borderRadius: '16px', 
                  background: 'linear-gradient(180deg, rgba(10,10,10,1) 0%, rgba(255, 180, 50, 0.05) 100%)',
                  padding: '40px 24px',
                  textAlign: 'center',
                  position: 'relative',
                  overflow: 'hidden',
                  height: '380px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  width: '100%',
                  boxShadow: 'inset 0 -20px 40px rgba(255, 180, 50, 0.05)'
                }}>
                  {/* Background Image Provision */}
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundImage: `url(${m.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    opacity: 0.8,
                    zIndex: 0,
                    pointerEvents: 'none'
                  }}></div>
                  
                  {/* Content (Z-indexed above background) */}
                  <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', paddingTop: '80px' }}>
                    {/* Content */}
                    <h4 style={{ fontSize: '20px', fontFamily: 'Georgia, serif', fontWeight: 400, marginBottom: '16px' }}>{m.title}</h4>
                    <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.7)', lineHeight: 1.6 }}>{m.desc}</p>
                  </div>
                </div>

                {/* Pill with connection dot */}
                <div style={{ position: 'relative', marginTop: '24px' }}>
                  <div style={{ 
                    padding: '8px 20px', 
                    borderRadius: '20px', 
                    border: '1px solid rgba(255, 180, 50, 0.3)', 
                    background: '#0a0a0a',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    fontSize: '12px',
                    fontWeight: 500,
                    color: 'rgba(255,255,255,0.8)'
                  }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#4CAF50' }}></span>
                    <span>{m.title}</span>
                    <span style={{ color: 'rgba(255,255,255,0.3)', margin: '0 4px' }}>•</span>
                    <span style={{ color: 'rgba(255,255,255,0.6)' }}>Connected</span>
                  </div>
                  
                  {/* Vertical drop line down from pill to the bus */}
                  <div style={{ 
                    position: 'absolute', 
                    top: '100%', 
                    left: '50%', 
                    transform: 'translateX(-50%)',
                    width: '1px', 
                    height: '40px', 
                    background: 'linear-gradient(180deg, var(--accent-gold), rgba(255, 180, 50, 0.3))' 
                  }}></div>
                </div>

              </div>
            ))}
          </div>

          {/* Horizontal Bus Line (spans exactly from center of 1st column to center of 6th column) */}
          <div style={{ 
            position: 'absolute', 
            bottom: 0, 
            left: 'calc(100% / 12)', 
            right: 'calc(100% / 12)', 
            height: '1px', 
            background: 'linear-gradient(90deg, transparent, var(--accent-gold) 15%, var(--accent-gold) 85%, transparent)', 
            opacity: 0.6 
          }}></div>

          {/* Central drop line down into the Foundation Hub */}
          <div style={{ 
            position: 'absolute', 
            bottom: '-40px', 
            left: '50%', 
            transform: 'translateX(-50%)',
            width: '1px', 
            height: '40px', 
            background: 'linear-gradient(180deg, var(--accent-gold), rgba(255, 180, 50, 0.2))',
            boxShadow: '0 0 10px var(--accent-gold)'
          }}></div>
        </div>

        {/* Unified Jewelry Data Foundation Hub */}
        <div style={{ position: 'relative', marginTop: '80px', display: 'flex', justifyContent: 'center' }}>
          
          {/* Oval Glowing Base */}
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '600px',
            height: '120px',
            borderRadius: '50%',
            border: '1px solid rgba(255, 180, 50, 0.2)',
            background: 'radial-gradient(ellipse at center, rgba(255, 180, 50, 0.15) 0%, transparent 60%)',
            zIndex: 1,
            boxShadow: '0 10px 40px rgba(255, 180, 50, 0.1), inset 0 0 30px rgba(255, 180, 50, 0.1)'
          }}></div>

          <div style={{
            padding: '20px 40px',
            border: '1px solid rgba(255, 180, 50, 0.8)',
            borderRadius: '40px',
            background: '#050505',
            position: 'relative',
            zIndex: 2,
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            boxShadow: '0 0 30px rgba(255, 180, 50, 0.3)'
          }}>
            <div style={{ color: 'var(--accent-gold)' }}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                <polyline points="2 17 12 22 22 17"></polyline>
                <polyline points="2 12 12 17 22 12"></polyline>
              </svg>
            </div>
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontSize: '20px', fontWeight: 500, color: '#fff', marginBottom: '4px' }}>Unified Jewelry Data Foundation</div>
              <div style={{ fontSize: '13px', color: 'var(--accent-gold)' }}>Real-time. Accurate. Unified.</div>
            </div>
          </div>
        </div>

        {/* Bottom Title & 4 Feature Blocks */}
        <div style={{ textAlign: 'center', marginTop: '100px' }}>
          <h3 style={{ fontSize: '32px', fontFamily: 'Georgia, serif', fontWeight: 400, marginBottom: '20px' }}>
            One Customer. One Inventory. <span style={{ color: 'var(--accent-gold)' }}>One Source of Truth.</span>
          </h3>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '15px', maxWidth: '700px', margin: '0 auto 60px', lineHeight: 1.6 }}>
            Effission eliminates disconnected systems by connecting operations, commerce, customers,
            and automation through a single jewelry-native platform.
          </p>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(4, 1fr)', 
            gap: '30px', 
            maxWidth: '1200px', 
            margin: '0 auto',
            textAlign: 'left'
          }}>
            {/* Feature 1 */}
            <div style={{ display: 'flex', gap: '16px' }}>
              <div style={{ color: 'var(--accent-gold)', flexShrink: 0 }}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                  <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                  <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
                  <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
                </svg>
              </div>
              <div>
                <h5 style={{ fontSize: '16px', fontWeight: 500, marginBottom: '8px' }}>One Data Model</h5>
                <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.6)', margin: 0, lineHeight: 1.5 }}>No duplicates.<br/>No confusion.</p>
              </div>
            </div>

            {/* Feature 2 */}
            <div style={{ display: 'flex', gap: '16px' }}>
              <div style={{ color: 'var(--accent-gold)', flexShrink: 0 }}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                  <path d="M2 2l20 20"></path>
                </svg>
              </div>
              <div>
                <h5 style={{ fontSize: '16px', fontWeight: 500, marginBottom: '8px' }}>One Real-Time View</h5>
                <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.6)', margin: 0, lineHeight: 1.5 }}>Every update reflects<br/>everywhere.</p>
              </div>
            </div>

            {/* Feature 3 */}
            <div style={{ display: 'flex', gap: '16px' }}>
              <div style={{ color: 'var(--accent-gold)', flexShrink: 0 }}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <circle cx="12" cy="12" r="4"></circle>
                  <path d="M12 2v6"></path>
                  <path d="M12 16v6"></path>
                  <path d="M2 12h6"></path>
                  <path d="M16 12h6"></path>
                </svg>
              </div>
              <div>
                <h5 style={{ fontSize: '16px', fontWeight: 500, marginBottom: '8px' }}>One Connected Platform</h5>
                <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.6)', margin: 0, lineHeight: 1.5 }}>All modules. All teams.<br/>One foundation.</p>
              </div>
            </div>

            {/* Feature 4 */}
            <div style={{ display: 'flex', gap: '16px' }}>
              <div style={{ color: 'var(--accent-gold)', flexShrink: 0 }}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="18" y="3" width="4" height="18"></rect>
                  <rect x="10" y="8" width="4" height="13"></rect>
                  <rect x="2" y="13" width="4" height="8"></rect>
                </svg>
              </div>
              <div>
                <h5 style={{ fontSize: '16px', fontWeight: 500, marginBottom: '8px' }}>One Growth Engine</h5>
                <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.6)', margin: 0, lineHeight: 1.5 }}>Smarter decisions.<br/>Stronger outcomes.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
