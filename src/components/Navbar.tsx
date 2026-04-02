"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Work" },
  { href: "/about", label: "About" },
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

  useEffect(() => {
    if (mobileOpen) {
       document.body.style.overflow = "hidden";
    } else {
       document.body.style.overflow = "unset";
    }
  }, [mobileOpen]);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const menuVariants: Variants = {
    closed: { 
      x: "100%", 
      transition: { 
        type: "spring", 
        stiffness: 400, 
        damping: 40 
      } 
    },
    open: { 
      x: 0, 
      transition: { 
        type: "spring", 
        stiffness: 400, 
        damping: 40 
      } 
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
          scrolled ? "glass-frosted py-4 shadow-xl" : "py-8 bg-transparent"
        }`}
      >
        <div className="container-custom flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group relative z-[110]">
            <div className="relative">
               <div className="absolute inset-0 bg-primary/30 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
               <div className="w-10 h-10 bg-foreground dark:bg-white rounded-xl flex items-center justify-center transition-all duration-500 group-hover:rotate-[10deg] shadow-lg relative z-10 border border-white/10">
                  <span className="font-black text-background dark:text-black text-lg tracking-tighter">D</span>
               </div>
            </div>
            <span className="font-black text-foreground text-xl tracking-[0.15em] uppercase hidden sm:block">
              Devtoon
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1 bg-white/5 backdrop-blur-xl rounded-full px-2 py-2 border border-white/10 shadow-inner">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative group px-4 py-2"
              >
                 <motion.span 
                   whileHover={{ y: -1 }}
                   className={`nav-link block relative z-10 ${pathname === link.href ? 'text-primary' : ''}`}
                 >
                   {link.label}
                 </motion.span>
                 {pathname === link.href && (
                    <motion.div 
                      layoutId="nav-active"
                      className="absolute inset-0 bg-primary/10 rounded-full border border-primary/20"
                    />
                 )}
                 <div className="absolute inset-0 bg-foreground/5 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 -z-10" />
              </Link>
            ))}
          </nav>

          {/* Action */}
          <div className="flex items-center gap-4 relative z-[110]">
            <Link
              href="/contact"
              className="hidden md:inline-flex btn-clay btn-clay-primary items-center gap-2 group"
            >
              LET'S TALK
              <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`lg:hidden w-12 h-12 flex items-center justify-center rounded-xl glass-frosted transition-all active:scale-90 ${mobileOpen ? 'bg-primary text-white border-primary' : ''}`}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 z-[120] bg-background/80 backdrop-blur-md lg:hidden"
            />
            <motion.div
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed top-0 right-0 bottom-0 w-[85%] max-w-sm z-[130] glass-frosted bg-background/95 lg:hidden flex flex-col p-8 pt-32"
            >
              <div className="flex flex-col gap-4">
                {links.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      className={`block px-8 py-6 rounded-2xl text-[10px] font-black uppercase tracking-[0.4em] transition-all border border-transparent ${
                        pathname === link.href
                          ? "bg-primary text-white shadow-xl shadow-primary/20 border-primary/20"
                          : "text-muted-foreground hover:bg-white/5 hover:text-foreground"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                
                <motion.div 
                   initial={{ opacity: 0, y: 20 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ delay: 0.5 }}
                   className="mt-8 pt-8 border-t border-white/10"
                >
                  <Link
                    href="/contact"
                    className="btn-clay btn-clay-primary w-full py-8 text-xs"
                  >
                    START A PROJECT
                  </Link>
                </motion.div>
              </div>

              <div className="mt-auto">
                 <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest text-center">
                   Devtoon Technologies // 01
                 </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
