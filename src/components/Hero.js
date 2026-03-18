'use client';

import { motion } from 'framer-motion';
import profile from '@/data/profile';
import TerminalTyping from './ui/TerminalTyping';
import ScrollReveal from './ui/ScrollReveal';

const techStack = [
  'Python', 'PySpark', 'SQL', 'AWS', 'Snowflake', 'Airflow', 'Pandas', 'dbt'
];

const terminalLines = [
  'Initializing analytics environment...',
  'Loading data pipelines...',
  'Connecting to data lake...',
  'Optimizing query performance...',
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Gradient orb */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[120px]" />

        {/* Grid overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-50" />
      </div>

      <div className="relative z-10 max-w-content mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Status Badge */}
            <ScrollReveal>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass glow-border">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-sm font-mono text-primary">
                  Available for opportunities
                </span>
              </div>
            </ScrollReveal>

            {/* Name & Title */}
            <div className="space-y-4">
              <ScrollReveal delay={0.1}>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                  <span className="text-slate-100">{profile.name.split(' ')[0]} </span>
                  <span className="gradient-text">{profile.name.split(' ')[1]}</span>
                </h1>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <p className="text-xl md:text-2xl text-primary font-mono">
                  {profile.title}
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.25}>
                <p className="text-sm text-slate-400 mt-1 mb-3">
                  Previously @ MapUp (TollGuru) · 29 European markets · Enterprise clients incl. Lyft & FirstFleet
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.3}>
                <p className="text-lg text-slate-300 max-w-lg leading-relaxed">
                  {profile.tagline}
                </p>
              </ScrollReveal>

              {/* Stats Strip */}
              <ScrollReveal delay={0.35}>
                <div className="flex flex-wrap gap-4 mt-4">
                  <div className="glass glow-border rounded-lg px-4 py-2 text-center">
                    <div className="text-[#3b82f6] font-bold text-lg">89% → 96%</div>
                    <div className="text-slate-400 text-xs">Dataset Accuracy</div>
                  </div>
                  <div className="glass glow-border rounded-lg px-4 py-2 text-center">
                    <div className="text-[#3b82f6] font-bold text-lg">45% Faster</div>
                    <div className="text-slate-400 text-xs">SQL Query Speed</div>
                  </div>
                  <div className="glass glow-border rounded-lg px-4 py-2 text-center">
                    <div className="text-[#3b82f6] font-bold text-lg">99.2% Uptime</div>
                    <div className="text-slate-400 text-xs">AWS Infrastructure</div>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Tech Stack Badges */}
            <ScrollReveal delay={0.4}>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech, index) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="tech-badge"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </ScrollReveal>

            {/* CTA Buttons */}
            <ScrollReveal delay={0.5}>
              <div className="flex flex-wrap gap-4">
                <motion.a
                  href="#projects"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-background font-semibold hover:shadow-glow-lg transition-all"
                >
                  View Projects
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </motion.a>

                <motion.a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg glass glow-border text-slate-100 font-semibold"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  GitHub
                </motion.a>

                <motion.a
                  href={profile.resumePath}
                  target="_blank"
                  rel="noopener"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg glass glow-border-accent text-slate-100 font-semibold"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 3H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Resume
                </motion.a>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column - Terminal */}
          <div className="hidden lg:block">
            <ScrollReveal delay={0.3} direction="left">
              <div className="relative">
                {/* Decorative elements */}
                <div className="absolute -top-10 -right-10 w-20 h-20 border border-primary/20 rounded-lg animate-float" />
                <div className="absolute -bottom-10 -left-10 w-16 h-16 border border-accent/20 rounded-full animate-float-delayed" />

                <TerminalTyping
                  lines={terminalLines}
                  typingSpeed={40}
                  lineDelay={600}
                />
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-xs text-slate-400 font-mono">Scroll to explore</span>
            <div className="w-6 h-10 rounded-full border-2 border-primary/30 flex justify-center pt-2">
              <motion.div
                animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1.5 h-1.5 rounded-full bg-primary"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
