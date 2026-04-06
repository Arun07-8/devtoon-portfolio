"use client";

import { useState, FormEvent } from "react";
import { motion, Variants } from "framer-motion";
import { Send, Mail, ArrowRight, MessageSquare, MapPin, Globe, Clock, Shield, Phone } from "lucide-react";
import { toast } from "sonner";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "circOut" } },
};

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "", honeypot: "" });
  const [touched, setTouched] = useState({ name: false, email: false, phone: false, message: false, honeypot: false });
  const [sending, setSending] = useState(false);

  const errors = {
    name: form.name.length > 0 && form.name.length < 2 ? "Identity sequence too short" : "",
    email: form.email.length > 0 && !/^\S+@\S+\.\S+$/.test(form.email) ? "Invalid signal frequency" : "",
    message: form.message.length > 0 && form.message.length < 10 ? "Payload density insufficient" : "",
  };

  const handleBlur = (field: keyof typeof touched) => {
    setTouched(prev => ({ ...prev, [field]: true }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    // Final check before sending
    if (errors.name || errors.email || errors.message || !form.name || !form.email || !form.message) {
      setTouched({ name: true, email: true, phone: true, message: true, honeypot: true });
      toast.error("Transmission blocked: Data integrity compromised.");
      return;
    }

    setSending(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success(data.message || "Transmission Received. Our team will mobilize shortly.");
        setForm({ name: "", email: "", phone: "", message: "", honeypot: "" });
        setTouched({ name: false, email: false, phone: false, message: false, honeypot: false });
      } else {
        toast.error(data.error || "Transmission Failed. Please re-run the process.");
      }
    } catch (error) {
      toast.error("Signal Disruption. Check your connection.");
    } finally {
      setSending(false);
    }
  };

  return (
    <main className="w-full bg-background selection:bg-primary/30">
      <section className="relative pt-24 pb-16 lg:pt-40 lg:pb-32 border-b border-border overflow-hidden">
        <div className="container-custom relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">

            <div className="lg:col-span-12 mb-8 sm:mb-16 lg:mb-24">
              <motion.div
                initial="hidden"
                animate="show"
                variants={fadeInUp}
                className="w-full"
              >
                <span className="text-[9px] sm:text-[10px] md:text-xs font-black uppercase tracking-[0.4em] text-primary mb-6 sm:mb-8 block font-mono">Inquiry // 03</span>
                <h1 className="text-fluid-h1 font-black text-foreground leading-[0.9] tracking-tighter uppercase italic text-wrap">
                  LET'S BUILD <br /> <span className="text-muted-foreground italic">LEVERAGE.</span>
                </h1>
              </motion.div>
            </div>

            <div className="lg:col-span-5 space-y-8 md:space-y-12 w-full">
              <div className="clay-industrial p-6 xs:p-8 md:p-12 bg-card border-border hover:border-primary/20 transition-all duration-700 rounded-[2rem] sm:rounded-[3rem]">
                <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tighter mb-8 sm:mb-10 italic text-foreground border-b border-border pb-6">Technical HQ</h3>
                <div className="space-y-8 sm:space-y-10">
                  <div className="flex items-center gap-4 sm:gap-6 group">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-foreground/[0.03] border border-border flex items-center justify-center text-primary transition-all group-hover:bg-primary group-hover:text-white shadow-xl flex-shrink-0">
                      <Mail size={20} className="sm:w-[24px] sm:h-[24px]" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[9px] font-black text-muted-foreground uppercase tracking-[0.2em] mb-1">Direct Signal</p>
                      <p className="text-base md:text-lg font-black text-foreground tracking-tight break-all italic">devtoontechnologies@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 sm:gap-6 group">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-foreground/[0.03] border border-border flex items-center justify-center text-primary transition-all group-hover:bg-primary group-hover:text-white shadow-xl flex-shrink-0">
                      <Phone size={20} className="sm:w-[24px] sm:h-[24px]" />
                    </div>
                    <div>
                      <p className="text-[9px] font-black text-muted-foreground uppercase tracking-[0.2em] mb-1">Support Signal</p>
                      <div className="flex flex-col">
                        <a href="tel:8111903156" className="text-base md:text-lg font-black text-foreground uppercase tracking-tight italic hover:text-primary transition-colors">8111903156</a>
                        <a href="tel:7594050056" className="text-base md:text-lg font-black text-foreground uppercase tracking-tight italic hover:text-primary transition-colors">7594050056</a>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 sm:gap-6 group">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-foreground/[0.03] border border-border flex items-center justify-center text-primary transition-all group-hover:bg-primary group-hover:text-white shadow-xl flex-shrink-0">
                      <Shield size={20} className="sm:w-[24px] sm:h-[24px]" />
                    </div>
                    <div>
                      <p className="text-[9px] font-black text-muted-foreground uppercase tracking-[0.2em] mb-1">SLA // Guarantee</p>
                      <p className="text-base md:text-lg font-black text-foreground uppercase tracking-tight italic">24-Hour Response Logic</p>
                    </div>
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
                className="clay-industrial p-6 xs:p-8 md:p-10 lg:p-12 border-border w-full bg-card shadow-2xl rounded-[2rem] sm:rounded-[3rem]"
              >
                {/* Honeypot field - hidden from users */}
                <div className="hidden" aria-hidden="true">
                  <input
                    type="text"
                    name="honeypot"
                    tabIndex={-1}
                    autoComplete="off"
                    value={form.honeypot}
                    onChange={(e) => setForm({ ...form, honeypot: e.target.value })}
                  />
                </div>

                <div className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    <div className="space-y-3">
                      <div className="flex justify-between items-center px-2">
                        <label className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.2em] italic">01. Identity</label>
                        {touched.name && errors.name && <span className="text-[8px] font-black text-red-500 uppercase tracking-widest">{errors.name}</span>}
                      </div>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onBlur={() => handleBlur("name")}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className={`w-full bg-background/50 rounded-2xl px-8 py-4 text-sm font-black text-foreground placeholder:text-muted-foreground/30 border ${touched.name && errors.name ? 'border-red-500/50' : 'border-border'} focus:border-primary outline-none transition-all shadow-inner`}
                        placeholder="ENTER NAME"
                      />
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center px-2">
                        <label className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.2em] italic">02. Signal Address</label>
                        {touched.email && errors.email && <span className="text-[8px] font-black text-red-500 uppercase tracking-widest">{errors.email}</span>}
                      </div>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onBlur={() => handleBlur("email")}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className={`w-full bg-background/50 rounded-2xl px-8 py-4 text-sm font-black text-foreground placeholder:text-muted-foreground/30 border ${touched.email && errors.email ? 'border-red-500/50' : 'border-border'} focus:border-primary outline-none transition-all shadow-inner`}
                        placeholder="ENTER EMAIL"
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.2em] px-2 italic">03. Voice Link</label>
                    <input
                      type="tel"
                      value={form.phone}
                      onBlur={() => handleBlur("phone")}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full bg-background/50 rounded-2xl px-8 py-4 text-sm font-black text-foreground placeholder:text-muted-foreground/30 border border-border focus:border-primary outline-none transition-all shadow-inner"
                      placeholder="+XX XXXXX XXXXX"
                    />
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between items-center px-2">
                      <label className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.2em] italic">04. Project Payload</label>
                      {touched.message && errors.message && <span className="text-[8px] font-black text-red-500 uppercase tracking-widest">{errors.message}</span>}
                    </div>
                    <textarea
                      required
                      rows={4}
                      value={form.message}
                      onBlur={() => handleBlur("message")}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className={`w-full bg-background/50 rounded-3xl px-8 py-5 text-sm font-black text-foreground placeholder:text-muted-foreground/30 border ${touched.message && errors.message ? 'border-red-500/50' : 'border-border'} focus:border-primary outline-none transition-all resize-none shadow-inner`}
                      placeholder="DESCRIBE THE TARGET OBJECTIVES..."
                    />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={sending}
                    className="btn-clay btn-clay-primary w-full h-14 xs:h-16 md:h-20 flex items-center justify-center gap-4 text-[10px] xs:text-xs font-black uppercase tracking-[0.4em] shadow-glow shadow-primary/20"
                  >
                    {sending ? "TRANSMITTING..." : "INITIALIZE INQUIRY"}
                    {!sending && <ArrowRight size={20} />}
                  </motion.button>

                  <div className="flex items-center justify-center gap-3 pt-2 opacity-30">
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
