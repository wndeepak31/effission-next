'use client';

import { motion } from 'framer-motion';
import { 
  ArrowRight, Box, BarChart3, Diamond, Settings, Users, 
  MonitorPlay, Sparkles, Globe, ShoppingBag, Terminal, 
  CheckCircle2, XCircle, ChevronDown
} from 'lucide-react';
import Image from 'next/image';

const FadeIn = ({ children, delay = 0, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-[#070B10]/90 backdrop-blur-md">
    <div className="max-w-[1440px] mx-auto px-6 lg:px-[100px] h-[90px] flex items-center justify-between">
      <div className="flex flex-col justify-center">
        <span className="font-serif text-3xl tracking-widest text-white leading-none">EFFISSION</span>
        <span className="text-[10px] text-[#9AA4B2] tracking-wider mt-1.5">The Jewelry Intelligence Platform</span>
      </div>
      <div className="hidden lg:flex items-center gap-10 text-[14px] text-white">
        <a href="#" className="hover:text-white transition-colors">Solutions</a>
        <a href="#" className="hover:text-white transition-colors flex items-center gap-1">Platform <ChevronDown size={14}/></a>
        <a href="#" className="hover:text-white transition-colors">AI Studio</a>
        <a href="#" className="hover:text-white transition-colors">Customers</a>
        <a href="#" className="hover:text-white transition-colors">Resources</a>
        <a href="#" className="hover:text-white transition-colors">About Us</a>
      </div>
      <button className="bg-[#D6B36A] text-[#070B10] px-6 py-2.5 rounded text-[14px] font-medium hover:bg-white transition-colors">
        Book a Demo
      </button>
    </div>
  </nav>
);

export default function Home() {
  return (
    <main className="min-h-screen bg-[#070B10] text-[#F8FAFC] overflow-x-hidden selection:bg-[#D6B36A] selection:text-black">
      <Navbar />
      
      {/* 1. HERO SECTION */}
      <section className="relative w-full max-w-[1440px] mx-auto pt-[160px] pb-[40px] px-6 lg:px-[100px] flex flex-col lg:flex-row items-center justify-between z-10 min-h-screen">
        <div className="absolute top-0 right-0 -z-10 w-[800px] h-[800px] bg-[#D6B36A]/5 blur-[150px] rounded-full pointer-events-none"></div>
        <div className="absolute top-1/2 left-0 -z-10 w-[600px] h-[600px] bg-[#4A9EFF]/5 blur-[150px] rounded-full pointer-events-none"></div>
        
        {/* Left Column */}
        <div className="w-full lg:w-[45%] space-y-6 z-10">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }}>
            <h1 className="font-serif text-[56px] md:text-[72px] leading-[1.1] mb-6">
              <span className="text-white">The Operating System</span><br/>
              <span className="text-[#E5B869]">for Modern Jewelry</span><br/>
              <span className="text-[#E5B869]">Commerce</span>
            </h1>
            <p className="font-sans text-[16px] md:text-[18px] leading-relaxed text-[#9AA4B2] mb-10 max-w-[460px]">
              An unified ecosystem to start, sell and scale your jewelry business with intelligence, automation and AI.
            </p>
            <div className="flex flex-wrap gap-5 mb-16">
              <button className="bg-[#E5B869] text-[#070B10] px-8 py-3.5 rounded-sm text-[15px] font-bold hover:bg-white transition-colors">
                Book a Demo
              </button>
              <button className="bg-transparent border border-[#E5B869]/50 text-white px-8 py-3.5 rounded-sm text-[15px] font-medium hover:border-[#E5B869] transition-colors flex items-center gap-3">
                Explore Ecosystem 
                <span className="w-6 h-6 border border-white/30 rounded-sm flex items-center justify-center">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="white"><path d="M5 3l14 9-14 9V3z"/></svg>
                </span>
              </button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-4 gap-8">
              <div>
                <h4 className="text-[#E5B869] font-bold text-2xl">20+</h4>
                <p className="text-white text-[11px] font-medium mt-1">Countries</p>
              </div>
              <div>
                <h4 className="text-[#E5B869] font-bold text-2xl">3000+</h4>
                <p className="text-white text-[11px] font-medium mt-1">Businesses</p>
              </div>
              <div>
                <h4 className="text-[#E5B869] font-bold text-2xl">30+</h4>
                <p className="text-white text-[11px] font-medium mt-1">Years of Expertise</p>
              </div>
              <div>
                <h4 className="text-[#E5B869] font-bold text-2xl">99.9%</h4>
                <p className="text-white text-[11px] font-medium mt-1">Uptime</p>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Right Column: Hero Visual */}
        <div className="w-full lg:w-[55%] h-[600px] mt-16 lg:mt-0 relative flex items-center justify-center">
          
          {/* 3D Glowing Pedestal Base */}
          <div className="absolute top-[60%] w-[500px] h-[150px] rounded-[100%] border border-[#E5B869]/20 bg-[#E5B869]/5 shadow-[0_0_100px_rgba(229,184,105,0.15)] flex items-center justify-center">
            {/* Inner rings */}
            <div className="w-[350px] h-[100px] rounded-[100%] border border-[#E5B869]/40 bg-gradient-to-b from-[#E5B869]/10 to-transparent shadow-[inset_0_0_50px_rgba(229,184,105,0.2)] flex items-center justify-center">
              <div className="w-[200px] h-[60px] rounded-[100%] border-2 border-[#E5B869]/60 bg-[#E5B869]/20 shadow-[0_0_50px_rgba(229,184,105,0.6)]"></div>
            </div>
          </div>
          
          {/* Vertical Light Beam */}
          <div className="absolute top-[20%] w-[2px] h-[40%] bg-gradient-to-b from-transparent via-[#4A9EFF] to-transparent shadow-[0_0_20px_rgba(74,158,255,1)] opacity-50 z-10"></div>
          
          {/* Floating Ring Asset */}
          <div className="absolute top-[10%] w-[450px] h-[450px] flex items-center justify-center pointer-events-none z-20 hover:scale-105 transition-transform duration-700 drop-shadow-[0_20px_50px_rgba(229,184,105,0.3)]">
             <img 
                 src="/images/ring-ai.png" 
                 alt="Effission Ecosystem Core" 
                 className="w-full h-full object-contain"
               />
          </div>

          {/* SVG Tech Connections */}
          <div className="absolute inset-0 w-full h-full flex items-center justify-center pointer-events-none z-10">
            <svg width="100%" height="100%" viewBox="0 0 800 600" fill="none">
              <path d="M 400 350 L 150 180" stroke="url(#goldGrad)" strokeWidth="1.5" strokeDasharray="4 4" />
              <path d="M 400 350 L 650 200" stroke="url(#goldGrad)" strokeWidth="1.5" strokeDasharray="4 4" />
              <path d="M 400 350 L 150 420" stroke="url(#goldGrad)" strokeWidth="1.5" strokeDasharray="4 4" />
              <path d="M 400 350 L 650 450" stroke="url(#goldGrad)" strokeWidth="1.5" strokeDasharray="4 4" />
              <defs>
                <linearGradient id="goldGrad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#E5B869" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#E5B869" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Detailed Floating Cards */}
          <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity }} className="absolute top-[15%] left-[5%] w-[160px] bg-[#0A0F16]/90 backdrop-blur-xl border border-[#E5B869]/40 rounded-xl p-4 z-30 shadow-[0_10px_40px_rgba(229,184,105,0.15)]">
            <div className="flex justify-between items-center mb-3">
               <h4 className="text-white text-xs font-bold tracking-widest">ERP</h4>
               <div className="w-2 h-2 rounded-full bg-[#E5B869] shadow-[0_0_10px_rgba(229,184,105,1)]"></div>
            </div>
            <div className="h-[1px] w-full bg-gradient-to-r from-[#E5B869]/50 to-transparent mb-3"></div>
            <div className="flex justify-between items-center">
              <div className="w-8 h-8 rounded bg-[#E5B869]/10 border border-[#E5B869]/30 flex items-center justify-center"><Settings size={14} className="text-[#E5B869]"/></div>
              <div className="w-8 h-8 rounded bg-[#E5B869]/10 border border-[#E5B869]/30 flex items-center justify-center"><Box size={14} className="text-[#E5B869]"/></div>
            </div>
          </motion.div>
          
          <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 5, repeat: Infinity }} className="absolute top-[10%] right-[5%] w-[160px] bg-[#0A0F16]/90 backdrop-blur-xl border border-[#E5B869]/40 rounded-xl p-4 z-30 shadow-[0_10px_40px_rgba(229,184,105,0.15)]">
            <div className="flex justify-between items-center mb-3">
               <h4 className="text-white text-xs font-bold tracking-widest">POS</h4>
               <div className="w-2 h-2 rounded-full bg-[#4A9EFF] shadow-[0_0_10px_rgba(74,158,255,1)]"></div>
            </div>
            <div className="h-[1px] w-full bg-gradient-to-r from-[#E5B869]/50 to-transparent mb-3"></div>
            <div className="grid grid-cols-3 gap-2">
               {[...Array(6)].map((_, i) => <div key={i} className="aspect-square rounded border border-[#E5B869]/30 bg-[#E5B869]/10 flex items-center justify-center"><div className="w-1.5 h-1.5 bg-[#E5B869] rounded-full shadow-[0_0_5px_#E5B869]"></div></div>)}
            </div>
          </motion.div>

          <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 6, repeat: Infinity }} className="absolute bottom-[20%] left-[0%] w-[160px] bg-[#0A0F16]/90 backdrop-blur-xl border border-[#E5B869]/40 rounded-xl p-4 z-30 shadow-[0_10px_40px_rgba(229,184,105,0.15)]">
            <div className="flex justify-between items-center mb-3">
               <h4 className="text-white text-xs font-bold tracking-widest">CRM</h4>
               <div className="w-2 h-2 rounded-full bg-[#E5B869] shadow-[0_0_10px_rgba(229,184,105,1)]"></div>
            </div>
            <div className="h-[1px] w-full bg-gradient-to-r from-[#E5B869]/50 to-transparent mb-3"></div>
            <div className="flex justify-center items-center">
              <div className="w-12 h-12 rounded-full bg-[#E5B869]/10 border border-[#E5B869]/40 flex items-center justify-center shadow-[inset_0_0_15px_rgba(229,184,105,0.2)]"><Users size={18} className="text-[#E5B869]"/></div>
            </div>
          </motion.div>

          <motion.div animate={{ y: [0, 15, 0] }} transition={{ duration: 4.5, repeat: Infinity }} className="absolute bottom-[10%] right-[0%] w-[160px] bg-[#0A0F16]/90 backdrop-blur-xl border border-[#E5B869]/40 rounded-xl p-4 z-30 shadow-[0_10px_40px_rgba(229,184,105,0.15)]">
            <div className="flex justify-between items-center mb-3">
               <h4 className="text-white text-xs font-bold tracking-widest">AUTOMATION</h4>
               <div className="w-2 h-2 rounded-full bg-[#E5B869] shadow-[0_0_10px_rgba(229,184,105,1)]"></div>
            </div>
            <div className="h-[1px] w-full bg-gradient-to-r from-[#E5B869]/50 to-transparent mb-3"></div>
            <div className="flex justify-between items-center">
              <div className="w-8 h-8 rounded bg-[#E5B869]/10 border border-[#E5B869]/30 flex items-center justify-center"><Terminal size={14} className="text-[#E5B869]"/></div>
              <div className="w-8 h-8 rounded bg-[#E5B869]/10 border border-[#E5B869]/30 flex items-center justify-center"><Sparkles size={14} className="text-[#E5B869]"/></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. TRUST BAR */}
      <section className="border-y border-white/5 bg-[#0F1722]/50 py-[40px]">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <p className="text-[#9AA4B2] text-[11px] uppercase tracking-[0.2em] mb-8 font-medium">Trusted by Global Jewelry Leaders</p>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-50 grayscale">
            <span className="font-serif text-2xl tracking-wider">jtv</span>
            <span className="font-serif text-2xl tracking-wider">Clean Origin</span>
            <span className="font-serif text-xl tracking-wider flex items-center gap-2"><div className="w-6 h-6 border rounded-full"></div> MALABAR</span>
            <span className="font-serif text-2xl tracking-wider">tbz</span>
            <span className="font-serif text-2xl tracking-wider">PCJ</span>
            <span className="font-serif text-2xl tracking-wider">Disney</span>
            <span className="font-serif text-xl tracking-wider">BAPALAL</span>
          </div>
        </div>
      </section>

      {/* 3. WHO WE SERVE */}
      <section className="py-[40px] max-w-[1200px] mx-auto px-6">
        <FadeIn className="text-center mb-16">
          <p className="text-[#D6B36A] text-[12px] uppercase tracking-[0.2em] mb-4">Who We Serve</p>
          <h2 className="heading-2">Tailored Solutions for Every Jewelry Business</h2>
        </FadeIn>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "Retailers", icon: <ShoppingBag size={20}/>, desc: "Delight customers, increase loyalty and grow every day with omnichannel retail solutions.", img: "https://image.made-in-china.com/43f34j00zOnbNUucMmoH/Store-Display-Showcase-and-Counter-Jewellery-Shop-Interior-Design-with-Lights-Jewelry.webp" },
            { title: "Wholesalers", icon: <Globe size={20}/>, desc: "Sell more without carrying inventory with digital catalogs, live stock and intelligent pricing.", img: "https://img.magnific.com/premium-photo/sales-man-jewelry-shop-demonstrating-jewellery_1303-30669.jpg" },
            { title: "Manufacturers", icon: <Settings size={20}/>, desc: "Streamline production, manage inventory and improve efficiency with powerful ERP.", img: "https://www.niir.org/blog/wp-content/uploads/2020/07/Gemini_Generated_Image_f1rqbsf1rqbsf1rq-1.webp" }
          ].map((item, i) => (
            <FadeIn delay={i * 0.15} key={i}>
              <div className="relative rounded-xl overflow-hidden h-[400px] group border border-white/10 hover:border-[#D6B36A]/50 transition-colors bg-[#070B10]">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover absolute inset-0 z-0 opacity-50 group-hover:opacity-70 transition-opacity" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070B10] via-[#070B10]/80 to-[#070B10]/10 z-10"></div>
                <div className="absolute inset-0 p-8 flex flex-col justify-end z-20">
                  <div className="flex items-center gap-3 text-[#D6B36A] mb-4">
                    {item.icon} <h3 className="font-serif text-2xl">{item.title}</h3>
                  </div>
                  <p className="small-text mb-6">{item.desc}</p>
                  <a href="#" className="text-[#D6B36A] text-sm flex items-center gap-2 hover:gap-3 transition-all font-medium">
                    Explore {item.title} Solutions <ArrowRight size={16}/>
                  </a>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* 4. OLD WAY VS NEW WAY */}
      <section className="py-[40px] max-w-[1200px] mx-auto px-6">
        <FadeIn className="text-center mb-16">
          <p className="text-[#D6B36A] text-[12px] uppercase tracking-[0.2em] mb-4">From Challenges to Transformation</p>
          <h2 className="heading-2">The Old Way vs. The Effission Way</h2>
        </FadeIn>

        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Old Way */}
          <FadeIn className="flex-1 w-full glass-card-dark border-red-900/30 bg-red-900/5 p-10">
            <h3 className="font-serif text-2xl mb-8 text-[#9AA4B2]">The Old Way</h3>
            <ul className="space-y-5">
              {[
                "Dead stock and high inventory cost",
                "Disconnected systems and manual work",
                "Slow product launches",
                "Limited online presence",
                "Poor visibility & lack of real-time data"
              ].map((text, i) => (
                <li key={i} className="flex items-start gap-4 small-text text-[#9AA4B2]">
                  <XCircle size={20} className="text-red-500/70 shrink-0 mt-0.5" /> <span>{text}</span>
                </li>
              ))}
            </ul>
          </FadeIn>

          {/* Center Graphic */}
          <div className="hidden lg:flex shrink-0 w-[120px] justify-center items-center">
            <div className="w-[80px] h-[80px] rounded-full bg-[#0F1722] border border-[#D6B36A]/30 flex items-center justify-center relative">
               <ArrowRight size={30} className="text-[#D6B36A] absolute left-[100%] ml-4" />
               <Diamond size={30} className="text-white/50" />
            </div>
          </div>

          {/* New Way */}
          <FadeIn delay={0.2} className="flex-1 w-full glass-card p-10 border-[#D6B36A]/30 luxury-glow">
            <h3 className="font-serif text-2xl mb-8 text-[#D6B36A]">The Effission Way</h3>
            <ul className="space-y-5">
              {[
                "Inventory-less selling with AI",
                "Unified platform, real-time intelligence",
                "Faster prototyping to market",
                "Omnichannel selling made simple",
                "Actionable insights for smarter decisions"
              ].map((text, i) => (
                <li key={i} className="flex items-start gap-4 small-text text-white">
                  <CheckCircle2 size={20} className="text-[#D6B36A] shrink-0 mt-0.5" /> <span>{text}</span>
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </section>

      {/* 5. THE EFFISSION ECOSYSTEM */}
      <section className="py-[40px] max-w-[1200px] mx-auto px-6 border-y border-white/5 relative overflow-hidden">
        <FadeIn className="text-center mb-24 relative z-10">
          <p className="text-[#D6B36A] text-[12px] uppercase tracking-[0.2em] mb-4">The Effission Ecosystem</p>
          <h2 className="heading-2 mb-4">All Connected. All Intelligent.</h2>
          <p className="small-text">One unified platform to manage, automate and grow every aspect of your jewelry business.</p>
        </FadeIn>

        <div className="relative w-full h-[600px] flex items-center justify-center">
          {/* Central Pedestal & Ring */}
          <div className="absolute w-[400px] h-[400px] ring-pedestal flex items-center justify-center z-10">
             <div className="relative w-[140px] h-[140px] rounded-full bg-[#070B10]/80 backdrop-blur-md border border-[#D6B36A]/50 flex items-center justify-center luxury-glow overflow-visible shadow-[0_0_30px_rgba(214,179,106,0.4)]">
                <img 
                 src="/images/ring-ai.png" 
                 alt="Ecosystem Core" 
                 className="absolute inset-0 w-full h-full object-contain p-2 hover:scale-110 transition-transform duration-500 drop-shadow-[0_10px_20px_rgba(214,179,106,0.3)]"
               />
             </div>
          </div>

          {/* Connecting Lines SVG */}
          <svg className="absolute inset-0 w-full h-full z-0" pointerEvents="none">
             <g stroke="rgba(214,179,106,0.2)" strokeWidth="1.5" fill="none" className="path-line">
                <path d="M 600,300 L 250,150" />
                <path d="M 600,300 L 250,300" />
                <path d="M 600,300 L 250,450" />
                <path d="M 600,300 L 950,150" />
                <path d="M 600,300 L 950,300" />
                <path d="M 600,300 L 950,450" />
                <path d="M 600,300 L 600,500" />
             </g>
          </svg>

          {/* Nodes */}
          <div className="absolute w-full max-w-[900px] h-full z-20">
             <div className="absolute top-[10%] left-0 glass-card p-4 flex gap-4 items-center w-[250px]">
               <Users className="text-[#D6B36A]" size={24}/>
               <div><h4 className="font-medium text-sm">CRM</h4><p className="text-[10px] text-muted">Customer Relationship</p></div>
             </div>
             
             <div className="absolute top-[40%] left-[-50px] glass-card p-4 flex gap-4 items-center w-[250px]">
               <MonitorPlay className="text-[#D6B36A]" size={24}/>
               <div><h4 className="font-medium text-sm">POS</h4><p className="text-[10px] text-muted">Retail & Exhibition</p></div>
             </div>

             <div className="absolute bottom-[20%] left-[20px] glass-card p-4 flex gap-4 items-center w-[250px]">
               <Box className="text-[#D6B36A]" size={24}/>
               <div><h4 className="font-medium text-sm">B2B eCatalog</h4><p className="text-[10px] text-muted">Inventory-less Selling</p></div>
             </div>

             <div className="absolute top-[10%] right-0 glass-card p-4 flex gap-4 items-center w-[250px]">
               <ShoppingBag className="text-[#D6B36A]" size={24}/>
               <div><h4 className="font-medium text-sm">eCommerce</h4><p className="text-[10px] text-muted">B2B/B2C Shopify</p></div>
             </div>

             <div className="absolute top-[40%] right-[-50px] glass-card p-4 flex gap-4 items-center w-[250px]">
               <Sparkles className="text-[#D6B36A]" size={24}/>
               <div><h4 className="font-medium text-sm">AI Studio</h4><p className="text-[10px] text-muted">Rendering, 360°, Video</p></div>
             </div>

             <div className="absolute bottom-[20%] right-[20px] glass-card p-4 flex gap-4 items-center w-[250px]">
               <Terminal className="text-[#D6B36A]" size={24}/>
               <div><h4 className="font-medium text-sm">Automation</h4><p className="text-[10px] text-muted">WhatsApp, AI Agents</p></div>
             </div>

             <div className="absolute bottom-0 left-[50%] -translate-x-[50%] glass-card p-4 flex gap-4 items-center w-[250px]">
               <Settings className="text-[#D6B36A]" size={24}/>
               <div><h4 className="font-medium text-sm">ERP</h4><p className="text-[10px] text-muted">Production & Accounting</p></div>
             </div>
          </div>
        </div>
      </section>

      {/* 6. AI STUDIO & RENDERING */}
      <section className="py-[40px] max-w-[1200px] mx-auto px-6">
        <FadeIn className="text-center mb-16">
          <p className="text-[#D6B36A] text-[12px] uppercase tracking-[0.2em] mb-4">AI Studio & Rendering</p>
          <h2 className="heading-2">From Imagination to Stunning Visuals</h2>
        </FadeIn>
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-2 lg:gap-4 overflow-x-auto pb-8">
           {[
             { title: "Sketch / Image", desc: "Upload sketch or image", bg: "glass-card", text: "text-white", icon: <Box/>, img: "https://images.unsplash.com/photo-1599643478524-fb66f7248316?q=80&w=200&auto=format&fit=crop" },
             { title: "AI Processing", desc: "Extracts details", bg: "glass-card", text: "text-white", icon: <Settings/>, img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=200&auto=format&fit=crop" },
             { title: "3D Recreation", desc: "Realistic 3D model", bg: "glass-card", text: "text-white", icon: <Diamond/>, img: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=200&auto=format&fit=crop" },
             { title: "Rendering", desc: "Photorealistic render", bg: "glass-card", text: "text-white", icon: <Sparkles/>, img: "https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?q=80&w=200&auto=format&fit=crop" },
             { title: "On-Model / 360°", desc: "Lifestyle, on-model", bg: "glass-card", text: "text-white", icon: <Users/>, img: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=200&auto=format&fit=crop" }
           ].map((step, i) => (
             <div key={i} className="flex items-center gap-4 shrink-0">
               <div className="text-center w-[160px] group">
                 <div className={`w-[160px] h-[160px] rounded-xl mb-6 flex items-center justify-center relative overflow-hidden transition-transform group-hover:scale-105 border border-[#D6B36A]/20 ${step.bg}`}>
                   {step.img && (
                     <>
                       <img src={step.img} className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-80 transition-opacity mix-blend-luminosity" alt={step.title} />
                       <div className="absolute inset-0 bg-gradient-to-t from-[#070B10]/90 to-transparent pointer-events-none"></div>
                     </>
                   )}
                   <div className={`${step.text} relative z-10 drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]`}>{step.icon}</div>
                 </div>
                 <h4 className="font-serif text-lg text-[#D6B36A] mb-1">{step.title}</h4>
                 <p className="text-[11px] text-[#9AA4B2] px-2">{step.desc}</p>
               </div>
               {i < 4 && <ArrowRight className="text-[#D6B36A]/50 hidden md:block" size={24} />}
             </div>
           ))}
        </div>
        <div className="text-center mt-8">
           <button className="glass-card text-[#D6B36A] px-6 py-2.5 rounded text-[14px] font-medium hover:border-[#D6B36A] transition-colors">
             Explore AI Studio
           </button>
        </div>
      </section>

      {/* 7. POWERFUL SOLUTIONS */}
      <section className="py-[40px] max-w-[1200px] mx-auto px-6 border-t border-white/5">
        <FadeIn className="text-center mb-16">
          <p className="text-[#D6B36A] text-[12px] uppercase tracking-[0.2em] mb-4">The Effission Platform</p>
          <h2 className="heading-2">Powerful Solutions. Measurable Results.</h2>
        </FadeIn>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
          {[
            { title: "ERP", desc: "Complete control of inventory, production and finance.", icon: <Settings/> },
            { title: "CRM", desc: "Build relationships that drive repeat business.", icon: <Users/> },
            { title: "POS", desc: "Fast, accurate and seamless billing experience.", icon: <MonitorPlay/> },
            { title: "B2B eCatalog", desc: "Sell digitally, share instantly, close faster.", icon: <Box/> },
            { title: "Automation", desc: "Reduce manual work with intelligent automation.", icon: <Terminal/> },
            { title: "BI & Analytics", desc: "Real-time dashboards for smarter growth decisions.", icon: <BarChart3/> }
          ].map((item, i) => (
            <FadeIn delay={i * 0.1} key={i} className="lg:col-span-1 md:col-span-1">
              <div className="glass-card p-6 h-full text-center hover:border-[#D6B36A]/50 transition-colors group">
                <div className="w-12 h-12 mx-auto border border-[#D6B36A]/30 rounded flex items-center justify-center text-[#D6B36A] mb-6 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h4 className="font-serif text-xl mb-3 text-white">{item.title}</h4>
                <p className="text-[12px] text-[#9AA4B2] leading-relaxed">{item.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* 8. GLOBAL PRESENCE */}
      <section className="py-[40px] border-t border-white/5 relative overflow-hidden bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center">
        <div className="absolute inset-0 bg-[#070B10]/60"></div>
        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          <FadeIn className="text-center mb-16">
            <p className="text-[#D6B36A] text-[12px] uppercase tracking-[0.2em] mb-4">Global Presence</p>
            <h2 className="heading-2">Powering Jewelry Businesses Worldwide</h2>
          </FadeIn>
          
          <div className="flex flex-wrap justify-center gap-12 lg:gap-24 mt-[200px] lg:mt-[400px]">
             {/* Map Placeholder height pushes this down */}
             <div className="text-center">
                <h3 className="heading-2 text-white">20+</h3>
                <p className="small-text uppercase tracking-widest mt-2">Countries</p>
             </div>
             <div className="text-center">
                <h3 className="heading-2 text-white">3000+</h3>
                <p className="small-text uppercase tracking-widest mt-2">Businesses</p>
             </div>
             <div className="text-center">
                <h3 className="heading-2 text-white">Millions</h3>
                <p className="small-text uppercase tracking-widest mt-2">Of Transactions Daily</p>
             </div>
             <div className="text-center">
                <h3 className="heading-2 text-white">24/7</h3>
                <p className="small-text uppercase tracking-widest mt-2">Global Support</p>
             </div>
          </div>
        </div>
      </section>

      {/* 9. FINAL CTA */}
      <section className="relative py-[40px] overflow-hidden">
        <div className="absolute inset-0 -z-10">
           <img src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=2000&auto=format&fit=crop" className="w-full h-full object-cover opacity-20" alt="Jewelry background" />
           <div className="absolute inset-0 bg-gradient-to-t from-[#070B10] via-[#070B10]/80 to-transparent"></div>
        </div>
        
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <FadeIn>
            <h2 className="heading-2 mb-6">Ready to Architect the<br/>Future of Your Jewelry Business?</h2>
            <p className="body-text mb-10">Let's build your intelligent, connected and future-ready business with Effission.</p>
            <div className="flex justify-center gap-4">
              <button className="bg-[#D6B36A] text-[#070B10] px-8 py-3.5 rounded text-[15px] font-medium hover:bg-white transition-colors">
                Book a Demo
              </button>
              <button className="glass-card-dark text-white px-8 py-3.5 rounded text-[15px] font-medium hover:border-[#D6B36A]/50 transition-colors">
                Talk to an Expert
              </button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* FOOTER Placeholder */}
      <footer className="border-t border-white/5 py-8 text-center text-[#9AA4B2] text-sm">
         <div className="max-w-[1440px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <span className="font-serif tracking-widest text-white">EFFISSION</span>
            <div className="flex gap-6">
              <span>Solutions</span><span>Platform</span><span>AI Studio</span><span>Customers</span>
            </div>
            <span>© 2026 Effission. All rights reserved.</span>
         </div>
      </footer>
    </main>
  );
}
