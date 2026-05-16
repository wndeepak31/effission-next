'use client';

import React, { useState } from 'react';

const Footprint = () => {
  const [activeCategory, setActiveCategory] = useState('brands');

  const categories = [
    { 
      id: 'brands', 
      label: 'Jewelry Brands', 
      count: '150+', 
      growth: '+12% this year',
      description: 'Prestigious jewelry houses trusting our digital solutions.'
    },
    { 
      id: 'markets', 
      label: 'Global Markets', 
      count: '24+', 
      growth: 'Expanding to Asia',
      description: 'Delivering digital excellence across diverse international borders.'
    },
    { 
      id: 'renders', 
      label: '3D Renders / Mo', 
      count: '1.2M+', 
      growth: 'High-speed delivery',
      description: 'State-of-the-art cloud nodes powering real-time configuration.'
    },
  ];

  const pins = {
    brands: [
      { name: 'New York Hub', top: '40%', left: '25%' },
      { name: 'London Studio', top: '35%', left: '48%' },
      { name: 'Mumbai H.Q.', top: '58%', left: '68%' },
      { name: 'Singapore Node', top: '65%', left: '82%' },
      { name: 'Dubai Office', top: '48%', left: '58%' },
    ],
    markets: [
      { name: 'USA', top: '40%', left: '20%' },
      { name: 'Europe', top: '38%', left: '50%' },
      { name: 'Middle East', top: '48%', left: '55%' },
      { name: 'India', top: '55%', left: '68%' },
      { name: 'SE Asia', top: '65%', left: '80%' },
    ],
    renders: [
      { name: 'Cloud Node Alpha', top: '42%', left: '22%' },
      { name: 'Cloud Node Beta', top: '35%', left: '52%' },
      { name: 'Cloud Node Gamma', top: '55%', left: '75%' },
    ]
  };

  return (
    <section id="footprint" className="section" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Localized glow for the footprint section */}
      <div style={{ 
        position: 'absolute', 
        top: '50%', 
        left: '50%', 
        transform: 'translate(-50%, -50%)',
        width: '800px', 
        height: '800px', 
        background: 'radial-gradient(circle, rgba(0, 192, 243, 0.05) 0%, transparent 70%)',
        zIndex: 0,
        pointerEvents: 'none'
      }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="section-header">
          <span className="section-label">Global Connectivity</span>
          <h2 className="section-title">Our Digital Presence</h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
            A worldwide network of innovation hubs and cloud infrastructure 
            dedicated to the jewelry industry.
          </p>
        </div>

        <div className="footprint-container">
          <div className="footprint-stats">
            {categories.map((cat) => (
              <div
                key={cat.id}
                className={`stat-card ${activeCategory === cat.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div>
                    <h4>{cat.count}</h4>
                    <p>{cat.label}</p>
                  </div>
                  <span style={{ fontSize: '10px', color: 'var(--accent-primary)', opacity: 0.8, fontWeight: 'bold' }}>
                    {cat.growth}
                  </span>
                </div>
                {activeCategory === cat.id && (
                  <p style={{ marginTop: '12px', fontSize: '12px', color: 'var(--text-secondary)', textTransform: 'none', letterSpacing: 'normal', opacity: 1 }}>
                    {cat.description}
                  </p>
                )}
              </div>
            ))}
          </div>

          <div className="map-container">
            <img
              src="/images/world_map_dots.png"
              alt="World Map"
              className="map-img"
            />

            {pins[activeCategory].map((pin, i) => (
              <div
                key={i}
                className="map-pin"
                style={{ 
                  top: pin.top, 
                  left: pin.left,
                  opacity: 1,
                  visibility: 'visible'
                }}
              >
                <div className="pin-pulse"></div>
                <div className="pin-dot"></div>
                <div className="pin-label">{pin.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footprint;
