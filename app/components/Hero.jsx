'use client';

import Link from 'next/link';

export default function Hero() {
  return (
    <section className="hero" style={{ paddingTop: '100px' }}>
      <div className="container" style={{ position: 'relative' }}>
        <div className="hero-split">
          <div className="hero-content" style={{ maxWidth: '600px' }}>
            <div className="hero-eyebrow" style={{ marginBottom: '20px' }}>
              <span className="eyebrow-text" style={{ letterSpacing: '0.15em', fontWeight: 600, fontSize: '11px' }}>AI-ENABLED. CONNECTED. INTELLIGENT.</span>
            </div>

            <h1 className="hero-title" style={{ fontFamily: 'Georgia, serif', fontWeight: 400, letterSpacing: '-0.01em', fontSize: 'clamp(36px, 8vw, 64px)', lineHeight: 1.15, marginBottom: '24px' }}>
              The Operating System<br />
              for Modern<br />
              <span className="text-gold">Jewelry Businesses</span>
            </h1>

            <p className="hero-desc" style={{ fontSize: '16px', lineHeight: 1.7, opacity: 0.8, maxWidth: '480px', marginBottom: '40px' }}>
              Design, run, and scale your entire jewelry business<br />
              on one AI-enabled platform—connecting<br />
              operations, customers, and commerce in real time.
            </p>

            <div className="hero-btns" style={{ marginBottom: '80px', gap: '16px' }}>
              {/* <Link href="/contact" className="btn btn-gold" style={{ padding: '14px 28px', borderRadius: '8px' }}>
                Book a Demo <span className="arrow" style={{ marginLeft: '4px' }}>→</span>
              </Link> */}
              <Link href="/platform" className="btn btn-gold" style={{ padding: '14px 28px', borderRadius: '8px', borderColor: 'rgba(255,255,255,0.2)' }}>
                Explore Platform <span className="arrow" style={{ marginLeft: '4px' }}>→</span>
              </Link>
            </div>

            <div className="hero-stats" style={{ display: 'flex', gap: '30px', alignItems: 'center' }}>
              <div className="stat-item" style={{ display: 'flex', flexDirection: 'column' }}>
                <div className="stat-icon" style={{ color: 'var(--accent-gold)', marginBottom: '12px' }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
                </div>
                <div className="stat-value" style={{ fontSize: '22px', fontWeight: 500, marginBottom: '4px' }}>20+</div>
                <div className="stat-label" style={{ fontSize: '11px', opacity: 0.5 }}>Countries</div>
              </div>
              <div className="stat-divider" style={{ width: '1px', background: 'rgba(237, 139, 22, 0.3)', height: '40px' }}></div>

              <div className="stat-item" style={{ display: 'flex', flexDirection: 'column' }}>
                <div className="stat-icon" style={{ color: 'var(--accent-gold)', marginBottom: '12px' }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><line x1="9" y1="22" x2="9" y2="22"></line><line x1="15" y1="22" x2="15" y2="22"></line><line x1="9" y1="6" x2="9" y2="6"></line><line x1="15" y1="6" x2="15" y2="6"></line><line x1="9" y1="10" x2="9" y2="10"></line><line x1="15" y1="10" x2="15" y2="10"></line><line x1="9" y1="14" x2="9" y2="14"></line><line x1="15" y1="14" x2="15" y2="14"></line><line x1="9" y1="18" x2="9" y2="18"></line><line x1="15" y1="18" x2="15" y2="18"></line></svg>
                </div>
                <div className="stat-value" style={{ fontSize: '22px', fontWeight: 500, marginBottom: '4px' }}>3000+</div>
                <div className="stat-label" style={{ fontSize: '11px', opacity: 0.5 }}>Businesses</div>
              </div>
              <div className="stat-divider" style={{ width: '1px', background: 'rgba(237, 139, 22, 0.3)', height: '40px' }}></div>

              <div className="stat-item" style={{ display: 'flex', flexDirection: 'column' }}>
                <div className="stat-icon" style={{ color: 'var(--accent-gold)', marginBottom: '12px' }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                </div>
                <div className="stat-value" style={{ fontSize: '22px', fontWeight: 500, marginBottom: '4px' }}>30+</div>
                <div className="stat-label" style={{ fontSize: '11px', opacity: 0.5 }}>Years of<br />Expertise</div>
              </div>
              <div className="stat-divider" style={{ width: '1px', background: 'rgba(237, 139, 22, 0.3)', height: '40px' }}></div>

              <div className="stat-item" style={{ display: 'flex', flexDirection: 'column' }}>
                <div className="stat-icon" style={{ color: 'var(--accent-gold)', marginBottom: '12px' }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
                </div>
                <div className="stat-value" style={{ fontSize: '22px', fontWeight: 500, marginBottom: '4px' }}>99.9%</div>
                <div className="stat-label" style={{ fontSize: '11px', opacity: 0.5 }}>Uptime</div>
              </div>
            </div>
          </div>

          <div className="hero-visual" style={{ flex: '1.2', display: 'flex', justifyContent: 'flex-end' }}>
            <div className="visual-wrapper" style={{ position: 'relative', width: '100%' }}>
              <img src="/images/banner-02.png" alt="Effission Ecosystem" className="visual-img" style={{ filter: 'brightness(1.1) contrast(1.1)', width: '100%', height: 'auto', display: 'block' }} />
            </div>
          </div>
        </div>

        <div className="scroll-indicator" style={{ position: 'absolute', bottom: '-40px', left: '50%', transform: 'translateX(-50%)', textAlign: 'center', opacity: 0.5 }}>
          <div style={{ fontSize: '9px', letterSpacing: '0.2em', marginBottom: '8px' }}>SCROLL TO EXPLORE</div>
          <svg width="12" height="7" viewBox="0 0 14 8" fill="none" style={{ margin: '0 auto' }}>
            <path d="M1 1L7 7L13 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
      <style dangerouslySetInnerHTML={{
        __html: `
        @media (max-width: 767px) {
          .visual-wrapper {
            width: 100% !important;
            right: 0 !important;
            transform: scale(1) !important;
            margin-top: 20px !important;
          }
          .visual-img {
            max-width: 100%;
            height: auto;
          }
        }
      `}} />
    </section>
  );
}
