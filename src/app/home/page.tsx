"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { 
  ArrowUpRight, 
  Globe, 
  Box, 
  Zap, 
  Shield, 
  Palette, 
  ArrowRight,
  Code2,
  Cpu,
  Layers
} from "lucide-react";

// Animation Variants
const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "circOut" } },
};

const services = [
  {
    icon: Globe,
    title: "Scalable Web Architecture",
    description: "High-performance enterprise engines and complex SaaS ecosystems designed for infinite scale.",
    outcome: "Zero-latency performance at any scale.",
    color: "from-blue-500/20 to-cyan-500/20"
  },
  {
    icon: Palette,
    title: "Precision UI/Engineering",
    description: "Deep psychological interface design and pixel-perfect technical implementation.",
    outcome: "98% user satisfaction rating.",
    color: "from-purple-500/20 to-blue-500/20"
  },
  {
    icon: Cpu,
    title: "AI & Intelligence Layer",
    description: "Integrating custom LLMs and neural processing into existing business workflows.",
    outcome: "40% reduction in manual overhead.",
    color: "from-emerald-500/20 to-teal-500/20"
  },
  {
    icon: Layers,
    title: "3D Digital Twins",
    description: "Hyper-realistic 3D product configurators and immersive spatial experiences.",
    outcome: "Boost engagement by 300%.",
    color: "from-orange-500/20 to-red-500/20"
  }
];

export default function Home() {
  return (
    <main className="overflow-x-hidden pt-[112px]">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center py-20 lg:py-32">
        <div className="container-custom relative z-10">
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            className="max-w-5xl"
          >
            <motion.div variants={fadeInUp} className="mb-8">
               <span className="magnetic-pill inline-flex items-center gap-3">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                  </span>
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-foreground/60">
                    Industrial Standard Software Agency
                  </span>
               </span>
            </motion.div>

            <motion.h1 
              variants={fadeInUp}
              className="text-6xl md:text-8xl lg:text-[10rem] font-black leading-[0.9] tracking-tighter mb-10"
            >
              WE BUILD <br />
              <span className="gradient-text">DIGITAL PEAK.</span>
            </motion.h1>

            <motion.p 
              variants={fadeInUp}
              className="text-lg md:text-2xl text-muted-foreground max-w-2xl font-medium leading-relaxed mb-16"
            >
              Devtoon is a precision-focused engineering partner. We architect elite digital products that redefine industry standards through performance and depth.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-wrap gap-6">
               <Link href="/contact" className="btn-clay btn-clay-primary group">
                  LET'S TALK
                  <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
               </Link>
               <Link href="/projects" className="btn-clay btn-clay-secondary">
                  VIEW WORK
               </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Ambient Decorative Elements */}
        <div className="absolute top-1/2 right-[-10%] w-[600px] h-[600px] bg-primary/10 blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute top-1/4 right-[5%] z-0 hidden lg:block opacity-10">
           <div className="text-[20rem] font-black text-foreground select-none">DT</div>
        </div>
      </section>

      {/* Stats / Proof Line */}
      <section className="py-12 border-y border-border/10 bg-white/5 backdrop-blur-sm">
         <div className="container-custom">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
               {[
                 { val: "50+", label: "Elite Projects" },
                 { val: "12M+", label: "Lines of Code" },
                 { val: "4.9/5", label: "Client Rating" },
                 { val: "24/7", label: "System Uptime" }
               ].map((stat, i) => (
                 <motion.div 
                   key={i}
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: i * 0.1 }}
                   className="flex flex-col gap-1 items-center md:items-start"
                 >
                    <span className="text-4xl md:text-5xl font-black">{stat.val}</span>
                    <span className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.2em]">{stat.label}</span>
                 </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding relative">
         <div className="container-custom">
            <div className="flex flex-col lg:flex-row justify-between items-end mb-24 gap-8">
               <div className="max-w-2xl">
                  <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary mb-6 block">Capabilities</span>
                  <h2 className="text-5xl md:text-7xl font-black leading-none tracking-tight uppercase">
                     Precision <br /> 
                     <span className="text-muted-foreground">Engineering.</span>
                  </h2>
               </div>
               <div className="lg:max-w-md">
                  <p className="text-muted-foreground font-medium leading-relaxed italic">
                     "Generic solutions are for generic problems. We build systems that dominate their niche."
                  </p>
               </div>
            </div>

            <div className="grid md:grid-cols-2 gap-10">
               {services.map((service, i) => (
                 <motion.div 
                   key={i}
                   initial={{ opacity: 0, scale: 0.95 }}
                   whileInView={{ opacity: 1, scale: 1 }}
                   viewport={{ once: true }}
                   className="clay-industrial p-12 group hover:border-primary/20"
                 >
                    <div className="flex items-start justify-between mb-12">
                       <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center transition-all duration-500 group-hover:bg-primary group-hover:text-white group-hover:rotate-6">
                          <service.icon size={28} strokeWidth={1.5} />
                       </div>
                       <span className="text-[10px] font-black text-muted-foreground tracking-widest">0{i + 1} // CAP</span>
                    </div>

                    <h3 className="text-3xl font-black mb-6 uppercase tracking-tight">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-10 text-lg">
                       {service.description}
                    </p>

                    <div className="pt-8 border-t border-border/10 flex items-center justify-between">
                       <div>
                          <p className="text-[9px] font-black text-primary uppercase tracking-widest mb-1">Key Outcome</p>
                          <p className="font-bold text-foreground">{service.outcome}</p>
                       </div>
                       <Link href="/contact" className="w-12 h-12 rounded-full border border-border flex items-center justify-center transition-all hover:bg-primary hover:text-white hover:border-primary">
                          <ArrowRight size={20} />
                       </Link>
                    </div>
                 </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* Featured Project Showcase */}
      <section className="section-padding bg-foreground text-background">
         <div className="container-custom">
            <div className="mb-24 flex flex-col md:flex-row md:items-center justify-between">
               <div>
                  <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40 mb-4 block">Selected Archive</span>
                  <h2 className="text-5xl md:text-7xl font-black uppercase leading-none text-white">The <span className="text-primary">Mastery</span> List.</h2>
               </div>
               <Link href="/projects" className="btn-clay bg-white text-foreground mt-8 md:mt-0">
                  ALL CASE STUDIES
               </Link>
            </div>

            <div className="grid gap-24">
               {[
                 {
                   name: "NEURAL CORE",
                   category: "AI INFRASTRUCTURE",
                   desc: "Proprietary neural node management system handling 4B+ monthly parameters.",
                   tags: ["NEXT.JS", "PYTHON", "RUST"],
                 },
                 {
                   name: "GLO RETAIL",
                   category: "IMMERSIVE COMMERCE",
                   desc: "A fully decentralized 3D marketplace for high-fashion digital assets.",
                   tags: ["THREE.JS", "WEBGL", "NODE"],
                 }
               ].map((project, i) => (
                 <motion.div 
                   key={i}
                   initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   viewport={{ once: true }}
                   className="group relative grid lg:grid-cols-2 gap-12 items-center"
                 >
                    <div className={`order-2 ${i % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                       <span className="text-[10px] font-black text-primary tracking-[0.3em] mb-4 block">{project.category}</span>
                       <h3 className="text-5xl md:text-7xl font-black mb-8 uppercase leading-[0.8]">{project.name}</h3>
                       <p className="text-white/60 text-xl leading-relaxed mb-12 max-w-lg italic font-medium">
                          "{project.desc}"
                       </p>
                       <div className="flex flex-wrap gap-3 mb-12">
                          {project.tags.map(tag => (
                            <span key={tag} className="px-4 py-2 border border-white/10 rounded-full text-[9px] font-black tracking-widest">{tag}</span>
                          ))}
                       </div>
                       <Link href="/projects" className="inline-flex items-center gap-3 text-[10px] font-black uppercase tracking-widest group/link">
                          Explore Case Study <ArrowRight size={14} className="transition-transform group-hover/link:translate-x-2 text-primary" />
                       </Link>
                    </div>
                    <div className={`order-1 ${i % 2 === 0 ? 'lg:order-2' : 'lg:order-1'} aspect-video bg-white/5 rounded-[2rem] border border-white/10 overflow-hidden relative group-hover:border-primary/40 transition-colors`}>
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
                        {/* Placeholder for project image */}
                        <div className="w-full h-full flex items-center justify-center">
                           <Code2 size={80} strokeWidth={0.5} className="text-white/10" />
                        </div>
                    </div>
                 </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
         <div className="container-custom">
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              className="clay-industrial p-16 md:p-32 text-center bg-foreground relative overflow-hidden"
            >
               <div className="relative z-10">
                  <h2 className="text-5xl md:text-[8rem] font-black uppercase leading-[0.8] tracking-tighter text-background mb-16">
                     READY TO <br />
                     <span className="text-primary">TRANSCEND?</span>
                  </h2>
                  <div className="flex flex-wrap justify-center gap-8">
                     <Link href="/contact" className="btn-clay btn-clay-primary px-16 py-8 text-sm">
                        START THE ENGINE
                     </Link>
                     <Link href="/services" className="btn-clay bg-background text-foreground px-16 py-8 text-sm border-white/10">
                        OUR METHODS
                     </Link>
                  </div>
               </div>
               
               {/* Decorative background for CTA */}
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[40rem] font-black text-white/5 select-none pointer-events-none uppercase">
                  TALK
               </div>
            </motion.div>
         </div>
      </section>
    </main>
  );
}
