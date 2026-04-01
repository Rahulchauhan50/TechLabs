"use client";

import React from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';
import {
  Globe,
  Smartphone,
  BarChart3,
  Database,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
  Gamepad2,
  Zap,
} from 'lucide-react';

import { ClientLogosSlider } from '../ClientLogosSlider';

const GlowingBackgrounds = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
    <motion.div
      animate={{
        scale: [1, 1.2, 1],
        x: [0, 100, 0],
        y: [0, -50, 0],
      }}
      transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      className="glow-orb glow-orb-primary w-[300px] h-[300px] md:w-[600px] md:h-[600px] top-[-50px] right-[-50px] md:top-[-100px] md:right-[-100px]"
    />
    <motion.div
      animate={{
        scale: [1, 1.5, 1],
        x: [0, -100, 0],
        y: [0, 100, 0],
      }}
      transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      className="glow-orb glow-orb-secondary w-[250px] h-[250px] md:w-[500px] md:h-[500px] bottom-10 left-[-50px] md:bottom-20 md:left-[-100px]"
    />
  </div>
);

const Hero = () => (
  <section className="relative min-h-[100vh] lg:min-h-[900px] flex items-center pt-32 lg:pt-40 pb-16 lg:pb-24 overflow-hidden">
    <GlowingBackgrounds />
    <div className="absolute inset-0 diagnostic-grid z-0" />
    <div className="max-w-7xl mx-auto px-5 lg:px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 glass-card rounded-full mb-6 border border-secondary/30">
          <div className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-300 font-label text-center">Website, app and growth experts</span>
        </div>
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black font-headline tracking-tighter text-white leading-none mb-6">
          Design.<br />Develop.<br /><span className="text-transparent bg-clip-text bg-linear-to-r from-secondary to-primary drop-shadow-[0_0_15px_rgba(0,229,255,0.3)]">Grow.</span>
        </h1>
        <p className="text-lg sm:text-xl text-slate-300 max-w-xl mb-10 leading-relaxed font-body">
          Manav Tech Labs is a professional technology partner offering website design, web development, mobile app development, digital marketing, and ERP solutions locally and worldwide.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/contact" className="bg-white text-slate-950 px-8 py-4 rounded-xl font-headline font-bold text-lg hover:bg-slate-200 transition-all active:scale-95 text-center shadow-[0_0_20px_rgba(255,255,255,0.2)]">
            Request Consultation
          </Link>
          <Link href="/services" className="glass-panel text-white px-8 py-4 rounded-xl font-headline font-bold text-lg hover:bg-white/10 transition-all active:scale-95 text-center border border-white/20">
            Explore Services
          </Link>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="relative lg:h-[600px] w-full flex items-center justify-center mt-12 lg:mt-0"
      >
        <div className="relative w-full max-w-sm sm:max-w-lg aspect-square scale-90 sm:scale-100">
          {/* Animated concentric rings */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 flex items-center justify-center -z-10"
          >
            <div className="w-[85%] h-[85%] rounded-full border-2 border-white/5 border-dashed" />
            <div className="absolute w-[60%] h-[60%] rounded-full border border-secondary/20 border-dotted" />
            <div className="absolute w-[35%] h-[35%] rounded-full border border-primary/30" />
          </motion.div>
          
          {/* Central Glowing Orb */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div 
              animate={{ y: [-10, 10, -10], boxShadow: ["0px 0px 40px rgba(0,229,255,0.2)", "0px 0px 80px rgba(124,77,255,0.4)", "0px 0px 40px rgba(0,229,255,0.2)"] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="w-32 h-32 sm:w-40 sm:h-40 glass-panel rounded-full flex items-center justify-center z-20 border-2 border-primary/50 relative shadow-2xl"
            >
              <div className="absolute inset-0 bg-linear-to-br from-secondary/20 to-primary/20 rounded-full blur-md" />
              <div className="absolute inset-0 bg-linear-to-tl from-black/40 to-transparent rounded-full" />
              <Globe size={54} className="text-white relative z-10 drop-shadow-[0_0_15px_rgba(255,255,255,0.5)] sm:w-[64px] sm:h-[64px]" />
            </motion.div>
          </div>

          {/* Floating Orbital Icons */}
          {[ 
            { Icon: Smartphone, top: "10%", left: "10%", delay: 0 },
            { Icon: Database, top: "25%", right: "5%", delay: 1.2 },
            { Icon: BarChart3, bottom: "35%", left: "0%", delay: 2.5 },
            { Icon: ShieldCheck, bottom: "15%", right: "15%", delay: 0.8 },
            { Icon: Gamepad2, top: "55%", right: "-10%", delay: 1.8 }
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: [-10, 10, -10], opacity: 1 }}
              transition={{ 
                y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: item.delay },
                opacity: { duration: 0.8, delay: 0.5 + (idx * 0.2) }
              }}
              style={{ top: item.top, left: item.left, right: item.right, bottom: item.bottom }}
              className="absolute glass-card w-14 h-14 sm:w-20 sm:h-20 rounded-2xl flex flex-col items-center justify-center border border-white/20 shadow-xl z-20 backdrop-blur-xl bg-white/5"
            >
              <item.Icon size={24} className="text-secondary drop-shadow-[0_0_8px_rgba(0,229,255,0.8)] sm:w-[28px] sm:h-[28px]" />
            </motion.div>
          ))}

          {/* Floating Highlight Card */}
          <motion.div 
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: [-5, 5, -5], opacity: 1 }}
            transition={{ 
              x: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 },
              opacity: { delay: 1.5, duration: 1 }
            }}
            className="absolute -bottom-10 sm:-bottom-4 left-1/2 -translate-x-1/2 glass-panel p-4 sm:p-5 rounded-2xl w-[95%] sm:w-[320px] border border-white/20 z-30 shadow-2xl glass-card backdrop-blur-2xl"
          >
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary/20 border border-primary/30 flex items-center justify-center shrink-0">
                <Zap className="text-secondary" size={20} />
              </div>
              <div className="flex-1">
                <div className="text-[10px] sm:text-[10px] font-bold text-secondary font-label uppercase tracking-widest leading-none mb-1 sm:mb-1.5">Next-Gen Delivery</div>
                <div className="text-[11px] sm:text-sm font-bold font-headline text-white leading-tight">Lightning fast architecture mapped to your goals.</div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  </section>
);

const Stats = () => (
  <section className="py-16 lg:py-24 relative">
    <div className="max-w-7xl mx-auto px-5 lg:px-6 relative z-10">
      <div className="mb-12 lg:mb-16">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-headline tracking-tight mb-4 text-white">Built Around Business Growth</h2>
        <div className="h-1 w-20 bg-linear-to-r from-secondary to-primary rounded-full"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {[
          { label: 'Client reach', value: '100+', desc: 'Businesses supported through digital marketing and online growth services.', status: 'ACTIVE DELIVERY', shadow: 'shadow-secondary/20' },
          { label: 'Platform coverage', value: 'Android & iOS', desc: 'Mobile solutions designed for both major app ecosystems.', status: 'MULTI PLATFORM', shadow: 'shadow-primary/20' },
          { label: 'Delivery model', value: 'End-to-end', desc: 'Planning, design, development, deployment and ongoing improvement.', status: 'FULL SERVICE', shadow: 'shadow-purple-500/20' },
        ].map((stat, i) => (
          <motion.div 
            key={i} 
            whileHover={{ y: -5, scale: 1.01 }} 
            className={`glass-panel p-8 lg:p-10 rounded-3xl relative overflow-hidden group transition-all duration-300 ${stat.shadow} shadow-xl lg:shadow-2xl border border-white/10 hover:border-white/30 hover:bg-white/10`}
          >
            <div className="absolute -right-10 -top-10 w-32 h-32 bg-white/5 rounded-full blur-2xl group-hover:bg-white/10 transition-colors" />
            
            <div className="font-label text-xs tracking-widest text-secondary mb-4 lg:mb-6 uppercase font-bold">{stat.label}</div>
            <div className="text-4xl lg:text-5xl font-black font-headline text-white mb-3 lg:mb-4 tracking-tighter">{stat.value}</div>
            <p className="text-slate-300 font-body leading-relaxed mb-6 lg:mb-8 text-sm lg:text-base">{stat.desc}</p>
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 bg-white/5 border border-white/10 text-white text-[10px] font-bold rounded-full tracking-wider">{stat.status}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Services = () => (
  <section className="py-16 lg:py-32 relative">
    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] lg:w-[800px] lg:h-[800px] bg-primary/10 blur-[100px] lg:blur-[150px] rounded-full pointer-events-none -z-10" />
    <div className="max-w-7xl mx-auto px-5 lg:px-6 relative z-10">
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-10 lg:gap-16">
        <div className="xl:col-span-5">
          <div className="sticky top-24 lg:top-32 glass-panel p-8 lg:p-12 rounded-3xl border border-white/10 backdrop-blur-2xl shadow-2xl">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black font-headline tracking-tighter mb-6 lg:mb-8 leading-[1.1] text-white">Core<br/><span className="text-transparent bg-clip-text bg-linear-to-r from-secondary to-primary">Capabilities</span></h2>
            <p className="text-base lg:text-lg text-slate-300 font-body leading-relaxed mb-8 lg:mb-10">
              We combine creative design, robust development, and strategic marketing execution so businesses can launch stronger digital products and generate consistent online revenue.
            </p>
            <div className="flex flex-col gap-6 py-6 lg:py-8 border-t border-white/10">
              <div className="flex items-start gap-4">
                <ShieldCheck className="text-secondary shrink-0" size={24} />
                <span className="text-xs sm:text-sm font-bold font-label uppercase tracking-widest text-slate-200 leading-relaxed">Secure, scalable, and built for modern demands</span>
              </div>
            </div>
            <Link href="/services" className="inline-flex items-center gap-2 text-secondary font-bold hover:text-white transition-colors uppercase tracking-widest text-xs sm:text-sm mt-2 lg:mt-4">
              View full catalog <ArrowRight size={16} />
            </Link>
          </div>
        </div>
        <div className="xl:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-6">
          {[
            { icon: Globe, title: 'Web Design & Dev', desc: 'High-performance websites that capture attention and drive conversions.', href: '/services/website-design-and-development' },
            { icon: Smartphone, title: 'Mobile Apps', desc: 'Native and cross-platform mobile apps for iOS and Android ecosystems.', href: '/services/mobile-apps' },
            { icon: BarChart3, title: 'Digital Growth', desc: 'Data-driven SEO, PPC, and social marketing to scale your brand visibility.', href: '/services/digital-marketing' },
            { icon: Database, title: 'ERP Systems', desc: 'Custom enterprise software to automate operations and manage resources efficiently.', href: '/services/erp-solutions' },
            { icon: Gamepad2, title: 'Game Studio', desc: 'Immersive and addictive games developed for web, mobile, and PC platforms.', href: '/services/game-development' },
            { icon: Zap, title: 'B2B Lead Gen', desc: 'Targeted outbound and inbound systems specifically designed for SaaS.', href: '/services/saas-lead-gen' },
          ].map((service, i) => (
            <Link key={i} href={service.href} className="group h-full">
              <motion.div 
                whileHover={{ y: -4 }}
                className="glass-card p-6 lg:p-8 rounded-3xl h-full border border-white/5 hover:border-secondary/50 transition-colors relative overflow-hidden flex flex-col"
              >
                <div className="absolute inset-0 bg-linear-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 lg:mb-8 group-hover:bg-primary/20 group-hover:border-primary/50 transition-colors shadow-inner shrink-0">
                  <service.icon className="text-secondary group-hover:text-white transition-colors w-5 h-5 lg:w-6 lg:h-6" />
                </div>
                <h3 className="text-xl lg:text-2xl font-bold font-headline mb-3 lg:mb-4 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:from-white group-hover:to-slate-400">{service.title}</h3>
                <p className="text-slate-400 font-body leading-relaxed text-sm lg:text-base">{service.desc}</p>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const WhyChoose = () => (
  <section className="py-16 lg:py-32 relative border-t border-white/5">
    <div className="max-w-7xl mx-auto px-5 lg:px-6 relative z-10">
      <div className="glass-panel rounded-[2rem] lg:rounded-[3rem] p-8 sm:p-12 lg:p-20 border border-white/10 relative overflow-hidden shadow-2xl shadow-black/50">
        <div className="absolute -left-20 -top-20 lg:-left-40 lg:-top-40 w-64 h-64 lg:w-96 lg:h-96 bg-primary/30 blur-[80px] lg:blur-[100px] rounded-full pointer-events-none mix-blend-screen" />
        
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16 relative z-10">
          <div className="w-full lg:w-5/12">
            <div className="text-secondary font-label font-bold text-xs tracking-widest uppercase mb-4 lg:mb-6 inline-block px-4 py-1.5 bg-secondary/10 rounded-full border border-secondary/20">Why Manav Tech Labs</div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-headline leading-tight mb-6 lg:mb-8 text-white">
              Engineering <span className="text-transparent bg-clip-text bg-linear-to-r from-secondary to-primary">Excellence</span>
            </h2>
            <p className="text-slate-300 font-body leading-relaxed text-base lg:text-lg mb-6 lg:mb-8">
              We don't just write code; we architect solutions. Our delivery model prioritizes robust infrastructure, cutting-edge glassmorphic UI, and scalable performance to ensure your product outpaces the competition.
            </p>
          </div>
          
          <div className="w-full lg:w-7/12 grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
            {[
              'Bespoke design aligned with deep technical strategy',
              'Senior-level developers and verified UX architects',
              'Agile sprints with transparent, real-time tracking',
              'Global standard quality with competitive pricing',
            ].map((item, index) => (
              <div key={index} className="glass-card p-5 lg:p-6 rounded-2xl border border-white/10 hover:bg-white/5 transition-colors">
                <CheckCircle2 className="text-secondary mb-3 lg:mb-4 drop-shadow-[0_0_8px_rgba(0,229,255,0.5)]" size={24} />
                <p className="text-xs lg:text-sm text-slate-200 font-body leading-relaxed font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

const CTA = () => (
  <section className="py-20 lg:py-32 relative overflow-hidden">
    <div className="absolute inset-0 bg-linear-to-b from-transparent to-primary/10" />
    <motion.div 
      animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
      transition={{ duration: 10, repeat: Infinity }}
      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-64 lg:h-96 bg-secondary/20 blur-[100px] lg:blur-[150px] rounded-full" 
    />
    
    <div className="max-w-4xl mx-auto px-5 lg:px-6 text-center relative z-10">
      <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black font-headline tracking-tighter mb-6 lg:mb-8 text-white leading-[1.1]">
        Ready to engineer your next <span className="italic font-light opacity-90 block sm:inline mt-2 sm:mt-0">breakthrough?</span>
      </h2>
      <p className="text-lg lg:text-xl text-slate-300 mb-10 lg:mb-12 leading-relaxed">
        Let's discuss how Manav Tech Labs can design, develop, and scale your digital presence to dominate your industry.
      </p>
      <div className="flex justify-center">
        <Link href="/contact" className="group relative w-full sm:w-auto inline-flex items-center justify-center bg-white text-slate-950 px-8 lg:px-10 py-4 lg:py-5 rounded-2xl font-headline font-bold text-lg lg:text-xl hover:scale-105 transition-all shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:shadow-[0_0_60px_rgba(255,255,255,0.5)]">
          <span className="relative z-10 flex items-center gap-3">Initiate Project <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} /></span>
        </Link>
      </div>
    </div>
  </section>
);

export default function Home() {
  return (
    <>
      <Hero />
      <div className="glass-panel border-y border-white/5 bg-white/5 overflow-hidden py-8 sm:py-10">
        <ClientLogosSlider />
      </div>
      <Stats />
      <Services />
      <WhyChoose />
      <CTA />
    </>
  );
}
