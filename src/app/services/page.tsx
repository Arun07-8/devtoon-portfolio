"use client";

import { motion } from "framer-motion";
import { Globe, Palette, Box, Zap, ArrowRight, Shield, Rocket, Heart, Database } from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Globe,
    title: "Scalable Web Systems",
    description: "We build enterprise-grade web applications designed for extreme scale and reliability. From multi-tenant SaaS platforms to complex internal business engines, our engineering approach ensures your system grows with your users.",
    features: ["Next.js & React Expertise", "Custom SaaS Architectures", "High-Performance APIs", "Edge Computing & SSR"],
    benefit: "Scale your revenue without technical debt or performance bottlenecks."
  },
  {
    icon: Palette,
    title: "UI/UX & Brand Identity",
    description: "Design is more than just aesthetics; it's about conversion and user psychology. We create intuitive, research-driven interfaces that minimize friction and maximize user lifetime value (LTV).",
    features: ["Deep User Research", "Interactive Prototyping", "Design Engineering", "Consistent Brand Systems"],
    benefit: "Turn passive visitors into loyal advocates through superior UX."
  },
  {
    icon: Box,
    title: "3D Product Visualization",
    description: "Bring your products to life with immersive 3D experiences. We build high-fidelity configurators and interactive environments that bridge the digital-physical gap and drive store engagement.",
    features: ["Three.js / WebGL Development", "Interactive 3D Configurators", "Browser-Based Rendering", "WebXR Integration"],
    benefit: "Boost store conversion rates by up to 45% through interactive engagement."
  },
  {
    icon: Zap,
    title: "Backend & Logic Engines",
    description: "The brain of your application. We architect robust, event-driven backends and automated data-pipelines to handle real-time logic and high-volume transactions with zero downtime.",
    features: ["Node.js & Go Specialization", "Microservices Architecture", "Real-Time Data Streaming", "AI & Logic Integration"],
    benefit: "Unmatched performance and reliability for mission-critical logic."
  }
];

export default function ServicesPage() {
  return (
    <main className="bg-background min-h-screen">
      {/* Hero Section */}
      <section className="pt-40 lg:pt-56 pb-20 lg:pb-32 relative overflow-hidden border-b border-border/40">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-foreground/5 rounded-full blur-[120px]" />
        
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <span className="text-xs font-bold uppercase tracking-[0.4em] text-muted-foreground mb-8 block">Capabilities</span>
            <h1 className="text-5xl md:text-8xl font-bold text-foreground leading-[0.9] tracking-tighter mb-10">
              Technical <br /> <span className="gradient-text">Solutions</span> for Scale.
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-medium leading-relaxed">
              We provide the engineering horsepower and design precision needed to build high-stakes digital products. Our services are outcome-focused and performance-driven.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="space-y-32">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`flex flex-col lg:flex-row gap-16 lg:gap-32 items-start ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className="lg:w-1/2">
                  <div className="w-16 h-16 rounded-2xl bg-foreground text-background flex items-center justify-center mb-10 shadow-2xl shadow-foreground/20">
                     <service.icon size={28} />
                  </div>
                  <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-8 tracking-tight">{service.title}</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-10">
                    {service.description}
                  </p>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {service.features.map(feature => (
                      <div key={feature} className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-foreground" />
                        <span className="text-xs font-bold uppercase tracking-widest text-foreground/70">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="lg:w-1/2 w-full">
                  <div className="bg-muted/30 rounded-[3rem] p-10 md:p-16 border border-border/40 relative overflow-hidden group">
                     <div className="absolute top-0 right-0 p-12 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity">
                        <service.icon size={200} />
                     </div>
                     <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-muted-foreground mb-4 block">Primary Benefit</span>
                     <p className="text-2xl md:text-4xl font-bold text-foreground leading-tight tracking-tight mb-12">
                        {service.benefit}
                     </p>
                     <Link href="/contact" className="btn-primary flex items-center justify-center gap-2 w-full">
                        Inquire about {service.title} <ArrowRight size={18} />
                     </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-muted/5">
        <div className="container-custom">
           <div className="bg-foreground text-background rounded-[4rem] p-12 md:p-24 text-center relative overflow-hidden">
              <div className="relative z-10">
                 <h2 className="text-4xl md:text-7xl font-bold mb-10 tracking-tighter leading-[0.9]">
                    Need a custom <br /> technical roadmap?
                 </h2>
                 <p className="text-xl text-background/60 max-w-xl mx-auto mb-16 font-medium">
                    Schedule a strategy session where we dive deep into your architecture and business goals.
                 </p>
                 <Link href="/contact" className="px-12 py-6 rounded-full bg-background text-foreground font-black uppercase tracking-widest text-sm hover:scale-105 active:scale-95 transition-all">
                    Start the conversation
                 </Link>
              </div>
           </div>
        </div>
      </section>
    </main>
  );
}
