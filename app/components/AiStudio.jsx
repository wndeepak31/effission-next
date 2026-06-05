'use client';
import React from 'react';

export default function AiStudio() {
  const images = Array.from({ length: 7 }).map((_, i) => `/images/hand-render-${i + 1}.jpg`);

  const features = [
    {
      title: 'Universal Representation',
      desc: 'Render products across diverse demographics and skin tones instantly.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent-gold)" strokeWidth="1.5">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      )
    },
    {
      title: '360° Visualization',
      desc: 'Interactive jewelry experiences that let customers explore every angle in real time.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent-gold)" strokeWidth="1.5">
          <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path>
          <path d="M3 3v5h5"></path>
          <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"></path>
          <path d="M16 21v-5h5"></path>
          <text x="12" y="16" fontSize="6" fontWeight="bold" fill="var(--accent-gold)" stroke="none" textAnchor="middle">360°</text>
        </svg>
      )
    },
    {
      title: 'Inventory-Free Selling',
      desc: 'Sell thousands of virtual designs before producing a single piece—with confidence.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent-gold)" strokeWidth="1.5">
          <circle cx="9" cy="21" r="1"></circle>
          <circle cx="20" cy="21" r="1"></circle>
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
        </svg>
      )
    }
  ];

  const steps = [
    {
      name: 'Sketch',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
          <polyline points="14 2 14 8 20 8"></polyline>
          <path d="M16 13H8"></path>
          <path d="M16 17H8"></path>
          <path d="M10 9H8"></path>
        </svg>
      )
    },
    {
      name: 'CAD',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
          <polyline points="2 17 12 22 22 17"></polyline>
          <polyline points="2 12 12 17 22 12"></polyline>
        </svg>
      )
    },
    {
      name: 'AI Rendering',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 2l2 7 7 2-7 2-2 7-2-7-7-2 7-2 2-7z"></path>
          <path d="M19 4l1 3 3 1-3 1-1 3-1-3-3-1 3-1 1-3z"></path>
        </svg>
      )
    },
    {
      name: 'On-Model\nVisualization',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M18 8a6 6 0 0 0-9.33-5 1 1 0 0 0-.22 1.39l2.76 4.14a2 2 0 0 1-.55 2.76l-4 2.66A2 2 0 0 0 6 17.5V20a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8z"></path>
        </svg>
      )
    },
    {
      name: 'Website /\nMarketplace',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
          <line x1="8" y1="21" x2="16" y2="21"></line>
          <line x1="12" y1="17" x2="12" y2="21"></line>
          <polygon points="12 6 9 9 12 12 15 9 12 6"></polygon>
        </svg>
      )
    },
    {
      name: 'Customer\nOrder',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <path d="M16 10a4 4 0 0 1-8 0"></path>
          <polyline points="9 14 11 16 15 12"></polyline>
        </svg>
      )
    }
  ];

  return (
    <section id="ai-studio" className="section" style={{ backgroundColor: '#050505', padding: '0', position: 'relative', overflow: 'hidden' }}>
      
      {/* 1. HERO SECTION */}
      <div style={{
        position: 'relative',
        width: '100%',
        minHeight: '650px',
        padding: '80px 0 100px 0',
        borderBottom: '1px solid rgba(255,255,255,0.05)'
      }}>
        {/* Background Image */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: 'url(/images/AI-section-2.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center right',
          zIndex: 0,
          opacity: 0.8
        }}></div>
        
        {/* Gradient Overlay for Text Readability (matches the dark fade on the left) */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '65%',
          height: '100%',
          background: 'linear-gradient(90deg, rgba(5,5,5,1) 0%, rgba(5,5,5,0.9) 40%, transparent 100%)',
          zIndex: 1
        }}></div>

        <div className="container" style={{ position: 'relative', zIndex: 2, width: '100%' }}>
          
        {/* 360 Badge - Absolutely positioned to the right edge of the container */}
        <div style={{
          position: 'absolute',
          top: '40px',
          right: '40px',
          border: '1px solid rgba(255, 180, 50, 0.3)',
          borderRadius: '8px',
          padding: '12px 10px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          background: 'transparent',
          zIndex: 3
        }}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--accent-gold)" strokeWidth="1.2">
            <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path>
            <path d="M3 3v5h5"></path>
            <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"></path>
            <path d="M16 21v-5h5"></path>
            <polygon points="12 8 9 12 12 16 15 12 12 8"></polygon>
          </svg>
          <span style={{ color: '#fff', fontSize: '10px', marginTop: '6px', fontWeight: 'bold', letterSpacing: '2px', textAlign: 'center', lineHeight: 1.2 }}>
            360°<br/>VIEW
          </span>
        </div>

          <div style={{ maxWidth: '700px' }}>
            <div style={{ color: 'var(--accent-gold)', fontSize: '12px', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ width: '2px', height: '14px', backgroundColor: 'var(--accent-gold)' }}></div>
              AI STUDIO & 3D EXPERIENCE
            </div>
            
            <h2 style={{ fontSize: 'clamp(44px, 5vw, 64px)', fontFamily: 'Georgia, serif', fontWeight: 400, marginBottom: '24px', lineHeight: 1.1, color: '#fff' }}>
              Create, render, and sell<br />
              <span style={{ color: 'var(--accent-gold)' }}>before</span> production begins.
            </h2>
            
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '17px', lineHeight: 1.6, marginBottom: '48px', maxWidth: '600px' }}>
              Effission transforms sketches, CAD files, and concepts into<br/>
              photoreal jewelry experiences—rendered across metals,<br/>
              gemstones, and skin tones without the cost of samples<br/>
              or photoshoots.
            </p>

            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '500px' }}>
              <li style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <div style={{ color: 'var(--accent-gold)', flexShrink: 0, marginTop: '2px' }}>
                  {/* Sparkles */}
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 2l2 7 7 2-7 2-2 7-2-7-7-2 7-2 2-7z"></path>
                    <path d="M19 4l1 3 3 1-3 1-1 3-1-3-3-1 3-1 1-3z"></path>
                  </svg>
                </div>
                <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '15px', lineHeight: 1.5 }}>
                  Cuts catalog and photoshoot costs by replacing<br/>
                  samples with renders.
                </span>
              </li>
              <li style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <div style={{ color: 'var(--accent-gold)', flexShrink: 0, marginTop: '2px' }}>
                  {/* Layers */}
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                    <polyline points="2 12 12 17 22 12"></polyline>
                    <polyline points="2 17 12 22 22 17"></polyline>
                  </svg>
                </div>
                <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '15px', lineHeight: 1.5 }}>
                  Produces variants for metals, stones, and<br/>
                  skin tones on demand.
                </span>
              </li>
              <li style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <div style={{ color: 'var(--accent-gold)', flexShrink: 0, marginTop: '2px' }}>
                  {/* Globe */}
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                    <line x1="2" y1="12" x2="22" y2="12"></line>
                  </svg>
                </div>
                <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '15px', lineHeight: 1.5 }}>
                  Delivers web, marketplace, and VR-ready assets<br/>
                  as a managed service.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* 2. GALLERY SECTION */}
      <div className="container" style={{ position: 'relative', zIndex: 2, marginTop: '40px' }}>
        <div style={{
          border: '1px solid rgba(255, 180, 50, 0.3)',
          borderRadius: '16px',
          background: '#0a0a0a',
          padding: '24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '24px',
          boxShadow: '0 20px 40px rgba(0,0,0,0.5)'
        }}>
          
          <div className="gallery-flex" style={{ display: 'flex', gap: '16px', alignItems: 'stretch' }}>
            {/* Title block on the left */}
            <div style={{ flex: '0 0 180px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <h4 style={{ color: 'var(--accent-gold)', fontSize: '20px', fontFamily: 'Georgia, serif', fontWeight: 400, marginBottom: '12px', lineHeight: 1.2 }}>
                Rendered for<br/>Every Customer
              </h4>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '13px', lineHeight: 1.5, margin: 0 }}>
                Photoreal renders across multiple metals, stones, and skin tones.
              </p>
            </div>
            
            {/* Gallery array */}
            <div style={{ flex: 1, display: 'flex', gap: '8px' }}>
              {images.map((src, idx) => (
                <div key={idx} style={{ flex: '1 1 0', aspectRatio: '16/9', background: '#1a1a1a', borderRadius: '8px', overflow: 'hidden' }}>
                  <img src={src} alt={`Render variant ${idx+1}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              ))}
            </div>
          </div>
          
          <div style={{ textAlign: 'center', color: 'rgba(255,255,255,0.6)', fontSize: '13px' }}>
            Rendered across multiple metals, stones, and skin tones—ready for web, marketplaces, and VR.
          </div>
        </div>
      </div>

      {/* 3. FEATURES & PROCESS GRID */}
      <div className="container" style={{ position: 'relative', zIndex: 2, padding: '40px 0' }}>
        {/* 6-column grid for desktop mapping EXACTLY to the template */}
        <div className="desktop-grid" style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(6, 1fr)', 
          gap: '16px' 
        }}>
          
          {/* Features Cards (Each spans 1 column) */}
          {features.map((feature, idx) => (
            <div key={idx} style={{ 
              gridColumn: 'span 1',
              border: '1px solid rgba(255, 180, 50, 0.2)', 
              borderRadius: '12px', 
              padding: '24px 20px',
              background: '#0a0a0a',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ flexShrink: 0 }}>{feature.icon}</div>
                <h5 style={{ color: '#fff', fontSize: '13px', fontWeight: 600, margin: 0, lineHeight: 1.3 }}>{feature.title}</h5>
              </div>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '12px', lineHeight: 1.5, margin: 0 }}>
                {feature.desc}
              </p>
            </div>
          ))}

          {/* Process Timeline (Spans 3 columns) */}
          <div style={{ 
            gridColumn: 'span 3',
            border: '1px solid rgba(255, 180, 50, 0.2)', 
            borderRadius: '12px', 
            padding: '24px',
            background: '#0a0a0a',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
          }}>
            <h5 style={{ color: 'var(--accent-gold)', fontSize: '15px', fontWeight: 600, marginBottom: '32px', textAlign: 'center', fontFamily: 'Georgia, serif' }}>
              From Concept to Customer
            </h5>
            
            <div className="timeline-row" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', width: '100%' }}>
              {steps.map((step, idx) => (
                <React.Fragment key={idx}>
                  {/* Step Item */}
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '80px', zIndex: 2 }}>
                    <div style={{
                      width: '44px', height: '44px', borderRadius: '50%', border: '1px solid var(--accent-gold)', 
                      display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '12px', background: '#050505',
                      color: '#fff'
                    }}>
                      {step.icon}
                    </div>
                    <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.8)', textAlign: 'center', whiteSpace: 'pre-line', lineHeight: 1.3 }}>
                      {step.name}
                    </div>
                  </div>
                  
                  {/* Dotted Connector with Diamond Node */}
                  {idx < steps.length - 1 && (
                    <div className="timeline-connector" style={{ flex: 1, display: 'flex', alignItems: 'center', position: 'relative', height: '44px' }}>
                      {/* Dotted Line */}
                      <div style={{ position: 'absolute', top: '22px', left: '0', width: '100%', borderTop: '1px dashed rgba(255,180,50,0.4)', zIndex: 1 }}></div>
                      {/* Diamond Node */}
                      <div style={{ position: 'absolute', top: '19px', left: '50%', transform: 'translateX(-50%) rotate(45deg)', width: '6px', height: '6px', background: '#050505', border: '1px solid var(--accent-gold)', zIndex: 2 }}></div>
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* 4. BOTTOM STATS */}
      <div className="container" style={{ position: 'relative', zIndex: 2, paddingBottom: '80px' }}>
        <div className="stats-row" style={{ 
          borderTop: '1px solid rgba(255,255,255,0.1)', 
          paddingTop: '40px',
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '32px'
        }}>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flex: '1 1 200px' }}>
            <div style={{ color: 'var(--accent-gold)' }}>
              {/* Camera */}
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
                <circle cx="12" cy="13" r="4"></circle>
              </svg>
            </div>
            <div>
              <div style={{ color: 'var(--accent-gold)', fontSize: '28px', fontWeight: 400, fontFamily: 'Georgia, serif' }}>90%</div>
              <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '13px', lineHeight: 1.4 }}>Lower photoshoot<br/>costs</div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flex: '1 1 200px' }}>
            <div style={{ color: 'var(--accent-gold)' }}>
              {/* Rocket */}
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                <path d="M13.5 2.5A11.5 11.5 0 0 0 2 14c0 3.3 1.4 6.3 3.6 8.4l1.4-1.4A9.5 9.5 0 0 1 4 14a9.5 9.5 0 0 1 9.5-9.5V2.5z"></path>
                <path d="M12 2l3 3-3 3"></path>
                <path d="M22 14c0-3.3-1.4-6.3-3.6-8.4l-1.4 1.4A9.5 9.5 0 0 1 20 14a9.5 9.5 0 0 1-9.5 9.5v2A11.5 11.5 0 0 0 22 14z"></path>
                <path d="M12 22l-3-3 3-3"></path>
                <path d="M12 12m-2 0a2 2 0 1 0 4 0 2 2 0 1 0-4 0"></path>
              </svg>
            </div>
            <div>
              <div style={{ color: 'var(--accent-gold)', fontSize: '28px', fontWeight: 400, fontFamily: 'Georgia, serif' }}>3x</div>
              <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '13px', lineHeight: 1.4 }}>Faster collection<br/>launches</div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flex: '1 1 200px' }}>
            <div style={{ color: 'var(--accent-gold)' }}>
              {/* Chart */}
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                <rect x="18" y="3" width="4" height="18"></rect>
                <rect x="10" y="8" width="4" height="13"></rect>
                <rect x="2" y="13" width="4" height="8"></rect>
                <polyline points="2 9 10 3 18 9"></polyline>
              </svg>
            </div>
            <div>
              <div style={{ color: 'var(--accent-gold)', fontSize: '28px', fontWeight: 400, fontFamily: 'Georgia, serif' }}>2.5x</div>
              <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '13px', lineHeight: 1.4 }}>Increase in customer<br/>confidence</div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flex: '1 1 200px' }}>
            <div style={{ color: 'var(--accent-gold)' }}>
              {/* Infinite */}
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                <path d="M8 8a4 4 0 1 0 0 8h8a4 4 0 1 0 0-8H8z"></path>
                <path d="M16 8a4 4 0 1 0 0 8h8a4 4 0 1 0 0-8h-8z" transform="translate(-8,0)"></path>
              </svg>
            </div>
            <div>
              <div style={{ color: 'var(--accent-gold)', fontSize: '28px', fontWeight: 400, fontFamily: 'Georgia, serif' }}>Infinite</div>
              <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '13px', lineHeight: 1.4 }}>Variations across metals,<br/>stones & skin tones</div>
            </div>
          </div>

        </div>
      </div>

      {/* RESPONSIVE STYLES */}
      <style dangerouslySetInnerHTML={{__html: `
        @media (max-width: 1400px) {
          #ai-studio .desktop-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          #ai-studio .desktop-grid > div:last-child {
            grid-column: span 2 !important;
          }
        }
        @media (max-width: 1024px) {
          #ai-studio .gallery-flex {
            flex-direction: column;
          }
          #ai-studio .gallery-flex > div:first-child {
            flex: auto !important;
            margin-bottom: 16px;
          }
        }
        @media (min-width: 768px) and (max-width: 1024px) {
          #ai-studio .desktop-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          #ai-studio .desktop-grid > div {
            grid-column: span 1 !important;
          }
        }
        @media (max-width: 767px) {
          #ai-studio .desktop-grid {
            grid-template-columns: 1fr !important;
          }
          #ai-studio .desktop-grid > div {
            grid-column: span 1 !important;
          }
          #ai-studio .timeline-row {
            flex-direction: row !important;
            flex-wrap: wrap !important;
            justify-content: center !important;
            gap: 24px !important;
          }
          #ai-studio .timeline-connector {
            display: none !important;
          }
          #ai-studio .stats-row {
            display: grid !important;
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 32px !important;
          }
          #ai-studio .stats-row > div {
            flex: none !important;
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 12px !important;
          }
        }
      `}} />
    </section>
  );
}
