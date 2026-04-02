"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Code2, Cpu, Globe, Boxes } from "lucide-react";
import Link from "next/link";

const allProjects = [
  { 
    title: "EcoSmart IoT Network", 
    category: "SaaS", 
    description: "A centralized dashboard for industrial energy monitoring, featuring real-time telemetry and AI-driven cost forecasting.", 
    tech: ["Next.js", "Three.js", "PostgreSQL"],
    icon: Globe,
    outcome: "-30% Operational Costs"
  },
  { 
    title: "Nova Retail Engine", 
    category: "Web", 
    description: "A headless commerce backend designed for extreme holiday traffic spikes and instantaneous order processing.", 
    tech: ["Node.js", "Redis", "AWS"],
    icon: Cpu,
    outcome: "Zero Downtime Peak"
  },
  { 
    title: "Aura AI Health", 
    category: "Web", 
    description: "An AI-powered wellness assistant that integrates with wearable biometrics for personalized health guidance.", 
    tech: ["React Native", "Python", "Firebase"],
    icon: Code2,
    outcome: "+78% User Engagement"
  },
  { 
    title: "3D Product Configurator", 
    category: "3D", 
    description: "Interactive product viewer with real-time customization and AR preview for automotive retail.", 
    tech: ["Three.js", "WebGL", "React"],
    icon: Boxes,
    outcome: "+45% Store Conversion"
  },
  { 
    title: "Fleet Management", 
    category: "SaaS", 
    description: "End-to-end fleet tracking and automated reporting for logistics enterprise.", 
    tech: ["Next.js", "Supabase", "Maps"],
    icon: Globe,
    outcome: "Real-time Precision"
  },
  { 
    title: "VR Showroom", 
    category: "3D", 
    description: "Virtual reality product showcase accessible from any web browser for luxury brands.", 
    tech: ["WebXR", "Three.js", "Blender"],
    icon: Boxes,
    outcome: "Immersive Commerce"
  },
];

const filters = ["All", "Web", "3D", "SaaS"];

export default function Projects() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? allProjects : allProjects.filter((p) => p.category === active);

  return (
    <main className="w-full">
      {/* Header */}
      <section className="relative pt-32 pb-16 lg:pt-48 lg:pb-24 border-b border-border/10 overflow-hidden">
        <div className="container-custom relative z-10 w-full">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12">
            <div className="max-w-4xl">
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-[10px] md:text-xs font-black uppercase tracking-[0.4em] text-primary mb-6 block"
              >
                Case Archive // 01
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "circOut" }}
                className="text-fluid-h1 font-black text-foreground tracking-tighter leading-[0.85] uppercase"
              >
                PROVED <br /> 
                <span className="text-muted-foreground">MASTERY.</span>
              </motion.h1>
            </div>

            {/* Filter Pill */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-2 md:gap-3 p-2 rounded-3xl bg-secondary/30 border border-border/20 backdrop-blur-md w-fit"
            >
              {filters.map((f) => (
                <button
                  key={f}
                  onClick={() => setActive(f)}
                  className={`px-6 md:px-8 py-3 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-300 active:scale-95 ${active === f
                    ? "bg-foreground text-background shadow-lg"
                    : "text-muted-foreground hover:text-foreground hover:bg-white/5"
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
      <section className="section-padding w-full overflow-hidden">
        <div className="container-custom">
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            <AnimatePresence mode='popLayout'>
              {filtered.map((project, i) => (
                <motion.div
                  key={project.title}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.6, ease: "circOut" }}
                  className="clay-industrial p-8 md:p-12 flex flex-col h-full group border-primary/5"
                >
                   <div className="flex items-start justify-between mb-12">
                      <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-secondary flex items-center justify-center transition-all duration-500 group-hover:bg-primary group-hover:text-white group-hover:rotate-6 shadow-2xl">
                         <project.icon size={28} />
                      </div>
                      <div className="text-right">
                         <p className="text-[9px] font-black text-muted-foreground tracking-widest uppercase mb-1">Impact // Result</p>
                         <p className="font-black text-foreground text-base md:text-lg uppercase">{project.outcome}</p>
                      </div>
                   </div>

                   <span className="text-[10px] font-black text-primary tracking-[0.3em] mb-4 block uppercase leading-none">{project.category}</span>
                   <h3 className="text-3xl md:text-4xl lg:text-5xl font-black mb-8 uppercase leading-tight group-hover:text-primary transition-colors tracking-tighter">{project.title}</h3>
                   <p className="text-muted-foreground font-medium leading-relaxed mb-12 text-lg italic flex-grow">
                      "{project.description}"
                   </p>

                   <div className="mt-auto pt-8 border-t border-border/10 flex items-center gap-4">
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((t) => (
                          <span key={t} className="px-4 py-2 bg-secondary/50 rounded-full text-[9px] font-black tracking-widest uppercase border border-border/10 group-hover:border-primary/20 transition-colors">
                             {t}
                          </span>
                        ))}
                      </div>
                      <Link href="/contact" className="ml-auto w-12 h-12 md:w-14 md:h-14 rounded-full border border-border flex items-center justify-center transition-all hover:bg-primary hover:text-white hover:border-primary flex-shrink-0">
                         <ArrowUpRight size={20} />
                      </Link>
                   </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Engineering Philosophy CTA */}
      <section className="section-padding pt-0 w-full overflow-hidden">
         <div className="container-custom">
            <div className="clay-industrial p-12 md:p-24 lg:p-32 bg-foreground text-background relative overflow-hidden w-full">
               <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
                  <div>
                    <h2 className="text-fluid-h2 font-black uppercase leading-[0.9] tracking-tighter mb-8">Ready to be the <span className="text-primary font-black">Best</span>?</h2>
                    <p className="text-fluid-body text-white/60 font-medium leading-relaxed italic">
                       "We don't build generic features. We build specific technical leverage for market leaders."
                    </p>
                  </div>
                  <div className="flex justify-start lg:justify-end">
                    <Link href="/contact" className="btn-clay btn-clay-primary w-full sm:w-auto px-12 md:px-16 py-6 md:py-8 text-sm">
                       START A PROJECT
                    </Link>
                  </div>
               </div>
               
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[45rem] font-black text-white/5 select-none pointer-events-none uppercase leading-none">
                  BUILD
               </div>
            </div>
         </div>
      </section>
    </main>
  );
}
