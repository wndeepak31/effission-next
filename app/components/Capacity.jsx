import Image from 'next/image';
import SectionIndicator from './SectionIndicator';

export default function Capacity() {
  return (
    <section className="section capacity">
      <Image 
        src="/images/bg_section3.png" 
        alt="Capacity background" 
        fill 
        style={{ objectFit: 'cover', zIndex: 0 }} 
        quality={100}
      />
      
      <SectionIndicator number="03" label="Our capacity" isFirst={false} />

      <div className="section-content capacity-content">
        <h2 className="capacity-title">The scale of what we do</h2>

        <div className="stats-container">
          <div className="stat-row">
            <div className="stat-item">
              <div className="stat-number">40 +</div>
              <div className="stat-text">years of delivering<br />solutions</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">12</div>
              <div className="stat-text">manufacturing<br />units</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">Pan-India</div>
              <div className="stat-text">manufacturing<br />footprints</div>
            </div>
          </div>

          <div className="stat-row">
            <div className="stat-item">
              <div className="stat-number">50,000 +</div>
              <div className="stat-text">MT monthly processing<br />capacity</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">9</div>
              <div className="stat-text">captive mines</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">Global</div>
              <div className="stat-text">exports</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
