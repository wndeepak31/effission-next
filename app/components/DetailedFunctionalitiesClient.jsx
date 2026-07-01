'use client';

import React, { useState } from 'react';

export default function DetailedFunctionalitiesClient({ data }) {
  const [selectedItem, setSelectedItem] = useState(null);

  const openModal = (item) => {
    // Only open if details exist
    if (item.details && item.details.length > 0) {
      setSelectedItem(item);
      document.body.style.overflow = 'hidden';
    }
  };

  const closeModal = () => {
    setSelectedItem(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <>
      <h2 style={{ fontSize: '36px', fontFamily: 'Georgia, serif', textAlign: 'center', marginBottom: '60px' }}>
        {data.detailedFunctionalitiesTitle || 'How Effission Benefits Your Business'}
      </h2>

      {data.detailedFunctionalities.map((funcGroup, idx) => (
        <div key={idx} style={{ marginBottom: '60px' }}>
          {funcGroup.category && (
            <h3 style={{ fontSize: '24px', fontFamily: 'Georgia, serif', marginBottom: '30px', color: 'var(--accent-gold)' }}>
              {funcGroup.category}
            </h3>
          )}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '20px'
          }}>
            {funcGroup.items.map((item, itemIdx) => (
              <div 
                key={itemIdx} 
                style={{
                  background: '#0a0a0a',
                  padding: '20px',
                  borderRadius: '16px',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  transition: 'all 0.3s ease',
                  cursor: item.details ? 'pointer' : 'default',
                }} 
                className="detailed-feature-card hover-gold-border hover-scale"
                onClick={() => openModal(item)}
              >
                <div style={{
                  fontSize: '24px',
                  color: 'var(--accent-gold)',
                  background: 'rgba(255, 180, 50, 0.05)',
                  width: '48px',
                  height: '48px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '12px',
                  flexShrink: 0
                }}>
                  {item.icon}
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <h4 style={{ fontSize: '14px', fontWeight: 500, margin: '0 0 4px 0', color: 'rgba(255,255,255,0.9)' }}>
                    {item.title}
                  </h4>
                  {item.details && (
                    <span style={{ fontSize: '12px', color: 'var(--accent-gold)', cursor: 'pointer' }}>
                      Read More
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Modal Overlay */}
      {selectedItem && (
        <div style={{
          position: 'fixed',
          top: 0, left: 0, right: 0, bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          backdropFilter: 'blur(5px)',
          WebkitBackdropFilter: 'blur(5px)',
          zIndex: 9999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px'
        }} onClick={closeModal}>
          
          {/* Modal Content */}
          <div style={{
            background: '#111',
            borderRadius: '24px',
            border: '1px solid rgba(237, 139, 22, 0.3)',
            maxWidth: '600px',
            width: '100%',
            maxHeight: '85vh',
            overflowY: 'auto',
            padding: '40px',
            position: 'relative',
            boxShadow: '0 20px 60px rgba(0,0,0,0.8)'
          }} onClick={(e) => e.stopPropagation()}>
            
            {/* Close Button */}
            <button 
              onClick={closeModal}
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                background: 'transparent',
                border: 'none',
                color: 'rgba(255,255,255,0.6)',
                cursor: 'pointer',
                fontSize: '24px',
                lineHeight: 1,
                padding: '4px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              &times;
            </button>

            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '30px' }}>
              <div style={{
                fontSize: '32px',
                color: 'var(--accent-gold)',
                background: 'rgba(255, 180, 50, 0.05)',
                width: '60px',
                height: '60px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '16px',
                flexShrink: 0
              }}>
                {selectedItem.icon}
              </div>
              <h2 style={{ fontSize: '28px', fontFamily: 'Georgia, serif', margin: 0, color: '#fff' }}>
                {selectedItem.title}
              </h2>
            </div>

            <div style={{ color: 'rgba(255,255,255,0.8)', fontSize: '15px', lineHeight: 1.7 }}>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {selectedItem.details.map((detail, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent-gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '4px' }}>
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="8 12 11 15 16 9"></polyline>
                    </svg>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
            
          </div>
        </div>
      )}
    </>
  );
}
