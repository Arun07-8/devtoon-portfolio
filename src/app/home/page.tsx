"use client";

import { motion, Variants } from "framer-motion";
import {
  ArrowUpRight,
  Globe,
  Palette,
  ArrowRight,
  Code2,
  Cpu,
} from "lucide-react";
import { FAQSection } from "@/components/FAQSection";

// Animation Variants for simple non-flicker reveals
const staggerContainer: Variants = {
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const services = [
  {
    icon: Globe,
    title: "Scalable Web Architecture",
    description: "Enterprise-grade engines and complex SaaS ecosystems designed for hyper-scale and reliability.",
    outcome: "Zero-latency reliability.",
  },
  {
    icon: Palette,
    title: "Precision Engineering",
    description: "Deep psychological interface design and pixel-perfect technical implementation for market leaders.",
    outcome: "98% User Sat Score.",
  },
  {
    icon: Cpu,
    title: "Intelligence Layers",
    description: "Integrating custom LLMs and automated data pipelines into secure business workflows.",
    outcome: "40% Overhead Reduction.",
  }
];

export default function Home() {
  return (
    <main className="w-full bg-background selection:bg-primary/30">
      {/* Hero Section - Solid Render No Blink */}
      <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center pt-40 pb-20 overflow-hidden px-6 lg:px-0">
        {/* Ambient Glows */}
        <div className="radial-glow top-0 left-1/4" />
        <div className="radial-glow bottom-0 right-1/4 opacity-40" />

        <div className="container-custom relative z-10 text-center">
          <motion.div
            variants={staggerContainer}
            initial="show"
            animate="show"
            className="flex flex-col items-center"
          >
            <motion.div variants={fadeInUp} className="mb-12">
              <span className="magnetic-pill inline-flex items-center gap-4 py-3 px-8 border border-white/10 bg-white/5 backdrop-blur-3xl shadow-2xl">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
                </span>
                <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.4em] text-white/50 font-mono">
                  Precision Systems Agency // Devtoon
                </span>
              </span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-fluid-h1 font-black leading-[0.8] tracking-tighter mb-16 uppercase italic text-white text-wrap"
            >
              WE ARCHITECT <br />
              <span className="gradient-text tracking-[-0.05em] italic">DIGITAL PEAK.</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-fluid-body text-white/60 max-w-4xl font-medium leading-relaxed mb-16 italic opacity-80"
            >
              "Generic solutions are for generic problems. We architect systems that dominate their specific technical niche through performance and technical excellence."
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-wrap items-center justify-center gap-6 lg:gap-10">
              <a href="/contact" className="btn-clay btn-clay-primary px-12 md:px-16 py-8 h-20 md:h-24 flex items-center justify-center text-xs shadow-glow shadow-primary/20">
                INITIALIZE PROJECT <ArrowUpRight size={18} className="ml-4" />
              </a>
              <a href="/projects" className="btn-clay btn-clay-secondary px-12 md:px-16 py-8 h-20 md:h-24 flex items-center justify-center text-xs text-white border-white/10 font-black uppercase tracking-[0.3em]">
                THE ARCHIVE
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Floating Brand Mark */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 hidden lg:block opacity-5 pointer-events-none">
          <div className="text-[35rem] font-black text-white select-none italic tracking-tighter uppercase">DT</div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section id="services" className="section-padding relative w-full overflow-hidden border-t border-white/5">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-32 md:mb-48 gap-16">
            <div className="max-w-4xl">
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-primary mb-10 block font-mono">Engineering // Subsystems</span>
              <h2 className="text-fluid-h2 leading-[0.85] tracking-tighter uppercase italic text-white text-wrap">
                TECHNICAL <br />
                <span className="text-white/40 italic">LEVERAGE.</span>
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="clay-industrial p-12 md:p-16 flex flex-col h-full bg-card border-white/5 hover:border-primary/20 transition-all duration-700 group"
              >
                <div className="flex items-start justify-between mb-16">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-3xl bg-white/[0.03] border border-white/10 flex items-center justify-center transition-all duration-700 group-hover:bg-primary group-hover:text-white">
                    <service.icon size={32} strokeWidth={1} className="text-primary transition-colors group-hover:text-white" />
                  </div>
                  <span className="text-[10px] font-black text-white/10 tracking-[0.4em] font-mono">0{i + 1} // ARCH</span>
                </div>

                <h3 className="text-3xl md:text-4xl font-black mb-8 uppercase tracking-tighter italic leading-none text-white text-wrap">{service.title}</h3>
                <p className="text-white/40 leading-relaxed mb-12 text-lg italic font-medium flex-grow">
                  "{service.description}"
                </p>

                <div className="pt-10 border-t border-white/5 flex items-center justify-between mt-auto">
                  <div>
                    <p className="text-[9px] font-black text-primary uppercase tracking-[0.3em] mb-2 font-mono">Outcome</p>
                    <p className="font-bold text-white text-base md:text-xl italic">{service.outcome}</p>
                  </div>
                  <a href="/contact" className="w-14 h-14 md:w-16 md:h-16 rounded-full border border-white/10 flex items-center justify-center transition-all hover:bg-white hover:text-black flex-shrink-0 text-white shadow-2xl">
                    <ArrowRight size={20} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Mastery Section */}
      <section id="projects" className="section-padding bg-background w-full overflow-hidden border-t border-white/5">
        <div className="container-custom">
          <div className="mb-24 md:mb-32 flex flex-col lg:flex-row lg:items-center justify-between gap-12">
            <div>
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-white/20 mb-8 block font-mono">Selected Work // Case Archive</span>
              <h2 className="text-fluid-h2 uppercase leading-[0.8] tracking-tighter text-white italic text-wrap">
                PROVED <br className="lg:hidden" />
                <span className="text-primary italic">MASTERY.</span>
              </h2>
            </div>
            <a href="/projects" className="btn-clay btn-clay-secondary rounded-2xl h-20 px-12 text-[10px] text-white border-white/10 font-black uppercase tracking-[0.3em] flex items-center justify-center shadow-xl">
              EXPLORE FULL ARCHIVE
            </a>
          </div>

          <div className="grid grid-cols-1 gap-24 lg:gap-40">
            {[
              {
                name: "NEURAL CORE",
                category: "AI INFRASTRUCTURE",
                desc: "High-stakes proprietary management systems for industrial neural node pipelines. Built for speed and absolute security.",
                tags: ["NEXT.JS", "PYTHON", "RUST"],
              },
              {
                name: "FOXON HUB",
                category: "BUSINESS ANALYTICS",
                desc: "Mission-critical real-time sales intelligence platform with granular access control and event sourcing.",
                tags: ["FIREBASE", "ZOD", "REACT"],
              }
            ].map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="group relative grid lg:grid-cols-2 gap-12 lg:gap-24 items-center"
              >
                <div className={`order-2 ${i % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                  <span className="text-[10px] font-black text-primary tracking-[0.4em] mb-6 block font-mono">{project.category}</span>
                  <h3 className="text-4xl md:text-7xl xl:text-8xl font-black mb-10 uppercase leading-[0.8] tracking-tighter italic text-white text-wrap group-hover:text-primary transition-colors duration-700">{project.name}</h3>
                  <p className="text-white/40 text-xl md:text-2xl leading-relaxed mb-12 italic font-medium">
                    "{project.desc}"
                  </p>
                  <div className="flex flex-wrap gap-4 mb-16">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-6 py-3 bg-white/[0.03] border border-white/10 rounded-full text-[10px] font-black tracking-widest text-white/50 font-mono shadow-inner">{tag}</span>
                    ))}
                  </div>
                  <a href="/projects" className="inline-flex items-center gap-6 text-[10px] font-black uppercase tracking-[0.4em] group/link text-primary transition-all hover:gap-10">
                    View Case Narrative <ArrowRight size={18} className="transition-transform group-hover/link:translate-x-3" />
                  </a>
                </div>
                <div className={`order-1 ${i % 2 === 0 ? 'lg:order-2' : 'lg:order-1'} aspect-[16/10] bg-card border border-white/5 rounded-[3rem] overflow-hidden relative group-hover:border-primary/40 transition-all duration-1000 shadow-2xl`}>
                   <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent z-10" />
                   <div className="w-full h-full flex items-center justify-center grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105 opacity-20">
                      <Code2 size={120} strokeWidth={0.5} className="text-white" />
                   </div>
                   <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-primary/10 text-9xl font-black italic select-none">STUDY</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Overlay */}
      <FAQSection />

      {/* Global Transition Hook */}
      <section className="section-padding bg-background w-full overflow-hidden border-t border-white/5">
        <div className="container-custom">
          <motion.div
            initial={{ scale: 0.98, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="p-12 md:p-32 lg:p-48 text-center bg-card border border-white/5 relative overflow-hidden w-full rounded-[4rem] shadow-glow-blue"
          >
            <div className="radial-glow top-0 left-1/2 -translate-x-1/2 opacity-20" />
            <div className="relative z-10">
              <h2 className="text-fluid-h2 font-black uppercase leading-[0.85] tracking-tighter text-white mb-16 italic text-wrap">
                READY TO <br />
                <span className="text-primary italic">TRANSCEND?</span>
              </h2>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 lg:gap-10">
                <a href="/contact" className="btn-clay btn-clay-primary w-full sm:w-auto h-24 px-16 md:px-20 text-xs shadow-2xl flex items-center justify-center">
                  START THE ENGINE
                </a>
                <a href="/services" className="btn-clay btn-clay-secondary w-full sm:w-auto h-24 px-16 md:px-20 text-xs shadow-2xl text-white border-white/5 flex items-center justify-center uppercase font-black tracking-[0.2em]">
                  CAPABILITIES
                </a>
              </div>
            </div>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[45rem] font-black text-white/5 select-none pointer-events-none uppercase leading-none italic">
               EXIT
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
