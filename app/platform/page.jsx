'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';
import Link from 'next/link';
import Script from 'next/script';

const platformSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Effission Platform",
  "operatingSystem": "Web",
  "applicationCategory": "BusinessApplication",
  "description": "Technology Built For Every Jewelry Business Model. Run your entire jewelry business on one platform.",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  }
};

export default function PlatformPage() {
  return (
    <>
      <Header />
      <Script
        id="platform-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(platformSchema) }}
      />
      <main className="platform-page" style={{ paddingTop: '60px' }}>

        {/* 1. Hero Section */}
        <section className="platform-hero section" style={{ paddingBottom: '20px' }}>
          <div className="container">
            <div className="hero-split">
              <div className="hero-content">
                <span className="section-label" style={{ color: 'var(--accent-gold)' }}>PLATFORM</span>
                <h1 className="hero-title" style={{ fontFamily: 'Georgia, serif', fontWeight: 400, fontSize: 'clamp(36px, 6vw, 64px)', lineHeight: 1.15, marginBottom: '24px' }}>
                  <span style={{ whiteSpace: 'nowrap' }}>Technology Built For</span><br />
                  <span style={{ whiteSpace: 'nowrap' }}>Every <span className="text-gold">Jewelry</span></span><br />
                  Business Model
                </h1>
                <p className="hero-desc" style={{ marginBottom: '40px', fontSize: '16px', lineHeight: 1.7, opacity: 0.8, maxWidth: '480px' }}>
                  Whether you operate retail stores, wholesale networks, manufacturing facilities, or digital-first brands, Effission adapts to the realities of your business while helping you improve visibility, customer growth, operational control, and profitability.
                </p>


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
                  <img src="/images/platform/platform-bg-1.png" alt="Effission Intelligence Core Diagram" className="visual-img" style={{ width: '100%', maxWidth: '900px', height: 'auto', objectFit: 'contain' }} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. From Supplier To Customer */}
        <section className="supplier-to-customer section" style={{ padding: '20px 40px' }}>
          <div style={{
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: '12px',
            padding: '40px 20px',
            textAlign: 'center',
            backgroundColor: 'rgba(0,0,0,0.4)',
            backdropFilter: 'blur(10px)',
            maxWidth: '1600px',
            margin: '0 auto',
            width: '100%'
          }}>
            <h2 style={{ fontFamily: 'Georgia, serif', fontWeight: 400, fontSize: '32px', marginBottom: '10px' }}>
              From Supplier To Customer. Fully Connected.
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '15px', marginBottom: '50px' }}>
              Every transaction updates the same operational record.
            </p>

            <div className="process-flow-container" style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'nowrap',
              width: '100%'
            }}>
              {[
                { label: 'Supplier', icon: <><rect x="3" y="3" width="12" height="12" rx="2" ry="2"></rect><path d="M15 8h4.5a2 2 0 0 1 1.9 1.4l1.5 4.6v4h-3M3 18h3M15 18h3M6 18a2 2 0 1 0 4 0 2 2 0 1 0-4 0M18 18a2 2 0 1 0 4 0 2 2 0 1 0-4 0" /></> },
                { label: 'Purchasing', icon: <><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></> },
                { label: 'Inventory', icon: <><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></> },
                { label: 'Manufacturing', icon: <><path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"></path><path d="M17 18h1"></path><path d="M12 18h1"></path><path d="M7 18h1"></path></> },
                { label: 'Job Work', icon: <><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></> },
                { label: 'Pricing', icon: <><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line></> },
                { label: 'Sales', icon: <><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></> },
                { label: 'Customer', icon: <><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></> },
                { label: 'Commerce', icon: <><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></> },
                { label: 'Analytics', icon: <><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></> },
                { label: 'Automation', icon: <><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></> }
              ].map((item, index, arr) => (
                <div key={index} className="process-flow-step" style={{ display: 'flex', alignItems: 'center', flex: index < arr.length - 1 ? 1 : 'none' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: '70px' }}>
                    <div style={{
                      width: '60px',
                      height: '60px',
                      borderRadius: '50%',
                      border: '1px solid rgba(237, 139, 22, 0.4)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '12px',
                      backgroundColor: 'rgba(0,0,0,0.4)',
                      color: '#fff',
                      transition: 'all 0.3s ease'
                    }} className="hover-gold-border">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        {item.icon}
                      </svg>
                    </div>
                    <span style={{ fontSize: '13px', color: '#fff', opacity: 0.9 }}>{item.label}</span>
                  </div>
                  {index < arr.length - 1 && (
                    <div style={{ color: 'var(--accent-gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 1, opacity: 0.8, alignSelf: 'flex-start', marginTop: '23px' }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="13 17 18 12 13 7"></polyline>
                        <polyline points="6 17 11 12 6 7"></polyline>
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* 3. Everything Required */}
        <section className="everything-required section" style={{ padding: '20px 0' }}>
          <div className="container" style={{ maxWidth: '1400px' }}>
            <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '50px', fontFamily: 'Georgia, serif', fontWeight: 400, fontSize: '36px' }}>
              Everything Required To Run A Modern Jewelry Business
            </h2>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))',
              gap: '20px'
            }}>
              {[
                {
                  title: <>Vendor<br />Management</>,
                  desc: 'Control sourcing, purchases, approvals, and supplier relationships.',
                  img: '/images/platform/vendor%20management.png',
                  icon: <><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="8.5" cy="7" r="4" /><line x1="20" y1="8" x2="20" y2="14" /><line x1="17" y1="11" x2="23" y2="11" /></>
                },
                {
                  title: <>Inventory<br />Intelligence</>,
                  desc: 'Track metals, diamonds, gemstones, and finished jewelry across every location.',
                  img: '/images/platform/inventory%20intelligence.png',
                  icon: <><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /><polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1="12" y1="22.08" x2="12" y2="12" /></>
                },
                {
                  title: <>Manufacturing<br />& Job Work</>,
                  desc: 'Manage production, job work, outsourcing, and assembly with complete control.',
                  img: '/images/platform/manufacturing%20and%20job%20work.png',
                  icon: <><path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" /><path d="M17 18h1" /><path d="M12 18h1" /><path d="M7 18h1" /></>
                },
                {
                  title: <>Pricing &<br />Margin Intelligence</>,
                  desc: 'Accurate costing, pricing strategies, metal rates, stone rates, and profitability.',
                  img: '/images/platform/pricing%20and%20margin%20intelligence.png',
                  icon: <><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" /><line x1="7" y1="7" x2="7.01" y2="7" /></>
                },
                {
                  title: 'Sales & Orders',
                  desc: 'Retail, wholesale, custom orders, exhibitions, and seamless order management.',
                  img: '/images/platform/sales%20and%20orders1.png',
                  icon: <><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" /></>
                },
                {
                  title: 'Customer Growth',
                  desc: 'CRM, loyalty, WhatsApp, campaigns, schemes, and repeat revenue.',
                  img: '/images/platform/customer%20growth1.png',
                  icon: <><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></>
                },
                {
                  title: <>Trade Show<br />& Memo</>,
                  desc: 'Order booking, memo issuance, approvals, and invoicing made simple.',
                  img: '/images/platform/trade%20show%20and%20memo1.png',
                  icon: <><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" /></>
                },
                {
                  title: 'Commerce',
                  desc: 'B2B, B2C, marketplaces, stores, and omnichannel commerce that converts.',
                  img: '/images/platform/commerce.png',
                  icon: <><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" /><line x1="3" y1="6" x2="21" y2="6" /><path d="M16 10a4 4 0 0 1-8 0" /></>
                },
                {
                  title: <>Analytics &<br />Automation</>,
                  desc: 'Real-time dashboards, insights, alerts, and intelligent automation.',
                  img: '/images/platform/analytics%20and%20automation1.png',
                  icon: <><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /><polyline points="2 16 6 12 12 18 22 8" /></>
                }
              ].map((item, idx) => (
                <div key={idx} style={{
                  display: 'flex',
                  borderRadius: '12px',
                  border: '1px solid rgba(237, 139, 22, 0.2)',
                  backgroundColor: '#050505',
                  overflow: 'hidden',
                  height: '180px',
                  transition: 'transform 0.3s ease, border-color 0.3s ease'
                }} className="hover-gold-border hover-scale">
                  <div style={{ width: '45%', position: 'relative', flexShrink: 0 }}>
                    <img src={item.img} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 1 }} />
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, transparent 0%, transparent 70%, #050505 100%)' }}></div>
                  </div>
                  <div style={{ flex: 1, padding: '24px 20px 24px 0', display: 'flex', flexDirection: 'column', justifyContent: 'center', zIndex: 1, marginLeft: '-15px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '10px' }}>
                      <div style={{
                        width: '44px', height: '44px', borderRadius: '10px', border: '1px solid rgba(237, 139, 22, 0.3)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-gold)', flexShrink: 0,
                        backgroundColor: 'rgba(237, 139, 22, 0.05)'
                      }}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                          {item.icon}
                        </svg>
                      </div>
                      <h3 style={{ fontSize: '18px', fontWeight: 500, lineHeight: 1.3, margin: 0, fontFamily: 'Georgia, serif' }}>{item.title}</h3>
                    </div>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '13px', lineHeight: 1.6, margin: 0 }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Precision Control Across Every Asset */}
        <section className="precision-control section" style={{ padding: '60px 0' }}>
          <div className="container" style={{ maxWidth: '1400px' }}>
            <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '50px', fontFamily: 'Georgia, serif', fontWeight: 400, fontSize: '36px' }}>
              Precision Control Across Every Asset
            </h2>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
              gap: '20px'
            }}>
              {[
                {
                  title: 'Inventory Precision',
                  img: '/images/platform/inventory%20precision.png',
                  items: [
                    'Gold, Silver, Platinum',
                    'Natural & Lab-Grown Diamonds',
                    'Gemstones',
                    'Finished Jewelry',
                    'Multi-location Visibility'
                  ]
                },
                {
                  title: 'Manufacturing Precision',
                  img: '/images/platform/manufacturing%20precision.png',
                  items: [
                    'Metal Issue & Stone Issue',
                    'WIP Tracking',
                    'Recovery & Loss Tracking',
                    'Karigar Allocation',
                    'Job-wise Profitability'
                  ]
                },
                {
                  title: 'Financial Precision',
                  img: '/images/platform/financial%20precision.png',
                  items: [
                    'Vendor Settlements',
                    'Customer Balances',
                    'Metal & Diamond Accounts',
                    'Memo Settlements',
                    'Complete Audit Trails'
                  ]
                }
              ].map((card, idx) => (
                <div key={idx} style={{
                  display: 'flex',
                  borderRadius: '12px',
                  border: '1px solid rgba(237, 139, 22, 0.2)',
                  backgroundColor: '#050505',
                  overflow: 'hidden',
                  transition: 'transform 0.3s ease, border-color 0.3s ease'
                }} className="hover-gold-border hover-scale">
                  <div style={{ width: '40%', position: 'relative', flexShrink: 0 }}>
                    <img src={card.img} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 1 }} />
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, transparent 0%, transparent 70%, #050505 100%)' }}></div>
                  </div>
                  <div style={{ flex: 1, padding: '35px 20px 35px 0', display: 'flex', flexDirection: 'column', justifyContent: 'center', zIndex: 1, marginLeft: '-15px' }}>
                    <h3 style={{ fontSize: '20px', fontWeight: 500, marginBottom: '24px', fontFamily: 'Georgia, serif', color: '#fff' }}>{card.title}</h3>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '14px' }}>
                      {card.items.map((item, i) => (
                        <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--text-secondary)', fontSize: '14px' }}>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent-gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                            <circle cx="12" cy="12" r="10"></circle>
                            <polyline points="8 12 11 15 16 9"></polyline>
                          </svg>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Core Diagrams */}
        {/* 5. Core Diagrams */}
        <section className="core-diagrams section" style={{ padding: '0 0 30px 0' }}>
          <div className="container" style={{ maxWidth: '1400px' }}>
            <div style={{
              display: 'flex',
              gap: '20px',
              flexWrap: 'wrap'
            }}>
              {/* Left Box: Customer Growth Engine */}
              <div className="responsive-flex-row" style={{
                flex: 1.4,
                minWidth: 'min(100%, 450px)',
                border: '1px solid rgba(237, 139, 22, 0.2)',
                borderRadius: '12px',
                backgroundColor: '#050505',
                padding: '25px 30px',
                gap: '20px'
              }}>
                <div style={{ flex: 1.8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <div style={{ textAlign: 'center', marginBottom: '15px' }}>
                    <h3 style={{ fontSize: '26px', fontFamily: 'Georgia, serif', fontWeight: 400, marginBottom: '8px' }}>Customer Growth Engine</h3>
                    <p style={{ color: 'var(--accent-gold)', fontSize: '14px', fontWeight: 500 }}>Turn First-Time Buyers Into Lifetime Customers</p>
                  </div>
                  <img src="/images/platform/platform-bg-2.png" alt="Customer Growth Engine" style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'contain' }} />
                </div>

                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {[
                    { title: <>Higher<br />Repeat Revenue</>, icon: <><rect x="4" y="14" width="4" height="6" rx="1" /><rect x="10" y="10" width="4" height="10" rx="1" /><rect x="16" y="6" width="4" height="14" rx="1" /><polyline points="2 12 8 6 14 10 22 2" /><polyline points="18 2 22 2 22 6" /></> },
                    { title: <>Higher<br />Lifetime Value</>, icon: <><circle cx="9" cy="7" r="4" /><path d="M15 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><polygon points="19 6 20 8 22 8.5 20.5 10 21 12 19 11 17 12 17.5 10 16 8.5 18 8" /></> },
                    { title: <>Stronger<br />Retention</>, icon: <><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><circle cx="12" cy="10" r="2.5" /><path d="M8 17a4 4 0 0 1 8 0" /></> },
                    { title: <>Predictable<br />Growth</>, icon: <><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /><line x1="22" y1="2" x2="14" y2="10" /><polyline points="16 2 22 2 22 8" /></> }
                  ].map((item, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '15px', border: '1px solid rgba(237, 139, 22, 0.4)', borderRadius: '8px', padding: '15px 20px', backgroundColor: 'rgba(0,0,0,0.4)' }}>
                      <div style={{ color: 'var(--accent-gold)' }}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                          {item.icon}
                        </svg>
                      </div>
                      <div style={{ color: '#fff', fontSize: '13px', lineHeight: 1.4 }}>{item.title}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Box: Unified Data Foundation */}
              <div style={{
                flex: 1,
                minWidth: 'min(100%, 350px)',
                border: '1px solid rgba(237, 139, 22, 0.2)',
                borderRadius: '12px',
                backgroundColor: '#050505',
                padding: '25px 30px',
                display: 'flex',
                flexDirection: 'column',
              }}>
                <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                  <h3 style={{ fontSize: '26px', fontFamily: 'Georgia, serif', fontWeight: 400, marginBottom: '8px' }}>One Customer. One Inventory. One Truth.</h3>
                </div>

                <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <img src="/images/platform/platform-bg-3.png" alt="Unified Jewelry Data Foundation" style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'contain' }} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Powering Established Jewelry Businesses Worldwide */}
        <section className="powering-businesses section" style={{ borderTop: '1px solid var(--glass-border)', borderBottom: '1px solid var(--glass-border)', padding: '60px 0' }}>
          <div className="container">
            <h3 style={{ textAlign: 'center', marginBottom: '40px', fontSize: '38px', fontFamily: 'Georgia, serif', fontWeight: 400 }}>Powering Established Jewelry Businesses Worldwide</h3>

            <div className="logo-marquee-container" style={{ marginBottom: '60px', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px', padding: '20px 0' }}>
              <div className="logo-marquee-track">
                {[...[
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
                ], ...[
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
                ]].map((logo, i, arr) => (
                  <div key={i} className="logo-marquee-item">
                    <img src={logo.src} alt={logo.alt} style={{ maxHeight: '35px', maxWidth: '110px', width: 'auto', height: 'auto', objectFit: 'contain', opacity: 0.9 }} />
                    {i < arr.length - 1 && (
                      <div style={{ width: '1px', height: '30px', background: 'linear-gradient(180deg, transparent, rgba(255,255,255,0.15), transparent)', position: 'absolute', right: 0 }}></div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="responsive-grid-4 about-stats-container" style={{
              paddingTop: '50px',
              borderTop: '1px solid rgba(255,255,255,0.05)',
              maxWidth: '1440px',
              margin: '0 auto',
              paddingLeft: '40px',
              paddingRight: '40px'
            }}>
              {/* Stat 1 */}
              <div className="about-stat" style={{ display: 'flex', alignItems: 'center', gap: '16px', justifyContent: 'center' }}>
                <div style={{ color: 'var(--accent-gold)' }}>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
                </div>
                <div>
                  <div style={{ fontSize: '26px', fontWeight: '400', fontFamily: 'Georgia, serif' }}>20+</div>
                  <div style={{ fontSize: '13px', opacity: 0.6 }}>Countries</div>
                </div>
              </div>

              {/* Stat 2 */}
              <div className="about-stat has-border" style={{ display: 'flex', alignItems: 'center', gap: '16px', justifyContent: 'center', borderLeft: '1px solid rgba(255,255,255,0.05)' }}>
                <div style={{ color: 'var(--accent-gold)' }}>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                </div>
                <div>
                  <div style={{ fontSize: '26px', fontWeight: '400', fontFamily: 'Georgia, serif' }}>3000+</div>
                  <div style={{ fontSize: '13px', opacity: 0.6 }}>Businesses</div>
                </div>
              </div>

              {/* Stat 3 */}
              <div className="about-stat has-border" style={{ display: 'flex', alignItems: 'center', gap: '16px', justifyContent: 'center', borderLeft: '1px solid rgba(255,255,255,0.05)' }}>
                <div style={{ color: 'var(--accent-gold)' }}>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><path d="M6 3h12l4 6-10 12L2 9l4-6z" /><path d="M2 9h20" /><path d="M12 21V9" /><path d="M6 3l6 6" /><path d="M18 3l-6 6" /></svg>
                </div>
                <div>
                  <div style={{ fontSize: '26px', fontWeight: '400', fontFamily: 'Georgia, serif' }}>Millions</div>
                  <div style={{ fontSize: '13px', opacity: 0.6 }}>Happy Customers</div>
                </div>
              </div>

              {/* Stat 4 */}
              <div className="about-stat has-border" style={{ display: 'flex', alignItems: 'center', gap: '16px', justifyContent: 'center', borderLeft: '1px solid rgba(255,255,255,0.05)' }}>
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

        {/* 7. Footer CTA */}
        <section className="cta-section section" style={{ padding: '20px 0 120px 0' }}>
          <div className="container" style={{ maxWidth: '1400px' }}>
            <div className="cta-banner">
              {/* Left Content */}
              <div className="cta-banner-content">
                <h2>
                  Run Your Entire Jewelry Business<br />On One Platform
                </h2>
                <p>
                  From sourcing and manufacturing to commerce and customer growth, Effission connects every operation through a single jewelry-native foundation.
                </p>
                <div className="cta-banner-btns">
                  <Link href="/contact" className="btn btn-gold hover-scale">
                    Book a Demo <span>&rarr;</span>
                  </Link>
                  <Link href="/contact" className="btn btn-outline-gold hover-scale">
                    Talk To An Expert <span>&rarr;</span>
                  </Link>
                </div>
              </div>

              {/* Right Image */}
              <div className="cta-banner-visual">
                <img src="/images/platform/platform-bg-4.png" alt="Effission Platform" />
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
