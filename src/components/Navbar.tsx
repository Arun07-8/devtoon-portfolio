"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/#services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Portfolio" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMobileOpen(false), [pathname]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
          scrolled ? "glass border-b border-border/40 py-4 shadow-xl shadow-accent/5 backdrop-blur-[32px]" : "py-8 bg-transparent"
        }`}
      >
        <div className="container-custom flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group relative z-10 transition-transform active:scale-95">
            <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center shadow-lg shadow-accent/20 transition-transform group-hover:rotate-12">
               <span className="font-display font-black text-white text-xl uppercase tracking-tighter">D</span>
            </div>
            <span className="font-display font-black text-foreground text-2xl tracking-tighter uppercase">
              Devtoon
            </span>
          </Link>

          {/* Desktop Nav - Centered */}
          <div className="hidden lg:flex items-center gap-2 glass rounded-full px-2 py-2 border-border/20">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] transition-all active:scale-95 ${
                  pathname === link.href
                    ? "text-accent bg-accent/5"
                    : "text-foreground/50 hover:text-foreground hover:bg-foreground/[0.03]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4 relative z-10">
            <Link
              href="/contact"
              className="hidden md:inline-flex items-center gap-2 bg-foreground text-background px-8 py-3.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] transition-all hover:scale-105 active:scale-95 shadow-xl shadow-foreground/5 group border-border/20"
            >
              Start a Project 
              <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
            
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden w-12 h-12 flex items-center justify-center rounded-full glass border-border/40 transition-transform active:scale-90"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="lg:hidden absolute top-[calc(100%+12px)] left-6 right-6 p-6 rounded-[2.5rem] glass border-border/60 shadow-2xl overflow-hidden"
            >
              <div className="flex flex-col gap-2">
                {links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-8 py-5 rounded-[1.5rem] text-sm font-black uppercase tracking-[0.2em] transition-all ${
                      pathname === link.href
                        ? "bg-accent/10 text-accent"
                        : "text-foreground/50 hover:bg-foreground/[0.03]"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="h-px bg-border/40 my-4" />
                <Link
                  href="/contact"
                  className="bg-accent text-white px-8 py-5 rounded-[1.5rem] text-sm font-black uppercase tracking-[0.2em] text-center shadow-lg shadow-accent/20"
                >
                  Start Your Project
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
      {/* Background overlay for mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setMobileOpen(false)}
                className="fixed inset-0 z-[90] bg-background/20 backdrop-blur-sm lg:hidden"
            />
        )}
      </AnimatePresence>
    </>
  );
};
