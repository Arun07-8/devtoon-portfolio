"use client";

import { motion, AnimatePresence } from "framer-motion";

interface LoadingScreenProps {
  isLoading: boolean;
}

export const LoadingScreen = ({ isLoading }: LoadingScreenProps) => {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background"
        >
          {/* Floating blobs */}
          <motion.div
            className="absolute w-64 h-64 rounded-full bg-primary/10 blur-3xl"
            animate={{ x: [0, 40, 0], y: [0, -30, 0], scale: [1, 1.2, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            style={{ top: "20%", left: "30%" }}
          />
          <motion.div
            className="absolute w-48 h-48 rounded-full bg-accent/10 blur-3xl"
            animate={{ x: [0, -30, 0], y: [0, 40, 0], scale: [1.1, 0.9, 1.1] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            style={{ bottom: "25%", right: "25%" }}
          />

          {/* Logo reveal */}
          <motion.div className="relative z-10 text-center">
            <motion.div
              initial={{ scale: 0.5, opacity: 0, rotateY: -90 }}
              animate={{ scale: 1, opacity: 1, rotateY: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="clay-lg p-8 mb-6 inline-block"
            >
              <span className="text-4xl md:text-5xl font-display font-bold gradient-text">
                D
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-2xl md:text-3xl font-display font-bold text-foreground"
            >
              Devtoon{" "}
              <span className="gradient-text">Solutions</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              className="text-muted-foreground mt-2 text-sm"
            >
              Crafting Digital Excellence
            </motion.p>

            {/* Loading bar */}
            <motion.div className="mt-8 w-48 h-1 rounded-full bg-secondary mx-auto overflow-hidden">
              <motion.div
                className="h-full rounded-full"
                style={{ background: "var(--gradient-warm)" }}
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 2, ease: "easeInOut" }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

