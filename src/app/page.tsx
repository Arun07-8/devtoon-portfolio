"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Globe, Box, BarChart3, Zap, Shield, Palette, Star, ChevronRight } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description: "High-performance web applications built from the ground up for speed, scalability, and impact.",
  },
  {
    icon: Box,
    title: "3D Product Visualization",
    description: "Immersive 3D experiences that bridge the gap between digital and physical interaction.",
  },
  {
    icon: BarChart3,
    title: "Brand Strategy & Design",
    description: "Data-driven creative direction to align your digital products with your business objectives.",
  }
];

const projects = [
  {
    title: "EcoSmart Dashboard",
    description: "A comprehensive IoT monitoring platform for smart energy management with real-time data visualization.",
    category: "SaaS / IoT",
    tech: ["Next.js", "Three.js", "PostgreSQL"],
  },
  {
    title: "Nova Retail Engine",
    description: "Next-gen e-commerce backend built for extreme scale and ultra-fast transaction processing.",
    category: "E-Commerce",
    tech: ["Node.js", "Redis", "AWS"],
  },
  {
    title: "Aura Health App",
    description: "AI-powered wellness companion that tracks biometrics and provides personalized health insights.",
    category: "Mobile / AI",
    tech: ["React Native", "Python", "Firebase"],
  }
];

const testimonials = [
  {
    quote: "Devtoon transformed our vision into a stunning web experience. The attention to detail and performance was exceptional.",
    name: "Sarah Mitchell",
    role: "CEO, TechVentures",
  },
  {
    quote: "The 3D product configurator they built increased our conversion rate by 40%. Absolutely worth the investment.",
    name: "James Park",
    role: "CTO, ModernRetail",
  },
];

export default function Index() {
  return (
    <main className="bg-background">
      {/* Hero */}
      <section className="relative pt-32 pb-16 lg:pt-48 lg:pb-24 border-b border-border/40">
        <div className="container-custom">
          <div className="flex flex-col items-center text-center">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 border border-border px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-10">
                <span className="w-1.5 h-1.5 rounded-full bg-foreground" />
                Available for Partnerships
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-5xl md:text-7xl lg:text-[7.5rem] font-bold leading-[1.05] tracking-tight text-foreground max-w-5xl"
            >
              Building Next-Gen
              <br />
              Digital Excellence
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-10 text-lg md:text-xl text-muted-foreground max-w-2xl font-medium leading-relaxed"
            >
              We engineer high-performance web products, immersive 3D interfaces, and intelligent business tools for visionary brands.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-12 flex flex-wrap justify-center gap-4"
            >
              <Link href="/contact" className="btn-primary flex items-center gap-2 group">
                Start a Project
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/projects" className="btn-secondary">
                View Portfolio
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-20 w-full"
            >
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-10 border-t border-border/40">
                <div className="text-center">
                  <p className="text-3xl font-bold text-foreground">50+</p>
                  <p className="text-[9px] font-bold text-muted-foreground uppercase tracking-widest mt-1">Projects Shipped</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-foreground">30+</p>
                  <p className="text-[9px] font-bold text-muted-foreground uppercase tracking-widest mt-1">Active Clients</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-foreground">12+</p>
                  <p className="text-[9px] font-bold text-muted-foreground uppercase tracking-widest mt-1">Countries Served</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-foreground">98%</p>
                  <p className="text-[9px] font-bold text-muted-foreground uppercase tracking-widest mt-1">Retention Rate</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="section-padding bg-background border-b border-border/40">
        <div className="container-custom">
          <div className="max-w-xl mb-16 lg:mb-24">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[10px] font-bold uppercase tracking-[0.4em] text-muted-foreground"
            >
              Capabilities
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold mt-4 text-foreground tracking-tight leading-tight"
            >
              Engineered Solutions for Modern Challenges.
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card-minimal p-8 flex flex-col group"
              >
                <div className="w-12 h-12 rounded border border-border flex items-center justify-center mb-10 transition-colors group-hover:bg-foreground group-hover:text-background">
                  <service.icon size={20} strokeWidth={1.5} />
                </div>
                <span className="text-[9px] font-bold text-muted-foreground uppercase tracking-widest mb-3">0{i + 1} / Service</span>
                <h3 className="text-xl font-bold text-foreground mb-4 tracking-tight">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-8 flex-grow">
                  {service.description}
                </p>
                <Link href="/contact" className="text-[10px] font-bold uppercase tracking-widest flex items-center gap-1 group/link">
                  Learn more <ArrowRight size={12} className="group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="projects" className="section-padding bg-muted/20 border-b border-border/40">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
            <div className="max-w-xl">
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-muted-foreground">Portfolio</span>
              <h2 className="text-4xl md:text-5xl font-bold mt-4 text-foreground tracking-tight leading-tight">
                Selected Works.
              </h2>
            </div>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest hover:opacity-70 transition-all group border-b border-foreground mb-2"
            >
              Full Archive
              <ChevronRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

          <div className="grid md:grid-cols-12 gap-6 lg:gap-8">
            {/* Hero Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:col-span-12 lg:col-span-8"
            >
              <div className="card-minimal p-8 md:p-12 h-full flex flex-col group relative overflow-hidden bg-background">
                <div className="absolute top-0 right-0 p-12 opacity-5 scale-125 rotate-6 transition-transform duration-1000 group-hover:rotate-0">
                  <Box size={200} strokeWidth={1} />
                </div>
                <div className="relative z-10 flex flex-col h-full">
                  <span className="text-[9px] font-bold text-muted-foreground uppercase tracking-widest border border-border px-2.5 py-1 rounded w-fit mb-6">{projects[0].category}</span>
                  <h3 className="text-3xl md:text-5xl font-bold text-foreground mb-6 tracking-tight leading-none">{projects[0].title}</h3>
                  <p className="text-base text-muted-foreground max-w-lg mb-10 leading-relaxed">{projects[0].description}</p>
                  <div className="mt-auto flex flex-wrap gap-2">
                    {projects[0].tech.map((t) => (
                      <span key={t} className="bg-muted px-4 py-1.5 rounded text-[9px] font-bold uppercase tracking-widest text-muted-foreground">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Smaller Cards */}
            <div className="md:col-span-12 lg:col-span-4 grid grid-cols-1 gap-6">
              {projects.slice(1).map((project, i) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="card-minimal p-8 bg-background group"
                >
                  <span className="text-[9px] font-bold text-muted-foreground uppercase tracking-widest mb-4 block">{project.category}</span>
                  <h3 className="text-2xl font-bold text-foreground mb-3 tracking-tight">{project.title}</h3>
                  <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed mb-6">{project.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.slice(0, 2).map((t) => (
                      <span key={t} className="text-[8px] font-bold text-muted-foreground border border-border px-2 py-1 rounded uppercase">{t}</span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section-padding bg-background border-b border-border/40">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-muted-foreground">Philosophy</span>
              <h2 className="text-4xl md:text-5xl font-bold mt-4 text-foreground tracking-tight leading-tight">
                Designed for Performance, Built for Impact.
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { icon: Zap, title: "Velocity", desc: "Rapid deployment without compromising on stability." },
                { icon: Shield, title: "Trust", desc: "Enterprise-grade security at every layer." },
                { icon: Palette, title: "Aesthetics", desc: "User-centric design that resonates with your brand." },
                { icon: Star, title: "Excellence", desc: "Commitment to technical perfection." }
              ].map((item, i) => (
                <div key={item.title} className="p-1">
                  <h4 className="text-sm font-bold text-foreground mb-2 flex items-center gap-2">
                     <item.icon size={16} /> {item.title}
                  </h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-muted/10">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-1/3">
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-muted-foreground">Feedback</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-4 text-foreground tracking-tight leading-tight">
                Voices of Satisfaction.
              </h2>
            </div>
            <div className="lg:w-2/3 grid md:grid-cols-2 gap-6">
              {testimonials.map((t, i) => (
                <motion.div
                  key={t.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="card-minimal p-8 bg-background border border-border"
                >
                  <p className="text-base text-foreground/80 leading-relaxed mb-10 italic">"{t.quote}"</p>
                  <div>
                    <p className="text-sm font-bold text-foreground">{t.name}</p>
                    <p className="text-[9px] font-bold text-muted-foreground uppercase tracking-widest mt-1">{t.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card-minimal p-12 md:p-20 text-center relative overflow-hidden bg-foreground text-background"
          >
            <div className="relative z-10 flex flex-col items-center">
              <h2 className="text-4xl md:text-6xl font-bold mb-10 tracking-tight leading-tight">
                Ready to Build Something <br /> Meaningful Together?
              </h2>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contact" className="px-10 py-5 rounded-full bg-background text-foreground text-sm font-bold uppercase tracking-widest hover:opacity-90 transition-all flex items-center gap-2 group">
                  Start Project <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="/projects" className="px-10 py-5 rounded-full border border-background/20 text-background text-sm font-bold uppercase tracking-widest hover:bg-background/10 transition-all">
                  Our Work
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
