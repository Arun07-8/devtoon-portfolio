"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Send, Mail, ArrowRight, MessageSquare, MapPin } from "lucide-react";
import { toast } from "sonner";

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
          _subject: `New contact from ${form.name}`,
        }),
      });

      if (response.ok) {
        toast.success("Message sent! We'll get back to you soon.");
        setForm({ name: "", email: "", message: "" });
      } else {
        toast.error("Failed to send message. Please try again.");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again later.");
    } finally {
      setSending(false);
    }
  };

  return (
    <main className="bg-background min-h-screen">
      <section className="pt-40 lg:pt-56 pb-32 relative overflow-hidden">
        {/* Background Accents */}
        <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[120px] -translate-y-1/2 -translate-x-1/2" />

        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-start">

            <div className="lg:col-span-5">
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-xs font-bold uppercase tracking-[0.4em] text-accent font-display mb-8 block"
              >
                Get in Touch
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-5xl md:text-8xl font-display font-bold text-foreground leading-[0.9] tracking-tighter"
              >
                Let's Start a <br /> <span className="gradient-text">Conversation</span>.
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-foreground/50 mt-12 font-medium leading-relaxed max-w-md"
              >
                Have a vision you'd like to bring to life? We're ready when you are. Reach out and let's build something exceptional.
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-16 space-y-8"
              >
                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all duration-500">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-foreground/30 uppercase tracking-[0.2em] mb-1">Email us</p>
                    <p className="text-lg font-bold text-foreground group-hover:text-accent transition-colors">devtoontechnologies@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all duration-500">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-foreground/30 uppercase tracking-[0.2em] mb-1">Location</p>
                    <p className="text-lg font-bold text-foreground">Mumbai, India · Remote Worldwide</p>
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7"
            >
              <form
                onSubmit={handleSubmit}
                className="clay-lg p-10 md:p-16 rounded-[4rem] border-border/40 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-12 opacity-[0.03] rotate-12">
                  <MessageSquare size={200} />
                </div>

                <div className="relative z-10 space-y-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <label className="text-[10px] font-black text-foreground/40 uppercase tracking-[0.2em] px-4">Your Name</label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full glass rounded-full px-8 py-5 text-sm font-bold text-foreground placeholder:text-foreground/20 outline-none focus:ring-2 focus:ring-accent/20 transition-all border-border/60 hover:bg-white"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-4">
                      <label className="text-[10px] font-black text-foreground/40 uppercase tracking-[0.2em] px-4">Email Address</label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full glass rounded-full px-8 py-5 text-sm font-bold text-foreground placeholder:text-foreground/20 outline-none focus:ring-2 focus:ring-accent/20 transition-all border-border/60 hover:bg-white"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <label className="text-[10px] font-black text-foreground/40 uppercase tracking-[0.2em] px-4">Message Details</label>
                    <textarea
                      required
                      rows={6}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full glass rounded-[2rem] px-8 py-6 text-sm font-bold text-foreground placeholder:text-foreground/20 outline-none focus:ring-2 focus:ring-accent/20 transition-all border-border/60 hover:bg-white resize-none"
                      placeholder="Tell us about your project vision..."
                    />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={sending}
                    className="w-full flex items-center justify-center gap-3 px-10 py-6 rounded-full text-lg font-black text-white bg-accent shadow-2xl shadow-accent/20 disabled:opacity-70 transition-all uppercase tracking-widest text-[12px]"
                  >
                    {sending ? "Transmitting..." : "Send Message"}
                    {!sending && <ArrowRight size={20} />}
                  </motion.button>

                  <p className="text-center text-[10px] font-bold text-foreground/30 uppercase tracking-widest mt-8">
                    We respond to all inquiries within 24 hours.
                  </p>
                </div>
              </form>
            </motion.div>

          </div>
        </div>
      </section>
    </main>
  );
}
