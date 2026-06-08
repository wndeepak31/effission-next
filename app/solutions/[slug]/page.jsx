import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';

export function generateStaticParams() {
  return [
    { slug: 'retailers' },
    { slug: 'wholesalers' },
    { slug: 'manufacturers' },
    { slug: 'digital' },
  ];
}

const solutionsData = {
  retailers: {
    title: 'Retailers',
    subtitle: 'Run high-velocity stores with full control of stock and customers.',
    description: 'Transform your retail jewelry business with Effission. Our comprehensive POS and inventory management solutions are designed specifically for the complexities of jewelry retail, giving you real-time visibility across all your locations.',
    image: '/images/retailers.png',
    features: [
      {
        title: 'Jewelry-Specific POS',
        description: 'Handle gold, diamond, and fashion jewelry with specialized billing, metal rate calculations, and certification tracking.',
        icon: '💻'
      },
      {
        title: 'Real-Time Inventory',
        description: 'Track every piece across multiple stores with RFID integration. Manage transfers, approvals, and stocktakes effortlessly.',
        icon: '📦'
      },
      {
        title: 'CRM & Loyalty',
        description: 'Build lasting relationships with integrated customer profiles, purchase history, and targeted loyalty programs.',
        icon: '🤝'
      }
    ],
    tags: ['Single Store', 'Multi-Store', 'Franchise Networks'],
    detailedFunctionalitiesTitle: 'How Retail Jewelry Software Benefits Your Business',
    detailedFunctionalities: [
      {
        category: 'P.O.S Functionalities',
        items: [
          { title: 'Estimation & Billing', icon: '📝' },
          { title: 'Loyalty Management', icon: '🏆' },
          { title: 'CRM', icon: '👤' },
          { title: 'Repair Management', icon: '⚙️' },
          { title: 'Layaway Support', icon: '🛍️' },
          { title: 'Discount Management', icon: '🏷️' },
          { title: 'Order Management', icon: '📄' },
          { title: 'Lost Opportunity Analysis', icon: '📉' },
          { title: 'Customer Checks & Balances', icon: '✅' },
          { title: 'Buy Back / Old Metal Purchase / Exchange', icon: '⚖️' },
          { title: 'Scheme Management', icon: '🌟' },
          { title: 'Digital Catalogue', icon: '📱' },
        ]
      },
      {
        category: 'Back Office Functionalities',
        items: [
          { title: 'Pricing Rules', icon: '🪄' },
          { title: 'Style Master', icon: '💎' },
          { title: 'Procurement', icon: '🎯' },
          { title: 'Barcode / RFID Management', icon: '📇' },
          { title: 'Inventory Management', icon: '📦' },
          { title: 'Stock Valuation', icon: '📊' },
          { title: 'Subcontractor Production / Karigar Management', icon: '💼' },
          { title: 'Franchisee Management', icon: '🏢' },
          { title: 'Multi Branch / Multi Location Management', icon: '📍' },
          { title: 'Financial Control & Accounting', icon: '💰' },
          { title: 'Memo Management', icon: '📋' },
        ]
      }
    ]
  },
  wholesalers: {
    title: 'Wholesalers',
    subtitle: 'Sell more designs with less physical inventory.',
    description: 'Empower your sales team and expand your reach with Effission’s wholesale solutions. Streamline memo tracking, B2B ordering, and inventory distribution.',
    image: '/images/wholesellers.png',
    features: [
      {
        title: 'B2B eCatalog',
        description: 'Equip traveling reps with an interactive tablet app to showcase inventory, take orders, and check stock in real-time.',
        icon: '📱'
      },
      {
        title: 'Memo Control',
        description: 'Tighten control over goods on consignment. Track due dates, approvals, and returns with automated alerts.',
        icon: '📋'
      },
      {
        title: 'Manufacturing Link',
        description: 'Live integration with manufacturing for fast order fulfillment, custom requests, and precise delivery estimates.',
        icon: '🔗'
      }
    ],
    tags: ['Diamond Traders', 'Jewelry Distributors', 'Sales Teams'],
    detailedFunctionalitiesTitle: 'How Effission For Wholesale Benefits Your Business',
    detailedFunctionalities: [
      {
        category: '',
        items: [
          { title: 'Pricing Rules', icon: '🪄' },
          { title: 'Multi location Management', icon: '📍' },
          { title: 'Style Master', icon: '💎' },
          { title: 'Order Management', icon: '📋' },
          { title: 'Procurement', icon: '💠' },
          { title: 'Inventory Management', icon: '📦' },
          { title: 'Barcoding / RFID Management', icon: '📇' },
          { title: 'Jewellery Production (Subcontracting / Jobwork)', icon: '💼' },
          { title: 'Financial Accounting / Controls', icon: '💰' },
          { title: 'Customer Checks & Balances', icon: '✅' },
          { title: 'Repair Management', icon: '⚙️' },
          { title: 'Sales', icon: '🚚' },
          { title: 'Metal Accounting', icon: '⚖️' }
        ]
      }
    ]
  },
  manufacturers: {
    title: 'Manufacturers',
    subtitle: 'Orchestrate complex production with cost and WIP under control.',
    description: 'Take command of your jewelry manufacturing floor. Effission provides end-to-end visibility from CAD to casting, setting, and final polish.',
    image: '/images/Manufacturers.png',
    features: [
      {
        title: 'Multi-Stage Workflows',
        description: 'Manage complex BOMs, route cards, and job work tracking across internal departments and external contractors.',
        icon: '🏭'
      },
      {
        title: 'Precise Accounting',
        description: 'Account for every cent and milligram. Track metal loss, stone breakage, and sieve sizes with granular accuracy.',
        icon: '⚖️'
      },
      {
        title: 'Costing & Scheduling',
        description: 'Integrate real-time material costs and labor to ensure profitability, while optimizing delivery schedules.',
        icon: '📅'
      }
    ],
    tags: ['Manufacturers', 'Job Workers', 'Contractors'],
    detailedFunctionalitiesTitle: 'How Effission Helps Execute Jewelry Manufacturing',
    detailedFunctionalities: [
      {
        category: '',
        items: [
          { title: 'Product Development', icon: '🪄' },
          { title: 'Style Master', icon: '💎' },
          { title: 'Estimate Generation', icon: '☑️' },
          { title: 'Order Management', icon: '📋' },
          { title: 'Procurement', icon: '💠' },
          { title: 'Vendor Management', icon: '🏪' },
          { title: 'Inventory Management', icon: '📦' },
          { title: 'Stone Inventory Management', icon: '💎' },
          { title: 'Stock Valuation', icon: '📊' },
          { title: 'Sequential Manufacturing Process', icon: '🔄' },
          { title: 'Sub Contracting Job Work', icon: '💼' },
          { title: 'Post Manufacturing Cost Calculation', icon: '🧮' },
          { title: 'Barcode Generation & Invoicing', icon: '📇' },
          { title: 'MRP Generation', icon: '💰' },
          { title: 'Stock Reservation', icon: '🔒' },
          { title: 'Sales & Distribution', icon: '🚚' },
          { title: 'Loss Management', icon: '📉' },
          { title: 'Dust Collection & Refining', icon: '🧺' },
          { title: 'Repair Management', icon: '⚙️' },
          { title: 'Financial Accounting', icon: '💵' },
        ]
      }
    ]
  },
  digital: {
    title: 'Digital-First Brands',
    subtitle: 'Launch immersive digital experiences with operational discipline behind them.',
    description: 'Bridge the gap between your online presence and back-office operations. Effission powers modern jewelry brands with seamless omni-channel infrastructure.',
    image: '/images/digital-band-1.png',
    features: [
      {
        title: 'E-Commerce Integration',
        description: 'Connect Shopify, Magento, or custom stores directly to your ERP and POS for unified inventory and order management.',
        icon: '🛒'
      },
      {
        title: '3D & Virtual Try-On',
        description: 'Elevate the buying experience with interactive 3D configurators and augmented reality virtual try-on journeys.',
        icon: '👓'
      },
      {
        title: 'AI-Rendered Assets',
        description: 'Generate photorealistic imagery for web, marketplaces, and social campaigns directly from CAD files using AI.',
        icon: '✨'
      }
    ],
    tags: ['D2C Brands', 'Online Brands', 'Marketplaces']
  }
};

export default async function SolutionPage({ params }) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;
  const data = solutionsData[slug];

  if (!data) {
    return (
      <>
        <Header />
        <main style={{ padding: '200px 0', textAlign: 'center', minHeight: '80vh' }}>
          <h1>Solution not found</h1>
          <Link href="/" style={{ color: 'var(--accent-gold)', marginTop: '20px', display: 'inline-block' }}>
            Return Home
          </Link>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main style={{ minHeight: '100vh', backgroundColor: '#050505' }}>
        {/* Hero Section */}
        <section style={{ 
          position: 'relative', 
          paddingTop: '180px', 
          paddingBottom: '100px',
          overflow: 'hidden'
        }}>
          {/* Background Image with Overlay */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `url(${data.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.3,
            zIndex: 0,
            maskImage: 'linear-gradient(to bottom, black 40%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, black 40%, transparent 100%)',
          }}></div>
          
          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ maxWidth: '800px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                <div style={{ height: '1px', width: '40px', background: 'linear-gradient(90deg, transparent, var(--accent-gold))' }}></div>
                <span style={{ color: 'var(--accent-gold)', fontSize: '12px', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase' }}>
                  WHO WE SERVE
                </span>
              </div>
              <h1 style={{ fontSize: 'clamp(48px, 6vw, 72px)', fontFamily: 'Georgia, serif', fontWeight: 400, marginBottom: '24px', lineHeight: 1.1 }}>
                {data.title}
              </h1>
              <p style={{ fontSize: 'clamp(18px, 2vw, 24px)', color: 'var(--accent-gold)', marginBottom: '32px', lineHeight: 1.4 }}>
                {data.subtitle}
              </p>
              <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.8)', lineHeight: 1.6, marginBottom: '40px' }}>
                {data.description}
              </p>
              <Link href="/contact" style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '16px 32px',
                backgroundColor: 'var(--accent-gold)',
                color: '#000',
                fontWeight: 600,
                borderRadius: '30px',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
              }} className="hover-lift">
                Book a Demo
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="section" style={{ padding: '80px 0', backgroundColor: '#0a0a0a', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="container">
            <h2 style={{ fontSize: '36px', fontFamily: 'Georgia, serif', textAlign: 'center', marginBottom: '60px' }}>
              Key Capabilities
            </h2>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
              gap: '30px' 
            }}>
              {data.features.map((feature, idx) => (
                <div key={idx} style={{
                  background: '#111',
                  padding: '40px',
                  borderRadius: '24px',
                  border: '1px solid rgba(255, 180, 50, 0.1)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                }} className="feature-card">
                  <div style={{ fontSize: '48px', marginBottom: '24px' }}>{feature.icon}</div>
                  <h3 style={{ fontSize: '24px', marginBottom: '16px' }}>{feature.title}</h3>
                  <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.6 }}>{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Detailed Functionalities Section */}
        {data.detailedFunctionalities && (
          <section className="section" style={{ padding: '80px 0', backgroundColor: '#050505', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
            <div className="container">
              <h2 style={{ fontSize: '36px', fontFamily: 'Georgia, serif', textAlign: 'center', marginBottom: '60px' }}>
                {data.detailedFunctionalitiesTitle || 'How Effission Benefits Your Business'}
              </h2>
              
              {data.detailedFunctionalities.map((funcGroup, idx) => (
                <div key={idx} style={{ marginBottom: '60px' }}>
                  {funcGroup.category && (
                    <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '24px', letterSpacing: '0.05em', color: 'rgba(255,255,255,0.9)' }}>
                      {funcGroup.category}
                    </h3>
                  )}
                  <div style={{ 
                    display: 'grid', 
                    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', 
                    gap: '20px' 
                  }}>
                    {funcGroup.items.map((item, itemIdx) => (
                      <div key={itemIdx} style={{
                        background: '#0a0a0a',
                        padding: '20px',
                        borderRadius: '16px',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '16px',
                        transition: 'all 0.3s ease',
                      }} className="detailed-feature-card">
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
                        }}>{item.icon}</div>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                          <h4 style={{ fontSize: '14px', fontWeight: 500, margin: '0 0 4px 0', color: 'rgba(255,255,255,0.9)' }}>{item.title}</h4>
                          <span style={{ fontSize: '12px', color: 'var(--accent-gold)', cursor: 'pointer' }}>Read More</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Typical Users & CTA */}
        <section className="section" style={{ padding: '80px 0', textAlign: 'center' }}>
          <div className="container">
            <div style={{ 
              background: 'linear-gradient(145deg, #1a1a1a 0%, #050505 100%)',
              padding: '60px',
              borderRadius: '32px',
              border: '1px solid rgba(255, 180, 50, 0.2)',
              maxWidth: '900px',
              margin: '0 auto'
            }}>
              <h3 style={{ fontSize: '28px', marginBottom: '24px' }}>Typical Users Include</h3>
              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '40px' }}>
                {data.tags.map((tag, idx) => (
                  <span key={idx} style={{
                    fontSize: '16px',
                    padding: '10px 24px',
                    borderRadius: '30px',
                    border: '1px solid rgba(255,255,255,0.2)',
                    color: 'var(--accent-gold)',
                    background: 'rgba(255,255,255,0.05)'
                  }}>
                    {tag}
                  </span>
                ))}
              </div>
              <h2 style={{ fontSize: '32px', fontFamily: 'Georgia, serif', marginBottom: '20px' }}>
                Ready to transform your operations?
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '30px' }}>
                Join the leading {data.title.toLowerCase()} who trust Effission.
              </p>
              <Link href="/contact" style={{
                display: 'inline-flex',
                padding: '14px 28px',
                border: '1px solid var(--accent-gold)',
                color: 'var(--accent-gold)',
                borderRadius: '30px',
                textDecoration: 'none',
                fontWeight: 500,
                transition: 'all 0.3s ease'
              }} className="hover-glow">
                Contact Sales
              </Link>
            </div>
          </div>
        </section>

      </main>

      <style dangerouslySetInnerHTML={{__html: `
        .feature-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(255, 180, 50, 0.05);
          border-color: rgba(255, 180, 50, 0.3) !important;
        }
        .hover-lift:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 15px rgba(255, 180, 50, 0.4);
        }
        .hover-glow:hover {
          background-color: rgba(255, 180, 50, 0.1);
          box-shadow: 0 0 20px rgba(255, 180, 50, 0.2);
        }
        .detailed-feature-card:hover {
          transform: translateY(-3px);
          border-color: rgba(255, 180, 50, 0.4) !important;
          background: rgba(255, 180, 50, 0.02) !important;
          box-shadow: 0 5px 20px rgba(255, 180, 50, 0.05);
        }
      `}} />
      <Footer />
    </>
  );
}
