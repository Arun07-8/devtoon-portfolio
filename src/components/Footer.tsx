"use client";

import Link from "next/link";

export const Footer = () => (
  <footer className="py-16 md:py-20 border-t border-border bg-background">
    <div className="container-custom">
      <div className="grid md:grid-cols-4 gap-12">
        <div className="md:col-span-1">
          <Link href="/" className="text-xl font-bold tracking-tighter text-foreground uppercase">
            DEVTOON
          </Link>
          <p className="text-muted-foreground mt-6 text-sm font-medium leading-relaxed max-w-[200px]">
            Engineering digital experiences for visionaries and industry leaders.
          </p>
        </div>
        
        <div>
          <h5 className="font-bold text-foreground mb-6 uppercase text-[10px] tracking-widest">Expertise</h5>
          <ul className="space-y-3 text-xs font-bold text-muted-foreground uppercase tracking-widest">
            <li><span className="hover:text-foreground cursor-pointer transition-colors">Web Apps</span></li>
            <li><span className="hover:text-foreground cursor-pointer transition-colors">3D Experience</span></li>
            <li><span className="hover:text-foreground cursor-pointer transition-colors">Digital Strategy</span></li>
          </ul>
        </div>
        
        <div>
          <h5 className="font-bold text-foreground mb-6 uppercase text-[10px] tracking-widest">Company</h5>
          <ul className="space-y-3 text-xs font-bold text-muted-foreground uppercase tracking-widest">
            <li><Link href="/about" className="hover:text-foreground transition-colors">About Us</Link></li>
            <li><Link href="/#services" className="hover:text-foreground transition-colors">Showcase</Link></li>
            <li><Link href="/contact" className="hover:text-foreground transition-colors">Contact</Link></li>
          </ul>
        </div>
        
        <div>
          <h5 className="font-bold text-foreground mb-6 uppercase text-[10px] tracking-widest">Inquiries</h5>
          <ul className="space-y-3 text-xs font-bold text-muted-foreground uppercase tracking-widest">
            <li className="text-foreground transition-colors break-all">devtoontechnologies@gmail.com</li>
            <li className="text-muted-foreground">Mumbai, India</li>
          </ul>
        </div>
      </div>
      
      <div className="border-t border-border mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-[9px] font-bold text-muted-foreground uppercase tracking-[0.2em]">© 2024 Devtoon Technologies. Built for impact.</p>
        <div className="flex gap-6">
          {["Twitter", "LinkedIn", "Instagram"].map((social) => (
            <span key={social} className="text-[9px] font-bold text-muted-foreground uppercase tracking-widest hover:text-foreground cursor-pointer transition-colors">
              {social}
            </span>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

