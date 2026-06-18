import Header from './components/Header';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import WhoWeServe from './components/WhoWeServe';
import PlatformModules from './components/PlatformModules';
import Ecosystem from './components/Ecosystem';
import WhyEffission from './components/WhyEffission';
import AiStudio from './components/AiStudio';
import Footprint from './components/Footprint';
import Process from './components/Process';
import TrustSection from './components/TrustSection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <WhyEffission />  
      <Ecosystem />
      <WhoWeServe />
      <AiStudio />
      <AboutUs />
      <PlatformModules />
      <Footprint />
      {/* <Process /> */}
      {/* <TrustSection /> */}
      {/* <Contact /> */}
      <Footer />
      <BackToTop />
    </>
  );
}
