"use client";

import { useState } from 'react';
import Image from 'next/image';
import SectionIndicator from './SectionIndicator';

const products = [
  {
    name: 'WEB DEVELOPMENT',
    description: 'bespoke\ne-commerce',
    image: '/images/effission-logo.png',
  },
  {
    name: 'AUTOMATION & AI',
    description: 'intelligent\noperations',
    image: '/images/effission-logo.png',
  },
  {
    name: '3D CONFIGURATION',
    description: 'interactive\nviewers',
    image: '/images/effission-logo.png',
  },
  {
    name: 'DIGITAL CATALOGUE',
    description: 'dynamic\nshowcases',
    image: '/images/effission-logo.png',
  }
];

export default function Products() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => setCurrentIndex((prev) => (prev + 1) % products.length);
  const handlePrev = () => setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);

  const currentProduct = products[currentIndex];
  // Calculate index names
  const prevProduct = products[(currentIndex - 1 + products.length) % products.length];
  const nextProduct = products[(currentIndex + 1) % products.length];

  return (
    <section className="section products">
      <SectionIndicator number="05" label="Our Services" isFirst={false} theme="light" />

      <div className="products-content">
        <h2 className="products-title">Digital Excellence.<br />Tailored for Jewelry.</h2>
        <p className="products-subtitle">
          Cutting-edge solutions designed for the specific needs of the jewelry industry.
        </p>

        <div className="product-slider">
          <div className="slider-control prev">
            <button className="slider-arrow" onClick={handlePrev}>
              {'<'}
            </button>
            <span className="slider-label">
              {prevProduct.name.split(' ').map((w, i) => <span key={i}>{w}<br /></span>)}
            </span>
          </div>

          <div className="product-display" key={currentIndex}>
            <div className="product-watermark">{currentProduct.name}</div>
            <div className="product-divider"></div>

            <div className="product-info-left">
              <h3 className="product-desc">
                {currentProduct.description.split('\n').map((line, i) => (
                  <span key={i}>{line}<br /></span>
                ))}
              </h3>
              <button className="product-cta">Know more</button>
            </div>

            <div className="product-image-container">
              <Image
                src={currentProduct.image}
                alt={currentProduct.name}
                fill
                style={{ objectFit: 'contain' }}
              />
            </div>
          </div>

          <div className="slider-control next">
            <button className="slider-arrow" onClick={handleNext}>
              {'>'}
            </button>
            <span className="slider-label">
              {nextProduct.name.split(' ').map((w, i) => <span key={i}>{w}<br /></span>)}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
