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

export default function Projects() {
  return (
    <main className="w-full bg-background selection:bg-primary/30">
      {/* Header */}
      <section className="relative pt-32 pb-16 lg:pt-48 lg:pb-24 border-b border-border overflow-hidden">
        {/* Glow Background Elements */}
        <div className="radial-glow top-0 right-1/4 opacity-40" />
        
        <div className="container-custom relative z-10 w-full">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12">
            <div className="max-w-4xl">
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-[10px] md:text-xs font-black uppercase tracking-[0.4em] text-primary mb-8 block font-mono"
              >
                Case Archive // 01
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "circOut" }}
                className="text-fluid-h1 font-black text-foreground tracking-tighter leading-[0.85] uppercase italic text-wrap"
              >
                PROVED <br />
                <span className="text-muted-foreground italic">MASTERY.</span>
              </motion.h1>
            </div>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="section-padding w-full overflow-hidden">
        <div className="container-custom">
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            <AnimatePresence mode='popLayout'>
              {allProjects.map((project, i) => (
                <motion.div
                  key={project.title}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className="clay-industrial p-10 md:p-12 lg:p-16 flex flex-col h-full group border-border bg-card hover:border-primary/20 transition-all duration-700"
                >
                  <div className="flex items-start justify-between mb-12">
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-3xl bg-secondary flex items-center justify-center transition-all duration-700 group-hover:bg-primary group-hover:text-white group-hover:rotate-12 border border-border shadow-2xl">
                      <project.icon size={28} strokeWidth={1} />
                    </div>
                    <div className="text-right">
                      <p className="text-[9px] font-black text-primary tracking-[0.3em] uppercase mb-1 font-mono">Impact // Result</p>
                      <p className="font-black text-foreground text-base md:text-2xl uppercase italic tracking-tighter">{project.outcome}</p>
                    </div>
                  </div>

                  <span className="text-[10px] font-black text-primary tracking-[0.3em] mb-4 block uppercase leading-none font-mono">{project.category}</span>
                  <h3 className="text-3xl md:text-5xl font-black mb-8 uppercase leading-tight group-hover:text-primary transition-colors tracking-tighter italic text-wrap">{project.title}</h3>
                  <p className="text-muted-foreground font-medium leading-relaxed mb-12 text-lg italic flex-grow opacity-80">
                    "{project.description}"
                  </p>

                  <div className="mt-auto pt-10 border-t border-border/10 flex items-center gap-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <span key={t} className="px-5 py-2 bg-foreground/[0.03] rounded-full text-[9px] font-black tracking-widest uppercase border border-border group-hover:border-primary/20 transition-colors text-muted-foreground">
                          {t}
                        </span>
                      ))}
                    </div>
                    <Link href="/contact" className="ml-auto w-14 h-14 md:w-16 md:h-16 rounded-full border border-border flex items-center justify-center transition-all hover:bg-foreground hover:text-background hover:border-foreground flex-shrink-0 text-foreground">
                      <ArrowUpRight size={22} />
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
          <div className="clay-industrial p-12 md:p-24 lg:p-32 bg-card border-border relative overflow-hidden w-full rounded-[4rem] shadow-glow-blue">
            <div className="radial-glow top-0 left-1/2 -translate-x-1/2 opacity-20" />
            <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-fluid-h2 font-black uppercase leading-[0.9] tracking-tighter mb-10 text-foreground italic">READY TO BE <br /><span className="text-primary italic">THE BEST.</span></h2>
                <p className="text-fluid-body text-muted-foreground font-medium leading-relaxed italic opacity-80">
                  "We don't build generic features. We build specific technical leverage for market leaders."
                </p>
              </div>
              <div className="flex justify-start lg:justify-end">
                <Link href="/contact" className="btn-clay btn-clay-primary w-full sm:w-auto px-16 md:px-20 py-8 text-xs h-24 flex items-center justify-center shadow-xl">
                  START A PROJECT
                </Link>
              </div>
            </div>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[45rem] font-black text-foreground/[0.03] select-none pointer-events-none uppercase leading-none italic">
              ENGINE
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
