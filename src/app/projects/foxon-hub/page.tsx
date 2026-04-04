"use client";

import { motion } from "framer-motion";
import { 
  ArrowLeft, 
  BarChart3, 
  ShieldCheck, 
  Users, 
  Activity, 
  TrendingUp, 
  PieChart, 
  ArrowUpRight,
  Code2,
  Globe,
  Database,
  LayoutDashboard,
  Server,
  MapPin,
  Rocket,
  Lightbulb,
  Briefcase,
  Clock,
  Mail,
  Zap
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const techStack = [
  { name: "Frontend", tech: ["Next.js (App Router)", "Tailwind CSS", "Framer Motion", "Recharts"], icon: LayoutDashboard },
  { name: "Backend", tech: ["Firebase Firestore", "Firebase Auth", "JWT Integration", "RBAC Strategy"], icon: Server },
  { name: "Visuals", tech: ["Interactive Maps", "Marker Clusters", "Real-time Sync", "Data Isolation"], icon: Database },
];

const features = [
  {
    title: "Secure Auth (JWT + RBAC)",
    description: "Enterprise-grade security using JWT tokens and fine-grained Role-Based Access Control to manage Admins, Managers, and Users.",
    icon: ShieldCheck,
  },
  {
    title: "Sales & Expense Analytics",
    description: "Deep financial tracking with automated profit/loss calculations and interactive data visualization.",
    icon: BarChart3,
  },
  {
    title: "Service Management",
    description: "Comprehensive module to manage business offerings, track service usage, and monitor performance metrics.",
    icon: Briefcase,
  },
  {
    title: "Attendance tracking",
    description: "Precise employee monitoring system with automated record-keeping and timestamped history.",
    icon: Clock,
  },
  {
    title: "Automated Notifications",
    description: "Smart automation system for instant email alerts, periodic reports, and critical business notifications.",
    icon: Mail,
  },
  {
    title: "Multi-Tenant Design",
    description: "Secure data isolation architecture allowing multiple organizations to operate independently on one platform.",
    icon: Users,
  },
];

export default function FoxonHubDetail() {
  return (
    <main className="w-full bg-background selection:bg-primary/30">
      {/* Hero Section */}
      <section className="pt-32 pb-16 sm:pt-48 sm:pb-32 border-b border-border overflow-hidden">
        <div className="container-custom grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-8">
               <span className="px-4 py-1.5 rounded-lg border border-primary/20 bg-primary/5 text-[10px] font-black uppercase tracking-[0.3em] text-primary">CASE STUDY // 01</span>
            </div>
            <h1 className="text-fluid-h1 text-foreground mb-8 uppercase tracking-tighter leading-[0.9]">FOXON <br /><span className="gradient-text italic">HUB.</span></h1>
            <p className="text-fluid-body text-muted-foreground max-w-xl font-medium leading-relaxed mb-12">
               A high-performance SaaS analytics engine built to manage complex multi-tenant environments with surgical precision.
            </p>
            <div className="flex flex-wrap gap-4">
              {["Next.js", "Firebase", "JWT", "Real-time"].map(tech => (
                <span key={tech} className="px-4 py-1.5 border border-border rounded-lg text-[9px] font-black uppercase text-foreground/30 tracking-wider bg-foreground/[0.02] font-mono">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <div className="glass-card aspect-video p-1 flex flex-col bg-card border-border">
               <div className="bg-foreground/5 py-4 px-8 border-b border-border flex items-center justify-between">
                  <div className="flex gap-2">
                     <div className="w-2 h-2 rounded-full bg-foreground/20" />
                     <div className="w-2 h-2 rounded-full bg-foreground/20" />
                     <div className="w-2 h-2 rounded-full bg-foreground/20" />
                  </div>
                  <div className="text-[9px] font-black text-foreground/20 tracking-[0.4em] uppercase">analytics.v1</div>
               </div>
               <div className="flex-1 bg-background/40 p-8 flex flex-col gap-6">
                  <div className="h-4 w-1/3 bg-foreground/5 rounded" />
                  <div className="grid grid-cols-2 gap-6">
                     <div className="h-24 bg-primary/5 border border-primary/10 rounded-xl" />
                     <div className="h-24 bg-foreground/5 border border-border rounded-xl" />
                  </div>
                  <div className="flex-1 bg-foreground/[0.02] border border-border rounded-xl" />
               </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Overview & Feature Breakdown */}
      <section className="py-20 sm:py-32 bg-secondary/5">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-32 items-start mb-24 sm:mb-40">
            <div>
              <span className="text-[10px] font-black text-primary tracking-[0.4em] mb-10 block uppercase">STRATEGY</span>
              <h2 className="text-4xl sm:text-6xl font-black mb-10 text-foreground leading-[0.9] uppercase tracking-tighter">THE <br /><span className="italic text-muted-foreground">OBJECTIVE.</span></h2>
              <p className="text-fluid-body text-muted-foreground font-medium mb-12">
                Business leaders struggle with fragmented data. Foxon Hub was architected to consolidate complex analytics into a single source of truth—optimizing operational efficiency by 40%.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-10">
                <div className="p-8 border border-border rounded-2xl bg-foreground/[0.02]">
                   <div className="text-2xl font-black text-foreground mb-2 uppercase tracking-tighter">MULTI-TENANT</div>
                   <p className="text-sm text-muted-foreground leading-relaxed font-medium">Secure data isolation for global enterprises.</p>
                </div>
                <div className="p-8 border border-border rounded-2xl bg-foreground/[0.02]">
                   <div className="text-2xl font-black text-foreground mb-2 uppercase tracking-tighter">REAL-TIME</div>
                   <p className="text-sm text-muted-foreground leading-relaxed font-medium">Instant telemetry and performance tracking.</p>
                </div>
              </div>
            </div>

            <div className="glass-card p-10 sm:p-20 bg-card border-border">
               <span className="text-[10px] font-black text-foreground/20 tracking-[0.2em] mb-12 block uppercase">CORE FEATURES</span>
               <div className="space-y-12">
                  {[
                    { title: "Service Engine", desc: "Automated workflow management with zero-latency response." },
                    { title: "Smart Attendance", desc: "AI-driven tracking systems for massive workforces." },
                    { title: "Telemetry Auth", desc: "Military-grade JWT isolation with RBAC security." }
                  ].map((feat, i) => (
                    <div key={i} className="flex gap-6">
                       <span className="text-lg font-black text-primary">0{i + 1}</span>
                       <div>
                          <div className="text-xl font-black text-foreground uppercase mb-2 tracking-tight">{feat.title}</div>
                          <p className="text-sm text-muted-foreground leading-relaxed font-medium">{feat.desc}</p>
                       </div>
                    </div>
                  ))}
               </div>
            </div>
          </div>

          <div className="pt-24 border-t border-border">
            <span className="text-[10px] font-black text-primary tracking-[0.4em] mb-16 block uppercase text-center">SYSTEM ARCHITECTURE</span>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-10">
               {[
                 { title: "Frontend", desc: "Next.js for performance.", icon: LayoutDashboard },
                 { title: "Backend", desc: "Firebase Cloud Infra.", icon: Server },
                 { title: "Security", desc: "RBAC & JWT Isolation.", icon: ShieldCheck },
                 { title: "Sync", desc: "Real-time Data Streams.", icon: Zap }
               ].map((arch, i) => (
                 <div key={i} className="text-center p-8 bg-foreground/[0.02] border border-border rounded-3xl">
                    <arch.icon className="text-primary mx-auto mb-6" size={24} />
                    <h6 className="text-sm font-black text-foreground mb-3 uppercase tracking-widest">{arch.title}</h6>
                    <p className="text-xs text-muted-foreground font-medium">{arch.desc}</p>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 sm:py-64 bg-background border-t border-border">
        <div className="container-custom text-center">
           <h2 className="text-fluid-h1 mb-16 uppercase text-foreground font-black leading-[0.8] tracking-tighter">MISSION <br /><span className="italic text-primary">COMPLETE.</span></h2>
           <div className="flex flex-col sm:flex-row justify-center gap-6 max-w-sm sm:max-w-none mx-auto px-6">
              <Link href="https://analytics-dashboard-five-zeta.vercel.app/login" target="_blank" className="btn-clay btn-clay-primary w-full sm:w-auto h-20 px-12 flex items-center justify-center">
                 LAUNCH APP
              </Link>
              <Link href="/contact" className="btn-clay btn-clay-secondary w-full sm:w-auto h-20 px-12 flex items-center justify-center text-foreground border-border font-black text-xs uppercase tracking-[0.3em]">
                 DISCUSS PROJECT
              </Link>
           </div>
        </div>
      </section>
    </main>
  );
}
