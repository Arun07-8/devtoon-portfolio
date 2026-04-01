"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const allProjects = [
  { title: "Analytics Dashboard", category: "Web", description: "Real-time analytics with interactive charts and team collaboration features.", tech: ["Next-js", "TypeScript", "tailwind", "firebase"], url: "/Screenshot 2026-03-24 120137.png", link: "https://analytics-dashboard-five-zeta.vercel.app/dashboard" },
  { title: "3D Product Configurator", category: "3D", description: "Interactive product viewer with real-time customization and AR preview.", tech: ["Three.js", "WebGL", "React", "GLTF"], url: "/image.png", link: "https://tile-app-kappa.vercel.app/visualization?room=living_room" },
  { title: "Fleet Management System", category: "SaaS", description: "End-to-end fleet tracking, automated reporting, and driver management.", tech: ["Next.js", "PostgreSQL", "Maps API"] },
  { title: "E-Commerce Platform", category: "Web", description: "High-conversion online store with advanced filtering and payment integration.", tech: ["React", "Stripe", "Tailwind CSS"] },
  { title: "Architectural Visualizer", category: "3D", description: "Photorealistic 3D walkthroughs for real estate and architecture firms.", tech: ["Three.js", "React Three Fiber", "Blender"] },
  { title: "Inventory Management Tool", category: "SaaS", description: "Smart inventory tracking with barcode scanning and automated alerts.", tech: ["React", "Node.js", "MongoDB"] },
  { title: "Interactive Portfolio", category: "Web", description: "Award-winning creative portfolio with smooth animations and transitions.", tech: ["Framer Motion", "React", "GSAP"] },
  { title: "VR Showroom", category: "3D", description: "Virtual reality product showcase accessible from any web browser.", tech: ["WebXR", "Three.js", "A-Frame"] },
  { title: "HR Management Dashboard", category: "SaaS", description: "Complete HR platform with employee onboarding, leave management, and analytics.", tech: ["React", "Supabase", "Charts"] },
];

const filters = ["All", "Web", "3D", "SaaS"];

export default function Projects() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? allProjects : allProjects.filter((p) => p.category === active);

  return (
    <main className="bg-background min-h-screen">
      {/* Header */}
      <section className="pt-40 lg:pt-56 pb-20 relative overflow-hidden bg-background">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12">
            <div className="max-w-2xl">
              <motion.span 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-xs font-bold uppercase tracking-[0.4em] text-accent font-display mb-6 block"
              >
                Our Showcase
              </motion.span>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-6xl md:text-8xl font-display font-bold text-foreground tracking-tighter leading-[0.9]"
              >
                Case <br /> <span className="gradient-text">Studies</span>
              </motion.h1>
              <motion.p 
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ delay: 0.2 }}
                 className="text-xl text-foreground/50 mt-10 font-medium leading-relaxed"
              >
                A curated selection of our most challenging and impactful digital projects.
              </motion.p>
            </div>
            
            {/* Filter Pill */}
            <motion.div 
               initial={{ opacity: 0, scale: 0.9 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ delay: 0.3 }}
               className="flex flex-wrap gap-2 glass p-2 rounded-full border-border/40"
            >
              {filters.map((f) => (
                <button
                  key={f}
                  onClick={() => setActive(f)}
                  className={`px-8 py-3.5 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${
                    active === f 
                    ? "bg-accent text-white shadow-xl shadow-accent/20" 
                    : "text-foreground/40 hover:text-foreground hover:bg-foreground/[0.03]"
                  }`}
                >
                  {f}
                </button>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="pb-32 lg:pb-48">
        <div className="container-custom">
          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            <AnimatePresence mode='popLayout'>
              {filtered.map((project, i) => (
                <motion.div
                  key={project.title}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.6, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="clay flex flex-col h-full rounded-[3rem] p-1.5 transition-all duration-500 hover:shadow-2xl hover:shadow-accent/5 group border-border/40 overflow-hidden">
                    <div className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden bg-secondary">
                      {project.url ? (
                        <img
                          src={project.url}
                          alt={project.title}
                          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-accent/5 to-transparent">
                          <span className="text-[10px] font-black text-accent/20 uppercase tracking-widest">Preview Unavailable</span>
                        </div>
                      )}
                      <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm pointer-events-none">
                         <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-accent shadow-2xl scale-50 group-hover:scale-100 transition-transform">
                            <ArrowUpRight size={24} />
                         </div>
                      </div>
                      {project.link && (
                         <a 
                           href={project.link} 
                           target="_blank" 
                           rel="noopener noreferrer" 
                           className="absolute inset-0 z-10"
                         />
                      )}
                    </div>
                    
                    <div className="p-10 flex flex-col flex-grow">
                      <span className="text-[10px] font-black text-accent uppercase tracking-[0.2em] mb-4 block">{project.category}</span>
                      <h3 className="text-3xl font-display font-bold text-foreground mb-4 tracking-tight leading-tight transition-colors group-hover:text-accent">{project.title}</h3>
                      <p className="text-base text-foreground/50 mb-10 font-medium leading-relaxed">{project.description}</p>
                      
                      <div className="mt-auto flex flex-wrap gap-2">
                        {project.tech.map((t) => (
                          <span key={t} className="text-[9px] font-bold text-foreground/30 uppercase tracking-widest bg-foreground/[0.03] px-3 py-1.5 rounded-full border border-border/20 transition-colors group-hover:border-accent/20">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
