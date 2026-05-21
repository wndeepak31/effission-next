'use client';
import Link from 'next/link';

const services = [
  {
    title: "3D Jewelry Configuration",
    desc: "Empower your customers to customize their jewelry in real-time with physically accurate materials and stunning 3D renders.",
    icon: "💎",
    image: "/images/jewelry_3d_config_1779341346063.png",
    link: "/services/3d-jewelry-configuration"
  },
  {
    title: "AI-Powered Automation",
    desc: "Streamline your workflows with intelligent AI tools designed for jewelry design, inventory management, and customer insights.",
    icon: "🤖",
    image: "/images/ai_jewelry_automation_1779341365264.png",
    link: "/services/ai-powered-automation"
  },
  {
    title: "Bespoke Web Development",
    desc: "Luxury e-commerce experiences tailored to the high-end jewelry market, focusing on storytelling and high conversion.",
    icon: "🌐",
    image: "/images/bespoke_web_dev_1779341382162.png",
    link: "/services/bespoke-web-development"
  },
  {
    title: "Digital Sales Catalogue",
    desc: "A portable, high-resolution digital showcase for your entire collection, perfect for exhibitions and private viewings.",
    icon: "📱",
    image: "/images/digital_sales_catalog_1779341397882.png",
    link: "/services/digital-sales-catalogue"
  },
  {
    title: "CRM / ERP",
    desc: "Integrated business management solutions designed to unify your jewelry operations, from inventory to customer relations.",
    icon: "📊",
    image: "/images/jewelry_crm_erp_1779341413648.png",
    link: "/services/integrated-crm-erp"
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
            <Link href={service.link} key={index} className="service-card service-card-grid" style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </Link>
          ))}
        </div>
        
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
          <a href="/services" className="btn btn-primary" style={{ padding: '16px 32px', fontSize: '16px' }}>
            Explore All Services
          </a>
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
