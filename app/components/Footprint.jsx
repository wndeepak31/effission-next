'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import SectionIndicator from './SectionIndicator';

const Footerprint = () => {
  const [activeCategory, setActiveCategory] = useState('plants');

  const categories = [
    { id: 'plants', label: 'Processing Plants', count: 9 },
    { id: 'mining', label: 'Mining Locations', count: 6 },
    { id: 'warehouses', label: 'Warehouses', count: 2 },
  ];

  const pins = {
    plants: [
      { name: 'Udaipur', top: '45%', left: '50%' },
      { name: 'Lokapur', top: '50%', left: '58%' },
      { name: 'Bhuj', top: '58%', left: '54%' },
      { name: 'Vizag', top: '56%', left: '63%' },
      { name: 'Parbatsar', top: '50%', left: '17%' },
      { name: 'Ambaji', top: '54%', left: '50%' },
      { name: 'Satara', top: '61%', left: '52%' },
      { name: 'Kalo', top: '65%', left: '57%' },
      { name: 'Quy', top: '65%', left: '75%' },
    ],
    mining: [
      { name: 'Rajasthan Main', top: '48%', left: '48%' },
      { name: 'Bhilwara', top: '52%', left: '50%' },
      { name: 'Alwar', top: '46%', left: '52%' },
      { name: 'Nagaur', top: '50%', left: '54%' },
      { name: 'Jodhpur', top: '55%', left: '49%' },
      { name: 'Udaipur Site', top: '58%', left: '51%' },
    ],
    warehouses: [
      { name: 'Kolkata Hub', top: '55%', left: '72%' },
      { name: 'Mumbai Port', top: '60%', left: '45%' },
    ]
  };

  return (
    <section className="footprint">
      <SectionIndicator
        number="06"
        label="Our footprint"
      />

      <div className="footprint-content">
        <div className="footprint-left">
          <h2 className="footprint-title">
            From mine to market. Everywhere it matters.
          </h2>
          <p className="footprint-subtitle">
            An ever-expanding footprint. A commitment that doesn't<br /> stop at borders.
          </p>

          <div className="footprint-list">
            {categories.map((cat) => (
              <div
                key={cat.id}
                className={`footprint-item ${activeCategory === cat.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                <span className="footprint-num">{cat.count}</span>
                <span className="footprint-label">{cat.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="footprint-map-container">
          <div className="map-wrapper">
            <Image
              src="/images/world_map_dots.png"
              alt="World Map"
              fill
              style={{ objectFit: 'contain', opacity: 0.8 }}
            />

            {pins[activeCategory].map((pin, i) => (
              <div
                key={i}
                className="map-pin"
                style={{ top: pin.top, left: pin.left }}
              >
                <div className="pin-pulse"></div>
                <div className="pin-dot"></div>
                {pin.name && (
                  <div className="pin-label">
                    {pin.name}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footerprint;
