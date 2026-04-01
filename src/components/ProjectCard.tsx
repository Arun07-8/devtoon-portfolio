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
      className="group card-minimal flex flex-col h-full"
    >
      {/* Project Preview */}
      <div className="relative aspect-video overflow-hidden rounded-t-[--radius]">
        <div className="absolute inset-0 bg-foreground/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center">
          <motion.div
            initial={{ y: 5, opacity: 0 }}
            whileHover={{ y: 0, opacity: 1 }}
          >
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-foreground text-background rounded-full text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 hover:scale-105 transition-transform"
            >
              Explore <ExternalLink size={12} />
            </a>
          </motion.div>
        </div>
        
        {image ? (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover grayscale transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0"
          />
        ) : (
          <div className="w-full h-full bg-secondary/30 flex items-center justify-center p-8">
             <span className="text-4xl font-bold text-foreground/5 uppercase tracking-tighter">{title[0]}</span>
          </div>
        )}
        
        <div className="absolute top-4 left-4 z-20">
          <span className="px-3 py-1 bg-background/90 text-foreground border border-border/50 rounded-full text-[9px] font-bold uppercase tracking-widest shadow-sm">
            {category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-lg font-bold text-foreground leading-tight tracking-tight group-hover:text-foreground/80 transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground text-xs mt-2 line-clamp-2 leading-relaxed">
          {description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-1.5 mt-6 mb-8">
          {tech.map((t) => (
            <span
              key={t}
              className="px-2.5 py-1 bg-secondary text-foreground text-[8px] font-bold uppercase tracking-widest rounded transition-colors hover:bg-foreground hover:text-background"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="mt-auto pt-4 flex items-center justify-between border-t border-border/40">
          <div className="flex gap-2">
            <a
              href={liveUrl}
              className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-foreground hover:bg-foreground hover:text-background transition-all"
              title="Live Demo"
            >
              <ExternalLink size={14} />
            </a>
            <a
              href={githubUrl}
              className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-foreground hover:bg-foreground hover:text-background transition-all"
              title="Source Code"
            >
              <Github size={14} />
            </a>
          </div>

          <a
            href={liveUrl}
            className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors"
          >
            Details <ArrowRight size={12} />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

