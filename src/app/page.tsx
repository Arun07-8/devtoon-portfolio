"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Globe, Box, BarChart3, Zap, Shield, Palette, Star, ChevronRight } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Scalable Web Systems",
    description: "Multi-tenant SaaS products and high-performance business engines designed to handle millions of transactions with ease.",
    benefit: "Scale your revenue without technical debt."
  },
  {
    icon: Palette,
    title: "UI/UX & Brand Identity",
    description: "Deep user-research and psychological design to create interfaces that feel natural and maximize user LTV.",
    benefit: "Turn passive users into loyal brand advocates."
  },
  {
    icon: Box,
    title: "3D Product Visualization",
    description: "Next-gen immersive 3D configurators that bridge the gap between digital and physical commerce.",
    benefit: "Boost store conversions by up to 45%."
  },
  {
    icon: Zap,
    title: "Backend & Logic",
    description: "Robust architectures and data-pipelines for real-time applications and intelligence-driven workflows.",
    benefit: "Unmatched performance for complex systems."
  }
];

const projects = [
  {
    title: "EcoSmart IoT Network",
    description: "A centralized dashboard for industrial energy monitoring, featuring real-time telemetry and AI-driven cost forecasting.",
    problem: "Inefficient energy monitoring leading to 25% waste.",
    solution: "A custom IoT dashboard with real-time data visualization.",
    result: "30% reduction in annual operational costs.",
    category: "SaaS / Industrial",
    tech: ["Next.js", "Three.js", "PostgreSQL"],
  },
  {
    title: "Nova Retail Engine",
    description: "A headless commerce backend designed for extreme holiday traffic spikes and instantaneous order processing.",
    problem: "Legacy backend crashing during high-traffic sales.",
    solution: "Cloud-native, event-driven architecture.",
    result: "Zero downtime during 2024 Black Friday peak.",
    category: "E-Commerce",
    tech: ["Node.js", "Redis", "AWS"],
  },
  {
    title: "Aura AI Health",
    description: "An AI-powered wellness assistant that integrates with wearable biometrics for personalized health guidance.",
    problem: "Generic health advice failing to retain users.",
    solution: "Personalized AI models based on biometric data.",
    result: "78% increase in daily user engagement.",
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
              Excellence in <br /> 
              Digital Performance.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-10 text-lg md:text-xl text-muted-foreground max-w-2xl font-medium leading-relaxed"
            >
              We engineer scalable software, conversion-focused interfaces, and high-performance ecosystems for visionary companies.
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

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card-minimal p-8 flex flex-col group border border-border/40 hover:border-accent/40 transition-colors"
              >
                <div className="flex items-start justify-between mb-10">
                  <div className="w-12 h-12 rounded border border-border flex items-center justify-center transition-colors group-hover:bg-foreground group-hover:text-background">
                    <service.icon size={20} strokeWidth={1.5} />
                  </div>
                  <span className="text-[9px] font-bold text-muted-foreground uppercase tracking-widest">0{i + 1}</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4 tracking-tight">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-grow">
                  {service.description}
                </p>
                <div className="bg-accent/5 border border-accent/10 rounded-lg p-4 mb-8">
                  <p className="text-[10px] font-bold text-accent uppercase tracking-widest mb-1">Key Outcome</p>
                  <p className="text-sm font-medium text-foreground/80">{service.benefit}</p>
                </div>
                <Link href="/contact" className="text-[10px] font-bold uppercase tracking-widest flex items-center gap-1 group/link text-accent">
                  Inquire about this service <ArrowRight size={12} className="group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="mt-20 flex justify-center">
            <Link href="/contact" className="btn-primary group">
              Get a Custom Workflow
              <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
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
              <div className="card-minimal p-8 md:p-12 h-full flex flex-col group relative overflow-hidden bg-background border border-border/40 hover:border-accent/40 transition-all">
                <div className="absolute top-0 right-0 p-12 opacity-5 scale-125 rotate-6 transition-transform duration-1000 group-hover:rotate-0">
                  <Box size={200} strokeWidth={1} />
                </div>
                <div className="relative z-10 flex flex-col h-full">
                  <span className="text-[9px] font-bold text-muted-foreground uppercase tracking-widest border border-border px-2.5 py-1 rounded w-fit mb-6">{projects[0].category}</span>
                  <h3 className="text-3xl md:text-5xl font-bold text-foreground mb-8 tracking-tight leading-none">{projects[0].title}</h3>
                  
                  <div className="grid md:grid-cols-3 gap-8 mb-10">
                    <div>
                      <p className="text-[9px] font-bold text-accent uppercase tracking-[0.2em] mb-2">The Problem</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">{projects[0].problem}</p>
                    </div>
                    <div>
                      <p className="text-[9px] font-bold text-accent uppercase tracking-[0.2em] mb-2">The Solution</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">{projects[0].solution}</p>
                    </div>
                    <div>
                      <p className="text-[9px] font-bold text-accent uppercase tracking-[0.2em] mb-2">The Result</p>
                      <p className="text-sm font-bold text-foreground leading-relaxed">{projects[0].result}</p>
                    </div>
                  </div>

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
                  className="card-minimal p-8 bg-background group border border-border/40 hover:border-accent/40 transition-all flex flex-col"
                >
                  <span className="text-[9px] font-bold text-muted-foreground uppercase tracking-widest mb-4 block">{project.category}</span>
                  <h3 className="text-2xl font-bold text-foreground mb-6 tracking-tight">{project.title}</h3>
                  <div className="mb-6">
                    <p className="text-[9px] font-bold text-accent uppercase tracking-[0.2em] mb-1">Result</p>
                    <p className="text-xs font-bold text-foreground leading-relaxed">{project.result}</p>
                  </div>
                  <div className="flex flex-wrap gap-1.5 mt-auto">
                    {project.tech.slice(0, 2).map((t) => (
                      <span key={t} className="text-[8px] font-bold text-muted-foreground border border-border px-2 py-1 rounded uppercase">{t}</span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="mt-20 flex justify-center">
            <Link href="/projects" className="btn-secondary">
              Explore All Case Studies
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us / Founder */}
      <section className="section-padding bg-muted/5 border-b border-border/40">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-square max-w-md mx-auto lg:mx-0"
            >
              <div className="absolute inset-0 bg-accent/10 rounded-[3rem] rotate-3" />
              <div className="absolute inset-0 bg-foreground/5 rounded-[3rem] -rotate-3 border border-border" />
              <div className="absolute inset-0 bg-background rounded-[3rem] border border-border overflow-hidden flex items-center justify-center p-12">
                 <div className="text-center">
                    <div className="w-24 h-24 bg-foreground text-background rounded-full flex items-center justify-center text-4xl font-bold mx-auto mb-6">D</div>
                    <h3 className="text-xl font-bold text-foreground">Devtoon Technologies</h3>
                    <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mt-2">Founded in 2022</p>
                 </div>
              </div>
            </motion.div>

            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-muted-foreground">The Business</span>
              <h2 className="text-4xl md:text-5xl font-bold mt-4 text-foreground tracking-tight leading-[1.1] mb-8">
                Your Technical Partner for <span className="text-accent">Long-term Growth</span>.
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-10">
                At Devtoon, we don't just write code; we solve business problems. We understand that your digital product is the heartbeat of your company. That's why we focus on scalability, security, and conversion from day one.
              </p>
              
              <div className="space-y-6">
                {[
                  { title: "Direct Communication", desc: "Work directly with our senior engineers and designers." },
                  { title: "Performance First", desc: "We optimize for speed because seconds mean revenue." },
                  { title: "Future-Proofed", desc: "We use modern stacks that scale as you grow." }
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="mt-1 w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-foreground">{item.title}</h4>
                      <p className="text-xs text-muted-foreground mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12">
                <Link href="/about" className="text-[10px] font-bold uppercase tracking-widest border-b border-accent pb-1 text-accent">
                   Our Full Story
                </Link>
              </div>
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
