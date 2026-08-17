import React from 'react';
import Link from 'next/link';
import styles from './company.module.css';

import Header from '../components/Header';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';

export default function CompanyPage() {
  return (
    <>
      <Header />
      <main className="company-page" style={{ paddingTop: '60px' }}>
        {/* 1. Hero Section */}
        <section className={styles.section}>
          <div className="container">
            <div className={styles.heroLayout}>
              <div className={styles.heroContent}>
                <h4 style={{ color: 'var(--accent-gold, #ed8b16)', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '20px', fontWeight: 600 }}>Company</h4>
                <h1 className={styles.heroTitle}>
                  <span style={{ color: '#fff' }}>Built For Jewelry.</span><br />
                  <span style={{ color: 'var(--accent-gold, #ed8b16)' }}>Designed For The Future.</span>
                </h1>
                <p style={{ marginBottom: '40px', fontSize: '16px', lineHeight: 1.8, opacity: 0.8, color: '#fff', maxWidth: '580px' }}>
                  Effission combines deep jewelry industry expertise with<br className="hide-mobile" />
                  modern technology, helping retailers, wholesalers,<br className="hide-mobile" />
                  manufacturers, and digital brands operate more intelligently<br className="hide-mobile" />
                  and grow with confidence.
                </p>
                <div className={styles.heroButtons}>
                  <Link href="/platform" className={`btn btn-outline-gold ${styles.ctaBtn}`} style={{ padding: '14px 28px', borderRadius: '6px', border: '1px solid rgba(255, 255, 255, 0.2)' }}>
                    Explore The Platform <span style={{ marginLeft: '8px', color: 'var(--accent-gold, #ed8b16)' }}>→</span>
                  </Link>
                </div>
              </div>

              <div className={styles.heroVisual}>
                <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {/* User to place the image here */}
                  <img src="/images/company-bg-1.png" alt="Company Diamond Visual" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Why Businesses Trust Effission */}
        <section className={styles.section} style={{ backgroundColor: '#050505', position: 'relative', zIndex: 2 }}>
          <div className={styles.wideContainer}>
            <div className={styles.trustContainer}>
              <h2 className={styles.sectionTitle}>Why Businesses Trust Effission</h2>
              <div className={styles.grid4Col}>

                {/* Card 1 */}
                <div className={styles.trustCard}>
                  <div style={{ height: '50px', marginBottom: '24px', color: 'var(--accent-gold, #ed8b16)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M6 3h12l4 6-10 12L2 9l4-6Z" />
                      <path d="M2 9h20" />
                      <path d="m12 21-6-12" />
                      <path d="m12 21 6-12" />
                      <path d="M12 3v6" />
                      <path d="m6 3 3 6" />
                      <path d="m18 3-3 6" />
                    </svg>
                  </div>
                  <h4 style={{ color: 'var(--accent-gold, #ed8b16)', fontSize: '17px', fontWeight: '500', marginBottom: '14px', letterSpacing: '0.02em', fontFamily: 'Inter, sans-serif' }}>Jewelry-Native</h4>
                  <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px', lineHeight: 1.6 }}>Built specifically for the jewelry industry. Not adapted from generic ERP software.</p>
                </div>

                {/* Card 2 */}
                <div className={styles.trustCard}>
                  <div style={{ height: '50px', marginBottom: '24px', color: 'var(--accent-gold, #ed8b16)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1Z" />
                      <circle cx="12" cy="12" r="4" />
                    </svg>
                  </div>
                  <h4 style={{ color: 'var(--accent-gold, #ed8b16)', fontSize: '17px', fontWeight: '500', marginBottom: '14px', letterSpacing: '0.02em', fontFamily: 'Inter, sans-serif' }}>Operationally Deep</h4>
                  <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px', lineHeight: 1.6 }}>Designed around inventory, manufacturing, commerce, and customer growth.</p>
                </div>

                {/* Card 3 */}
                <div className={styles.trustCard}>
                  <div style={{ height: '50px', marginBottom: '24px', color: 'var(--accent-gold, #ed8b16)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <line x1="2" y1="12" x2="22" y2="12" />
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                      <path d="M2.5 9h19" />
                      <path d="M2.5 15h19" />
                    </svg>
                  </div>
                  <h4 style={{ color: 'var(--accent-gold, #ed8b16)', fontSize: '17px', fontWeight: '500', marginBottom: '14px', letterSpacing: '0.02em', fontFamily: 'Inter, sans-serif' }}>Globally Proven</h4>
                  <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px', lineHeight: 1.6 }}>Supporting jewelry businesses across multiple countries and markets.</p>
                </div>

                {/* Card 4 */}
                <div className={styles.trustCard}>
                  <div style={{ height: '50px', marginBottom: '24px', color: 'var(--accent-gold, #ed8b16)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2l2 6 6 2-6 2-2 6-2-6-6-2 6-2z" />
                      <path d="M19 4l1 3 3 1-3 1-1 3-1-3-3-1 3-1z" />
                      <path d="M6 18l1 2 2 1-2 1-1 2-1-2-2-1 2-1z" />
                    </svg>
                  </div>
                  <h4 style={{ color: 'var(--accent-gold, #ed8b16)', fontSize: '17px', fontWeight: '500', marginBottom: '14px', letterSpacing: '0.02em', fontFamily: 'Inter, sans-serif' }}>AI-Enabled</h4>
                  <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px', lineHeight: 1.6 }}>Helping businesses create revenue and automate operations through intelligent technology.</p>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* 3. Value Section */}
        <section className={styles.section} style={{ position: 'relative', zIndex: 1 }}>
          <div className={styles.wideContainer}>
            <div className={styles.valueContainer}>
              {/* Left Content */}
              <div className={styles.valueContent}>
                <h4 style={{ color: 'var(--accent-gold, #ed8b16)', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '24px', fontWeight: 600 }}>Technology Built Specifically For Jewelry</h4>
                <h2 style={{ fontSize: 'clamp(32px, 4vw, 40px)', fontFamily: 'Georgia, serif', fontWeight: 400, lineHeight: 1.25, marginBottom: '20px' }}>
                  <span style={{ color: '#fff' }}>Most Software Companies<br />Track Products.<br /></span>
                  <span style={{ color: 'var(--accent-gold, #ed8b16)' }}>Effission Tracks Value.</span>
                </h2>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '15px', lineHeight: 1.6 }}>
                  Track every gram of metal, every carat of stone, every customer interaction, and every dollar of value through one connected jewelry operating system.
                </p>
              </div>

              {/* Right Visual (Circular Diagram) */}
              <div className={styles.valueVisual}>
                {/* Background Connecting Lines */}
                <svg width="360" height="360" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 0 }}>
                  <line x1="180" y1="180" x2="180" y2="0" stroke="rgba(237,139,22,0.3)" strokeWidth="1" />
                  <line x1="180" y1="180" x2="307" y2="53" stroke="rgba(237,139,22,0.3)" strokeWidth="1" />
                  <line x1="180" y1="180" x2="360" y2="180" stroke="rgba(237,139,22,0.3)" strokeWidth="1" />
                  <line x1="180" y1="180" x2="307" y2="307" stroke="rgba(237,139,22,0.3)" strokeWidth="1" />
                  <line x1="180" y1="180" x2="180" y2="360" stroke="rgba(237,139,22,0.3)" strokeWidth="1" />
                  <line x1="180" y1="180" x2="53" y2="307" stroke="rgba(237,139,22,0.3)" strokeWidth="1" />
                  <line x1="180" y1="180" x2="0" y2="180" stroke="rgba(237,139,22,0.3)" strokeWidth="1" />
                  <line x1="180" y1="180" x2="53" y2="53" stroke="rgba(237,139,22,0.3)" strokeWidth="1" />
                  <circle cx="180" cy="180" r="180" fill="none" stroke="rgba(237,139,22,0.3)" strokeWidth="1" />
                </svg>

                {/* Central Core */}
                <div className={styles.centerCore}>
                  <div style={{ color: 'var(--accent-gold, #ed8b16)', marginBottom: '8px' }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <circle cx="12" cy="12" r="2" />
                      <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M4.9 19.1l2.1-2.1M17 7l2.1-2.1" />
                    </svg>
                  </div>
                  <div style={{ color: '#fff', fontSize: '18px', fontWeight: 600, letterSpacing: '0.15em', marginBottom: '8px' }}>EFFISSION</div>
                  <div style={{ color: 'var(--accent-gold, #ed8b16)', fontSize: '13px', textAlign: 'center', lineHeight: 1.4 }}>Jewelry<br />Value Core</div>
                </div>

                {/* Nodes */}
                {/* Top: Gold */}
                <div className={styles.nodeWrapper} style={{ top: 'calc(50% - 180px)', left: '50%' }}>
                  <div className={styles.nodeIcon}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                      <path d="M10 14l-2 4h12l-2-4H10z" /><path d="M13 8l-2 4h6l-2-4h-6z" /><path d="M7 16l-2 4h14l-2-4H7z" />
                    </svg>
                  </div>
                  <span className={`${styles.nodeLabel} ${styles.labelTop}`}>Gold</span>
                </div>

                {/* Top-Right: Diamonds */}
                <div className={styles.nodeWrapper} style={{ top: 'calc(50% - 127px)', left: 'calc(50% + 127px)' }}>
                  <div className={styles.nodeIcon}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                      <path d="M6 4h12l4 6-10 10L2 10l4-6Z" /><path d="M2 10h20" /><path d="M12 20V10" /><path d="M6 4L12 10" /><path d="M18 4L12 10" />
                    </svg>
                  </div>
                  <span className={`${styles.nodeLabel} ${styles.labelRight}`}>Diamonds</span>
                </div>

                {/* Right: Gemstones */}
                <div className={styles.nodeWrapper} style={{ top: '50%', left: 'calc(50% + 180px)' }}>
                  <div className={styles.nodeIcon}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                      <polygon points="12 2 22 8 22 16 12 22 2 16 2 8 12 2" /><path d="M12 22V12" /><path d="M22 8L12 12" /><path d="M2 8L12 12" />
                    </svg>
                  </div>
                  <span className={`${styles.nodeLabel} ${styles.labelRight}`}>Gemstones</span>
                </div>

                {/* Bottom-Right: Manufacturing */}
                <div className={styles.nodeWrapper} style={{ top: 'calc(50% + 127px)', left: 'calc(50% + 127px)' }}>
                  <div className={styles.nodeIcon}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                      <path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" /><path d="M17 18h1" /><path d="M12 18h1" /><path d="M7 18h1" />
                    </svg>
                  </div>
                  <span className={`${styles.nodeLabel} ${styles.labelRight}`}>Manufacturing</span>
                </div>

                {/* Bottom: Commerce */}
                <div className={styles.nodeWrapper} style={{ top: 'calc(50% + 180px)', left: '50%' }}>
                  <div className={styles.nodeIcon}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                      <circle cx="8" cy="21" r="1" /><circle cx="19" cy="21" r="1" /><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
                    </svg>
                  </div>
                  <span className={`${styles.nodeLabel} ${styles.labelBottom}`}>Commerce</span>
                </div>

                {/* Bottom-Left: Memos */}
                <div className={styles.nodeWrapper} style={{ top: 'calc(50% + 127px)', left: 'calc(50% - 127px)' }}>
                  <div className={styles.nodeIcon}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </div>
                  <span className={`${styles.nodeLabel} ${styles.labelLeft}`}>Memos</span>
                </div>

                {/* Left: Pricing */}
                <div className={styles.nodeWrapper} style={{ top: '50%', left: 'calc(50% - 180px)' }}>
                  <div className={styles.nodeIcon}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                      <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" /><line x1="7" y1="7" x2="7.01" y2="7" />
                    </svg>
                  </div>
                  <span className={`${styles.nodeLabel} ${styles.labelLeft}`}>Pricing</span>
                </div>

                {/* Top-Left: Settlements */}
                <div className={styles.nodeWrapper} style={{ top: 'calc(50% - 127px)', left: 'calc(50% - 127px)' }}>
                  <div className={styles.nodeIcon}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><path d="M9 15l2 2 4-4" />
                    </svg>
                  </div>
                  <span className={`${styles.nodeLabel} ${styles.labelLeft}`}>Settlements</span>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* 4. Global Impact Section */}
        <section className={styles.section} style={{ position: 'relative', zIndex: 1 }}>
          <div className={styles.wideContainer}>
            <div className={`company-impact-grid ${styles.impactContainer}`} style={{
              width: '100%',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '12px',
              padding: '40px',
              backgroundColor: '#0c0c0c',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '24px',
              flexWrap: 'wrap'
            }}>
              {/* Column 1: Title */}
              <div className="impact-title" style={{
                color: 'var(--accent-gold, #ed8b16)',
                fontSize: '13px',
                fontWeight: 600,
                letterSpacing: '1px',
                textTransform: 'uppercase',
                paddingRight: '24px'
              }}>
                Global<br />Impact
              </div>

              {/* Stat 1 */}
              <div className={`company-impact-stat ${styles.impactStat}`} style={{ display: 'flex', alignItems: 'center', gap: '16px', paddingLeft: '24px', borderLeft: '1px solid rgba(255,255,255,0.05)', flex: 1, minWidth: '150px' }}>
                <div style={{ color: 'var(--accent-gold, #ed8b16)' }}>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
                </div>
                <div>
                  <div style={{ fontSize: '28px', color: '#fff', fontWeight: '400', fontFamily: 'Georgia, serif' }}>20+</div>
                  <div style={{ fontSize: '13px', color: 'var(--accent-gold, #ed8b16)' }}>Countries</div>
                </div>
              </div>

              {/* Stat 2 */}
              <div className={`company-impact-stat ${styles.impactStat}`} style={{ display: 'flex', alignItems: 'center', gap: '16px', paddingLeft: '24px', borderLeft: '1px solid rgba(255,255,255,0.05)', flex: 1, minWidth: '150px' }}>
                <div style={{ color: 'var(--accent-gold, #ed8b16)' }}>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                </div>
                <div>
                  <div style={{ fontSize: '28px', color: '#fff', fontWeight: '400', fontFamily: 'Georgia, serif' }}>3000+</div>
                  <div style={{ fontSize: '13px', color: 'var(--accent-gold, #ed8b16)' }}>Businesses</div>
                </div>
              </div>

              {/* Stat 3 */}
              <div className={`company-impact-stat ${styles.impactStat}`} style={{ display: 'flex', alignItems: 'center', gap: '16px', paddingLeft: '24px', borderLeft: '1px solid rgba(255,255,255,0.05)', flex: 1, minWidth: '150px' }}>
                <div style={{ color: 'var(--accent-gold, #ed8b16)' }}>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                    <polyline points="16 7 22 7 22 13"></polyline>
                    <line x1="18" y1="20" x2="18" y2="10"></line>
                    <line x1="12" y1="20" x2="12" y2="16"></line>
                    <line x1="6" y1="20" x2="6" y2="14"></line>
                  </svg>
                </div>
                <div>
                  <div style={{ fontSize: '28px', color: '#fff', fontWeight: '400', fontFamily: 'Georgia, serif' }}>Millions</div>
                  <div style={{ fontSize: '13px', color: 'var(--accent-gold, #ed8b16)' }}>Transactions</div>
                </div>
              </div>

              {/* Stat 4 */}
              <div className={`company-impact-stat ${styles.impactStat}`} style={{ display: 'flex', alignItems: 'center', gap: '16px', paddingLeft: '24px', borderLeft: '1px solid rgba(255,255,255,0.05)', flex: 1, minWidth: '150px' }}>
                <div style={{ color: 'var(--accent-gold, #ed8b16)' }}>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><path d="M9 12l2 2 4-4"></path></svg>
                </div>
                <div>
                  <div style={{ fontSize: '28px', color: '#fff', fontWeight: '400', fontFamily: 'Georgia, serif' }}>99.9%</div>
                  <div style={{ fontSize: '13px', color: 'var(--accent-gold, #ed8b16)' }}>Uptime</div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 5. Trusted Brands Section */}
        <section className={styles.section} style={{ position: 'relative', zIndex: 1 }}>
          <div className={styles.wideContainer}>
            <div style={{
              width: '100%',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '12px',
              padding: '40px',
              backgroundColor: '#0c0c0c',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '40px'
            }}>
              <h3 style={{ fontFamily: 'Georgia, serif', fontSize: '24px', fontWeight: 400, color: '#fff', textAlign: 'center' }}>
                Trusted By Jewelry Businesses Worldwide
              </h3>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '100%',
                flexWrap: 'wrap',
                gap: '24px',
                paddingTop: '16px'
              }}>
                <img src="/images/brand-logo/jtv.png" alt="JTV" style={{ height: '50px', objectFit: 'contain', filter: 'brightness(0) invert(1) opacity(0.9)' }} />
                <img src="/images/brand-logo/clean-origin.png" alt="Clean Origin" style={{ height: '45px', objectFit: 'contain', filter: 'brightness(0) invert(1) opacity(0.9)' }} />
                <img src="/images/brand-logo/kbs.png" alt="KBS" style={{ height: '45px', objectFit: 'contain', filter: 'brightness(0) invert(1) opacity(0.9)' }} />
                <div style={{ width: '1px', height: '50px', backgroundColor: 'rgba(255,255,255,0.05)' }}></div>
                <img src="/images/brand-logo/sparkling.png" alt="Sparkling Jewelry" style={{ height: '55px', objectFit: 'contain', filter: 'brightness(0) invert(1) opacity(0.9)' }} />
                <img src="/images/brand-logo/malabar.png" alt="Malabar" style={{ height: '65px', objectFit: 'contain', filter: 'brightness(0) invert(1) opacity(0.9)' }} />
                <div style={{ width: '1px', height: '50px', backgroundColor: 'rgba(255,255,255,0.05)' }}></div>
                <img src="/images/brand-logo/disney.png" alt="Disney" style={{ height: '45px', objectFit: 'contain', filter: 'brightness(0) invert(1) opacity(0.9)' }} />
                <img src="/images/brand-logo/alzain.png" alt="Al Zain" style={{ height: '45px', objectFit: 'contain', filter: 'brightness(0) invert(1) opacity(0.9)' }} />
                <img src="/images/brand-logo/diamrusa.png" alt="Diamrusa" style={{ height: '30px', objectFit: 'contain', filter: 'brightness(0) invert(1) opacity(0.9)' }} />
              </div>
            </div>
          </div>
        </section>

        {/* 6. Our Philosophy Section */}
        <section className={styles.section} style={{ position: 'relative', zIndex: 1 }}>
          <div className={styles.wideContainer}>
            <div className={styles.philosophyLayout} style={{
              position: 'relative',
              width: '100%',
              minHeight: '550px',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '12px',
              padding: '60px 80px',
              backgroundColor: '#0c0c0c',
              overflow: 'hidden'
            }}>

              {/* Background Image Wrapper */}
              <div className={`${styles.halfBgImage} ${styles.right} ${styles.large}`}>
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to right, #0c0c0c 0%, rgba(12,12,12,0.6) 35%, transparent 100%)',
                  zIndex: 1
                }}></div>
                <img src="/images/company-bg-2.png" alt="Philosophy Background" style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'right center',
                  opacity: 2
                }} />
              </div>

              {/* Content */}
              <div className={styles.contentBox} style={{ position: 'relative', zIndex: 2, maxWidth: '60%' }}>
                <div style={{ color: 'var(--accent-gold, #ed8b16)', fontSize: '13px', fontWeight: 600, letterSpacing: '1px', marginBottom: '16px' }}>
                  Our Philosophy
                </div>

                <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(28px, 6vw, 42px)', fontWeight: 400, color: '#fff', lineHeight: 1.2, marginBottom: '4px' }}>
                  Jewelry Businesses Don't<br />Manage Products.
                </h2>
                <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(28px, 6vw, 42px)', fontWeight: 400, color: 'var(--accent-gold, #ed8b16)', lineHeight: 1.2, marginBottom: '40px' }}>
                  They Manage Value.
                </h2>

                <div className={styles.formRow} style={{ gap: '40px', alignItems: 'flex-start' }}>
                  {/* List */}
                  <div style={{ color: '#fff', fontSize: '16px', lineHeight: 2 }}>
                    <div>Gold.</div>
                    <div>Diamonds.</div>
                    <div>Gemstones.</div>
                    <div>Relationships.</div>
                    <div>Trust.</div>
                  </div>

                  {/* Divider */}
                  <div className={`${styles.verticalDivider} ${styles.tall}`} style={{ height: '150px' }}></div>

                  {/* Paragraphs */}
                  <div style={{ flex: 1, color: 'rgba(255,255,255,0.8)', fontSize: '16px', lineHeight: 1.8, maxWidth: '420px', paddingTop: '4px' }}>
                    <p style={{ marginBottom: '24px' }}>
                      Every decision impacts profitability, customer experience, and growth.
                    </p>
                    <p>
                      Effission exists to help jewelry businesses manage that value more intelligently.
                    </p>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </section>

        {/* 7. The Future Is Connected Section */}
        <section className={styles.section} style={{ position: 'relative', zIndex: 1 }}>
          <div className={styles.wideContainer}>
            <div className={styles.connectedLayout} style={{
              position: 'relative',
              width: '100%',
              minHeight: '380px',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '12px',
              padding: '60px 80px',
              backgroundColor: '#0c0c0c',
              overflow: 'hidden'
            }}>

              {/* Background Image Wrapper (Left) */}
              <div className={`${styles.halfBgImage} ${styles.left} ${styles.large}`}>
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to left, #0c0c0c 0%, rgba(12,12,12,0.6) 35%, transparent 100%)',
                  zIndex: 1
                }}></div>
                <img src="/images/company-bg-3.png" alt="Connected Future" style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'left center',
                  opacity: 1
                }} />
              </div>

              {/* Content (Right) */}
              <div className={styles.contentBox} style={{ position: 'relative', zIndex: 2, maxWidth: '55%' }}>
                <div style={{ color: 'var(--accent-gold, #ed8b16)', fontSize: '12px', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '16px' }}>
                  The Future of Jewelry Commerce
                </div>

                <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(28px, 6vw, 42px)', fontWeight: 400, color: '#fff', lineHeight: 1.2, marginBottom: '24px' }}>
                  The Future Is Connected.
                </h2>

                <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '18px', lineHeight: 1.6, marginBottom: '40px' }}>
                  One platform connecting operations, commerce, customers, and intelligent automation.
                </p>

                {/* Icons Row */}
                <div style={{ display: 'flex', gap: '32px', alignItems: 'center', flexWrap: 'wrap' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div style={{ color: 'var(--accent-gold, #ed8b16)' }}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                    </div>
                    <span style={{ color: 'var(--accent-gold, #ed8b16)', fontSize: '14px', fontWeight: 500 }}>Operations</span>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div style={{ color: 'var(--accent-gold, #ed8b16)' }}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
                    </div>
                    <span style={{ color: 'var(--accent-gold, #ed8b16)', fontSize: '14px', fontWeight: 500 }}>Commerce</span>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div style={{ color: 'var(--accent-gold, #ed8b16)' }}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                    </div>
                    <span style={{ color: 'var(--accent-gold, #ed8b16)', fontSize: '14px', fontWeight: 500 }}>Customers</span>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div style={{ color: 'var(--accent-gold, #ed8b16)' }}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z" /><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z" /></svg>
                    </div>
                    <span style={{ color: 'var(--accent-gold, #ed8b16)', fontSize: '14px', fontWeight: 500 }}>Intelligence</span>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </section>

        {/* 8. Leadership Through Innovation Section */}
        <section className={styles.section} style={{ position: 'relative', zIndex: 1 }}>
          <div className={styles.wideContainer}>
            <div style={{
              width: '100%',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '12px',
              padding: '50px 40px',
              backgroundColor: '#0c0c0c',
            }}>

              <h2 style={{ fontFamily: 'Georgia, serif', fontSize: '32px', fontWeight: 400, color: '#fff', textAlign: 'center', marginBottom: '40px' }}>
                Leadership Through Innovation
              </h2>

              <div className={styles.leadershipLayout}>

                {/* Column 1 */}
                <div style={{ flex: 1, padding: '0 20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <div style={{ color: 'var(--accent-gold, #ed8b16)', marginBottom: '20px' }}>
                    <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="11" />
                      <path d="M8 10c0-3 8-3 8 0v5c0 3-8 3-8 0v-5z" />
                      <path d="M12 11l2 2-2 2-2-2z" />
                      <path d="M9 10l3 2 3-2" />
                    </svg>
                  </div>
                  <h3 style={{ color: 'var(--accent-gold, #ed8b16)', fontSize: '18px', fontWeight: 500, marginBottom: '16px' }}>Industry Expertise</h3>
                  <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '15px', lineHeight: 1.6, maxWidth: '280px', margin: '0 auto' }}>
                    Built through decades of jewelry technology and operational experience.
                  </p>
                </div>

                {/* Divider */}
                <div className={`${styles.verticalDivider} ${styles.tall}`}></div>

                {/* Column 2 */}
                <div style={{ flex: 1, padding: '0 20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <div style={{ color: 'var(--accent-gold, #ed8b16)', marginBottom: '20px' }}>
                    <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="11" />
                      <circle cx="12" cy="12" r="4" />
                      <path d="M12 1v7" />
                      <path d="M12 16v7" />
                      <path d="M1 12h7" />
                      <path d="M16 12h7" />
                      <circle cx="12" cy="1" r="1" />
                      <circle cx="12" cy="23" r="1" />
                      <circle cx="1" cy="12" r="1" />
                      <circle cx="23" cy="12" r="1" />
                      <path d="M6 6l3 3" />
                      <path d="M18 18l-3-3" />
                      <path d="M18 6l-3 3" />
                      <path d="M6 18l3-3" />
                    </svg>
                  </div>
                  <h3 style={{ color: 'var(--accent-gold, #ed8b16)', fontSize: '18px', fontWeight: 500, marginBottom: '16px' }}>Continuous Innovation</h3>
                  <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '15px', lineHeight: 1.6, maxWidth: '280px', margin: '0 auto' }}>
                    Investing in AI, commerce, automation, and future-ready capabilities.
                  </p>
                </div>

                {/* Divider */}
                <div style={{ width: '1px', height: '140px', backgroundColor: 'rgba(255,255,255,0.1)' }}></div>

                {/* Column 3 */}
                <div style={{ flex: 1, padding: '0 20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <div style={{ color: 'var(--accent-gold, #ed8b16)', marginBottom: '20px' }}>
                    <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z" />
                      <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z" />
                      <path d="M9.5 12h2.5" />
                      <path d="M12 15h2.5" />
                      <path d="M12 9h1.5" />
                      <path d="M10.5 6l1.5 1.5" />
                      <circle cx="8.5" cy="12" r="0.5" />
                      <circle cx="15.5" cy="15" r="0.5" />
                      <circle cx="14.5" cy="9" r="0.5" />
                      <circle cx="9.5" cy="6" r="0.5" />
                    </svg>
                  </div>
                  <h3 style={{ color: 'var(--accent-gold, #ed8b16)', fontSize: '18px', fontWeight: 500, marginBottom: '16px' }}>Long-Term Partnership</h3>
                  <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '15px', lineHeight: 1.6, maxWidth: '280px', margin: '0 auto' }}>
                    Focused on helping jewelry businesses scale sustainably and successfully.
                  </p>
                </div>

              </div>

            </div>
          </div>
        </section>

        {/* 9. Let's Build The Future Section */}
        <section className={styles.section} style={{ position: 'relative', zIndex: 1 }}>
          <div className={styles.wideContainer}>
            <div className={styles.contactLayout} style={{
              width: '100%',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '12px',
              padding: '60px 50px',
              backgroundColor: '#0c0c0c'
            }}>

              {/* Column 1: Text & Contact */}
              <div style={{ flex: '1', paddingRight: '10px' }}>
                <h2 style={{ fontFamily: 'Georgia, serif', fontSize: '36px', fontWeight: 400, color: '#fff', lineHeight: 1.2, marginBottom: '24px' }}>
                  Let's Build The Future<br />Of Jewelry Together
                </h2>
                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '15px', lineHeight: 1.6, marginBottom: '40px' }}>
                  Share your goals with us and our experts will help you discover how Effission can accelerate growth, improve efficiency, and unlock the true value of your jewelry business.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '60px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ color: 'var(--accent-gold, #ed8b16)' }}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                    </div>
                    <span style={{ color: 'rgba(255,255,255,0.8)', fontSize: '14px' }}>demo@effission.com</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ color: 'var(--accent-gold, #ed8b16)' }}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /><path d="M2 12h20" /></svg>
                    </div>
                    <span style={{ color: 'rgba(255,255,255,0.8)', fontSize: '14px' }}>www.effission.com</span>
                  </div>
                </div>
              </div>



              {/* Column 3: Global Presence */}
              <div style={{ flex: '1', paddingLeft: '20px' }}>
                <h3 style={{ color: 'var(--accent-gold, #ed8b16)', fontSize: '20px', fontWeight: 400, marginBottom: '24px' }}>Global Presence</h3>
                <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
                  <div style={{ flex: 1 }}>
                    <img src="/images/map-customer-bg-2.png" alt="World Map" style={{ width: '100%', opacity: 0.9 }} />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', minWidth: '150px' }}>
                    {['India', 'USA', 'Middle East', 'Southeast Asia'].map(region => (
                      <div key={region} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <div style={{ color: 'var(--accent-gold, #ed8b16)' }}>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                        </div>
                        <span style={{ color: 'rgba(255,255,255,0.9)', fontSize: '14px' }}>{region}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>

      {/* Responsive Styles */}
      <style dangerouslySetInnerHTML={{
        __html: `
        @media (max-width: 900px) {
          .hero-btns {
            flex-direction: column !important;
            width: 100% !important;
          }
          .hero-btns a {
            width: 100% !important;
            justify-content: center !important;
          }
        }
        `
      }} />
      <Footer />
      <BackToTop />
    </>
  );
}
