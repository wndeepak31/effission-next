'use client';

import React, { useState } from 'react';
import SectionIndicator from './SectionIndicator';

const Impact = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: 'Empowering the Jewelry Industry',
      subtitle: 'Driving digital growth and innovation for jewelry brands through state-of-the-art software solutions and AI-driven automation.',
      image: '/images/effission-logo.png'
    },
    // More slides can be added here
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  const slide = slides[currentSlide];

  return (
    <section className="impact">
      <SectionIndicator
        number="09"
        label="Impact"
      />

      <div className="impact-content">
        <div className="impact-left">
          <h2 className="impact-title">{slide.title}</h2>
          <p className="impact-subtitle">{slide.subtitle}</p>

          <div className="impact-cta">
            <span>Know more</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#27E3FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>

        <div className="impact-right">
          <div className="impact-image-wrapper">
            <img 
              src={slide.image} 
              alt={slide.title}
              className="impact-image"
              style={{ width: '100%', height: '100%', objectFit: 'contain' }}
            />
          </div>
        </div>
      </div>

      <button className="impact-nav prev" onClick={prevSlide}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M15 19L8 12L15 5" stroke="#FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <button className="impact-nav next" onClick={nextSlide}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M9 5L16 12L9 19" stroke="#FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </section>
  );
};

export default Impact;
