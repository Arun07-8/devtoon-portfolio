"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

const links = [
  { href: "/#services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "ShowCase" },
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
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${scrolled
            ? "bg-background/80 border-b border-border py-3 backdrop-blur-lg shadow-sm"
            : "py-6 bg-transparent"
          }`}
      >
        <div className="container-custom flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group relative z-10 transition-transform active:scale-95">
            <div className="w-8 h-8 bg-foreground rounded flex items-center justify-center transition-transform group-hover:rotate-6">
              <span className="font-bold text-background text-sm tracking-tighter">D</span>
            </div>
            <span className="font-bold text-foreground text-xl tracking-tighter uppercase">
              Devtoon
            </span>
          </Link>

          {/* Desktop Nav - Centered */}
          <div className="hidden lg:flex items-center gap-1 bg-muted/30 rounded-full px-1.5 py-1.5 border border-border/40">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-5 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all ${(pathname === link.href || (link.href.startsWith("/#") && pathname === "/"))
                    ? "text-background bg-foreground"
                    : "text-muted-foreground hover:text-foreground"
                  }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4 relative z-10">
            <Link
              href="/contact"
              className="hidden md:inline-flex items-center gap-2 bg-foreground text-background px-6 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all hover:opacity-90 active:scale-95 group"
            >
              Start Project
              <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden w-10 h-10 flex items-center justify-center rounded-full border border-border bg-background transition-transform active:scale-90"
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.98, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: -10 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden absolute top-[calc(100%+8px)] left-4 right-4 p-4 rounded-2xl bg-card border border-border shadow-xl overflow-hidden"
            >
              <div className="flex flex-col gap-1">
                {links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-6 py-4 rounded-xl text-xs font-bold uppercase tracking-widest transition-all ${(pathname === link.href || (link.href.startsWith("/#") && pathname === "/"))
                        ? "bg-foreground text-background"
                        : "text-muted-foreground hover:bg-muted/50"
                      }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="h-px bg-border my-2" />
                <Link
                  href="/contact"
                  className="bg-foreground text-background px-6 py-4 rounded-xl text-xs font-bold uppercase tracking-widest text-center"
                >
                  Start Project
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
            className="fixed inset-0 z-[90] bg-foreground/5 backdrop-blur-sm lg:hidden"
          />
        )}
      </AnimatePresence>
    </>
  );
};
