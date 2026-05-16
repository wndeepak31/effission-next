'use client';

const services = [
  {
    title: "3D Jewelry Configuration",
    desc: "Empower your customers to customize their jewelry in real-time with physically accurate materials and stunning 3D renders.",
    icon: "💎",
    image: "/images/effission_hero_jewelry_3d_1778945015422.png"
  },
  {
    title: "AI-Powered Automation",
    desc: "Streamline your workflows with intelligent AI tools designed for jewelry design, inventory management, and customer insights.",
    icon: "🤖",
    image: "/images/jewelry_ai_automation_1778945033758.png"
  },
  {
    title: "Bespoke Web Development",
    desc: "Luxury e-commerce experiences tailored to the high-end jewelry market, focusing on storytelling and high conversion.",
    icon: "🌐",
    image: "/images/bg_section3.png"
  },
  {
    title: "Digital Sales Catalogue",
    desc: "A portable, high-resolution digital showcase for your entire collection, perfect for exhibitions and private viewings.",
    icon: "📱",
    image: "/images/jewelry_digital_catalogue_1778945050844.png"
  },
  {
    title: "CRM / ERP",
    desc: "Integrated business management solutions designed to unify your jewelry operations, from inventory to customer relations.",
    icon: "📊",
    image: "/images/bg_section2.png"
  }
];

export default function Services() {
  return (
    <section id="services" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Capabilities</span>
          <h2 className="section-title">Our Digital Ecosystem</h2>
        </div>

        <div className="services-grid-balanced">
          {services.map((service, index) => (
            <div key={index} className="service-card service-card-grid">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>

        <div style={{ marginTop: '80px' }}>
          {services.slice(0, 1).map((service, index) => (
            <div key={index} className="feature-card">
              <div className="feature-content">
                <span className="section-label">Featured Innovation</span>
                <h2>Next-Gen 3D Viewer</h2>
                <p style={{ margin: '20px 0 40px', fontSize: '18px', color: 'var(--text-secondary)' }}>
                  Our proprietary rendering engine delivers studio-quality visuals directly in the browser,
                  capturing the fire and brilliance of diamonds like never before.
                </p>
                <a href="#products" className="btn btn-outline" style={{ width: 'fit-content' }}>Discover More</a>
              </div>
              <div className="feature-img">
                <img src={service.image} alt={service.title} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
