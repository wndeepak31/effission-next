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
              <div className="stat-number">100 +</div>
              <div className="stat-text">Clients<br />Worldwide</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">500 +</div>
              <div className="stat-text">Projects<br />Delivered</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">15 +</div>
              <div className="stat-text">Countries<br />Served</div>
            </div>
          </div>

          <div className="stat-row">
            <div className="stat-item">
              <div className="stat-number">50 +</div>
              <div className="stat-text">Expert<br />Developers</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">99 %</div>
              <div className="stat-text">Client<br />Satisfaction</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">24 / 7</div>
              <div className="stat-text">Technical<br />Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
