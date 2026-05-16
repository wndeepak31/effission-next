'use client';

export default function Contact() {
  return (
    <section id="contact" className="section" style={{ background: 'linear-gradient(180deg, var(--bg-secondary) 0%, var(--bg-primary) 100%)' }}>
      <div className="container">
        <div className="glass-effect" style={{ padding: '80px 40px', borderRadius: '24px', textAlign: 'center' }}>
          <span className="section-label">Get In Touch</span>
          <h2 className="section-title" style={{ maxWidth: '800px', margin: '0 auto 40px' }}>
            Ready to elevate your jewelry brand with digital brilliance?
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '18px', marginBottom: '40px', maxWidth: '600px', margin: '0 auto 40px' }}>
            Whether you have a question, an enquiry, or a partnership idea, 
            our team of experts is ready to help you shine.
          </p>
          <a href="mailto:contact@effission.com" className="btn btn-primary" style={{ padding: '20px 60px', fontSize: '18px' }}>
            Start a Conversation
          </a>
        </div>
      </div>
    </section>
  );
}
