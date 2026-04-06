"use client";

import { motion } from "framer-motion";
import { Globe, Palette, Box, Zap, ArrowRight, Shield, Cpu, Code2, Layers } from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Globe,
    title: "Scalable Web Architecture",
    description: "Enterprise-grade engines designed for extreme load and multi-tenant complexity. We build high-stakes digital products.",
    features: ["Next.js & React Mastery", "Custom SaaS Infrastructure", "Edge Optimization", "Strategic Technical Debt Reduction"],
    benefit: "Absolute performance at theoretical scale.",
    id: "01"
  },
  {
    icon: Palette,
    title: "Precision UI/Engineering",
    description: "Design is a technical problem. We solve it through deep psychological research and pixel-perfect tactical implementation.",
    features: ["Interface Logic Design", "Design Engineering Systems", "Psychological Prototyping", "Consistent Component Ecology"],
    benefit: "Superior UX that drives massive LTV.",
    id: "02"
  },
  {
    icon: Layers,
    title: "3D Digital Twins / AR",
    description: "High-fidelity spatial computing and immersive product experiences that bridge the digital-physical divide in real-time.",
    features: ["WebGL & Three.js Specialization", "Interactive Product Configurators", "Browser-Based Rendering", "WebXR Ecosystems"],
    benefit: "300% Engagement increase vs. 2D.",
    id: "03"
  },
  {
    icon: Cpu,
    title: "Logic Engines & AI",
    description: "The intellectual core of your system. Robust, event-driven backends and precision-tuned LLM implementations.",
    features: ["Distributed Systems (Node/Rust)", "Custom AI Intelligence Layers", "Zero-Latency Logic Flows", "Neural Process Automation"],
    benefit: "Mission-critical reliability & edge.",
    id: "04"
  }
];

export default function ServicesPage() {
  return (
    <main className="w-full">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 lg:pt-40 lg:pb-32 border-b border-border/10 overflow-hidden">
        <div className="container-custom relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "circOut" }}
            className="max-w-5xl"
          >
            <span className="text-[9px] md:text-xs font-black uppercase tracking-[0.4em] text-primary mb-6 sm:mb-8 block">Services // Capabilities</span>
            <h1 className="text-fluid-h1 font-black text-foreground leading-[0.85] tracking-tighter mb-8 sm:mb-12 uppercase">
              TECHNICAL <br />
              <span className="text-muted-foreground">LEVERAGE.</span>
            </h1>
            <p className="text-fluid-body text-muted-foreground font-medium leading-relaxed max-w-2xl italic">
              We provide the engineering horsepower needed to dominate your sector. Outcome-focused, precision-driven systems.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="section-padding w-full overflow-hidden">
        <div className="container-custom">
          <div className="space-y-24 sm:space-y-32 md:space-y-48 lg:space-y-64">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`flex flex-col lg:flex-row gap-12 sm:gap-16 lg:gap-24 items-center ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className="w-full lg:w-1/2">
                  <div className="flex items-center gap-4 sm:gap-6 mb-6 sm:mb-10 md:mb-12">
                    <span className="text-4xl md:text-5xl lg:text-6xl font-black text-primary/20 leading-none">{service.id}</span>
                    <div className="w-14 h-14 md:w-20 md:h-20 rounded-2xl bg-foreground text-background flex items-center justify-center shadow-2xl">
                      <service.icon size={24} className="md:w-[28px] md:h-[28px]" />
                    </div>
                  </div>
                  <h2 className="text-2xl md:text-5xl lg:text-6xl font-black text-foreground mb-6 sm:mb-8 tracking-tight uppercase leading-tight">{service.title}</h2>
                  <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-12 italic font-medium">
                    "{service.description}"
                  </p>
                  <div className="grid gap-6">
                    {service.features.map(feature => (
                      <div key={feature} className="flex items-center gap-4 group">
                        <div className="w-2 h-2 rounded-full bg-primary transition-transform group-hover:scale-150" />
                        <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-foreground/70">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="w-full lg:w-1/2">
                  <div className="clay-industrial p-6 xs:p-8 sm:p-12 md:p-16 lg:p-20 relative overflow-hidden group border-primary/5 rounded-[2rem] sm:rounded-[3rem]">
                    <div className="absolute top-0 right-0 p-8 sm:p-12 opacity-[0.05] group-hover:opacity-[0.1] transition-opacity hover:rotate-12 duration-1000">
                      <service.icon size={180} className="md:w-[240px] md:h-[240px]" strokeWidth={0.5} />
                    </div>
                    <span className="text-[9px] font-black uppercase tracking-[0.4em] text-primary mb-4 sm:mb-6 block">Strategic Outcome</span>
                    <p className="text-xl md:text-4xl lg:text-5xl font-black text-foreground leading-[1.1] tracking-tighter mb-10 sm:mb-16 uppercase">
                      {service.benefit}
                    </p>
                    <Link href="/contact" className="btn-clay btn-clay-primary w-full py-5 xs:py-6 sm:py-8 text-[10px] xs:text-xs h-14 xs:h-16 sm:h-20 flex items-center justify-center">
                      INQUIRE ABOUT THIS SERVICE
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Layer */}
      <section className="section-padding pt-0 w-full overflow-hidden">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="clay-industrial p-12 md:p-24 lg:p-32 bg-foreground text-background text-center relative overflow-hidden w-full"
          >
            <div className="relative z-10 flex flex-col items-center">
              <h2 className="text-fluid-h2 font-black uppercase leading-[0.85] tracking-tighter mb-12">
                NEED A <br />
                <span className="text-primary">ROADMAP?</span>
              </h2>
              <p className="text-fluid-body text-white/60 max-w-xl mb-16 font-medium italic">
                We offer deep-dive technical audits and strategy sessions to align your architecture with your vision.
              </p>
              <Link href="/contact" className="btn-clay bg-background text-foreground w-full sm:w-auto px-10 xs:px-16 py-6 xs:py-8 border-white/10 text-[11px] xs:text-sm h-16 xs:h-20 md:h-24 flex items-center justify-center">
                START STRATEGY SESSION
              </Link>
            </div>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[40vw] font-black text-white/5 select-none pointer-events-none uppercase leading-none whitespace-nowrap">
              PLAN
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
