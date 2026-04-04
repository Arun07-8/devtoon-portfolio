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
              <div className="mt-20">
                <Link
                  href="/contact"
                  className="btn-clay btn-clay-primary w-full sm:w-auto text-xs"
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
              <div className="clay-industrial p-12 md:p-16 lg:p-20 border-border bg-card relative overflow-hidden h-full flex flex-col justify-center">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/5 to-transparent pointer-events-none" />
                
                {/* Brand Row */}
                <div className="flex items-center gap-6 mb-12">
                   <div className="relative w-16 h-16">
                      <img 
                        src="/logo/Bold_Sans-Serif_Logo_with_Minimalist_Icon__2_-removebg-preview.png" 
                        alt="Devtoon Logo" 
                        className="w-full h-full object-contain"
                      />
                   </div>
                   <h3 className="text-3xl font-black text-foreground tracking-tighter uppercase italic text-wrap">Devtoon <span className="text-primary italic">Technologies</span></h3>
                </div>

                <h3 className="text-[10px] font-black tracking-[0.5em] text-primary uppercase mb-10">Strategic // Intelligence</h3>
                <p className="text-xl md:text-2xl font-black text-foreground uppercase tracking-tighter leading-tight italic mb-8">
                  "WE BELIEVE EVERY ENTERPRISE DESERVES A DIGITAL FOOTPRINT THAT IS AS HIGH-PERFORMING AS ITS PHYSICAL LEADERSHIP."
                </p>
                <div className="space-y-6 text-muted-foreground font-medium italic opacity-80 border-t border-border pt-10">
                   <p>Our mission is to bridge the technical gap between vision and execution. We architect systems that maintain absolute stability under extreme load.</p>
                   <p>Through surgical precision in code and high-stakes UI logic, we transform technology into your primary market lever.</p>
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


      {/* Strategic Roadmap - Technical Sector */}
      <section className="section-padding bg-[#02040A] text-white w-full overflow-hidden border-t border-white/5">
        <div className="container-custom">
          <div className="mb-24 flex flex-col md:flex-row justify-between items-end gap-16">
            <div className="max-w-2xl">
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-primary mb-8 block font-mono">The Execution // 03</span>
              <h2 className="text-fluid-h2 font-black tracking-tighter uppercase leading-none italic text-white">
                MISSION <br /> <span className="text-white/30 italic">ROADMAP.</span>
              </h2>
            </div>
            <p className="text-lg md:text-xl font-medium text-white/40 max-w-sm italic mb-4">
              "Every peak is achieved through a rigorous, proven methodology. We don't guess; we engineer outcomes."
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12 relative">
             {[
               { step: "01", title: "Signal Audit", desc: "Exposing technical debt and identifying high-impact leverage points." },
               { step: "02", title: "Blueprint", desc: "Rigorous logic documentation and multi-tenant system flow design." },
               { step: "03", title: "Sprint Sync", desc: "High-stakes development with extreme frequency performance audits." },
               { step: "04", title: "Scale Up", desc: "Continuous technical evolution and production-ready server scaling." }
             ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="clay-industrial p-12 bg-[#0A1221] border-white/5 hover:border-primary/20 transition-all duration-700 h-full flex flex-col"
                >
                  <span className="text-5xl font-black text-primary/10 mb-10 block font-mono italic tracking-tighter">{item.step}</span>
                  <h4 className="text-xl md:text-2xl font-black uppercase tracking-tighter mb-6 italic text-white">{item.title}</h4>
                  <p className="text-sm md:text-base font-medium text-white/40 leading-relaxed italic flex-grow">"{item.desc}"</p>
                  
                  <div className="mt-10 h-1 w-full bg-white/[0.02] relative overflow-hidden rounded-full">
                     <motion.div 
                       initial={{ x: "-100%" }}
                       whileInView={{ x: "0%" }}
                       viewport={{ once: true }}
                       transition={{ duration: 1.5, delay: i * 0.2 + 0.5 }}
                       className="absolute inset-0 bg-primary/40"
                     />
                  </div>
                </motion.div>
             ))}
          </div>
        </div>
      </section>

      {/* Vision Statement */}
      <section className="section-padding relative overflow-hidden bg-secondary text-foreground w-full">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto text-center relative z-10 w-full mb-32">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-fluid-h2 font-black tracking-tighter leading-[0.8] uppercase mb-16">
                ARCHITECTING <br /> <span className="text-primary italic">THE FUTURE.</span>
              </h2>
              <p className="text-fluid-body text-foreground/60 font-medium leading-relaxed italic max-w-4xl mx-auto">
                "We believe every enterprise deserves a digital footprint that is as high-performing as its physical leadership. Our mission is to bridge that technical gap."
              </p>
            </motion.div>
          </div>

          {/* New More Options Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-32">
             {[
               { title: "Absolute Scale", desc: "Building systems that don't just grow, but evolve with your enterprise needs." },
               { title: "Surgical Code", desc: "Zero bloat, mission-critical engineering for maximum technical leverage." },
               { title: "Logic First", desc: "Design driven by conversion psychology and technical architecture." }
             ].map((item, i) => (
               <motion.div
                 key={i}
                 initial={{ opacity: 0, scale: 0.95 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 viewport={{ once: true }}
                 transition={{ delay: i * 0.1 }}
                 className="p-10 border border-foreground/5 bg-background/50 rounded-3xl"
               >
                 <h4 className="text-xl font-black uppercase tracking-tighter mb-4 italic">{item.title}</h4>
                 <p className="text-sm font-medium text-foreground/60 leading-relaxed italic">"{item.desc}"</p>
               </motion.div>
             ))}
          </div>

          <div className="flex justify-center">
            <Link href="/contact" className="btn-clay btn-clay-primary w-full sm:w-auto px-16 md:px-20 py-8 text-xs">
              LET'S TALK BUSINESS
            </Link>
          </div>
        </div>

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[50rem] font-black text-white/5 select-none pointer-events-none uppercase leading-none">
            DT
          </div>
      </section>
    </main>
  );
}
