"use client";

import { useState } from 'react';
import Image from 'next/image';
import SectionIndicator from './SectionIndicator';

const tabContentData = {
  'MINING': {
    image: '/images/bg_mining1.jpg',
    description: <>Captive mining strength anchored in rich, multi-mineral reserves<br />ensures assured quality from the very source.</>
  },
  'PROCESSING': {
    image: '/images/bg_processing.jpg',
    description: <>Captive processing strength anchored in rich, multi-mineral reserves<br />ensures assured quality from the very source.</>
  },
  'MANUFACTURING': {
    image: '/images/bg_manufacturing.jpg',
    description: <>Captive manufacturing strength anchored in rich, multi-mineral reserves<br />ensures assured quality from the very source.</>
  },
  'DELIVERING': {
    image: '/images/bg_delivering.jpg',
    description: <>Captive delivering strength anchored in rich, multi-mineral reserves<br />ensures assured quality from the very source.</>
  }
};

export default function ValueChain() {
  const [activeTab, setActiveTab] = useState('MINING');

  const content = tabContentData[activeTab];

  return (
    <section className="section value-chain">
      <SectionIndicator number="04" label="What we do" isFirst={false} />

      <div className="value-chain-header">
        <h2 className="vc-title">The entire mineral value chain.<br />One company.</h2>
        <p className="vc-subtitle">
          Complete control over quality. Unwavering consistency. Supply you can count on today,<br />
          tomorrow, always.
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
