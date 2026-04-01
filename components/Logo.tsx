"use client";
import Image from 'next/image';
import logo from '../public/assets/logo.png';

import React from 'react';

export const Logo = ({ className = '' }: { className?: string }) => (
  <div className={`flex items-center gap-3 ${className}`}>
    {/* <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-linear-to-br from-primary to-secondary shadow-lg shadow-primary/20 border border-white/10">
      <span className="text-white font-black font-headline text-lg tracking-tighter">M</span>
    </div> */}
      <Image src={logo} alt="Logo" width={70} height={70} />
    <div className="flex flex-col leading-none">
      <span className="text-lg font-black tracking-tight text-white font-headline">
        MANAV <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">TECH</span>
      </span>
      <span className="text-[10px] font-bold tracking-[0.3em] text-slate-400 font-label uppercase -mt-1">Labs</span>
    </div>
  </div>
);
