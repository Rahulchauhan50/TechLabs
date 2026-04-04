"use client";

import React from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';
import {
  Smartphone,
  Rocket,
  ShieldCheck,
  Cpu,
  Activity,
} from 'lucide-react';
import { MobileProductVisual } from '../BusinessVisuals';

const MobileAppsHero = () => (
  <section className="relative pt-32 pb-20 overflow-hidden diagnostic-grid">
    <div className="max-w-7xl mx-auto px-6 relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="lg:col-span-7 space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary-container/20 text-secondary font-label text-[10px] uppercase font-bold tracking-[0.2em] rounded-full">
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
            Mobile App Development
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold font-headline tracking-tight leading-[0.9] text-white">
            ANDROID AND IOS <br /><span className="text-secondary">APP DEVELOPMENT</span>
          </h1>
          <p className="text-lg text-on-surface-variant max-w-xl leading-relaxed font-body">
            Manav Tech Labs offers mobile app development services for small and large entrepreneurs, with consulting-led planning, strong platform compatibility and timely delivery.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact" className="bg-slate-900 text-white px-8 py-4 font-label text-xs uppercase tracking-widest font-bold shadow-lg hover:shadow-secondary/20 transition-all active:scale-95 cursor-pointer">
              Start Consultation
            </Link>
            <Link href="/case-studies" className="bg-white/10 text-white border border-white/20 px-8 py-4 font-label text-xs uppercase tracking-widest font-bold hover:bg-white/20 transition-all active:scale-95 cursor-pointer">
              View Capability Areas
            </Link>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="lg:col-span-5 relative">
          <div className="aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/10 shadow-2xl relative group">
            <MobileProductVisual />
            <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/40 to-transparent"></div>
          </div>
          <div className="absolute -bottom-6 -left-6 glass-card p-6 ghost-border shadow-xl max-w-[220px]">
            <div className="font-label text-[10px] uppercase tracking-tighter text-secondary mb-2 font-bold">Delivery model</div>
            <div className="font-headline font-bold text-sm leading-tight">Consulting, prototyping and staged development</div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const MobileApps = () => {
  return (
    <div className="bg-[#030509] text-slate-100">
      <MobileAppsHero />

      <section className="px-6 md:px-12 py-20 bg-surface-container-low">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-xl">
              <h2 className="text-3xl font-bold font-headline mb-4 uppercase tracking-tight text-white">Accelerated development lifecycle</h2>
              <p className="text-on-surface-variant font-body">The uploaded mobile app content highlights collaborative requirement gathering, prototyping and reduced latency in the delivery cycle.</p>
            </div>
            <div className="font-label text-4xl font-bold text-white/10 select-none">APP_FLOW</div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 glass-card p-8 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-1 h-full bg-secondary"></div>
              <div className="relative z-10 flex flex-col h-full justify-between">
                <Rocket className="text-secondary mb-8" size={40} />
                <div>
                  <h3 className="font-headline font-bold text-xl mb-2 text-white">Prototyping before scale</h3>
                  <p className="text-on-surface-variant text-sm max-w-md font-body">Before development begins, our software experts collaborate with clients to understand requirements in detail and shape the product through a prototyping model.</p>
                </div>
              </div>
              <div className="absolute right-[-10%] bottom-[-10%] opacity-5 group-hover:opacity-10 transition-opacity">
                <Activity size={200} />
              </div>
            </div>
            <div className="bg-slate-900 text-white p-8 ghost-border">
              <ShieldCheck className="text-on-tertiary-container mb-8" size={40} />
              <h3 className="font-headline font-bold text-xl mb-2">Secure delivery</h3>
              <p className="text-slate-400 text-sm font-body">Applications are designed to be robust, secure and compatible across modern mobile environments.</p>
            </div>
            <div className="glass-card p-8 border-l-4 border-on-tertiary-container">
              <div className="flex items-center gap-3 mb-6">
                <Cpu className="text-secondary" size={24} />
                <span className="font-label text-xs font-bold uppercase tracking-widest">Android development</span>
              </div>
              <h3 className="font-headline font-bold text-xl mb-4 text-white">Consulting-led Android projects</h3>
              <p className="text-on-surface-variant text-sm mb-6 font-body">Our Android work is driven by project managers, designers, consultants and developers who align the app idea with the business requirement.</p>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-xs font-label uppercase font-medium"><div className="w-1.5 h-1.5 bg-on-tertiary-container rounded-full"></div> Requirement analysis</li>
                <li className="flex items-center gap-2 text-xs font-label uppercase font-medium"><div className="w-1.5 h-1.5 bg-on-tertiary-container rounded-full"></div> Business-fit delivery</li>
              </ul>
            </div>
            <div className="md:col-span-2 glass-card p-8 flex flex-col md:flex-row gap-8 items-center border-l-4 border-secondary">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-6">
                  <Smartphone className="text-secondary" size={24} />
                  <span className="font-label text-xs font-bold uppercase tracking-widest">iOS development</span>
                </div>
                <h3 className="font-headline font-bold text-xl mb-4 text-white">Affordable iOS application development</h3>
                <p className="text-on-surface-variant text-sm mb-6 font-body">We position iOS delivery around the right people for the right job, satisfying outcomes and premium app development services at an economical price point.</p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-white/5 border border-white/10 rounded-lg">
                    <div className="font-label text-lg font-bold text-secondary">Premium</div>
                    <div className="text-[10px] uppercase font-bold text-on-surface-variant">security and performance</div>
                  </div>
                  <div className="p-4 bg-white/5 border border-white/10 rounded-lg">
                    <div className="font-label text-lg font-bold text-secondary">Right fit</div>
                    <div className="text-[10px] uppercase font-bold text-on-surface-variant">for expanding iPhone markets</div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/3 h-48">
                <MobileProductVisual compact />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-12 py-24 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-label text-xs font-bold text-secondary tracking-[0.3em] uppercase block mb-4">Methodology</span>
          <h2 className="text-4xl font-extrabold font-headline uppercase tracking-tighter mb-6 text-white">How mobile projects move</h2>
          <div className="h-1 w-20 bg-secondary mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-white/10 border border-white/10 overflow-hidden rounded-xl">
          {[
            { num: '01', title: 'Discuss', desc: 'Understand the idea, user need and business goal.' },
            { num: '02', title: 'Prototype', desc: 'Map the key features and reduce development latency.' },
            { num: '03', title: 'Develop', desc: 'Build across Android, iOS or both based on project scope.' },
            { num: '04', title: 'Enhance', desc: 'Launch, review feedback and continue platform improvements.' },
          ].map((step, i) => (
            <div key={i} className="bg-surface-container-low p-10 group hover:bg-white/5 transition-colors">
              <div className="font-label text-4xl text-white/10 mb-6 group-hover:text-secondary/20 transition-colors font-bold">{step.num}</div>
              <h4 className="font-headline font-bold uppercase text-xs tracking-widest mb-4 text-white">{step.title}</h4>
              <p className="text-on-surface-variant text-sm font-body leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default MobileApps;
