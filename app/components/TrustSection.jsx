import React from 'react';
import Image from 'next/image';

const TrustSection = () => {
  const logos = [
    { name: 'asianpaints', label: 'asianpaints' },
    { name: 'Berger-paints', label: 'Berger' },
    { name: 'AkzoNobel', label: 'AkzoNobel' },
    { name: 'KANSAI NEROLAC', label: 'KANSAI NEROLAC' },
    { name: 'Colgate-Palmolive', label: 'Colgate-Palmolive' },
    { name: 'Unilever', label: 'Unilever' },
    { name: 'ITC', label: 'ITC' },
  ];

  return (
    <section className="trust-section">
      <div className="trust-content">
        <h2 className="trust-title">Trusted by those who build India</h2>

        <div className="logo-grid">
          {logos.map((logo, index) => (
            <div key={index} className="logo-item">
              <Image
                src={`/images/${logo.name}.png`}
                alt={logo.label}
                width={150}
                height={60}
                style={{ objectFit: 'contain' }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
