'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import SectionIndicator from './SectionIndicator';

const Sectors = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const sectorData = [
    { id: 1, title: 'Web Development', image: '/images/effission-logo.png' },
    { id: 2, title: '3D Configurator', image: '/images/effission-logo.png' },
    { id: 3, title: 'AI Automation', image: '/images/effission-logo.png' },
    { id: 4, title: 'Digital Catalogue', image: '/images/effission-logo.png' },
    { id: 5, title: 'Inventory Management', image: '/images/effission-logo.png' },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % (sectorData.length - 2));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? sectorData.length - 3 : prev - 1));
  };

  return (
    <section className="sectors">
      <SectionIndicator
        number="07"
        label="Jewelry Solutions"
      />

      <div className="sectors-content">
        <div className="sectors-left">
          <h2 className="sectors-title">
            Comprehensive<br /> jewelry solutions.
          </h2>
          <p className="sectors-subtitle">
            Empowering jewelry retailers and manufacturers with state-of-the-art software.
          </p>

          <div className="sectors-cta">
            <span>Know more</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#27E3FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>

        <div className="sectors-slider-container">
          <div className="slider-viewport" style={{ overflow: 'hidden', padding: '20px 0' }}>
            <div
              className="sectors-slider"
              style={{ transform: `translateX(-${currentIndex * 350}px)` }}
            >
              {sectorData.map((sector) => (
                <div key={sector.id} className="sector-card">
                  <div className="card-image-wrapper">
                    {/* Background color placeholder until real images are added to /public/images/ */}
                    <div className="card-placeholder" style={{ 
                      backgroundColor: '#231F20', 
                      backgroundImage: `url(${sector.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      width: '100%',
                      height: '100%'
                    }}></div>
                  </div>
                  <div className="card-info">
                    <h3 className="card-title">{sector.title}</h3>
                    <div className="card-line"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="slider-nav">
            <button className="nav-btn" onClick={prevSlide}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="#FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button className="nav-btn next" onClick={nextSlide}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sectors;
