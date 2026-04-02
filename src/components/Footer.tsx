"use client";

import Link from "next/link";

export const Footer = () => (
  <footer className="py-24 md:py-32 border-t border-border/10 bg-foreground text-background">
    <div className="container-custom">
      <div className="grid md:grid-cols-12 gap-16 lg:gap-24">
        <div className="md:col-span-5">
          <Link href="/" className="text-3xl font-black tracking-tighter text-white uppercase leading-none">
            DEVTOON<span className="text-primary">.</span>
          </Link>
          <p className="text-white/40 mt-10 text-lg font-medium leading-relaxed max-w-sm italic">
            "We engineer digital leverage for the world's most ambitious visionaries."
          </p>
          <div className="mt-12 flex gap-4">
             <Link href="/contact" className="btn-clay bg-background text-foreground px-8 py-4 text-[10px]">
                START A PROJECT
             </Link>
          </div>
        </div>

        <div className="md:col-span-2">
          <h5 className="font-black text-primary mb-8 uppercase text-[10px] tracking-[0.3em]">Expertise</h5>
          <ul className="space-y-4 text-xs font-black text-white/60 uppercase tracking-widest">
            <li><Link href="/services" className="hover:text-primary transition-colors">Web Systems</Link></li>
            <li><Link href="/services" className="hover:text-primary transition-colors">3D Experience</Link></li>
            <li><Link href="/services" className="hover:text-primary transition-colors">Logic Engines</Link></li>
            <li><Link href="/services" className="hover:text-primary transition-colors">Strategy</Link></li>
          </ul>
        </div>

        <div className="md:col-span-2">
          <h5 className="font-black text-primary mb-8 uppercase text-[10px] tracking-[0.3em]">Agency</h5>
          <ul className="space-y-4 text-xs font-black text-white/60 uppercase tracking-widest">
            <li><Link href="/about" className="hover:text-primary transition-colors">Narrative</Link></li>
            <li><Link href="/projects" className="hover:text-primary transition-colors">Archive</Link></li>
            <li><Link href="/contact" className="hover:text-primary transition-colors">Mobilize</Link></li>
          </ul>
        </div>

        <div className="md:col-span-3">
          <h5 className="font-black text-primary mb-8 uppercase text-[10px] tracking-[0.3em]">Security // OPS</h5>
          <ul className="space-y-6 text-xs font-black text-white/60 uppercase tracking-widest">
            <li>
               <p className="text-[9px] text-white/30 mb-1">General Inquiries</p>
               <p className="text-white hover:text-primary transition-colors break-all">devtoontechnologies@gmail.com</p>
            </li>
            <li>
               <p className="text-[9px] text-white/30 mb-1">Global Presence</p>
               <p className="text-white">Mumbai, India // Remote</p>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/5 mt-24 pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-4">
           <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
           <p className="text-[10px] font-black text-white/30 uppercase tracking-[0.3em]">Status: Operational // All Engines Go</p>
        </div>
        
        <p className="text-[9px] font-black text-white/20 uppercase tracking-[0.4em]">© 2024 Devtoon Technologies. Engineered for absolute impact.</p>
        
        <div className="flex gap-8">
          {["Twitter", "LinkedIn", "GitHub"].map((social) => (
            <span key={social} className="text-[9px] font-black text-white/40 uppercase tracking-[0.3em] hover:text-primary cursor-pointer transition-colors">
              {social}
            </span>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

