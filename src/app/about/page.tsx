"use client";

import { motion } from "framer-motion";
import { Code, Palette, Lightbulb, Target, ArrowRight } from "lucide-react";
import Link from "next/link";

const skills = [
  { icon: Code, label: "React / Next.js / TypeScript", desc: "Building scalable, high-performance web applications." },
  { icon: Palette, label: "Three.js / WebGL / 3D Design", desc: "Crafting immersive, interactive digital experiences." },
  { icon: Lightbulb, label: "UI/UX Design & Prototyping", desc: "User-centric design that converts and captivates." },
  { icon: Target, label: "Business Automation & SaaS", desc: "Intelligence-driven tools to scale operations." },
];

export default function About() {
  return (
    <main className="bg-background min-h-screen">
      {/* Hero Section */}
      <section className="pt-40 lg:pt-56 pb-20 lg:pb-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px]" />

        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="text-xs font-bold uppercase tracking-[0.4em] text-accent font-display mb-8 block">Our Narrative</span>
              <h1 className="text-5xl md:text-7xl font-display font-bold text-foreground leading-[1] tracking-tighter">
                Engineering <br /> <span className="gradient-text">Premium Digital</span> Solutions.
              </h1>
              <div className="space-y-6 mt-12 text-foreground/50 text-xl font-medium leading-relaxed max-w-xl">
                <p>
                  Devtoon Solutions was founded on a simple principle: digital products should be as powerful as they are beautiful.
                </p>
                <p>
                  What started as a focused freelance mission has evolved into a boutique agency specialized in quality over quantity. We don't just build websites; we engineer experiences.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-sm font-bold text-primary-foreground transition-all hover:scale-105 active:scale-95 bg-accent mt-8"
                >
                  Work with us <ArrowRight size={18} />
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              <div className="clay-lg rounded-[4rem] p-12 md:p-16 border-border/40 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-accent/5 to-transparent pointer-events-none" />
                <div className="w-24 h-24 bg-accent rounded-full flex items-center justify-center mb-10 shadow-2xl shadow-accent/20">
                  <span className="text-4xl font-display font-black text-white">D</span>
                </div>
                <h3 className="font-display font-bold text-3xl text-foreground tracking-tight">Devtoon Solutions</h3>
                <p className="text-foreground/40 font-bold uppercase text-[10px] tracking-widest mt-3">Est. 2022 · Global Agency</p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
                  {[["50+", "Projects"], ["30+", "Clients"], ["99%", "Success"]].map(([num, label]) => (
                    <div key={label} className="glass rounded-[2rem] p-6 text-center border-border/60">
                      <p className="font-display font-black text-3xl text-foreground tracking-tighter mb-1">{num}</p>
                      <p className="text-[9px] font-black text-accent uppercase tracking-widest">{label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="section-padding bg-secondary/20">
        <div className="container-custom">
          <div className="text-center mb-24">
            <span className="text-xs font-bold uppercase tracking-[0.4em] text-accent font-display">Toolkit</span>
            <h2 className="text-5xl md:text-6xl font-display font-bold mt-6 text-foreground tracking-tighter">
              Technology <span className="gradient-text">Stack</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, i) => (
              <motion.div
                key={skill.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass p-10 rounded-[2.5rem] border-border/40 hover:bg-white transition-colors duration-500 group"
              >
                <div className="w-12 h-12 bg-accent/10 rounded-2xl flex items-center justify-center mb-6 text-accent group-hover:bg-accent group-hover:text-white transition-all duration-500">
                  <skill.icon size={24} strokeWidth={2} />
                </div>
                <h4 className="text-xl font-display font-bold text-foreground mb-4 leading-tight tracking-tight">{skill.label}</h4>
                <p className="text-foreground/50 font-medium leading-relaxed text-sm">{skill.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="section-padding bg-background relative overflow-hidden">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl md:text-8xl font-display font-bold text-foreground tracking-tighter leading-[0.9]">
                Architecting <br /> <span className="gradient-text">The Digital Future</span>.
              </h2>
              <p className="text-xl md:text-2xl text-foreground/50 mt-14 font-medium leading-relaxed italic">
                "We believe that every brand deserves a digital home that is as high-performing as it is visually arresting. Our mission is to bridge that gap between complexity and clarity."
              </p>
              <div className="mt-16 flex justify-center">
                <div className="w-20 h-1 bg-accent/20 rounded-full" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
