"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

const links = [
  { href: "/home", label: "Home" },
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
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-700 ${
          scrolled 
            ? "glass-frosted py-3 sm:py-4 shadow-2xl border-b border-white/5" 
            : "py-6 sm:py-8 bg-transparent"
        }`}
      >
        <div className="container-custom flex items-center justify-between">
          {/* Brand/Logo Area */}
          <div className="flex items-center gap-3 xs:gap-4 relative z-[110]">
            {/* Desktop Logo (Visible only on lg+) */}
            <Link href="/home" className="hidden lg:flex items-center gap-3 group">
              <div className="relative w-8 h-8 xs:w-10 xs:h-10 sm:w-14 sm:h-14">
                <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <img 
                  src="/logo/Bold_Sans-Serif_Logo_with_Minimalist_Icon__2_-removebg-preview.png" 
                  alt="Devtoon Logo" 
                  className="w-full h-full object-contain relative z-10 transition-all duration-500 group-hover:scale-110"
                />
              </div>
            </Link>

            {/* Brand Name (Always on the Left) */}
            <Link href="/home" className="flex items-center">
              <span className="font-black text-white text-base xs:text-lg sm:text-2xl tracking-[0.1em] uppercase italic">
                Devtoon
              </span>
            </Link>
          </div>

          {/* Nav List (Desktop Only) */}
          <nav className="hidden lg:flex items-center gap-2 bg-white/[0.03] backdrop-blur-3xl rounded-full px-2 py-2 border border-white/5 shadow-2xl">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative group px-6 py-3"
              >
                <motion.span
                  whileHover={{ y: -1 }}
                  className={`nav-link block relative z-10 ${pathname === link.href ? 'text-white' : 'text-white/60 hover:text-white'}`}
                >
                  {link.label}
                </motion.span>
                {pathname === link.href && (
                  <motion.div
                    layoutId="nav-active"
                    className="absolute inset-0 bg-white/5 rounded-full border border-white/10"
                  />
                )}
                <div className="absolute inset-0 bg-white/5 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 -z-10" />
              </Link>
            ))}
          </nav>

          {/* Primary CTA & Mobile Logo Trigger */}
          <div className="flex items-center gap-4 xs:gap-6 relative z-[110]">
            <Link
              href="/contact"
              className="hidden md:inline-flex btn-clay-primary px-8 lg:px-10 py-3 lg:py-4 rounded-full font-black text-[10px] lg:text-[11px] uppercase tracking-[0.3em] group shadow-glow shadow-primary/20"
            >
              LET'S TALK
              <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>

            {/* Mobile Logo Trigger (Visible only on mobile/tablet) */}
            <motion.button
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden relative w-10 h-10 xs:w-12 xs:h-12 flex items-center justify-center outline-none group bg-white/5 rounded-2xl border border-white/10"
            >
              <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <motion.img 
                src="/logo/Bold_Sans-Serif_Logo_with_Minimalist_Icon__2_-removebg-preview.png" 
                alt="Devtoon Logo" 
                className={`w-6 h-6 xs:w-8 xs:h-8 object-contain relative z-10 transition-all duration-500 ${mobileOpen ? 'brightness-125' : ''}`}
              />
              {mobileOpen && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="absolute -top-1 -right-1 w-5 h-5 bg-primary rounded-full flex items-center justify-center border border-white/20 z-20 shadow-lg"
                >
                  <X size={10} strokeWidth={4} className="text-white" />
                </motion.div>
              )}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 z-[120] bg-black/60 backdrop-blur-2xl lg:hidden"
            />
            <motion.div
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed top-0 right-0 bottom-0 w-[85%] max-w-sm z-[130] border-l lg:hidden flex flex-col p-6 sm:p-10 pt-24 sm:pt-32 bg-[#02040A] border-white/5 shadow-2xl"
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
                      className={`block px-6 sm:px-8 py-4 sm:py-6 rounded-[--radius] text-[9px] sm:text-[10px] font-black uppercase tracking-[0.4em] transition-all border border-transparent ${pathname === link.href
                          ? "bg-white/5 text-white shadow-2xl border-white/10"
                          : "text-white/40 hover:bg-white/5 hover:text-white"
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
                  className="mt-8 pt-8 border-t border-white/5"
                >
                  <Link
                    href="/contact"
                    className="btn-clay-primary w-full py-6 sm:py-8 text-[11px] sm:text-xs font-black uppercase tracking-[0.4em] rounded-[--radius] shadow-2xl h-16 sm:h-24 flex items-center justify-center"
                  >
                    INITIALIZE PROJECT
                  </Link>
                </motion.div>
              </div>

              <div className="mt-auto">
                <p className="text-[10px] font-black text-white/20 uppercase tracking-[0.4em] text-center">
                  Precision Engineering // Devtoon
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
