'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';
import Link from 'next/link';
import React from 'react';

export default function AiStudioPage() {
  const images = Array.from({ length: 7 }).map((_, i) => `/images/hand-render-${i + 1}.jpg`);

  return (
    <>
      <Header />

      <main className="ai-studio-page" style={{ paddingTop: '60px' }}>

        {/* 1. Hero Section */}
        <section className="platform-hero section" style={{ paddingBottom: '20px' }}>
          <div className="container">
            <div className="hero-split">
              <div className="hero-content">
                <h4 style={{ color: 'var(--accent-gold, #ed8b16)', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '20px', fontWeight: 600 }}>AI Studio</h4>
                <h1 className="hero-title" style={{ fontFamily: 'Georgia, serif', fontWeight: 400, fontSize: 'clamp(36px, 6vw, 64px)', lineHeight: 1.15, marginBottom: '24px' }}>
                  <span style={{ whiteSpace: 'nowrap' }}>AI Commerce &</span><br />
                  Automation<br />
                  <span className="text-gold" style={{ fontSize: '0.65em', whiteSpace: 'nowrap' }}>Powered By Agentic Intelligence</span>
                </h1>
                <p className="hero-desc" style={{ marginBottom: '40px', fontSize: '16px', lineHeight: 1.7, opacity: 0.8, maxWidth: '480px' }}>
                  Create photoreal jewelry experiences, launch products before manufacturing, and automate business operations through intelligent AI agents working across your entire jewelry ecosystem.
                </p>
                <div className="hero-btns" style={{ marginBottom: '60px', display: 'flex', gap: '16px' }}>
                  <Link href="/contact" className="btn btn-gold" style={{ padding: '14px 28px', borderRadius: '6px' }}>
                    Explore AI Commerce <span className="arrow" style={{ marginLeft: '8px' }}>→</span>
                  </Link>
                  <Link href="#agentic-ai" className="btn btn-outline-gold" style={{ padding: '14px 28px', borderRadius: '6px', border: '1px solid rgba(237, 139, 22, 0.4)' }}>
                    Explore Agentic AI <span className="arrow" style={{ marginLeft: '8px' }}>→</span>
                  </Link>
                </div>
              </div>

              <div className="hero-visual" style={{ flex: 1.5, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div className="visual-wrapper solutions-visual-wrapper">
                  <img src="/images/ai-studio/ai-bg-1.png" alt="Effission Intelligence Core Diagram" className="visual-img" style={{ width: '100%', maxWidth: '900px', height: 'auto', objectFit: 'contain' }} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Two AI Engines */}
        <section className="two-engines section" style={{ padding: '40px' }}>
          <div style={{
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: '12px',
            padding: '40px 40px',
            backgroundColor: 'rgba(0,0,0,0.4)',
            backdropFilter: 'blur(10px)',
            maxWidth: '1600px',
            margin: '0 auto',
            width: '100%'
          }}>
            <h2 style={{ textAlign: 'center', fontSize: '38px', fontFamily: 'Georgia, serif', color: '#fff', marginBottom: '30px', fontWeight: 400 }}>
              Two AI Engines. One Jewelry Business.
            </h2>

            <div style={{ display: 'flex', position: 'relative', width: '100%', margin: '0 auto', flexWrap: 'wrap' }}>

              {/* Left Panel */}
              <div style={{
                flex: '1 1 400px',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '12px 0 0 12px',
                overflow: 'hidden',
                backgroundColor: '#050505',
                display: 'flex',
                flexDirection: 'column',
                borderRight: 'none'
              }} className="responsive-panel-left">
                {/* Top part */}
                <div style={{
                  background: 'linear-gradient(180deg, rgba(166, 115, 33, 0.6) 0%, rgba(66, 45, 12, 0.4) 100%)',
                  padding: '30px 20px',
                  textAlign: 'center',
                  borderBottom: '1px solid rgba(255,255,255,0.05)',
                  minHeight: '120px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center'
                }}>
                  <h3 style={{ fontFamily: 'Georgia, serif', fontSize: '24px', color: '#fff', marginBottom: '6px', fontWeight: 400 }}>AI Commerce Studio</h3>
                  <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '13px', margin: 0 }}>Sell Before Manufacturing</p>
                </div>
                {/* Bottom part */}
                <div style={{
                  padding: '24px 20px',
                  display: 'flex',
                  justifyContent: 'space-around',
                  alignItems: 'center',
                  gap: '16px',
                  flexWrap: 'wrap'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent-gold)" strokeWidth="1.5">
                      <path d="M13.5 2.5A11.5 11.5 0 0 0 2 14c0 3.3 1.4 6.3 3.6 8.4l1.4-1.4A9.5 9.5 0 0 1 4 14a9.5 9.5 0 0 1 9.5-9.5V2.5z"></path>
                      <path d="M12 2l3 3-3 3"></path>
                    </svg>
                    <span style={{ color: 'rgba(255,255,255,0.8)', fontSize: '13px' }}>Launch Faster</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent-gold)" strokeWidth="1.5">
                      <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line>
                    </svg>
                    <span style={{ color: 'rgba(255,255,255,0.8)', fontSize: '13px' }}>Reduce Costs</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent-gold)" strokeWidth="1.5">
                      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline>
                    </svg>
                    <span style={{ color: 'rgba(255,255,255,0.8)', fontSize: '13px' }}>Increase Conversion</span>
                  </div>
                </div>
              </div>

              {/* Right Panel */}
              <div style={{
                flex: '1 1 400px',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '0 12px 12px 0',
                overflow: 'hidden',
                backgroundColor: '#050505',
                display: 'flex',
                flexDirection: 'column',
              }} className="responsive-panel-right">
                {/* Top part */}
                <div style={{
                  background: 'linear-gradient(180deg, rgba(31, 102, 98, 0.5) 0%, rgba(13, 43, 41, 0.3) 100%)',
                  padding: '30px 20px',
                  textAlign: 'center',
                  borderBottom: '1px solid rgba(255,255,255,0.05)',
                  minHeight: '120px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center'
                }}>
                  <h3 style={{ fontFamily: 'Georgia, serif', fontSize: '24px', color: '#fff', marginBottom: '6px', fontWeight: 400 }}>Agentic Business Studio</h3>
                  <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '13px', margin: 0 }}>Run Operations On Autopilot</p>
                </div>
                {/* Bottom part */}
                <div style={{
                  padding: '24px 20px',
                  display: 'flex',
                  justifyContent: 'space-around',
                  alignItems: 'center',
                  gap: '16px',
                  flexWrap: 'wrap'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2ec4b6" strokeWidth="1.5">
                      <rect x="3" y="11" width="18" height="10" rx="2"></rect><circle cx="12" cy="5" r="2"></circle><path d="M12 7v4"></path><line x1="8" y1="16" x2="8" y2="16"></line><line x1="16" y1="16" x2="16" y2="16"></line>
                    </svg>
                    <span style={{ color: 'rgba(255,255,255,0.8)', fontSize: '13px' }}>Automate Decisions</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2ec4b6" strokeWidth="1.5">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle>
                    </svg>
                    <span style={{ color: 'rgba(255,255,255,0.8)', fontSize: '13px' }}>Improve Visibility</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2ec4b6" strokeWidth="1.5">
                      <rect x="18" y="3" width="4" height="18"></rect><rect x="10" y="8" width="4" height="13"></rect><rect x="2" y="13" width="4" height="8"></rect>
                    </svg>
                    <span style={{ color: 'rgba(255,255,255,0.8)', fontSize: '13px' }}>Increase Productivity</span>
                  </div>
                </div>
              </div>

              {/* Center + Badge */}
              <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                backgroundColor: '#050505',
                border: '1px solid rgba(237, 139, 22, 0.4)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 0 20px rgba(237, 139, 22, 0.2), inset 0 0 10px rgba(46, 196, 182, 0.1)',
                zIndex: 10
              }} className="center-badge">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent-gold)" strokeWidth="2" strokeLinecap="round">
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
              </div>
            </div>

            <style dangerouslySetInnerHTML={{
              __html: `
              /* Global Page Responsiveness */
              @media (max-width: 800px) {
                .responsive-panel-left {
                  border-radius: 12px 12px 0 0 !important;
                  border-right: 1px solid rgba(255,255,255,0.08) !important;
                  border-bottom: none !important;
                }
                .responsive-panel-right {
                  border-radius: 0 0 12px 12px !important;
                }
                .center-badge {
                  top: 50% !important;
                  transform: translate(-50%, -50%) !important;
                }

                /* Hero Section Fixes */
                .hero-visual {
                  flex: none !important;
                  width: 100% !important;
                }
                .hero-btns {
                  flex-direction: column !important;
                  width: 100% !important;
                  align-items: center !important;
                }
                .hero-btns a {
                  width: auto !important;
                  min-width: 240px;
                  text-align: center !important;
                  justify-content: center !important;
                  font-size: 15px !important;
                  padding: 14px 20px !important;
                }
                .hero-title span.text-gold {
                  font-size: clamp(14px, 4vw, 24px) !important;
                }
                .hero-split {
                  flex-direction: column !important;
                }
                .hero-visual .visual-wrapper {
                  width: 100% !important;
                  right: 0 !important;
                  transform: none !important;
                  margin-top: 20px !important;
                }

                /* Prevent flex containers from breaking out of screen */
                .studio-panel {
                  max-width: 100% !important;
                  overflow: hidden !important;
                  padding-left: 20px !important;
                  padding-right: 20px !important;
                }

                /* General Section Padding */
                .section {
                  padding-left: 20px !important;
                  padding-right: 20px !important;
                }

                /* Footer CTA Fixes */
                .cta-outer {
                  flex-direction: column !important;
                }
                .cta-wrapper {
                  flex-direction: column !important;
                  padding: 30px 20px !important;
                  gap: 30px !important;
                  align-items: flex-start !important;
                  text-align: left !important;
                  width: 100% !important;
                }
                .cta-wrapper h2 {
                  font-size: 28px !important;
                }
                .cta-btns {
                  width: 100% !important;
                  margin-right: 0 !important;
                  padding-right: 0 !important;
                  align-items: flex-start !important;
                }
                .cta-btns a {
                  width: auto !important;
                  min-width: 240px;
                }
                .cta-image {
                  position: relative !important;
                  width: 100% !important;
                  height: 200px !important;
                  opacity: 0.5 !important;
                }

                /* Quote & Outcomes Fixes */
                .quote-container {
                  flex-direction: column !important;
                  gap: 20px !important;
                  padding: 30px 20px !important;
                }
                .quote-container h3 {
                  font-size: 24px !important;
                }

                /* Flowchart container scroll */
                .flowchart-wrapper {
                  overflow-x: auto !important;
                  -webkit-overflow-scrolling: touch;
                  padding-bottom: 20px !important;
                }
                .flowchart-inner {
                  min-width: 800px !important;
                }
              }
            `}} />
          </div>
        </section>

        {/* 3. Studio Details */}
        <section className="studio-details section" style={{ padding: '40px' }}>
          <div style={{
            display: 'flex',
            gap: '20px',
            maxWidth: '1600px',
            margin: '0 auto',
            width: '100%',
            flexWrap: 'wrap'
          }}>

            {/* Left Box: AI Commerce Studio */}
            <div className="studio-panel" style={{
              flex: '1 1 600px',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '12px',
              padding: '40px 30px',
              backgroundColor: '#050505',
              display: 'flex',
              flexDirection: 'column',
              minWidth: 0
            }}>
              <h3 style={{ textAlign: 'center', fontSize: '26px', fontFamily: 'Georgia, serif', color: 'var(--accent-gold)', marginBottom: '40px', fontWeight: 400 }}>
                AI Commerce Studio
              </h3>

              <div style={{ display: 'flex', gap: '12px', justifyContent: 'space-between', height: '100%', flexWrap: 'wrap' }}>
                {[
                  { title: "Photoreal Rendering", img: "/images/ai-studio/photoreal%20rendering.png" },
                  { title: "On-Model Visualization", img: "/images/ai-studio/On-model%20visualization.png" },
                  { title: "Virtual Inventory", img: "/images/ai-studio/virtual%20inventory.png" },
                  { title: "Interactive Configurators", img: "/images/ai-studio/interactive%20configurators.png" },
                  { title: "360° Assets", img: "/images/ai-studio/360%20ASSETS.png" }
                ].map((card, idx) => (
                  <div key={idx} style={{
                    flex: '1 1 18%',
                    minWidth: '90px',
                    border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: '8px',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    backgroundColor: 'rgba(255,255,255,0.02)'
                  }}>
                    <div style={{ flex: 1, minHeight: '180px', overflow: 'hidden' }}>
                      <img src={card.img} alt={card.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                    <div style={{ padding: '16px 12px', textAlign: 'left', minHeight: '64px', display: 'flex', alignItems: 'center' }}>
                      <span style={{ color: '#fff', fontSize: '13px', lineHeight: 1.3, display: 'block' }}>
                        {card.title.split(' ').map((word, i) => <span key={i} style={{ display: 'block' }}>{word}</span>)}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Box: Agentic Business Studio */}
            <div className="studio-panel" style={{
              flex: '1 1 600px',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '12px',
              padding: '40px 30px',
              backgroundColor: '#050505',
              display: 'flex',
              flexDirection: 'column',
              minWidth: 0
            }}>
              <h3 style={{ textAlign: 'center', fontSize: '26px', fontFamily: 'Georgia, serif', color: '#2ec4b6', marginBottom: '40px', fontWeight: 400 }}>
                Agentic Business Studio
              </h3>

              <div className="flowchart-wrapper" style={{ width: '100%', padding: '0 20px 20px 20px' }}>
                <div className="flowchart-inner" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'relative', minHeight: '400px' }}>

                  {/* SVG Connecting Lines */}
                  <svg width="100%" height="100%" style={{ position: 'absolute', top: 0, left: 0, zIndex: 0 }} preserveAspectRatio="none" viewBox="0 0 100 100">
                    {/* Lines from left nodes to center AI Router */}
                    <path d="M 25 15 C 40 15, 35 50, 45 50" stroke="#2ec4b6" strokeWidth="0.5" fill="none" vectorEffect="non-scaling-stroke" opacity="0.6" />
                    <path d="M 25 38 C 40 38, 35 50, 45 50" stroke="#2ec4b6" strokeWidth="0.5" fill="none" vectorEffect="non-scaling-stroke" opacity="0.6" />
                    <path d="M 25 61 C 40 61, 35 50, 45 50" stroke="#2ec4b6" strokeWidth="0.5" fill="none" vectorEffect="non-scaling-stroke" opacity="0.6" />
                    <path d="M 25 84 C 40 84, 35 50, 45 50" stroke="#2ec4b6" strokeWidth="0.5" fill="none" vectorEffect="non-scaling-stroke" opacity="0.6" />

                    {/* Lines from AI Router to right nodes */}
                    <path d="M 55 50 C 65 50, 60 10, 75 10" stroke="#2ec4b6" strokeWidth="0.5" fill="none" vectorEffect="non-scaling-stroke" opacity="0.6" />
                    <path d="M 55 50 C 65 50, 60 26, 75 26" stroke="#2ec4b6" strokeWidth="0.5" fill="none" vectorEffect="non-scaling-stroke" opacity="0.6" />
                    <path d="M 55 50 C 65 50, 60 42, 75 42" stroke="#2ec4b6" strokeWidth="0.5" fill="none" vectorEffect="non-scaling-stroke" opacity="0.6" />
                    <path d="M 55 50 C 65 50, 60 58, 75 58" stroke="#2ec4b6" strokeWidth="0.5" fill="none" vectorEffect="non-scaling-stroke" opacity="0.6" />
                    <path d="M 55 50 C 65 50, 60 74, 75 74" stroke="#2ec4b6" strokeWidth="0.5" fill="none" vectorEffect="non-scaling-stroke" opacity="0.6" />
                    <path d="M 55 50 C 65 50, 60 90, 75 90" stroke="#2ec4b6" strokeWidth="0.5" fill="none" vectorEffect="non-scaling-stroke" opacity="0.6" />

                    {/* Line from AI Router down to Business Actions */}
                    <line x1="50" y1="50" x2="50" y2="105" stroke="#2ec4b6" strokeWidth="0.5" vectorEffect="non-scaling-stroke" opacity="0.6" />
                  </svg>

                  {/* Left Column */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', zIndex: 1, width: '25%' }}>
                    {[
                      { label: 'WhatsApp', icon: <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" /> },
                      { label: 'Website', icon: <><rect x="2" y="3" width="20" height="14" rx="2" ry="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></> },
                      { label: 'Email', icon: <><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></> },
                      { label: 'Sales Team', icon: <><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></> }
                    ].map((item, i) => (
                      <div key={i} style={{
                        display: 'flex', alignItems: 'center', gap: '10px',
                        border: '1px solid rgba(255,255,255,0.08)', borderRadius: '8px',
                        padding: '12px 14px', backgroundColor: '#0f0f0f'
                      }}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2ec4b6" strokeWidth="1.5" style={{ flexShrink: 0 }}>
                          {item.icon}
                        </svg>
                        <span style={{ color: '#fff', fontSize: '12px' }}>{item.label}</span>
                      </div>
                    ))}
                  </div>

                  {/* Center AI Router */}
                  <div style={{
                    width: '90px', height: '90px', borderRadius: '50%',
                    border: '1px solid rgba(46, 196, 182, 0.5)',
                    display: 'flex', flexDirection: 'column',
                    alignItems: 'center', justifyContent: 'center',
                    boxShadow: '0 0 30px rgba(46, 196, 182, 0.15), inset 0 0 20px rgba(46, 196, 182, 0.1)',
                    backgroundColor: '#050505', zIndex: 1
                  }}>
                    <span style={{ color: '#fff', fontSize: '18px', fontWeight: 'bold' }}>AI</span>
                    <span style={{ color: '#fff', fontSize: '12px' }}>Router</span>
                  </div>

                  {/* Right Column */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', zIndex: 1, width: '30%' }}>
                    {[
                      { label: 'Inventory Agent', icon: <><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" /><line x1="7" y1="7" x2="7.01" y2="7" /></> },
                      { label: 'Pricing Agent', icon: <><circle cx="12" cy="12" r="10" /><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" /><path d="M12 18V6" /></> },
                      { label: 'CRM Agent', icon: <><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /></> },
                      { label: 'Memo Agent', icon: <><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" /></> },
                      { label: 'Vendor Agent', icon: <><rect x="3" y="11" width="18" height="10" rx="2" /><circle cx="12" cy="5" r="2" /><path d="M12 7v4" /><line x1="8" y1="16" x2="8" y2="16" /><line x1="16" y1="16" x2="16" y2="16" /></> },
                      { label: 'Reporting Agent', icon: <><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /></> }
                    ].map((item, i) => (
                      <div key={i} style={{
                        display: 'flex', alignItems: 'center', gap: '10px',
                        border: '1px solid rgba(255,255,255,0.08)', borderRadius: '8px',
                        padding: '10px 14px', backgroundColor: '#0f0f0f'
                      }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#2ec4b6" strokeWidth="1.5" style={{ flexShrink: 0 }}>
                          {item.icon}
                        </svg>
                        <span style={{ color: '#fff', fontSize: '12px', whiteSpace: 'nowrap' }}>{item.label}</span>
                      </div>
                    ))}
                  </div>

                  {/* Bottom Business Actions */}
                  <div style={{
                    position: 'absolute', bottom: '0', left: '50%', transform: 'translateX(-50%)',
                    display: 'flex', alignItems: 'center', gap: '10px',
                    border: '1px solid rgba(255,255,255,0.08)', borderRadius: '8px',
                    padding: '12px 20px', backgroundColor: '#0f0f0f', zIndex: 1
                  }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2ec4b6" strokeWidth="1.5">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                    <span style={{ color: '#fff', fontSize: '13px' }}>Business Actions</span>
                  </div>
                </div>
              </div>
            </div>


            {/* Left Box 2: AI Design Intelligence */}
            <div className="studio-panel" style={{
              flex: '1 1 600px',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '12px',
              padding: '40px 30px',
              backgroundColor: '#050505',
              display: 'flex',
              flexDirection: 'column',
              position: 'relative',
              minWidth: 0
            }}>
              <h3 style={{ textAlign: 'center', fontSize: '26px', fontFamily: 'Georgia, serif', color: 'var(--accent-gold)', marginBottom: '8px', fontWeight: 400 }}>
                AI Design Intelligence
              </h3>
              <p style={{ textAlign: 'center', color: 'rgba(255,255,255,0.8)', fontSize: '14px', marginBottom: '40px' }}>
                Know What To Create. Before You Create It.
              </p>

              {/* Flowchart container */}
              <div className="flowchart-wrapper" style={{ width: '100%', paddingBottom: '20px' }}>
                <div className="flowchart-inner" style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', flex: 1, minHeight: '300px', minWidth: '600px' }}>

                  {/* SVG Connecting Lines */}
                  <svg width="100%" height="100%" style={{ position: 'absolute', top: 0, left: 0, zIndex: 0 }} preserveAspectRatio="none" viewBox="0 0 100 100">
                    {/* Top to Center */}
                    <path d="M 12.5 35 L 12.5 45 L 50 45 L 50 48" stroke="var(--accent-gold)" strokeWidth="0.5" fill="none" vectorEffect="non-scaling-stroke" opacity="0.6" />
                    <path d="M 37.5 35 L 37.5 45 L 50 45" stroke="var(--accent-gold)" strokeWidth="0.5" fill="none" vectorEffect="non-scaling-stroke" opacity="0.6" />
                    <path d="M 62.5 35 L 62.5 45 L 50 45" stroke="var(--accent-gold)" strokeWidth="0.5" fill="none" vectorEffect="non-scaling-stroke" opacity="0.6" />
                    <path d="M 87.5 35 L 87.5 45 L 50 45" stroke="var(--accent-gold)" strokeWidth="0.5" fill="none" vectorEffect="non-scaling-stroke" opacity="0.6" />

                    {/* Center to Bottom */}
                    <path d="M 50 62 L 50 65 L 10 65 L 10 72" stroke="var(--accent-gold)" strokeWidth="0.5" fill="none" vectorEffect="non-scaling-stroke" opacity="0.6" />
                    <path d="M 50 62 L 50 65 L 30 65 L 30 72" stroke="var(--accent-gold)" strokeWidth="0.5" fill="none" vectorEffect="non-scaling-stroke" opacity="0.6" />
                    <path d="M 50 62 L 50 72" stroke="var(--accent-gold)" strokeWidth="0.5" fill="none" vectorEffect="non-scaling-stroke" opacity="0.6" />
                    <path d="M 50 62 L 50 65 L 70 65 L 70 72" stroke="var(--accent-gold)" strokeWidth="0.5" fill="none" vectorEffect="non-scaling-stroke" opacity="0.6" />
                    <path d="M 50 62 L 50 65 L 90 65 L 90 72" stroke="var(--accent-gold)" strokeWidth="0.5" fill="none" vectorEffect="non-scaling-stroke" opacity="0.6" />
                  </svg>

                  {/* Top Row: 4 cards */}
                  <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between', zIndex: 1 }}>
                    {[
                      { title: "Market Trends", img: "/images/hand-render-1.jpg" },
                      { title: "Customer Demand", img: "/images/hand-render-2.jpg" },
                      { title: "Social Signals", img: "/images/hand-render-3.jpg" },
                      { title: "Search Data", img: "/images/hand-render-4.jpg" },
                    ].map((item, idx) => (
                      <div key={idx} style={{ width: '22%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                        <div style={{ width: '100%', aspectRatio: '1.2', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '8px', overflow: 'hidden', backgroundColor: 'rgba(255,255,255,0.02)' }}>
                          <img src={item.img} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.8 }} />
                        </div>
                        <span style={{ color: '#fff', fontSize: '11px', textAlign: 'center' }}>{item.title}</span>
                      </div>
                    ))}
                  </div>

                  {/* Center Badge */}
                  <div style={{
                    border: '1px solid var(--accent-gold)',
                    borderRadius: '20px',
                    padding: '10px 24px',
                    backgroundColor: '#050505',
                    zIndex: 1,
                    display: 'flex', alignItems: 'center', gap: '10px',
                    boxShadow: '0 0 20px rgba(237, 139, 22, 0.15)'
                  }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent-gold)" strokeWidth="1.5">
                      <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" /><circle cx="12" cy="12" r="4" />
                    </svg>
                    <span style={{ color: '#fff', fontSize: '14px' }}>AI Design Intelligence</span>
                  </div>

                  {/* Bottom Row: 5 cards */}
                  <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between', zIndex: 1 }}>
                    {[
                      { title: "Collection Recommendations", img: "/images/hand-render-5.jpg" },
                      { title: "Trending Shapes", img: "/images/hand-render-1.jpg" },
                      { title: "Trending Stones", img: "/images/hand-render-2.jpg" },
                      { title: "Trending Metals", img: "/images/hand-render-3.jpg" },
                      { title: "Launch Opportunities", img: "/images/hand-render-4.jpg" },
                    ].map((item, idx) => (
                      <div key={idx} style={{ width: '18%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                        <div style={{ width: '100%', aspectRatio: '1', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '8px', overflow: 'hidden', backgroundColor: 'rgba(255,255,255,0.02)' }}>
                          <img src={item.img} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.8 }} />
                        </div>
                        <span style={{ color: '#fff', fontSize: '11px', textAlign: 'center', lineHeight: 1.2 }}>
                          {item.title.split(' ').map((word, i) => <span key={i} style={{ display: 'block' }}>{word}</span>)}
                        </span>
                      </div>
                    ))}
                  </div>

                </div>
              </div>
            </div>

            {/* Right Box 2: What AI Can Automate */}
            <div className="studio-panel" style={{
              flex: '1 1 600px',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '12px',
              padding: '40px 30px',
              backgroundColor: '#050505',
              display: 'flex',
              flexDirection: 'column',
              minWidth: 0
            }}>
              <h3 style={{ textAlign: 'center', fontSize: '26px', fontFamily: 'Georgia, serif', color: '#2ec4b6', marginBottom: '40px', fontWeight: 400 }}>
                What AI Can Automate
              </h3>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
                gap: '16px',
                flex: 1
              }}>
                {[
                  {
                    title: 'Inventory Intelligence',
                    icon: <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />,
                    items: ['Dead stock alerts', 'Reorder suggestions', 'Fast mover analysis']
                  },
                  {
                    title: 'Customer Intelligence',
                    icon: <><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></>,
                    items: ['VIP identification', 'Birthday campaigns', 'Retention programs']
                  },
                  {
                    title: 'Pricing Intelligence',
                    icon: <><circle cx="12" cy="12" r="10" /><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" /><path d="M12 18V6" /></>,
                    items: ['Margin monitoring', 'Rate updates', 'Price optimization']
                  },
                  {
                    title: 'Memo Intelligence',
                    icon: <><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" /></>,
                    items: ['Follow-up alerts', 'Conversion opportunities', 'Aging analysis']
                  },
                  {
                    title: 'Procurement Intelligence',
                    icon: <><rect x="3" y="11" width="18" height="10" rx="2" /><circle cx="12" cy="5" r="2" /><path d="M12 7v4" /><line x1="8" y1="16" x2="8" y2="16" /><line x1="16" y1="16" x2="16" y2="16" /></>,
                    items: ['Vendor performance', 'Purchase suggestions', 'Metal forecasting']
                  },
                  {
                    title: 'Executive Intelligence',
                    icon: <><rect x="18" y="3" width="4" height="18" /><rect x="10" y="8" width="4" height="13" /><rect x="2" y="13" width="4" height="8" /></>,
                    items: ['Daily summaries', 'Weekly insights', 'Exception reporting']
                  }
                ].map((card, idx) => (
                  <div key={idx} style={{
                    border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: '8px',
                    padding: '20px 16px',
                    backgroundColor: 'rgba(255,255,255,0.02)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '16px',
                    transition: 'border-color 0.3s ease'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2ec4b6" strokeWidth="1.5" style={{ flexShrink: 0 }}>
                        {card.icon}
                      </svg>
                      <h4 style={{ color: '#fff', fontSize: '15px', fontWeight: 500, margin: 0, lineHeight: 1.2 }}>
                        {card.title}
                      </h4>
                    </div>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      {card.items.map((item, i) => (
                        <li key={i} style={{ color: 'rgba(255,255,255,0.6)', fontSize: '13px', display: 'flex', alignItems: 'flex-start', gap: '6px' }}>
                          <span style={{ color: '#2ec4b6', fontSize: '10px', marginTop: '3px' }}>•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        {/* Quote & Outcomes Section */}
        <section className="outcomes section" style={{ padding: '40px' }}>
          <div style={{ maxWidth: '1600px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '20px' }}>

            {/* Top Quote Box */}
            <div className="quote-container" style={{
              border: '1px solid rgba(255,255,255,0.05)',
              borderRadius: '12px',
              background: 'linear-gradient(180deg, #111111 0%, #050505 100%)',
              padding: '40px 60px',
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'center',
              gap: '24px'
            }}>
              <span style={{ color: 'var(--accent-gold)', fontSize: '90px', fontFamily: 'Georgia, serif', lineHeight: 0.8, opacity: 0.5, marginTop: '-10px' }}>&ldquo;</span>
              <h2 style={{
                margin: 0,
                fontSize: '30px',
                fontFamily: 'Georgia, serif',
                fontWeight: 400,
                textAlign: 'center',
                lineHeight: 1.4,
                color: 'var(--accent-gold)'
              }}>
                <span>Most AI Companies Help You Create Content.</span><br />
                <span>Effission Helps You Create Revenue And Automate Operations.</span>
              </h2>
            </div>

            {/* Bottom Outcomes Box */}
            <div style={{
              border: '1px solid rgba(255,255,255,0.05)',
              borderRadius: '12px',
              background: 'linear-gradient(180deg, #111111 0%, #050505 100%)',
              padding: '40px 30px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '40px'
            }}>
              <h3 style={{ margin: 0, fontSize: '24px', fontFamily: 'Georgia, serif', color: '#fff', fontWeight: 400 }}>
                Real Business Outcomes
              </h3>

              <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
                {[
                  { label: "Launch\\nFaster", icon: <><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path></> },
                  { label: "Sell Without\\nInventory", icon: <><rect width="16" height="12" x="4" y="8" rx="2" ry="2"></rect><path d="M2 14h2"></path><path d="M20 14h2"></path><path d="M15 13v2"></path><path d="M9 13v2"></path><path d="M12 4v4"></path></> },
                  { label: "Reduce\\nPhotoshoot Costs", icon: <><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"></path><circle cx="12" cy="13" r="3"></circle></> },
                  { label: "Increase\\nConversion", icon: <><path d="M23 6l-9.5 9.5-5-5L1 18" /><path d="M17 6h6v6" /></> },
                  { label: "Automate\\nRepetitive Tasks", icon: <><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></> },
                  { label: "Improve\\nDecision Speed", icon: <><path d="M12 2L15 9l7 3-7 3-3 7-3-7-7-3 7-3z"></path></> },
                  { label: "Reduce\\nOperational Risk", icon: <><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><circle cx="12" cy="11" r="3"></circle></> },
                ].map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px', flex: '1 1 120px' }}>
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="var(--accent-gold)" strokeWidth="1.5" style={{ flexShrink: 0 }}>
                      {item.icon}
                    </svg>
                    <span style={{ color: '#fff', fontSize: '12px', lineHeight: 1.3 }}>
                      {item.label.split('\\n').map((l, i) => <span key={i} style={{ display: 'block' }}>{l}</span>)}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>


        {/* 7. Footer CTA */}
        <section className="cta-section section" style={{ padding: '40px' }}>
          <div style={{ maxWidth: '1600px', margin: '0 auto' }}>
            <div className="cta-outer" style={{
              display: 'flex',
              border: '1px solid rgba(255,255,255,0.05)',
              borderRadius: '12px',
              backgroundColor: '#050505',
              overflow: 'hidden',
              alignItems: 'center',
              position: 'relative',
              minHeight: '220px'
            }}>
              {/* Text and Buttons Wrapper */}
              <div className="cta-wrapper" style={{ zIndex: 2, display: 'flex', alignItems: 'center', gap: '50px', padding: '40px 60px' }}>

                {/* Left Content */}
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <h2 style={{ fontSize: '38px', fontFamily: 'Georgia, serif', fontWeight: 400, marginBottom: '16px', lineHeight: 1.1, color: '#fff' }}>
                    The Future Of<br />Jewelry Is Intelligent.
                  </h2>
                  <div style={{ color: 'var(--accent-gold)', fontSize: '18px', fontWeight: 500, marginBottom: '8px' }}>
                    Create. Sell. Automate.
                  </div>
                  <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '15px' }}>
                    Through one connected AI platform.
                  </div>
                </div>

                {/* Buttons */}
                <div className="cta-btns" style={{ display: 'flex', flexDirection: 'column', gap: '16px', flexShrink: 0 }}>
                  <Link href="/contact" style={{ backgroundColor: 'var(--accent-gold)', color: '#fff', padding: '14px 24px', borderRadius: '8px', fontWeight: 500, fontSize: '15px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '240px', textDecoration: 'none' }} className="hover-scale">
                    <span>Book A Demo</span> <span>&rarr;</span>
                  </Link>
                  <Link href="/contact" style={{ backgroundColor: '#050505', border: '1px solid rgba(237, 139, 22, 0.5)', color: '#fff', padding: '14px 24px', borderRadius: '8px', fontWeight: 500, fontSize: '14px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '240px', textDecoration: 'none' }} className="hover-scale">
                    <span>Talk To An AI Expert</span> <span style={{ color: 'var(--accent-gold)' }}>&rarr;</span>
                  </Link>
                </div>
              </div>

              {/* Right Image */}
              <div className="cta-image" style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '45%', zIndex: 1, display: 'flex', justifyContent: 'flex-end', alignItems: 'center', pointerEvents: 'none', background: 'radial-gradient(circle at center, rgba(237,139,22,0.05) 0%, transparent 70%)' }}>
                <img src="/images/solutions/platform-bg-4.png" alt="Effission AI Studio" style={{ width: '100%', height: '140%', objectFit: 'contain', objectPosition: 'center', transform: 'scale(1.2)' }} />
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
