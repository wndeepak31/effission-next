'use client';

export default function Ecosystem() {
  const layers = [
    {
      title: 'Layer 1: AI & BI Intelligence',
      desc: 'Strategic oversight, machine learning, and real-time insights across your entire jewelry value chain.',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z"></path>
          <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z"></path>
        </svg>
      )
    },
    {
      title: 'Layer 2: Omnichannel Commerce',
      desc: 'High-conversion storefronts, marketplaces, and digital journeys that stay in sync with core operations.',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="9" cy="21" r="1"></circle>
          <circle cx="20" cy="21" r="1"></circle>
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
        </svg>
      )
    },
    {
      title: 'Layer 3: B2B eCatalog & Sales',
      desc: 'Dynamic digital catalogues for wholesalers and sales teams, enabling inventory-light, precision B2B selling.',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      )
    },
    {
      title: 'Layer 4: ERP & Operational Foundation',
      desc: 'Robust, jewelry-native ERP covering manufacturing, wholesale, and retail with rigorous metal and stone control.',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect>
          <path d="M9 22v-4h6v4"></path>
          <path d="M8 6h.01"></path>
          <path d="M16 6h.01"></path>
          <path d="M12 6h.01"></path>
          <path d="M12 10h.01"></path>
          <path d="M12 14h.01"></path>
          <path d="M16 10h.01"></path>
          <path d="M16 14h.01"></path>
          <path d="M8 10h.01"></path>
          <path d="M8 14h.01"></path>
        </svg>
      )
    }
  ];

  const stats = [
    {
      value: '20+',
      label: 'Countries',
      icon: (
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="2" y1="12" x2="22" y2="12"></line>
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
        </svg>
      )
    },
    {
      value: '3000+',
      label: 'Businesses',
      icon: (
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      )
    },
    {
      value: '30+',
      label: 'Years of Expertise',
      icon: (
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="8" r="7"></circle>
          <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
        </svg>
      )
    },
    {
      value: 'Millions',
      label: 'Transactions Processed Daily',
      icon: (
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
          <rect x="18" y="3" width="4" height="18"></rect>
          <rect x="10" y="8" width="4" height="13"></rect>
          <rect x="2" y="13" width="4" height="8"></rect>
        </svg>
      )
    },
    {
      value: '99.9%',
      label: 'Uptime & Reliability',
      icon: (
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
          <polyline points="9 12 11 14 15 10"></polyline>
        </svg>
      )
    }
  ];

  return (
    <section id="ecosystem" className="section" style={{ backgroundColor: '#050505', padding: '40px 0' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <span style={{ 
            color: 'var(--accent-gold)', 
            fontSize: '12px', 
            fontWeight: 600, 
            letterSpacing: '0.2em', 
            textTransform: 'uppercase',
            display: 'block',
            marginBottom: '20px'
          }}>
            THE EFFISSION INTELLIGENCE ECOSYSTEM
          </span>
          <h2 style={{ fontSize: 'clamp(32px, 4vw, 46px)', fontFamily: 'Georgia, serif', fontWeight: 400, marginBottom: '20px' }}>
            One Platform. Every Capability. <span style={{ color: 'var(--accent-gold)' }}>Fully Connected.</span>
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '15px', maxWidth: '800px', margin: '0 auto', lineHeight: 1.6 }}>
            A unified AI-enabled ecosystem connecting operations, customers, commerce,<br/>
            inventory, rendering, and automation into one intelligent source of truth.
          </p>
        </div>

        {/* Central Ecosystem Image with Animation */}
        <div style={{ display: 'flex', justifyContent: 'center', margin: '60px 0', position: 'relative' }}>
          {/* Faint background glow for the image */}
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '60%',
            height: '60%',
            background: 'radial-gradient(circle, rgba(237, 139, 22, 0.15) 0%, transparent 60%)',
            zIndex: 0,
            pointerEvents: 'none'
          }}></div>
          
          <img 
            src="/images/ecosystem.png" 
            alt="Effission Intelligence Ecosystem" 
            style={{ 
              maxWidth: '100%', 
              height: 'auto', 
              position: 'relative',
              zIndex: 1,
              animation: 'float 6s ease-in-out infinite' 
            }} 
          />
        </div>

        {/* 4 Layers Grid */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
          gap: '20px',
          marginBottom: '80px'
        }}>
          {layers.map((layer, idx) => (
            <div key={idx} style={{
              background: '#0a0a0a',
              border: '1px solid rgba(255, 180, 50, 0.2)',
              borderRadius: '16px',
              padding: '24px',
              display: 'flex',
              gap: '16px',
              alignItems: 'flex-start',
              transition: 'all 0.3s ease'
            }}>
              <div style={{ color: 'var(--accent-gold)', flexShrink: 0 }}>
                {layer.icon}
              </div>
              <div>
                <h4 style={{ fontSize: '15px', fontWeight: 600, marginBottom: '8px', color: '#fff' }}>{layer.title}</h4>
                <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.5, margin: 0 }}>{layer.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Row */}
        <div className="ecosystem-stats" style={{ 
          borderTop: '1px solid rgba(255, 180, 50, 0.2)', 
          paddingTop: '60px',
          gap: '30px'
        }}>
          {stats.map((stat, idx) => (
            <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{ color: 'var(--accent-gold)' }}>
                {stat.icon}
              </div>
              <div>
                <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#fff', lineHeight: 1.2 }}>{stat.value}</div>
                <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.6)' }}>{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

      </div>
      <style dangerouslySetInnerHTML={{__html: `
        .ecosystem-stats {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
        }
        @media (min-width: 768px) and (max-width: 1024px) {
          .ecosystem-stats {
            display: grid !important;
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 767px) {
          .ecosystem-stats {
            display: grid !important;
            grid-template-columns: repeat(2, 1fr);
            gap: 20px !important;
          }
        }
      `}} />
    </section>
  );
}
