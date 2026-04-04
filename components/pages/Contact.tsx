"use client";

import React from 'react';
import { motion } from 'motion/react';
import { Send, MessageSquare, Clock, MapPin } from 'lucide-react';

const ContactHero = () => (
  <section className="relative pt-32 pb-20 overflow-hidden diagnostic-grid">
    <div className="max-w-7xl mx-auto px-6 relative z-10">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary-container/10 border-l-2 border-secondary mb-6">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-secondary font-label">Contact Manav Tech Labs</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold font-headline tracking-tight text-white mb-6">
          Tell us about your <span className="text-secondary">project requirement.</span>
        </h1>
        <p className="text-xl text-on-surface-variant leading-relaxed font-body">
          Use the form below to share your website, mobile app, digital marketing, ERP or lead generation requirement. We serve clients in Delhi NCR and across the world.
        </p>
      </motion.div>
    </div>
  </section>
);

const ContactForm = () => (
  <section className="py-20 bg-surface-container-low">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
          <h2 className="text-3xl font-bold font-headline mb-8 text-white">Project Brief</h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold font-label uppercase tracking-widest text-slate-400">Full Name</label>
                <input type="text" className="w-full bg-white/5 border border-white/10 p-4 font-body text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-secondary transition-colors" placeholder="Your name" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold font-label uppercase tracking-widest text-slate-400">Company Email</label>
                <input type="email" className="w-full bg-white/5 border border-white/10 p-4 font-body text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-secondary transition-colors" placeholder="name@company.com" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold font-label uppercase tracking-widest text-slate-400">Service Needed</label>
              <select className="w-full bg-white/5 border border-white/10 p-4 font-body text-slate-100 focus:outline-none focus:border-secondary transition-colors appearance-none">
                <option>Website Design</option>
                <option>Web Development</option>
                <option>Mobile App Development</option>
                <option>Digital Marketing</option>
                <option>ERP Software</option>
                <option>Lead Generation</option>
                <option>Game Development</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold font-label uppercase tracking-widest text-slate-400">Project Details</label>
              <textarea rows={5} className="w-full bg-white/5 border border-white/10 p-4 font-body text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-secondary transition-colors" placeholder="Tell us what you want to build, improve or promote."></textarea>
            </div>
            <button className="w-full bg-primary text-white py-5 font-headline font-bold text-lg hover:bg-secondary transition-all flex items-center justify-center gap-3 cursor-pointer">
              Send Requirement <Send size={20} />
            </button>
          </form>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="space-y-12">
          <div>
            <h2 className="text-3xl font-bold font-headline mb-8 text-white">What to Share</h2>
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-secondary/10 flex items-center justify-center text-secondary shrink-0">
                  <MessageSquare size={24} />
                </div>
                <div>
                  <div className="font-bold font-headline text-lg text-white">Business Goal</div>
                  <p className="text-on-surface-variant font-body">Tell us whether you need a new build, redesign, marketing growth, app launch or process automation.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-secondary/10 flex items-center justify-center text-secondary shrink-0">
                  <Clock size={24} />
                </div>
                <div>
                  <div className="font-bold font-headline text-lg text-white">Timeline</div>
                  <p className="text-on-surface-variant font-body">Share when you want to start and any important delivery deadline.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-secondary/10 flex items-center justify-center text-secondary shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <div className="font-bold font-headline text-lg text-white">Delivery Region</div>
                  <p className="text-on-surface-variant font-body">Manav Tech Labs works with clients in Delhi NCR, India and the rest of the world.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-4">
              <Clock className="text-secondary" size={20} />
              <span className="font-bold font-headline uppercase tracking-widest text-sm text-white">Best inquiry details</span>
            </div>
            <div className="space-y-2 font-body text-sm">
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span className="text-slate-400">Project type</span>
                <span className="font-bold text-white">Clear description</span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span className="text-slate-400">Budget range</span>
                <span className="font-bold text-white">Optional but helpful</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>References</span>
                <span className="font-bold uppercase">Useful for faster scoping</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default function Contact() {
  return (
    <div className="bg-[#030509] text-slate-100">
      <ContactHero />
      <ContactForm />
    </div>
  );
}
