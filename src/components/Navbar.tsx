"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/tech-tips", label: "Tips" },
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
          scrolled
            ? "glass-frosted py-4 shadow-2xl"
            : "py-8 bg-transparent"
        }`}
      >
        <div className="container-custom flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group relative z-10">
            <div className="relative">
               <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
               <div className="w-10 h-10 bg-foreground rounded-xl flex items-center justify-center transition-all duration-500 group-hover:rotate-[10deg] shadow-lg relative z-10 border border-white/10">
                  <span className="font-black text-background text-lg tracking-tighter">D</span>
               </div>
            </div>
            <span className="font-black text-foreground text-xl tracking-[0.15em] uppercase hidden sm:block">
              Devtoon
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1 bg-white/5 backdrop-blur-md rounded-full px-2 py-2 border border-white/10">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative group px-6 py-2"
              >
                 <motion.span 
                   whileHover={{ y: -2 }}
                   className={`nav-link block relative z-10 ${pathname === link.href ? 'text-primary' : ''}`}
                 >
                   {link.label}
                 </motion.span>
                 {pathname === link.href && (
                    <motion.div 
                      layoutId="nav-active"
                      className="absolute inset-0 bg-primary/5 rounded-full border border-primary/20"
                    />
                 )}
                 <div className="absolute inset-0 bg-foreground/5 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 -z-10" />
              </Link>
            ))}
          </nav>

          {/* Action */}
          <div className="flex items-center gap-4 relative z-10">
            <Link
              href="/contact"
              className="hidden md:inline-flex btn-clay btn-clay-primary items-center gap-2 group"
            >
              LET'S TALK
              <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden w-12 h-12 flex items-center justify-center rounded-xl glass-frosted transition-transform active:scale-90"
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
              transition={{ duration: 0.4, ease: "circOut" }}
              className="lg:hidden absolute top-[calc(100%+12px)] left-6 right-6 p-6 rounded-[2rem] glass-frosted border border-white/10 shadow-2xl overflow-hidden"
            >
              <div className="flex flex-col gap-2">
                {links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-8 py-5 rounded-2xl text-[10px] font-black uppercase tracking-[0.3em] transition-all ${
                      pathname === link.href
                        ? "bg-primary text-white"
                        : "text-muted-foreground hover:bg-white/5 hover:text-foreground"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="h-px bg-white/10 my-4" />
                <Link
                  href="/contact"
                  className="btn-clay btn-clay-primary py-6 text-center"
                >
                  LET'S TALK
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Background overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMobileOpen(false)}
            className="fixed inset-0 z-[90] bg-background/40 backdrop-blur-sm lg:hidden h-screen"
          />
        )}
      </AnimatePresence>
    </>
  );
};
