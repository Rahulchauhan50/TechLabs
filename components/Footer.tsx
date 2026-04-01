"use client";

import React from 'react';
import Link from 'next/link';
import { Globe, Zap, ShieldCheck } from 'lucide-react';
import { Logo } from './Logo';

export const Footer = () => (
  <footer className="relative pt-32 pb-12 px-6 w-full overflow-hidden">
    {/* Background glowing orb for glass effect */}
    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-64 bg-primary/20 blur-[150px] rounded-[100%] pointer-events-none -z-10 mix-blend-screen" />
    <div className="absolute inset-0 bg-linear-to-b from-transparent to-slate-950/80 pointer-events-none -z-10" />

    <div className="max-w-7xl mx-auto relative z-10">
      <div className="glass-panel rounded-3xl p-10 md:p-14 mb-12 border border-white/10 shadow-2xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4 space-y-8">
            <Link href="/" className="inline-block">
              <Logo className="scale-110 origin-left" />
            </Link>
            <p className="text-slate-300 text-sm leading-relaxed max-w-sm font-body">
              Manav Tech Labs delivers website design, web development, mobile apps, digital marketing, ERP software and lead generation support for growing businesses.
            </p>
            <div className="flex items-center gap-3 py-3 px-4 bg-white/5 border border-white/10 rounded-xl w-fit shadow-inner">
              <div className="w-2.5 h-2.5 rounded-full bg-secondary shadow-[0_0_10px_rgba(0,229,255,0.8)] animate-pulse"></div>
              <span className="text-[10px] font-bold font-label uppercase tracking-widest text-slate-200">Accepting new projects</span>
            </div>
          </div>

          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div className="space-y-6">
              <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-secondary font-label">Company</h4>
              <ul className="space-y-3">
                <li><Link href="/" className="text-sm text-slate-400 hover:text-white transition-colors font-body inline-block hover:translate-x-1 transform duration-200">Home</Link></li>
                <li><Link href="/about" className="text-sm text-slate-400 hover:text-white transition-colors font-body inline-block hover:translate-x-1 transform duration-200">About</Link></li>
                <li><Link href="/careers" className="text-sm text-slate-400 hover:text-white transition-colors font-body inline-block hover:translate-x-1 transform duration-200">Careers</Link></li>
                <li><Link href="/contact" className="text-sm text-slate-400 hover:text-white transition-colors font-body inline-block hover:translate-x-1 transform duration-200">Contact</Link></li>
              </ul>
            </div>

            <div className="space-y-6">
              <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-secondary font-label">Services</h4>
              <ul className="space-y-3">
                <li><Link href="/services/website-design-and-development" className="text-sm text-slate-400 hover:text-white transition-colors font-body inline-block hover:translate-x-1 transform duration-200">Website Design</Link></li>
                <li><Link href="/services/mobile-apps" className="text-sm text-slate-400 hover:text-white transition-colors font-body inline-block hover:translate-x-1 transform duration-200">Mobile Apps</Link></li>
                <li><Link href="/services/digital-marketing" className="text-sm text-slate-400 hover:text-white transition-colors font-body inline-block hover:translate-x-1 transform duration-200">Digital Marketing</Link></li>
                <li><Link href="/services/erp-solutions" className="text-sm text-slate-400 hover:text-white transition-colors font-body inline-block hover:translate-x-1 transform duration-200">ERP Solutions</Link></li>
                <li><Link href="/services/saas-lead-gen" className="text-sm text-slate-400 hover:text-white transition-colors font-body inline-block hover:translate-x-1 transform duration-200">Lead Generation</Link></li>
                <li><Link href="/services/game-development" className="text-sm text-slate-400 hover:text-white transition-colors font-body inline-block hover:translate-x-1 transform duration-200">Game Development</Link></li>
              </ul>
            </div>

            <div className="space-y-6 col-span-2 md:col-span-1">
              <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-secondary font-label">Resources</h4>
              <ul className="space-y-3">
                <li><Link href="/case-studies" className="text-sm text-slate-400 hover:text-white transition-colors font-body inline-block hover:translate-x-1 transform duration-200">Work & Capabilities</Link></li>
                <li><Link href="/faq" className="text-sm text-slate-400 hover:text-white transition-colors font-body inline-block hover:translate-x-1 transform duration-200">FAQ</Link></li>
                <li><a href="#" className="text-sm text-slate-400 hover:text-white transition-colors font-body inline-block hover:translate-x-1 transform duration-200">Privacy Policy</a></li>
                <li><a href="#" className="text-sm text-slate-400 hover:text-white transition-colors font-body inline-block hover:translate-x-1 transform duration-200">Terms of Service</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center gap-6 px-4">
        <div className="text-[10px] font-label text-slate-500 uppercase tracking-widest">
          © {new Date().getFullYear()} MANAV TECH LABS. ALL RIGHTS RESERVED.
        </div>
        <div className="flex gap-8">
          <a href="#" className="text-slate-500 hover:text-white transition-colors hover:scale-110 transform duration-200"><Globe size={18} /></a>
          <a href="#" className="text-slate-500 hover:text-secondary transition-colors hover:scale-110 transform duration-200"><Zap size={18} /></a>
          <a href="#" className="text-slate-500 hover:text-primary transition-colors hover:scale-110 transform duration-200"><ShieldCheck size={18} /></a>
        </div>
      </div>
    </div>
  </footer>
);
