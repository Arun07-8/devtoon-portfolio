"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ClayCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export const ClayCard = ({ children, className = "", hover = true }: ClayCardProps) => (
  <motion.div
    whileHover={hover ? { scale: 1.02, y: -4 } : undefined}
    whileTap={hover ? { scale: 0.98 } : undefined}
    transition={{ type: "spring", stiffness: 300, damping: 20 }}
    className={`clay p-6 md:p-8 rounded-2xl ${className}`}
  >
    {children}
  </motion.div>
);

