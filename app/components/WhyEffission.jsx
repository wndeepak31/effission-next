'use client';

export default function WhyEffission() {
  const cards = [
    {
      id: '01',
      title: 'Jewelry-Native\nIntelligence',
      desc: 'Built exclusively for jewelry. Track metals, purity, diamonds, sieve sizes, color stones, memos, and job work with audit-grade precision, giving complete visibility into every gram and carat across manufacturing, wholesale, and retail.',
      bgImage: '/images/why-bg-v1.png',
      paddingLeft: '45%',
      paddingRight: '0%',
      span: 2,
      bgPosition: 'center',
      bgSize: 'cover'
    },
    {
      id: '02',
      title: 'AI-Enabled\nOperating Model',
      desc: 'Reports that talk back. Agentic AI monitors your business and delivers daily WhatsApp and email intelligence, helping leaders identify risks, opportunities, and bottlenecks before they impact growth.',
      bgImage: '/images/why-bg-2.png',
      paddingLeft: '45%',
      paddingRight: '0%',
      span: 2,
      bgPosition: 'center',
      bgSize: 'cover'
    },
    {
      id: '03',
      title: 'Inventory-Light\nCommerce',
      desc: 'Sell before you manufacture. AI rendering, B2B eCatalogs, and 3D configurators allow you to present thousands of virtual designs, reducing dead stock while unlocking working capital and customer choice.',
      bgImage: '/images/why-bg-3.png',
      paddingLeft: '45%',
      paddingRight: '0%',
      span: 2,
      bgPosition: 'center',
      bgSize: 'cover'
    },
    {
      id: '04',
      title: 'Unified Customer &\nChannel Engine',
      desc: 'One customer. One truth. ERP, POS, CRM, loyalty, and commerce operate on a shared data model, ensuring every interaction updates inventory, customer history, and revenue insights in real time.',
      bgImage: '/images/why-bg-4.png',
      paddingLeft: '40%',
      paddingRight: '0%',
      span: 3,
      bgPosition: 'center',
      bgSize: 'cover'
    },
    {
      id: '05',
      title: 'Enterprise-Grade,\nFast to Deploy',
      desc: 'Built to scale globally. Cloud-native architecture and proven deployments across 20+ countries allow businesses to start small, expand rapidly, and avoid costly re-platforming later.',
      bgImage: '/images/why-bg-5.png',
      paddingLeft: '40%',
      paddingRight: '0%',
      span: 3,
      bgPosition: 'center',
      bgSize: 'cover'
    }
  ];



  return (
    <section id="why-effission" className="section" style={{ backgroundColor: '#050505', padding: '40px 0', position: 'relative' }}>
      <div className="container">
        
        {/* Header Section */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginBottom: '16px' }}>
            <span style={{ color: 'var(--accent-gold)', fontSize: '12px' }}>◇</span>
            <span style={{ color: 'var(--accent-gold)', fontSize: '11px', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase' }}>
              WHY EFFISSION
            </span>
            <span style={{ color: 'var(--accent-gold)', fontSize: '12px' }}>◇</span>
          </div>
          
          <h2 style={{ fontSize: 'clamp(36px, 4vw, 48px)', fontFamily: 'Georgia, serif', fontWeight: 400, marginBottom: '20px', lineHeight: 1.2 }}>
            Why leading jewelers choose <span style={{ color: 'var(--accent-gold)' }}>Effission</span>
          </h2>
          
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '16px', maxWidth: '700px', margin: '0 auto', lineHeight: 1.6 }}>
            Purpose-built intelligence, commerce, and automation<br />
            for the modern jewelry industry.
          </p>
        </div>

        {/* Cards Grid */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(6, 1fr)', 
          gap: '24px',
          marginBottom: '24px'
        }}>
          {cards.map((card, idx) => (
            <div key={idx} style={{ 
              gridColumn: `span ${card.span}`,
              position: 'relative',
              borderRadius: '16px',
              border: '1px solid rgba(255, 180, 50, 0.3)',
              background: '#0a0a0a',
              overflow: 'hidden',
              minHeight: '280px',
              display: 'flex',
              alignItems: 'center',
              boxShadow: 'inset 0 0 30px rgba(255, 180, 50, 0.05)'
            }}>
              
              {/* Background Image Layer (for the user's graphic) */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundImage: `url(${card.bgImage})`,
                backgroundSize: card.bgSize,
                backgroundPosition: card.bgPosition,
                backgroundRepeat: 'no-repeat',
                zIndex: 0,
                opacity: 1,
                mixBlendMode: 'screen'
              }}></div>

              {/* Glowing top-left corner accent */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: '20%',
                width: '40%',
                height: '2px',
                background: 'linear-gradient(90deg, transparent, var(--accent-gold), transparent)',
                zIndex: 1,
                opacity: 0.8,
                boxShadow: '0 2px 10px var(--accent-gold)'
              }}></div>

              {/* Content Layer */}
              <div style={{ 
                position: 'relative', 
                zIndex: 2, 
                padding: '40px 32px',
                paddingLeft: card.paddingLeft || '32px',
                paddingRight: card.paddingRight || '32px',
                width: '100%'
              }}>
                <div style={{ color: 'var(--accent-gold)', fontSize: '13px', fontWeight: 600, marginBottom: '12px' }}>
                  {card.id}
                </div>
                <h3 style={{ fontSize: '24px', fontFamily: 'Georgia, serif', fontWeight: 400, marginBottom: '16px', color: '#fff', whiteSpace: 'pre-line', lineHeight: 1.3 }}>
                  {card.title}
                </h3>
                <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.6, margin: 0 }}>
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>



      </div>

      {/* Responsive adjustments using style block to handle CSS Grid on mobile */}
      <style dangerouslySetInnerHTML={{__html: `
        @media (max-width: 1200px) {
          #why-effission .container > div:nth-child(2) > div {
            padding-left: 32px !important;
            padding-right: 32px !important;
          }
        }
        @media (max-width: 1024px) {
          #why-effission .container > div:nth-child(2) {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          #why-effission .container > div:nth-child(2) > div {
            grid-column: span 1 !important;
          }
        }
        @media (max-width: 768px) {
          #why-effission .container > div:nth-child(2) {
            grid-template-columns: 1fr !important;
          }
          #why-effission .container > div:nth-child(2) > div {
            padding-left: 24px !important;
            padding-right: 24px !important;
            padding-top: 100px !important;
            justify-content: flex-end;
          }
        }
      `}} />
    </section>
  );
}
