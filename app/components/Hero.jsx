'use client';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg">
        <img src="/images/effission_hero_jewelry_3d_1778945015422.png" alt="3D Jewelry Configurator" />
        <div className="hero-overlay"></div>
      </div>
      
      <div className="container">
        <div className="hero-content">
          <span className="hero-label">Precision Meets Innovation</span>
          <h1 className="hero-title">Digital Brilliance for the Modern Jeweler</h1>
          <p className="hero-desc">
            Transform your jewelry business with state-of-the-art 3D configuration, 
            AI-driven automation, and bespoke digital experiences.
          </p>
          <div className="hero-btns">
            <a href="#services" className="btn btn-primary">Explore Services</a>
            <a href="#products" className="btn btn-outline">View 3D Demo</a>
          </div>
        </div>
      </div>
    </section>
  );
}
