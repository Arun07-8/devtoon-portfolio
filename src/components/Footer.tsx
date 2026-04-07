import Link from "next/link";
import { Mail, Globe, Code as Github, Share2 as Linkedin, Send as Twitter } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="pt-32 pb-16 border-t transition-all duration-700 bg-[#02040A] text-white border-white/5">
      <div className="container-custom">
        <div className="grid md:grid-cols-12 gap-12 sm:gap-16 md:gap-20 lg:gap-32">
          {/* Brand/Summary */}
          <div className="md:col-span-12 lg:col-span-5">
            <Link href="/home" className="group flex items-center gap-4 mb-12">
              <div className="relative w-16 h-16">
                <img
                  src="/logo/Bold_Sans-Serif_Logo_with_Minimalist_Icon__2_-removebg-preview.png"
                  alt="Devtoon Logo"
                  className="w-full h-full object-contain transition-all duration-500 group-hover:scale-110"
                />
              </div>
              <span className="text-4xl font-black tracking-tighter uppercase italic">
                DEVTOON<span className="text-primary font-black italic">.</span>
              </span>
            </Link>
            <p className="mt-12 text-xl font-medium leading-relaxed max-w-sm italic opacity-60 text-white">
              "Engineered for clarity, built for performance. We transform complex visions into technical leverage."
            </p>
            <div className="mt-12 flex gap-4">
              <Link href="/contact" className="btn-clay btn-clay-primary rounded-2xl px-8 xs:px-10 py-5 xs:py-6 text-[9px] xs:text-[10px] shadow-xl font-black uppercase tracking-[0.4em] italic">
                INITIATE PROJECT
              </Link>
            </div>
          </div>

          {/* Links Column 1 */}
          <div className="md:col-span-4 lg:col-span-2">
            <h5 className="font-black text-primary mb-10 uppercase text-[10px] tracking-[0.4em] font-mono">Expertise</h5>
            <ul className="space-y-6 text-xs font-black uppercase tracking-[0.3em] italic text-white/40">
              <li><Link href="/services" className="hover:text-primary transition-all">Web Systems</Link></li>
              <li><Link href="/services" className="hover:text-primary transition-all">3D Ecosystems</Link></li>
              <li><Link href="/services" className="hover:text-primary transition-all">Logic Engines</Link></li>
              <li><Link href="/services" className="hover:text-primary transition-all">AI Layers</Link></li>
            </ul>
          </div>

          {/* Links Column 2 */}
          <div className="md:col-span-4 lg:col-span-2">
            <h5 className="font-black text-primary mb-10 uppercase text-[10px] tracking-[0.4em] font-mono">Narrative</h5>
            <ul className="space-y-6 text-xs font-black uppercase tracking-[0.3em] italic text-white/40">
              <li><Link href="/about" className="hover:text-primary transition-all">Our Process</Link></li>
              <li><Link href="/projects" className="hover:text-primary transition-all">The Archive</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-all">Collaborate</Link></li>
            </ul>
          </div>

          {/* Direct Channel */}
          <div className="md:col-span-4 lg:col-span-3">
            <h5 className="font-black text-primary mb-10 uppercase text-[10px] tracking-[0.4em] font-mono">Direct Signal</h5>
            <ul className="space-y-8 text-xs font-black uppercase tracking-[0.3em] italic text-white/40">
              <li>
                <p className="text-[9px] mb-2 opacity-40 font-mono">Technical HQ</p>
                <p className="hover:text-primary transition-all break-all">devtoontechnologies@gmail.com</p>
              </li>
              <li>
                <p className="text-[9px] mb-2 opacity-40 font-mono">Global Operations</p>
                <p>Kalikavu Malappuram, Kerala</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Credits & Socials */}
        <div className="border-t mt-24 pt-12 flex flex-col md:flex-row justify-between items-center gap-12 border-white/5">
          <p className="text-[9px] font-black uppercase tracking-[0.5em] text-center opacity-30 text-white">© 2026 Devtoon Technologies. Engineered for Absolute Impact.</p>

          <div className="flex gap-10">
            {[Twitter, Linkedin, Github].map((Icon, i) => (
              <a key={i} href="#" className="opacity-20 hover:opacity-100 transition-all hover:scale-110 text-white">
                <Icon size={18} strokeWidth={1.5} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
