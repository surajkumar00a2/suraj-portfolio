'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import projects from '@/data/projects';
import ScrollReveal from './ui/ScrollReveal';
import SectionHeader from './ui/SectionHeader';

function ProjectModal({ project, onClose }) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
          className="glass-strong glow-border rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
        >
          {/* Modal Header */}
          <div className="p-6 border-b border-border">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-2xl font-bold text-slate-100 mb-2">{project.title}</h3>
                <p className="text-slate-300">{project.description}</p>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-lg hover:bg-background-light transition-colors"
              >
                <svg className="w-5 h-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          {/* Modal Content */}
          <div className="p-6 space-y-6">
            {/* Architecture Diagram Placeholder */}
            <div className="glass rounded-xl p-6">
              <h4 className="text-sm font-medium text-slate-400 mb-4 uppercase tracking-wider">Pipeline Architecture</h4>
              <div className="flex flex-wrap items-center justify-center gap-4">
                {['Source', 'Ingest', 'Transform', 'Store', 'Serve'].map((stage, i) => (
                  <div key={stage} className="flex items-center">
                    <div className="px-4 py-2 rounded-lg bg-primary/10 border border-primary/30 text-primary text-sm font-medium">
                      {stage}
                    </div>
                    {i < 4 && (
                      <svg className="w-4 h-4 text-primary/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack */}
            <div>
              <h4 className="text-sm font-medium text-slate-400 mb-3 uppercase tracking-wider">Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full text-sm font-medium bg-accent/10 text-accent border border-accent/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Key Achievements */}
            <div>
              <h4 className="text-sm font-medium text-slate-400 mb-3 uppercase tracking-wider">Key Achievements</h4>
              <ul className="space-y-2">
                {project.achievements.map((achievement, i) => (
                  <li key={i} className="flex items-start gap-2 text-slate-300">
                    <span className="text-primary mt-1">↳</span>
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>

            {/* Links */}
            <div className="flex gap-4 pt-4 border-t border-border">
              {project.liveDashboard && (
                <a
                  href={project.liveDashboard}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-primary text-background font-semibold hover:shadow-glow transition-all"
                >
                  View Live Dashboard
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              )}
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg glass glow-border text-slate-100 font-semibold hover:border-primary/50 transition-all ${
                  project.liveDashboard ? 'flex-1' : 'w-full'
                }`}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                View Code
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

function FeaturedProjectCard({ project, onClick }) {
  return (
    <ScrollReveal>
      <motion.div
        whileHover={{ y: -5 }}
        onClick={onClick}
        className="dashboard-card group cursor-pointer relative overflow-hidden border-2 border-primary/30"
      >
        {/* Featured Badge */}
        <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-primary/20 border border-primary/40 text-primary text-xs font-semibold">
          ★ Featured
        </div>

        {/* Header */}
        <div className="mb-4">
          <h3 className="text-xl font-bold text-slate-100 group-hover:text-primary transition-colors mb-2">
            {project.title}
          </h3>
          <p className="text-sm text-slate-300 line-clamp-2">{project.description}</p>
        </div>

        {/* Key Achievements */}
        <div className="space-y-2 mb-4">
          {project.achievements.slice(0, 3).map((achievement, i) => (
            <div key={i} className="glass rounded-lg p-3 border-l-2 border-primary">
              <p className="text-sm text-slate-300">
                <span className="text-primary">↳</span> {achievement}
              </p>
            </div>
          ))}
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 rounded text-xs font-mono bg-background-light text-slate-400 border border-border"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Hover indicator */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity" />
      </motion.div>
    </ScrollReveal>
  );
}

function ProjectCard({ project, index }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <ScrollReveal delay={index * 0.1}>
        <motion.div
          whileHover={{ y: -5 }}
          onClick={() => setIsModalOpen(true)}
          className="dashboard-card group cursor-pointer relative overflow-hidden"
        >
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-lg font-bold text-slate-100 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-slate-300 mt-1 line-clamp-2">{project.description}</p>
            </div>
            <div className="flex gap-2">
              {project.liveDashboard && (
                <span className="px-2 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  Live
                </span>
              )}
            </div>
          </div>

          {/* Key Achievements */}
          <div className="space-y-2 mb-4">
            {project.achievements.slice(0, 2).map((achievement, i) => (
              <div key={i} className="flex items-start gap-2">
                <span className="text-primary mt-0.5">↳</span>
                <p className="text-sm text-slate-400 line-clamp-2">{achievement}</p>
              </div>
            ))}
          </div>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-1.5">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 rounded text-[10px] font-mono bg-background-light text-slate-400 border border-border"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Hover indicator */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity" />
        </motion.div>
      </ScrollReveal>

      {isModalOpen && (
        <ProjectModal project={project} onClose={() => setIsModalOpen(false)} />
      )}
    </>
  );
}

export default function Projects() {
  const [showOtherProjects, setShowOtherProjects] = useState(false);
  const featuredProjects = projects.slice(0, 2);
  const otherProjects = projects.slice(2);

  return (
    <section id="projects" className="py-16 relative overflow-hidden">
      <div className="relative z-10 max-w-content mx-auto px-6">
        <SectionHeader
          label="Portfolio"
          title="Featured Projects"
          description="Production-grade data engineering projects with measurable business impact."
        />

        {/* Featured Projects - 2 Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {featuredProjects.map((project) => (
            <FeaturedProjectCard
              key={project.id}
              project={project}
              onClick={() => window.open(project.liveDashboard || project.github, '_blank')}
            />
          ))}
        </div>

        {/* Other Projects Toggle */}
        <div className="text-center">
          <button
            onClick={() => setShowOtherProjects(!showOtherProjects)}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg glass glow-border text-slate-300 hover:text-primary transition-colors"
          >
            <span>{showOtherProjects ? 'Hide' : 'Show'} Other Projects</span>
            <motion.svg
              animate={{ rotate: showOtherProjects ? 180 : 0 }}
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </motion.svg>
          </button>
        </div>

        {/* Other Projects - Collapsible */}
        <AnimatePresence>
          {showOtherProjects && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                {otherProjects.map((project, index) => (
                  <ProjectCard key={project.id} project={project} index={index} />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
