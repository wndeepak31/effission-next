'use client';

export default function WhoWeServe() {
  const cards = [
    {
      id: 'retailers',
      title: 'Retailers',
      subtitle: 'Run high-velocity stores with full control of stock and customers.',
      bullets: [
        'Jewelry-specific POS for gold, diamond, and fashion jewelry.',
        'Real-time inventory and transfers across stores.',
        'CRM and loyalty programs linked directly to billing.'
      ],
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
          <polyline points="9 22 9 12 15 12 15 22"></polyline>
        </svg>
      ),
      tags: ['Single Store', 'Multi-Store', 'Franchise Networks'],
      image: './images/retailers.png' // DUMMY IMAGE 1: Replace this URL with your retailer background
    },
    {
      id: 'wholesalers',
      title: 'Wholesalers',
      subtitle: 'Sell more designs with less physical inventory.',
      bullets: [
        'B2B eCatalog and tablet app for traveling reps.',
        'Tight memo/approval control and due-date tracking.',
        'Live link to manufacturing for fast order fulfillment.'
      ],
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
        </svg>
      ),
      tags: ['Diamond Traders', 'Jewelry Distributors', 'Sales Teams'],
      image: './images/wholesellers.png' // DUMMY IMAGE 2: Replace this URL with your wholesaler background
    },
    {
      id: 'manufacturers',
      title: 'Manufacturers',
      subtitle: 'Orchestrate complex production with cost and WIP under control.',
      bullets: [
        'Multi-stage workflows, BOMs, and job work tracking.',
        'Precise metal and stone accounting to the last cent and sieve size.',
        'Integrated costing and delivery scheduling.'
      ],
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
          <path d="M2 12h20"></path>
        </svg>
      ),
      tags: ['Manufacturers', 'Job Workers', 'Contractors'],
      image: './images/Manufacturers.png' // DUMMY IMAGE 3: Replace this URL with your manufacturer background
    },
    {
      id: 'digital',
      title: 'Digital-First Brands',
      subtitle: 'Launch immersive digital experiences with operational discipline behind them.',
      bullets: [
        'Shopify and custom stores integrated with ERP and POS.',
        '3D configurators and virtual try-on journeys.',
        'AI-rendered assets for web, marketplaces, and campaigns.'
      ],
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
          <line x1="12" y1="18" x2="12.01" y2="18"></line>
        </svg>
      ),
      tags: ['D2C Brands', 'Online Brands', 'Marketplaces'],
      image: './images/digital-band-1.png' // DUMMY IMAGE 4: Replace this URL with your digital brand background
    }
  ];

  return (
    <section id="who-we-serve" className="section" style={{ backgroundColor: '#050505', padding: '40px 0', position: 'relative' }}>
      <div className="container">
        
        {/* Header Section */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', marginBottom: '24px' }}>
            <div style={{ height: '1px', width: '40px', background: 'linear-gradient(90deg, transparent, var(--accent-gold))' }}></div>
            <span style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: 'var(--accent-gold)' }}></span>
            <span style={{ color: 'var(--accent-gold)', fontSize: '11px', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase' }}>
              WHO WE SERVE
            </span>
            <span style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: 'var(--accent-gold)' }}></span>
            <div style={{ height: '1px', width: '40px', background: 'linear-gradient(270deg, transparent, var(--accent-gold))' }}></div>
          </div>
          
          <h2 style={{ fontSize: 'clamp(32px, 4vw, 42px)', fontFamily: 'Georgia, serif', fontWeight: 400, marginBottom: '20px', lineHeight: 1.2 }}>
            Tailored intelligence for every <span style={{ color: 'var(--accent-gold)' }}>jewelry business</span>
          </h2>
          
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '15px', maxWidth: '700px', margin: '0 auto', lineHeight: 1.6 }}>
            Effission adapts to the realities of your business—whether you sell from a showroom,<br />
            a factory floor, a trading desk, or a browser.
          </p>
        </div>

        {/* Grid Section */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))', 
          gap: '30px', 
          maxWidth: '1440px', 
          margin: '0 auto',
          padding: '0 40px'
        }}>
          {cards.map((card) => (
            <div key={card.id} style={{
              position: 'relative',
              borderRadius: '24px',
              border: '1px solid rgba(255, 180, 50, 0.3)',
              background: '#0a0a0a',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              boxShadow: '0 10px 40px rgba(0,0,0,0.5), inset 0 0 40px rgba(255, 180, 50, 0.05)'
            }}>
              
              {/* Background Image with Gradient Mask */}
              <div style={{
                position: 'absolute',
                top: 0,
                right: 0,
                width: '65%',
                height: '100%',
                backgroundImage: `url(${card.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                maskImage: 'linear-gradient(to right, transparent 0%, black 80%)',
                WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 80%)',
                opacity: 0.6,
                zIndex: 0
              }}></div>

              {/* Content Overlay */}
              <div style={{
                position: 'relative',
                zIndex: 1,
                padding: '32px',
                display: 'flex',
                flexDirection: 'column',
                height: 'auto'
              }}>
                
                {/* Header (Icon + Title) */}
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px', marginBottom: '16px' }}>
                  <div style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    border: '1px solid rgba(255, 180, 50, 0.4)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent-gold)',
                    flexShrink: 0,
                    background: 'rgba(255, 180, 50, 0.05)'
                  }}>
                    {card.icon}
                  </div>
                  <div>
                    <h3 style={{ fontSize: '28px', fontFamily: 'Georgia, serif', fontWeight: 400, margin: '0 0 10px 0' }}>{card.title}</h3>
                    <p style={{ color: 'var(--accent-gold)', fontSize: '14px', lineHeight: 1.5, margin: 0, maxWidth: '280px' }}>
                      {card.subtitle}
                    </p>
                  </div>
                </div>

                {/* Bullets */}
                <ul style={{ 
                  listStyle: 'none', 
                  padding: 0, 
                  margin: '0 0 24px 0', 
                  maxWidth: '320px'
                }}>
                  {card.bullets.map((bullet, idx) => (
                    <li key={idx} style={{ 
                      display: 'flex', 
                      gap: '12px', 
                      alignItems: 'flex-start', 
                      marginBottom: '10px',
                      fontSize: '14px',
                      color: 'rgba(255,255,255,0.8)',
                      lineHeight: 1.5
                    }}>
                      <span style={{ 
                        width: '4px', 
                        height: '4px', 
                        borderRadius: '50%', 
                        backgroundColor: 'var(--accent-gold)', 
                        marginTop: '8px',
                        flexShrink: 0
                      }}></span>
                      {bullet}
                    </li>
                  ))}
                </ul>

                {/* Footer Tags */}
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '16px',
                  flexWrap: 'wrap'
                }}>
                  <span style={{ fontSize: '13px', fontWeight: 500, color: 'rgba(255,255,255,0.9)' }}>Typical Users</span>
                  <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                    {card.tags.map((tag, idx) => (
                      <span key={idx} style={{
                        fontSize: '12px',
                        padding: '6px 16px',
                        borderRadius: '20px',
                        border: '1px solid rgba(255,255,255,0.15)',
                        color: 'rgba(255,255,255,0.7)',
                        background: 'rgba(255,255,255,0.03)'
                      }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
