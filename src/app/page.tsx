"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Globe, Box, BarChart3, Zap, Shield, Palette, Star, ChevronRight } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description: "High-performance web applications built with modern frameworks. Fast, scalable, and beautifully crafted.",
  },
  {
    icon: Box,
    title: "3D Web Experiences",
    description: "Immersive 3D product visualizations and interactive interfaces that captivate and convert visitors.",
  },
  {
    icon: BarChart3,
    title: "Digital Strategy",
    description: "Data-driven insights and strategic planning to help your business navigate the digital landscape.",
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
    <main className="overflow-hidden">
      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-20 lg:pt-48 lg:pb-32 bg-background">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[120px] -translate-y-1/2 -translate-x-1/2" />
          <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
        </div>

        <div className="container-custom relative z-10">
          <div className="flex flex-col items-center text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="inline-flex items-center gap-2 glass border-border/40 px-5 py-2.5 rounded-full text-xs font-bold tracking-[0.2em] uppercase text-accent mb-12 shadow-sm transition-all hover:scale-105 cursor-default">
                <span className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse" />
                Available for New Partnerships
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-6xl md:text-8xl lg:text-9xl font-display font-bold leading-[0.9] tracking-tighter text-foreground max-w-5xl"
            >
              Building Next-Gen
              <br />
              Digital <span className="gradient-text">Success</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="mt-14 text-xl md:text-2xl text-foreground/50 max-w-3xl font-medium leading-relaxed"
            >
              We engineer high-performance web products, immersive 3D interfaces, and intelligent business tools that move visionary brands forward.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-16 flex flex-wrap justify-center gap-6"
            >
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 px-10 py-5 rounded-full text-lg font-bold text-primary-foreground transition-all hover:scale-[1.05] hover:shadow-2xl hover:shadow-accent/30 active:scale-[0.95] bg-accent group"
              >
                Schedule a Consultation
                <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/projects"
                className="glass inline-flex items-center gap-3 px-10 py-5 rounded-full text-lg font-bold text-foreground transition-all hover:bg-foreground/5 active:scale-[0.95] shadow-sm"
              >
                Explore Projects
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="mt-28 w-full"
            >
              <div className="grid grid-cols-2 md:grid-cols-4 gap-12 py-12 border-y border-border/40">
                <div className="text-center group">
                  <p className="text-5xl font-display font-black text-foreground group-hover:scale-110 transition-transform">50+</p>
                  <p className="text-[10px] font-black text-foreground/30 uppercase tracking-[0.2em] mt-3">Projects Shipped</p>
                </div>
                <div className="text-center group">
                  <p className="text-5xl font-display font-black text-foreground group-hover:scale-110 transition-transform">30+</p>
                  <p className="text-[10px] font-black text-foreground/30 uppercase tracking-[0.2em] mt-3">Active Clients</p>
                </div>
                <div className="text-center group">
                  <p className="text-5xl font-display font-black text-foreground group-hover:scale-110 transition-transform">12+</p>
                  <p className="text-[10px] font-black text-foreground/30 uppercase tracking-[0.2em] mt-3">Countries Served</p>
                </div>
                <div className="text-center group">
                  <p className="text-5xl font-display font-black text-foreground group-hover:scale-110 transition-transform">98%</p>
                  <p className="text-[10px] font-black text-foreground/30 uppercase tracking-[0.2em] mt-3">Retention Rate</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="section-padding bg-background relative overflow-hidden">
        <div className="container-custom">
          <div className="text-center mb-20 lg:mb-32">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xs font-bold uppercase tracking-[0.4em] text-accent font-display"
            >
              Our Solutions
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-display font-bold mt-6 text-foreground tracking-tighter"
            >
              Core <span className="gradient-text">Expertise</span>
            </motion.h2>
          </div>

          <div className="space-y-32 lg:space-y-48">
            {services.map((service, i) => (
              <div
                key={service.title}
                className={`flex flex-col lg:flex-row items-center gap-16 lg:gap-24 ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
              >
                <motion.div
                  initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                  className="flex-1 w-full"
                >
                  <div className="clay-lg aspect-square lg:aspect-[4/3] rounded-[3rem] relative overflow-hidden flex items-center justify-center group border-border/40">
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent transition-opacity group-hover:opacity-100 opacity-60" />
                    <service.icon size={140} strokeWidth={0.5} className="text-accent relative z-10 transition-transform group-hover:scale-110 duration-1000" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-10 blur-2xl group-hover:opacity-20 transition-opacity">
                      <service.icon size={300} strokeWidth={1} className="text-accent" />
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: i % 2 === 0 ? 40 : -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                  className="flex-1"
                >
                  <span className="text-[10px] font-black text-accent uppercase tracking-[0.4em] mb-4 block">0{i + 1} / Service</span>
                  <h3 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6 tracking-tight leading-[1.1]">{service.title}</h3>
                  <p className="text-xl text-foreground/50 mb-10 leading-relaxed font-medium">
                    {service.description}
                  </p>
                  <ul className="grid sm:grid-cols-2 gap-4 mb-10">
                    {["High Performance", "Modern UI/UX", "Scalable Architecture", "Secure by Design"].map((item) => (
                      <li key={item} className="flex items-center gap-3 text-foreground/60 font-medium text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent/40" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-bold text-foreground glass hover:bg-foreground/5 transition-all shadow-sm border-border/60 active:scale-[0.98]"
                  >
                    Discuss this
                    <ArrowRight size={18} />
                  </Link>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="projects" className="section-padding bg-secondary/20">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-8">
            <div className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-accent font-display">Showcase</span>
              <h2 className="text-5xl md:text-7xl font-display font-bold mt-6 text-foreground tracking-tighter">
                Featured <span className="gradient-text">Work</span>
              </h2>
            </div>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-foreground font-bold hover:text-accent transition-colors group mb-2"
            >
              View all projects
              <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid md:grid-cols-12 gap-8 lg:gap-12">
            {/* Massive Hero Project Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:col-span-12 lg:col-span-8"
            >
              <div className="clay-lg rounded-[3.5rem] p-10 md:p-16 h-full flex flex-col justify-between group cursor-pointer border-border/40 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-12 opacity-5 scale-150 rotate-12 transition-transform duration-1000 group-hover:rotate-6 group-hover:scale-[1.7]">
                  <Box size={240} strokeWidth={1} />
                </div>
                <div className="relative z-10">
                  <span className="text-[10px] font-black text-accent uppercase tracking-widest bg-accent/10 px-3 py-1 rounded-full mb-6 inline-block">{projects[0].category}</span>
                  <h3 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-6 leading-tight tracking-tighter">{projects[0].title}</h3>
                  <p className="text-xl text-foreground/50 max-w-xl mb-10 leading-relaxed font-medium">{projects[0].description}</p>
                  <div className="flex flex-wrap gap-3">
                    {projects[0].tech.map((t) => (
                      <span key={t} className="glass px-5 py-2.5 rounded-full text-xs font-bold text-foreground/60 uppercase tracking-widest">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Smaller Project Cards */}
            {projects.slice(1).map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="md:col-span-6 lg:col-span-4"
              >
                <div className="clay rounded-[3rem] p-10 h-full flex flex-col group cursor-pointer border-border/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
                  <span className="text-[10px] font-black text-foreground/30 uppercase tracking-widest mb-6 inline-block">{project.category}</span>
                  <h3 className="text-3xl font-display font-bold text-foreground mb-4 tracking-tight leading-tight">{project.title}</h3>
                  <p className="text-base text-foreground/50 mb-10 font-medium leading-relaxed">{project.description}</p>
                  <div className="mt-auto flex flex-wrap gap-2">
                    {project.tech.slice(0, 3).map((t) => (
                      <span key={t} className="text-[9px] font-bold text-foreground/40 uppercase tracking-widest border border-border/60 px-3 py-1.5 rounded-full">{t}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us / Philosophy */}
      <section className="section-padding bg-background relative overflow-hidden">
        <div className="container-custom">
          <div className="text-center mb-20 lg:mb-32">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-accent font-display">Philosophy</span>
            <h2 className="text-5xl md:text-7xl font-display font-bold mt-6 text-foreground tracking-tighter">
              Engineered for <span className="gradient-text">Impact</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Zap, title: "Velocity", desc: "Rapid deployment cycles without compromising on code quality or security." },
              { icon: Shield, title: "Trust", desc: "Enterprise-grade security protocols integrated into every layer of our applications." },
              { icon: Palette, title: "Aesthetics", desc: "Award-worthy UI/UX design that resonates with your brand's core message." },
              { icon: Star, title: "Excellence", desc: "A relentless pursuit of technical perfection in every line of code we ship." }
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass p-10 rounded-[2.5rem] border-border/40 hover:bg-accent/[0.02] transition-colors"
              >
                <item.icon className="text-accent mb-6" size={32} />
                <h4 className="text-2xl font-display font-bold text-foreground mb-4">{item.title}</h4>
                <p className="text-foreground/50 font-medium leading-relaxed uppercase text-[10px] tracking-wider mb-2">Philosophy / 0{i + 1}</p>
                <p className="text-foreground/50 font-medium leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-secondary/20">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/3">
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-accent font-display">Voices</span>
              <h2 className="text-4xl md:text-5xl font-display font-bold mt-6 text-foreground tracking-tighter leading-tight">
                What Brands <span className="gradient-text">Believe</span> in Us
              </h2>
              <p className="text-lg text-foreground/50 mt-8 font-medium italic leading-relaxed">
                "Technical prowess is a given. What sets Devtoon apart is their strategic intuition and design sensibility."
              </p>
            </div>
            <div className="lg:w-2/3 grid md:grid-cols-2 gap-6">
              {testimonials.map((t, i) => (
                <motion.div
                  key={t.name}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  className="clay p-10 rounded-[3rem] border-border/40 flex flex-col justify-between"
                >
                  <p className="text-xl text-foreground/70 font-medium leading-relaxed mb-10 italic">"{t.quote}"</p>
                  <div>
                    <p className="text-lg font-bold text-foreground">{t.name}</p>
                    <p className="text-xs font-black text-accent uppercase tracking-widest mt-1">{t.role}</p>
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
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="clay-lg rounded-[4rem] p-12 md:p-24 text-center relative overflow-hidden group border-border/40"
          >
            <div className="absolute inset-0 bg-accent/[0.03] group-hover:bg-accent/[0.05] transition-colors" />
            <div className="relative z-10">
              <h2 className="text-5xl md:text-8xl font-display font-bold text-foreground mb-12 tracking-tighter leading-[0.9]">
                Let's Build Something <br /> <span className="gradient-text">Legendary Together</span>.
              </h2>
              <div className="flex flex-wrap justify-center gap-6">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 px-12 py-6 rounded-full text-lg font-bold text-primary-foreground transition-all hover:scale-[1.05] hover:shadow-2xl hover:shadow-accent/30 active:scale-[0.95] bg-accent group"
                >
                  Start a Project
                  <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="mailto:devtoontechnologies@gmail.com"
                  className="glass inline-flex items-center gap-3 px-12 py-6 rounded-full text-lg font-bold text-foreground transition-all hover:bg-foreground/5 active:scale-[0.95] shadow-sm"
                >
                  Contact Directly
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      
    </main>
  );
}
