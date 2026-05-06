import Image from 'next/image';
import SectionIndicator from './SectionIndicator';

export default function Hero() {
  return (
    <main className="hero">
      <Image
        src="/images/bg_hero.png"
        alt="Hero background"
        fill
        style={{ objectFit: 'cover', zIndex: 0 }}
        quality={100}
        priority
      />
      <div className="hero-content">
        <h1 className="hero-title">Together for<br />transformation</h1>
        <div className="hero-divider"></div>
        <a href="#" className="cta-btn">
          <span>Know more</span>
          <span className="cta-arrow">→</span>
        </a>
      </div>
      <SectionIndicator number="" label="" isFirst={true} />
    </main>
  );
}
