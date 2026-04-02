"use client";

import { motion, Variants } from "framer-motion";
import { Code, Palette, Lightbulb, Target, ArrowRight, Shield, Cpu, Globe, Boxes } from "lucide-react";
import Link from "next/link";

const toolkit = [
  { icon: Code, label: "Core Engineering", desc: "React, Next.js, and TypeScript architectures built for high-stakes performance." },
  { icon: Boxes, label: "Spatial Tech", desc: "Three.js and WebGL implementations for immersive, high-fidelity 3D experiences." },
  { icon: Palette, label: "Logic Design", desc: "Outcome-driven UI/UX research focused on conversion and user psychology." },
  { icon: Cpu, label: "Neural Systems", desc: "Integrating custom LLMs and automated data pipelines into business workflows." },
];

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "circOut" } },
};

export default function About() {
  return (
    <main className="w-full">
      {/* Narrative Hero */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 border-b border-border/10 overflow-hidden">
        <div className="container-custom relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div
              initial="hidden"
              animate="show"
              variants={fadeInUp}
              className="w-full"
            >
              <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.4em] text-primary mb-8 block">Our Narrative // Core</span>
              <h1 className="text-fluid-h1 font-black text-foreground leading-[0.8] tracking-tighter uppercase mb-12">
                BUILT ON <br /> <span className="text-muted-foreground">PRECISION.</span>
              </h1>
              <div className="space-y-8 text-fluid-body text-muted-foreground font-medium leading-relaxed max-w-2xl italic">
                <p>
                  Devtoon Technologies was founded on a singular technical mandate: digital products should be as powerful as they are beautiful.
                </p>
                <p>
                  We are a boutique engineering agency specialized in high-performance digital environments. We don't just build software; we engineer competitive advantage for global brands.
                </p>
                <Link
                  href="/contact"
                  className="btn-clay btn-clay-primary mt-12 w-full sm:w-auto text-xs"
                >
                  START THE ENGINE <ArrowRight size={18} className="ml-3" />
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2, ease: "circOut" }}
              className="w-full"
            >
              <div className="clay-industrial p-12 md:p-16 lg:p-24 border-primary/10 relative overflow-hidden bg-foreground text-background">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/10 to-transparent pointer-events-none" />
                <div className="w-16 h-16 md:w-20 md:h-20 bg-primary rounded-2xl flex items-center justify-center mb-12 shadow-2xl">
                  <span className="text-3xl font-black text-white">D</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-black text-white tracking-tighter uppercase mb-2">Devtoon</h3>
                <p className="text-white/40 font-black uppercase text-[10px] tracking-[0.3em]">Est. 2022 · Global Agency</p>

                <div className="grid grid-cols-2 gap-8 mt-16">
                   {[["50+", "Projects"], ["98%", "Retention"]].map(([num, label]) => (
                    <div key={label} className="border-t border-white/10 pt-6">
                      <p className="font-black text-3xl md:text-4xl text-white tracking-tighter mb-1 uppercase">{num}</p>
                      <p className="text-[9px] font-black text-primary uppercase tracking-widest">{label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Toolkit / Expertise */}
      <section className="section-padding bg-white/5 w-full overflow-hidden">
        <div className="container-custom">
          <div className="mb-24">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary mb-6 block">The Stack // 02</span>
            <h2 className="text-fluid-h2 font-black text-foreground tracking-tighter uppercase leading-none">
              Technical <span className="text-muted-foreground">Mastery.</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {toolkit.map((skill, i) => (
              <motion.div
                key={skill.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="clay-industrial p-10 hover:border-primary/20 group h-full flex flex-col"
              >
                <div className="w-14 h-14 md:w-16 md:h-16 bg-secondary flex items-center justify-center rounded-2xl mb-10 transition-all duration-500 group-hover:bg-primary group-hover:text-white group-hover:rotate-6">
                  <skill.icon size={28} strokeWidth={1.5} />
                </div>
                <h4 className="text-xl md:text-2xl font-black text-foreground mb-6 leading-tight tracking-tight uppercase">{skill.label}</h4>
                <p className="text-muted-foreground font-medium leading-relaxed italic text-base md:text-lg flex-grow">"{skill.desc}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Statement */}
      <section className="section-padding relative overflow-hidden bg-foreground text-background w-full">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto text-center relative z-10 w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-fluid-h2 font-black tracking-tighter leading-[0.8] uppercase mb-16">
                ARCHITECTING <br /> <span className="text-primary">THE FUTURE.</span>
              </h2>
              <p className="text-fluid-body text-white/60 font-medium leading-relaxed italic max-w-4xl mx-auto">
                "We believe every enterprise deserves a digital footprint that is as high-performing as its physical leadership. Our mission is to bridge that technical gap."
              </p>
              
              <div className="mt-20 flex justify-center">
                 <Link href="/contact" className="btn-clay bg-background text-foreground w-full sm:w-auto px-16 md:px-20 py-8 text-sm">
                    LET'S TALK BUSINESS
                 </Link>
              </div>
            </motion.div>
          </div>
          
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[50rem] font-black text-white/5 select-none pointer-events-none uppercase leading-none">
             DT
          </div>
        </div>
      </section>
    </main>
  );
}
