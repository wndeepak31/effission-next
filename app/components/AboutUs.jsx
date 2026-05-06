import Image from 'next/image';
import SectionIndicator from './SectionIndicator';

export default function AboutUs() {
  return (
    <section className="section about-us">
      {/* Background Image managed via Next.js Optimization */}
      <Image 
        src="/images/bg_section2.png" 
        alt="About us background" 
        fill 
        style={{ objectFit: 'cover', zIndex: 0 }} 
        quality={100}
      />
      <SectionIndicator number="02" label="About us" />

      <div className="section-content about-content">
        <h2 className="about-title">This is how we move<br />faster. And help you<br />move forward.</h2>

        <div className="about-body">
          <p>We don't react to change. We arrive<br />before it does.</p>
          <br />
          <p>Four decades of understanding what<br />our partners need before they ask.</p>
        </div>

        <h3 className="about-footer">Anticipating. Adapting.<br />Acting with precision.</h3>
      </div>
    </section>
  );
}
