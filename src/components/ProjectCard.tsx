"use client";

import { motion } from "framer-motion";
import { ExternalLink, Code as Github, ArrowRight } from "lucide-react";

interface ProjectCardProps {
  title: string;
  category: string;
  description: string;
  tech: string[];
  image?: string;
  liveUrl?: string;
  githubUrl?: string;
}

export const ProjectCard = ({
  title, 
  category,
  description,
  tech,
  image,
  liveUrl = "#",
  githubUrl = "#",
}: ProjectCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="group relative flex flex-col glass rounded-2xl overflow-hidden border border-border/50 hover:border-primary/30 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-primary/5 bg-card/40 backdrop-blur-md"
    >
      {/* Project Preview */}
      <div className="relative aspect-video overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center">
          <motion.div
            initial={{ y: 10, opacity: 0 }}
            whileHover={{ y: 0, opacity: 1 }}
            className="flex gap-3"
          >
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-primary text-primary-foreground rounded-xl text-sm font-semibold flex items-center gap-2 hover:scale-105 transition-transform"
            >
              View Project <ExternalLink size={14} />
            </a>
          </motion.div>
        </div>
        {image ? (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        ) : (
          <div className="w-full h-full clay-inset flex items-center justify-center p-8">
            <div className="w-full h-full rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center opacity-40">
              <span className="text-4xl font-bold text-primary/20">{title[0]}</span>
            </div>
          </div>
        )}
        <div className="absolute top-3 left-3 z-20">
          <span className="px-3 py-1 bg-background/80 backdrop-blur-md border border-border/50 rounded-lg text-[10px] font-bold uppercase tracking-wider text-primary shadow-sm">
            {category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-xl font-display font-bold text-foreground group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm mt-2 line-clamp-2 leading-relaxed">
          {description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-1.5 mt-4 mb-6">
          {tech.map((t) => (
            <span
              key={t}
              className="px-2.5 py-1 bg-secondary/50 border border-border/50 rounded-lg text-[10px] font-medium text-muted-foreground hover:bg-secondary transition-colors"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="mt-auto pt-4 flex items-center justify-between border-t border-border/30">
          <div className="flex gap-2">
            <a
              href={liveUrl}
              className="p-2.5 rounded-xl bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all duration-300"
              title="Live Demo"
            >
              <ExternalLink size={16} />
            </a>
            <a
              href={githubUrl}
              className="p-2.5 rounded-xl bg-secondary/50 text-muted-foreground hover:bg-foreground hover:text-background transition-all duration-300"
              title="Source Code"
            >
              <Github size={16} />
            </a>
          </div>
          
          <a
            href={liveUrl}
            className="flex items-center gap-1.5 text-sm font-bold text-foreground/80 hover:text-primary transition-colors"
          >
            Details <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

