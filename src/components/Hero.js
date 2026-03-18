'use client';

import { motion } from 'framer-motion';
import profile from '@/data/profile';
import TerminalTyping from './ui/TerminalTyping';
import ScrollReveal from './ui/ScrollReveal';

const techStack = [
  'Python', 'SQL', 'AWS', 'Airflow', 'PostgreSQL', 'dbt', 'Docker', 'Git'
];

const terminalLines = [
  '29 European markets data validated...',
  'Lyft & FirstFleet queries optimized...',
  '15+ production ETL pipelines active...',
];

// Quick stats for immediate impact
const quickStats = [
  { value: '3+', label: 'Years', sub: 'Experience' },
  { value: '15+', label: 'Production', sub: 'Pipelines' },
  { value: '500+', label: 'Data', sub: 'Sources' },
  { value: '96%', label: 'Accuracy', sub: 'Achieved' },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-grid-pattern opacity-50" />
      </div>

      <div className="relative z-10 max-w-content mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-6">
            {/* Status Badge */}
            <ScrollReveal>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass glow-border">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-sm font-mono text-primary">
                  Available for opportunities
                </span>
              </div>
            </ScrollReveal>

            {/* Name & Title */}
            <div className="space-y-3">
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
                <p className="text-sm text-slate-400">
                  Previously @ MapUp (TollGuru) · 29 European markets · Enterprise clients incl. Lyft & FirstFleet
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.3}>
                <p className="text-lg text-slate-300 max-w-lg leading-relaxed">
                  {profile.tagline}
                </p>
              </ScrollReveal>
            </div>

            {/* Quick Stats - Immediate Impact */}
            <ScrollReveal delay={0.35}>
              <div className="flex flex-wrap gap-3">
                {quickStats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="glass glow-border rounded-lg px-4 py-3 text-center min-w-[90px]"
                  >
                    <div className="text-2xl font-bold text-primary">{stat.value}</div>
                    <div className="text-xs text-slate-400">{stat.label}</div>
                    <div className="text-[10px] text-slate-500">{stat.sub}</div>
                  </motion.div>
                ))}
              </div>
            </ScrollReveal>

            {/* Key Achievements - Scannable */}
            <ScrollReveal delay={0.4}>
              <div className="glass rounded-lg p-4 border-l-4 border-primary">
                <h3 className="text-sm font-semibold text-slate-200 mb-2">Key Impact</h3>
                <ul className="space-y-1 text-sm text-slate-400">
                  <li className="flex items-center gap-2">
                    <span className="text-primary">↑</span>
                    Raised dataset accuracy 89% → 96%
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">⚡</span>
                    Cut SQL query times by 45%
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">🚀</span>
                    Built 15+ production ETL pipelines
                  </li>
                </ul>
              </div>
            </ScrollReveal>

            {/* Tech Stack Badges */}
            <ScrollReveal delay={0.45}>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech, index) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 + index * 0.05 }}
                    className="tech-badge"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </ScrollReveal>

            {/* CTA Buttons - Recruiter Quick Actions */}
            <ScrollReveal delay={0.5}>
              <div className="flex flex-wrap gap-3 pt-2">
                <motion.a
                  href="#projects"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-white font-semibold hover:shadow-glow-lg transition-all text-sm"
                >
                  View Projects
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </motion.a>

                <motion.a
                  href={profile.resumePath}
                  target="_blank"
                  rel="noopener"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg glass glow-border text-slate-100 font-semibold text-sm"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 3H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Resume
                </motion.a>

                <motion.a
                  href={`mailto:${profile.email}`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg glass glow-border text-slate-100 font-semibold text-sm"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Contact
                </motion.a>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column - Terminal */}
          <div className="hidden lg:block">
            <ScrollReveal delay={0.3} direction="left">
              <div className="relative">
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
