"use client";

import { useState, FormEvent } from "react";
import { motion, Variants } from "framer-motion";
import { Send, Mail, ArrowRight, MessageSquare, MapPin, Globe, Clock, Shield } from "lucide-react";
import { toast } from "sonner";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "circOut" } },
};

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSending(true);

    try {
      const response = await fetch("https://formspree.io/f/your-form-id", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
          _subject: `New project inquiry from ${form.name}`,
        }),
      });

      if (response.ok) {
        toast.success("Transmission Received. Our team will mobilize shortly.");
        setForm({ name: "", email: "", message: "" });
      } else {
        toast.error("Transmission Failed. Please re-run the process.");
      }
    } catch (error) {
      toast.error("Signal Disruption. Check your connection.");
    } finally {
      setSending(false);
    }
  };

  return (
    <main className="w-full">
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 border-b border-border/10 overflow-hidden">
        <div className="container-custom relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">

            <div className="lg:col-span-12 mb-16 lg:mb-24">
               <motion.div
                initial="hidden"
                animate="show"
                variants={fadeInUp}
                className="w-full"
               >
                  <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.4em] text-primary mb-8 block">Inquiry // 03</span>
                  <h1 className="text-fluid-h1 font-black text-foreground leading-[0.8] tracking-tighter uppercase">
                    LET'S BUILD <br /> <span className="text-muted-foreground">LEVERAGE.</span>
                  </h1>
               </motion.div>
            </div>

            <div className="lg:col-span-5 space-y-8 md:space-y-12 w-full">
               <div className="clay-industrial p-8 md:p-12 bg-foreground text-background">
                  <h3 className="text-2xl font-black uppercase tracking-tighter mb-8">Technical HQ</h3>
                  <div className="space-y-8">
                     <div className="flex items-center gap-6 group">
                        <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center text-white shadow-xl flex-shrink-0">
                          <Mail size={24} />
                        </div>
                        <div className="min-w-0">
                          <p className="text-[9px] font-black text-white/40 uppercase tracking-[0.2em] mb-1">Direct Signal</p>
                          <p className="text-base md:text-lg font-black text-white uppercase tracking-tight break-all">devtoontechnologies@gmail.com</p>
                        </div>
                     </div>
                     <div className="flex items-center gap-6 group">
                        <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center text-white shadow-xl flex-shrink-0">
                          <Shield size={24} />
                        </div>
                        <div>
                          <p className="text-[9px] font-black text-white/40 uppercase tracking-[0.2em] mb-1">SLA // Guarantee</p>
                          <p className="text-base md:text-lg font-black text-white uppercase tracking-tight">24-Hour Response Logic</p>
                        </div>
                     </div>
                  </div>
               </div>

                <div className="clay-industrial p-8 md:p-12 border-primary/10 w-full">
                   <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-primary mb-8 block">Service Availability</h4>
                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                      <div>
                         <p className="text-[9px] font-black text-muted-foreground uppercase mb-2 tracking-widest">Timezone</p>
                         <p className="font-black text-foreground uppercase tracking-tight text-sm md:text-base">Mumbai [GMT+5:30]</p>
                      </div>
                      <div>
                         <p className="text-[9px] font-black text-muted-foreground uppercase mb-2 tracking-widest">Global Ops</p>
                         <p className="font-black text-foreground uppercase tracking-tight text-sm md:text-base">Remote Ready</p>
                      </div>
                   </div>
                </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8, ease: "circOut" }}
              className="lg:col-span-7 w-full"
            >
              <form
                onSubmit={handleSubmit}
                className="clay-industrial p-8 md:p-16 lg:p-20 border-primary/5 w-full"
              >
                <div className="space-y-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
                    <div className="space-y-4">
                      <label className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.2em] px-2 italic">01. Identity</label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full bg-secondary/50 rounded-2xl px-8 py-5 text-sm font-black text-foreground placeholder:text-muted-foreground/30 border border-border/10 focus:border-primary outline-none transition-all"
                        placeholder="ENTER NAME"
                      />
                    </div>
                    <div className="space-y-4">
                      <label className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.2em] px-2 italic">02. Signal Address</label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full bg-secondary/50 rounded-2xl px-8 py-5 text-sm font-black text-foreground placeholder:text-muted-foreground/30 border border-border/10 focus:border-primary outline-none transition-all"
                        placeholder="ENTER EMAIL"
                      />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <label className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.2em] px-2 italic">03. Project Payload</label>
                    <textarea
                      required
                      rows={6}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full bg-secondary/50 rounded-3xl px-8 py-6 text-sm font-black text-foreground placeholder:text-muted-foreground/30 border border-border/10 focus:border-primary outline-none transition-all resize-none"
                      placeholder="DESCRIBE THE TARGET OBJECTIVES..."
                    />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={sending}
                    className="btn-clay btn-clay-primary w-full h-20 md:h-24 flex items-center justify-center gap-4 text-xs font-black uppercase tracking-[0.4em]"
                  >
                    {sending ? "TRANSMITTING..." : "INITIALIZE INQUIRY"}
                    {!sending && <ArrowRight size={20} />}
                  </motion.button>

                   <div className="flex items-center justify-center gap-3 pt-6 opacity-30">
                      <Clock size={16} />
                      <span className="text-[9px] font-black uppercase tracking-[0.3em]">Response frequency: High Intensity</span>
                   </div>
                </div>
              </form>
            </motion.div>

          </div>
        </div>
      </section>

    </main>
  );
}
