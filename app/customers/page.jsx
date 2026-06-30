import React from 'react';
import Link from 'next/link';
import styles from './customers.module.css';

import Header from '../components/Header';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';

export default function CustomersPage() {
  return (
    <>
      <Header />
      <main className="customers-page" style={{ paddingTop: '60px' }}>
        {/* 1. Hero Section */}
        <section className={styles.section}>
          <div className="container">
            <div className={styles.heroLayout}>
              <div className={styles.heroContent}>
                <h4 style={{ color: 'var(--accent-gold, #ed8b16)', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '20px', fontWeight: 400 }}>Customers</h4>
                <h1 className={styles.heroTitle}>
                  Trusted By Leading<br />
                  Jewelry Businesses<br />
                  <span style={{ color: 'var(--accent-gold, #ed8b16)' }}>Worldwide</span>
                </h1>
                <p style={{ marginBottom: '40px', fontSize: '15px', lineHeight: 1.8, opacity: 0.8 }}>
                  From retailers and wholesalers to manufacturers and<br className="hide-mobile" />
                  digital-first brands, Effission helps jewelry businesses<br className="hide-mobile" />
                  modernize operations, accelerate growth, and scale globally.
                </p>
                <div className={styles.heroButtons}>
                  <Link href="#stories" className={`btn btn-gold ${styles.ctaBtn}`} style={{ padding: '14px 28px', borderRadius: '6px' }}>
                    View Success Stories <span style={{ marginLeft: '8px' }}>→</span>
                  </Link>
                  <Link href="/contact" className={`btn btn-outline-gold ${styles.ctaBtn}`} style={{ padding: '14px 28px', borderRadius: '6px', border: '1px solid rgba(255, 255, 255, 0.2)' }}>
                    Book a Demo <span style={{ marginLeft: '8px' }}>→</span>
                  </Link>
                </div>
              </div>

              <div className={styles.heroVisual}>
                <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <img src="/images/map-customer.png" alt="Global Map Connections" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Bar */}
        <section style={{ position: 'relative', zIndex: 10, marginTop: '-30px' }} className={styles.sectionTight}>
          <div className="container">
            <div className={styles.statsGrid}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--accent-gold, #ed8b16)" strokeWidth="1.5"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
                <div>
                  <div style={{ fontSize: '32px', fontFamily: 'Georgia, serif', fontWeight: 400, color: '#fff' }}>20+</div>
                  <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.6)' }}>Countries</div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--accent-gold, #ed8b16)" strokeWidth="1.5"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>
                <div>
                  <div style={{ fontSize: '32px', fontFamily: 'Georgia, serif', fontWeight: 400, color: '#fff' }}>3000+</div>
                  <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.6)' }}>Businesses</div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--accent-gold, #ed8b16)" strokeWidth="1.5"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg>
                <div>
                  <div style={{ fontSize: '32px', fontFamily: 'Georgia, serif', fontWeight: 400, color: '#fff' }}>Millions</div>
                  <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.6)' }}>Transactions</div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--accent-gold, #ed8b16)" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><polyline points="9 12 11 14 15 10" /></svg>
                <div>
                  <div style={{ fontSize: '32px', fontFamily: 'Georgia, serif', fontWeight: 400, color: '#fff' }}>99.9%</div>
                  <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.6)' }}>Uptime</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Trusted By Jewelry Leaders */}
        <section className={styles.section} style={{ backgroundColor: '#050505' }}>
          <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
            <div style={{
              border: '1px solid rgba(255, 180, 50, 0.15)',
              borderRadius: '12px',
              padding: '50px 30px',
              backgroundColor: 'rgba(10, 10, 10, 0.8)',
              position: 'relative'
            }}>
              <h2 className={styles.sectionTitle}>Trusted By Jewelry Leaders</h2>

              <div className={styles.trustedGrid}>

                {/* USA */}
                <div className={styles.trustedColumn}>
                  <div style={{ marginBottom: '30px', textAlign: 'center' }}>
                    <h4 style={{ color: 'var(--accent-gold, #ed8b16)', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '1.5px', margin: '0 0 10px 0' }}>USA</h4>
                    <div style={{ height: '1px', width: '60px', backgroundColor: 'rgba(255, 180, 50, 0.3)', margin: '0 auto' }}></div>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '20px', alignItems: 'center', marginBottom: '25px', width: '100%' }}>
                    <div style={{ display: 'flex', justifyContent: 'center' }}><img src="/images/brand-logo/jtv.png" alt="JTV" style={{ height: '45px', objectFit: 'contain' }} /></div>
                    <div style={{ display: 'flex', justifyContent: 'center' }}><img src="/images/brand-logo/clean-origin.png" alt="Clean Origin" style={{ height: '40px', objectFit: 'contain' }} /></div>
                    <div style={{ display: 'flex', justifyContent: 'center' }}><img src="/images/brand-logo/kbs.png" alt="KBS" style={{ height: '35px', objectFit: 'contain' }} /></div>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <img src="/images/brand-logo/sparkling.png" alt="Sparkling Jewelry" style={{ height: '55px', objectFit: 'contain' }} />
                  </div>
                </div>

                {/* Middle East */}
                <div className={styles.trustedColumn}>
                  <div style={{ marginBottom: '30px', textAlign: 'center' }}>
                    <h4 style={{ color: 'var(--accent-gold, #ed8b16)', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '1.5px', margin: '0 0 10px 0' }}>MIDDLE EAST</h4>
                    <div style={{ height: '1px', width: '80px', backgroundColor: 'rgba(255, 180, 50, 0.3)', margin: '0 auto' }}></div>
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '30px', alignItems: 'center', flex: 1 }}>
                    <img src="/images/brand-logo/malabar.png" alt="Malabar" style={{ height: '70px', objectFit: 'contain' }} />
                    <img src="/images/brand-logo/alzain.png" alt="Al Zain" style={{ height: '45px', objectFit: 'contain' }} />
                  </div>
                </div>

                {/* Asia */}
                <div className={styles.trustedColumn}>
                  <div style={{ marginBottom: '30px', textAlign: 'center' }}>
                    <h4 style={{ color: 'var(--accent-gold, #ed8b16)', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '1.5px', margin: '0 0 10px 0' }}>ASIA</h4>
                    <div style={{ height: '1px', width: '60px', backgroundColor: 'rgba(255, 180, 50, 0.3)', margin: '0 auto' }}></div>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '15px', alignItems: 'center', marginBottom: '25px', width: '100%' }}>
                    <div style={{ display: 'flex', justifyContent: 'center' }}><img src="/images/brand-logo/diamrusa.png" alt="Diamrusa" style={{ width: '100%', maxWidth: '80px', objectFit: 'contain' }} /></div>
                    <div style={{ display: 'flex', justifyContent: 'center', color: '#fff', fontSize: '10px' }}>
                      <img src="/images/brand-logo/paracolor.png" alt="Paracolor" style={{ width: '100%', maxWidth: '80px', objectFit: 'contain', color: 'transparent' }} />
                      <span style={{ display: 'none' }}>Paracolor</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', color: '#fff', fontSize: '10px' }}>
                      <img src="/images/brand-logo/rb-gems.png" alt="RB Gems" style={{ height: '40px', objectFit: 'contain', color: 'transparent' }} />
                      <span style={{ display: 'none' }}>RB Gems</span>
                    </div>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <img src="/images/brand-logo/orient.png" alt="Orient" style={{ height: '50px', objectFit: 'contain' }} />
                  </div>
                </div>

                {/* Licensed & Specialty */}
                <div className={styles.trustedColumn}>
                  <div style={{ marginBottom: '30px', textAlign: 'center' }}>
                    <h4 style={{ color: 'var(--accent-gold, #ed8b16)', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '1.5px', margin: '0 0 10px 0' }}>LICENSED & SPECIALTY</h4>
                    <div style={{ height: '1px', width: '120px', backgroundColor: 'rgba(255, 180, 50, 0.3)', margin: '0 auto' }}></div>
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '30px', alignItems: 'center', flex: 1 }}>
                    <img src="/images/brand-logo/disney.png" alt="Disney" style={{ height: '60px', objectFit: 'contain' }} />
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* 3. Success Stories */}
        {/* 3. Success Stories */}
        <section id="stories" className={styles.section}>
          <div style={{ maxWidth: '1600px', margin: '0 auto' }}>
            <h2 className={styles.sectionTitle}>Success Stories That Inspire</h2>

            <div className={styles.grid4Col}>

              {/* Card 1 */}
              <div style={{ border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', overflow: 'hidden', backgroundColor: '#050505', display: 'flex', flexDirection: 'column' }}>
                <div style={{ position: 'relative', height: '220px', backgroundColor: '#111' }}>
                  <img src="/images/customers/Personalization%20At%20Scale1.png" alt="JTV Mockup" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 1 }} />
                </div>
                <div style={{ padding: '30px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '13px', marginBottom: '8px' }}>JTV (USA)</div>
                  <h3 style={{ fontSize: '20px', fontFamily: 'Georgia, serif', fontWeight: 400, marginBottom: '16px' }}>Personalization At Scale</h3>
                  <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px', lineHeight: 1.6, marginBottom: '24px', flex: 1 }}>Helping millions of customers create personalized jewelry with confidence.</p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px', paddingBottom: '24px', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent-gold, #ed8b16)" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
                    <div>
                      <div style={{ fontSize: '18px', fontWeight: 400 }}>Millions+</div>
                      <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)' }}>Personalized Combinations</div>
                    </div>
                  </div>
                  <Link href="#" style={{ color: 'var(--accent-gold, #ed8b16)', textDecoration: 'none', fontSize: '14px', fontWeight: 400, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    Read Story <span>→</span>
                  </Link>
                </div>
              </div>

              {/* Card 2 */}
              <div style={{ border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', overflow: 'hidden', backgroundColor: '#050505', display: 'flex', flexDirection: 'column' }}>
                <div style={{ position: 'relative', height: '220px', backgroundColor: '#111' }}>
                  <img src="/images/customers/Connected%20Commerce.png" alt="Malabar Mockup" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 1 }} />
                </div>
                <div style={{ padding: '30px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '13px', marginBottom: '8px' }}>Malabar Gold & Diamonds</div>
                  <h3 style={{ fontSize: '20px', fontFamily: 'Georgia, serif', fontWeight: 400, marginBottom: '16px' }}>Connected Commerce</h3>
                  <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px', lineHeight: 1.6, marginBottom: '24px', flex: 1 }}>Powering B2B engagement across multiple markets in the Middle East.</p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px', paddingBottom: '24px', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent-gold, #ed8b16)" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                    <div>
                      <div style={{ fontSize: '18px', fontWeight: 400 }}>200+</div>
                      <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)' }}>Active Users</div>
                    </div>
                  </div>
                  <Link href="#" style={{ color: 'var(--accent-gold, #ed8b16)', textDecoration: 'none', fontSize: '14px', fontWeight: 400, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    Read Story <span>→</span>
                  </Link>
                </div>
              </div>

              {/* Card 3 */}
              <div style={{ border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', overflow: 'hidden', backgroundColor: '#050505', display: 'flex', flexDirection: 'column' }}>
                <div style={{ position: 'relative', height: '220px', backgroundColor: '#111' }}>
                  <img src="/images/customers/Digital%20First%20Growth.png" alt="Clean Origin Mockup" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 1 }} />
                </div>
                <div style={{ padding: '30px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '13px', marginBottom: '8px' }}>Clean Origin (USA)</div>
                  <h3 style={{ fontSize: '20px', fontFamily: 'Georgia, serif', fontWeight: 400, marginBottom: '16px' }}>Digital-First Growth</h3>
                  <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px', lineHeight: 1.6, marginBottom: '24px', flex: 1 }}>Transforming online experiences and driving global digital sales.</p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px', paddingBottom: '24px', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent-gold, #ed8b16)" strokeWidth="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg>
                    <div>
                      <div style={{ fontSize: '18px', fontWeight: 400 }}>2X</div>
                      <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)' }}>Online Growth</div>
                    </div>
                  </div>
                  <Link href="#" style={{ color: 'var(--accent-gold, #ed8b16)', textDecoration: 'none', fontSize: '14px', fontWeight: 400, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    Read Story <span>→</span>
                  </Link>
                </div>
              </div>

              {/* Card 4 */}
              <div style={{ border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', overflow: 'hidden', backgroundColor: '#050505', display: 'flex', flexDirection: 'column' }}>
                <div style={{ position: 'relative', height: '220px', backgroundColor: '#111' }}>
                  <img src="/images/customers/Modern%20Operations.png" alt="KBS Mockup" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 1 }} />
                </div>
                <div style={{ padding: '30px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '13px', marginBottom: '8px' }}>KBS (USA)</div>
                  <h3 style={{ fontSize: '20px', fontFamily: 'Georgia, serif', fontWeight: 400, marginBottom: '16px' }}>Modern Operations</h3>
                  <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px', lineHeight: 1.6, marginBottom: '24px', flex: 1 }}>Streamlining wholesale operations with real-time inventory visibility.</p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px', paddingBottom: '24px', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent-gold, #ed8b16)" strokeWidth="2"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                    <div>
                      <div style={{ fontSize: '18px', fontWeight: 400 }}>40%</div>
                      <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)' }}>Increase in Efficiency</div>
                    </div>
                  </div>
                  <Link href="#" style={{ color: 'var(--accent-gold, #ed8b16)', textDecoration: 'none', fontSize: '14px', fontWeight: 400, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    Read Story <span>→</span>
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 4. Business Models */}
        <section className={styles.section}>
          <div style={{ maxWidth: '1600px', margin: '0 auto' }}>
            <h2 className={styles.sectionTitle}>Trusted Across Every Jewelry Business Model</h2>

            <div className={styles.grid4Col}>

              {/* Retailers */}
              <div style={{ position: 'relative', height: '240px', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                <img src="/images/customers/RETAILES.png" alt="Retailers" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 1 }} />
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(0deg, rgba(0,0,0,0.8) 0%, transparent 60%)' }}>
                  <div style={{ width: '64px', height: '64px', borderRadius: '50%', border: '1px solid var(--accent-gold, #ed8b16)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px', backgroundColor: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(5px)' }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent-gold, #ed8b16)" strokeWidth="1.5"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>
                  </div>
                  <h3 style={{ fontSize: '18px', fontWeight: 400, color: '#fff' }}>Retailers</h3>
                </div>
              </div>

              {/* Wholesalers */}
              <div style={{ position: 'relative', height: '240px', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                <img src="/images/customers/wholesalers.png" alt="Wholesalers" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 1 }} />
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(0deg, rgba(0,0,0,0.8) 0%, transparent 60%)' }}>
                  <div style={{ width: '64px', height: '64px', borderRadius: '50%', border: '1px solid var(--accent-gold, #ed8b16)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px', backgroundColor: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(5px)' }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent-gold, #ed8b16)" strokeWidth="1.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                  </div>
                  <h3 style={{ fontSize: '18px', fontWeight: 400, color: '#fff' }}>Wholesalers</h3>
                </div>
              </div>

              {/* Manufacturers */}
              <div style={{ position: 'relative', height: '240px', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                <img src="/images/customers/manufacturers.png" alt="Manufacturers" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 1 }} />
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(0deg, rgba(0,0,0,0.8) 0%, transparent 60%)' }}>
                  <div style={{ width: '64px', height: '64px', borderRadius: '50%', border: '1px solid var(--accent-gold, #ed8b16)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px', backgroundColor: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(5px)' }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent-gold, #ed8b16)" strokeWidth="1.5"><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" /></svg>
                  </div>
                  <h3 style={{ fontSize: '18px', fontWeight: 400, color: '#fff' }}>Manufacturers</h3>
                </div>
              </div>

              {/* Digital Brands */}
              <div style={{ position: 'relative', height: '240px', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                <img src="/images/customers/digital%20brands.png" alt="Digital Brands" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 1 }} />
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(0deg, rgba(0,0,0,0.8) 0%, transparent 60%)' }}>
                  <div style={{ width: '64px', height: '64px', borderRadius: '50%', border: '1px solid var(--accent-gold, #ed8b16)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px', backgroundColor: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(5px)' }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent-gold, #ed8b16)" strokeWidth="1.5"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
                  </div>
                  <h3 style={{ fontSize: '18px', fontWeight: 400, color: '#fff' }}>Digital Brands</h3>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 5. Global Reach */}
        <section className={styles.section} style={{ backgroundColor: '#000' }}>
          <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
            <div className={styles.globalReachLayout}>
              {/* Left Text */}
              <div className={styles.globalReachContent}>
                <h2 style={{ fontSize: '32px', fontFamily: 'Georgia, serif', fontWeight: 400, marginBottom: '20px' }}>Global Reach</h2>
                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '15px', lineHeight: 1.6, marginBottom: '40px' }}>
                  Effission powers jewelry businesses across the globe.
                </p>
                <Link href="#" style={{ border: '1px solid var(--accent-gold, #ed8b16)', color: '#fff', padding: '12px 24px', borderRadius: '6px', fontSize: '14px', textDecoration: 'none', display: 'inline-flex', alignItems: 'center' }}>
                  Explore Our Global Presence <span style={{ marginLeft: '8px' }}>→</span>
                </Link>
              </div>

              {/* Map */}
              <div className={styles.globalReachVisual}>
                <img src="/images/map-customer-bg-2.png" alt="Global Map" style={{ width: '100%', height: 'auto', opacity: 0.6 }} />
              </div>

              {/* Right */}
              <div className={styles.globalReachContent} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {[
                  { country: 'USA', desc: 'JTV, Clean Origin, KBS, Sparkling Jewelry' },
                  { country: 'Bahrain', desc: 'Al Zain Jewelry' },
                  { country: 'Egypt', desc: 'El-Gaia Jewelry' },
                  { country: 'Thailand', desc: 'Diamrusa, Paracolor' },
                  { country: 'Nepal', desc: 'RB Gems' },
                  { country: 'India', desc: 'Orient Jewelers & More' }
                ].map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <div style={{ width: '20px', height: '20px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--accent-gold, #ed8b16)' }}></div>
                    </div>
                    <div>
                      <div style={{ color: '#fff', fontSize: '14px', fontWeight: 400 }}>{item.country}</div>
                      <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '12px' }}>{item.desc}</div>
                    </div>
                  </div>
                ))}
                <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '12px', marginTop: '10px' }}>...and many more</div>
              </div>

            </div>
          </div>
        </section>

        {/* 6. Why Businesses Choose */}
        <section className={styles.sectionTight} style={{ backgroundColor: '#050505' }}>
          <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
            <div style={{
              border: '1px solid rgba(255, 180, 50, 0.15)',
              borderRadius: '12px',
              padding: '40px 0 30px 0',
              backgroundColor: 'rgba(10, 10, 10, 0.8)'
            }}>
              <h2 className={styles.sectionTitleSmall}>Why Businesses Choose Effission</h2>

              <div className={styles.grid6Col}>
                {[
                  { title: 'Inventory Visibility', desc: 'Real-time visibility across every location.', icon: <><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" /><circle cx="12" cy="12" r="3" /></> },
                  { title: 'Commerce Growth', desc: 'Drive more sales with digital commerce solutions.', icon: <><path d="M12 20V10M18 20V4M6 20v-6" /><path d="M2 22h20" /><polyline points="16 3 22 3 22 9" /><path d="M4 14l8-8 4 4 6-6" /></> },
                  { title: 'Manufacturing Control', desc: 'End-to-end production visibility and control.', icon: <><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" /></> },
                  { title: 'AI Innovation', desc: 'Intelligent automation that drives results.', icon: <><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" /></> },
                  { title: 'Customer Intelligence', desc: 'Understand customers and increase loyalty.', icon: <><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></> },
                  { title: 'Operational Excellence', desc: 'Streamline operations and improve profitability.', icon: <><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="M12 8v8" /><path d="M9 11l3-3 3 3" /></> }
                ].map((item, idx) => (
                  <div key={idx} className={styles.whyChooseItem}>
                    <div style={{ height: '32px', marginBottom: '16px', color: 'var(--accent-gold, #ed8b16)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">{item.icon}</svg>
                    </div>
                    <h4 style={{ fontSize: '14px', fontWeight: 'normal', marginBottom: '8px', color: '#fff' }}>{item.title}</h4>
                    <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.5, maxWidth: '180px' }}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 7. Outcomes */}
        <section className={styles.sectionTight} style={{ backgroundColor: '#050505' }}>
          <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
            <div style={{
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '12px',
              padding: '40px 30px',
              backgroundColor: 'rgba(10, 10, 10, 0.8)'
            }}>
              <h2 className={styles.sectionTitleSmall}>Outcomes That Matter</h2>

              <div className={styles.grid6Col}>
                {[
                  { title: 'Faster Operations', icon: <><path d="M3 15a9 9 0 1 1 18 0" /><path d="M12 6v2" /><path d="M6 10l1.5 1.5" /><path d="M18 10l-1.5 1.5" /><path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" /><path d="m12 12 2.5-2.5" /><path d="M3 15h18" /></> },
                  { title: 'Higher Visibility', icon: <><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" /><circle cx="12" cy="12" r="3" /></> },
                  { title: 'Better Margins', icon: <><ellipse cx="12" cy="6" rx="4" ry="2" /><path d="M8 6v4c0 1.1 1.8 2 4 2s4-.9 4-2V6" /><path d="M8 10v4c0 1.1 1.8 2 4 2s4-.9 4-2v-4" /><ellipse cx="7" cy="14" rx="4" ry="2" /><path d="M3 14v4c0 1.1 1.8 2 4 2s4-.9 4-2v-4" /><ellipse cx="17" cy="14" rx="4" ry="2" /><path d="M13 14v4c0 1.1 1.8 2 4 2s4-.9 4-2v-4" /></> },
                  { title: 'Inventory-Light Selling', icon: <><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" /><path d="M3.27 6.96L12 12.01l8.73-5.05" /><path d="M12 22.08V12" /><path d="m7.5 4.21 9 5.19" /></> },
                  { title: 'Improved Retention', icon: <><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></> },
                  { title: 'Global Scalability', icon: <><circle cx="12" cy="12" r="10" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /><path d="M2 12h20" /><path d="M2.5 8h19" /><path d="M2.5 16h19" /></> }
                ].map((item, idx) => (
                  <div key={idx} style={{ border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', padding: '20px 10px', textAlign: 'center', backgroundColor: '#050505', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <div style={{ height: '32px', marginBottom: '12px', color: 'var(--accent-gold, #ed8b16)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">{item.icon}</svg>
                    </div>
                    <div style={{ fontSize: '13px', color: '#fff', fontWeight: 400 }}>{item.title}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 8. Footer CTA */}
        <section className={styles.sectionTight} style={{ paddingBottom: '60px', backgroundColor: '#050505' }}>
          <div style={{
            maxWidth: '1400px',
            margin: '0 auto',
            position: 'relative',
            borderRadius: '12px',
            overflow: 'hidden',
            border: '1px solid rgba(255, 180, 50, 0.15)'
          }}>
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundImage: 'url("/images/platform-bg-4.png")', backgroundSize: 'contain', backgroundPosition: 'left center', backgroundRepeat: 'no-repeat', opacity: 0.8 }}></div>
            <div className={styles.ctaGradient} style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}></div>

            <div className={styles.ctaLayout}>
              <div className="cta-text" style={{ maxWidth: '450px' }}>
                <h2 style={{ fontSize: '36px', fontFamily: 'Georgia, serif', fontWeight: 400, marginBottom: '16px', lineHeight: 1.2, color: '#fff' }}>Join Leading Jewelry<br />Businesses Worldwide</h2>
                <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.7)', lineHeight: 1.6 }}>Discover how Effission helps jewelry companies modernize operations, accelerate growth, and scale globally.</p>
              </div>
              <div className="cta-btns" style={{ display: 'flex', flexDirection: 'column', gap: '16px', minWidth: '240px' }}>
                <Link href="/contact" style={{ backgroundColor: 'var(--accent-gold, #ed8b16)', color: '#fff', padding: '16px 24px', borderRadius: '6px', fontWeight: 400, textDecoration: 'none', textAlign: 'center', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  Book a Demo <span>→</span>
                </Link>
                <Link href="/contact" style={{ backgroundColor: 'transparent', border: '1px solid var(--accent-gold, #ed8b16)', color: '#fff', padding: '16px 24px', borderRadius: '6px', fontWeight: 400, textDecoration: 'none', textAlign: 'center', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  Talk To An Expert <span style={{ color: 'var(--accent-gold, #ed8b16)' }}>→</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Responsive Styles */}
      <style dangerouslySetInnerHTML={{
        __html: `
        @media (max-width: 900px) {
          .stats-bar {
            padding: 20px !important;
            justify-content: flex-start !important;
          }
          .stat-divider {
            display: none !important;
          }
          .leaders-grid {
            flex-direction: column !important;
          }
          .leader-col {
            border-right: none !important;
            border-bottom: 1px solid rgba(255,255,255,0.1) !important;
          }
          .leader-col:last-child {
            border-bottom: none !important;
          }
          .global-reach-wrap {
            flex-direction: column !important;
            padding: 20px !important;
          }
          .reach-left, .reach-right {
            padding: 0 !important;
            width: 100% !important;
          }
          .reach-center {
            margin: 40px 0 !important;
          }
          .cta-wrapper {
            padding: 40px 20px !important;
            flex-direction: column !important;
            align-items: flex-start !important;
          }
          .cta-btns {
            width: 100% !important;
          }
          .hero-btns {
            flex-direction: column !important;
            width: 100% !important;
          }
          .hero-btns a {
            width: 100% !important;
            justify-content: center !important;
          }
          h1 {
            font-size: 42px !important;
          }
        }
        `
      }} />
      <Footer />
      <BackToTop />
    </>
  );
}
