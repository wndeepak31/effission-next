'use client';

export default function AboutUs() {
  const dummyLogos1 = [
    '/images/brand-logo/jtv.png',
    '/images/brand-logo/malabar.png',
    '/images/brand-logo/clean-origin.png',
    '/images/brand-logo/bapalal-2.png',
    '/images/brand-logo/kbs.png',
    '/images/brand-logo/resance.png',
  ];

  const dummyLogos2 = [
    '/images/brand-logo/alzain.png',
    '/images/brand-logo/disney.png',
    '/images/brand-logo/irasva.png',
    '/images/brand-logo/diamrusa.png',
    '/images/brand-logo/hallmark.png',
    '/images/brand-logo/sparkling.png',
    '/images/brand-logo/orient.png',
  ];

  const navBtnStyle = {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    zIndex: 10,
    width: '36px',
    height: '36px',
    borderRadius: '50%',
    background: '#0c0c0c',
    border: '1px solid rgba(255, 180, 50, 0.4)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    boxShadow: '0 0 10px rgba(255, 180, 50, 0.1)'
  };

  const containerStyle = {
    display: 'flex',
    overflow: 'hidden',
    padding: '24px 0',
    borderRadius: '16px',
    borderTop: '1px solid rgba(255, 180, 50, 0.8)',
    borderLeft: '1px solid rgba(255, 180, 50, 0.3)',
    borderRight: '1px solid rgba(255, 180, 50, 0.3)',
    borderBottom: '1px solid rgba(255, 180, 50, 0.1)',
    background: 'linear-gradient(180deg, rgba(255, 180, 50, 0.05) 0%, transparent 100%)',
    boxShadow: '0 -4px 20px rgba(255, 180, 50, 0.15), inset 0 10px 30px rgba(255, 180, 50, 0.05)'
  };

  return (
    <section id="about" className="section" style={{ backgroundColor: '#050505', padding: '40px 0', position: 'relative' }}>
      <div className="container">
        
        {/* Header Section */}
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', marginBottom: '24px' }}>
            <div style={{ height: '1px', width: '40px', background: 'linear-gradient(90deg, transparent, var(--accent-gold))' }}></div>
            <span style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: 'var(--accent-gold)' }}></span>
            <span style={{ color: 'var(--accent-gold)', fontSize: '11px', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase' }}>
              TRUSTED BY JEWELRY LEADERS
            </span>
            <span style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: 'var(--accent-gold)' }}></span>
            <div style={{ height: '1px', width: '40px', background: 'linear-gradient(270deg, transparent, var(--accent-gold))' }}></div>
          </div>
          
          <h2 style={{ fontSize: 'clamp(32px, 4vw, 42px)', fontFamily: 'Georgia, serif', fontWeight: 400, marginBottom: '20px', lineHeight: 1.2 }}>
            Powering established jewelry businesses<br />
            across <span className="text-gold">global markets.</span>
          </h2>
          
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '15px', maxWidth: '600px', margin: '0 auto', lineHeight: 1.6 }}>
            From TV shopping networks and digital-first brands to manufacturers,<br />
            wholesalers, and regional retail chains.
          </p>
        </div>

        {/* Carousel Area */}
        <div style={{ position: 'relative', maxWidth: '1440px', margin: '0 auto', padding: '0 40px' }}>
          
          {/* Top Carousel Navigation Arrow Left */}
          <button style={{ ...navBtnStyle, left: '0px', top: '15%' }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent-gold)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
          </button>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {/* Top Carousel */}
            <div className="logo-carousel-container" style={containerStyle}>
              <div style={{ display: 'flex', width: '100%' }}>
                {dummyLogos1.map((logo, i) => (
                  <div key={i} style={{ display: 'flex', flex: 1, alignItems: 'center' }}>
                    <div className="dummy-logo" style={{ 
                      flex: 1,
                      display: 'flex', alignItems: 'center', justifyContent: 'center', 
                      height: '90px', 
                      color: 'rgba(255,255,255,0.9)', 
                      padding: '0 10px'
                    }}>
                      <img src={logo} alt={`Brand Logo ${i + 1}`} style={{ width: '100%', maxWidth: '160px', height: '65px', objectFit: 'contain' }} />
                    </div>
                    {i < dummyLogos1.length - 1 && (
                      <div style={{ width: '1px', height: '40px', background: 'linear-gradient(180deg, transparent, rgba(255,255,255,0.15), transparent)' }}></div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Pagination Dots */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '8px' }}>
              <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent-gold)' }}></div>
              {[1,2,3,4,5,6].map(i => (
                <div key={i} style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'rgba(255,255,255,0.3)' }}></div>
              ))}
            </div>

            {/* Bottom Carousel */}
            <div className="logo-carousel-container" style={containerStyle}>
              <div style={{ display: 'flex', width: '100%' }}>
                {dummyLogos2.map((logo, i) => (
                  <div key={i} style={{ display: 'flex', flex: 1, alignItems: 'center' }}>
                    <div className="dummy-logo" style={{ 
                      flex: 1,
                      display: 'flex', alignItems: 'center', justifyContent: 'center', 
                      height: '90px', 
                      color: 'rgba(255,255,255,0.9)', 
                      padding: '0 10px'
                    }}>
                      <img src={logo} alt={`Brand Logo ${i + 7}`} style={{ width: '100%', maxWidth: '160px', height: '65px', objectFit: 'contain' }} />
                    </div>
                    {i < dummyLogos2.length - 1 && (
                      <div style={{ width: '1px', height: '40px', background: 'linear-gradient(180deg, transparent, rgba(255,255,255,0.15), transparent)' }}></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Top Carousel Navigation Arrow Right */}
          <button style={{ ...navBtnStyle, right: '0px', top: '15%' }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent-gold)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
          </button>
          
          {/* Bottom Carousel Navigation Arrow Left */}
          <button style={{ ...navBtnStyle, left: '0px', top: '85%' }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent-gold)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
          </button>
          
          {/* Bottom Carousel Navigation Arrow Right */}
          <button style={{ ...navBtnStyle, right: '0px', top: '85%' }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent-gold)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
          </button>
        </div>

        {/* Stats Section at the bottom */}
        <div style={{ 
          marginTop: '60px',
          paddingTop: '50px',
          borderTop: '1px solid rgba(255,255,255,0.05)',
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '20px',
          maxWidth: '1440px',
          margin: '60px auto 0',
          paddingLeft: '40px',
          paddingRight: '40px'
        }}>
          {/* Stat 1 */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', justifyContent: 'center' }}>
            <div style={{ color: 'var(--accent-gold)' }}>
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
            </div>
            <div>
              <div style={{ fontSize: '26px', fontWeight: '400', fontFamily: 'Georgia, serif' }}>20+</div>
              <div style={{ fontSize: '13px', opacity: 0.6 }}>Countries</div>
            </div>
          </div>
          
          {/* Stat 2 */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', justifyContent: 'center', borderLeft: '1px solid rgba(255,255,255,0.05)' }}>
            <div style={{ color: 'var(--accent-gold)' }}>
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
            </div>
            <div>
              <div style={{ fontSize: '26px', fontWeight: '400', fontFamily: 'Georgia, serif' }}>3000+</div>
              <div style={{ fontSize: '13px', opacity: 0.6 }}>Businesses</div>
            </div>
          </div>
          
          {/* Stat 3 */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', justifyContent: 'center', borderLeft: '1px solid rgba(255,255,255,0.05)' }}>
            <div style={{ color: 'var(--accent-gold)' }}>
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><path d="M6 3h12l4 6-10 12L2 9l4-6z"/><path d="M2 9h20"/><path d="M12 21V9"/><path d="M6 3l6 6"/><path d="M18 3l-6 6"/></svg>
            </div>
            <div>
              <div style={{ fontSize: '26px', fontWeight: '400', fontFamily: 'Georgia, serif' }}>Millions</div>
              <div style={{ fontSize: '13px', opacity: 0.6 }}>Happy Customers</div>
            </div>
          </div>
          
          {/* Stat 4 */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', justifyContent: 'center', borderLeft: '1px solid rgba(255,255,255,0.05)' }}>
            <div style={{ color: 'var(--accent-gold)' }}>
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><path d="M9 12l2 2 4-4"></path></svg>
            </div>
            <div>
              <div style={{ fontSize: '26px', fontWeight: '400', fontFamily: 'Georgia, serif' }}>99.9%</div>
              <div style={{ fontSize: '13px', opacity: 0.6 }}>Uptime & Reliability</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
