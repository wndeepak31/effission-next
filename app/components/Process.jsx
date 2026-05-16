'use client';

const Process = () => {
  const steps = [
    {
      title: "Vision & Strategy",
      desc: "We align with your brand's heritage to build a digital roadmap that respects tradition while embracing the future.",
      visual: "/images/bg_section2.png"
    },
    {
      title: "Asset Digitization",
      desc: "Our masters of 3D craft physically accurate digital twins of your collection, ensuring every facet reflects light perfectly.",
      visual: "/images/jewelry_digital_catalogue_1778945050844.png"
    }
  ];

  return (
    <section id="process" className="section" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container">
        <div className="section-header" style={{ marginBottom: '100px' }}>
          <span className="section-label">Our Methodology</span>
          <h2 className="section-title">Crafting the Digital Journey</h2>
        </div>

        {steps.map((step, index) => (
          <div key={index} className="process-split">
            <div className="process-split-content">
              <span className="step-number" style={{ margin: '0 0 24px 0' }}>0{index + 1}</span>
              <h3 style={{ fontSize: '36px', marginBottom: '24px' }}>{step.title}</h3>
              <p style={{ fontSize: '18px', color: 'var(--text-secondary)', lineHeight: '1.8' }}>{step.desc}</p>
            </div>
            <div className="process-split-visual premium-card">
              <img src={step.visual} alt={step.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Process;
