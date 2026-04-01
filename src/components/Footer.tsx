"use client";

import Link from "next/link";

export const Footer = () => (

    <footer className="py-20 border-t border-border/40 bg-background overflow-hidden">
        <div className="container-custom relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-black text-foreground/[0.02] whitespace-nowrap pointer-events-none select-none">
            DEVTOON SOLUTIONS
          </div>
          <div className="grid md:grid-cols-4 gap-12 relative z-10">
            <div className="md:col-span-1">
              <Link href="/" className="text-2xl font-display font-black tracking-tighter text-foreground group">
                DEVTOON<span className="text-accent group-hover:animate-pulse">.</span>
              </Link>
              <p className="text-foreground/40 mt-6 text-sm font-medium leading-relaxed">
                Engineering premium digital experiences for the next generation of business leaders.
              </p>
            </div>
            <div>
              <h5 className="font-bold text-foreground mb-6 uppercase text-[10px] tracking-[0.3em]">Services</h5>
              <ul className="space-y-4 text-sm font-medium text-foreground/40">
                <li className="hover:text-accent cursor-pointer transition-colors">Web Development</li>
                <li className="hover:text-accent cursor-pointer transition-colors">3D Experience</li>
                <li className="hover:text-accent cursor-pointer transition-colors">Digital Strategy</li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold text-foreground mb-6 uppercase text-[10px] tracking-[0.3em]">Company</h5>
              <ul className="space-y-4 text-sm font-medium text-foreground/40">
                <li><Link href="/about" className="hover:text-accent transition-colors">About Us</Link></li>
                <li><Link href="/projects" className="hover:text-accent transition-colors">Portfolio</Link></li>
                <li><Link href="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold text-foreground mb-6 uppercase text-[10px] tracking-[0.3em]">Support</h5>
              <ul className="space-y-4 text-sm font-medium text-foreground/40">
                <li className="text-foreground/60 select-all">devtoontechnologies@gmail.com</li>
                <li>Mumbai, India</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border/40 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-xs font-bold text-foreground/30 uppercase tracking-widest">© 2024 Devtoon Technologies. All rights reserved.</p>
            <div className="flex gap-8">
              <span className="text-xs font-bold text-foreground/20 uppercase tracking-widest hover:text-accent cursor-pointer transition-all">Twitter</span>
              <span className="text-xs font-bold text-foreground/20 uppercase tracking-widest hover:text-accent cursor-pointer transition-all">LinkedIn</span>
              <span className="text-xs font-bold text-foreground/20 uppercase tracking-widest hover:text-accent cursor-pointer transition-all">Instagram</span>
            </div>
          </div>
        </div>
      </footer>
  
);

