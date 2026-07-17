'use client';

import { useState } from 'react';
import { submitContactForm } from '../actions/contactAction';

export default function ContactForm() {
  const [status, setStatus] = useState('idle'); // idle, submitting, success, error
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    const formData = new FormData(e.target);
    const result = await submitContactForm(formData);

    if (result.success) {
      setStatus('success');
      e.target.reset();
    } else {
      setStatus('error');
      setErrorMessage(result.error || 'Something went wrong. Please try again.');
    }
  };

  if (status === 'success') {
    return (
      <div className="glass-effect" style={{ flex: 1, padding: '60px 40px', borderRadius: '16px', textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <div style={{ fontSize: '64px', marginBottom: '24px' }}>✅</div>
        <h2 style={{ fontSize: '28px', marginBottom: '16px' }}>Message Sent!</h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '16px', marginBottom: '32px', lineHeight: '1.6' }}>
          Thank you for reaching out. Our team has received your message and will get back to you shortly.
        </p>
        <button 
          onClick={() => setStatus('idle')}
          style={{ padding: '14px 28px', fontSize: '16px', backgroundColor: 'transparent', color: '#fff', border: '1px solid var(--glass-border)', borderRadius: '8px', cursor: 'pointer', transition: 'all 0.3s ease' }}
          onMouseOver={(e) => { e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)'; }}
          onMouseOut={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; }}
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <div className="glass-effect" style={{ flex: 1, padding: '40px', borderRadius: '16px' }}>
      <h2 style={{ fontSize: '28px', marginBottom: '24px' }}>Send us a Message</h2>
      
      {status === 'error' && (
        <div style={{ padding: '16px', marginBottom: '24px', backgroundColor: 'rgba(255, 0, 0, 0.1)', border: '1px solid rgba(255, 0, 0, 0.2)', borderRadius: '8px', color: '#ff8a8a', fontSize: '15px' }}>
          {errorMessage}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '8px', color: 'var(--text-secondary)', fontSize: '14px' }}>Full Name *</label>
            <input name="name" type="text" required placeholder="John Doe" style={{ width: '100%', padding: '14px 16px', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--glass-border)', borderRadius: '8px', color: '#fff', fontSize: '16px', outline: 'none', transition: 'border-color 0.3s ease' }} onFocus={(e) => e.target.style.borderColor = 'var(--accent-gold)'} onBlur={(e) => e.target.style.borderColor = 'var(--glass-border)'} />
          </div>
          
          <div>
            <label style={{ display: 'block', marginBottom: '8px', color: 'var(--text-secondary)', fontSize: '14px' }}>Work Email *</label>
            <input name="email" type="email" required placeholder="john@jewelrybrand.com" style={{ width: '100%', padding: '14px 16px', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--glass-border)', borderRadius: '8px', color: '#fff', fontSize: '16px', outline: 'none', transition: 'border-color 0.3s ease' }} onFocus={(e) => e.target.style.borderColor = 'var(--accent-gold)'} onBlur={(e) => e.target.style.borderColor = 'var(--glass-border)'} />
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '8px', color: 'var(--text-secondary)', fontSize: '14px' }}>Company</label>
            <input name="company" type="text" placeholder="Your Brand Name" style={{ width: '100%', padding: '14px 16px', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--glass-border)', borderRadius: '8px', color: '#fff', fontSize: '16px', outline: 'none', transition: 'border-color 0.3s ease' }} onFocus={(e) => e.target.style.borderColor = 'var(--accent-gold)'} onBlur={(e) => e.target.style.borderColor = 'var(--glass-border)'} />
          </div>

          <div>
            <label style={{ display: 'block', marginBottom: '8px', color: 'var(--text-secondary)', fontSize: '14px' }}>Mobile Number *</label>
            <input name="mobile" type="tel" required placeholder="+1 (555) 000-0000" style={{ width: '100%', padding: '14px 16px', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--glass-border)', borderRadius: '8px', color: '#fff', fontSize: '16px', outline: 'none', transition: 'border-color 0.3s ease' }} onFocus={(e) => e.target.style.borderColor = 'var(--accent-gold)'} onBlur={(e) => e.target.style.borderColor = 'var(--glass-border)'} />
          </div>
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', marginBottom: '8px', color: 'var(--text-secondary)', fontSize: '14px' }}>Select Products *</label>
          <select name="product" required style={{ width: '100%', padding: '14px 16px', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--glass-border)', borderRadius: '8px', color: '#fff', fontSize: '16px', outline: 'none', transition: 'border-color 0.3s ease', cursor: 'pointer' }} onFocus={(e) => e.target.style.borderColor = 'var(--accent-gold)'} onBlur={(e) => e.target.style.borderColor = 'var(--glass-border)'}>
            <option value="" style={{ color: '#000' }}>Select a product</option>
            <option value="Effission Retail" style={{ color: '#000' }}>Effission Retail</option>
            <option value="Effission Wholesale" style={{ color: '#000' }}>Effission Wholesale</option>
            <option value="Effission Manufacturing" style={{ color: '#000' }}>Effission Manufacturing</option>
            <option value="Effission Digital Brand" style={{ color: '#000' }}>Effission Digital Brand</option>
            <option value="AI & Automation Services" style={{ color: '#000' }}>AI & Automation Services</option>
            <option value="Effission CRM" style={{ color: '#000' }}>Effission CRM</option>
          </select>
        </div>
        
        <div style={{ marginBottom: '30px' }}>
          <label style={{ display: 'block', marginBottom: '8px', color: 'var(--text-secondary)', fontSize: '14px' }}>How can we help? *</label>
          <textarea name="message" required rows="4" placeholder="Tell us about your project..." style={{ width: '100%', padding: '14px 16px', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--glass-border)', borderRadius: '8px', color: '#fff', fontSize: '16px', resize: 'vertical', outline: 'none', transition: 'border-color 0.3s ease' }} onFocus={(e) => e.target.style.borderColor = 'var(--accent-gold)'} onBlur={(e) => e.target.style.borderColor = 'var(--glass-border)'}></textarea>
        </div>
        
        <button 
          type="submit" 
          disabled={status === 'submitting'}
          style={{ width: '100%', padding: '16px', fontSize: '16px', backgroundColor: 'var(--accent-gold)', color: '#000', border: 'none', borderRadius: '8px', fontWeight: 600, cursor: status === 'submitting' ? 'not-allowed' : 'pointer', opacity: status === 'submitting' ? 0.7 : 1, transition: 'all 0.3s ease' }}
        >
          {status === 'submitting' ? 'Sending...' : 'Request Consultation'}
        </button>
      </form>
    </div>
  );
}
