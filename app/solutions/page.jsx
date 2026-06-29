'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';
import Link from 'next/link';

export default function SolutionsPage() {
  return (
    <>
      <Header />

      <main className="solutions-page" style={{ paddingTop: '60px' }}>

        {/* 1. Hero Section */}
        <section className="solutions-hero section" style={{ paddingBottom: '20px' }}>
          <div className="container">
            <div className="hero-split">
              <div className="hero-content">
                <span className="section-label" style={{ color: 'var(--accent-gold)' }}>SOLUTIONS</span>
                <h1 className="hero-title" style={{ fontFamily: 'Georgia, serif', fontWeight: 400, fontSize: 'clamp(36px, 6vw, 64px)', lineHeight: 1.15, marginBottom: '24px' }}>
                  <span style={{ whiteSpace: 'nowrap' }}>Technology Built For</span><br />
                  <span style={{ whiteSpace: 'nowrap' }}>Every <span className="text-gold">Jewelry</span></span><br />
                  Business Model
                </h1>
                <p className="hero-desc" style={{ marginBottom: '40px', fontSize: '16px', lineHeight: 1.7, opacity: 0.8, maxWidth: '480px' }}>
                  Whether you operate retail stores, wholesale networks, manufacturing facilities, or digital-first brands, Effission adapts to the realities of your business while helping you improve visibility, customer growth, operational control, and profitability.
                </p>
                <div className="hero-btns" style={{ marginBottom: '60px', display: 'flex', gap: '16px' }}>
                  <Link href="/contact" className="btn btn-gold" style={{ padding: '14px 28px', borderRadius: '6px' }}>
                    Book a Strategy Session <span className="arrow" style={{ marginLeft: '8px' }}>→</span>
                  </Link>
                  <Link href="#platform" className="btn btn-outline-gold" style={{ padding: '14px 28px', borderRadius: '6px', border: '1px solid rgba(237, 139, 22, 0.4)' }}>
                    Explore Platform <span className="arrow" style={{ marginLeft: '8px' }}>→</span>
                  </Link>
                </div>

                <div className="hero-trust" style={{ borderTop: 'none', paddingTop: '0', alignItems: 'center', display: 'flex', gap: '16px' }}>
                  <div className="trust-icon" style={{ opacity: 0.8, color: 'var(--accent-gold)' }}>
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                  </div>
                  <p style={{ fontSize: '12px', maxWidth: '300px', opacity: 0.7, lineHeight: 1.6 }}>
                    Trusted by retailers, wholesalers, manufacturers, and digital-first brands across global jewelry markets.
                  </p>
                </div>
              </div>

              <div className="hero-visual" style={{ flex: 1.5, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div className="visual-wrapper solutions-visual-wrapper">
                  <img src="/images/solutions/solution-bg-1.png" alt="Effission Intelligence Core Diagram" className="visual-img" style={{ width: '100%', maxWidth: '900px', height: 'auto', objectFit: 'contain' }} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Choose Your Business Model */}
        <section className="business-models section" style={{ paddingTop: '20px' }}>
          <div className="container">
            <div className="section-header" style={{ marginBottom: '60px' }}>
              <h2 className="section-title" style={{ fontFamily: 'Georgia, serif', fontWeight: 400 }}>Choose Your Business Model</h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '15px' }}>
                Different jewelry businesses face different challenges.<br />
                Effission provides purpose-built solutions tailored to how you operate and grow.
              </p>
            </div>

            <div className="bmodel-grid">
              {/* Retailers */}
              <div className="bmodel-card glass-effect">
                <div className="bmodel-img" style={{ background: 'linear-gradient(to bottom, transparent, var(--bg-secondary)), url(/images/solutions/Retailers.png) center/cover' }}></div>
                <div className="bmodel-content">
                  <h3>Retailers</h3>
                  <div className="bmodel-tagline text-gold">Create Exceptional<br />Store Experiences</div>
                  <ul className="bmodel-list">
                    <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg> Customer retention</li>
                    <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg> Multi-store inventory</li>
                    <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg> Loyalty programs</li>
                  </ul>
                  <Link href="#explore" className="bmodel-link text-gold">Explore Retail Solutions <span style={{ marginLeft: '5px' }}>→</span></Link>
                </div>
              </div>

              {/* Wholesalers */}
              <div className="bmodel-card glass-effect">
                <div className="bmodel-img" style={{ background: 'linear-gradient(to bottom, transparent, var(--bg-secondary)), url(/images/solutions/Wholesalers.png) center/cover' }}></div>
                <div className="bmodel-content">
                  <h3>Wholesalers</h3>
                  <div className="bmodel-tagline text-gold">Sell More.<br />Stock Less.</div>
                  <ul className="bmodel-list">
                    <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg> Dead stock</li>
                    <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg> Memo management</li>
                    <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg> Sales productivity</li>
                  </ul>
                  <Link href="#explore" className="bmodel-link text-gold">Explore Wholesale Solutions <span style={{ marginLeft: '5px' }}>→</span></Link>
                </div>
              </div>

              {/* Manufacturers */}
              <div className="bmodel-card glass-effect">
                <div className="bmodel-img" style={{ background: 'linear-gradient(to bottom, transparent, var(--bg-secondary)), url(/images/solutions/Manufacturers.png) center/cover' }}></div>
                <div className="bmodel-content">
                  <h3>Manufacturers</h3>
                  <div className="bmodel-tagline text-gold">Control Every Gram.<br />Every Process.</div>
                  <ul className="bmodel-list">
                    <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg> WIP visibility</li>
                    <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg> Costing</li>
                    <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg> Production planning</li>
                  </ul>
                  <Link href="#explore" className="bmodel-link text-gold">Explore Manufacturing Solutions <span style={{ marginLeft: '5px' }}>→</span></Link>
                </div>
              </div>

              {/* Digital Brands */}
              <div className="bmodel-card glass-effect">
                <div className="bmodel-img" style={{ background: 'linear-gradient(to bottom, transparent, var(--bg-secondary)), url(/images/solutions/Digital%20Brands.png) center/cover' }}></div>
                <div className="bmodel-content">
                  <h3>Digital Brands</h3>
                  <div className="bmodel-tagline text-gold">Launch Collections<br />Faster.</div>
                  <ul className="bmodel-list">
                    <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg> Content creation</li>
                    <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg> Conversion</li>
                    <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg> Online growth</li>
                  </ul>
                  <Link href="#explore" className="bmodel-link text-gold">Explore Digital Brand Solutions <span style={{ marginLeft: '5px' }}>→</span></Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Common Challenges */}
        <section className="common-challenges section" style={{ padding: '20px 0' }}>
          <div className="container">
            <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '30px', fontFamily: 'Georgia, serif', fontWeight: 400, fontSize: '38px' }}>Common Challenges Across The Jewelry Industry</h2>

            <div className="challenges-layout">
              <div className="challenges-grid">
                <div className="challenge-item">
                  <div className="ef-icon-wrap" style={{ border: 'none', background: 'transparent', boxShadow: 'none', width: 'auto', height: 'auto', marginBottom: '16px' }}>
                    <svg className="ef-icon"><use href="#icon-inventory" /></svg>
                  </div>
                  <h4>Inventory Visibility</h4>
                  <p>Track inventory across stores, warehouses, manufacturing, and sales channels.</p>
                </div>

                <div className="challenge-item">
                  <div className="ef-icon-wrap" style={{ border: 'none', background: 'transparent', boxShadow: 'none', width: 'auto', height: 'auto', marginBottom: '16px' }}>
                    <svg className="ef-icon"><use href="#icon-customer" /></svg>
                  </div>
                  <h4>Customer Growth</h4>
                  <p>Increase repeat purchases and customer lifetime value.</p>
                </div>

                <div className="challenge-item">
                  <div className="ef-icon-wrap" style={{ border: 'none', background: 'transparent', boxShadow: 'none', width: 'auto', height: 'auto', marginBottom: '16px' }}>
                    <svg className="ef-icon"><use href="#icon-automation" /></svg>
                  </div>
                  <h4>Operational Control</h4>
                  <p>Gain visibility into production, costing, and workflows.</p>
                </div>

                <div className="challenge-item">
                  <div className="ef-icon-wrap" style={{ border: 'none', background: 'transparent', boxShadow: 'none', width: 'auto', height: 'auto', marginBottom: '16px' }}>
                    <svg className="ef-icon"><use href="#icon-commerce" /></svg>
                  </div>
                  <h4>Omnichannel Commerce</h4>
                  <p>Connect physical and digital selling experiences.</p>
                </div>
              </div>

              <div className="challenges-solution">
                <svg className="ef-icon" style={{ width: '48px', height: '48px', margin: '0 auto 20px', strokeWidth: 1.2 }}><use href="#icon-diamond" /></svg>
                <h3 style={{ marginBottom: '20px', letterSpacing: '0.05em', fontSize: '22px', fontFamily: 'Georgia, serif', fontWeight: 400 }}>EFFISSION<br />SOLVES ALL FOUR</h3>
                <div className="text-gold" style={{ fontWeight: 500, fontSize: '15px', lineHeight: 1.8 }}>
                  One Platform.<br />One Data Model.<br />One Source Of Truth.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Why Jewelry Businesses Choose Effission */}
        <section className="why-choose section" style={{ padding: '20px 0' }}>
          <div className="container">
            <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '30px', fontFamily: 'Georgia, serif', fontWeight: 400, fontSize: '38px' }}>Why Jewelry Businesses Choose Effission</h2>

            <div className="why-grid">
              <div className="why-card glass-effect">
                <svg className="ef-icon"><use href="#icon-diamond" /></svg>
                <h4>Jewelry-Native<br />Intelligence</h4>
                <p>Built specifically for jewelry operations.</p>
              </div>
              <div className="why-card glass-effect">
                <svg className="ef-icon"><use href="#icon-store" /></svg>
                <h4>Inventory-Light<br />Selling</h4>
                <p>Sell more designs without carrying more stock.</p>
              </div>
              <div className="why-card glass-effect">
                <svg className="ef-icon"><use href="#icon-loyalty" /></svg>
                <h4>Connected Customer<br />Experience</h4>
                <p>Retail, wholesale, and digital journeys unified.</p>
              </div>
              <div className="why-card glass-effect">
                <svg className="ef-icon"><use href="#icon-automation" /></svg>
                <h4>AI-Enabled<br />Operations</h4>
                <p>Automation, alerts, and intelligence built in.</p>
              </div>
              <div className="why-card glass-effect">
                <svg className="ef-icon"><use href="#icon-gold" /></svg>
                <h4>Enterprise<br />Scale</h4>
                <p>Trusted across global jewelry markets.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Powering Established Jewelry Businesses Worldwide */}
        <section className="powering-businesses section" style={{ borderTop: '1px solid var(--glass-border)', borderBottom: '1px solid var(--glass-border)', padding: '40px 0' }}>
          <div className="container">
            <h3 style={{ textAlign: 'center', marginBottom: '40px', fontSize: '38px', fontFamily: 'Georgia, serif', fontWeight: 400 }}>Powering Established Jewelry Businesses Worldwide</h3>

            <div className="logo-strip-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0', marginBottom: '60px', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px', padding: '20px 10px', overflow: 'hidden' }}>
              {[
                { src: '/images/brand-logo/jtv.png', alt: 'JTV' },
                { src: '/images/brand-logo/malabar.png', alt: 'Malabar' },
                { src: '/images/brand-logo/clean-origin.png', alt: 'Clean Origin' },
                { src: '/images/brand-logo/disney.png', alt: 'Disney Fine Jewelry' },
                { src: '/images/brand-logo/bapalal-2.png', alt: 'Bapalal Keshavlal' },
                { src: '/images/brand-logo/kbs.png', alt: 'KBS' },
                { src: '/images/brand-logo/alzain.png', alt: 'El Zain' },
                { src: '/images/brand-logo/irasva.png', alt: 'Irasva' },
                { src: '/images/brand-logo/diamrusa.png', alt: 'Diamrusa' },
                { src: '/images/brand-logo/orient.png', alt: 'Orient' },
                { src: '/images/brand-logo/sparkling.png', alt: 'Sparkling' },
                { src: '/images/brand-logo/resance.png', alt: 'Renaissance' },
              ].map((logo, i, arr) => (
                <div key={i} className="logo-strip-item" style={{ display: 'flex', alignItems: 'center', flex: 1 }}>
                  <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 8px' }}>
                    <img src={logo.src} alt={logo.alt} style={{ maxHeight: '35px', maxWidth: '90px', width: 'auto', height: 'auto', objectFit: 'contain', opacity: 0.9 }} />
                  </div>
                  {i < arr.length - 1 && (
                    <div style={{ width: '1px', height: '30px', background: 'linear-gradient(180deg, transparent, rgba(255,255,255,0.15), transparent)', flexShrink: 0 }}></div>
                  )}
                </div>
              ))}
            </div>

            <div className="responsive-grid-4 about-stats-container">
              {/* Stat 1 */}
              <div className="about-stat">
                <div style={{ color: 'var(--accent-gold)' }}>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
                </div>
                <div>
                  <div style={{ fontSize: '26px', fontWeight: '400', fontFamily: 'Georgia, serif' }}>20+</div>
                  <div style={{ fontSize: '13px', opacity: 0.6 }}>Countries</div>
                </div>
              </div>

              {/* Stat 2 */}
              <div className="about-stat has-border">
                <div style={{ color: 'var(--accent-gold)' }}>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                </div>
                <div>
                  <div style={{ fontSize: '26px', fontWeight: '400', fontFamily: 'Georgia, serif' }}>3000+</div>
                  <div style={{ fontSize: '13px', opacity: 0.6 }}>Businesses</div>
                </div>
              </div>

              {/* Stat 3 */}
              <div className="about-stat has-border">
                <div style={{ color: 'var(--accent-gold)' }}>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><path d="M6 3h12l4 6-10 12L2 9l4-6z" /><path d="M2 9h20" /><path d="M12 21V9" /><path d="M6 3l6 6" /><path d="M18 3l-6 6" /></svg>
                </div>
                <div>
                  <div style={{ fontSize: '26px', fontWeight: '400', fontFamily: 'Georgia, serif' }}>Millions</div>
                  <div style={{ fontSize: '13px', opacity: 0.6 }}>Happy Customers</div>
                </div>
              </div>

              {/* Stat 4 */}
              <div className="about-stat has-border">
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

        {/* 6. Outcomes That Matter */}
        <section className="outcomes section" style={{ padding: '20px 0' }}>
          <div className="container">
            <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '60px', fontFamily: 'Georgia, serif', fontWeight: 400 }}>Outcomes That Matter</h2>

            <div className="outcomes-grid">
              <div className="outcome-card glass-effect">
                <div className="ef-icon-wrap" style={{ flexShrink: 0 }}><svg className="ef-icon"><use href="#icon-inventory" /></svg></div>
                <div>
                  <h4>Reduce Inventory Risk</h4>
                  <p>Sell more while carrying less inventory.</p>
                </div>
              </div>
              <div className="outcome-card glass-effect">
                <div className="ef-icon-wrap" style={{ flexShrink: 0 }}><svg className="ef-icon"><use href="#icon-loyalty" /></svg></div>
                <div>
                  <h4>Increase Customer Lifetime Value</h4>
                  <p>Drive repeat purchases and stronger customer relationships.</p>
                </div>
              </div>
              <div className="outcome-card glass-effect">
                <div className="ef-icon-wrap" style={{ flexShrink: 0 }}><svg className="ef-icon"><use href="#icon-analytics" /></svg></div>
                <div>
                  <h4>Improve Operational Efficiency</h4>
                  <p>Automate workflows and increase visibility.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 7. Footer CTA */}
        <section className="cta-section section" style={{ padding: '20px 0 120px 0' }}>
          <div className="container" style={{ maxWidth: '1400px' }}>
            <div className="cta-banner">
              {/* Left Content */}
              <div className="cta-banner-content">
                <h2>
                  Find The Right Solution<br />For Your Jewelry Business
                </h2>
                <p>
                  Whether you operate stores, factories, wholesale networks, or digital-first brands, Effission provides the technology foundation to help you grow with confidence.
                </p>
                <div className="cta-banner-btns">
                  <Link href="/contact" className="btn btn-gold hover-scale">
                    Book a Strategy Session <span>&rarr;</span>
                  </Link>
                  <Link href="#explore" className="btn btn-outline-gold hover-scale">
                    Explore Platform <span>&rarr;</span>
                  </Link>
                </div>
              </div>

              {/* Right Image */}
              <div className="cta-banner-visual">
                <img src="/images/solutions/platform-bg-4.png" alt="Effission Platform" />
                {/* Gradient overlay to seamlessly fade the image into the black background on the left */}
                <div className="cta-banner-overlay"></div>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
      <BackToTop />
    </>
  );
}
