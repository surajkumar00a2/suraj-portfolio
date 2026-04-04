'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import projects from '@/data/projects';
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
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-zinc-900 border border-border rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto"
        >
          <div className="p-6 border-b border-border">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-xl font-bold text-zinc-100 mb-1">{project.title}</h3>
                <p className="text-sm text-zinc-400">{project.description}</p>
              </div>
              <button
                onClick={onClose}
                className="p-1.5 rounded text-zinc-500 hover:text-zinc-300 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          <div className="p-6 space-y-6">
            <div>
              <h4 className="text-xs font-medium text-zinc-500 uppercase tracking-wider mb-3">Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span key={tech} className="tech-badge">{tech}</span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xs font-medium text-zinc-500 uppercase tracking-wider mb-3">Key Achievements</h4>
              <ul className="space-y-2">
                {project.achievements.map((achievement, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-zinc-400">
                    <span className="text-primary mt-0.5">-</span>
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex gap-3 pt-4 border-t border-border">
              {project.liveDashboard && (
                <a
                  href={project.liveDashboard}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-md bg-primary text-zinc-900 font-medium text-sm hover:bg-primary-dark transition-colors"
                >
                  View Live
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              )}
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-md border border-border text-zinc-300 font-medium text-sm hover:border-primary/30 transition-colors ${
                  project.liveDashboard ? 'flex-1' : 'w-full'
                }`}
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
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

function ProjectCard({ project, index, featured }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
        onClick={() => setIsModalOpen(true)}
        className="p-5 rounded-lg border border-border hover:border-primary/20 transition-colors cursor-pointer group"
      >
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="text-base font-semibold text-zinc-100 group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            <p className="text-sm text-zinc-500 mt-1 line-clamp-2">{project.description}</p>
          </div>
          {featured && (
            <span className="text-xs text-primary font-mono flex-shrink-0 ml-2">featured</span>
          )}
        </div>

        <div className="space-y-1.5 mb-4">
          {project.achievements.slice(0, 2).map((achievement, i) => (
            <p key={i} className="text-sm text-zinc-500 flex items-start gap-2">
              <span className="text-primary">-</span>
              <span className="line-clamp-1">{achievement}</span>
            </p>
          ))}
        </div>

        <div className="flex flex-wrap gap-1.5">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 rounded text-[10px] font-mono text-zinc-500 border border-zinc-800"
            >
              {tech}
            </span>
          ))}
        </div>
      </motion.div>

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
    <section id="projects" className="py-20">
      <div className="max-w-content mx-auto px-6">
        <SectionHeader
          label="Portfolio"
          title="Featured Projects"
          description="Production-grade data engineering projects with measurable business impact."
          stage="03"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} featured />
          ))}
        </div>

        {otherProjects.length > 0 && (
          <>
            <div className="text-center">
              <button
                onClick={() => setShowOtherProjects(!showOtherProjects)}
                className="inline-flex items-center gap-2 px-4 py-2 text-sm text-zinc-500 hover:text-zinc-300 transition-colors"
              >
                {showOtherProjects ? 'Hide' : 'Show'} other projects
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

            <AnimatePresence>
              {showOtherProjects && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    {otherProjects.map((project, index) => (
                      <ProjectCard key={project.id} project={project} index={index} />
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </>
        )}
      </div>
    </section>
  );
}
