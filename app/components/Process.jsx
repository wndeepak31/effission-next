'use client';

const Process = () => {
  const steps = [
    {
      number: "01",
      title: "Strategy",
      desc: "We analyze your business model and jewelry collection to define a tailored digital strategy."
    },
    {
      number: "02",
      title: "Curation",
      desc: "Our artists curate and digitize your jewelry assets with high-fidelity 3D modeling."
    },
    {
      number: "03",
      title: "Integration",
      desc: "Seamlessly integrate our software into your existing e-commerce or retail platforms."
    },
    {
      number: "04",
      title: "Growth",
      desc: "Launch your digital experience and scale with real-time data and AI-driven insights."
    }
  ];

  return (
    <section id="process" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Workflow</span>
          <h2 className="section-title">The Path to Digital Excellence</h2>
        </div>
        
        <div className="process-grid">
          {steps.map((step, index) => (
            <div key={index} className="process-step">
              <div className="step-number">{step.number}</div>
              <h3 style={{ marginBottom: '12px' }}>{step.title}</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '15px' }}>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
