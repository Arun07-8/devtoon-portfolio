"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "Technical Capabilities",
    answer: "We provide end-to-end mission-critical digital systems including enterprise SaaS architectures, real-time analytics, and high-performance 3D/AR web environments built for infinite scale.",
  },
  {
    question: "The Workflow Architecture",
    answer: "Our process is engineering-first. We start with strategic technical audits, followed by UI/UX logic architecture, iterative high-stakes development cycles, and rigorous performance testing.",
  },
  {
    question: "Post-Launch Engineering",
    answer: "Yes, we offer comprehensive performance monitoring, security updates, and technical scaling support to ensure your digital ecosystem maintains its competitive edge indefinitely.",
  },
  {
    question: "Bespoke Technical Features",
    answer: "Absolutely. We specialize in building unique technical leverage. Whether it's complex distributed system integration or custom neural intelligence layers, we architect it with precision.",
  },
];

export const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="section-padding bg-background w-full overflow-hidden">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 sm:mb-24 md:mb-32">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-primary font-black text-xs uppercase tracking-[0.6em] mb-8 block font-mono"
            >
              Signal // Clarity
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-fluid-h2 text-foreground font-black uppercase tracking-tighter italic"
            >
              FREQUENT <br /><span className="gradient-text italic">QUESTIONS.</span>
            </motion.h2>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card border border-border rounded-[--radius] overflow-hidden transition-all duration-500 hover:border-primary/20"
              >
                <button
                  onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                  className="w-full p-6 xs:p-8 sm:p-10 md:p-12 flex items-center justify-between text-left transition-colors"
                >
                  <span className="text-lg sm:text-2xl md:text-3xl font-black text-foreground italic tracking-tighter uppercase pr-4">
                    {faq.question}
                  </span>
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-border flex items-center justify-center text-primary transition-all duration-500 bg-foreground/[0.02] flex-shrink-0">
                    {activeIndex === index ? <Minus size={18} /> : <Plus size={18} />}
                  </div>
                </button>
                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <div className="px-6 pb-8 xs:px-8 xs:pb-10 sm:px-10 sm:pb-12 md:px-12 md:pb-16 text-muted-foreground text-fluid-body leading-relaxed font-medium italic opacity-80 border-t border-border pt-6 sm:pt-8">
                        "{faq.answer}"
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
