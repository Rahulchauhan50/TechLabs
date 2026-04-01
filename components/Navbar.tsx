"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Menu,
  X,
  ChevronDown,
  Globe,
  Smartphone,
  Database,
  BarChart3,
  Zap,
  Gamepad2,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Logo } from './Logo';

export const Navbar = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsMegaMenuOpen(false);
  }, [pathname]);

  const services = [
    { title: 'Website Design', href: '/services/website-design-and-development', icon: Globe, desc: 'Creative, user-friendly, search-ready websites.' },
    { title: 'Mobile Apps', href: '/services/mobile-apps', icon: Smartphone, desc: 'Android and iOS app development services.' },
    { title: 'Digital Marketing', href: '/services/digital-marketing', icon: BarChart3, desc: 'SEO, PPC, email and social growth.' },
    { title: 'ERP Solutions', href: '/services/erp-solutions', icon: Database, desc: 'Custom business management systems.' },
    { title: 'Lead Generation', href: '/services/saas-lead-gen', icon: Zap, desc: 'Qualified leads for software and service brands.' },
    { title: 'Game Development', href: '/services/game-development', icon: Gamepad2, desc: 'Engaging mobile and web games.' },
  ];

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Work', href: '/case-studies' },
    { name: 'Careers', href: '/careers' },
    { name: 'FAQ', href: '/faq' },
  ];

  return (
    <>
      <nav className={`fixed left-1/2 -translate-x-1/2 w-[95%] max-w-6xl z-50 transition-all duration-500 rounded-full ${isScrolled ? 'top-4 glass-panel py-3 px-6 shadow-2xl shadow-black/50' : 'top-6 glass-panel py-4 px-6 border-transparent bg-transparent'}`}>
        <div className="flex items-center justify-between w-full mx-auto">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-slate-300 active:opacity-80 active:scale-95 transition-all cursor-pointer hover:text-white"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <Link href="/" className="flex items-center group">
              <Logo className="transition-transform group-hover:scale-105" />
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className={`text-sm font-semibold font-headline transition-colors ${pathname === '/' ? 'text-secondary' : 'text-slate-300 hover:text-white'}`}>
              Home
            </Link>
            <Link href="/about" className={`text-sm font-semibold font-headline transition-colors ${pathname === '/about' ? 'text-secondary' : 'text-slate-300 hover:text-white'}`}>
              About
            </Link>

            <div className="relative group" onMouseEnter={() => setIsMegaMenuOpen(true)} onMouseLeave={() => setIsMegaMenuOpen(false)}>
              <button className={`flex items-center gap-1 text-sm font-semibold font-headline transition-colors cursor-pointer ${(pathname || '').match(/services|apps|marketing|erp|saas|game/) ? 'text-secondary' : 'text-slate-300 hover:text-white'}`}>
                Services <ChevronDown size={14} className={`transition-transform duration-300 ${isMegaMenuOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {isMegaMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-[calc(100%+1rem)] left-1/2 -translate-x-1/2 w-[600px] pt-2"
                  >
                    <div className="glass-panel p-8 grid grid-cols-2 gap-6 rounded-2xl overflow-hidden relative">
                       {/* Subtle inner glow */}
                      <div className="absolute inset-0 bg-linear-to-b from-white/5 to-transparent pointer-events-none" />

                      <div className="col-span-2 mb-2 relative">
                        <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 font-label">What We Build</h4>
                      </div>
                      {services.map((service, i) => (
                        <Link key={i} href={service.href} className="flex items-start gap-4 p-3 hover:bg-white/5 transition-colors rounded-xl group relative">
                          <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-slate-300 group-hover:bg-primary group-hover:text-white transition-all shadow-lg border border-white/5 group-hover:border-primary/50">
                            <service.icon size={20} />
                          </div>
                          <div>
                            <div className="font-bold font-headline text-white text-sm group-hover:text-secondary transition-colors">{service.title}</div>
                            <div className="text-xs text-slate-400 mt-1">{service.desc}</div>
                          </div>
                        </Link>
                      ))}
                      <div className="col-span-2 mt-4 pt-4 border-t border-white/10 flex justify-between items-center relative">
                        <Link href="/services" className="text-xs font-bold text-secondary hover:text-white transition-colors">View All Services →</Link>
                        <span className="text-[10px] text-slate-500 font-label uppercase tracking-widest">Global Solutions</span>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link href="/case-studies" className={`text-sm font-semibold font-headline transition-colors ${pathname === '/case-studies' ? 'text-secondary' : 'text-slate-300 hover:text-white'}`}>
              Work
            </Link>
            <Link href="/careers" className={`text-sm font-semibold font-headline transition-colors ${pathname === '/careers' ? 'text-secondary' : 'text-slate-300 hover:text-white'}`}>
              Careers
            </Link>
            <Link href="/contact" className={`text-sm font-semibold font-headline transition-colors ${pathname === '/contact' ? 'text-secondary' : 'text-slate-300 hover:text-white'}`}>
              Contact
            </Link>
          </div>

          <div className="flex items-center">
            <Link href="/contact" className="hidden sm:flex items-center justify-center bg-white/10 border border-white/20 text-white px-6 py-2.5 rounded-full text-sm font-bold font-headline hover:bg-primary hover:border-primary transition-all shadow-lg hover:shadow-primary/25">
              Start Project
            </Link>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-md z-60 md:hidden"
            />
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 bottom-0 w-[85%] max-w-sm z-70 md:hidden flex flex-col border-r border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.8)] overflow-hidden"
            >
              <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-3xl" />
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute -top-[50%] -left-[50%] w-[200%] h-[200%] bg-[conic-gradient(from_90deg_at_50%_50%,#000000_0%,#00E5FF_20%,#7C4DFF_40%,#000000_60%)] opacity-20 blur-[80px] pointer-events-none"
              />
              <div className="relative z-10 p-6 flex items-center justify-between border-b border-white/10 bg-white/5">
                <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
                  <Logo />
                </Link>
                <button onClick={() => setIsMobileMenuOpen(false)} className="text-slate-400 hover:text-white transition-all bg-white/5 hover:bg-white/10 p-2.5 rounded-full border border-white/10 active:scale-95">
                  <X size={20} />
                </button>
              </div>

              <div className="relative z-10 grow overflow-y-auto p-6 scrollbar-hide">
                <div className="space-y-10">
                  <motion.div
                    initial="closed"
                    animate="open"
                    variants={{
                      open: {
                        transition: { staggerChildren: 0.05, delayChildren: 0.1 }
                      },
                      closed: {}
                    }}
                  >
                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-500 font-label mb-5 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-secondary"></div>
                      Navigation
                    </h4>
                    <div className="space-y-4">
                      {navLinks.map((link, i) => (
                        <motion.div
                          key={i}
                          variants={{
                            open: { opacity: 1, x: 0 },
                            closed: { opacity: 0, x: -20 }
                          }}
                        >
                          <Link href={link.href} className={`block text-3xl font-black font-headline tracking-tighter transition-colors relative group ${pathname === link.href ? 'text-white' : 'text-slate-400 hover:text-white'}`}>
                            {pathname === link.href && (
                              <span className="absolute -left-4 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-secondary rounded-full shadow-[0_0_8px_rgba(0,229,255,0.8)]"></span>
                            )}
                            <span className="relative z-10 group-hover:translate-x-2 transition-transform inline-block">{link.name}</span>
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                  >
                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-500 font-label mb-5 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                      Core Services
                    </h4>
                    <div className="grid grid-cols-1 gap-3">
                      {services.map((service, i) => (
                        <Link key={i} href={service.href} className="group flex items-center gap-4 p-3.5 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all shadow-lg active:scale-95">
                          <div className="w-10 h-10 rounded-xl bg-slate-900 border border-white/5 flex items-center justify-center text-secondary shadow-inner group-hover:bg-primary/20 group-hover:text-white transition-colors shrink-0">
                            <service.icon size={18} />
                          </div>
                          <div className="overflow-hidden">
                            <span className="block font-bold font-headline text-slate-100 text-sm leading-none mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:from-white group-hover:to-slate-400">{service.title}</span>
                            <span className="block text-[10px] text-slate-500 font-body leading-tight truncate pr-2">{service.desc}</span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>

              <div className="relative z-10 p-6 border-t border-white/10 bg-black/40 backdrop-blur-md">
                <Link href="/contact" className="w-full flex items-center justify-center gap-3 bg-linear-to-r from-secondary to-primary text-white py-4 rounded-2xl font-black font-headline text-lg hover:opacity-90 transition-all shadow-[0_0_30px_rgba(0,229,255,0.2)] active:scale-95">
                  <Zap size={20} className="fill-white" /> Start Project
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
