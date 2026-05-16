"use client";

import { useState } from 'react';
import Image from 'next/image';
import SectionIndicator from './SectionIndicator';

const tabContentData = {
  'DISCOVERY': {
    image: '/images/bg_hero.png',
    description: <>Understanding your jewelry brand's unique needs and digital goals to create a strategic roadmap.</>
  },
  'DESIGN': {
    image: '/images/bg_section2.png',
    description: <>Crafting intuitive and luxurious user experiences tailored specifically for the jewelry industry.</>
  },
  'DEVELOPMENT': {
    image: '/images/bg_section3.png',
    description: <>Building robust, scalable, and high-performance software solutions with the latest technologies.</>
  },
  'DEPLOYMENT': {
    image: '/images/bg_hero.png',
    description: <>Seamlessly launching your digital products and providing ongoing support for your evolution.</>
  }
};

export default function ValueChain() {
  const [activeTab, setActiveTab] = useState('DISCOVERY');

  const content = tabContentData[activeTab];

  return (
    <section className="section value-chain">
      <SectionIndicator number="04" label="Our Process" isFirst={false} />

      <div className="value-chain-header">
        <h2 className="vc-title">The Digital Jewelry Lifecycle.<br />One Partner.</h2>
        <p className="vc-subtitle">
          Complete control over innovation. Unwavering quality. Technology you can count on today,<br />
          tomorrow, and beyond.
        </p>

        <div className="vc-tabs">
          {Object.keys(tabContentData).map(tab => (
            <button
              key={tab}
              className={`vc-tab ${activeTab === tab ? 'active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="tab-content-container">
        <div key={activeTab} className={`tab-content ${activeTab.toLowerCase()}-content`}>
          <Image
            src={content.image}
            alt={`${activeTab} background`}
            fill
            style={{ objectFit: 'cover', zIndex: 0 }}
            quality={100}
          />
          <div className="tab-inner">
            <p className="tab-description">
              {content.description}
            </p>
            <button className="tab-cta">know more</button>
          </div>
        </div>
      </div>
    </section>
  );
}
