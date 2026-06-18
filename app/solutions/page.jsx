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
        <section className="solutions-hero section">
          <div className="container">
            <div className="hero-split">
              <div className="hero-content">
                <span className="section-label" style={{color: 'var(--accent-gold)'}}>SOLUTIONS</span>
                <h1 className="hero-title" style={{ fontFamily: 'Georgia, serif', fontWeight: 400, fontSize: 'clamp(36px, 6vw, 64px)', lineHeight: 1.15, marginBottom: '24px' }}>
                  <span style={{ whiteSpace: 'nowrap' }}>Technology Built For</span><br/>
                  <span style={{ whiteSpace: 'nowrap' }}>Every <span className="text-gold">Jewelry</span></span><br/>
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
                <div className="visual-wrapper" style={{ position: 'relative', width: '115%', right: '-5%', transform: 'scale(1.15)', aspectRatio: 'auto', maxWidth: 'none' }}>
                  <img src="/images/solutions/solution-bg-1.png" alt="Effission Intelligence Core Diagram" className="visual-img" style={{ width: '100%', maxWidth: '900px', height: 'auto', objectFit: 'contain' }} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Choose Your Business Model */}
        <section className="business-models section">
          <div className="container">
            <div className="section-header" style={{ marginBottom: '60px' }}>
              <h2 className="section-title" style={{ fontFamily: 'Georgia, serif', fontWeight: 400 }}>Choose Your Business Model</h2>
              <p style={{color: 'var(--text-secondary)', fontSize: '15px'}}>
                Different jewelry businesses face different challenges.<br/>
                Effission provides purpose-built solutions tailored to how you operate and grow.
              </p>
            </div>
            
            <div className="bmodel-grid">
              {/* Retailers */}
              <div className="bmodel-card glass-effect">
                <div className="bmodel-img" style={{ background: 'linear-gradient(to bottom, transparent, var(--bg-secondary)), url(https://images.unsplash.com/photo-1599643477874-51be67c4e578?q=80&w=600&auto=format&fit=crop) center/cover' }}></div>
                <div className="bmodel-content">
                  <h3>Retailers</h3>
                  <div className="bmodel-tagline text-gold">Create Exceptional<br/>Store Experiences</div>
                  <ul className="bmodel-list">
                    <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg> Customer retention</li>
                    <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg> Multi-store inventory</li>
                    <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg> Loyalty programs</li>
                  </ul>
                  <Link href="#explore" className="bmodel-link text-gold">Explore Retail Solutions <span style={{marginLeft:'5px'}}>→</span></Link>
                </div>
              </div>
              
              {/* Wholesalers */}
              <div className="bmodel-card glass-effect">
                <div className="bmodel-img" style={{ background: 'linear-gradient(to bottom, transparent, var(--bg-secondary)), url(https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop) center/cover' }}></div>
                <div className="bmodel-content">
                  <h3>Wholesalers</h3>
                  <div className="bmodel-tagline text-gold">Sell More.<br/>Stock Less.</div>
                  <ul className="bmodel-list">
                    <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg> Dead stock</li>
                    <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg> Memo management</li>
                    <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg> Sales productivity</li>
                  </ul>
                  <Link href="#explore" className="bmodel-link text-gold">Explore Wholesale Solutions <span style={{marginLeft:'5px'}}>→</span></Link>
                </div>
              </div>
              
              {/* Manufacturers */}
              <div className="bmodel-card glass-effect">
                <div className="bmodel-img" style={{ background: 'linear-gradient(to bottom, transparent, var(--bg-secondary)), url(https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600&auto=format&fit=crop) center/cover' }}></div>
                <div className="bmodel-content">
                  <h3>Manufacturers</h3>
                  <div className="bmodel-tagline text-gold">Control Every Gram.<br/>Every Process.</div>
                  <ul className="bmodel-list">
                    <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg> WIP visibility</li>
                    <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg> Costing</li>
                    <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg> Production planning</li>
                  </ul>
                  <Link href="#explore" className="bmodel-link text-gold">Explore Manufacturing Solutions <span style={{marginLeft:'5px'}}>→</span></Link>
                </div>
              </div>

              {/* Digital Brands */}
              <div className="bmodel-card glass-effect">
                <div className="bmodel-img" style={{ background: 'linear-gradient(to bottom, transparent, var(--bg-secondary)), url(https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop) center/cover' }}></div>
                <div className="bmodel-content">
                  <h3>Digital Brands</h3>
                  <div className="bmodel-tagline text-gold">Launch Collections<br/>Faster.</div>
                  <ul className="bmodel-list">
                    <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg> Content creation</li>
                    <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg> Conversion</li>
                    <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg> Online growth</li>
                  </ul>
                  <Link href="#explore" className="bmodel-link text-gold">Explore Digital Brand Solutions <span style={{marginLeft:'5px'}}>→</span></Link>
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
                    <svg className="ef-icon"><use href="#icon-inventory"/></svg>
                  </div>
                  <h4>Inventory Visibility</h4>
                  <p>Track inventory across stores, warehouses, manufacturing, and sales channels.</p>
                </div>
                
                <div className="challenge-item">
                  <div className="ef-icon-wrap" style={{ border: 'none', background: 'transparent', boxShadow: 'none', width: 'auto', height: 'auto', marginBottom: '16px' }}>
                    <svg className="ef-icon"><use href="#icon-customer"/></svg>
                  </div>
                  <h4>Customer Growth</h4>
                  <p>Increase repeat purchases and customer lifetime value.</p>
                </div>
                
                <div className="challenge-item">
                  <div className="ef-icon-wrap" style={{ border: 'none', background: 'transparent', boxShadow: 'none', width: 'auto', height: 'auto', marginBottom: '16px' }}>
                    <svg className="ef-icon"><use href="#icon-automation"/></svg>
                  </div>
                  <h4>Operational Control</h4>
                  <p>Gain visibility into production, costing, and workflows.</p>
                </div>
                
                <div className="challenge-item">
                  <div className="ef-icon-wrap" style={{ border: 'none', background: 'transparent', boxShadow: 'none', width: 'auto', height: 'auto', marginBottom: '16px' }}>
                    <svg className="ef-icon"><use href="#icon-commerce"/></svg>
                  </div>
                  <h4>Omnichannel Commerce</h4>
                  <p>Connect physical and digital selling experiences.</p>
                </div>
              </div>
              
              <div className="challenges-solution">
                <svg className="ef-icon" style={{width: '48px', height: '48px', margin: '0 auto 20px', strokeWidth: 1.2}}><use href="#icon-diamond"/></svg>
                <h3 style={{marginBottom: '20px', letterSpacing: '0.05em', fontSize: '22px', fontFamily: 'Georgia, serif', fontWeight: 400}}>EFFISSION<br/>SOLVES ALL FOUR</h3>
                <div className="text-gold" style={{fontWeight: 500, fontSize: '15px', lineHeight: 1.8}}>
                  One Platform.<br/>One Data Model.<br/>One Source Of Truth.
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
                <svg className="ef-icon"><use href="#icon-diamond"/></svg>
                <h4>Jewelry-Native<br/>Intelligence</h4>
                <p>Built specifically for jewelry operations.</p>
              </div>
              <div className="why-card glass-effect">
                <svg className="ef-icon"><use href="#icon-store"/></svg>
                <h4>Inventory-Light<br/>Selling</h4>
                <p>Sell more designs without carrying more stock.</p>
              </div>
              <div className="why-card glass-effect">
                <svg className="ef-icon"><use href="#icon-loyalty"/></svg>
                <h4>Connected Customer<br/>Experience</h4>
                <p>Retail, wholesale, and digital journeys unified.</p>
              </div>
              <div className="why-card glass-effect">
                <svg className="ef-icon"><use href="#icon-automation"/></svg>
                <h4>AI-Enabled<br/>Operations</h4>
                <p>Automation, alerts, and intelligence built in.</p>
              </div>
              <div className="why-card glass-effect">
                <svg className="ef-icon"><use href="#icon-gold"/></svg>
                <h4>Enterprise<br/>Scale</h4>
                <p>Trusted across global jewelry markets.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Powering Established Jewelry Businesses Worldwide */}
        <section className="powering-businesses section" style={{ borderTop: '1px solid var(--glass-border)', borderBottom: '1px solid var(--glass-border)', padding: '60px 0' }}>
          <div className="container">
            <h3 style={{ textAlign: 'center', marginBottom: '40px', fontSize: '22px', fontFamily: 'Georgia, serif', fontWeight: 400 }}>Powering Established Jewelry Businesses Worldwide</h3>
            
            <div className="logo-strip">
               <span>jtv</span>
               <span>MALABAR</span>
               <span>CLEAN ORIGIN</span>
               <span>DISNEY FINE JEWELRY</span>
               <span>BAPALAL</span>
               <span>KBS</span>
               <span>EL ZAIN</span>
               <span>IRASVA</span>
            </div>
            
            <div className="stats-grid">
               <div className="stat-box">
                  <svg className="ef-icon"><use href="#icon-commerce"/></svg>
                  <div>
                    <div className="stat-val text-gold">20+</div>
                    <div className="stat-lbl">Countries</div>
                  </div>
               </div>
               <div className="stat-box">
                  <svg className="ef-icon"><use href="#icon-customer"/></svg>
                  <div>
                    <div className="stat-val text-gold">3000+</div>
                    <div className="stat-lbl">Businesses</div>
                  </div>
               </div>
               <div className="stat-box">
                  <svg className="ef-icon"><use href="#icon-analytics"/></svg>
                  <div>
                    <div className="stat-val text-gold">Millions</div>
                    <div className="stat-lbl">of Transactions</div>
                  </div>
               </div>
               <div className="stat-box">
                  <svg className="ef-icon"><use href="#icon-automation"/></svg>
                  <div>
                    <div className="stat-val text-gold">99.9%</div>
                    <div className="stat-lbl">Uptime</div>
                  </div>
               </div>
            </div>
          </div>
        </section>

        {/* 6. Outcomes That Matter */}
        <section className="outcomes section" style={{ padding: '100px 0' }}>
          <div className="container">
            <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '60px', fontFamily: 'Georgia, serif', fontWeight: 400 }}>Outcomes That Matter</h2>
            
            <div className="outcomes-grid">
               <div className="outcome-card glass-effect">
                  <div className="ef-icon-wrap" style={{ flexShrink: 0 }}><svg className="ef-icon"><use href="#icon-inventory"/></svg></div>
                  <div>
                     <h4>Reduce Inventory Risk</h4>
                     <p>Sell more while carrying less inventory.</p>
                  </div>
               </div>
               <div className="outcome-card glass-effect">
                  <div className="ef-icon-wrap" style={{ flexShrink: 0 }}><svg className="ef-icon"><use href="#icon-loyalty"/></svg></div>
                  <div>
                     <h4>Increase Customer Lifetime Value</h4>
                     <p>Drive repeat purchases and stronger customer relationships.</p>
                  </div>
               </div>
               <div className="outcome-card glass-effect">
                  <div className="ef-icon-wrap" style={{ flexShrink: 0 }}><svg className="ef-icon"><use href="#icon-analytics"/></svg></div>
                  <div>
                     <h4>Improve Operational Efficiency</h4>
                     <p>Automate workflows and increase visibility.</p>
                  </div>
               </div>
            </div>
          </div>
        </section>

        {/* 7. Footer CTA */}
        <section className="cta-section section" style={{ paddingBottom: '120px' }}>
          <div className="container">
             <div className="cta-split">
                <div className="cta-content">
                   <h2 className="section-title" style={{ fontFamily: 'Georgia, serif', fontWeight: 400, marginBottom: '20px' }}>Find The Right Solution<br/>For Your <span className="text-gold" style={{ fontStyle: 'italic' }}>Jewelry Business</span></h2>
                   <p style={{ color: 'var(--text-secondary)', maxWidth: '500px', marginBottom: '40px', fontSize: '16px' }}>Whether you operate stores, factories, wholesale networks, or digital-first brands, Effission provides the technology foundation to help you grow with confidence.</p>
                   <div style={{ display: 'flex', gap: '16px' }}>
                      <Link href="/contact" className="btn btn-gold">Book a Strategy Session <span className="arrow">→</span></Link>
                      <Link href="#platform" className="btn btn-outline-gold">Explore Platform <span className="arrow">→</span></Link>
                   </div>
                </div>
                <div className="cta-visual" style={{ opacity: 0.9, textAlign: 'center' }}>
                   <div className="ef-icon-wrap" style={{ width: '200px', height: '200px', margin: '0 auto', background: 'transparent', boxShadow: 'none', border: '1px solid rgba(237, 139, 22, 0.1)' }}>
                     <svg className="ef-icon" style={{ width: '120px', height: '120px', strokeWidth: 1 }}><use href="#icon-diamond"/></svg>
                   </div>
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
