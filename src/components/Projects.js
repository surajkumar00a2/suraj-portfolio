'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import projects from '@/data/projects';
import ScrollReveal from './ui/ScrollReveal';
import SectionHeader from './ui/SectionHeader';

// Sample data for charts
const generateChartData = (points = 7) => {
  return Array.from({ length: points }, (_, i) => ({
    name: `Day ${i + 1}`,
    value: Math.floor(Math.random() * 5000) + 1000,
    throughput: Math.floor(Math.random() * 100) + 50,
  }));
};

const chartColors = {
  primary: '#00e5ff',
  accent: '#7c4dff',
  grid: 'rgba(0, 229, 255, 0.1)',
};

function MiniChart({ type = 'line', color = chartColors.primary }) {
  const data = generateChartData(7);

  const ChartComponent = type === 'area' ? AreaChart : LineChart;
  const DataComponent = type === 'area' ? Area : Line;

  return (
    <div className="h-24 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <ChartComponent data={data}>
          <defs>
            <linearGradient id={`gradient-${type}`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor={color} stopOpacity={0.3} />
              <stop offset="95%" stopColor={color} stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke={chartColors.grid} />
          <XAxis dataKey="name" hide />
          <YAxis hide />
          <Tooltip
            contentStyle={{
              backgroundColor: '#111827',
              border: '1px solid rgba(0, 229, 255, 0.2)',
              borderRadius: '8px',
              fontSize: '12px',
            }}
            itemStyle={{ color: color }}
          />
          <DataComponent
            type="monotone"
            dataKey="value"
            stroke={color}
            strokeWidth={2}
            fill={type === 'area' ? `url(#gradient-${type})` : 'none'}
            dot={false}
          />
        </ChartComponent>
      </ResponsiveContainer>
    </div>
  );
}

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
                <h3 className="text-2xl font-bold text-text mb-2">{project.title}</h3>
                <p className="text-text-muted">{project.description}</p>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-lg hover:bg-background-light transition-colors"
              >
                <svg className="w-5 h-5 text-text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          {/* Modal Content */}
          <div className="p-6 space-y-6">
            {/* Architecture Diagram Placeholder */}
            <div className="glass rounded-xl p-6">
              <h4 className="text-sm font-medium text-text-muted mb-4 uppercase tracking-wider">Pipeline Architecture</h4>
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
              <h4 className="text-sm font-medium text-text-muted mb-3 uppercase tracking-wider">Technologies</h4>
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
              <h4 className="text-sm font-medium text-text-muted mb-3 uppercase tracking-wider">Key Achievements</h4>
              <ul className="space-y-2">
                {project.achievements.map((achievement, i) => (
                  <li key={i} className="flex items-start gap-2 text-text">
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
                className={`inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg glass glow-border text-text font-semibold hover:border-primary/50 transition-all ${
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

function ProjectCard({ project, index }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Generate random metrics for each project
  const metrics = {
    rowsProcessed: ['10M+', '5M+', '2M+', '1M+'][index % 4],
    latency: ['1.2s', '2.5s', '0.8s', '3.1s'][index % 4],
    reliability: ['99.8%', '99.5%', '99.9%', '99.2%'][index % 4],
  };

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
              <h3 className="text-lg font-bold text-text group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-text-muted mt-1 line-clamp-2">{project.description}</p>
            </div>
            <div className="flex gap-2">
              {project.liveDashboard && (
                <span className="px-2 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  Live
                </span>
              )}
            </div>
          </div>

          {/* Metrics Row */}
          <div className="grid grid-cols-3 gap-3 mb-4">
            <div className="glass rounded-lg p-2 text-center">
              <div className="text-xs text-text-muted">Rows</div>
              <div className="text-sm font-semibold text-primary">{metrics.rowsProcessed}</div>
            </div>
            <div className="glass rounded-lg p-2 text-center">
              <div className="text-xs text-text-muted">Latency</div>
              <div className="text-sm font-semibold text-accent">{metrics.latency}</div>
            </div>
            <div className="glass rounded-lg p-2 text-center">
              <div className="text-xs text-text-muted">Uptime</div>
              <div className="text-sm font-semibold text-emerald-400">{metrics.reliability}</div>
            </div>
          </div>

          {/* Mini Chart */}
          <div className="mb-4">
            <MiniChart type={index % 2 === 0 ? 'area' : 'line'} color={index % 2 === 0 ? chartColors.primary : chartColors.accent} />
          </div>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-1.5">
            {project.stack.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 rounded text-[10px] font-mono bg-background-light text-text-muted border border-border"
              >
                {tech}
              </span>
            ))}
            {project.stack.length > 4 && (
              <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-background-light text-text-muted border border-border"
              >
                +{project.stack.length - 4}
              </span>
            )}
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
  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="relative z-10 max-w-content mx-auto px-6">
        <SectionHeader
          label="Portfolio"
          title="Featured Projects"
          description="Production-grade data engineering projects with real-time metrics and performance dashboards."
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
